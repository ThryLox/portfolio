import { getPostBySlug, getAllPosts } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts("logs");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function LogPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug, "logs");

    return (
        <article className="font-mono max-w-3xl mx-auto py-12">
            <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8 transition-colors">
                <ArrowLeft className="w-4 h-4" />
                <span>cd ..</span>
            </Link>

            <div className="border border-border bg-card/50 rounded-lg p-8">
                <div className="flex flex-col gap-4 border-b border-border pb-6 mb-6">
                    <div className="flex items-center gap-2 text-primary text-sm">
                        <span className="text-accent">$</span>
                        <span>cat /var/logs/{post.slug}.log</span>
                    </div>

                    <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>

                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span>TIMESTAMP: {post.date}</span>
                        <span className={post.severity === 'CRITICAL' ? 'text-destructive' : 'text-accent'}>
                            SEVERITY: {post.severity}
                        </span>
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
