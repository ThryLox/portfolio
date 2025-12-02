import { getPostBySlug, getAllPosts } from "@/lib/content";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin, Clock } from "lucide-react";

export async function generateStaticParams() {
    const posts = getAllPosts("cronjobs");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function CronJobPage({ params }: { params: { slug: string } }) {
    const post = await getPostBySlug(params.slug, "cronjobs");

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
                        <span>cat /etc/cron.d/{post.slug}</span>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold text-foreground">{post.title}</h1>
                        <div className="text-xl text-primary">{post.company}</div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-muted-foreground mt-2">
                        <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 text-accent" />
                            <span>{post.startDate} - {post.endDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-accent" />
                            <span>{post.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4 text-accent" />
                            <span>{post.schedule || "0 9 * * 1-5"}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-black/30 p-4 rounded border border-border mb-8 font-mono text-xs text-muted-foreground">
                    <div className="flex gap-4 border-b border-border/50 pb-2 mb-2">
                        <span># MIN</span>
                        <span>HOUR</span>
                        <span>DOM</span>
                        <span>MON</span>
                        <span>DOW</span>
                        <span>COMMAND</span>
                    </div>
                    <div className="text-foreground">
                        {post.schedule?.replace(/ /g, "\t") || "0\t9\t*\t*\t1-5"}\t/usr/bin/execute_role --company="{post.company}"
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
