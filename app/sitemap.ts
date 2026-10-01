import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
    const projects = getAllPosts("deployments").map((post) => ({
        url: `${site.url}/deployments/${post.slug}`,
        lastModified: post.date,
    }));
    const roles = getAllPosts("cronjobs").map((post) => ({
        url: `${site.url}/cronjobs/${post.slug}`,
    }));

    return [{ url: site.url }, { url: `${site.url}/resume` }, ...projects, ...roles];
}
