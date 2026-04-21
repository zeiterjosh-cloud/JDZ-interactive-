import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2026-03-25.dahlia",
  typescript: true,
});

export const STRIPE_PRICES = {
  pro: process.env.STRIPE_PRICE_PRO || "price_pro",
  creator: process.env.STRIPE_PRICE_CREATOR || "price_creator",
  studio: process.env.STRIPE_PRICE_STUDIO || "price_studio",
};

export async function createCheckoutSession({
  priceId,
  userId,
  email,
  successUrl,
  cancelUrl,
}: {
  priceId: string;
  userId: string;
  email: string;
  successUrl: string;
  cancelUrl: string;
}) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [{ price: priceId, quantity: 1 }],
    mode: "subscription",
    success_url: successUrl,
    cancel_url: cancelUrl,
    customer_email: email,
    metadata: { userId },
  });

  return session;
}
