"use client";
import { useEffect } from "react";
import Connect from "@/_components/layout/connect";
import HeroSection from "@/_components/layout/hero";
import Navbar from "@/_components/layout/navbar";
import Projects from "@/_components/layout/projects";
import Skills from "@/_components/layout/skills";
import About from "@/_components/layout/about";

const Home = () => {
  useEffect(() => {
    const existing = document.querySelector("#oneko-script");
    if (existing !== null) {
      return undefined;
    }

    const script = document.createElement("script");
    script.id = "oneko-script";
    script.src = "/oneko.js";
    script.async = true;
    document.body.append(script);

    return () => {
      script.remove();
      const neko = document.querySelector("#oneko");
      if (neko !== null) {
        neko.remove();
      }
    };
  }, []);

  return (
    <>
      {/*className="flex min-h-dvh justify-center overflow-x-hidden px-0 sm:px-4 sm:py-7"*/}
      {/*className="flex min-h-dvh w-full max-w-2xl flex-col sm:mx-8 "*/}
      <Navbar />
      <HeroSection />
      <About />
      <Projects />
      <Skills />
      <Connect />
    </>
  );
};

export default Home;
