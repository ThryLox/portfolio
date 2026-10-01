interface SectionHeadingProps {
    title: string;
    index?: string;
    command?: string;
}

// Plain-language heading first; the index, cursor and shell command are decoration only.
export const SectionHeading = ({ title, index, command }: SectionHeadingProps) => {
    return (
        <div className="group flex items-baseline gap-3 mb-8">
            {index && (
                <span aria-hidden="true" className="font-mono text-xs text-primary">[{index}]</span>
            )}
            <h2
                className="glitch-hover text-glow text-2xl font-bold uppercase tracking-widest text-foreground"
                data-text={title}
            >
                {title}
            </h2>
            <span aria-hidden="true" className="cursor-blink" />
            <span aria-hidden="true" className="section-rule" />
            {command && (
                <span aria-hidden="true" className="hidden sm:inline font-mono text-xs text-muted-foreground">
                    <span className="text-primary">$</span> {command}
                </span>
            )}
        </div>
    );
};
