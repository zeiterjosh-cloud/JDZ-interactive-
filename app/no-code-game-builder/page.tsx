import { Metadata } from "next";
import Link from "next/link";
import { Gamepad2, Zap, Trophy, Users, Star, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "No-Code Game Builder – Create Browser Games with AI | NovaBuilder",
  description: "Build browser games without coding. Use AI to generate game mechanics, levels, and assets. Launch your game in minutes with NovaBuilder.",
  keywords: ["no-code game builder", "AI game creator", "browser game builder", "make games without code"],
};

const gameTypes = [
  { name: "Platform Games", icon: "🏃", description: "Side-scrolling platformers with physics" },
  { name: "Puzzle Games", icon: "🧩", description: "Logic puzzles and brain teasers" },
  { name: "RPG Games", icon: "⚔️", description: "Role-playing games with story" },
  { name: "Arcade Games", icon: "👾", description: "Classic arcade-style games" },
  { name: "Strategy Games", icon: "♟️", description: "Turn-based strategy games" },
  { name: "Card Games", icon: "🃏", description: "Digital card and board games" },
];

export default function NoCodeGameBuilderPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-purple-500/30">
            <Gamepad2 className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/70">No-Code Game Builder</span>
          </div>
          <h1 className="text-5xl sm:text-6xl font-bold mb-6 leading-tight">
            Create amazing games
            <br />
            <span className="gradient-text">without a single line of code</span>
          </h1>
          <p className="text-xl text-white/50 max-w-2xl mx-auto mb-8 leading-relaxed">
            Turn your game idea into a playable browser game in minutes. AI handles the hard stuff — you just create.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/build-app-with-ai" className="btn-gradient text-white font-semibold px-8 py-4 rounded-xl text-lg flex items-center gap-2 justify-center neon-glow">
              Start Building
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="/pricing" className="glass glass-hover text-white font-semibold px-8 py-4 rounded-xl text-lg flex items-center gap-2 justify-center border border-white/10">
              View Pricing
            </Link>
          </div>
        </div>

        {/* Game Types */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Build any type of <span className="gradient-text">game</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {gameTypes.map((type) => (
              <div key={type.name} className="glass gradient-border rounded-2xl p-4 text-center hover:border-purple-500/40 transition-all cursor-pointer group">
                <div className="text-3xl mb-2">{type.icon}</div>
                <h3 className="font-semibold text-sm mb-1">{type.name}</h3>
                <p className="text-white/40 text-xs">{type.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why NovaBuilder for <span className="gradient-text">game development?</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { icon: Zap, title: "AI Game Generation", description: "Describe your game concept and AI generates the full game logic, mechanics, and UI automatically." },
              { icon: Trophy, title: "Built-in Leaderboards", description: "Every game comes with global leaderboards, achievements, and social sharing built in." },
              { icon: Users, title: "Multiplayer Ready", description: "Add real-time multiplayer to any game with one click. WebSocket infrastructure included." },
              { icon: Star, title: "Monetize Your Games", description: "Sell your games or add in-game purchases. Stripe integration makes monetization effortless." },
            ].map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="glass gradient-border rounded-2xl p-6 flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-white/50">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="relative rounded-3xl p-12 text-center overflow-hidden bg-gradient-to-br from-purple-900/40 to-blue-900/30 border border-purple-500/30">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Ready to build your game?</h2>
            <p className="text-white/50 text-lg mb-8">Join 10,000+ creators building with NovaBuilder</p>
            <Link href="/build-app-with-ai" className="btn-gradient text-white font-semibold px-10 py-4 rounded-xl text-lg inline-flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Start Free Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
