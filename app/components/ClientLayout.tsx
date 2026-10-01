"use client";

import { useEffect, useState } from "react";
import { BootLoader } from "./ui/BootLoader";
import { MatrixRain } from "./ui/MatrixRain";
import { Navigation } from "./ui/Navigation";
import { ScrollProgress } from "./ui/ScrollProgress";
import { BackToTop } from "./ui/BackToTop";
import { CommandPalette, PaletteProject } from "./ui/CommandPalette";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

interface ClientLayoutProps {
    children: React.ReactNode;
    projects: PaletteProject[];
    email: string;
}

export default function ClientLayout({ children, projects, email }: ClientLayoutProps) {
    const [booted, setBooted] = useState(false);

    useEffect(() => {
        if (document.documentElement.classList.contains("booted")) setBooted(true);
    }, []);

    const finishBoot = () => {
        try {
            localStorage.setItem("booted", "1");
        } catch { }
        document.documentElement.classList.add("booted");
        setBooted(true);
    };

    return (
        <>
            {!booted && <BootLoader onComplete={finishBoot} />}
            <div className="print:hidden">
                <Navigation />
                <ScrollProgress />
                <MatrixRain />
                <BackToTop />
                <CommandPalette projects={projects} email={email} />
                <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(6,182,212,0.05),rgba(255,255,255,0))]"></div>
            </div>
            <main className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 print:p-0 print:max-w-none">
                {children}
            </main>
            <Analytics />
            <SpeedInsights />
        </>
    );
}
