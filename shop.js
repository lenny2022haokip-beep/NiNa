// --- Data Definitions (31 Products) ---
let products = {
  1: {
    id: 1,
    title: "Saipikhup Tote Bag",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 1000,
    priceDisplay: "Rs. 1,000",
    desc: "A spacious, heavy-duty shoulder tote featuring the historic Saipikhup ('elephant footprint') pattern, handwoven on a traditional Kuki backstrap loom.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_1.jpg" alt="Saipikhup Tote Bag">`,
    stock_count: 3
  },
  2: {
    id: 2,
    title: "Thangnang Hobo Bag",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 700,
    priceDisplay: "Rs. 700",
    desc: "An elegant, slouchy hobo bag showcasing the classic Thangnang diamond lattice pattern. Fully lined with inner zipper pocket.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_2.jpg" alt="Thangnang Hobo Bag">`,
    stock_count: 2
  },
  3: {
    id: 3,
    title: "Mongvom Shoulder Bag",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 400,
    priceDisplay: "Rs. 400",
    desc: "Structured shoulder bag finished with premium leather trims and organic cotton weave displaying the Kuki Mongvom stripe motif.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_3.jpg" alt="Mongvom Shoulder Bag">`,
    stock_count: 0
  },
  4: {
    id: 4,
    title: "Saipikhup Clutch",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 1000,
    priceDisplay: "Rs. 1,000",
    desc: "A sleek, hand-held clutch featuring a striking saffron and crimson Saipikhup pattern. Perfect for evening outings.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_4.jpg" alt="Saipikhup Clutch">`,
    stock_count: 5
  },
  5: {
    id: 5,
    title: "Thangnang Satchel",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 700,
    priceDisplay: "Rs. 700",
    desc: "A structured, vintage-inspired satchel showing dark emerald cross-hatch handloomed patterns with dual carry handles.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_5.jpg" alt="Thangnang Satchel">`,
    stock_count: 0
  },
  6: {
    id: 6,
    title: "Mongvom Crossbody Bag",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 400,
    priceDisplay: "Rs. 400",
    desc: "Compact crossbody bag featuring a repeat geometric warp pattern. Features adjustable cotton-webbing strap.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_6.jpg" alt="Mongvom Crossbody Bag">`,
    stock_count: 10
  },
  7: {
    id: 7,
    title: "Saipikhup Bucket Bag",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 1000,
    priceDisplay: "Rs. 1,000",
    desc: "Modern bucket bag with drawstring closure, featuring classic red-saffron base pattern and premium brass hardware.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_7.jpg" alt="Saipikhup Bucket Bag">`,
    stock_count: 10
  },
  8: {
    id: 8,
    title: "Thangnang Carryall",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 700,
    priceDisplay: "Rs. 700",
    desc: "A generous daily carryall highlighting ochre-gold woven textures. Features reinforced seams and sturdy double straps.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_8.jpg" alt="Thangnang Carryall">`,
    stock_count: 0
  },
  9: {
    id: 9,
    title: "Mongvom Travel Tote",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 400,
    priceDisplay: "Rs. 400",
    desc: "An oversized travel tote made from heavy organic cotton weave, showcasing traditional Mongvom diamond repeat margins.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_9.jpg" alt="Mongvom Travel Tote">`,
    stock_count: 1
  },
  10: {
    id: 10,
    title: "Saipikhup Backpack",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 1000,
    priceDisplay: "Rs. 1,000",
    desc: "Sturdy heritage backpack combining Kuki backstrap handloom weaving with leather shoulder straps and back padding.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_10.jpg" alt="Saipikhup Backpack">`,
    stock_count: 10
  },
  11: {
    id: 11,
    title: "Gosem Enamel Pin",
    category: "pin",
    categoryDisplay: "Lapel Pin · Enamel",
    price: 500,
    priceDisplay: "Rs. 500",
    desc: "Hard enamel lapel pin finished with gold plating, representing the traditional wind pipe instrument of the Kuki tribe.",
    weaver: "Ginzalian Mate (Moreh)",
    imageHtml: `<img src="assets/product_11.jpg" alt="Gosem Enamel Pin">`,
    stock_count: 10
  },
  12: {
    id: 12,
    title: "Tahchapa Enamel Pin",
    category: "pin",
    categoryDisplay: "Lapel Pin · Enamel",
    price: 500,
    priceDisplay: "Rs. 500",
    desc: "Shield-shaped enamel pin representing Kuki warrior lineage, finished with charcoal and crimson enamel fills.",
    weaver: "Ginzalian Mate (Moreh)",
    imageHtml: `<img src="assets/product_12.jpg" alt="Tahchapa Enamel Pin">`,
    stock_count: 0
  },
  13: {
    id: 13,
    title: "Tahchapa Collector Pin",
    category: "pin",
    categoryDisplay: "Lapel Pin · Enamel",
    price: 500,
    priceDisplay: "Rs. 500",
    desc: "A special close-up edition hard enamel lapel pin depicting warrior shield symbols in premium metallic outlines.",
    weaver: "Ginzalian Mate (Moreh)",
    imageHtml: `<img src="assets/product_13.jpg" alt="Tahchapa Collector Pin">`,
    stock_count: 10
  },
  14: {
    id: 14,
    title: "Thangnang Backpack",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 700,
    priceDisplay: "Rs. 700",
    desc: "Premium travel backpack featuring Thangnang crimson-gold geometric panels, leather closures, and laptop compartment.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_14.jpg" alt="Thangnang Backpack">`,
    stock_count: 10
  },
  15: {
    id: 15,
    title: "Mongvom Structured Tote",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 400,
    priceDisplay: "Rs. 400",
    desc: "A sleek structured tote bag woven in pure olive green tones. Perfect for both office settings and weekend outings.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_15.jpg" alt="Mongvom Structured Tote">`,
    stock_count: 4
  },
  16: {
    id: 16,
    title: "Saipikhup Daypack",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 1000,
    priceDisplay: "Rs. 1,000",
    desc: "A daily daypack displaying sand-crimson tones. Very lightweight, compact, and features durable cotton drawstrings.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_16.jpg" alt="Saipikhup Daypack">`,
    stock_count: 10
  },
  17: {
    id: 17,
    title: "Thangnang Messenger Bag",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 700,
    priceDisplay: "Rs. 700",
    desc: "Heritage messenger bag displaying ash-slate patterns. Designed with multiple inner pockets and thick canvas shoulder straps.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_17.jpg" alt="Thangnang Messenger Bag">`,
    stock_count: 0
  },
  18: {
    id: 18,
    title: "Mongvom Foldover Clutch",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 400,
    priceDisplay: "Rs. 400",
    desc: "A versatile foldover clutch showing bold saffron-black stripes. Handloomed with heavy-weight premium organic cotton.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_18.jpg" alt="Mongvom Foldover Clutch">`,
    stock_count: 10
  },
  19: {
    id: 19,
    title: "Saipikhup Bowler Bag",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 1000,
    priceDisplay: "Rs. 1,000",
    desc: "A classic bowler-style handbag showing detailed sunset-rust geometric motifs and dual sturdy leather rolled handles.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/product_19.jpg" alt="Saipikhup Bowler Bag">`,
    stock_count: 10
  },
  20: {
    id: 20,
    title: "Thangnang Petite Tote",
    category: "bag",
    categoryDisplay: "Bag · Handwoven",
    price: 700,
    priceDisplay: "Rs. 700",
    desc: "A smaller, lightweight shopper tote featuring ochre-saffron lattice patterns. Ideal for casual daily runs.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/product_20.jpg" alt="Thangnang Petite Tote">`,
    stock_count: 10
  },
  21: {
    id: 21,
    title: "Mongvom Blue Bandana",
    category: "bandana",
    categoryDisplay: "Bandana · Handwoven",
    price: 300,
    priceDisplay: "Rs. 300",
    desc: "A striking sky-blue bandana handloomed using premium cotton, showcasing the classic Mongvom diamond repeat margins.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/bandana_1.jpg" alt="Mongvom Blue Bandana">`,
    stock_count: 2
  },
  22: {
    id: 22,
    title: "Heritage Diamond Bandana",
    category: "bandana",
    categoryDisplay: "Bandana · Handwoven",
    price: 300,
    priceDisplay: "Rs. 300",
    desc: "Deep charcoal cotton base adorned with vibrant orange and white geometric diamond repeats, weaving together warrior status symbols.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/bandana_2.jpg" alt="Heritage Diamond Bandana">`,
    stock_count: 10
  },
  23: {
    id: 23,
    title: "Thangnang Gold Bandana",
    category: "bandana",
    categoryDisplay: "Bandana · Handwoven",
    price: 300,
    priceDisplay: "Rs. 300",
    desc: "A classic cream and saffron backstrap-loomed bandana displaying the traditional Kuki Thangnang checkerboard motifs.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/bandana_3.jpg" alt="Thangnang Gold Bandana">`,
    stock_count: 10
  },
  24: {
    id: 24,
    title: "Tribal Motif Bandana",
    category: "bandana",
    categoryDisplay: "Bandana · Handwoven",
    price: 300,
    priceDisplay: "Rs. 300",
    desc: "A bold heritage print bandana displaying the sacred wind pipe (Gosem), hunting horns, and Kuki tribal symbols over a clean mesh background.",
    weaver: "Ginzalian Mate (Moreh)",
    imageHtml: `<img src="assets/bandana_4.jpg" alt="Tribal Motif Bandana">`,
    stock_count: 0
  },
  25: {
    id: 25,
    title: "Midnight Diamond Bandana",
    category: "bandana",
    categoryDisplay: "Bandana · Handwoven",
    price: 300,
    priceDisplay: "Rs. 300",
    desc: "Midnight black handloomed cotton bandana featuring intricate border motifs and subtle yellow highlight diamonds.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/bandana_5.jpg" alt="Midnight Diamond Bandana">`,
    stock_count: 10
  },
  26: {
    id: 26,
    title: "Mangvom Dahpi Scarf",
    category: "scarf",
    categoryDisplay: "Scarf · Handwoven",
    price: 500,
    priceDisplay: "Rs. 500",
    desc: "A rich, charcoal and grey handwoven scarf featuring the traditional Kuki Mangvom pattern loomed from pure organic cotton.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/scarf_dahpi.jpg" alt="Mangvom Dahpi Scarf">`,
    stock_count: 10
  },
  27: {
    id: 27,
    title: "Saipikhup Heritage Scarf",
    category: "scarf",
    categoryDisplay: "Scarf · Handwoven",
    price: 500,
    priceDisplay: "Rs. 500",
    desc: "An exquisite heritage scarf loomed with the sacred Saipikhup pattern representing status, prestige, and generational pride.",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/scarf_heritage.jpg" alt="Saipikhup Heritage Scarf">`,
    stock_count: 10
  },
  28: {
    id: 28,
    title: "Thangnang Phoulva Scarf",
    category: "scarf",
    categoryDisplay: "Scarf · Handwoven",
    price: 500,
    priceDisplay: "Rs. 500",
    desc: "A stunning, versatile scarf loomed in the traditional Thangnang diamond checkerboard patterns. Durable yet extremely soft.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/scarf_phoulva.jpg" alt="Thangnang Phoulva Scarf">`,
    stock_count: 3
  },
  29: {
    id: 29,
    title: "White Traditional Shawl",
    category: "shawl",
    categoryDisplay: "Shawl · Handwoven",
    price: 600,
    priceDisplay: "Rs. 600",
    desc: "A stunning white traditional shawl handloomed in Churachandpur, featuring the historic Saipikhup pattern in contrast grey and black margins.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/puan_product.png" alt="White Traditional Shawl">`,
    stock_count: 10
  },
  30: {
    id: 30,
    title: "Red Traditional Shawl",
    category: "shawl",
    categoryDisplay: "Shawl · Handwoven",
    price: 600,
    priceDisplay: "Rs. 600",
    desc: "An exquisite crimson red traditional shawl, handloomed on traditional backstrap looms with fine black geometric Saipikhup repeating diamond motifs.",
    weaver: "Nengzamoi Haokip (Churachandpur)",
    imageHtml: `<img src="assets/filler_red.png" alt="Red Traditional Shawl">`,
    stock_count: 0
  },
  31: {
    id: 31,
    title: "Pondum (Exclusive)",
    category: "shawl",
    categoryDisplay: "Shawl · Handwoven",
    price: 600,
    priceDisplay: "Rs. 600",
    desc: "A timeless piece crafted to pay tribute and respect during days of mourning and condolence",
    weaver: "Kimkhosei Touthang (Lamka)",
    imageHtml: `<img src="assets/cat_pondum_new.jpg" alt="Pondum (Exclusive)">`,
    stock_count: 10
  },
  "11-upsell": {
    id: "11-upsell",
    title: "Heritage Enamel Pin",
    category: "pin",
    categoryDisplay: "Lapel Pin · Enamel",
    price: 150,
    priceDisplay: "Rs. 150",
    desc: "Special Complete the Look discount enamel pin.",
    weaver: "Ginzalian Mate (Moreh)",
    stock_count: 99,
    imageHtml: `<img src="assets/product_11.jpg" alt="Heritage Enamel Pin">`
  }
};
window.products = products;

