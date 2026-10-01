import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientLayout from "./components/ClientLayout";
import { getAllPosts, getPostBySlug } from "@/lib/content";
import { site } from "@/lib/site";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: site.url,
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
  icons: {
    icon: "/logo.png?v=1",
  },
};

// Runs before first paint so returning visitors (and reduced-motion users) never see the boot overlay.
const bootScript = `try{if(localStorage.getItem('booted')||matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('booted')}catch(e){}`;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const whoAmI = await getPostBySlug("whoami", "root");
  const projects = getAllPosts("deployments").map((post) => ({
    slug: post.slug,
    title: post.title as string,
  }));

  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: bootScript }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased selection:bg-primary/30 selection:text-primary overflow-x-hidden">
        <ClientLayout projects={projects} email={whoAmI.email}>{children}</ClientLayout>
      </body>
    </html>
  );
}
