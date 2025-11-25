// Root layout for my portfolio website.
// Requirements for Copilot:
// - Dark, gradient background with subtle glow elements.
// - Use Tailwind for global styling.
// - Wrap content in a centered container (max-w-5xl or max-w-6xl).
// - Keep HTML structure simple and accessible.

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ekonkar Singh | Security & Compliance Engineer",
  description:
    "Portfolio of Ekonkar Singh – security and compliance engineer focused on cloud, identity, and intelligent systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-50 antialiased selection:bg-cyan-500/30 selection:text-cyan-200`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.15),rgba(255,255,255,0))]"></div>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(147,51,234,0.15),rgba(255,255,255,0))]"></div>
        <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