// --- Global State ---
let currentModalProductId = null;
window.currentModalProductId = currentModalProductId;

let whatsappNumber = '919233918107'; // Default store WhatsApp number (91 = India country code)
window.whatsappNumber = whatsappNumber;

let storeUpiId = 'lenny93haokip-1@okicici'; // Store UPI ID for instant checkout
window.storeUpiId = storeUpiId;

// Retrieve/generate client UUID
let anonymousId = localStorage.getItem('nina_anonymous_id');
if (!anonymousId) {
  if (window.crypto && window.crypto.randomUUID) {
    anonymousId = window.crypto.randomUUID();
  } else {
    anonymousId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
  localStorage.setItem('nina_anonymous_id', anonymousId);
}
window.anonymousId = anonymousId;

let cart = {};
try {
  cart = JSON.parse(localStorage.getItem('nina_cart') || '{}') || {};
} catch(e) {
  console.error("Error loading cart from localStorage", e);
  cart = {};
}
window.cart = cart;

let wishlist = new Set();
try {
  const savedWishlist = JSON.parse(localStorage.getItem('nina_wishlist') || '[]') || [];
  wishlist = new Set(savedWishlist);
} catch(e) {
  console.error("Error loading wishlist from localStorage", e);
  wishlist = new Set();
}
window.wishlist = wishlist;

// --- Dynamic Supabase Fetch and Sorting ---
let fetchProductsPromise = null;
async function fetchProducts() {
  if (fetchProductsPromise) return fetchProductsPromise;
  fetchProductsPromise = (async () => {
    try {
    const response = await fetch('https://safgnxqeadujezefvahw.supabase.co/rest/v1/products', {
      method: 'GET',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg'
      }
    });
    if (!response.ok) throw new Error('Network response was not ok');
    const dbProducts = await response.json();
    
    // Convert database array to products object keyed by id
    const newProducts = {};
    dbProducts.forEach(prod => {
      newProducts[prod.id] = {
        id: prod.id,
        title: prod.title,
        category: prod.category,
        categoryDisplay: prod.category_display || (prod.category.charAt(0).toUpperCase() + prod.category.slice(1) + " · Handwoven"),
        price: Number(prod.price),
        priceDisplay: prod.price_display || `Rs. ${Number(prod.price).toLocaleString('en-IN')}`,
        desc: prod.description || '',
        weaver: prod.weaver || '',
        stock_count: prod.stock_count !== null ? prod.stock_count : 10,
        imageHtml: `<img src="${prod.image_url}" alt="${prod.title}" loading="lazy" id="img-prod-${prod.id}">`
      };
    });
    
    // Carry over upsell product if defined in static products
    if (products["11-upsell"]) {
      newProducts["11-upsell"] = products["11-upsell"];
    }

    // Update global products reference
    products = newProducts;
    window.products = products;

    // Fetch dynamic site settings for WhatsApp number
    try {
      const settingsRes = await fetch('https://safgnxqeadujezefvahw.supabase.co/rest/v1/site_settings', {
        method: 'GET',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg'
        }
      });
      if (settingsRes.ok) {
        const dbSettings = await settingsRes.json();
        const waSetting = dbSettings.find(s => s.key === 'whatsapp_number');
        if (waSetting && waSetting.value) {
          // Ensure country code 91 is always present
          const rawNum = waSetting.value.replace(/\D/g, '');
          whatsappNumber = rawNum.startsWith('91') ? rawNum : '91' + rawNum;
          window.whatsappNumber = whatsappNumber;
        }

        const upiSetting = dbSettings.find(s => s.key === 'upi_id');
        if (upiSetting && upiSetting.value) {
          storeUpiId = upiSetting.value.trim();
          window.storeUpiId = storeUpiId;
        }

        const maintSetting = dbSettings.find(s => s.key === 'maintenance_mode');
        if (maintSetting && maintSetting.value === 'true') {
          showMaintenanceScreen();
        }
      }
    } catch (settingsErr) {
      console.error("Error fetching site settings:", settingsErr);
    }

    // Render to UI if the page supports it
    if (typeof renderProducts === 'function') {
      renderProducts();
    }
    updateCartUI();
    updateWishlistUI();
  } catch (err) {
    console.error("Failed to fetch products from Supabase:", err);
    // Fallback to static catalog in case of error
    if (typeof renderProducts === 'function') {
      renderProducts();
    }
    updateCartUI();
    updateWishlistUI();
  }
  })();
  return fetchProductsPromise;
}
window.fetchProducts = fetchProducts;

