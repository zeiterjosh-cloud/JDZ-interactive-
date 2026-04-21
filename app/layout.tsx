import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "NovaBuilder — Build Apps & Games with AI",
    template: "%s | NovaBuilder",
  },
  description: "Build apps and games with AI in minutes. No code, no limits. Just results. The most powerful AI-powered app builder for creators.",
  keywords: ["AI app builder", "no code", "game builder", "app development", "AI tools", "SaaS"],
  authors: [{ name: "NovaBuilder" }],
  creator: "NovaBuilder",
  metadataBase: new URL("https://novabuilder.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://novabuilder.ai",
    title: "NovaBuilder — Build Apps & Games with AI",
    description: "Build apps and games with AI in minutes. No code, no limits. Just results.",
    siteName: "NovaBuilder",
  },
  twitter: {
    card: "summary_large_image",
    title: "NovaBuilder — Build Apps & Games with AI",
    description: "Build apps and games with AI in minutes. No code, no limits. Just results.",
    creator: "@novabuilder",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased bg-[#050510] text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
