interface SectionHeadingProps {
    title: string;
    index?: string;
    command?: string;
}

// Plain-language heading first; the index and shell command are small mono labels above it.
export const SectionHeading = ({ title, index, command }: SectionHeadingProps) => {
    return (
        <div className="group mb-10">
            <div aria-hidden="true" className="flex items-center gap-3 font-mono text-xs text-muted-foreground mb-2">
                {index && <span className="text-primary">[{index}]</span>}
                {command && (
                    <span>
                        <span className="text-primary">$</span> {command}
                    </span>
                )}
            </div>
            <div className="flex items-center gap-4">
                <h2
                    className="glitch-hover text-glow text-3xl sm:text-4xl font-bold tracking-tight text-foreground"
                    data-text={title}
                >
                    {title}
                </h2>
                <span aria-hidden="true" className="cursor-blink" />
                <span aria-hidden="true" className="section-rule" />
            </div>
        </div>
    );
};
