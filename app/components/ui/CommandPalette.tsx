"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { site } from "@/lib/site";

export interface PaletteProject {
    slug: string;
    title: string;
}

interface Command {
    label: string;
    group: string;
    run: () => void;
}

interface CommandPaletteProps {
    projects: PaletteProject[];
    email: string;
}

export const OPEN_PALETTE_EVENT = "open-command-palette";

export const CommandPalette = ({ projects, email }: CommandPaletteProps) => {
    const router = useRouter();
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selected, setSelected] = useState(0);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const commands = useMemo<Command[]>(() => {
        const go = (href: string) => () => router.push(href);
        const external = (href: string) => () => window.open(href, "_blank", "noopener,noreferrer");

        return [
            { label: "About", group: "Go to", run: go("/#about") },
            { label: "Certifications", group: "Go to", run: go("/#certifications") },
            { label: "Skills", group: "Go to", run: go("/#skills") },
            { label: "Projects", group: "Go to", run: go("/#projects") },
            { label: "Experience", group: "Go to", run: go("/#experience") },
            { label: "Contact", group: "Go to", run: go("/#contact") },
            { label: "Resume", group: "Go to", run: go("/resume") },
            ...projects.map((project) => ({
                label: project.title,
                group: "Project",
                run: go(`/deployments/${project.slug}`),
            })),
            { label: "Open GitHub", group: "Link", run: external(site.github) },
            { label: "Open LinkedIn", group: "Link", run: external(site.linkedin) },
            { label: "Copy email address", group: "Action", run: () => navigator.clipboard?.writeText(email) },
            { label: "Send email", group: "Action", run: () => { window.location.href = `mailto:${email}`; } },
        ];
    }, [projects, email, router]);

    const results = useMemo(() => {
        const terms = query.toLowerCase().split(/\s+/).filter(Boolean);
        return commands.filter((command) => {
            const haystack = `${command.group} ${command.label}`.toLowerCase();
            return terms.every((term) => haystack.includes(term));
        });
    }, [commands, query]);

    // Ctrl+K / Cmd+K toggles; the nav button opens via a window event
    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((prev) => !prev);
            }
        };
        const onOpen = () => setOpen(true);

        window.addEventListener("keydown", onKeyDown);
        window.addEventListener(OPEN_PALETTE_EVENT, onOpen);
        return () => {
            window.removeEventListener("keydown", onKeyDown);
            window.removeEventListener(OPEN_PALETTE_EVENT, onOpen);
        };
    }, []);

    useEffect(() => {
        if (open) {
            setQuery("");
            setSelected(0);
            inputRef.current?.focus();
        }
    }, [open]);

    useEffect(() => {
        listRef.current?.querySelector('[aria-selected="true"]')?.scrollIntoView({ block: "nearest" });
    }, [selected]);

    if (!open) return null;

    const runCommand = (command: Command | undefined) => {
        if (!command) return;
        setOpen(false);
        command.run();
    };

    const onInputKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "ArrowDown") {
            e.preventDefault();
            setSelected((prev) => (prev + 1) % Math.max(results.length, 1));
        } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setSelected((prev) => (prev - 1 + results.length) % Math.max(results.length, 1));
        } else if (e.key === "Enter") {
            e.preventDefault();
            runCommand(results[selected]);
        } else if (e.key === "Escape") {
            setOpen(false);
        }
    };

    return (
        <div
            className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm flex items-start justify-center px-4 pt-[15vh]"
            onClick={() => setOpen(false)}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label="Command palette"
                className="gradient-border w-full max-w-xl rounded-xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex items-center gap-3 px-4 border-b border-white/10">
                    <Search className="w-4 h-4 text-muted-foreground shrink-0" />
                    <input
                        ref={inputRef}
                        value={query}
                        onChange={(e) => {
                            setQuery(e.target.value);
                            setSelected(0);
                        }}
                        onKeyDown={onInputKeyDown}
                        placeholder="Type a command or search projects..."
                        aria-label="Search commands"
                        className="w-full bg-transparent py-4 font-mono text-sm text-foreground placeholder:text-muted-foreground outline-none"
                    />
                    <kbd className="text-[10px] text-muted-foreground border border-white/10 rounded px-1.5 py-0.5">Esc</kbd>
                </div>

                <ul ref={listRef} role="listbox" className="max-h-[50vh] overflow-y-auto p-2">
                    {results.length === 0 && (
                        <li className="px-3 py-6 text-center text-sm text-muted-foreground">No matches</li>
                    )}
                    {results.map((command, index) => (
                        <li
                            key={`${command.group}-${command.label}`}
                            role="option"
                            aria-selected={index === selected}
                            onMouseEnter={() => setSelected(index)}
                            onClick={() => runCommand(command)}
                            className={`flex items-center justify-between gap-4 px-3 py-2 rounded cursor-pointer text-sm ${index === selected ? "bg-primary/15 text-foreground" : "text-muted-foreground"}`}
                        >
                            <span className="truncate">{command.label}</span>
                            <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground shrink-0">
                                {command.group}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
