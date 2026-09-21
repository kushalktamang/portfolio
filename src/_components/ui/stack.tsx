import type { IconType } from "react-icons";
import { FaGolang, FaNodeJs } from "react-icons/fa6";
import { IoLogoVercel } from "react-icons/io5";
import {
  SiBruno,
  SiBun,
  SiDocker,
  SiDrizzle,
  SiExpress,
  SiGithub,
  SiGsap,
  SiHono,
  SiLinux,
  SiMongodb,
  SiMongoose,
  SiNeon,
  SiNextdotjs,
  SiPostgresql,
  SiPrisma,
  SiRender,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVitest,
  SiZedindustries,
} from "react-icons/si";
import { TbBrandFramerMotion, TbBrandThreejs } from "react-icons/tb";

const STACK = {
  Nextjs: { icon: SiNextdotjs, href: "https://nextjs.org" },
  Vite: { icon: SiVite, href: "https://vite.com" },
  Honojs: { icon: SiHono, href: "https://hono.dev" },
  Expressjs: { icon: SiExpress, href: "https://expressjs.com" },
  Postgres: { icon: SiPostgresql, href: "https://www.postgresql.org" },
  Mongodb: { icon: SiMongodb, href: "https://www.mongodb.com" },
  Drizzle: { icon: SiDrizzle, href: "https://orm.drizzle.team" },
  Prisma: { icon: SiPrisma, href: "https://www.prisma.io/orm" },
  Mongoose: { icon: SiMongoose, href: "https://mongoosejs.com" },
  Framer: { icon: TbBrandFramerMotion, href: "https://motion.dev" },
  Vercel: { icon: IoLogoVercel, href: "https://vercel.com" },
  Gsap: { icon: SiGsap, href: "https://gsap.com" },
  Go: { icon: FaGolang, href: "https://go.dev" },
  Threejs: { icon: TbBrandThreejs, href: "https://threejs.org" },
  Render: { icon: SiRender, href: "https://render.com" },
  Vitest: { icon: SiVitest, href: "https://vitest.dev" },
  Typescript: { icon: SiTypescript, href: "https://typescript.com" },
  Nodejs: { icon: FaNodeJs, href: "" },
  Bun: { icon: SiBun, href: "" },
  Tailwind: { icon: SiTailwindcss, href: "" },
  Docker: { icon: SiDocker, href: "" },
  Linux: { icon: SiLinux, href: "" },
  Github: { icon: SiGithub, href: "" },
  Zed: { icon: SiZedindustries, href: "" },
  Bruno: { icon: SiBruno, href: "" },
  Neon: { icon: SiNeon, href: "" },
  
} satisfies Record<string, { icon: IconType; href: string }>;

export type StackName = keyof typeof STACK;

type StackProps = {
  name: StackName;
};

export function Stack({ name }: { name: StackName }) {
  const { icon: Icon, href } = STACK[name];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 border border-border border-dashed p-1 transition-all duration-200 hover:-translate-y-0.5 hover:border-solid hover:bg-muted motion-reduce:transition-none motion-reduce:hover:translate-y-0 hover:bg-border mt-1.5 font-geist-pixel"
    >
      <Icon
        aria-hidden
        className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6"
      />
      {name}
    </a>
  );
}
