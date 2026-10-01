import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const posts = getAllPosts("deployments");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug, "deployments");
    return {
        title: post.title,
        description: post.description,
        alternates: { canonical: `/deployments/${slug}` },
    };
}

export default async function DeploymentPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug, "deployments");

    return (
        <article className="max-w-4xl mx-auto py-12">
            <Link href="/#projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to projects</span>
            </Link>

            <div className="glass rounded-lg p-8">
                <div className="flex flex-col md:flex-row justify-between items-start gap-6 border-b border-border pb-6 mb-6">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>

                        <div className="flex flex-wrap gap-2">
                            {post.tags?.map((tag: string) => (
                                <span key={tag} className="font-mono text-xs text-primary/80 bg-primary/10 px-2 py-1 rounded border border-primary/20">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="flex gap-4 shrink-0">
                        {post.link && (
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-4 py-2 rounded transition-colors text-sm"
                            >
                                <Github className="w-4 h-4" />
                                Source
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
                                Live demo
                            </a>
                        )}
                    </div>
                </div>

                {post.image && (
                    <figure className="mb-8">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={post.image}
                            alt={post.imageAlt || `${post.title} overview`}
                            className="w-full h-auto rounded-lg border border-white/10"
                        />
                        {post.imageCaption && (
                            <figcaption className="font-mono text-xs text-muted-foreground mt-2">{post.imageCaption}</figcaption>
                        )}
                    </figure>
                )}

                <div
                    className="prose prose-invert prose-mono max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                />
            </div>
        </article>
    );
}
