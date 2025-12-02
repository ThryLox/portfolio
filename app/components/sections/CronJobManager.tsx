"use client";

import { PostData } from "@/lib/content";
import { CommandLink } from "../ui/CommandLink";
import { Clock, PlayCircle } from "lucide-react";

interface CronJobManagerProps {
    jobs: PostData[];
}

export const CronJobManager = ({ jobs }: CronJobManagerProps) => {
    return (
        <section id="cronjobs" className="py-12 font-mono">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="text-accent">$</span>
                <h2 className="text-xl font-bold">crontab -l</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-lg overflow-hidden">
                <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-muted/20 text-xs text-muted-foreground font-bold uppercase tracking-wider">
                    <div className="col-span-3 sm:col-span-2">Schedule</div>
                    <div className="col-span-9 sm:col-span-10">Command / Job</div>
                </div>

                <div className="divide-y divide-border">
                    {jobs.map((job) => (
                        <CommandLink
                            href={`/cronjobs/${job.slug}`}
                            key={job.slug}
                            command={`cat /etc/cron.d/${job.slug}`}
                            className="grid grid-cols-12 gap-4 p-4 hover:bg-white/5 transition-colors group items-start text-sm"
                        >
                            <div className="col-span-3 sm:col-span-2 font-mono text-accent text-xs sm:text-sm">
                                {job.schedule || "* * * * *"}
                            </div>

                            <div className="col-span-9 sm:col-span-10 space-y-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-primary font-bold">{job.title}</span>
                                    <span className="text-muted-foreground">@ {job.company}</span>
                                    {job.status === 'running' && (
                                        <span className="hidden sm:flex items-center gap-1 text-[10px] text-secondary bg-secondary/10 px-1.5 py-0.5 rounded border border-secondary/20 ml-2 animate-pulse-green">
                                            <PlayCircle className="w-3 h-3" /> RUNNING
                                        </span>
                                    )}
                                </div>

                                <p className="text-muted-foreground text-xs font-mono">
                                    {job.startDate} - {job.endDate}
                                </p>

                                <div className="text-muted-foreground/80 line-clamp-1 text-xs mt-1 group-hover:text-foreground transition-colors">
                                    {/* Strip HTML tags for preview if needed, or just show description */}
                                    {job.description || "Executing scheduled task..."}
                                </div>
                            </div>
                        </CommandLink>
                    ))}
                </div>

                <div className="p-2 bg-muted/10 text-[10px] text-muted-foreground font-mono text-center">
                    {jobs.length} active cron jobs found
                </div>
            </div>
        </section>
    );
};
