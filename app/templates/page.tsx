"use client";
import { motion } from "framer-motion";
import { Search, Star, Download, Tag, Plus } from "lucide-react";
import { useState } from "react";

const tags = ["All", "Apps", "Games", "Tools", "E-commerce", "SaaS", "Portfolio"];

const templates = [
  { id: 1, name: "TaskFlow Pro", category: "Apps", rating: 4.9, downloads: 1240, price: "$9", author: "NovaBuilder", preview: "from-purple-500 to-blue-500", tag: "Popular" },
  { id: 2, name: "Pixel Runner", category: "Games", rating: 4.7, downloads: 890, price: "Free", author: "GameDev", preview: "from-blue-500 to-cyan-500", tag: "Free" },
  { id: 3, name: "BudgetBot AI", category: "Tools", rating: 4.8, downloads: 2100, price: "$19", author: "FinTech", preview: "from-cyan-500 to-emerald-500", tag: "Trending" },
  { id: 4, name: "ShopKit Pro", category: "E-commerce", rating: 4.6, downloads: 560, price: "$29", author: "ShopDev", preview: "from-emerald-500 to-teal-500", tag: "" },
  { id: 5, name: "SaaS Starter", category: "SaaS", rating: 4.9, downloads: 3200, price: "$49", author: "SaaSLab", preview: "from-purple-600 to-pink-500", tag: "Best Seller" },
  { id: 6, name: "PortfolioX", category: "Portfolio", rating: 4.5, downloads: 780, price: "Free", author: "Designer", preview: "from-orange-500 to-red-500", tag: "Free" },
  { id: 7, name: "ChatBot Pro", category: "Tools", rating: 4.7, downloads: 1100, price: "$15", author: "AIDevs", preview: "from-violet-500 to-purple-500", tag: "" },
  { id: 8, name: "Arcade Pack", category: "Games", rating: 4.8, downloads: 650, price: "$12", author: "RetroGame", preview: "from-pink-500 to-rose-500", tag: "" },
];

export default function TemplatesPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = templates.filter((t) => {
    const matchesTag = activeTag === "All" || t.category === activeTag;
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Template <span className="gradient-text">Marketplace</span>
          </h1>
          <p className="text-white/50 text-lg">Buy, sell, and deploy premium templates instantly</p>
        </motion.div>

        {/* Search + Upload */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search templates..."
              className="w-full pl-10 pr-4 py-3 glass rounded-xl border border-white/10 text-white placeholder-white/30 focus:border-purple-500/50 focus:outline-none bg-transparent"
            />
          </div>
          <button className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl flex items-center gap-2 whitespace-nowrap">
            <Plus className="w-4 h-4" />
            Sell Template
          </button>
        </div>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-8">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTag === tag
                  ? "btn-gradient text-white"
                  : "glass text-white/50 hover:text-white border border-white/10"
              }`}
            >
              <Tag className="w-3 h-3 inline mr-1" />
              {tag}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((template, index) => (
            <motion.div
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass gradient-border rounded-2xl overflow-hidden group"
            >
              {/* Preview */}
              <div className={`h-36 bg-gradient-to-br ${template.preview} relative flex items-center justify-center`}>
                <span className="text-4xl font-bold text-white/20">{template.name[0]}</span>
                {template.tag && (
                  <span className="absolute top-2 right-2 text-xs bg-black/40 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
                    {template.tag}
                  </span>
                )}
                {/* Glass reflection */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h3 className="font-semibold text-white">{template.name}</h3>
                    <p className="text-xs text-white/40">{template.author}</p>
                  </div>
                  <span className={`text-sm font-bold ${template.price === "Free" ? "text-emerald-400" : "gradient-text"}`}>
                    {template.price}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-1 text-xs text-yellow-400">
                    <Star className="w-3 h-3 fill-current" />
                    {template.rating}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Download className="w-3 h-3" />
                    {template.downloads.toLocaleString()}
                  </div>
                  <span className="text-xs text-white/30 px-2 py-0.5 bg-white/5 rounded-full">
                    {template.category}
                  </span>
                </div>

                <button className={`w-full py-2 rounded-xl text-sm font-semibold transition-all ${
                  template.price === "Free"
                    ? "glass glass-hover text-white border border-white/10"
                    : "btn-gradient text-white"
                }`}>
                  {template.price === "Free" ? "Get Free" : `Buy for ${template.price}`}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
