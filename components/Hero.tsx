"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";
import { Zap, Play, ArrowRight, Sparkles } from "lucide-react";

function FloatingOrb({ x, y, size, color, delay }: { x: string; y: string; size: number; color: string; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color}40 0%, transparent 70%)`,
        filter: "blur(40px)",
      }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.7, 0.4],
        x: [0, 30, 0],
        y: [0, -20, 0],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
    />
  );
}

function MouseFollowLight() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed pointer-events-none z-0"
      style={{
        left: springX,
        top: springY,
        width: 400,
        height: 400,
        background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)",
        borderRadius: "50%",
        filter: "blur(20px)",
      }}
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-transparent to-[#050510]" />

      {/* Floating Orbs */}
      <FloatingOrb x="10%" y="20%" size={400} color="#7C3AED" delay={0} />
      <FloatingOrb x="70%" y="10%" size={300} color="#2563EB" delay={1.5} />
      <FloatingOrb x="80%" y="60%" size={350} color="#06B6D4" delay={3} />
      <FloatingOrb x="5%" y="70%" size={250} color="#7C3AED" delay={2} />

      <MouseFollowLight />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-purple-500/20 text-sm text-purple-300 mb-8"
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI-Powered App Builder</span>
          <span className="px-2 py-0.5 text-xs bg-purple-500/20 rounded-full text-purple-300">NEW</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-none tracking-tight mb-6"
        >
          <span className="block text-white">Build apps &amp; games</span>
          <span className="block gradient-text">with AI.</span>
          <span className="block text-white text-4xl sm:text-5xl md:text-6xl font-bold mt-2">Launch in minutes.</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          No code. No limits.{" "}
          <span className="text-white font-semibold">Just results.</span>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/dashboard"
            className="group relative px-8 py-4 text-base font-bold text-white rounded-xl overflow-hidden animate-pulse-glow"
          >
            <span className="absolute inset-0 bg-gradient-nova" />
            <span className="absolute inset-0 bg-gradient-nova opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            <span className="relative flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Start Building Free
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </Link>
          <Link
            href="#demo"
            className="group px-8 py-4 text-base font-semibold text-gray-300 rounded-xl glass border border-white/10 hover:border-purple-500/40 hover:text-white transition-all duration-300 flex items-center gap-2"
          >
            <Play className="w-4 h-4" />
            View Demo
          </Link>
        </motion.div>

        {/* Free builds badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="inline-flex items-center gap-2 text-sm text-gray-500 mb-16"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>3 free builds remaining — No credit card required</span>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "50K+", label: "Apps Built" },
            { value: "$2.4M", label: "Creator Earnings" },
            { value: "12K+", label: "Active Users" },
            { value: "99.9%", label: "Uptime" },
          ].map((stat) => (
            <div key={stat.label} className="gradient-border p-4">
              <div className="text-2xl font-black gradient-text">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-purple-500/50 to-transparent mx-auto" />
      </motion.div>
    </section>
  );
}
