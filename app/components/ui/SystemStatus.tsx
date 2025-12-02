"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Cpu, Clock, Activity } from "lucide-react";

export const SystemStatus = () => {
    const [time, setTime] = useState("");
    const [uptime, setUptime] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
            setUptime((prev) => prev + 1);
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const formatUptime = (seconds: number) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h}h ${m}m ${s}s`;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border h-12 flex items-center px-4 justify-between font-mono text-xs sm:text-sm">
            <div className="flex items-center gap-6">
                <Link href="/" className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
                    <Terminal className="w-4 h-4" />
                    <span className="font-bold hidden sm:inline">ekonkarOS</span>
                </Link>

                <div className="hidden md:flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                        <Activity className="w-3 h-3 text-secondary" />
                        <span>STATUS: ONLINE</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Cpu className="w-3 h-3 text-accent" />
                        <span>CPU: 12%</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3" />
                        <span>UPTIME: {formatUptime(uptime)}</span>
                    </div>
                </div>
            </div>

            <div className="flex items-center gap-4">
                <span className="text-muted-foreground">{time}</span>
                <div className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            </div>
        </nav>
    );
};
