"use client";

import { ReactNode } from "react";
import { FadeInSection } from "../ui/FadeInSection";

interface AnimatedSectionsProps {
    children: ReactNode[];
}

export const AnimatedSections = ({ children }: AnimatedSectionsProps) => {
    return (
        <div className="space-y-8 pb-20">
            {children.map((child, index) => (
                <FadeInSection key={index} delay={index * 50}>
                    {child}
                </FadeInSection>
            ))}
        </div>
    );
};
