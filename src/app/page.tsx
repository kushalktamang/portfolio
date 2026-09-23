import Connect from "@/_components/layout/connect";
import HeroSection from "@/_components/layout/main-section";
import Projects from "@/_components/layout/projects";
import Skills from "@/_components/layout/skills";

const Home = () => {
  return (
    <main className="flex min-h-dvh justify-center overflow-x-hidden px-0 sm:px-4 sm:py-7">
      <div className="flex min-h-dvh w-full max-w-2xl flex-col border-border sm:mx-8 sm:border-x">
        <HeroSection />
        <Projects />
        <Skills />
        <Connect />
      </div>
    </main>
  );
};

export default Home;
