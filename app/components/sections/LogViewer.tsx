"use client";

import { PostData } from "@/lib/content";
import Link from "next/link";
import { useState } from "react";

interface LogViewerProps {
    logs: PostData[];
}

export const LogViewer = ({ logs }: LogViewerProps) => {
    const [isHovered, setIsHovered] = useState<string | null>(null);

    const getSeverityColor = (severity: string) => {
        switch (severity?.toUpperCase()) {
            case "CRITICAL": return "text-destructive";
            case "WARN": return "text-accent";
            case "INFO": return "text-primary";
            default: return "text-muted-foreground";
        }
    };

    return (
        <section id="logs" className="py-12 font-mono">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="text-accent">$</span>
                <h2 className="text-xl font-bold">tail -f /var/logs</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-lg overflow-hidden font-mono text-sm">
                <div className="bg-muted/30 px-4 py-2 border-b border-border flex justify-between items-center text-xs text-muted-foreground">
                    <span>/var/logs/thoughts.log</span>
                    <span>-- MORE --</span>
                </div>

                <div className="p-4 space-y-2 max-h-[400px] overflow-y-auto custom-scrollbar">
                    {logs.map((log) => (
                        <Link
                            href={`/logs/${log.slug}`}
                            key={log.slug}
                            className="block group"
                            onMouseEnter={() => setIsHovered(log.slug)}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            <div className={`flex flex-col sm:flex-row gap-2 sm:gap-4 transition-colors ${isHovered === log.slug ? 'bg-white/5' : ''} p-1 rounded`}>
                                <span className="text-muted-foreground shrink-0">
                                    [{log.date} {log.timestamp || "00:00:00"}]
                                </span>
                                <span className={`font-bold w-20 shrink-0 ${getSeverityColor(log.severity)}`}>
                                    [{log.severity || "INFO"}]
                                </span>
                                <span className="text-foreground group-hover:text-primary transition-colors truncate">
                                    {log.title}
                                </span>
                            </div>
                        </Link>
                    ))}
                    <div className="animate-pulse text-primary mt-2">_</div>
                </div>
            </div>
        </section>
    );
};
