"use client";

import { Button } from "@/app/components/ui/Button";
import { Section } from "@/app/components/ui/Section";
import { ArrowRight, Download } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
    return (
        <Section className="min-h-[90vh] flex flex-col justify-center pt-32">
            <div className="space-y-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2 text-cyan-400 font-medium tracking-wide uppercase text-sm"
                >
                    <span className="h-px w-8 bg-cyan-400"></span>
                    Cybersecurity Specialist
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl sm:text-7xl font-bold tracking-tight text-slate-50"
                >
                    Building resilient <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                        cloud ecosystems.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed"
                >
                    I design and build security tooling that makes complex cloud and identity ecosystems observable, compliant, and resilient.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4 pt-4"
                >
                    <Button size="lg" className="group" asChild>
                        <a href="#projects">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild>
                        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                            Download CV
                            <Download className="ml-2 h-4 w-4" />
                        </a>
                    </Button>
                </motion.div>
            </div>
        </Section>
    );
}
