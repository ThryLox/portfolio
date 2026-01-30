"use client";

import { useState } from "react";
import { BootLoader } from "./ui/BootLoader";
import { MatrixRain } from "./ui/MatrixRain";
import { Navigation } from "./ui/Navigation";
import { ScrollProgress } from "./ui/ScrollProgress";
import { BackToTop } from "./ui/BackToTop";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [booted, setBooted] = useState(false);

    return (
        <>
            {!booted && <BootLoader onComplete={() => setBooted(true)} />}
            {booted && (
                <>
                    <Navigation />
                    <ScrollProgress />
                    <MatrixRain />
                    <BackToTop />
                    <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.05),rgba(255,255,255,0))]"></div>
                    <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
                        {children}
                    </main>
                    <Analytics />
                    <SpeedInsights />
                    <div className="fixed inset-0 pointer-events-none z-[100] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] opacity-20" />
                </>
            )}
        </>
    );
}

