import type { Metadata } from "next";
import { getPostBySlug } from "@/lib/content";
import { site } from "@/lib/site";
import CardView from "./CardView";

const title = "Ekonkar Singh — Digital Card";
const description =
    "Cloud & AI security analyst in Ottawa. Save my contact, or find my portfolio, LinkedIn and GitHub.";

export const metadata: Metadata = {
    title: "Card",
    description,
    alternates: { canonical: "/card" },
    openGraph: { type: "profile", url: `${site.url}/card`, title, description },
    twitter: { card: "summary_large_image", title, description, images: ["/card/opengraph-image"] },
};

export default async function CardPage() {
    const me = await getPostBySlug("whoami", "root");

    return (
        <CardView
            name={me.name}
            role={me.role}
            location={me.location}
            email={me.email}
            siteUrl={site.url}
            linkedin={site.linkedin}
            github={site.github}
        />
    );
}
