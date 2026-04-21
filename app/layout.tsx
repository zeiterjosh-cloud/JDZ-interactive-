import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MouseFollowLight from "@/components/MouseFollowLight";

export const metadata: Metadata = {
  title: "NovaBuilder – Build Apps & Games with AI",
  description: "No code. No limits. Just results. Build powerful apps and games with AI in minutes.",
  keywords: ["AI app builder", "no-code", "game builder", "SaaS", "NovaBuilder"],
  openGraph: {
    title: "NovaBuilder – Build Apps & Games with AI",
    description: "No code. No limits. Just results.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#050510] text-white antialiased font-sans">
        <MouseFollowLight />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
