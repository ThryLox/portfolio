"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

export interface Stat {
    value: number | string;
    label: string;
}

const Counter = ({ value }: { value: number | string }) => {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const reduce = useReducedMotion();
    const isNumber = typeof value === "number";
    const [shown, setShown] = useState<number | string>(isNumber && !reduce ? 0 : value);

    useEffect(() => {
        if (!isNumber || !inView) return;
        if (reduce) {
            setShown(value);
            return;
        }
        const controls = animate(0, value, {
            duration: 1.1,
            ease: "easeOut",
            onUpdate: (v) => setShown(Math.round(v)),
        });
        return () => controls.stop();
    }, [inView, isNumber, reduce, value]);

    return <span ref={ref}>{shown}</span>;
};

export const StatStrip = ({ stats }: { stats: Stat[] }) => (
    <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {stats.map((s) => (
            <div key={s.label} className="rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-mono text-2xl sm:text-3xl font-bold text-primary text-glow">
                    <Counter value={s.value} />
                </dd>
                <p aria-hidden="true" className="mt-1 text-xs text-muted-foreground">
                    {s.label}
                </p>
            </div>
        ))}
    </dl>
);
