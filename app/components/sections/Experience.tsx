import { Section } from "@/app/components/ui/Section";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "IT Analyst (Security and Compliance)",
        company: "Shared Services Canada",
        period: "2022 - Present",
        description: [
            "Helped develop automated compliance reporting tools for federal cloud environments.",
            "Managed identity and access controls for over 5000+ users across hybrid infrastructure.",
            "Collaborated with cross-functional teams to remediate security vulnerabilities in real-time."
        ],
    },
    {
        role: "Network Specialist",
        company: "Alstom, Thunder Bay",
        period: "2020 - 2022",
        description: [
            "Designed and maintained secure network architectures for industrial control systems.",
            "Implemented network segmentation and firewall policies to protect critical assets.",
            "Conducted regular security audits and penetration testing."
        ],
    },
    {
        role: "Information Systems Administrator",
        company: "McDonald’s",
        period: "2018 - 2020",
        description: [
            "Managed POS systems and back-office infrastructure for high-volume retail locations.",
            "Ensured PCI-DSS compliance and implemented security best practices.",
            "Provided technical support and training to staff members."
        ],
    },
];

export function Experience() {
    return (
        <Section id="experience">
            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-slate-100">Experience</h2>
                    <p className="text-slate-400 max-w-2xl">
                        My professional journey in security, compliance, and infrastructure.
                    </p>
                </div>

                <div className="relative border-l border-slate-800 ml-3 space-y-12">
                    {experiences.map((exp, index) => (
                        <div key={index} className="relative pl-8 sm:pl-12">
                            <div className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-cyan-500 ring-4 ring-slate-950" />

                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                <h3 className="text-xl font-semibold text-slate-200">{exp.role}</h3>
                                <span className="text-sm font-mono text-cyan-400">{exp.period}</span>
                            </div>

                            <div className="flex items-center gap-2 text-slate-400 mb-4">
                                <Briefcase className="h-4 w-4" />
                                <span>{exp.company}</span>
                            </div>

                            <ul className="space-y-2 list-disc list-outside ml-4 text-slate-400">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="pl-1 marker:text-slate-600">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
}
