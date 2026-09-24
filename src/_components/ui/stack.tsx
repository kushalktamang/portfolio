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
  SiJavascript,
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
  Hono: { icon: SiHono, href: "https://hono.dev" },
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
  Typescript: { icon: SiTypescript, href: "https://www.typescriptlang.org" },
  Javascript: { icon: SiJavascript, href: "https://www.typescriptlang.org" },
  Nodejs: { icon: FaNodeJs, href: "https://beta.docs.nodejs.org" },
  Bun: { icon: SiBun, href: "https://bun.com" },
  Tailwind: { icon: SiTailwindcss, href: "https://tailwindcss.com" },
  Docker: { icon: SiDocker, href: "https://www.docker.com" },
  Linux: { icon: SiLinux, href: "" },
  Github: { icon: SiGithub, href: "https://github.com/kushalktamang" },
  Zed: { icon: SiZedindustries, href: "https://zed.dev" },
  Bruno: { icon: SiBruno, href: "https://www.usebruno.com" },
  Neon: { icon: SiNeon, href: "https://neon.com" },
} satisfies Record<string, { icon: IconType; href: string }>;

type StackName = keyof typeof STACK;

const Stack = ({ name }: { name: StackName }) => {
  const { icon: Icon, href } = STACK[name];

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group mt-1.5 inline-flex max-w-full items-center gap-1.5 whitespace-nowrap p-1 text-sm transition-all duration-200 sm:border sm:border-dashed sm:border-border sm:hover:-translate-y-0.5 sm:hover:border-solid sm:hover:bg-muted sm:hover:bg-border motion-reduce:transition-none sm:motion-reduce:hover:translate-y-0 sm:text-base"
    >
      <Icon
        aria-hidden
        className="size-4 transition-transform duration-200 group-hover:scale-110 group-hover:rotate-6"
      />
      {name}
    </a>
  );
};

export default Stack;
