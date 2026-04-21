"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  FolderOpen,
  Store,
  TrendingUp,
  Settings,
  Zap,
  Plus,
  ChevronRight,
  Activity,
  DollarSign,
  Users,
  Package,
} from "lucide-react";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: FolderOpen, label: "Projects" },
  { icon: Store, label: "Templates" },
  { icon: TrendingUp, label: "Earnings" },
  { icon: Settings, label: "Settings" },
];

const stats = [
  { icon: Package, label: "Apps Created", value: "12", change: "+3 this month", color: "text-purple-400" },
  { icon: DollarSign, label: "Revenue", value: "$847", change: "+$124 this week", color: "text-cyan-400" },
  { icon: Users, label: "Users", value: "2.4K", change: "+180 this month", color: "text-blue-400" },
  { icon: Activity, label: "Build Credits", value: "3", change: "Free tier", color: "text-emerald-400" },
];

const recentProjects = [
  { name: "Task Manager Pro", status: "live", users: 234, revenue: "$120/mo" },
  { name: "Pixel Quest Game", status: "building", users: 0, revenue: "$0" },
  { name: "AI Chat Widget", status: "live", users: 891, revenue: "$340/mo" },
];

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState("Dashboard");

  return (
    <div className="flex h-screen bg-[#050510] pt-16">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-64 glass border-r border-white/5 flex flex-col"
      >
        {/* Builds remaining */}
        <div className="p-4 border-b border-white/5">
          <div className="glass rounded-xl p-3">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Free Builds</span>
              <span className="text-xs text-cyan-400 font-bold">3 remaining</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full w-full bg-gradient-nova rounded-full" />
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                active === item.label
                  ? "bg-gradient-nova text-white shadow-lg shadow-purple-500/20"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <item.icon className="w-4 h-4" />
              {item.label}
            </button>
          ))}
        </nav>

        {/* Upgrade */}
        <div className="p-4 border-t border-white/5">
          <div className="gradient-border p-3">
            <div className="relative">
              <p className="text-xs text-gray-400 mb-2">Upgrade to Creator</p>
              <p className="text-xs text-gray-500 mb-3">Unlimited builds + sell templates</p>
              <button className="w-full py-2 text-xs font-bold bg-gradient-nova text-white rounded-lg hover:opacity-90 transition-opacity">
                Upgrade — $30/mo
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Main */}
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}

export default function DashboardContent() {
  return (
    <div className="p-8 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">Good morning, Creator 👋</h1>
          <p className="text-gray-400 text-sm mt-1">Here&apos;s what&apos;s happening with your projects</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-nova text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity">
          <Plus className="w-4 h-4" />
          New Project
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="gradient-border p-4"
          >
            <div className="relative">
              <div className="flex items-center justify-between mb-3">
                <stat.icon className={`w-5 h-5 ${stat.color}`} />
                <ChevronRight className="w-4 h-4 text-gray-600" />
              </div>
              <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-xs text-gray-500">{stat.label}</div>
              <div className={`text-xs ${stat.color} mt-1`}>{stat.change}</div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* AI Builder Quick Access */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="gradient-border p-6 mb-8"
      >
        <div className="relative">
          <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-purple-400" />
            AI Builder
          </h2>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Describe your app idea..."
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors"
            />
            <button className="px-6 py-3 bg-gradient-nova text-white text-sm font-bold rounded-xl hover:opacity-90 transition-opacity flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Generate
            </button>
          </div>
          <p className="text-xs text-gray-500 mt-2">3 free builds remaining this month</p>
        </div>
      </motion.div>

      {/* Recent Projects */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="gradient-border p-6"
      >
        <div className="relative">
          <h2 className="text-lg font-bold text-white mb-4">Recent Projects</h2>
          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between p-3 glass rounded-xl hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-gradient-nova flex items-center justify-center">
                    <Package className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">{project.name}</div>
                    <div className="text-xs text-gray-500">{project.users} users</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "live"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : "bg-yellow-500/10 text-yellow-400"
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-sm font-medium text-cyan-400">{project.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
