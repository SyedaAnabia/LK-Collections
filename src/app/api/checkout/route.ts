import { NextResponse } from "next/server";
import Stripe from "stripe";

// ✅ Stripe secret key (server-side only)
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;

if (!stripeSecretKey) {
  throw new Error("🚨 Missing STRIPE_SECRET_KEY in environment variables.");
}

// ✅ Initialize Stripe safely
const stripe = new Stripe(stripeSecretKey, {
  apiVersion: "2024-06-20", // keep latest Stripe API version
});

export const POST = async (request: Request) => {
  try {
    const { products } = await request.json();

    if (!products || !Array.isArray(products)) {
      return NextResponse.json(
        { error: "Invalid product data." },
        { status: 400 }
      );
    }

    console.log("📦 Received products:", products);

    // ✅ Step 1: Get all active products from Stripe
    let activeProducts = await stripe.products.list({ active: true });

    // ✅ Step 2: Ensure each product exists in Stripe
    for (const product of products) {
      const matched = activeProducts.data.find(
        (p) => p.name.toLowerCase() === product.name.toLowerCase()
      );

      if (!matched) {
        const newProduct = await stripe.products.create({
          name: product.name,
          default_price_data: {
            currency: "usd",
            unit_amount: product.price, // price in cents (e.g., 5000 = $50)
          },
        });
        console.log("🆕 Created new Stripe product:", newProduct.name);
      }
    }

    // ✅ Step 3: Fetch updated list
    activeProducts = await stripe.products.list({ active: true });

    // ✅ Step 4: Prepare line items
    const lineItems = [];
    for (const product of products) {
      const stripeProduct = activeProducts.data.find(
        (p) => p.name.toLowerCase() === product.name.toLowerCase()
      );

      if (stripeProduct?.default_price) {
        lineItems.push({
          price: stripeProduct.default_price as string,
          quantity: product.quantity,
        });
      }
    }

    // ✅ Step 5: Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: "payment",
      success_url: `https://website-ochre-two-55.vercel.app/success`,
      cancel_url: `https://website-ochre-two-55.vercel.app/`,
    });

    console.log("✅ Stripe session created:", session.id);

    return NextResponse.json({
      id: session.id,
      url: session.url,
    });
  } catch (error: any) {
    console.error("❌ Error during checkout:", error);
    return NextResponse.json(
      { error: "Something went wrong during checkout." },
      { status: 500 }
    );
  }
};
