import type { Metadata } from "next";
import { getPostBySlug, getAllPosts } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
    const posts = getAllPosts("cronjobs");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = await getPostBySlug(slug, "cronjobs");
    return {
        title: `${post.title}, ${post.company}`,
        description: post.description,
        alternates: { canonical: `/cronjobs/${slug}` },
    };
}

export default async function CronJobPage({ params }: Props) {
    const { slug } = await params;
    const post = await getPostBySlug(slug, "cronjobs");

    return (
        <article className="max-w-3xl mx-auto py-12">
            <Link href="/#experience" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to experience</span>
            </Link>

            <div className="glass rounded-lg p-8">
                <div className="flex flex-col gap-4 border-b border-border pb-6 mb-6">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>
                        <div className="text-xl text-primary">{post.company}</div>
                    </div>

                    <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{post.startDate} – {post.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{post.location}</span>
                        </div>
                    </div>
                </div>

                <div
                    className="prose prose-invert prose-mono max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
                />
            </div>
        </article>
    );
}
