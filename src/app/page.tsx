import Connect from "@/_components/layout/connect";
import HeroSection from "@/_components/layout/main-section";
import Navbar from "@/_components/layout/Navbar";
import Projects from "@/_components/layout/projects";
import Skills from "@/_components/layout/skills";

const Home = () => {
  return (
    <>
      {/*className="flex min-h-dvh justify-center overflow-x-hidden px-0 sm:px-4 sm:py-7"*/}
      {/*className="flex min-h-dvh w-full max-w-2xl flex-col sm:mx-8 "*/}
      <Navbar />
      <HeroSection />
      <Projects />
      <Skills />
      <Connect />
    </>
  );
};

export default Home;
