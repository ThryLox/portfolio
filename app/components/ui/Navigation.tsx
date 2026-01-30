"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Terminal, FileDown, Activity, Cpu, Clock } from "lucide-react";

const navItems = [
    { label: "whoami", href: "#whoami" },
    { label: "skills", href: "#skills" },
    { label: "logs", href: "#logs" },
    { label: "deployments", href: "#deployments" },
    { label: "experience", href: "#cronjobs" },
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [time, setTime] = useState("");
    const [uptime, setUptime] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black/90 backdrop-blur-md border-b border-border`}>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    {/* Logo + Status */}
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 text-primary font-mono font-bold">
                            <Terminal className="w-4 h-4" />
                            <span className="hidden sm:inline text-sm text-foreground">ekonkarOS</span>
                        </Link>

                        {/* System Status */}
                        <div className="hidden lg:flex items-center gap-3 text-xs text-muted-foreground font-mono">
                            <div className="flex items-center gap-1">
                                <Activity className="w-3 h-3 text-secondary" />
                                <span>ONLINE</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Cpu className="w-3 h-3 text-accent" />
                                <span>CPU: 12%</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                <span>{formatUptime(uptime)}</span>
                            </div>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                            >
                                <span className="text-accent">$</span> {item.label}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            download="Ekonkar_Singh_Resume.pdf"
                            className="flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-2 py-1 rounded text-xs font-mono transition-colors"
                        >
                            <FileDown className="w-3 h-3" />
                            Resume
                        </a>
                        <span className="text-xs text-muted-foreground font-mono">{time}</span>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-primary p-2"
                    >
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden bg-black/95 backdrop-blur-md border-b border-border">
                    <div className="px-4 py-3 space-y-2">
                        {navItems.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors py-1.5"
                            >
                                <span className="text-accent">$</span> {item.label}
                            </a>
                        ))}
                        <a
                            href="/resume.pdf"
                            download="Ekonkar_Singh_Resume.pdf"
                            className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/50 px-3 py-2 rounded text-sm font-mono w-fit mt-2"
                        >
                            <FileDown className="w-4 h-4" />
                            Resume
                        </a>
                    </div>
                </div>
            )}
        </nav>
    );
};
