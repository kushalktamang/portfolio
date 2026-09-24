"use client";

import { container, fadeUp } from "@/_lib/motion";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <motion.section
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="border-b border-dashed border-border p-3 font-victor-mono sm:p-5"
    >
      <motion.h1 variants={fadeUp} className="p-3 font-geist-pixel text-2xl text-dark-cyan">
        Projects
      </motion.h1>

      {/*  -------project one*/}
      <motion.div
        variants={fadeUp}
        className="border-t border-border p-3 text-start transition-colors duration-300 hover:bg-border sm:p-5"
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
    </motion.section>
  );
};

export default Projects;
