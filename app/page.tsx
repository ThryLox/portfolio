import { Navbar } from "@/app/components/layout/Navbar";
import { Footer } from "@/app/components/layout/Footer";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { Projects } from "@/app/components/sections/Projects";
import { Experience } from "@/app/components/sections/Experience";
import { Contact } from "@/app/components/sections/Contact";

import { Particles } from "@/app/components/ui/Particles";

export default function Home() {
  return (
    <>
      <Particles />
      <Navbar />
      <main className="flex flex-col gap-12 sm:gap-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
