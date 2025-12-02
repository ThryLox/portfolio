"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const BootLoader = ({ onComplete }: { onComplete: () => void }) => {
    const [lines, setLines] = useState<string[]>([]);

    const bootSequence = [
        "initializing ekonkarOS v1.0.0...",
        "verifying integrity...",
        "loading kernel modules...",
        "mounting /root/whoami...",
        "mounting /var/logs...",
        "mounting /opt/deployments...",
        "establishing secure connection...",
        "system online ✅"
    ];

    useEffect(() => {
        let delay = 0;
        bootSequence.forEach((line, index) => {
            delay += Math.random() * 300 + 100;
            setTimeout(() => {
                setLines((prev) => [...prev, line]);
                if (index === bootSequence.length - 1) {
                    setTimeout(onComplete, 800);
                }
            }, delay);
        });
    }, []);

    return (
        <div className="fixed inset-0 bg-background z-50 flex flex-col justify-end p-8 font-mono text-sm sm:text-base">
            <div className="max-w-2xl w-full mx-auto mb-12">
                {lines.map((line, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="text-primary/80 mb-1"
                    >
                        <span className="text-muted-foreground mr-2">[{new Date().toLocaleTimeString()}]</span>
                        {line}
                    </motion.div>
                ))}
                <motion.div
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-3 h-5 bg-primary mt-2"
                />
            </div>

            {/* Scanline effect */}
            <div className="scanline" />
        </div>
    );
};
