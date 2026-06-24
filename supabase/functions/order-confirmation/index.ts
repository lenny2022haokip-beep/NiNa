import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CLIENT_EMAIL = Deno.env.get("CLIENT_EMAIL") || "lenny2022haokip@gmail.com"; // Default fallback email for the store owner

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not configured in Supabase. Skipping email notifications.");
      return new Response(
        JSON.stringify({ success: true, message: "Emails skipped: RESEND_API_KEY is not configured." }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const {
      orderNumber,
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
      items,
      subtotal,
      isGift,
      notes,
      paymentMethod,
      paymentId
    } = await req.json();

    const itemsHtml = items
      .map(
        (item: any) =>
          `<li><strong>${item.quantity}x ${item.title}</strong> (${item.variant}) - Rs. ${Number(
            item.price
          ).toLocaleString("en-IN")}</li>`
      )
      .join("");

    const emailHtmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1c1a; line-height: 1.6;">
        <h2 style="border-bottom: 1px solid #e5e5e5; padding-bottom: 12px; font-weight: 300;">Order Confirmation</h2>
        <p>Dear ${customerName},</p>
        <p>Thank you for shopping with <strong>NiNa Collective</strong>. Your order has been placed successfully!</p>
        
        <h3 style="font-weight: 300; margin-top: 24px;">Order Details</h3>
        <p><strong>Order Number:</strong> ${orderNumber}</p>
        <p><strong>Payment Method:</strong> ${paymentMethod} ${paymentId ? `(Payment ID: ${paymentId})` : ""}</p>
        
        <h3 style="font-weight: 300; margin-top: 24px;">Items Ordered</h3>
        <ul style="padding-left: 20px;">
          ${itemsHtml}
        </ul>
        
        <p style="font-size: 1.1rem; margin-top: 16px;"><strong>Total Amount Paid:</strong> Rs. ${Number(
          subtotal
        ).toLocaleString("en-IN")}</p>
        
        ${
          isGift
            ? `<div style="background: #f4f3ef; padding: 16px; border-radius: 4px; margin-top: 16px;">
                <p style="margin: 0; font-size: 0.9rem;">🎁 <strong>Gift Order:</strong> Included custom packaging & handwritten note.</p>
                ${notes ? `<p style="margin: 8px 0 0 0; font-size: 0.85rem; font-style: italic;">"${notes}"</p>` : ""}
               </div>`
            : notes
            ? `<p><strong>Order Notes:</strong> ${notes}</p>`
            : ""
        }
        
        <h3 style="font-weight: 300; margin-top: 24px;">Shipping Address</h3>
        <p style="white-space: pre-line;">${customerAddress}</p>
        <p><strong>Contact Phone:</strong> ${customerPhone}</p>
        
        <p style="margin-top: 32px; border-top: 1px solid #e5e5e5; padding-top: 16px; font-size: 0.85rem; color: #666;">
          For any questions or changes to your order, reply to this email or contact us via WhatsApp.
          <br>
          <strong>NiNa Collective</strong> · Wear Your Roots
        </p>
      </div>
    `;

    // 1. Send confirmation email to Customer
    const customerEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "NiNa Collective <orders@resend.dev>", // Or verified domain
        to: [customerEmail],
        subject: `Order Confirmation - ${orderNumber}`,
        html: emailHtmlBody,
      }),
    });

    // 2. Send notification email to Client (Store Owner)
    const clientEmailRes = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "NiNa Collective Notification <orders@resend.dev>",
        to: [CLIENT_EMAIL],
        subject: `New Order Received - ${orderNumber} (₹${subtotal})`,
        html: `<h3>New Order Received</h3><p>A new order has been paid and created by <strong>${customerName}</strong>.</p>` + emailHtmlBody,
      }),
    });

    if (!customerEmailRes.ok || !clientEmailRes.ok) {
      const customerErr = await customerEmailRes.text();
      const clientErr = await clientEmailRes.text();
      console.error(`Email send failed. Customer response: ${customerErr}. Client response: ${clientErr}`);
      throw new Error("Failed to send one or more confirmation emails.");
    }

    return new Response(JSON.stringify({ success: true, message: "Emails sent successfully." }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
