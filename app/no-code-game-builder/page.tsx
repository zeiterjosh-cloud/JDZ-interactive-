import type { Metadata } from "next";
import { Gamepad2, Zap, Trophy, Users, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No-Code Game Builder — Build Games with AI",
  description: "Create browser games without coding. Use our AI game builder to design, build, and monetize games in minutes. Platformers, shooters, puzzles and more.",
  keywords: ["no code game builder", "AI game creator", "build games without coding", "browser game maker"],
};

const gameTypes = [
  { name: "2D Platformer", emoji: "🏃", color: "from-purple-500 to-blue-500" },
  { name: "Space Shooter", emoji: "🚀", color: "from-blue-500 to-cyan-500" },
  { name: "Puzzle Game", emoji: "🧩", color: "from-cyan-500 to-emerald-500" },
  { name: "RPG Adventure", emoji: "⚔️", color: "from-emerald-500 to-teal-500" },
  { name: "Tower Defense", emoji: "🏰", color: "from-violet-500 to-purple-500" },
  { name: "Endless Runner", emoji: "🌟", color: "from-rose-500 to-pink-500" },
];

const steps = [
  { step: "01", title: "Choose a game type", desc: "Select from our library of game templates or start from scratch." },
  { step: "02", title: "Describe your vision", desc: "Tell our AI what your game should look, feel, and play like." },
  { step: "03", title: "AI builds it for you", desc: "Watch in real-time as AI generates your game code and assets." },
  { step: "04", title: "Publish & earn", desc: "Deploy to the web instantly. Charge players or sell the template." },
];

export default function NoCodeGameBuilderPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            <Gamepad2 className="w-3.5 h-3.5" />
            No-Code Game Builder
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6">
            Build games with AI.
            <br />
            <span className="gradient-text">Zero code required.</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-10">
            Create professional browser games using AI. No coding knowledge needed.
            From concept to playable game in minutes, not months.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/build-app-with-ai"
              className="group px-8 py-4 bg-gradient-nova text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all flex items-center gap-2"
            >
              <Gamepad2 className="w-5 h-5" />
              Start Building Games
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/templates"
              className="px-8 py-4 glass border border-white/10 text-gray-300 font-semibold rounded-xl text-lg hover:text-white hover:border-purple-500/30 transition-all"
            >
              Browse Game Templates
            </Link>
          </div>
        </div>
      </section>

      {/* Game Types */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-white text-center mb-4">
          Every game type,{" "}
          <span className="gradient-text">AI-powered</span>
        </h2>
        <p className="text-gray-400 text-center mb-10">From casual to complex — we build it all.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {gameTypes.map((type) => (
            <div
              key={type.name}
              className="gradient-border p-6 text-center hover:-translate-y-2 transition-transform duration-300 cursor-pointer group"
            >
              <div className="relative">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${type.color} flex items-center justify-center text-3xl mx-auto mb-3 group-hover:scale-110 transition-transform`}>
                  {type.emoji}
                </div>
                <h3 className="font-bold text-white">{type.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <h2 className="text-3xl font-black text-white text-center mb-12">
          How it <span className="gradient-text">works</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.step} className="gradient-border p-6">
              <div className="relative">
                <div className="text-4xl font-black gradient-text mb-3">{step.step}</div>
                <h3 className="font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Trophy, value: "10K+", label: "Games Built", color: "text-yellow-400" },
            { icon: Users, value: "50K+", label: "Players Reached", color: "text-cyan-400" },
            { icon: Zap, value: "<60s", label: "Average Build Time", color: "text-purple-400" },
          ].map((stat) => (
            <div key={stat.label} className="gradient-border p-8 text-center">
              <div className="relative">
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className="text-4xl font-black gradient-text mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="gradient-border p-12">
          <div className="relative">
            <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-4" />
            <h2 className="text-3xl font-black text-white mb-4">
              Ready to build your first game?
            </h2>
            <p className="text-gray-400 mb-8">3 free builds. No credit card. Launch today.</p>
            <Link
              href="/build-app-with-ai"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-nova text-white font-bold rounded-xl text-lg hover:opacity-90 transition-opacity"
            >
              <Gamepad2 className="w-5 h-5" />
              Build My First Game
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
