"use client";

import { useState, useEffect } from "react";

const bootSequence = [
    "initializing ekonkarOS...",
    "mounting /root/whoami...",
    "mounting /opt/projects...",
    "system online",
];

// Shown once per browser (see bootScript in layout.tsx); any key or click skips it.
export const BootLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        const timers = bootSequence.map((line, index) =>
            setTimeout(() => setLines((prev) => [...prev, line]), 250 * (index + 1))
        );
        timers.push(setTimeout(onComplete, 250 * bootSequence.length + 400));

        window.addEventListener("keydown", onComplete);
        return () => {
            timers.forEach(clearTimeout);
            window.removeEventListener("keydown", onComplete);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            onClick={onComplete}
            className="boot-overlay fixed inset-0 bg-background z-[60] flex flex-col justify-end p-8 font-mono text-sm sm:text-base cursor-pointer"
        >
            <div className="max-w-2xl w-full mx-auto mb-12">
                {lines.map((line) => (
                    <div key={line} className="text-primary/80 mb-1">
                        <span className="text-accent mr-2">$</span>
                        {line}
                    </div>
                ))}
                <div className="w-3 h-5 bg-primary mt-2 animate-pulse" />
                <p className="text-xs text-muted-foreground mt-6">Press any key or click to skip</p>
            </div>
        </div>
    );
};
