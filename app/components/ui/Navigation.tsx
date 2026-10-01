"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Terminal, FileDown, Search } from "lucide-react";
import { OPEN_PALETTE_EVENT } from "./CommandPalette";

const navItems = [
    { label: "About", href: "/#about" },
    { label: "Certifications", href: "/#certifications" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Skills", href: "/#skills" },
    { label: "Contact", href: "/#contact" },
];

export const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-border">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-12">
                    <Link href="/" className="flex items-center gap-2 text-primary font-mono font-bold">
                        <Terminal className="w-4 h-4" />
                        <span className="text-sm text-foreground">Ekonkar Singh</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-5">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/resume"
                            className="flex items-center gap-1.5 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-2 py-1 rounded text-xs font-mono transition-colors"
                        >
                            <FileDown className="w-3 h-3" />
                            Resume
                        </Link>
                        <button
                            onClick={() => window.dispatchEvent(new Event(OPEN_PALETTE_EVENT))}
                            aria-label="Open command palette"
                            className="flex items-center gap-1.5 text-muted-foreground hover:text-primary border border-white/10 hover:border-primary/50 px-2 py-1 rounded text-xs font-mono transition-colors"
                        >
                            <Search className="w-3 h-3" />
                            Ctrl K
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
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
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsOpen(false)}
                                className="block text-sm font-mono text-muted-foreground hover:text-primary transition-colors py-1.5"
                            >
                                {item.label}
                            </Link>
                        ))}
                        <Link
                            href="/resume"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-2 bg-primary/10 text-primary border border-primary/50 px-3 py-2 rounded text-sm font-mono w-fit mt-2"
                        >
                            <FileDown className="w-4 h-4" />
                            Resume
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};
