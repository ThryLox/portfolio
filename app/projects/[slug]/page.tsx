import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import { Section } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

interface ProjectPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) {
        return {
            title: "Project Not Found",
        };
    }
    return {
        title: `${project.title} | Ekonkar Singh`,
        description: project.shortDescription,
    };
}

export default function ProjectPage({ params }: ProjectPageProps) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pt-24 pb-12">
            <Section>
                <div className="max-w-4xl mx-auto space-y-12">
                    {/* Header */}
                    <div className="space-y-6">
                        <Link
                            href="/#projects"
                            className="inline-flex items-center text-sm text-slate-400 hover:text-cyan-400 transition-colors"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Projects
                        </Link>
                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-100">
                            {project.title}
                        </h1>
                        <p className="text-xl text-slate-400 leading-relaxed">
                            {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-4">
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="grid md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-8">
                            <div className="space-y-4">
                                <h2 className="text-2xl font-semibold text-slate-200">Overview</h2>
                                <p className="text-slate-400 leading-relaxed">
                                    {project.fullDescription}
                                </p>
                            </div>

                            {project.features && (
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-semibold text-slate-200">Key Features</h2>
                                    <ul className="space-y-3">
                                        {project.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3 text-slate-400">
                                                <CheckCircle2 className="h-5 w-5 text-cyan-500 shrink-0 mt-0.5" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            <div className="p-6 rounded-2xl border border-slate-800 bg-slate-950/50 backdrop-blur-sm">
                                <h3 className="text-lg font-semibold text-slate-200 mb-4">Tech Stack</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack?.map((tech) => (
                                        <span
                                            key={tech}
                                            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-sm font-medium text-slate-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
}
