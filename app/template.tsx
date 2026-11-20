"use client";

import { motion, useReducedMotion } from "framer-motion";

// Re-mounts on every navigation, so each page fades in. Opacity only: a transform here would
// become the containing block for the fixed-position /card page.
export default function Template({ children }: { children: React.ReactNode }) {
    const reduce = useReducedMotion();
    return (
        <motion.div
            initial={{ opacity: reduce ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    );
}
