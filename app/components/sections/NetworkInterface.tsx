"use client";

import { useState } from "react";
import { Send, Copy, Check } from "lucide-react";

export const NetworkInterface = () => {
    const [pingResult, setPingResult] = useState<string[]>([]);
    const [isPinging, setIsPinging] = useState(false);
    const [copied, setCopied] = useState(false);
    const email = "ekonkar.singh.s@gmail.com";

    const handlePing = () => {
        if (isPinging) return;
        setIsPinging(true);
        setPingResult([]);

        const sequence = [
            `PING ${email} (127.0.0.1): 56 data bytes`,
            "64 bytes from 127.0.0.1: icmp_seq=0 ttl=64 time=0.045 ms",
            "64 bytes from 127.0.0.1: icmp_seq=1 ttl=64 time=0.052 ms",
            "64 bytes from 127.0.0.1: icmp_seq=2 ttl=64 time=0.048 ms",
            "--- ekonkar.singh.s@gmail.com ping statistics ---",
            "3 packets transmitted, 3 packets received, 0.0% packet loss",
            "round-trip min/avg/max/stddev = 0.045/0.048/0.052/0.003 ms"
        ];

        let delay = 0;
        sequence.forEach((line, index) => {
            delay += 600;
            setTimeout(() => {
                setPingResult(prev => [...prev, line]);
                if (index === sequence.length - 1) setIsPinging(false);
            }, delay);
        });
    };

    const copyEmail = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-12 font-mono">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="text-accent">$</span>
                <h2 className="text-xl font-bold">ping ekonkar.singh.s@gmail.com</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-6">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex-1 space-y-6">
                        <p className="text-muted-foreground">
                            Initiate a handshake protocol. Available for secure communications regarding architecture, security, and systems engineering.
                        </p>

                        <div className="flex gap-4">
                            <button
                                onClick={handlePing}
                                disabled={isPinging}
                                className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-4 py-2 rounded flex items-center gap-2 transition-colors disabled:opacity-50"
                            >
                                <Send className="w-4 h-4" />
                                {isPinging ? "TRANSMITTING..." : "INITIATE PING"}
                            </button>

                            <button
                                onClick={copyEmail}
                                className="bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/50 px-4 py-2 rounded flex items-center gap-2 transition-colors"
                            >
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copied ? "COPIED" : "COPY ADDRESS"}
                            </button>
                        </div>

                        <div className="flex gap-4 text-sm pt-4 border-t border-border">
                            <a href="https://github.com/ThryLox" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                github_daemon
                            </a>
                            <span className="text-border">|</span>
                            <a href="https://www.linkedin.com/in/esingh-1/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                                linkedin_daemon
                            </a>
                        </div>
                    </div>

                    <div className="flex-1 bg-black/50 rounded p-4 font-mono text-xs h-[200px] overflow-y-auto custom-scrollbar border border-border/50 shadow-inner">
                        {!pingResult.length && !isPinging && (
                            <div className="text-muted-foreground/50 italic">
                // System ready. Awaiting command...
                            </div>
                        )}
                        {pingResult.map((line, i) => (
                            <div key={i} className="mb-1 text-primary/80">
                                {line}
                            </div>
                        ))}
                        {isPinging && (
                            <div className="animate-pulse text-primary">_</div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};
