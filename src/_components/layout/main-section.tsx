import Image from "next/image";
import Stack from "../ui/stack";

const HeroSection = () => {
  return (
    <section className="flex flex-col justify-start p-5 border-y mt-7 border-dashed border-border font-victor-mono">
      <div className="flex items-start gap-6 mb-5 p-5">
        <div className="group relative aspect-square w-42 shrink-0">
          {/* back border: offset, moves on hover */}
          <div className="absolute inset-0 translate-x-2 translate-y-2 border border-border opacity-70 transition duration-700 group-hover:translate-x-4 group-hover:translate-y-4 group-hover:opacity-40" />

          {/* front border: holds the image, stays put */}
          <div className="border-border bg-[#0A0A0A] p-1 absolute top-0 left-0 h-full w-full border">
            <div className="relative size-full overflow-hidden border border-border">
              <Image
                src="/animeProfile.svg"
                alt="kushal"
                width={168}
                height={168}
                loading="lazy"
                className="size-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2 pt-4">
            <h1 className="text-sm text-rose-pine font-bold ml-1">Hi, I'm Kushal.</h1>
          </div>
          <div className="font-geist-pixel text-7xl text-dark-cyan">
            <span className="text-6xl">Full-stack</span>
            <br />
            <span>Developer</span>
          </div>
        </div>
      </div>

      <div className="border-t border-border gap-3 flex flex-col justify-between flex-1 h-full max-h-125 mt-5 p-5">
        <div className="flex flex-col">
          <span>
            My current main stack is <Stack name="Nextjs" /> & <Stack name="Hono" /> with{" "}
            <Stack name="Typescript" /> and <Stack name="Postgres" /> with <Stack name="Drizzle" />{" "}
            ORM for my database.
          </span>
        </div>
        <div className="flex flex-col">
          <span>
            I also use <Stack name="Framer" /> for animations, <Stack name="Vitest" /> for testing
            and for deployment, I use <Stack name="Vercel" /> and <Stack name="Render" />
          </span>
        </div>
        <div className="flex flex-col">
          <span>
            I am currently learning <Stack name="Go" /> and <Stack name="Threejs" />.
          </span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