function renderProducts() {
  const productGrid = document.getElementById('productGrid');
  if (!productGrid) return;
  
  // Clear skeleton loader
  productGrid.innerHTML = '';
  
  const productList = Object.values(products);
  
  // Sort: Priority to Handwoven Bags priced between ₹850 and ₹1,000
  productList.sort((a, b) => {
    const isHighValBagA = (a.category === 'bag' && a.price >= 850 && a.price <= 1000);
    const isHighValBagB = (b.category === 'bag' && b.price >= 850 && b.price <= 1000);
    
    if (isHighValBagA && !isHighValBagB) return -1;
    if (!isHighValBagA && isHighValBagB) return 1;
    return a.id - b.id; // Stable secondary sort by id
  });
  
  productList.forEach(prod => {
    let badgeHtml = '';
    
    // Dynamic visual triggers based on stock scarcity strategy
    if (prod.stock_count >= 1 && prod.stock_count <= 5) {
      badgeHtml = `<span class="product-badge scarcity">Batch 01 — Only ${prod.stock_count} pieces woven</span>`;
    } else if (prod.stock_count > 5) {
      // Fallback to design category badges for normal stock items
      if (prod.id === 1 || prod.id === 31 || prod.id === 5) {
        badgeHtml = `<span class="product-badge bestseller">Bestseller</span>`;
      } else if (prod.id === 2 || prod.id === 8) {
        badgeHtml = `<span class="product-badge new">New</span>`;
      } else if (prod.id === 3 || prod.id === 10) {
        badgeHtml = `<span class="product-badge handcrafted">Handcrafted</span>`;
      }
    }
    
    let soldOutClass = '';
    let soldOutOverlayHtml = '';
    if (prod.stock_count === 0) {
      soldOutClass = ' sold-out';
      soldOutOverlayHtml = `<div class="sold-out-overlay">Sold Out</div>`;
    }
    
    // Match traditional patterns
    let pattern = 'none';
    const titleLower = prod.title.toLowerCase();
    if (titleLower.includes('saipikhup')) {
      pattern = 'saipikhup';
    } else if (titleLower.includes('thangnang')) {
      pattern = 'thangnang';
    } else if (titleLower.includes('mangvom') || titleLower.includes('mongvom')) {
      pattern = 'mangvom';
    }
    
    // Search metadata
    const searchTerms = [
      `id:${prod.id}`,
      prod.category,
      pattern,
      prod.title.toLowerCase(),
      prod.desc.toLowerCase(),
      prod.weaver.toLowerCase(),
      "handwoven"
    ].join(' ');
    
    const cardHtml = `
      <article class="product-card${soldOutClass}" 
               data-category="${prod.category}" 
               data-pattern="${pattern}" 
               data-search="${searchTerms}"
               id="card-prod-${prod.id}">
        ${badgeHtml}
        <button class="wish-btn${wishlist.has(prod.id) ? ' active' : ''}" aria-label="Add to wishlist" onclick="toggleWishlist(${prod.id}, event)">
          <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
        <div class="product-media" onclick="openQuickView(${prod.id})">
          ${prod.imageHtml}
          ${soldOutOverlayHtml}
        </div>
        <div class="product-info">
          <div class="product-category">${prod.categoryDisplay}</div>
          <h3 class="product-title" onclick="openQuickView(${prod.id})" style="cursor:pointer;">${prod.title}</h3>
          <span class="product-price">${prod.priceDisplay}</span>
        </div>
      </article>
    `;
    
    productGrid.insertAdjacentHTML('beforeend', cardHtml);
  });
  
  // Re-apply filter states to the newly generated DOM elements
  applyFilterAndSearch();
}
window.renderProducts = renderProducts;

// --- Dynamic Supabase Fetch and Sorting for Site Content ---
let fetchSiteContentPromise = null;
async function fetchSiteContent() {
  if (fetchSiteContentPromise) return fetchSiteContentPromise;
  fetchSiteContentPromise = (async () => {
    try {
      const response = await fetch('https://safgnxqeadujezefvahw.supabase.co/rest/v1/site_content', {
        method: 'GET',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg'
        }
      });
      if (response.ok) {
        const dbContent = await response.json();
        
        // 1. Hero Content
        const heroData = dbContent.find(c => c.key === 'hero')?.value;
        if (heroData) {
          const subTop = document.querySelector('.hermes-subtitle-top');
          const mainTitle = document.querySelector('.hermes-main-title');
          const subBottom = document.querySelector('.hermes-subtitle-bottom');
          const ctaBtn = document.querySelector('.hermes-btn-link');
          const storyPara = document.querySelector('.slogan-narrative-paragraph');
          
          if (subTop && heroData.subtitle_top) subTop.textContent = heroData.subtitle_top;
          if (mainTitle && heroData.title) mainTitle.textContent = heroData.title;
          if (subBottom && heroData.subtitle_bottom) subBottom.textContent = heroData.subtitle_bottom;
          if (ctaBtn && heroData.cta_text) ctaBtn.textContent = heroData.cta_text;
          if (storyPara && heroData.story) {
            const story = heroData.story;
            const firstChar = story.charAt(0);
            const restStr = story.slice(1);
            storyPara.innerHTML = `<span class="editorial-dropcap">${firstChar}</span>${restStr}`;
          }
        }
        
        // 2. Stats Grid
        const statsData = dbContent.find(c => c.key === 'stats')?.value;
        if (statsData && Array.isArray(statsData)) {
          const statItems = document.querySelectorAll('.stats-grid .stat-item');
          statsData.forEach((stat, idx) => {
            if (statItems[idx]) {
              const valElem = statItems[idx].querySelector('.stat-value');
              const lblElem = statItems[idx].querySelector('.stat-label');
              if (valElem && stat.value) valElem.textContent = stat.value;
              if (lblElem && stat.label) lblElem.textContent = stat.label;
            }
          });
        }
        
        // 3. Editorial Quote
        const quoteData = dbContent.find(c => c.key === 'quote')?.value;
        if (quoteData) {
          const bqElem = document.querySelector('.editorial-quote blockquote');
          const citeElem = document.querySelector('.editorial-quote cite');
          if (bqElem && quoteData.text) bqElem.textContent = `"${quoteData.text}"`;
          if (citeElem && quoteData.author) citeElem.textContent = quoteData.author;
        }
      }
    } catch (err) {
      console.error("Error fetching site content from Supabase:", err);
    }
  })();
  return fetchSiteContentPromise;
}
window.fetchSiteContent = fetchSiteContent;

// Save cart & wishlist state to LocalStorage and sync with Supabase
let saveTimeout = null;
function saveState() {
  localStorage.setItem('nina_cart', JSON.stringify(cart));
  localStorage.setItem('nina_wishlist', JSON.stringify([...wishlist]));

  if (saveTimeout) clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      const payload = {
        anonymous_id: anonymousId,
        cart: cart,
        wishlist: [...wishlist],
        updated_at: new Date().toISOString()
      };

      await fetch('https://safgnxqeadujezefvahw.supabase.co/rest/v1/carts_wishlists?on_conflict=anonymous_id', {
        method: 'POST',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
          'Content-Type': 'application/json',
          'Prefer': 'resolution=merge-duplicates'
        },
        body: JSON.stringify(payload)
      });
    } catch(e) {
      console.error("Failed to sync cart/wishlist to Supabase", e);
    }
  }, 500);
}
window.saveState = saveState;

