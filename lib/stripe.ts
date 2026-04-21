import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_test_placeholder", {
  apiVersion: "2026-03-25.dahlia",
});

export const getStripe = () => loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder");

export const PLANS = {
  free: {
    name: "Free",
    price: 0,
    priceId: null,
    features: [
      "3 AI builds per month",
      "5 templates access",
      "Community support",
      "Basic analytics",
    ],
    limits: {
      builds: 3,
      templates: 5,
      projects: 3,
    },
  },
  pro: {
    name: "Pro",
    price: 15,
    priceId: process.env.STRIPE_PRO_PRICE_ID || "price_pro_placeholder",
    features: [
      "50 AI builds per month",
      "All templates access",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "Remove branding",
    ],
    limits: {
      builds: 50,
      templates: -1,
      projects: 20,
    },
  },
  creator: {
    name: "Creator",
    price: 30,
    priceId: process.env.STRIPE_CREATOR_PRICE_ID || "price_creator_placeholder",
    features: [
      "Unlimited AI builds",
      "All templates + marketplace",
      "Sell your templates",
      "Revenue sharing (70%)",
      "Priority support",
      "Advanced analytics",
      "Custom domains",
      "White-label option",
      "API access",
    ],
    limits: {
      builds: -1,
      templates: -1,
      projects: -1,
    },
  },
  studio: {
    name: "Studio",
    price: 60,
    priceId: process.env.STRIPE_STUDIO_PRICE_ID || "price_studio_placeholder",
    features: [
      "Everything in Creator",
      "Team collaboration (10 seats)",
      "Custom AI training",
      "Revenue sharing (85%)",
      "Dedicated support",
      "SLA guarantee",
      "Custom integrations",
      "Advanced white-label",
    ],
    limits: {
      builds: -1,
      templates: -1,
      projects: -1,
    },
  },
};
