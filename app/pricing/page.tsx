import type { Metadata } from "next";
import Pricing from "@/components/Pricing";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing. Start free and scale with your business. NovaBuilder plans from $0 to $60/mo.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="py-16 text-center">
        <h1 className="text-5xl font-black text-white mb-4">
          Choose your <span className="gradient-text">plan</span>
        </h1>
        <p className="text-lg text-gray-400">Start free. Upgrade when you need more.</p>
      </div>
      <Pricing />
    </div>
  );
}
