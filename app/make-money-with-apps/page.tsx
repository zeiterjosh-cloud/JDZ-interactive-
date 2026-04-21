import type { Metadata } from "next";
import { DollarSign, TrendingUp, Zap, ArrowRight, Check, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Make Money with Apps — Monetize Your Creations",
  description: "Turn your app ideas into passive income. Sell apps, templates, and subscriptions. NovaBuilder creators earn an average of $2,400/month.",
  keywords: ["make money with apps", "app monetization", "sell apps online", "passive income apps", "creator economy"],
};

const earningMethods = [
  {
    icon: "💰",
    title: "Sell Your Apps",
    desc: "Set a one-time price or subscription. Keep 70-85% of every sale.",
    earn: "Avg. $340/mo",
    gradient: "from-purple-500/20 to-blue-500/20",
  },
  {
    icon: "📦",
    title: "Sell Templates",
    desc: "Package your app as a reusable template. Earn every time someone buys it.",
    earn: "Avg. $890/mo",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: "🎮",
    title: "Monetize Games",
    desc: "Add in-app purchases, ads, or premium unlocks to your games.",
    earn: "Avg. $560/mo",
    gradient: "from-cyan-500/20 to-emerald-500/20",
  },
  {
    icon: "🔗",
    title: "Affiliate Referrals",
    desc: "Refer new creators to NovaBuilder. Earn 20% recurring commission.",
    earn: "Up to $200/ref",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
];

const topCreators = [
  { name: "Alex M.", income: "$4,200/mo", apps: 8, avatar: "A" },
  { name: "Sarah K.", income: "$2,800/mo", apps: 5, avatar: "S" },
  { name: "David R.", income: "$6,100/mo", apps: 12, avatar: "D" },
];

const calcItems = [
  { label: "Monthly Revenue", value: "$1,450", colorClass: "text-emerald-400" },
  { label: "Your Cut (70%)", value: "$1,015", colorClass: "gradient-text" },
  { label: "Annual Earning", value: "$12,180", colorClass: "text-cyan-400" },
];

export default function MakeMoneyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-emerald-500/20 text-sm text-emerald-300 mb-6">
          <DollarSign className="w-3.5 h-3.5" />
          Creator Economy
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
          Make money
          <br />
          <span className="gradient-text">with your apps.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
          Join thousands of creators earning passive income by building and selling apps,
          games, and templates on NovaBuilder. Average creator earns $2,400/month.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Link
            href="/dashboard"
            className="group px-8 py-4 bg-gradient-nova text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all flex items-center gap-2"
          >
            <DollarSign className="w-5 h-5" />
            Start Earning Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/pricing"
            className="px-8 py-4 glass border border-white/10 text-gray-300 font-semibold rounded-xl text-lg hover:text-white hover:border-purple-500/30 transition-all"
          >
            View Creator Plans
          </Link>
        </div>

        {/* Social proof */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
          {[
            "500+ active creators",
            "$2.4M total paid out",
            "70-85% revenue share",
          ].map((proof, i) => (
            <div key={proof} className="flex items-center gap-2">
              {i > 0 && <span className="w-1 h-1 bg-gray-600 rounded-full hidden sm:block" />}
              <Check className="w-4 h-4 text-emerald-400" />
              <span>{proof}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Earning Methods */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-white text-center mb-4">
          4 ways to <span className="gradient-text">earn money</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">Multiple income streams, all from one platform.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {earningMethods.map((method) => (
            <div
              key={method.title}
              className="gradient-border p-6 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl">{method.icon}</div>
                  <span className="px-3 py-1 text-sm font-bold text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                    {method.earn}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400">{method.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Top Creators */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-white text-center mb-10">
          Top <span className="gradient-text">creators</span> this month
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {topCreators.map((creator) => (
            <div key={creator.name} className="gradient-border p-6 text-center">
              <div className="relative">
                <div className="w-16 h-16 rounded-full bg-gradient-nova flex items-center justify-center text-2xl font-black text-white mx-auto mb-4">
                  {creator.avatar}
                </div>
                <h3 className="font-bold text-white mb-1">{creator.name}</h3>
                <div className="text-2xl font-black gradient-text mb-1">{creator.income}</div>
                <div className="text-sm text-gray-500">{creator.apps} apps published</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Revenue Calculator */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mb-24">
        <div className="gradient-border p-8">
          <div className="relative text-center">
            <TrendingUp className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
            <h2 className="text-2xl font-black text-white mb-2">
              Revenue <span className="gradient-text">Calculator</span>
            </h2>
            <p className="text-gray-400 mb-6">If you sell 1 template at $29 and get 50 buyers/month:</p>
            <div className="grid grid-cols-3 gap-4 mb-6">
              {calcItems.map((calc) => (
                <div key={calc.label} className="glass rounded-xl p-4">
                  <div className={`text-2xl font-black mb-1 ${calc.colorClass}`}>
                    {calc.value}
                  </div>
                  <div className="text-xs text-gray-500">{calc.label}</div>
                </div>
              ))}
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-nova text-white font-bold rounded-xl hover:opacity-90 transition-opacity"
            >
              <Zap className="w-5 h-5" />
              Start Earning — Creator Plan
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
        <h2 className="text-3xl font-black text-white mb-4">
          Your first sale is closer than you think.
        </h2>
        <p className="text-gray-400 mb-8">
          3 free builds to get started. Upgrade when you&apos;re ready to earn.
        </p>
        <Link
          href="/dashboard"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-nova text-white font-bold rounded-xl text-lg hover:opacity-90 transition-opacity"
        >
          <DollarSign className="w-5 h-5" />
          Start Building &amp; Earning
        </Link>
      </section>
    </div>
  );
}
