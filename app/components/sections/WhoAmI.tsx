import Link from "next/link";
import { FileDown, Github, Linkedin, MapPin } from "lucide-react";
import { PostData } from "@/lib/content";
import { site } from "@/lib/site";

interface WhoAmIProps {
    data: PostData;
}

export const WhoAmI = ({ data }: WhoAmIProps) => {
    return (
        <section id="about" className="relative isolate pt-10 pb-6 scroll-mt-16">
            <div aria-hidden="true" className="hero-glow" />

            {/* Terminal window */}
            <div className="gradient-border rounded-xl overflow-hidden">
                <div aria-hidden="true" className="relative flex items-center px-4 py-3 border-b border-white/10 bg-black/40">
                    <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-white/15" />
                        <span className="w-3 h-3 rounded-full bg-white/15" />
                        <span className="w-3 h-3 rounded-full bg-white/15" />
                    </div>
                    <span className="absolute inset-x-0 text-center font-mono text-xs text-muted-foreground pointer-events-none">
                        ekonkar@systems: ~
                    </span>
                </div>

                <div className="p-6 sm:p-10">
                    <p aria-hidden="true" className="font-mono text-sm text-muted-foreground mb-5">
                        <span className="text-primary">$</span> whoami
                    </p>

                    <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">{data.name}</h1>
                    <p className="font-mono text-xl sm:text-2xl text-primary mt-3">{data.role}</p>
                    <p className="text-base text-muted-foreground mt-1">{data.headline}</p>

                    <div
                        className="max-w-3xl mt-6 space-y-4 text-base leading-relaxed text-foreground/80"
                        dangerouslySetInnerHTML={{ __html: data.contentHtml || "" }}
                    />

                    <div className="flex flex-wrap items-center gap-3 mt-8 font-mono text-sm">
                        <Link
                            href="/resume"
                            className="flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded transition-colors"
                        >
                            <FileDown className="w-4 h-4" />
                            Resume
                        </Link>
                        <a
                            href={site.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white/10 hover:border-primary/50 hover:text-primary px-4 py-2 rounded transition-colors"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                        <a
                            href={site.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 border border-white/10 hover:border-primary/50 hover:text-primary px-4 py-2 rounded transition-colors"
                        >
                            <Linkedin className="w-4 h-4" />
                            LinkedIn
                        </a>
                        <span className="flex items-center gap-1.5 text-muted-foreground sm:ml-2">
                            <MapPin className="w-4 h-4" />
                            {data.location}
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};
