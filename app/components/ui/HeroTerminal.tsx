"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export interface TerminalData {
    projects: { slug: string; title: string }[];
    jobs: { slug: string; title: string; company: string }[];
    certs: { code: string; name: string }[];
    skills: string[];
    github: string;
    linkedin: string;
}

interface Line {
    kind: "in" | "out";
    text: string;
    href?: string;
}

const HELP = [
    ["whoami", "who I am"],
    ["projects", "list projects"],
    ["experience", "list roles"],
    ["certs", "list certifications"],
    ["skills", "skill areas"],
    ["resume", "open the resume"],
    ["github / linkedin", "open my profiles"],
    ["contact", "jump to contact"],
    ["clear", "clear the screen"],
];

export const HeroTerminal = ({ data }: { data: TerminalData }) => {
    const router = useRouter();
    const inputRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState("");
    const [lines, setLines] = useState<Line[]>([{ kind: "out", text: "Type a command, or try: help" }]);
    const [history, setHistory] = useState<string[]>([]);
    const [cursor, setCursor] = useState(-1);

    const out = (text: string, href?: string): Line => ({ kind: "out", text, href });

    const run = (raw: string) => {
        const cmd = raw.trim().toLowerCase();
        if (!cmd) return;
        setHistory((h) => [cmd, ...h]);
        setCursor(-1);

        if (cmd === "clear") {
            setLines([]);
            return;
        }

        let result: Line[] = [];
        switch (cmd) {
            case "help":
                result = HELP.map(([c, d]) => out(`${c.padEnd(18)} ${d}`));
                break;
            case "whoami":
                result = [out("Ekonkar Singh: Cloud & AI Security Analyst, Ottawa ON")];
                break;
            case "projects":
                result = data.projects.map((p) => out(p.title, `/deployments/${p.slug}`));
                break;
            case "experience":
                result = data.jobs.map((j) => out(`${j.title}, ${j.company}`, `/cronjobs/${j.slug}`));
                break;
            case "certs":
                result = data.certs.map((c) => out(`${c.code.padEnd(10)} ${c.name}`));
                break;
            case "skills":
                result = [out(data.skills.join(" · "))];
                break;
            case "resume":
                result = [out("Opening resume...")];
                router.push("/resume");
                break;
            case "github":
                result = [out("Opening GitHub...")];
                window.open(data.github, "_blank", "noopener,noreferrer");
                break;
            case "linkedin":
                result = [out("Opening LinkedIn...")];
                window.open(data.linkedin, "_blank", "noopener,noreferrer");
                break;
            case "contact":
                result = [out("Scrolling to contact...")];
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                break;
            default:
                result = [out(`command not found: ${cmd}. Try help.`)];
        }
        setLines((prev) => [...prev, { kind: "in", text: raw.trim() }, ...result]);
    };

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "ArrowUp" && history.length) {
            e.preventDefault();
            const next = Math.min(cursor + 1, history.length - 1);
            setCursor(next);
            setValue(history[next]);
        } else if (e.key === "ArrowDown") {
            e.preventDefault();
            const next = cursor - 1;
            setCursor(next);
            setValue(next >= 0 ? history[next] : "");
        }
    };

    return (
        <div
            className="mt-8 rounded-lg border border-white/10 bg-black/40 p-4 font-mono text-sm print:hidden"
            onClick={() => inputRef.current?.focus()}
        >
            <div aria-live="polite" className="max-h-56 overflow-y-auto space-y-0.5">
                {lines.map((l, i) =>
                    l.kind === "in" ? (
                        <p key={i} className="text-foreground">
                            <span className="text-primary">$</span> {l.text}
                        </p>
                    ) : l.href ? (
                        <p key={i}>
                            <Link href={l.href} className="text-primary hover:underline underline-offset-4">
                                {l.text}
                            </Link>
                        </p>
                    ) : (
                        <p key={i} className="text-muted-foreground whitespace-pre-wrap">
                            {l.text}
                        </p>
                    )
                )}
            </div>
            <form
                className="flex items-center gap-2 mt-2"
                onSubmit={(e) => {
                    e.preventDefault();
                    run(value);
                    setValue("");
                }}
            >
                <span aria-hidden="true" className="text-primary">$</span>
                <input
                    ref={inputRef}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={onKeyDown}
                    aria-label="Terminal command"
                    placeholder="help"
                    autoComplete="off"
                    autoCapitalize="off"
                    spellCheck={false}
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground/50 outline-none"
                />
            </form>
        </div>
    );
};
