"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { track } from "@vercel/analytics";
import { ArrowUpRight, Download, Github, Globe, Linkedin, Mail, MapPin } from "lucide-react";

interface CardViewProps {
    name: string;
    role: string;
    location: string;
    email: string;
    siteUrl: string;
    linkedin: string;
    github: string;
}

const strip = (url: string) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Real credentials from the site content, shown as proof rather than generic skill tags.
const proof = ["Presented at CCIDSA 2026", "Microsoft PyRIT contributor", "SC-100 · SC-300 · Security+"];

export default function CardView({ name, role, location, email, siteUrl, linkedin, github }: CardViewProps) {
    const reduce = useReducedMotion();

    const container: Variants = {
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : 0.07, delayChildren: reduce ? 0 : 0.05 } },
    };
    const item: Variants = {
        hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 14 },
        show: { opacity: 1, y: 0, transition: { duration: reduce ? 0.01 : 0.45, ease: [0.22, 1, 0.36, 1] } },
    };

    const links = [
        { id: "portfolio", label: "Portfolio & work", sub: strip(siteUrl), href: "/", icon: Globe, internal: true },
        { id: "linkedin", label: "LinkedIn", sub: strip(linkedin), href: linkedin, icon: Linkedin },
        { id: "github", label: "GitHub", sub: strip(github), href: github, icon: Github },
        { id: "email", label: "Email me", sub: email, href: `mailto:${email}`, icon: Mail, internal: true },
    ];

    const tap = reduce ? undefined : { scale: 0.98 };

    return (
        <div className="card-theme fixed inset-0 z-50 overflow-y-auto">
            <motion.main
                variants={container}
                initial="hidden"
                animate="show"
                className="mx-auto flex min-h-full w-full max-w-[460px] flex-col px-5 py-10"
            >
                <motion.div variants={item} className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest">
                    <span className="inline-flex items-center gap-2 text-[hsl(var(--c-accent))]">
                        <span className="h-2 w-2 rounded-full bg-[hsl(var(--c-accent))] animate-pulse-green" />
                        Open to connect
                    </span>
                    <span className="inline-flex items-center gap-1 text-[hsl(var(--c-muted))]">
                        <MapPin className="h-3 w-3" aria-hidden />
                        {location}
                    </span>
                </motion.div>

                <motion.header variants={item} className="mt-10 flex flex-col items-center text-center">
                    <div
                        aria-hidden
                        className="flex h-20 w-20 items-center justify-center rounded-2xl border border-[hsl(var(--c-accent)/0.5)] bg-[hsl(var(--c-surface))] font-mono text-2xl font-bold text-[hsl(var(--c-accent))] shadow-[0_0_32px_-10px_hsl(var(--c-accent)/0.7)]"
                    >
                        ES
                    </div>
                    <h1 className="mt-5 text-3xl font-bold tracking-tight">{name}</h1>
                    <p className="mt-1.5 font-mono text-sm text-[hsl(var(--c-accent))]">{role}</p>
                    <p className="mt-4 max-w-sm text-[15px] leading-relaxed text-[hsl(var(--c-muted))]">
                        I turn written security requirements into checks that run automatically: Policy-as-Code across
                        Azure, Entra ID and Zero Trust.
                    </p>
                </motion.header>

                <motion.ul variants={item} className="mt-5 flex flex-wrap justify-center gap-2">
                    {proof.map((p) => (
                        <li
                            key={p}
                            className="rounded-full border border-[hsl(var(--c-border))] bg-[hsl(var(--c-surface))] px-3 py-1 text-xs text-[hsl(var(--c-muted))]"
                        >
                            {p}
                        </li>
                    ))}
                </motion.ul>

                <motion.a
                    variants={item}
                    whileTap={tap}
                    whileHover={reduce ? undefined : { y: -2 }}
                    href="/card/contact.vcf"
                    download="Ekonkar-Singh.vcf"
                    onClick={() => track("card_click", { link: "save_contact" })}
                    className="mt-7 flex items-center justify-center gap-2.5 rounded-xl bg-[hsl(var(--c-accent))] px-5 py-4 text-base font-semibold text-[hsl(var(--c-accent-fg))] shadow-[0_10px_30px_-10px_hsl(var(--c-accent)/0.7)] outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--c-accent))] focus-visible:ring-offset-2 focus-visible:ring-offset-[hsl(var(--c-bg))]"
                >
                    <Download className="h-5 w-5" aria-hidden />
                    Save my contact
                </motion.a>
                <motion.p variants={item} className="mt-2 text-center text-xs text-[hsl(var(--c-muted))]">
                    One tap adds me to your phone
                </motion.p>

                <motion.nav variants={item} aria-label="Links" className="mt-8 flex flex-col gap-3">
                    {links.map((l) => (
                        <motion.a
                            key={l.id}
                            whileTap={tap}
                            whileHover={reduce ? undefined : { y: -2 }}
                            href={l.href}
                            onClick={() => track("card_click", { link: l.id })}
                            {...(l.internal ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                            className="group flex min-h-[60px] items-center gap-4 rounded-xl border border-[hsl(var(--c-border))] bg-[hsl(var(--c-surface))] px-4 py-3 shadow-[var(--c-shadow)] outline-none transition-colors hover:border-[hsl(var(--c-accent)/0.55)] focus-visible:ring-2 focus-visible:ring-[hsl(var(--c-accent))]"
                        >
                            <l.icon className="h-5 w-5 shrink-0 text-[hsl(var(--c-accent))]" aria-hidden />
                            <span className="min-w-0 flex-1">
                                <span className="block text-[15px] font-semibold">{l.label}</span>
                                <span className="block truncate font-mono text-xs text-[hsl(var(--c-muted))]">
                                    {l.sub}
                                </span>
                            </span>
                            <ArrowUpRight
                                className="h-4 w-4 shrink-0 text-[hsl(var(--c-muted))] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[hsl(var(--c-accent))]"
                                aria-hidden
                            />
                        </motion.a>
                    ))}
                </motion.nav>

                <motion.footer variants={item} className="mt-auto pt-10 text-center font-mono text-[11px] uppercase tracking-widest text-[hsl(var(--c-muted))]">
                    {name} — {location}
                </motion.footer>
            </motion.main>
        </div>
    );
}
