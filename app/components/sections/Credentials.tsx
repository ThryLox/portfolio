import Link from "next/link";
import { Award, FileText } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

export interface Certification {
    name: string;
    code: string;
}

export interface Publication {
    title: string;
    venue?: string;
    link?: string;
}

export const Certifications = ({ certifications }: { certifications: Certification[] }) => {
    if (!certifications.length) return null;

    return (
        <section id="certifications" className="py-12 scroll-mt-16">
            <SectionHeading index="01" title="Certifications" command="ls /etc/certs" />

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {certifications.map((cert) => (
                    <div
                        key={cert.code}
                        className="group glass hud flex flex-col rounded-lg p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50"
                    >
                        <Award className="w-5 h-5 text-primary/70 transition-colors group-hover:text-primary" aria-hidden="true" />
                        <span className="mt-4 font-mono text-2xl font-bold leading-tight text-foreground text-glow">{cert.code}</span>
                        <span className="mt-2 text-xs leading-snug text-muted-foreground">{cert.name}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export const Publications = ({ publications }: { publications: Publication[] }) => {
    if (!publications.length) return null;

    return (
        <section id="publications" className="py-12 scroll-mt-16">
            <SectionHeading index="05" title="Publications" command="ls ~/papers" />

            <ul className="space-y-4">
                {publications.map((pub) => (
                    <li key={pub.title} className="group flex items-start gap-3 glass hud p-4 rounded-lg">
                        <FileText className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <div>
                            {pub.link ? (
                                <Link href={pub.link} className="text-sm text-foreground hover:text-primary transition-colors">
                                    {pub.title}
                                </Link>
                            ) : (
                                <span className="text-sm text-foreground">{pub.title}</span>
                            )}
                            {pub.venue && <div className="font-mono text-xs text-muted-foreground mt-1">{pub.venue}</div>}
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};
