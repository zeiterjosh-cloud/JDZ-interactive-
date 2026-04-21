import { Metadata } from "next";
import Link from "next/link";
import { DollarSign, TrendingUp, CreditCard, BarChart3, ArrowRight, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Make Money with Apps – Monetize Your Creations | NovaBuilder",
  description: "Turn your apps and games into revenue streams. Sell, monetize, and earn with NovaBuilder's built-in Stripe integration and marketplace.",
  keywords: ["make money with apps", "app monetization", "sell apps online", "earn from games"],
};

const monetizationMethods = [
  { icon: "💰", title: "Direct Sales", description: "Sell your apps and games directly to users. Keep 80% of every sale.", amount: "Up to $10K/mo" },
  { icon: "📱", title: "In-App Purchases", description: "Add premium features, coins, or upgrades to free apps.", amount: "Up to $50K/mo" },
  { icon: "🔄", title: "Subscriptions", description: "Recurring monthly revenue from loyal users.", amount: "Unlimited" },
  { icon: "🏪", title: "Template Sales", description: "Sell your templates in our marketplace to other creators.", amount: "Passive income" },
];

export default function MakeMoneyWithAppsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-emerald-500/30">
            <DollarSign className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-white/70">Monetization Platform</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Turn your apps into
            <br />
            <span className="gradient-text">real income</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-8">
            Build once, earn forever. NovaBuilder&apos;s monetization tools make it easy to turn your creations into revenue streams.
          </p>
          <Link href="/pricing" className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 neon-glow">
            Start Earning Today
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Revenue Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {[
            { value: "$2M+", label: "Creator earnings", icon: DollarSign },
            { value: "10K+", label: "Active creators", icon: TrendingUp },
            { value: "80%", label: "Revenue share", icon: CreditCard },
            { value: "50K+", label: "Apps monetized", icon: BarChart3 },
          ].map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="glass gradient-border rounded-2xl p-6 text-center">
                <Icon className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-white/40 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Monetization Methods */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Multiple ways to <span className="gradient-text">earn</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {monetizationMethods.map((method) => (
              <div key={method.title} className="glass gradient-border rounded-2xl p-6 hover:border-purple-500/40 transition-all">
                <div className="text-3xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
                <p className="text-white/50 mb-4">{method.description}</p>
                <span className="text-emerald-400 font-semibold text-sm">{method.amount}</span>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { step: "01", title: "Build your app", description: "Use AI to create your app or game in minutes. No coding required." },
              { step: "02", title: "Add monetization", description: "Set your price, add subscriptions, or enable in-app purchases with one click." },
              { step: "03", title: "Get paid", description: "Receive payouts directly to your bank account via Stripe. Weekly payouts available." },
            ].map((item) => (
              <div key={item.step} className="glass gradient-border rounded-2xl p-6 text-center">
                <div className="text-4xl font-extrabold gradient-text mb-4">{item.step}</div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/50">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl p-12 text-center overflow-hidden bg-gradient-to-br from-emerald-900/30 to-blue-900/30 border border-emerald-500/30">
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Start monetizing today</h2>
            <p className="text-white/50 text-lg mb-8">Join creators earning with NovaBuilder</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pricing" className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2">
                <Zap className="w-5 h-5" />
                Get Creator Plan
              </Link>
              <Link href="/dashboard" className="glass glass-hover text-white font-semibold px-8 py-4 rounded-xl text-lg inline-flex items-center gap-2 border border-white/10">
                View Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
