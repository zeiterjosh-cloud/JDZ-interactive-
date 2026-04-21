"use client";
import { motion } from "framer-motion";
import { Check, Zap, Star, Crown, Building2 } from "lucide-react";
import Link from "next/link";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/month",
    icon: Zap,
    description: "Perfect for getting started",
    features: [
      "3 app builds per month",
      "Basic templates",
      "Community support",
      "NovaBuilder branding",
      "1 active project",
    ],
    cta: "Start Free",
    href: "/dashboard",
    highlighted: false,
    gradient: "from-gray-600 to-gray-500",
  },
  {
    name: "Pro",
    price: "$15",
    period: "/month",
    icon: Star,
    description: "For serious builders",
    features: [
      "20 app builds per month",
      "All templates",
      "Priority support",
      "Remove branding",
      "5 active projects",
      "Analytics dashboard",
    ],
    cta: "Start Pro",
    href: "/dashboard",
    highlighted: false,
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    name: "Creator",
    price: "$30",
    period: "/month",
    icon: Crown,
    description: "Best for creators & monetization",
    features: [
      "Unlimited builds",
      "Premium templates",
      "24/7 priority support",
      "White-label option",
      "Unlimited projects",
      "Monetization tools",
      "Stripe payouts",
      "Advanced analytics",
    ],
    cta: "Start Creator",
    href: "/dashboard",
    highlighted: true,
    gradient: "from-purple-600 to-blue-500",
  },
  {
    name: "Studio",
    price: "$60",
    period: "/month",
    icon: Building2,
    description: "For teams & agencies",
    features: [
      "Everything in Creator",
      "Team collaboration",
      "API access",
      "Custom integrations",
      "Dedicated account manager",
      "SLA guarantee",
      "Custom branding",
      "Advanced security",
    ],
    cta: "Start Studio",
    href: "/dashboard",
    highlighted: false,
    gradient: "from-purple-800 to-pink-600",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Simple, <span className="gradient-text">transparent</span> pricing
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Start free. Scale as you grow. No hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative rounded-2xl p-6 flex flex-col ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-purple-900/40 to-blue-900/20 border-2 border-purple-500/50 shadow-[0_0_40px_rgba(139,92,246,0.3)]"
                    : "glass gradient-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="btn-gradient text-white text-xs font-bold px-4 py-1.5 rounded-full">
                      ⭐ MOST POPULAR
                    </span>
                  </div>
                )}

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>

                <h3 className="text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-white/40 text-sm mb-4">{plan.description}</p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-extrabold gradient-text">{plan.price}</span>
                  <span className="text-white/40">{plan.period}</span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-white/70">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`w-full text-center font-semibold py-3 rounded-xl transition-all duration-300 ${
                    plan.highlighted
                      ? "btn-gradient text-white"
                      : "glass glass-hover text-white border border-white/10 hover:border-white/20"
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