// Load cart & wishlist state from Supabase
let loadSessionPromise = null;
async function loadSessionFromSupabase() {
  if (loadSessionPromise) return loadSessionPromise;
  loadSessionPromise = (async () => {
    try {
    const response = await fetch(`https://safgnxqeadujezefvahw.supabase.co/rest/v1/carts_wishlists?anonymous_id=eq.${anonymousId}`, {
      method: 'GET',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg'
      }
    });
    if (response.ok) {
      const data = await response.json();
      if (data && data.length > 0) {
        const dbSession = data[0];
        cart = dbSession.cart || {};
        window.cart = cart;
        wishlist = new Set(dbSession.wishlist || []);
        window.wishlist = wishlist;
        
        localStorage.setItem('nina_cart', JSON.stringify(cart));
        localStorage.setItem('nina_wishlist', JSON.stringify([...wishlist]));
        
        updateCartUI();
        updateWishlistUI();
      }
    }
  } catch(e) {
    console.error("Failed to load session from Supabase", e);
  }
  })();
  return loadSessionPromise;
}
window.loadSessionFromSupabase = loadSessionFromSupabase;

function updateWishlistUI() {
  document.querySelectorAll('.wish-btn').forEach(btn => {
    const onClickAttr = btn.getAttribute('onclick');
    if (onClickAttr) {
      const match = onClickAttr.match(/toggleWishlist\(([^,]+),/);
      if (match) {
        const prodId = Number(match[1].trim());
        if (wishlist.has(prodId)) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      }
    }
  });
}
window.updateWishlistUI = updateWishlistUI;

// --- Variant Color Change Logic ---
function changeVariantColor(productId, colorHex, colorName, e) {
  if (e) e.stopPropagation();
  
  // Update active state of dots
  const card = document.querySelector(`.product-card[data-search*="id:${productId}"]`) || e.currentTarget.closest('.product-card');
  if (card) {
    const dots = card.querySelectorAll('.swatch-dot');
    dots.forEach(dot => {
      if (dot.getAttribute('title') === colorName) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }

  // Save selected variant to data definition
  products[productId].selectedVariant = colorName;

  // Apply quick color shifts on thumbnail to visually represent variation changes
  const img = document.getElementById(`img-prod-${productId}`);
  if (img) {
    if (colorName === 'Maroon' || colorName === 'Crimson') {
      img.style.filter = 'hue-rotate(330deg) saturate(1.4)';
    } else if (colorName === 'Pink') {
      img.style.filter = 'hue-rotate(290deg) saturate(1.8)';
    } else if (colorName === 'Black' || colorName === 'Charcoal') {
      img.style.filter = 'grayscale(1) brightness(0.6)';
    } else if (colorName === 'Yellow') {
      img.style.filter = 'hue-rotate(40deg) saturate(1.2) sepia(0.2)';
    } else if (colorName === 'Forest Green') {
      img.style.filter = 'hue-rotate(100deg) saturate(1.2)';
    } else {
      img.style.filter = ''; // Reset
    }
  }

  showToast(`Selected variant: ${colorName}`, "info");
}
window.changeVariantColor = changeVariantColor;

// --- Sticky Header Scrolled State (Optimized) ---
let headerScheduled = false;
window.addEventListener('scroll', () => {
  if (!headerScheduled) {
    headerScheduled = true;
    requestAnimationFrame(() => {
      const header = document.getElementById('header');
      if (header) {
        if (window.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      }
      headerScheduled = false;
    });
  }
}, { passive: true });

// --- Parallax Hero (Optimized) ---
let parallaxScheduled = false;
window.addEventListener('scroll', () => {
  if (!parallaxScheduled) {
    parallaxScheduled = true;
    requestAnimationFrame(() => {
      const scrollVal = window.scrollY;
      const heroBg = document.getElementById('heroBg');
      if (heroBg) {
        heroBg.style.transform = `translate3d(0, ${scrollVal * 0.22}px, 0)`;
      }
      parallaxScheduled = false;
    });
  }
}, { passive: true });

// --- Active Section Observer for Background Animations ---
try {
  const scrollSections = document.querySelectorAll('.scroll-section');
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-active');
      } else {
        entry.target.classList.remove('section-active');
      }
    });
  }, {
    threshold: 0.35 // Active when 35% visible
  });

  if (scrollSections) {
    scrollSections.forEach(sec => sectionObserver.observe(sec));
  }
} catch (e) {
  console.warn("IntersectionObserver for sections failed", e);
}

// --- Scroll Reveal Animation ---
try {
  const revealElements = document.querySelectorAll('.reveal');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  if (revealElements) {
    revealElements.forEach(el => revealObserver.observe(el));
  }
  
  // Page Load Trigger Reveal
  function triggerInitialReveal() {
    const heroVideo = document.getElementById('heroVideo');
    if (heroVideo) {
      heroVideo.playbackRate = 0.55;
    }
    setTimeout(() => {
      const firstReveal = document.querySelector('.hero-content-hermes');
      if (firstReveal) firstReveal.classList.add('active');
    }, 150);
  }

  if (document.readyState === 'loading') {
    window.addEventListener('DOMContentLoaded', triggerInitialReveal);
  } else {
    triggerInitialReveal();
  }

  // Ultimate fallback: guarantee all elements are visible after 1 second
  setTimeout(() => {
    if (revealElements) {
      revealElements.forEach(el => {
        if (!el.classList.contains('active')) {
          el.classList.add('active');
        }
      });
    }
  }, 1000);
} catch (e) {
  console.error("Error setting up scroll reveal:", e);
  try {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('active'));
  } catch (err) {
    console.error("Visual recovery failed:", err);
  }
}

// --- Mobile Menu Toggle ---
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });
}

function closeMobileMenu() {
  if (menuToggle && mobileMenu) {
    menuToggle.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.closeMobileMenu = closeMobileMenu;

// --- Filters & Search Logic ---
const filterBtns = document.querySelectorAll('.filter-btn');
const subFilterBtns = document.querySelectorAll('.sub-filter-btn');
const subFilterTabs = document.getElementById('subFilterTabs');
const searchInput = document.getElementById('searchInput');
const productGrid = document.getElementById('productGrid');
let activeFilter = 'all';
let activeSubfilter = 'all';
let activeSearch = '';

function applyFilterAndSearch() {
  const cards = document.querySelectorAll('.product-grid .product-card:not(.skeleton)');
  cards.forEach(card => {
    const category = card.dataset.category;
    const pattern = card.dataset.pattern || 'none';
    const searchText = card.dataset.search.toLowerCase();
    
    const matchesCategory = (activeFilter === 'all' || category === activeFilter);
    const matchesSubfilter = (activeSubfilter === 'all' || pattern === activeSubfilter);
    const matchesSearch = (activeSearch === '' || searchText.includes(activeSearch));

    if (matchesCategory && matchesSubfilter && matchesSearch) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

if (filterBtns) {
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      
      // Reset sub-filter on main category change
      activeSubfilter = 'all';
      if (subFilterBtns) {
        subFilterBtns.forEach(sb => {
          if (sb.dataset.subfilter === 'all') {
            sb.classList.add('active');
          } else {
            sb.classList.remove('active');
          }
        });
      }
      
      // Show sub-filters only when bag, bandana, or scarf is selected
      if (subFilterTabs) {
        if (activeFilter === 'bag' || activeFilter === 'bandana' || activeFilter === 'scarf') {
          subFilterTabs.classList.add('show');
        } else {
          subFilterTabs.classList.remove('show');
        }
      }
      
      applyFilterAndSearch();
    });
  });
}

if (subFilterBtns) {
  subFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      subFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSubfilter = btn.dataset.subfilter;
      applyFilterAndSearch();
    });
  });
}

function filterCategory(cat) {
  if (filterBtns) {
    const targetBtn = Array.from(filterBtns).find(b => b.dataset.filter === cat);
    if (targetBtn) {
      targetBtn.click();
    }
  }
  const shopSec = document.getElementById('shop');
  if (shopSec) shopSec.scrollIntoView({ behavior: 'smooth' });
}
window.filterCategory = filterCategory;

