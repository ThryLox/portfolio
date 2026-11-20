"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PostData } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

interface ExperienceProps {
    jobs: PostData[];
}

export const Experience = ({ jobs }: ExperienceProps) => {
    const listRef = useRef<HTMLDivElement>(null);
    // The teal line fills in as the timeline scrolls through the viewport
    const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
    const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

    return (
        <section id="experience" className="py-12 scroll-mt-16">
            <SectionHeading index="02" title="Experience" command="crontab -l" />

            <div ref={listRef} className="relative pl-8 sm:pl-10">
                <div aria-hidden="true" className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-border" />
                <motion.div
                    aria-hidden="true"
                    style={{ scaleY: fill, transformOrigin: "top" }}
                    className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-primary shadow-[0_0_8px_hsl(var(--primary))]"
                />

                <div className="space-y-6">
                    {jobs.map((job) => {
                        const running = job.status === "running";
                        return (
                            <div key={job.slug} className="relative">
                                <span
                                    aria-hidden="true"
                                    className={`absolute -left-8 sm:-left-10 top-6 h-4 w-4 sm:h-[18px] sm:w-[18px] rounded-full border-2 bg-background ${running ? "border-warm animate-pulse-green" : "border-primary"}`}
                                />
                                <Link
                                    href={`/cronjobs/${job.slug}`}
                                    className="group block glass hud rounded-lg p-5 hover:border-primary/50 hover:bg-white/5 transition-colors"
                                >
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                                        <div>
                                            <h3 className="glitch-hover font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors" data-text={job.title}>{job.title}</h3>
                                            <p className="text-sm text-primary/80">{job.company}</p>
                                        </div>
                                        <span className="flex items-center gap-2 font-mono text-xs text-muted-foreground shrink-0 sm:pt-1">
                                            {running && (
                                                <span className="rounded border border-warm/40 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-warm">
                                                    Current
                                                </span>
                                            )}
                                            {job.startDate} – {job.endDate}
                                        </span>
                                    </div>

                                    <p className="text-sm text-muted-foreground mt-3">{job.description}</p>

                                    <div className="flex flex-wrap items-center gap-2 mt-4">
                                        {job.tags?.map((tag: string) => (
                                            <span key={tag} className="font-mono text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                                {tag}
                                            </span>
                                        ))}
                                        <span className="flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary transition-colors ml-auto">
                                            Details <ArrowRight className="w-3 h-3" />
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
