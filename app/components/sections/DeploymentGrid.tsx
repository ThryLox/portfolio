"use client";

import { PostData } from "@/lib/content";
import { CommandLink } from "../ui/CommandLink";
import { Circle } from "lucide-react";

interface DeploymentGridProps {
    deployments: PostData[];
}

export const DeploymentGrid = ({ deployments }: DeploymentGridProps) => {
    return (
        <section id="deployments" className="py-12 font-mono">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="text-accent">$</span>
                <h2 className="text-xl font-bold">systemctl status deployments</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {deployments.map((deployment) => (
                    <CommandLink
                        href={`/deployments/${deployment.slug}`}
                        key={deployment.slug}
                        command={`systemctl start ${deployment.slug}.service`}
                        className="group relative bg-card/50 border border-border p-5 rounded-lg hover:border-primary/50 transition-all hover:bg-white/5 block h-full card-hover glow-on-hover"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className="flex items-center gap-2">
                                <div className={`w-2 h-2 rounded-full ${deployment.status === 'active' ? 'bg-secondary animate-pulse-green' : 'bg-muted'}`} />
                                <span
                                    className="font-bold text-foreground group-hover:text-primary transition-colors glitch-hover"
                                    data-text={`${deployment.title}.service`}
                                >
                                    {deployment.title}.service
                                </span>
                            </div>
                            <span className="text-xs text-muted-foreground bg-muted/20 px-2 py-1 rounded">
                                {deployment.version || "latest"}
                            </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 h-10">
                            {deployment.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {deployment.tags?.slice(0, 3).map((tag: string) => (
                                <span key={tag} className="text-xs text-primary/80 bg-primary/10 px-2 py-0.5 rounded border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Status indicator line */}
                        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CommandLink>
                ))}
            </div>
        </section>
    );
};
