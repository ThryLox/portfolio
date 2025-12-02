import { getPostBySlug, getAllPosts } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts("deployments");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function DeploymentPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug, "deployments");

    return (
        <article className="font-mono max-w-4xl mx-auto py-12">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>cd ..</span>
            </Link>

            <div className="border border-border bg-card/50 rounded-lg p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-border pb-6 mb-6">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-primary text-sm">
                            <span className="text-accent">$</span>
                            <span>systemctl status {post.slug}.service</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className={`w-3 h-3 rounded-full ${post.status === 'active' ? 'bg-secondary animate-pulse' : 'bg-muted'}`} />
                            <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>
                        </div>

                        <div className="flex flex-wrap gap-2">
                            {post.tags?.map((tag: string) => (
                                <span key={tag} className="text-xs text-primary/80 bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4">
                        {post.link && (
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-4 py-2 rounded transition-colors text-sm"
                            >
                                <Github className="w-4 h-4" />
                                SOURCE
                            </a>
                        )}
                        {post.demo && (
                            <a
                                href={post.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-secondary/10 hover:bg-secondary/20 text-secondary border border-secondary/50 px-4 py-2 rounded transition-colors text-sm"
                            >
                                <ExternalLink className="w-4 h-4" />
                                LIVE DEMO
                            </a>
                        )}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 prose prose-invert prose-mono max-w-none">
                        <div dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }} />
                    </div>

                    <div className="space-y-6 text-sm">
                        <div className="bg-black/30 p-4 rounded border border-border">
                            <h3 className="text-primary font-bold mb-4 border-b border-border pb-2">SERVICE INFO</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Status:</span>
                                    <span className="text-foreground uppercase">{post.status}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Version:</span>
                                    <span className="text-foreground">{post.version}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">Deployed:</span>
                                    <span className="text-foreground">{post.date}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
