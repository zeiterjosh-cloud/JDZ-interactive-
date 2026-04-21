import Link from "next/link";
import { Zap, ExternalLink, GitFork, Link2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#030308] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400 flex items-center justify-center">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-xl gradient-text">NovaBuilder</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Build apps & games with AI. No code. No limits. Just results.
            </p>
            <div className="flex gap-3 mt-6">
              {[ExternalLink, GitFork, Link2].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg glass glass-hover flex items-center justify-center text-white/50 hover:text-white"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Product</h3>
            <ul className="space-y-3">
              {["Features", "Pricing", "Templates", "Changelog"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Resources</h3>
            <ul className="space-y-3">
              {[
                { label: "Build App with AI", href: "/build-app-with-ai" },
                { label: "No-Code Game Builder", href: "/no-code-game-builder" },
                { label: "Make Money with Apps", href: "/make-money-with-apps" },
                { label: "Documentation", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-white/50 hover:text-white text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-white/80 mb-4 text-sm uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-white/50 hover:text-white text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">© 2025 NovaBuilder. All rights reserved.</p>
          <p className="text-white/30 text-sm">Built with ⚡ by NovaBuilder team</p>
        </div>
      </div>
    </footer>
  );
}
