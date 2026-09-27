import { motion } from "framer-motion";
import { fadeUp } from "@/_lib/motion";
import Shell from "../ui/shell";
import Header from "../ui/header";

const About = () => {
  return (
    <>
      <Header title="About" />
      <Shell>
        <div className="flex h-full max-h-125 flex-1 flex-col justify-between gap-5 p-3 text-2xl leading-relaxed sm:gap-3 sm:p-5 sm:text-base font-aniamie text-[#63636b]">
          <motion.div
            variants={fadeUp}
            className="flex gap-2 text-[14.5px] leading-relaxed text-muted"
          >
            <span className="text-[#63636b] font-mono">•</span>
            <p>
              My current main stack is Nextjs and Hono with TypeScript and Postgres with Drizzle ORM
              for my database.
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex gap-2 text-[14.5px] leading-relaxed text-muted"
          >
            <span className="text-[#63636b] font-mono">•</span>
            <p>
              I also use Framer for animations, Vitest for testing and for deployment, I use Vercel
              and Render
            </p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex gap-2 text-[14.5px] leading-relaxed text-muted"
          >
            <span className="text-[#63636b] font-mono">•</span>
            <p>I am currently learning Go and Threejs.</p>
          </motion.div>
        </div>
      </Shell>
    </>
  );
};

export default About;
