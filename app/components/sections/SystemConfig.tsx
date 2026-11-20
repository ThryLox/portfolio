import { SectionHeading } from "../ui/SectionHeading";

interface SkillCategory {
    category: string;
    items: string[];
}

export const SystemConfig = ({ skills }: { skills: SkillCategory[] }) => {
    if (!skills?.length) return null;

    return (
        <section id="skills" className="py-12 scroll-mt-16">
            <SectionHeading index="06" title="Skills" command="cat /etc/config.yaml" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((category) => (
                    <div key={category.category} className="glass hud p-5 rounded-lg">
                        <h3 className="flex items-baseline justify-between font-semibold tracking-tight text-foreground mb-4 border-b border-border pb-2">
                            {category.category}
                            <span aria-hidden="true" className="font-mono text-xs text-primary/70">{category.items.length}</span>
                        </h3>

                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <span key={item} className="font-mono text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded border border-border transition-colors hover:text-primary hover:border-primary/50 hover:bg-primary/10">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
