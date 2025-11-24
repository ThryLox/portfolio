"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: React.ReactNode;
    delay?: number;
}

export function Section({ id, className, children, delay = 0 }: SectionProps) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section
            id={id}
            ref={ref}
            className={cn("py-16 sm:py-24 scroll-mt-24 relative", className)}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay, ease: "easeOut" }}
                style={{ y }} // Apply parallax effect
            >
                {children}
            </motion.div>
        </section>
    );
}
