/** @type {import('next').NextConfig} */
const nextConfig = {
    // Lets a verification build run alongside "next dev" without sharing its output folder
    distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