// Focus shop search on header search click
const searchHeaderBtn = document.getElementById('searchHeaderBtn');
if (searchHeaderBtn) {
  searchHeaderBtn.addEventListener('click', () => {
    const shopSec = document.getElementById('shop');
    if (shopSec) shopSec.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 500);
  });
}

if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    activeSearch = e.target.value.toLowerCase().trim();
    applyFilterAndSearch();
  });
}

// --- Wishlist Toggle ---
function toggleWishlist(productId, e) {
  if (e) e.stopPropagation();
  const btn = e ? e.currentTarget : null;
  
  if (wishlist.has(productId)) {
    wishlist.delete(productId);
    if (btn) btn.classList.remove('active');
    showToast("Removed from wishlist", "info");
  } else {
    wishlist.add(productId);
    if (btn) btn.classList.add('active');
    showToast("Added to wishlist", "success");
  }
  saveState();
}
window.toggleWishlist = toggleWishlist;

function addToCart(productId, e, qtyToAdd = 1) {
  if (e) e.stopPropagation();
  
  const prod = products[productId];
  if (prod && prod.stock_count === 0) {
    showToast(`Sorry, ${prod.title} is currently sold out.`, "error");
    return;
  }
  const variant = (prod && prod.selectedVariant) || "Default";
  const cartKey = `${productId}-${variant}`;

  if (cart[cartKey]) {
    cart[cartKey] += qtyToAdd;
  } else {
    cart[cartKey] = qtyToAdd;
  }
  
  updateCartUI();
  openCart();
  showToast(`Added ${(prod && prod.title) || 'Product'} (${variant}) to cart`, "success");

  // Flash '+' button feedback
  if (e && e.currentTarget) {
    const btn = e.currentTarget;
    if (btn.classList.contains('add-to-cart-btn')) {
      btn.classList.add('added');
      btn.textContent = '✓';
      setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = '+';
      }, 1000);
    }
  }
}
window.addToCart = addToCart;

function hasBagButNoPin() {
  let hasBag = false;
  let hasPin = false;
  
  Object.keys(cart).forEach(key => {
    const lastDash = key.lastIndexOf('-');
    const productId = lastDash !== -1 ? key.substring(0, lastDash) : key;
    const item = products[productId];
    if (item) {
      if (item.category === 'bag') {
        hasBag = true;
      }
      if (item.category === 'pin' || productId === '11-upsell') {
        hasPin = true;
      }
    }
  });
  
  return hasBag && !hasPin;
}
window.hasBagButNoPin = hasBagButNoPin;

window.addUpsellPin = function() {
  if (!products["11-upsell"]) {
    products["11-upsell"] = {
      id: "11-upsell",
      title: "Heritage Enamel Pin",
      category: "pin",
      categoryDisplay: "Lapel Pin · Enamel",
      price: 150,
      priceDisplay: "Rs. 150",
      desc: "Special Complete the Look discount enamel pin.",
      weaver: "Ginzalian Mate (Moreh)",
      stock_count: 99,
      imageHtml: `<img src="assets/product_11.jpg" alt="Heritage Enamel Pin">`
    };
  }
  
  cart["11-upsell-Default"] = 1;
  updateCartUI();
  showToast("Heritage Enamel Pin added to your cart!", "success");
};

window.toggleGiftOption = function() {
  const giftCheckbox = document.getElementById('giftCheckbox');
  const giftNoteContainer = document.getElementById('giftNoteContainer');
  if (giftCheckbox && giftNoteContainer) {
    giftNoteContainer.style.display = giftCheckbox.checked ? 'block' : 'none';
    if (!giftCheckbox.checked) {
      const giftNote = document.getElementById('giftNote');
      if (giftNote) giftNote.value = '';
    }
  }
  updateCartUI();
};

window.openCheckoutModal = function() {
  const modal = document.getElementById('checkoutModalBackdrop');
  if (modal) {
    modal.style.display = 'flex';
    modal.offsetHeight; // force reflow
    modal.classList.add('open');
  }
};

window.closeCheckoutModal = function() {
  const modal = document.getElementById('checkoutModalBackdrop');
  if (modal) {
    modal.classList.remove('open');
    setTimeout(() => {
      modal.style.display = 'none';
    }, 300);
  }
};

window.closeCheckoutModalOuter = function(e) {
  if (e.target === document.getElementById('checkoutModalBackdrop')) {
    closeCheckoutModal();
  }
};

window.openInfoModal = function(type) {
  const backdrop = document.getElementById('policyModalBackdrop');
  const title = document.getElementById('policyModalTitle');
  const body = document.getElementById('policyModalBody');
  if (!backdrop || !title || !body) return;

  let modalTitle = '';
  let modalBody = '';

  if (type === 'shipping') {
    modalTitle = 'Shipping Policy';
    modalBody = `<p>At NiNa Collective, we partner with Kuki artisan weavers from Lamka, Churachandpur, and Moreh in Manipur. Every product is handloomed on demand or in small batches.</p>
                 <p style="margin-top: 12px;"><strong>Processing Time:</strong> Orders are processed within 2–5 business days.</p>
                 <p style="margin-top: 12px;"><strong>Delivery:</strong> Shipping across India typically takes 5–8 business days via our premium courier partners. You will receive a WhatsApp message and email tracking confirmation as soon as your package ships.</p>`;
  } else if (type === 'returns') {
    modalTitle = 'Returns & Exchanges';
    modalBody = `<p>Since each of our traditional Puans, bags, scarves, and accessories is individually handloomed, we hold a high standard of quality and craftsmanship.</p>
                 <p style="margin-top: 12px;"><strong>Policies:</strong> We accept returns and exchanges within 7 days of delivery only for items that are damaged in transit or have manufacturing defects.</p>
                 <p style="margin-top: 12px;"><strong>Process:</strong> To initiate a return, please contact us on WhatsApp with photos of the item. Refunds are processed to your original payment method once the item is inspected.</p>`;
  } else if (type === 'care') {
    modalTitle = 'Care Instructions';
    modalBody = `<p>Our handloomed textiles are made with 100% organic cotton and traditional weaving techniques.</p>
                 <ul style="margin-top: 12px; padding-left: 20px; list-style-type: decimal;">
                   <li>Hand wash separately in cold water using a liquid detergent.</li>
                   <li style="margin-top: 6px;">Do not wring or twist the fabric; press out excess water gently.</li>
                   <li style="margin-top: 6px;">Dry flat in shade to prevent color fading and stretching.</li>
                   <li style="margin-top: 6px;">Iron on a low-medium cotton setting on the reverse side of the motifs.</li>
                   <li style="margin-top: 6px;">Dry cleaning is highly recommended for premium wool/cotton blend shawls and Puans.</li>
                 </ul>`;
  } else if (type === 'contact') {
    modalTitle = 'Contact Us';
    modalBody = `<p>We would love to hear from you!</p>
                 <p style="margin-top: 12px;"><strong>WhatsApp Business:</strong> +91 92339 18107</p>
                 <p style="margin-top: 6px;"><strong>Email Support:</strong> support@ninabymangsee.com</p>
                 <p style="margin-top: 6px;"><strong>Artisan Studio:</strong> Churachandpur, Lamka, Manipur, India</p>
                 <p style="margin-top: 6px;"><strong>Working Hours:</strong> Monday to Saturday, 10:00 AM – 6:00 PM IST</p>`;
  }

  title.innerHTML = modalTitle;
  body.innerHTML = modalBody;
  backdrop.classList.add('open');
  document.body.style.overflow = 'hidden';
};

