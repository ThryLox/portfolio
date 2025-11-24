"use client";

import { Section } from "@/app/components/ui/Section";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/components/ui/Card";
import { Button } from "@/app/components/ui/Button";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import Link from "next/link";

export function Projects() {
    return (
        <Section id="projects">
            <div className="space-y-12">
                <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-slate-100">Featured Projects</h2>
                    <p className="text-slate-400 max-w-2xl">
                        A selection of tools and systems I've built to solve real-world security and infrastructure challenges.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <Card key={index} className="flex flex-col">
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                                <CardDescription className="pt-2">{project.shortDescription}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-2.5 py-0.5 text-xs font-semibold text-slate-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="gap-2">
                                <Button variant="outline" size="sm" className="w-full" asChild>
                                    <Link href={`/projects/${project.slug}`}>
                                        More Details
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </Section>
    );
}
