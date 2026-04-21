"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Sparkles, Code2, Globe, Smartphone, ArrowRight, Check } from "lucide-react";

const appTypes = [
  { icon: Globe, label: "Web App", description: "Full-stack web application" },
  { icon: Smartphone, label: "Mobile App", description: "iOS & Android ready" },
  { icon: Code2, label: "Game", description: "Browser-based game" },
];

const exampleIdeas = [
  "A task management app with team collaboration",
  "A 2D platformer game with pixel art style",
  "An AI-powered writing assistant tool",
  "A social media analytics dashboard",
];

function BuilderUI() {
  const [idea, setIdea] = useState("");
  const [selectedType, setSelectedType] = useState("Web App");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);

  const handleGenerate = () => {
    if (!idea.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setGenerated(true);
    }, 3000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* App type selector */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        {appTypes.map((type) => (
          <button
            key={type.label}
            onClick={() => setSelectedType(type.label)}
            className={`p-4 rounded-xl border transition-all text-left ${
              selectedType === type.label
                ? "border-purple-500/50 bg-purple-500/10 text-white"
                : "glass border-white/10 text-gray-400 hover:text-white hover:border-white/20"
            }`}
          >
            <type.icon className="w-6 h-6 mb-2" />
            <div className="text-sm font-semibold">{type.label}</div>
            <div className="text-xs opacity-60">{type.description}</div>
          </button>
        ))}
      </div>

      {/* Input */}
      <div className="gradient-border p-6 mb-6">
        <div className="relative">
          <label className="block text-sm text-gray-400 mb-2">Describe your app idea</label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            rows={4}
            placeholder="e.g. A task management app where teams can collaborate, assign tasks, set deadlines, and track progress with beautiful charts..."
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
          />
          <div className="flex flex-wrap gap-2 mt-3">
            <span className="text-xs text-gray-500">Try:</span>
            {exampleIdeas.map((ex) => (
              <button
                key={ex}
                onClick={() => setIdea(ex)}
                className="text-xs px-2 py-1 glass rounded-full text-gray-400 hover:text-purple-400 transition-colors"
              >
                {ex.slice(0, 30)}...
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Generate button */}
      <button
        onClick={handleGenerate}
        disabled={!idea.trim() || isGenerating}
        className="w-full py-4 bg-gradient-nova text-white font-bold rounded-xl text-lg hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mb-8"
      >
        {isGenerating ? (
          <>
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Generating your app...
          </>
        ) : (
          <>
            <Zap className="w-5 h-5" />
            Generate App
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Generated preview */}
      <AnimatePresence>
        {generated && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-border p-6"
          >
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <h3 className="font-bold text-white">App Generated Successfully!</h3>
              </div>

              {/* Preview mockup */}
              <div className="glass rounded-xl p-4 mb-4 font-mono text-xs text-gray-400">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-gray-500">my-app.novabuilder.ai</span>
                </div>
                <div className="space-y-1">
                  <div className="text-purple-400">// Generated: {selectedType}</div>
                  <div className="text-cyan-400">✓ Frontend components created</div>
                  <div className="text-cyan-400">✓ Backend API routes configured</div>
                  <div className="text-cyan-400">✓ Database schema ready</div>
                  <div className="text-cyan-400">✓ Auth system integrated</div>
                  <div className="text-cyan-400">✓ Deployment configured</div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "Pages", value: "8" },
                  { label: "Components", value: "24" },
                  { label: "API Routes", value: "12" },
                  { label: "Deploy Ready", value: "Yes" },
                ].map((s) => (
                  <div key={s.label} className="glass rounded-xl p-3 text-center">
                    <div className="text-xl font-black gradient-text">{s.value}</div>
                    <div className="text-xs text-gray-500">{s.label}</div>
                  </div>
                ))}
              </div>

              <div className="flex gap-3 mt-4">
                <button className="flex-1 py-3 bg-gradient-nova text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity">
                  Save &amp; Deploy
                </button>
                <button className="flex-1 py-3 glass border border-white/10 text-gray-300 text-sm font-bold rounded-xl hover:text-white transition-colors">
                  Preview App
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function BuildAppPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            AI-Powered App Builder
          </div>
          <h1 className="text-5xl sm:text-6xl font-black text-white mb-4">
            Build any app{" "}
            <span className="gradient-text">with AI</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Describe your idea. Our AI builds it. Launch in minutes.
            No code required.
          </p>

          {/* Builds remaining */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass rounded-xl border border-emerald-500/20 text-sm">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 font-medium">3 free builds remaining</span>
            <span className="text-gray-500">· No credit card needed</span>
          </div>
        </div>

        <BuilderUI />

        {/* Features */}
        <div className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { icon: Zap, title: "Instant Generation", desc: "From idea to working code in under 60 seconds." },
            { icon: Check, title: "Production Ready", desc: "Deployed with auth, database, and CDN automatically." },
            { icon: Globe, title: "Any Platform", desc: "Web, mobile, game — we build it all." },
          ].map((f) => (
            <div key={f.title} className="gradient-border p-6 text-center">
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-nova flex items-center justify-center mx-auto mb-4">
                  <f.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-bold text-white mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
