"use client";

import { Mail, Linkedin, Github, Globe, FileDown } from "lucide-react";

export const ContactSection = () => {
    const links = [
        {
            icon: Mail,
            label: "Email",
            href: "mailto:ekonkar.singh.s@gmail.com",
            value: "ekonkar.singh.s@gmail.com",
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://linkedin.com/in/esingh-1",
            value: "linkedin.com/in/esingh-1",
        },
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/ThryLox",
            value: "github.com/ThryLox",
        },
        {
            icon: Globe,
            label: "Portfolio",
            href: "https://ekonkar.systems",
            value: "ekonkar.systems",
        },
    ];

    return (
        <section id="contact" className="py-12 font-mono">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="text-accent">$</span>
                <h2 className="text-xl font-bold">cat /etc/contact.conf</h2>
            </div>

            <div className="bg-card/50 border border-border rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {links.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 p-3 rounded border border-border hover:border-primary/50 hover:bg-primary/5 transition-all group"
                        >
                            <link.icon className="w-5 h-5 text-primary" />
                            <div>
                                <span className="text-xs text-muted-foreground block">{link.label}</span>
                                <span className="text-sm text-foreground group-hover:text-primary transition-colors">
                                    {link.value}
                                </span>
                            </div>
                        </a>
                    ))}
                </div>

                <div className="flex justify-center pt-4 border-t border-border">
                    <a
                        href="/resume.pdf"
                        download="Ekonkar_Singh_Resume.pdf"
                        className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-6 py-3 rounded transition-colors"
                    >
                        <FileDown className="w-5 h-5" />
                        Download Resume (PDF)
                    </a>
                </div>
            </div>

            <div className="text-center mt-8 text-sm text-muted-foreground">
                <span className="text-accent">// </span>
                Built with Next.js • © {new Date().getFullYear()} Ekonkar Singh
            </div>
        </section>
    );
};
