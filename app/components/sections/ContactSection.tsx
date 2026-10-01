import { Mail, Linkedin, Github, FileDown } from "lucide-react";
import Link from "next/link";
import { site } from "@/lib/site";
import { SectionHeading } from "../ui/SectionHeading";

export const ContactSection = ({ email }: { email: string }) => {
    const links = [
        {
            icon: Mail,
            label: "Email",
            href: `mailto:${email}`,
            value: email,
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: site.linkedin,
            value: site.linkedin.replace(/^https:\/\/(www\.)?/, "").replace(/\/$/, ""),
        },
        {
            icon: Github,
            label: "GitHub",
            href: site.github,
            value: site.github.replace(/^https:\/\//, ""),
        },
    ];

    return (
        <section id="contact" className="py-12 scroll-mt-16">
            <SectionHeading index="06" title="Contact" command="cat /etc/contact.conf" />

            <div className="glass hud rounded-lg p-6">
                <p className="text-sm text-muted-foreground mb-6">
                    Open to cloud security and AI security roles, remote or hybrid from Ottawa.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                            <link.icon className="w-5 h-5 text-primary shrink-0" />
                            <div className="min-w-0">
                                <span className="text-xs text-muted-foreground block">{link.label}</span>
                                <span className="text-sm text-foreground group-hover:text-primary transition-colors break-all">
                                    {link.value}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="flex justify-center pt-4 border-t border-border">
                    <Link
                        href="/resume"
                        className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-6 py-3 rounded transition-colors"
                    >
                        <FileDown className="w-5 h-5" />
                        View / Print Resume
                    </Link>
                </div>
            </div>

            <div className="text-center mt-8 text-sm text-muted-foreground">
                © {new Date().getFullYear()} Ekonkar Singh
            </div>
        </section>
    );
};
