import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
const CLIENT_EMAIL = Deno.env.get("CLIENT_EMAIL") || "lenny2022haokip@gmail.com"; // Default fallback email for the store owner

const ALLOWED_ORIGINS = ["https://ninabymangsee.com", "https://www.ninabymangsee.com"];

function getCorsHeaders(req: Request) {
  const origin = req.headers.get("origin") || "";
  const allowedOrigin = ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  };
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str: string): string {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

serve(async (req) => {
  const cors = getCorsHeaders(req);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: cors });
  }

  try {
    if (!RESEND_API_KEY) {
      console.warn("RESEND_API_KEY is not configured in Supabase. Skipping email notifications.");
      return new Response(
        JSON.stringify({ success: true, message: "Emails skipped: RESEND_API_KEY is not configured." }),
        { status: 200, headers: { ...cors, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
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
    } = body;

    // Input validation
    if (!orderNumber || !customerName || !customerEmail || !customerPhone || !customerAddress || !items || subtotal === undefined) {
      return new Response(JSON.stringify({ error: "Missing required fields" }), {
        status: 400, headers: { ...cors, "Content-Type": "application/json" }
      });
    }
    if (!validateEmail(customerEmail)) {
      return new Response(JSON.stringify({ error: "Invalid customer email" }), {
        status: 400, headers: { ...cors, "Content-Type": "application/json" }
      });
    }
    if (!Array.isArray(items) || items.length === 0) {
      return new Response(JSON.stringify({ error: "Items must be a non-empty array" }), {
        status: 400, headers: { ...cors, "Content-Type": "application/json" }
      });
    }
    if (typeof subtotal !== 'number' || subtotal <= 0) {
      return new Response(JSON.stringify({ error: "Invalid subtotal" }), {
        status: 400, headers: { ...cors, "Content-Type": "application/json" }
      });
    }

    const safeName = escapeHtml(customerName);
    const safeAddress = escapeHtml(customerAddress);
    const safePhone = escapeHtml(customerPhone);
    const safeNotes = notes ? escapeHtml(String(notes)) : "";
    const safeOrderNumber = escapeHtml(String(orderNumber));
    const safePaymentMethod = paymentMethod ? escapeHtml(String(paymentMethod)) : "N/A";
    const safePaymentId = paymentId ? escapeHtml(String(paymentId)) : "";

    const itemsHtml = items
      .map(
        (item: any) =>
          `<li><strong>${Number(item.quantity) || 1}x ${escapeHtml(String(item.title))}</strong> (${escapeHtml(String(item.variant || "Default"))}) - ₹${Number(item.price).toLocaleString("en-IN")}</li>`
      )
      .join("");

    const emailHtmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1c1c1a; line-height: 1.6;">
        <h2 style="border-bottom: 1px solid #e5e5e5; padding-bottom: 12px; font-weight: 300;">Order Confirmation</h2>
        <p>Dear ${safeName},</p>
        <p>Thank you for shopping with <strong>NiNa Collective</strong>. Your order has been placed successfully!</p>
        
        <h3 style="font-weight: 300; margin-top: 24px;">Order Details</h3>
        <p><strong>Order Number:</strong> ${safeOrderNumber}</p>
        <p><strong>Payment Method:</strong> ${safePaymentMethod}${safePaymentId ? ` (Payment ID: ${safePaymentId})` : ""}</p>
        
        <h3 style="font-weight: 300; margin-top: 24px;">Items Ordered</h3>
        <ul style="padding-left: 20px;">
          ${itemsHtml}
        </ul>
        
        <p style="font-size: 1.1rem; margin-top: 16px;"><strong>Total Amount Paid:</strong> ₹${Number(subtotal).toLocaleString("en-IN")}</p>
        
        ${isGift
          ? `<div style="background: #f4f3ef; padding: 16px; border-radius: 4px; margin-top: 16px;">
              <p style="margin: 0; font-size: 0.9rem;">🎁 <strong>Gift Order:</strong> Included custom packaging & handwritten note.</p>
              ${safeNotes ? `<p style="margin: 8px 0 0 0; font-size: 0.85rem; font-style: italic;">"${safeNotes}"</p>` : ""}
             </div>`
          : safeNotes
            ? `<p><strong>Order Notes:</strong> ${safeNotes}</p>`
            : ""
        }
        
        <h3 style="font-weight: 300; margin-top: 24px;">Shipping Address</h3>
        <p style="white-space: pre-line;">${safeAddress}</p>
        <p><strong>Contact Phone:</strong> ${safePhone}</p>
        
        <p style="margin-top: 32px; border-top: 1px solid #e5e5e5; padding-top: 16px; font-size: 0.85rem; color: #666;">
          For any questions or changes to your order, reply to this email or contact us via WhatsApp.
          <br>
          <strong>NiNa Collective</strong> · Wear Your Roots
        </p>
      </div>
    `;

    const emailPayload = {
      from: "NiNa Collective <orders@resend.dev>",
      to: [customerEmail],
      subject: `Order Confirmation - ${safeOrderNumber}`,
      html: emailHtmlBody,
    };

    const notifyPayload = {
      from: "NiNa Collective Notification <orders@resend.dev>",
      to: [CLIENT_EMAIL],
      subject: `New Order Received - ${safeOrderNumber} (₹${Number(subtotal).toLocaleString("en-IN")})`,
      html: `<h3>New Order Received</h3><p>A new order has been paid and created by <strong>${safeName}</strong>.</p>` + emailHtmlBody,
    };

    const [customerEmailRes, clientEmailRes] = await Promise.all([
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify(emailPayload),
      }),
      fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${RESEND_API_KEY}` },
        body: JSON.stringify(notifyPayload),
      }),
    ]);

    if (!customerEmailRes.ok || !clientEmailRes.ok) {
      console.error("Email send failed for order " + safeOrderNumber);
      throw new Error("Failed to send one or more confirmation emails.");
    }

    return new Response(JSON.stringify({ success: true, message: "Emails sent successfully." }), {
      status: 200,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    return new Response(JSON.stringify({ error: "Failed to process order confirmation" }), {
      status: 400,
      headers: { ...cors, "Content-Type": "application/json" },
    });
  }
});
