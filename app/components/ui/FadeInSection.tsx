"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeInSectionProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const FadeInSection = ({ children, delay = 0, className = "" }: FadeInSectionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setTimeout(() => setIsVisible(true), delay);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.05, rootMargin: "0px 0px -10px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [delay]);

    return (
        <div
            ref={ref}
            className={`transition-all duration-150 ${isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
                } ${className}`}
        >
            {children}
        </div>
    );
};
