"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaX } from "react-icons/fa6";
import { container, fadeUp } from "@/_lib/motion";

const Connect = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className="mb-0 border-y border-dashed border-border p-3 font-victor-mono sm:mb-7 sm:p-5"
    >
      <motion.h1 variants={fadeUp} className="p-3 font-geist-pixel text-2xl text-dark-cyan">
        Connect
      </motion.h1>
      <motion.div variants={fadeUp} className="border-t border-border p-3 text-start sm:p-5">
        <h2 className="text-sm leading-relaxed sm:text-base">
          Reach me at{" "}
          <strong className="break-all text-rose-pine">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=kushalktamang@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 hover:text-dark-cyan"
            >
              kushalktamang@gmail.com
            </a>
          </strong>{" "}
          or connect on social media below.
        </h2>
      </motion.div>

      {/*------------links social---------------*/}
      <div className="flex flex-wrap items-center justify-center border border-border">
        {/*----------------linkedin-------------------------*/}
        <motion.div variants={fadeUp} className="min-w-25 flex-1">
          <a
            href="https://www.linkedin.com/in/kushalktamang/"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center justify-center gap-2 p-2 text-sm sm:p-3"
            target="_blank"
          >
            <span className="flex items-center gap-1 transition-transform duration-200 group-hover:scale-110">
              <FaLinkedinIn className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              LinkedIn
            </span>
          </a>
        </motion.div>
        {/*------------------------x------------------------*/}
        <motion.div variants={fadeUp} className="min-w-25 flex-1">
          <a
            href="https://x.com/kushalktamang"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center justify-center gap-2 p-2 text-sm sm:p-3"
            target="_blank"
          >
            <span className="flex items-center gap-1 transition-transform duration-200 group-hover:scale-110">
              <FaX className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              x.com
            </span>
          </a>
        </motion.div>
        {/*-----------------github----------------*/}
        <motion.div variants={fadeUp} className="min-w-25 flex-1">
          <a
            href="https://github.com/kushalktamang"
            rel="noopener noreferrer"
            className="group flex cursor-pointer items-center justify-center gap-2 p-2 text-sm sm:p-3"
            target="_blank"
          >
            <span className="flex items-center gap-1 transition-transform duration-200 group-hover:scale-110">
              <FaGithub className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6" />
              Github
            </span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Connect;
