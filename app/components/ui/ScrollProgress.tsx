"use client";

import { useEffect, useState } from "react";

export const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            setProgress(scrollPercent);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-12 left-0 right-0 h-[2px] bg-border z-40">
            <div
                className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-all duration-150"
                style={{ width: `${progress}%` }}
            />
        </div>
    );
};
