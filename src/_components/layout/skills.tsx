"use client";

import { motion } from "framer-motion";
import { containerDense, fadeUp } from "@/_lib/motion";
import Stack from "../ui/stack";

const Skills = () => {
  return (
    <motion.section
      variants={containerDense}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      className="p-3 sm:p-5"
    >
      <motion.h1
        variants={fadeUp}
        className="border-b border-border p-3 font-geist-pixel text-2xl text-dark-cyan"
      >
        Skills
      </motion.h1>
      <dl className="grid grid-cols-1 items-baseline gap-y-4 p-3 sm:grid-cols-[max-content_1fr] sm:gap-x-10 sm:gap-y-[1.05rem] sm:p-5">
        <motion.dt
          variants={fadeUp}
          className="text-rose-pine border-b border-border sm:border-none"
        >
          Languages
        </motion.dt>
        <motion.dd variants={fadeUp} className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Javascript" />
          </span>
          <span>
            <Stack name="Typescript" />
          </span>
          <span>
            <Stack name="Go" />
          </span>
        </motion.dd>

        <motion.dt
          variants={fadeUp}
          className="text-rose-pine border-b border-border sm:border-none"
        >
          FrontEnd
        </motion.dt>
        <motion.dd variants={fadeUp} className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Nextjs" />
          </span>
          <span>
            <Stack name="Vite" />
          </span>
          <span>
            <Stack name="Tailwind" />
          </span>
          <span>
            <Stack name="Framer" />
          </span>
        </motion.dd>

        <motion.dt
          variants={fadeUp}
          className="text-rose-pine border-b border-border sm:border-none"
        >
          Backend
        </motion.dt>
        <motion.dd variants={fadeUp} className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Nodejs" />
          </span>
          <span>
            <Stack name="Bun" />
          </span>
          <span>
            <Stack name="Hono" />
          </span>
        </motion.dd>

        <motion.dt
          variants={fadeUp}
          className="text-rose-pine border-b border-border sm:border-none"
        >
          Database
        </motion.dt>
        <motion.dd variants={fadeUp} className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Postgres" />
          </span>
          <span>
            <Stack name="Mongodb" />
          </span>
        </motion.dd>

        <motion.dt
          variants={fadeUp}
          className="text-rose-pine border-b border-border sm:border-none"
        >
          ORM
        </motion.dt>
        <motion.dd variants={fadeUp} className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Drizzle" />
          </span>
          <span>
            <Stack name="Prisma" />
          </span>
          <span>
            <Stack name="Mongoose" />
          </span>
        </motion.dd>

        <motion.dt
          variants={fadeUp}
          className="text-rose-pine border-b border-border sm:border-none"
        >
          Infrastructure
        </motion.dt>
        <motion.dd variants={fadeUp} className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Docker" />
          </span>
          <span>
            <Stack name="Linux" />
          </span>
        </motion.dd>

        <motion.dt
          variants={fadeUp}
          className="text-rose-pine border-b border-border sm:border-none"
        >
          Tools
        </motion.dt>
        <motion.dd variants={fadeUp} className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Github" />
          </span>
          <span>
            <Stack name="Zed" />
          </span>
          <span>
            <Stack name="Bruno" />
          </span>
          <span>
            <Stack name="Neon" />
          </span>
        </motion.dd>
      </dl>
    </motion.section>
  );
};

export default Skills;
