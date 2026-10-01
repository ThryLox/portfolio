import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PostData } from "@/lib/content";
import { SectionHeading } from "../ui/SectionHeading";

interface ExperienceProps {
    jobs: PostData[];
}

export const Experience = ({ jobs }: ExperienceProps) => {
    return (
        <section id="experience" className="py-12 scroll-mt-16">
            <SectionHeading index="02" title="Experience" command="crontab -l" />

            <div className="space-y-4">
                {jobs.map((job) => (
                    <Link
                        href={`/cronjobs/${job.slug}`}
                        key={job.slug}
                        className="group block glass hud rounded-lg p-5 hover:border-primary/50 hover:bg-white/5 transition-colors"
                    >
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                            <div>
                                <h3 className="glitch-hover font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors" data-text={job.title}>{job.title}</h3>
                                <p className="text-sm text-primary/80">{job.company}</p>
                            </div>
                            <span className="font-mono text-xs text-muted-foreground shrink-0 sm:pt-1">
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
                ))}
            </div>
        </section>
    );
};
