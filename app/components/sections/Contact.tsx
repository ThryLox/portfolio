import { Section } from "@/app/components/ui/Section";
import { Button } from "@/app/components/ui/Button";
import { Mail, Linkedin, Github } from "lucide-react";

export function Contact() {
    return (
        <Section id="contact" className="py-24 sm:py-32">
            <div className="max-w-3xl mx-auto text-center space-y-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-100">
                    Let's work together.
                </h2>
                <p className="text-lg text-slate-400">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="w-full sm:w-auto" asChild>
                        <a href="mailto:ekonkar.singh.s@gmail.com">
                            <Mail className="mr-2 h-4 w-4" />
                            Say Hello
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                        <a href="https://www.linkedin.com/in/esingh-1/" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="mr-2 h-4 w-4" />
                            Connect on LinkedIn
                        </a>
                    </Button>
                </div>
            </div>
        </Section>
    );
}
