"use client";

import { Terminal, Shield, Cpu, Code, Wrench } from "lucide-react";

interface SkillCategory {
    category: string;
    items: string[];
}

interface ConfigData {
    skills?: SkillCategory[];
    system?: {
        version: string;
        build: string;
        kernel: string;
    };
}

export const SystemConfig = ({ config }: { config: ConfigData }) => {
    if (!config) return null;

    const getIcon = (category: string) => {
        switch (category.toLowerCase()) {
            case 'security': return <Shield className="w-4 h-4 text-primary" />;
            case 'infrastructure': return <Terminal className="w-4 h-4 text-secondary" />;
            case 'development': return <Code className="w-4 h-4 text-accent" />;
            case 'tools': return <Wrench className="w-4 h-4 text-muted-foreground" />;
            default: return <Cpu className="w-4 h-4" />;
        }
    };

    return (
        <section id="skills" className="py-12 font-mono">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="text-accent">$</span>
                <h2 className="text-xl font-bold">cat /etc/config.yaml</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {config.skills?.map((category) => (
                    <div key={category.category} className="bg-card/50 border border-border p-5 rounded-lg hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-2 mb-4 border-b border-border pb-2">
                            {getIcon(category.category)}
                            <h3 className="font-bold text-foreground">{category.category}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {category.items.map((item) => (
                                <span key={item} className="text-xs bg-muted/20 text-muted-foreground px-2 py-1 rounded border border-border hover:text-primary hover:border-primary/30 transition-colors cursor-default">
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}

                {config.system && (
                    <div className="bg-black/30 border border-border p-5 rounded-lg font-mono text-xs text-muted-foreground space-y-2">
                        <div className="flex justify-between">
                            <span>KERNEL_VERSION</span>
                            <span className="text-primary">{config.system.kernel}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>BUILD_ID</span>
                            <span className="text-secondary">{config.system.build}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>SYSTEM_VER</span>
                            <span className="text-accent">{config.system.version}</span>
                        </div>
                        <div className="mt-4 pt-2 border-t border-border/50 text-center italic opacity-50">
              // System configuration loaded successfully
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};
