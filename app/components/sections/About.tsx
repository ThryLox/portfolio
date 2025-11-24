import { Section } from "@/app/components/ui/Section";
import { Card, CardContent } from "@/app/components/ui/Card";
import { Shield, Cloud, Terminal, Cpu } from "lucide-react";

const skills = [
    {
        category: "Security & Compliance",
        icon: Shield,
        items: ["Identity Management", "Access Control", "Compliance Automation", "Threat Detection"],
    },
    {
        category: "Cloud & Networking",
        icon: Cloud,
        items: ["Azure", "AWS", "Hybrid Cloud", "Network Security"],
    },
    {
        category: "Tooling & Languages",
        icon: Terminal,
        items: ["Python", "PowerShell", "TypeScript", "Terraform"],
    },
    {
        category: "AI & Analytics",
        icon: Cpu,
        items: ["Data Analysis", "Machine Learning", "Automation", "Monitoring"],
    },
];

export function About() {
    return (
        <Section id="about">
            <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-100">About Me</h2>
                    <div className="space-y-4 text-slate-400 leading-relaxed">
                        <p>
                            I am a Security & Compliance Engineer with a background in IT analysis and network administration.
                            My journey started in federal environments where I learned the importance of robust security frameworks.
                        </p>
                        <p>
                            Today, I focus on automating security workflows, managing cloud identities, and building tools that
                            bridge the gap between complex infrastructure and compliance requirements.
                        </p>
                        <p>
                            I believe that security shouldn't be a blocker, but an enabler of innovation. By leveraging automation
                            and intelligent systems, I help organizations stay secure while moving fast.
                        </p>
                    </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                    {skills.map((skill, index) => (
                        <Card key={index} className="border-slate-800/50 bg-slate-900/20">
                            <CardContent className="p-4 space-y-3">
                                <skill.icon className="h-8 w-8 text-cyan-500" />
                                <h3 className="font-semibold text-slate-200">{skill.category}</h3>
                                <ul className="space-y-1">
                                    {skill.items.map((item) => (
                                        <li key={item} className="text-sm text-slate-400">
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