window.closePolicyModal = function() {
  const backdrop = document.getElementById('policyModalBackdrop');
  if (backdrop) {
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
};

window.closePolicyModalOuter = function(e) {
  if (e.target === document.getElementById('policyModalBackdrop')) {
    closePolicyModal();
  }
};

window.handleCheckoutCompletion = function() {
  // Clear cart
  cart = {};
  window.cart = cart;
  updateCartUI();
  
  // Reset form
  const form = document.getElementById('checkoutForm');
  if (form) form.reset();
  
  // Close checkout modal
  closeCheckoutModal();
  
  // Close cart drawer/sidebar
  closeCart();
  
  // Restore original modal layout after the modal closes
  setTimeout(() => {
    const successState = document.getElementById('checkoutSuccessState');
    if (successState) successState.style.display = 'none';
    
    const upiContainer = document.getElementById('upiPaymentContainer');
    if (upiContainer) upiContainer.style.display = 'none';
    
    const checkoutForm = document.getElementById('checkoutForm');
    if (checkoutForm) checkoutForm.style.display = 'flex';
    
    const modalTitle = document.querySelector('#checkoutModalContainer > h2');
    if (modalTitle) modalTitle.style.display = 'block';
    
    const closeBtn = document.querySelector('#checkoutModalContainer > .modal-close-btn');
    if (closeBtn) closeBtn.style.display = 'block';
    
    const container = document.getElementById('checkoutModalContainer');
    if (container) container.style.maxWidth = '500px';
    
    const successTitle = document.querySelector('#checkoutSuccessState h2');
    if (successTitle) successTitle.textContent = 'Thank You';
    
    const continueBtn = document.querySelector('#checkoutSuccessState button');
    if (continueBtn) continueBtn.style.display = 'block';
  }, 400);
};

window.submitOrder = async function(e) {
  if (e) e.preventDefault();
  
  const name = document.getElementById('checkoutName').value.trim();
  const email = document.getElementById('checkoutEmail').value.trim();
  const phone = document.getElementById('checkoutPhone').value.trim();
  const address = document.getElementById('checkoutAddress').value.trim();
  const paymentMethodSelect = document.getElementById('checkoutPaymentMethod');
  const paymentMethod = paymentMethodSelect ? paymentMethodSelect.value : 'Online Payment';
  
  if (!name || !email || !phone || !address) {
    showToast("Please fill in all shipping fields.", "error");
    return;
  }

  const orderItems = [];
  let totalPrice = 0;
  
  Object.keys(cart).forEach(key => {
    const lastDash = key.lastIndexOf('-');
    const productId = lastDash !== -1 ? key.substring(0, lastDash) : key;
    const variant = lastDash !== -1 ? key.substring(lastDash + 1) : "Default";
    const item = products[productId];
    if (item) {
      const qty = cart[key];
      orderItems.push({
        product_id: productId,
        title: item.title,
        price: item.price,
        quantity: qty,
        variant: variant
      });
      totalPrice += item.price * qty;
    }
  });
  
  const giftCheckbox = document.getElementById('giftCheckbox');
  const isGift = giftCheckbox ? giftCheckbox.checked : false;
  const giftNote = document.getElementById('giftNote');
  const notes = isGift && giftNote ? giftNote.value.trim() : "";
  
  if (isGift) {
    totalPrice += 50;
  }

  const orderNumber = `NINA-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
  const placeBtn = document.getElementById('placeOrderBtn');
  const originalText = placeBtn.textContent;

  const saveOrderToDatabase = async (finalStatus) => {
    const payload = {
      order_number: orderNumber,
      customer_name: name,
      customer_email: email,
      customer_phone: phone,
      customer_address: address,
      items: orderItems,
      subtotal: totalPrice,
      status: finalStatus,
      is_gift: isGift,
      notes: notes || null,
      payment_method: paymentMethod
    };

    const response = await fetch('https://safgnxqeadujezefvahw.supabase.co/rest/v1/orders', {
      method: 'POST',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Failed to save order details. Please contact support.');
    }
  };

  const triggerNotifications = async () => {
    let itemsSummary = orderItems.map(item => `- ${item.quantity}x ${item.title} (${item.variant}) @ ₹${item.price}`).join('\n');
    let waText = `*New Order: ${orderNumber}*\n\n` +
                 `*Customer Details:*\n` +
                 `- Name: ${name}\n` +
                 `- Email: ${email}\n` +
                 `- Phone: ${phone}\n` +
                 `- Address: ${address}\n\n` +
                 `*Items:*\n${itemsSummary}\n\n` +
                 `*Gift Option:* ${isGift ? 'Yes' : 'No'}\n` +
                 (isGift ? `*Gift Note:* ${notes}\n` : '') +
                 `*Subtotal:* Rs. ${totalPrice.toLocaleString('en-IN')}\n` +
                 `*Payment Method:* ${paymentMethod}\n`;
                 
    if (paymentMethod === 'Online Payment') {
      const upiPayUrl = `upi://pay?pa=${storeUpiId}&pn=NiNa%20by%20Mangsee&am=${totalPrice}&cu=INR&tn=${orderNumber}`;
      waText += `\n*Instant UPI Payment Link:* \n${upiPayUrl}\n\n*Or pay to UPI ID:* ${storeUpiId}\n\n*Please share the payment screenshot to confirm order.*`;
    } else {
      waText += `\nPlease confirm receipt of this order.`;
    }
    
    const encodedWaText = encodeURIComponent(waText);
    window.open(`https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedWaText}`, '_blank');

    // Call the edge function asynchronously in the background so it doesn't block the UI
    fetch('https://safgnxqeadujezefvahw.supabase.co/functions/v1/order-confirmation', {
      method: 'POST',
      headers: {
        'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNhZmdueHFlYWR1amV6ZWZ2YWh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODEzNTgwNzEsImV4cCI6MjA5NjkzNDA3MX0.8V0NLqyk6D5FHYttQV-0WwghkTSPs9Cl-MHFG4JfKFg',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderNumber,
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        customerAddress: address,
        items: orderItems,
        subtotal: totalPrice,
        isGift,
        notes,
        paymentMethod
      })
    }).catch(edgeErr => {
      console.log("Supabase Edge Function not deployed/configured. SMS/email fallback skipped.", edgeErr);
    });
  };

  if (paymentMethod === 'Cash on Delivery') {
    placeBtn.disabled = true;
    placeBtn.textContent = 'Processing Order...';
    try {
      // Hide UPI payment container for COD
      const upiContainer = document.getElementById('upiPaymentContainer');
      if (upiContainer) upiContainer.style.display = 'none';

      // Show Success UI immediately — don't block on DB save
      const form = document.getElementById('checkoutForm');
      if (form) form.style.display = 'none';
      
      const modalTitle = document.querySelector('#checkoutModalContainer > h2');
      if (modalTitle) modalTitle.style.display = 'none';
      
      const closeBtn = document.querySelector('#checkoutModalContainer > .modal-close-btn');
      if (closeBtn) closeBtn.style.display = 'none';
      
      const container = document.getElementById('checkoutModalContainer');
      if (container) container.style.maxWidth = '400px';
      
      const successOrderNumber = document.getElementById('successOrderNumber');
      if (successOrderNumber) successOrderNumber.textContent = `Order #${orderNumber}`;
      
      const successMessage = document.getElementById('successMessage');
      if (successMessage) successMessage.textContent = 'Your order has been recorded. A WhatsApp receipt is being opened for your records.';
      
      const successState = document.getElementById('checkoutSuccessState');
      if (successState) successState.style.display = 'flex';

      showToast(`Order Placed! ID: ${orderNumber}`, "success");
      
      // Open WhatsApp FIRST (must be synchronous in click context to avoid popup blocking)
      triggerNotifications();

      // Save to DB in background (non-blocking)
      saveOrderToDatabase('Confirmed').catch(dbErr => {
        console.warn('Order DB save failed (non-critical):', dbErr.message);
      });

      // Reset cart & UI
      cart = {};
      window.cart = cart;
      saveState();
      if (form) form.reset();
      updateCartUI();
    } catch (err) {
      console.error(err);
      showToast(err.message || "Failed to place order. Please try again.", "error");
    } finally {
      placeBtn.disabled = false;
      placeBtn.textContent = originalText;
    }
  } else {
    placeBtn.disabled = true;
    placeBtn.textContent = 'Processing Order...';
    try {
      // Set up dynamic UPI QR and link
      const upiUrl = `upi://pay?pa=${storeUpiId}&pn=NiNa%20by%20Mangsee&am=${totalPrice}&cu=INR&tn=${orderNumber}`;
      const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=${encodeURIComponent(upiUrl)}`;
      
      const qrImg = document.getElementById('upiQrImg');
      if (qrImg) qrImg.src = qrCodeApiUrl;
      
      const deepLink = document.getElementById('upiDeepLink');
      if (deepLink) deepLink.href = upiUrl;
      
      const upiDisplayId = document.getElementById('upiDisplayId');
      if (upiDisplayId) upiDisplayId.textContent = `UPI: ${storeUpiId}`;
      
      const copyUpiBtn = document.getElementById('copyUpiBtn');
      if (copyUpiBtn) {
        copyUpiBtn.onclick = () => {
          navigator.clipboard.writeText(storeUpiId);
          showToast('UPI ID Copied!', 'info');
        };
      }
      
      const upiContainer = document.getElementById('upiPaymentContainer');
      if (upiContainer) upiContainer.style.display = 'flex';

      // Show Success UI immediately
      const form = document.getElementById('checkoutForm');
      if (form) form.style.display = 'none';
      
      const modalTitle = document.querySelector('#checkoutModalContainer > h2');
      if (modalTitle) modalTitle.style.display = 'none';
      
      const closeBtn = document.querySelector('#checkoutModalContainer > .modal-close-btn');
      if (closeBtn) closeBtn.style.display = 'none';
      
      const container = document.getElementById('checkoutModalContainer');
      if (container) container.style.maxWidth = '400px';
      
      const successTitle = document.querySelector('#checkoutSuccessState h2');
      if (successTitle) successTitle.textContent = 'Payment Requested';
      
      const successOrderNumber = document.getElementById('successOrderNumber');
      if (successOrderNumber) successOrderNumber.textContent = `Order #${orderNumber}`;
      
      const successMessage = document.getElementById('successMessage');
      if (successMessage) successMessage.textContent = 'Order recorded! Opening WhatsApp to complete your payment. Please send a screenshot of the payment confirmation.';
      
      const successState = document.getElementById('checkoutSuccessState');
      if (successState) successState.style.display = 'flex';
      
      showToast("Opening WhatsApp for payment...", "success");
      
      // Open WhatsApp FIRST — synchronous call in click handler avoids popup blocking
      triggerNotifications();

      // Save to DB in background (non-blocking)
      saveOrderToDatabase('Pending Payment').catch(dbErr => {
        console.warn('Order DB save failed (non-critical):', dbErr.message);
      });

      // Reset cart & UI
      cart = {};
      window.cart = cart;
      saveState();
      if (form) form.reset();
      updateCartUI();
    } catch (dbErr) {
      console.error(dbErr);
      showToast("Failed to initiate checkout. Please try again.", "error");
    } finally {
      placeBtn.disabled = false;
      placeBtn.textContent = originalText;
    }
  }
};

