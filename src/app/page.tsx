"use client";
import { useEffect, useState } from "react";
import Connect from "@/_components/layout/connect";
import HeroSection from "@/_components/layout/hero";
import Navbar from "@/_components/layout/navbar";
import Projects from "@/_components/layout/projects";
import Skills from "@/_components/layout/skills";
import About from "@/_components/layout/about";
import { Preloader } from "@/_components/layout/pre-loader";
import GithubActivity from "@/_components/layout/github-activity";
import ScrollToTop from "@/_components/ui/scroll-to-top";

const Home = () => {
  const [preloaderDone, setPreloaderDone] = useState(false);

  useEffect(() => {
    if (!preloaderDone) return undefined;
    if (document.getElementById("oneko-script") !== null) return undefined;

    const script = document.createElement("script");
    script.id = "oneko-script";
    script.src = "/oneko.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
      document.getElementById("oneko")?.remove();
    };
  }, [preloaderDone]);

  return (
    <>
      <Preloader onComplete={() => setPreloaderDone(true)} />
      <ScrollToTop />
      <Navbar />
      <HeroSection />
      <About />
      <GithubActivity />
      <Projects />
      <Skills />
      <Connect />
    </>
  );
};

export default Home;
