import { motion, type Variants } from "framer-motion";
import { EASE, container, fadeUp } from "@/_lib/motion";
import Image from "next/image";
import Shell from "../ui/shell";
import { BiMap } from "react-icons/bi";

const avatar: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

const HeroSection = () => {
  return (
    <Shell>
      <motion.section
        variants={container}
        initial="hidden"
        animate="show"
        className="flex flex-col justify-start p-3 font-victor-mono sm:p-5"
      >
        <div className="relative h-36 overflow-hidden rounded-xl bg-neutral-950 sm:h-44 border border-line hidden sm:block">
          <Image
            src="/arch.png"
            alt="kushal"
            fill
            priority
            sizes="(max-width: 640px) 100vw, 500px"
            decoding="async"
            className="object-cover object-[center_50%] opacity-65 grayscale"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
          <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(0deg,rgba(255,255,255,0.05)_0,rgba(255,255,255,0.05)_1px,transparent_1px,transparent_5px)]" />
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(0,0,0,0.12)_0,rgba(0,0,0,0.12)_1px,transparent_1px,transparent_28px)] opacity-30" />
        </div>
        <div className="flex flex-col items-center gap-5 p-2 text-center sm:flex-row sm:justify-center sm:gap-6 sm:p-5">
          <motion.div
            variants={avatar}
            className="group relative aspect-square w-32 shrink-0 sm:w-20"
          >
            <div className="absolute inset-0 translate-x-1 translate-y-1 border border-border opacity-70 transition duration-700 group-hover:translate-x-2 group-hover:translate-y-2 group-hover:opacity-40" />

            <div className="border-border bg-[#0A0A0A] p-1 absolute top-0 left-0 h-full w-full border">
              <div className="relative size-full overflow-hidden border border-border">
                <Image
                  src="/animeProfile.svg"
                  alt="kushal"
                  width={50}
                  height={50}
                  priority
                  className="size-full object-cover object-top"
                />

                {/* CRT scanline overlay */}
                <div className="absolute inset-0 pointer-events-none rounded-xl overflow-hidden opacity-[0.18] group-hover:opacity-30 transition-opacity bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-size-[100%_4px]">
                  <div className="absolute inset-0 h-1 bg-white/20 blur-[1px] animate-scanline" />
                </div>
              </div>
            </div>
          </motion.div>

          <div className="flex min-w-0 flex-col items-start">
            <motion.div variants={fadeUp} className="flex items-center gap-2 pt-1 sm:pt-4">
              <h1
                data-text="Kushal Tamang"
                className="text-3xl sm:text-[38px] leading-none tracking-tight text-foreground text-glitch font-instrument-serif"
              >
                Kushal Tamang
              </h1>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="font-instrument-serif text-foreground text-xl leading-[0.9] sm:text-7xl flex justify-start items-start gap-2 text-glitch"
            >
              <span className="text-xl">Full-stack</span>
              <span className="text-xl">Developer</span>
            </motion.div>
            <motion.div
              variants={fadeUp}
              className="text-neutral-500 text-xs flex items-center font-instrument-serif"
            >
              <span className="text-sm">
                <BiMap />
              </span>
              <span className="text-sm">Pokhara, Nepal</span>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </Shell>
  );
};

export default HeroSection;
