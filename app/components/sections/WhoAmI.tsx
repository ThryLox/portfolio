import { PostData } from "@/lib/content";
import { TypewriterText } from "../ui/TypewriterText";

interface WhoAmIProps {
    data: PostData;
}

export const WhoAmI = ({ data }: WhoAmIProps) => {
    return (
        <section id="whoami" className="py-12 font-mono">
            <div className="flex items-center gap-2 mb-6 text-primary">
                <span className="text-accent">$</span>
                <h2 className="text-xl font-bold">
                    <TypewriterText text="whoami" delay={2000} />
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-card/50 border border-border p-6 rounded-lg relative overflow-hidden group">
                {/* Decorative background element */}
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                    <pre className="text-[0.6rem] leading-[0.6rem] text-primary">
                        {`
   .d8888b.  
  d88P  Y88b 
  888    888 
  888    888 
  888    888 
  888    888 
  Y88b  d88P 
   "Y8888P"  
`}
                    </pre>
                </div>

                <div className="space-y-4 text-sm">
                    <div className="flex gap-4">
                        <span className="text-primary min-w-[100px]">user:</span>
                        <span className="text-foreground">
                            <TypewriterText text="ekonkar" delay={2500} cursor={false} />
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-primary min-w-[100px]">role:</span>
                        <span className="text-foreground">
                            <TypewriterText text={data.role} delay={2800} cursor={false} />
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-primary min-w-[100px]">os:</span>
                        <span className="text-foreground">
                            <TypewriterText text={data.os} delay={3100} cursor={false} />
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-primary min-w-[100px]">uptime:</span>
                        <span className="text-foreground">
                            <TypewriterText text={data.uptime} delay={3400} cursor={false} />
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-primary min-w-[100px]">shell:</span>
                        <span className="text-foreground">
                            <TypewriterText text={data.shell} delay={3700} cursor={false} />
                        </span>
                    </div>
                    <div className="flex gap-4">
                        <span className="text-primary min-w-[100px]">location:</span>
                        <span className="text-foreground">
                            <TypewriterText text={data.location} delay={4000} cursor={false} />
                        </span>
                    </div>
                </div>

                <div className="text-muted-foreground text-sm leading-relaxed border-t md:border-t-0 md:border-l border-border pt-6 md:pt-0 md:pl-6">
                    <div dangerouslySetInnerHTML={{ __html: data.contentHtml || "" }} />
                </div>
            </div>
        </section>
    );
};

