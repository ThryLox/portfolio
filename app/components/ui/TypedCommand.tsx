"use client";

import { useEffect, useState } from "react";

// Types the command once on load; reduced-motion users get it immediately.
export const TypedCommand = ({ text }: { text: string }) => {
    const [count, setCount] = useState(text.length);

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
        setCount(0);
        let i = 0;
        const id = setInterval(() => {
            i += 1;
            setCount(i);
            if (i >= text.length) clearInterval(id);
        }, 90);
        return () => clearInterval(id);
    }, [text]);

    return (
        <span aria-label={text}>
            <span aria-hidden="true">{text.slice(0, count)}</span>
        </span>
    );
};