function updateCartUI() {
  const cartCount = document.getElementById('cartCount');
  const cartHeaderCount = document.getElementById('cartHeaderCount');
  const cartBody = document.getElementById('cartBody');
  const cartItemsList = document.getElementById('cartItemsList');
  const cartEmptyMessage = document.getElementById('cartEmptyMessage');
  const cartTotalPrice = document.getElementById('cartTotalPrice');
  const cartUpsellWidget = document.getElementById('cartUpsellWidget');
  const giftBlock = document.querySelector('.cart-gift-block');
  const giftCheckbox = document.getElementById('giftCheckbox');
  const checkoutBtn = document.querySelector('.checkout-btn');
  
  let totalQty = 0;
  let totalPrice = 0;
  let cartHtml = '';

  const cartKeys = Object.keys(cart);

  if (cartKeys.length === 0) {
    if (cartEmptyMessage) cartEmptyMessage.style.display = 'block';
    if (cartItemsList) {
      cartItemsList.style.display = 'none';
      cartItemsList.innerHTML = '';
    }
    
    if (cartUpsellWidget) cartUpsellWidget.style.display = 'none';
    if (giftCheckbox) {
      giftCheckbox.checked = false;
      // Hide gift note input
      const giftNoteContainer = document.getElementById('giftNoteContainer');
      if (giftNoteContainer) giftNoteContainer.style.display = 'none';
      const giftNote = document.getElementById('giftNote');
      if (giftNote) giftNote.value = '';
    }
    if (giftBlock) giftBlock.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display = 'none';
  } else {
    if (cartEmptyMessage) cartEmptyMessage.style.display = 'none';
    if (cartItemsList) {
      cartItemsList.style.display = 'flex';
    }
    if (giftBlock) giftBlock.style.display = 'block';
    if (checkoutBtn) checkoutBtn.style.display = 'block';
    
    cartKeys.forEach(key => {
      const lastDash = key.lastIndexOf('-');
      const productId = lastDash !== -1 ? key.substring(0, lastDash) : key;
      const variant = lastDash !== -1 ? key.substring(lastDash + 1) : "Default";
      const item = products[productId];
      if (item) {
        const qty = cart[key];
        totalQty += qty;
        totalPrice += item.price * qty;

        // Apply visual filters to thumbnails in cart to match selected color variant
        let filterStyle = '';
        if (variant === 'Maroon') filterStyle = 'filter: hue-rotate(330deg) saturate(1.4);';
        else if (variant === 'Pink') filterStyle = 'filter: hue-rotate(290deg) saturate(1.8);';
        else if (variant === 'Black' || variant === 'Charcoal') filterStyle = 'filter: grayscale(1) brightness(0.6);';
        else if (variant === 'Yellow') filterStyle = 'filter: hue-rotate(40deg) saturate(1.2) sepia(0.2);';
        else if (variant === 'Forest Green') filterStyle = 'filter: hue-rotate(100deg) saturate(1.2);';

        let imageWithFilter = item.imageHtml;
        if (filterStyle) {
          imageWithFilter = item.imageHtml.replace('<img', `<img style="${filterStyle}"`);
        }

        cartHtml += `
          <div class="cart-item">
            <div class="cart-item-img">
              ${imageWithFilter}
            </div>
            <div class="cart-item-details">
              <div class="cart-item-title">${item.title}</div>
              <div style="font-size:0.72rem; color:var(--accent-saffron); margin-bottom:4px;">Color: ${variant}</div>
              <div class="cart-item-price">Rs. ${item.price.toLocaleString('en-IN')}</div>
              <div class="cart-item-qty-control">
                <span class="cart-item-qty-btn" onclick="adjustCartQty('${key}', -1)">-</span>
                <span class="cart-item-qty-val">${qty}</span>
                <span class="cart-item-qty-btn" onclick="adjustCartQty('${key}', 1)">+</span>
              </div>
            </div>
            <div class="cart-item-remove" onclick="removeCartItem('${key}')">
              <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </div>
          </div>
        `;
      }
    });
    
    if (cartItemsList) {
      cartItemsList.innerHTML = cartHtml;
    }
    
    // Show/hide upsell widget based on contents
    if (cartUpsellWidget) {
      cartUpsellWidget.style.display = hasBagButNoPin() ? 'flex' : 'none';
    }
  }

  // Add gift fee if checked
  if (giftCheckbox && giftCheckbox.checked) {
    totalPrice += 50;
  }

  if (cartCount) cartCount.textContent = totalQty;
  if (cartHeaderCount) cartHeaderCount.textContent = totalQty;
  if (cartTotalPrice) cartTotalPrice.textContent = `Rs. ${totalPrice.toLocaleString('en-IN')}`;
  saveState();
}
window.updateCartUI = updateCartUI;

function adjustCartQty(key, change) {
  if (cart[key]) {
    cart[key] += change;
    if (cart[key] <= 0) {
      delete cart[key];
    }
    updateCartUI();
  }
}
window.adjustCartQty = adjustCartQty;

function removeCartItem(key) {
  if (cart[key]) {
    delete cart[key];
    updateCartUI();
    showToast("Item removed from cart", "info");
  }
}
window.removeCartItem = removeCartItem;

