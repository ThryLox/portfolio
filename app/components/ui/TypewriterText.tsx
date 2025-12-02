"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TypewriterTextProps {
    text: string;
    delay?: number;
    speed?: number;
    className?: string;
    cursor?: boolean;
    onComplete?: () => void;
}

export const TypewriterText = ({
    text,
    delay = 0,
    speed = 30,
    className = "",
    cursor = true,
    onComplete,
}: TypewriterTextProps) => {
    const [displayedText, setDisplayedText] = useState("");
    const [isComplete, setIsComplete] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        let currentIndex = 0;
        let timeoutId: NodeJS.Timeout;

        const startTyping = () => {
            setHasStarted(true);
            const typeChar = () => {
                if (currentIndex < text.length) {
                    setDisplayedText(text.slice(0, currentIndex + 1));
                    currentIndex++;
                    // Randomize speed slightly for realism
                    const randomSpeed = speed + (Math.random() * 20 - 10);
                    timeoutId = setTimeout(typeChar, randomSpeed);
                } else {
                    setIsComplete(true);
                    if (onComplete) onComplete();
                }
            };
            typeChar();
        };

        const startTimeout = setTimeout(startTyping, delay);

        return () => {
            clearTimeout(startTimeout);
            clearTimeout(timeoutId);
        };
    }, [text, delay, speed, onComplete]);

    return (
        <span className={className}>
            {displayedText}
            {cursor && !isComplete && (
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-[0.6em] h-[1em] bg-primary ml-1 align-middle"
                />
            )}
            {/* Keep cursor blinking even after completion if desired, or remove it. 
          For now, let's remove it to show "done" state, or keep a static block?
          Terminal usually keeps blinking cursor at the prompt. 
          Let's make it optional or just hide it for headers.
      */}
        </span>
    );
};
