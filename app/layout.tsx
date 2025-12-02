"use client";

import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import { SystemStatus } from "./components/ui/SystemStatus";
import { BootLoader } from "./components/ui/BootLoader";
import { MatrixRain } from "./components/ui/MatrixRain";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [booted, setBooted] = useState(false);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden`}>
        {!booted && <BootLoader onComplete={() => setBooted(true)} />}

        {booted && (
          <>
            <MatrixRain />
            <SystemStatus />
            <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.05),rgba(255,255,255,0))]"></div>
            <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
              {children}
            </main>
            <Analytics />
            <SpeedInsights />

            {/* CRT Overlay */}
            <div className="fixed inset-0 pointer-events-none z-[100] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
          </>
        )}
      </body>
    </html>
  );
}
