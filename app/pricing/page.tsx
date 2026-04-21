import Pricing from "@/components/Pricing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing – NovaBuilder",
  description: "Simple, transparent pricing for every creator. Start free, scale as you grow.",
};

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Pricing />
      </div>
    </div>
  );
}
