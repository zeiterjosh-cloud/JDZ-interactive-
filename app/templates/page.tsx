import type { Metadata } from "next";
import { Sparkles, Star, Download, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Template Marketplace",
  description: "Discover and buy premium app templates. Launch faster with ready-made solutions.",
};

const templates = [
  { name: "SaaS Starter Kit", category: "apps", price: 29, rating: 4.9, downloads: 1240, gradient: "from-purple-500 to-blue-500", tags: ["saas", "auth", "billing"] },
  { name: "Pixel Jump Game", category: "games", price: 19, rating: 4.7, downloads: 890, gradient: "from-blue-500 to-cyan-500", tags: ["game", "platformer", "2d"] },
  { name: "AI Chatbot Widget", category: "tools", price: 39, rating: 4.8, downloads: 2100, gradient: "from-cyan-500 to-emerald-500", tags: ["ai", "chat", "widget"] },
  { name: "E-commerce Store", category: "apps", price: 49, rating: 4.6, downloads: 670, gradient: "from-emerald-500 to-teal-500", tags: ["ecommerce", "store", "payments"] },
  { name: "Portfolio Pro", category: "apps", price: 0, rating: 4.5, downloads: 3400, gradient: "from-violet-500 to-purple-500", tags: ["portfolio", "free", "creative"] },
  { name: "Space Shooter", category: "games", price: 24, rating: 4.8, downloads: 1560, gradient: "from-rose-500 to-pink-500", tags: ["game", "shooter", "arcade"] },
  { name: "Analytics Dashboard", category: "tools", price: 34, rating: 4.7, downloads: 920, gradient: "from-amber-500 to-orange-500", tags: ["analytics", "dashboard", "charts"] },
  { name: "Quiz Builder", category: "tools", price: 14, rating: 4.4, downloads: 450, gradient: "from-teal-500 to-cyan-500", tags: ["quiz", "education", "interactive"] },
];

const categories = ["All", "Apps", "Games", "Tools"];

export default function TemplatesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-white mb-4">
            Template <span className="gradient-text">Marketplace</span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Launch faster with professionally built templates. Buy, customize, and deploy in minutes.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                cat === "All"
                  ? "bg-gradient-nova text-white"
                  : "glass border border-white/10 text-gray-400 hover:text-white hover:border-purple-500/30"
              }`}
            >
              {cat}
            </button>
          ))}
          <div className="flex-1 flex justify-end">
            <input
              type="text"
              placeholder="Search templates..."
              className="glass border border-white/10 rounded-xl px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 w-64"
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {templates.map((template) => (
            <div
              key={template.name}
              className="gradient-border group cursor-pointer hover:-translate-y-2 transition-transform duration-300"
            >
              {/* Preview */}
              <div className={`h-36 rounded-t-2xl bg-gradient-to-br ${template.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-12 h-12 text-white/30" />
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-bold rounded-full ${
                    template.price === 0
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : "bg-black/40 text-white border border-white/10"
                  }`}>
                    {template.price === 0 ? "FREE" : `$${template.price}`}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 relative">
                <h3 className="font-bold text-white text-sm mb-1">{template.name}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1 text-yellow-400 text-xs">
                    <Star className="w-3 h-3 fill-current" />
                    <span>{template.rating}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500 text-xs">
                    <Download className="w-3 h-3" />
                    <span>{template.downloads.toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 mb-3">
                  {template.tags.map((tag) => (
                    <span key={tag} className="flex items-center gap-1 px-2 py-0.5 text-xs glass rounded-full text-gray-400">
                      <Tag className="w-2.5 h-2.5" />
                      {tag}
                    </span>
                  ))}
                </div>
                <button className={`w-full py-2 text-xs font-bold rounded-xl transition-all ${
                  template.price === 0
                    ? "glass border border-white/10 text-gray-300 hover:border-purple-500/30 hover:text-white"
                    : "bg-gradient-nova text-white hover:opacity-90"
                }`}>
                  {template.price === 0 ? "Download Free" : `Buy for $${template.price}`}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Sell CTA */}
        <div className="mt-16 gradient-border p-8 text-center">
          <div className="relative">
            <h2 className="text-2xl font-black text-white mb-3">
              Got a great template?{" "}
              <span className="gradient-text">Sell it here.</span>
            </h2>
            <p className="text-gray-400 mb-6">
              Join 500+ creators earning passive income. Keep 70% of every sale.
            </p>
            <button className="px-8 py-3 bg-gradient-nova text-white font-bold rounded-xl hover:opacity-90 transition-opacity">
              Start Selling Templates
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
