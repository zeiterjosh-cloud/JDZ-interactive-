"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Sparkles, Code2, Smartphone, Globe, Save, RefreshCw } from "lucide-react";
import { useState } from "react";

const suggestions = [
  "A todo app with AI prioritization",
  "A multiplayer browser game with leaderboards",
  "A SaaS dashboard for social media analytics",
  "A recipe app with meal planning features",
];

export default function BuildAppWithAI() {
  const [idea, setIdea] = useState("");
  const [generating, setGenerating] = useState(false);
  const [generated, setGenerated] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("web");

  const handleGenerate = async () => {
    if (!idea.trim()) return;
    setGenerating(true);
    setGenerated(false);
    await new Promise((r) => setTimeout(r, 2500));
    setGenerating(false);
    setGenerated(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6 border border-purple-500/30">
            <Cpu className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-white/70">AI App Builder</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Build any app with <span className="gradient-text">AI power</span>
          </h1>
          <p className="text-white/50 text-lg">
            Describe your idea. Our AI builds it. Launch in minutes.
          </p>
        </motion.div>

        {/* Platform Selector */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex gap-3 justify-center mb-8"
        >
          {[
            { id: "web", icon: Globe, label: "Web App" },
            { id: "mobile", icon: Smartphone, label: "Mobile App" },
            { id: "game", icon: Code2, label: "Browser Game" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setSelectedPlatform(id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                selectedPlatform === id
                  ? "btn-gradient text-white"
                  : "glass text-white/50 hover:text-white border border-white/10"
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </motion.div>

        {/* Main Input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass gradient-border rounded-2xl p-6 mb-6"
        >
          <label className="text-white/60 text-sm mb-3 block">Describe your app idea</label>
          <textarea
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            placeholder="e.g. A productivity app that uses AI to organize tasks by priority and deadline..."
            className="w-full bg-transparent text-white placeholder-white/20 resize-none focus:outline-none text-lg leading-relaxed min-h-[120px]"
          />
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
            <span className="text-white/30 text-xs">{idea.length} / 500 characters</span>
            <button
              onClick={handleGenerate}
              disabled={!idea.trim() || generating}
              className="btn-gradient text-white font-semibold px-6 py-2.5 rounded-xl flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {generating ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  Generating...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  Generate
                </>
              )}
            </button>
          </div>
        </motion.div>

        {/* Suggestions */}
        <div className="flex gap-2 flex-wrap mb-8">
          <span className="text-white/30 text-sm py-1">Try:</span>
          {suggestions.map((s) => (
            <button
              key={s}
              onClick={() => setIdea(s)}
              className="text-xs glass text-white/50 hover:text-white px-3 py-1.5 rounded-lg border border-white/10 hover:border-white/20 transition-all"
            >
              {s}
            </button>
          ))}
        </div>

        {/* Output Preview */}
        <AnimatePresence>
          {generating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass gradient-border rounded-2xl p-6 mb-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" style={{ animationDelay: "0.2s" }} />
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDelay: "0.4s" }} />
                <span className="text-white/50 text-sm">AI is building your app...</span>
              </div>
              <div className="space-y-3">
                {["Analyzing requirements", "Generating components", "Optimizing architecture", "Finalizing UI"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 animate-pulse" style={{ animationDelay: `${i * 0.3}s` }} />
                    <div className="flex-1 h-2 rounded-full bg-white/5">
                      <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 animate-pulse w-full" style={{ animationDelay: `${i * 0.3}s` }} />
                    </div>
                    <span className="text-white/30 text-xs">{step}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {generated && !generating && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass gradient-border rounded-2xl overflow-hidden"
            >
              {/* Preview header */}
              <div className="flex items-center justify-between p-4 border-b border-white/5">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-white/40 text-xs ml-2">Preview — {idea.slice(0, 40)}...</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => { setGenerated(false); setIdea(""); }}
                    className="glass glass-hover text-white/60 text-xs px-3 py-1.5 rounded-lg flex items-center gap-1"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Regenerate
                  </button>
                  <button className="btn-gradient text-white text-xs px-3 py-1.5 rounded-lg flex items-center gap-1">
                    <Save className="w-3 h-3" />
                    Save Project
                  </button>
                </div>
              </div>

              {/* Simulated app preview */}
              <div className="p-8 bg-gradient-to-br from-purple-900/20 to-blue-900/10 min-h-[300px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-400 flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">Your App is Ready! 🎉</h3>
                  <p className="text-white/50 text-sm max-w-sm mx-auto">
                    AI has generated a complete app structure based on your description. Click &quot;Save Project&quot; to access the full editor.
                  </p>
                  <div className="grid grid-cols-3 gap-3 mt-6 text-center">
                    {["Components", "Pages", "APIs"].map((item, i) => (
                      <div key={item} className="glass rounded-xl p-3">
                        <div className="text-xl font-bold gradient-text">{[8, 5, 3][i]}</div>
                        <div className="text-xs text-white/40">{item}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
