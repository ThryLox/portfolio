"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface CommandLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    command?: string;
}

export const CommandLink = ({ href, children, className = "", command }: CommandLinkProps) => {
    const router = useRouter();
    const [isExecuting, setIsExecuting] = useState(false);

    // Default command based on href if not provided
    const displayCommand = command || `executing .${href}...`;

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsExecuting(true);

        // Simulate execution delay
        setTimeout(() => {
            router.push(href);
        }, 800);
    };

    return (
        <>
            <div onClick={handleClick} className={`${className} cursor-pointer`}>
                {children}
            </div>

            <AnimatePresence>
                {isExecuting && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center font-mono"
                    >
                        <div className="text-primary text-lg">
                            <span className="mr-2 text-accent">$</span>
                            {displayCommand}
                            <motion.span
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 0.8 }}
                                className="inline-block w-[0.6em] h-[1em] bg-primary ml-1 align-middle"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
