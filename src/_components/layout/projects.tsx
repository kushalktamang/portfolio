"use client";

import { container, fadeUp } from "@/_lib/motion";
import { motion } from "framer-motion";
import Header from "../ui/header";
import Shell from "../ui/shell";

const Projects = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="font-arimo"
    >
      <motion.h1 variants={fadeUp}>
        <Header title="Projects" />
      </motion.h1>

      <Shell>
        {/*  -------project one*/}
        <motion.div
          variants={fadeUp}
          className="text-start transition-colors duration-300 hover:bg-hover p-5 sm:p-5"
        >
          <a
            href="https://github.com/kushalktamang/flowstate"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-w-0 cursor-pointer flex-col"
          >
            <span className="mb-2 text-xl">FlowState</span>
            <span className="wrap-break-word text-sm text-coral-red">
              CLI agent that helps you write code using any AI Agent.
            </span>
          </a>
        </motion.div>
      </Shell>
    </motion.section>
  );
};

export default Projects;