function openCart() {
  const sidebar = document.getElementById('cartSidebar');
  const backdrop = document.getElementById('cartBackdrop');
  if (sidebar && backdrop) {
    sidebar.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
window.openCart = openCart;

function closeCart() {
  const sidebar = document.getElementById('cartSidebar');
  const backdrop = document.getElementById('cartBackdrop');
  if (sidebar && backdrop) {
    sidebar.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}
window.closeCart = closeCart;

const cartHeaderBtn = document.getElementById('cartHeaderBtn');
if (cartHeaderBtn) {
  cartHeaderBtn.addEventListener('click', openCart);
}

function triggerCheckout() {
  if (Object.keys(cart).length === 0) {
    showToast("Your cart is empty", "info");
    return;
  }
  openCheckoutModal();
}
window.triggerCheckout = triggerCheckout;

// --- Quick View Modal ---
const modalBackdrop = document.getElementById('modalBackdrop');
const modalGallery = document.getElementById('modalGallery');
const modalCat = document.getElementById('modalCat');
const modalTitle = document.getElementById('modalTitle');
const modalPrice = document.getElementById('modalPrice');
const modalDesc = document.getElementById('modalDesc');
const modalWeaver = document.getElementById('modalWeaver');
const modalQtyVal = document.getElementById('modalQtyVal');
const modalAddBtn = document.getElementById('modalAddBtn');

let modalQty = 1;
window.modalQty = modalQty;

function openQuickView(id) {
  const prod = products[id];
  if (!prod) return;

  currentModalProductId = id;
  window.currentModalProductId = id;
  modalQty = 1;
  window.modalQty = 1;
  if (modalQtyVal) modalQtyVal.textContent = modalQty;

  // Apply same filter logic to quickview modal image based on active color swatch selection
  let filterStyle = '';
  const variant = prod.selectedVariant || "Default";
  if (variant === 'Maroon') filterStyle = 'filter: hue-rotate(330deg) saturate(1.4);';
  else if (variant === 'Pink') filterStyle = 'filter: hue-rotate(290deg) saturate(1.8);';
  else if (variant === 'Black' || variant === 'Charcoal') filterStyle = 'filter: grayscale(1) brightness(0.6);';
  else if (variant === 'Yellow') filterStyle = 'filter: hue-rotate(40deg) saturate(1.2) sepia(0.2);';
  else if (variant === 'Forest Green') filterStyle = 'filter: hue-rotate(100deg) saturate(1.2);';

  let imageWithFilter = prod.imageHtml;
  if (filterStyle) {
    imageWithFilter = prod.imageHtml.replace('<img', `<img style="${filterStyle}"`);
  }

  if (modalGallery) modalGallery.innerHTML = imageWithFilter;
  if (modalCat) modalCat.textContent = prod.categoryDisplay;
  if (modalTitle) modalTitle.textContent = prod.title;
  if (modalPrice) modalPrice.textContent = prod.priceDisplay;
  if (modalDesc) modalDesc.textContent = prod.desc + (prod.selectedVariant ? ` Currently viewing the ${prod.selectedVariant} edition.` : '');
  // if (modalWeaver) modalWeaver.textContent = prod.weaver;

  // Reset add button listener
  if (modalAddBtn) {
    if (prod.stock_count === 0) {
      modalAddBtn.disabled = true;
      modalAddBtn.textContent = 'SOLD OUT';
      modalAddBtn.style.opacity = '0.5';
      modalAddBtn.style.cursor = 'not-allowed';
      modalAddBtn.onclick = null;
    } else {
      modalAddBtn.disabled = false;
      modalAddBtn.textContent = 'Add to Cart';
      modalAddBtn.style.opacity = '';
      modalAddBtn.style.cursor = '';
      modalAddBtn.onclick = (e) => {
        addToCart(id, e, modalQty);
        closeQuickView();
      };
    }
  }

  if (modalBackdrop) {
    modalBackdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
window.openQuickView = openQuickView;

function closeQuickView() {
  if (modalBackdrop) {
    modalBackdrop.classList.remove('open');
    document.body.style.overflow = '';
    currentModalProductId = null;
    window.currentModalProductId = null;
  }
}
window.closeQuickView = closeQuickView;

function closeQuickViewOuter(e) {
  if (e.target === modalBackdrop) {
    closeQuickView();
  }
}
window.closeQuickViewOuter = closeQuickViewOuter;

function adjustModalQty(change) {
  modalQty += change;
  if (modalQty < 1) modalQty = 1;
  window.modalQty = modalQty;
  if (modalQtyVal) modalQtyVal.textContent = modalQty;
}
window.adjustModalQty = adjustModalQty;

// --- Toast Notification System ---
function showToast(message, type = "success") {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const toast = document.createElement('div');
  toast.className = `toast glass ${type}`;
  
  const icon = type === 'success' ? '✓' : 'ℹ';
  const iconClass = type === 'success' ? 'toast-success-icon' : 'toast-info-icon';
  
  toast.innerHTML = `
    <span class="toast-icon ${iconClass}">${icon}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Force repaint
  toast.offsetHeight;
  
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}
window.showToast = showToast;



// --- Premium Maintenance Mode Overlay ---
function showMaintenanceScreen() {
  if (document.getElementById('maintenanceOverlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'maintenanceOverlay';
  overlay.style.position = 'fixed';
  overlay.style.inset = '0';
  overlay.style.backgroundColor = '#0B0B0A';
  overlay.style.zIndex = '999999';
  overlay.style.display = 'flex';
  overlay.style.flexDirection = 'column';
  overlay.style.alignItems = 'center';
  overlay.style.justifyContent = 'center';
  overlay.style.padding = '40px 24px';
  overlay.style.color = '#F4F3EF';
  overlay.style.fontFamily = "'Outfit', 'DM Sans', sans-serif";
  overlay.style.textAlign = 'center';
  overlay.style.overflowY = 'auto';
  overlay.style.background = 'radial-gradient(circle at center, #261605 0%, #0B0B0A 100%)';

  overlay.innerHTML = `
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 6px; background: repeating-linear-gradient(90deg, #D47200 0px, #D47200 10px, #D4A24E 10px, #D4A24E 20px, #0B0B0A 20px, #0B0B0A 30px); opacity: 0.8;"></div>
    
    <div class="glass-card" style="max-width: 500px; padding: 48px; border-radius: 16px; background: rgba(26, 26, 25, 0.65); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.05); box-shadow: 0 25px 50px rgba(0,0,0,0.5); display: flex; flex-direction: column; align-items: center; gap: 24px; position: relative;">
      <img src="assets/logo.png" alt="NiNa Collective Logo" style="height: 64px; width: auto; filter: drop-shadow(0 0 8px rgba(212, 114, 0, 0.3));" />
      <div style="height: 1px; width: 40px; background: #D47200; margin: 8px 0;"></div>
      <h1 style="font-family: 'Fraunces', 'Cormorant Garamond', serif; font-size: 2.2rem; font-weight: 300; line-height: 1.2; letter-spacing: 0.02em; color: #F4F3EF; margin: 0;">
        Under <em>Maintenance</em>
      </h1>
      <p style="font-size: 0.95rem; line-height: 1.7; color: #A3A19C; margin: 0; font-weight: 300;">
        The NiNa Collective team is currently updating the catalog with new handloomed drops. We will be back shortly with premium handcrafted textiles, traditional Puans, and accessories.
      </p>
      <p style="font-size: 0.88rem; line-height: 1.7; color: #D47200; font-family: 'Courier Prime', monospace; margin: 0;">
        Follow our journey for live update notifications:
      </p>
      <div style="display: flex; gap: 16px; margin-top: 8px;">
        <a href="https://www.instagram.com/nina_wearyourroots/" target="_blank" rel="noopener" style="padding: 10px 20px; font-family: 'Courier Prime', monospace; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.02); color: #F4F3EF; cursor: pointer; text-decoration: none; transition: all 0.3s ease; display: inline-block;" onmouseover="this.style.borderColor='#D47200'; this.style.background='rgba(212, 114, 0, 0.05)';" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.1)'; this.style.background='rgba(255, 255, 255, 0.02)';">
          Instagram
        </a>
        <a href="https://www.facebook.com/share/1BLe7FzkUZ/" target="_blank" rel="noopener" style="padding: 10px 20px; font-family: 'Courier Prime', monospace; font-size: 0.78rem; text-transform: uppercase; letter-spacing: 0.05em; border-radius: 6px; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.02); color: #F4F3EF; cursor: pointer; text-decoration: none; transition: all 0.3s ease; display: inline-block;" onmouseover="this.style.borderColor='#D47200'; this.style.background='rgba(212, 114, 0, 0.05)';" onmouseout="this.style.borderColor='rgba(255, 255, 255, 0.1)'; this.style.background='rgba(255, 255, 255, 0.02)';">
          Facebook
        </a>
      </div>
    </div>
    
    <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 6px; background: repeating-linear-gradient(90deg, #D47200 0px, #D47200 10px, #D4A24E 10px, #D4A24E 20px, #0B0B0A 20px, #0B0B0A 30px); opacity: 0.8;"></div>
  `;

  document.body.style.overflow = 'hidden';
  document.body.appendChild(overlay);
}
window.showMaintenanceScreen = showMaintenanceScreen;

// Auto-initialize when the script is loaded
fetchProducts();
fetchSiteContent();
loadSessionFromSupabase();
