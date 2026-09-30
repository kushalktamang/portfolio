import Header from "@/_components/ui/header";
import Shell from "@/_components/ui/shell";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { GiBearHead } from "react-icons/gi";
import {
  SiBruno,
  SiBun,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiGit,
  SiGithub,
  SiGo,
  SiGsap,
  SiHono,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiNeon,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRedis,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiZedindustries,
} from "react-icons/si";

type Tech = {
  name: string;
  icon: IconType;
  color: string;
};

const TECHS: readonly Tech[] = [
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Typescript", icon: SiTypescript, color: "#3178C6" },
  { name: "Golang", icon: SiGo, color: "#3178C6" },
  { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
  { name: "Bun", icon: SiBun, color: "#FBF0DF" },
  { name: "React.js", icon: FaReact, color: "#61DAFB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
  { name: "Hono", icon: SiHono, color: "#E36002" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4F7FBF" },
  { name: "Drizzle", icon: SiDrizzle, color: "#C5F74F" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Mongoose", icon: SiMongoose, color: "#B5312B" },
  { name: "Prisma", icon: SiPrisma, color: "#5A67D8" },
  { name: "Git", icon: SiGit, color: "#ed4e1d" },
  { name: "GitHub", icon: SiGithub, color: "#FFFFFF" },
  { name: "Vite", icon: SiVite, color: "#646CFF" },
  { name: "Vitest", icon: SiVitest, color: "#6E9F18" },
  { name: "Zustand", icon: GiBearHead, color: "#8B6B4A" },
  { name: "Redis", icon: SiRedis, color: "#FF4438" },
  { name: "GSAP", icon: SiGsap, color: "#88CE02" },
  { name: "Neon", icon: SiNeon, color: "#00E599" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "Render", icon: SiRender, color: "#46E3B7" },
  { name: "Linux", icon: SiLinux, color: "#FCC624" },
  { name: "Bruno", icon: SiBruno, color: "#F4AA41" },
  { name: "Zed", icon: SiZedindustries, color: "#4F7FFF" },
];

// Must match the `grid-cols-5` class below (Tailwind needs the literal class).
const COLS = 5;

function Plus({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 h-3 w-3 bg-background before:absolute before:left-0 before:top-1/2 before:h-px before:w-full before:bg-border after:absolute after:left-1/2 after:top-0 after:h-full after:w-px after:bg-border ${className}`}
    />
  );
}

const SkillsPage = () => {
  const rows = Math.ceil(TECHS.length / COLS);

  return (
    <section>
      <Header title="these are all the tech stack that I have used in any of my project." />
      <Shell>
        <ul className="grid w-full grid-cols-5">
          {TECHS.map(({ name, icon: Icon, color }, i) => {
            const col = i % COLS;
            const row = Math.floor(i / COLS);
            const isLastCol = col === COLS - 1 || i === TECHS.length - 1;
            const isLastRow = row === rows - 1;

            return (
              <li
                key={name}
                tabIndex={0}
                className="group relative flex h-25 flex-col items-center justify-center gap-3 border border-dashed border-border focus-visible:outline-none"
              >
                {/* Glow: tech color blooming behind the label (large screens) */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 hidden overflow-hidden lg:block"
                >
                  <span
                    style={{ backgroundColor: color }}
                    className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0 blur-2xl transition-opacity duration-500 ease-out motion-reduce:transition-none lg:group-hover:opacity-80 lg:group-focus-visible:opacity-80"
                  />
                </span>

                <Icon
                  size={44}
                  color={color}
                  aria-hidden
                  className="transition-all duration-300 ease-out motion-reduce:transition-none lg:group-hover:scale-75 lg:group-hover:opacity-0 lg:group-focus-visible:scale-75 lg:group-focus-visible:opacity-0"
                />

                {/* Mobile: plain label. Large screens: glass pill, centered, shown on hover */}
                <span className="text-xs text-neutral-400 transition-all duration-300 ease-out motion-reduce:transition-none lg:pointer-events-none lg:absolute lg:inset-0 lg:flex lg:translate-y-2 lg:items-center lg:justify-center lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:opacity-100">
                  <span className="lg:rounded lg:border lg:border-border lg:bg-black/50 lg:px-1.5 lg:py-1.5 lg:text-md lg:font-medium lg:text-white lg:shadow-lg lg:backdrop-blur-md">
                    {name}
                  </span>
                </span>

                <Plus className="-left-2 -top-2" />
                {isLastCol && <Plus className="-right-2 -top-2" />}
                {isLastRow && <Plus className="-bottom-2 -left-2" />}
                {isLastCol && isLastRow && (
                  <Plus className="-bottom-2 -right-2" />
                )}
              </li>
            );
          })}
        </ul>
      </Shell>
      <Link href="/" aria-label="Go back home">
        <Header title="Go back" />
      </Link>
    </section>
  );
};

export default SkillsPage;
