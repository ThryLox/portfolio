"use client";

import { useEffect, useState, useRef } from "react";
import { Briefcase, FolderGit2, Layers } from "lucide-react";

interface StatsBarProps {
    projectCount: number;
    roleCount: number;
    skillCategories: number;
}

export const StatsBar = ({ projectCount, roleCount, skillCategories }: StatsBarProps) => {
    const [visible, setVisible] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, []);

    const stats = [
        { icon: FolderGit2, value: projectCount, label: "Projects" },
        { icon: Briefcase, value: roleCount, label: "Roles" },
        { icon: Layers, value: skillCategories, label: "Skill Areas" },
    ];

    return (
        <div ref={ref} className="py-4 font-mono">
            <div className="grid grid-cols-3 gap-4 bg-card/30 border border-border rounded-lg p-6">
                {stats.map((stat, index) => (
                    <div key={stat.label} className="text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <stat.icon className="w-5 h-5 text-primary" />
                            <span className={`text-3xl font-bold text-foreground transition-all duration-1000 ${visible ? "opacity-100" : "opacity-0"
                                }`}>
                                {visible ? stat.value : 0}
                            </span>
                        </div>
                        <span className="text-sm text-muted-foreground">{stat.label}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
