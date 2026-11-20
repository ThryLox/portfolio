"use client";

import { useEffect, useRef } from "react";

export const AuroraBackground = () => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let frame = 0;
        let x = 0;
        let y = 0;
        const onMove = (e: PointerEvent) => {
            x = e.clientX;
            y = e.clientY;
            if (frame) return;
            frame = requestAnimationFrame(() => {
                frame = 0;
                ref.current?.style.setProperty("--px", `${x}px`);
                ref.current?.style.setProperty("--py", `${y}px`);
            });
        };

        window.addEventListener("pointermove", onMove, { passive: true });
        return () => {
            window.removeEventListener("pointermove", onMove);
            cancelAnimationFrame(frame);
        };
    }, []);

    return (
        <div ref={ref} aria-hidden="true" className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
            <span className="aurora-blob aurora-a" />
            <span className="aurora-blob aurora-b" />
            <div className="aurora-cursor" />
        </div>
    );
};
