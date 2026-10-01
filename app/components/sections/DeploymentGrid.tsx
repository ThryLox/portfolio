"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Star } from "lucide-react";
import { PostData } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

interface DeploymentGridProps {
    deployments: PostData[];
}

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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((deployment) => (
                    <Link
                        href={`/deployments/${deployment.slug}`}
                        key={deployment.slug}
                        className={`group flex flex-col p-5 rounded-lg transition-colors hover:border-primary/50 ${deployment.featured ? "gradient-border hud" : "glass hud hover:bg-white/5"}`}
                    >
                        <div className="flex justify-between items-start gap-3 mb-3">
                            <h3 className="glitch-hover font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors" data-text={deployment.title}>
                                {deployment.title}
                            </h3>
                            {deployment.featured && (
                                <span className="flex items-center gap-1 shrink-0 font-mono text-[10px] uppercase tracking-wider text-accent border border-accent/30 px-1.5 py-0.5 rounded">
                                    <Star className="w-3 h-3" /> Featured
                                </span>
                            )}
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                            {deployment.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {deployment.tags?.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="font-mono text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};
