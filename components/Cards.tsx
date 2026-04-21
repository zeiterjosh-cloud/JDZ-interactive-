"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Globe, Cpu, TrendingUp, Palette } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "AI-Powered Generation",
    description: "Describe your app idea and watch AI build it in seconds. GPT-4 powered, optimized for production.",
    gradient: "from-purple-500/20 to-blue-500/20",
    iconColor: "text-purple-400",
  },
  {
    icon: Zap,
    title: "Instant Deployment",
    description: "One click to deploy. Your app goes live with a custom domain, SSL, and global CDN.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: TrendingUp,
    title: "Built-in Monetization",
    description: "Charge for your apps, sell templates, earn recurring revenue. Payouts via Stripe.",
    gradient: "from-cyan-500/20 to-emerald-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Palette,
    title: "Template Marketplace",
    description: "Buy and sell templates. Thousands of ready-made apps and games to launch immediately.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    iconColor: "text-emerald-400",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Edge-deployed worldwide. Sub-50ms response times. Built for scale from day one.",
    gradient: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-400",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "SOC 2 compliant. End-to-end encryption. Auth, roles, and permissions built in.",
    gradient: "from-rose-500/20 to-pink-500/20",
    iconColor: "text-rose-400",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-black mb-4">
          <span className="gradient-text">Everything you need</span>
          <span className="text-white"> to build and earn</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          From idea to income. NovaBuilder handles the tech so you can focus on what matters.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="gradient-border p-6 group cursor-default overflow-hidden"
          >
            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative">
              <div className={`w-12 h-12 rounded-xl glass flex items-center justify-center mb-4 ${feature.iconColor} group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
