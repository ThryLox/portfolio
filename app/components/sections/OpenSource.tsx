import Link from "next/link";
import { ArrowRight, GitMerge } from "lucide-react";
import { MergedPR } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

export const OpenSource = ({ prs }: { prs: MergedPR[] }) => {
    if (!prs.length) return null;

    return (
        <section id="opensource" className="py-12 scroll-mt-16">
            <SectionHeading index="04" title="Open Source" command="gh pr list --state merged" />

            <ul className="space-y-3">
                {prs.map((pr) => (
                    <li key={pr.url}>
                        <a
                            href={pr.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-4 glass hud rounded-lg p-4 transition-colors hover:border-primary/50 hover:bg-white/5"
                        >
                            <GitMerge className="w-5 h-5 shrink-0 text-primary" aria-hidden="true" />
                            <span className="min-w-0 flex-1">
                                <span className="block font-mono text-xs text-muted-foreground">
                                    {pr.repo} <span className="text-primary/80">#{pr.number}</span>
                                </span>
                                <span className="block text-sm text-foreground group-hover:text-primary transition-colors">
                                    {pr.title}
                                </span>
                            </span>
                            <span className="shrink-0 rounded border border-warm/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-warm">
                                Merged
                            </span>
                        </a>
                    </li>
                ))}
            </ul>

            <Link
                href="/deployments/open-source-contributions"
                className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground hover:text-primary transition-colors"
            >
                Read the write-up <ArrowRight className="w-3 h-3" />
            </Link>
        </section>
    );
};
