import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { TechMarquee } from "@/components/TechMarquee";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#020617] text-slate-200 font-sans selection:bg-blue-500/30">
      <Hero />
      <TechMarquee />
      <Skills />
      <Experience />
      <Projects />
      <Footer />
    </main>
  );
}
