"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Star } from "lucide-react";
import { PostData } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

interface DeploymentGridProps {
    deployments: PostData[];
}

// Moves the spotlight glow (see .spotlight in globals.css) to the pointer
const trackPointer = (e: React.PointerEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
};

export const DeploymentGrid = ({ deployments }: DeploymentGridProps) => {
    const [activeTag, setActiveTag] = useState<string | null>(null);

    // Only offer tags shared by at least two projects, most common first
    const filterTags = useMemo(() => {
        const counts = new Map<string, number>();
        deployments.forEach((d) => d.tags?.forEach((t: string) => counts.set(t, (counts.get(t) || 0) + 1)));
        return Array.from(counts.entries())
            .filter(([, count]) => count > 1)
            .sort((a, b) => b[1] - a[1])
            .map(([tag]) => tag);
    }, [deployments]);

    const visible = useMemo(() => {
        const filtered = activeTag ? deployments.filter((d) => d.tags?.includes(activeTag)) : deployments;
        // Featured first; the incoming date order is kept within each group
        return [...filtered.filter((d) => d.featured), ...filtered.filter((d) => !d.featured)];
    }, [deployments, activeTag]);

    const chip = (active: boolean) =>
        `font-mono text-xs px-3 py-1 rounded border transition-colors ${active
            ? "bg-primary/20 text-primary border-primary/50"
            : "text-muted-foreground border-border hover:text-primary hover:border-primary/30"
        }`;

    return (
        <section id="projects" className="py-12 scroll-mt-16">
            <SectionHeading index="03" title="Projects" command="ls /opt/projects" />

            <div className="flex flex-wrap gap-2 mb-6">
                <button onClick={() => setActiveTag(null)} aria-pressed={activeTag === null} className={chip(activeTag === null)}>
                    All
                </button>
                {filterTags.map((tag) => (
                    <button key={tag} onClick={() => setActiveTag(tag)} aria-pressed={activeTag === tag} className={chip(activeTag === tag)}>
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-dense gap-5">
                {visible.map((deployment) => {
                    const featured = !!deployment.featured;
                    return (
                        <Link
                            href={`/deployments/${deployment.slug}`}
                            key={deployment.slug}
                            onPointerMove={trackPointer}
                            className={`group spotlight flex flex-col rounded-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 ${featured ? "md:col-span-2 gradient-border hud" : "glass hud"}`}
                        >
                            {/* One logo mark per project: /public/projects/logos/<slug>.svg (decorative, the title is next to it) */}
                            <div className={`logo-tile overflow-hidden border-b border-white/10 ${featured ? "h-44" : "h-36"}`}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`/projects/logos/${deployment.slug}.svg`}
                                    alt=""
                                    loading="lazy"
                                    className="h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-5">
                                <div className="flex justify-between items-start gap-3 mb-3">
                                    <h3 className="glitch-hover font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors" data-text={deployment.title}>
                                        {deployment.title}
                                    </h3>
                                    {featured ? (
                                        <span className="flex items-center gap-1 shrink-0 font-mono text-[10px] uppercase tracking-wider text-warm border border-warm/30 px-1.5 py-0.5 rounded">
                                            <Star className="w-3 h-3" /> Featured
                                        </span>
                                    ) : (
                                        <ArrowUpRight className="w-4 h-4 shrink-0 text-muted-foreground opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary" aria-hidden="true" />
                                    )}
                                </div>

                                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                                    {deployment.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {deployment.tags?.slice(0, featured ? 5 : 3).map((tag: string) => (
                                        <span key={tag} className="font-mono text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
