"use client";
import { motion } from "framer-motion";
import { Cpu, Paintbrush, DollarSign, Globe, Layers, Shield } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Builder",
    description: "Describe your app idea and watch AI build it in seconds. No coding required.",
    gradient: "from-purple-500 to-blue-500",
  },
  {
    icon: Paintbrush,
    title: "Template Marketplace",
    description: "Browse thousands of premium templates. Customize and deploy instantly.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: DollarSign,
    title: "Monetization Engine",
    description: "Sell your creations. Earn money directly to your bank via Stripe.",
    gradient: "from-cyan-500 to-emerald-500",
  },
  {
    icon: Globe,
    title: "One-Click Deploy",
    description: "Deploy to production with a single click. Global CDN included.",
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    icon: Layers,
    title: "Custom Components",
    description: "Mix and match hundreds of pre-built components to create anything.",
    gradient: "from-purple-600 to-pink-500",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with SOC2 compliance and end-to-end encryption.",
    gradient: "from-orange-500 to-red-500",
  },
];

export default function Cards() {
  return (
    <section id="features" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Everything you need to{" "}
            <span className="gradient-text">build & monetize</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            The complete toolkit for modern app creators. Build faster, launch sooner, earn more.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass gradient-border p-6 rounded-2xl group cursor-default relative"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/50 leading-relaxed">{feature.description}</p>

                {/* Glass reflection */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/[0.03] to-transparent pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
