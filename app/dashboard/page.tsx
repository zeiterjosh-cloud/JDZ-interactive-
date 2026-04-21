"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard, FolderOpen, Store, DollarSign,
  Settings, Zap, TrendingUp, Users, Package, ArrowUpRight,
  Plus, ChevronRight, Bell
} from "lucide-react";
import Link from "next/link";

const sidebarItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true, href: "/dashboard" },
  { icon: FolderOpen, label: "Projects", active: false, href: "/dashboard/projects" },
  { icon: Store, label: "Templates", active: false, href: "/templates" },
  { icon: DollarSign, label: "Earnings", active: false, href: "/dashboard/earnings" },
  { icon: Settings, label: "Settings", active: false, href: "/dashboard/settings" },
];

const stats = [
  { icon: Package, label: "Apps Created", value: "12", change: "+3", trend: "up" },
  { icon: TrendingUp, label: "Revenue", value: "$1,240", change: "+18%", trend: "up" },
  { icon: Users, label: "Total Users", value: "2.4K", change: "+240", trend: "up" },
  { icon: Zap, label: "Builds Left", value: "3", change: "Free tier", trend: "neutral" },
];

const recentProjects = [
  { name: "TaskFlow Pro", type: "Productivity App", status: "Live", revenue: "$320" },
  { name: "Pixel Runner", type: "Browser Game", status: "Draft", revenue: "$0" },
  { name: "BudgetBot AI", type: "Finance Tool", status: "Live", revenue: "$920" },
];

export default function Dashboard() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <div className="min-h-screen flex bg-[#050510] pt-16">
      {/* Sidebar */}
      <motion.aside
        initial={{ x: -20, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        className="w-64 hidden lg:flex flex-col glass border-r border-white/5 p-4 fixed left-0 top-16 bottom-0 overflow-y-auto"
      >
        <div className="flex-1">
          {/* Free builds indicator */}
          <div className="glass rounded-xl p-3 mb-6 border border-purple-500/30">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/60">Free Builds</span>
              <span className="text-xs font-bold text-purple-400">3 remaining</span>
            </div>
            <div className="flex gap-1">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-1 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" />
              ))}
            </div>
            <p className="text-xs text-white/40 mt-2">Upgrade for unlimited builds</p>
          </div>

          <nav className="space-y-1">
            {sidebarItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setActiveItem(item.label)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                    activeItem === item.label
                      ? "bg-gradient-to-r from-purple-500/20 to-blue-500/10 text-white border border-purple-500/30"
                      : "text-white/50 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                  {activeItem === item.label && (
                    <ChevronRight className="w-3 h-3 ml-auto text-purple-400" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="mt-6 pt-6 border-t border-white/5">
          <Link
            href="/pricing"
            className="btn-gradient text-white text-sm font-semibold px-4 py-2.5 rounded-xl w-full flex items-center justify-center gap-2"
          >
            <Zap className="w-4 h-4" />
            Upgrade Plan
          </Link>
        </div>
      </motion.aside>

      {/* Main content */}
      <div className="flex-1 lg:ml-64 p-6 lg:p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <p className="text-white/40 text-sm">Welcome back! Here&apos;s what&apos;s happening.</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="glass glass-hover w-9 h-9 rounded-xl flex items-center justify-center relative">
              <Bell className="w-4 h-4 text-white/70" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-purple-500 rounded-full" />
            </button>
            <Link
              href="/build-app-with-ai"
              className="btn-gradient text-white text-sm font-semibold px-4 py-2 rounded-xl flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              New Project
            </Link>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass gradient-border rounded-2xl p-5"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-purple-400" />
                  </div>
                  {stat.trend === "up" && (
                    <span className="text-emerald-400 text-xs flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" />
                      {stat.change}
                    </span>
                  )}
                  {stat.trend === "neutral" && (
                    <span className="text-white/40 text-xs">{stat.change}</span>
                  )}
                </div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-white/40 text-xs mt-1">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* Recent Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass gradient-border rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">Recent Projects</h2>
            <Link href="/dashboard/projects" className="text-purple-400 text-sm hover:text-purple-300">
              View all
            </Link>
          </div>
          <div className="space-y-3">
            {recentProjects.map((project) => (
              <div
                key={project.name}
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors border border-white/5 hover:border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                    {project.name[0]}
                  </div>
                  <div>
                    <div className="font-medium text-white">{project.name}</div>
                    <div className="text-xs text-white/40">{project.type}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    project.status === "Live"
                      ? "bg-emerald-500/20 text-emerald-400"
                      : "bg-white/10 text-white/50"
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-white/70 text-sm font-medium">{project.revenue}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AI Builder CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="relative rounded-2xl p-8 overflow-hidden bg-gradient-to-br from-purple-900/40 to-blue-900/30 border border-purple-500/30"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-[80px]" />
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">Ready to build something new?</h2>
            <p className="text-white/50 mb-6">Use AI to create your next app in minutes.</p>
            <Link
              href="/build-app-with-ai"
              className="btn-gradient text-white font-semibold px-6 py-3 rounded-xl inline-flex items-center gap-2"
            >
              <Zap className="w-4 h-4" />
              Launch AI Builder
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
