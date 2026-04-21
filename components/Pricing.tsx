"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { PLANS } from "@/lib/stripe";

const planKeys = ["free", "pro", "creator", "studio"] as const;
type PlanKey = typeof planKeys[number];

const planBorderColors: Record<PlanKey, string> = {
  free: "border-white/10",
  pro: "border-blue-500/30",
  creator: "border-purple-500/50",
  studio: "border-violet-500/30",
};

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  const getPrice = (price: number) =>
    billing === "yearly" ? Math.floor(price * 0.8) : price;

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4 text-white">
          Simple, transparent{" "}
          <span className="gradient-text">pricing</span>
        </h2>
        <p className="text-lg text-gray-400 mb-8">Start free. Scale when you&apos;re ready.</p>

        {/* Toggle */}
        <div className="inline-flex items-center glass rounded-xl p-1 gap-1">
          <button
            onClick={() => setBilling("monthly")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
              billing === "monthly"
                ? "bg-gradient-nova text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBilling("yearly")}
            className={`px-4 py-2 text-sm font-medium rounded-lg transition-all flex items-center gap-2 ${
              billing === "yearly"
                ? "bg-gradient-nova text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Yearly
            <span className="text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-400 rounded-full">
              Save 20%
            </span>
          </button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {planKeys.map((key, i) => {
          const plan = PLANS[key];
          const isCreator = key === "creator";
          const price = getPrice(plan.price);

          return (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative rounded-2xl p-6 border ${planBorderColors[key]} ${
                isCreator ? "shadow-2xl shadow-purple-500/20" : ""
              } overflow-hidden`}
              style={{
                background: isCreator
                  ? "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(6,182,212,0.15))"
                  : "rgba(255,255,255,0.04)",
                backdropFilter: "blur(20px)",
              }}
            >
              {isCreator && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-nova" />
              )}

              {isCreator && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 text-xs font-bold bg-gradient-nova text-white rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Most Popular
                  </span>
                </div>
              )}

              <div className="mb-6 mt-2">
                <h3 className={`text-lg font-bold mb-1 ${isCreator ? "gradient-text" : "text-white"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">
                    {price === 0 ? "Free" : `$${price}`}
                  </span>
                  {price > 0 && (
                    <span className="text-gray-500 text-sm">/mo</span>
                  )}
                </div>
                {billing === "yearly" && price > 0 && (
                  <p className="text-xs text-emerald-400 mt-1">
                    Billed ${price * 12}/year
                  </p>
                )}
              </div>

              <button
                className={`w-full py-3 rounded-xl text-sm font-bold mb-6 transition-all duration-300 ${
                  isCreator
                    ? "bg-gradient-nova text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-105"
                    : "glass border border-white/10 text-gray-300 hover:text-white hover:border-purple-500/30"
                }`}
              >
                {key === "free" ? "Start Free" : "Get Started"}
              </button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Check
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        isCreator ? "text-cyan-400" : "text-gray-400"
                      }`}
                    />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center text-sm text-gray-500 mt-8"
      >
        All plans include a 14-day free trial. Cancel anytime. Powered by{" "}
        <span className="gradient-text font-semibold">Stripe</span>.
      </motion.p>
    </section>
  );
}
