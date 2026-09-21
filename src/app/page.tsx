import Connect from "@/_components/layout/connect";
import HeroSection from "@/_components/layout/main-section";
import Projects from "@/_components/layout/projects";
import Skills from "@/_components/layout/skills";

export default function Home() {
  return (
    <main className="min-h-dvh flex justify-center my-7">
      <div className="max-w-2xl w-full sm:border-x border-border sm:mx-8 flex flex-col min-h-dvh">
        <HeroSection />
        <Projects />
        <Skills />
        <Connect />
      </div>
    </main>
  );
}
