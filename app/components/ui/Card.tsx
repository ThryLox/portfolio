"use client";

import * as React from "react"
import { cn } from "@/lib/utils"
import { motion, HTMLMotionProps } from "framer-motion"

const Card = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
    ({ className, ...props }, ref) => {
        const divRef = React.useRef<HTMLDivElement>(null);
        const [position, setPosition] = React.useState({ x: 0, y: 0 });
        const [opacity, setOpacity] = React.useState(0);

        const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
            if (!divRef.current) return;
            const rect = divRef.current.getBoundingClientRect();
            setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        };

        const handleFocus = () => {
            setOpacity(1);
        };

        const handleBlur = () => {
            setOpacity(0);
        };

        const handleMouseEnter = () => {
            setOpacity(1);
        };

        const handleMouseLeave = () => {
            setOpacity(0);
        };

        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                ref={ref}
                className={cn(
                    "relative rounded-2xl border border-slate-800 bg-slate-950/50 p-6 shadow-sm backdrop-blur-sm transition-all hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] overflow-hidden",
                    className
                )}
                onMouseMove={handleMouseMove}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...props}
            >
                <div
                    className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                    style={{
                        opacity,
                        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(6,182,212,0.1), transparent 40%)`,
                    }}
                />
                <div ref={divRef} className="relative z-10 h-full">
                    {props.children as React.ReactNode}
                </div>
            </motion.div>
        );
    }
);
Card.displayName = "Card"

const CardHeader = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex flex-col space-y-1.5 p-6", className)}
        {...props}
    />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
    <h3
        ref={ref}
        className={cn(
            "text-2xl font-semibold leading-none tracking-tight text-slate-100",
            className
        )}
        {...props}
    />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("text-sm text-slate-400", className)}
        {...props}
    />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn("flex items-center p-6 pt-0", className)}
        {...props}
    />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
