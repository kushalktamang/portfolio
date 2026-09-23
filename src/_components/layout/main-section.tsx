import Image from "next/image";
import Stack from "../ui/stack";

const HeroSection = () => {
  return (
    <section className="mt-0 flex flex-col justify-start border-y border-dashed border-border p-3 font-victor-mono sm:mt-7 sm:p-5">
      <div className="mb-5 flex flex-col items-center gap-5 p-2 text-center sm:flex-row sm:justify-center sm:gap-6 sm:p-5">
        <div className="group relative aspect-square w-32 shrink-0 sm:w-42">
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
        <div className="flex min-w-0 flex-col items-center">
          <div className="flex items-center gap-2 pt-1 sm:pt-4">
            <h1 className="ml-1 text-sm font-bold text-rose-pine">Hi, I'm Kushal.</h1>
          </div>
          <div className="font-geist-pixel text-5xl leading-[0.9] text-dark-cyan sm:text-7xl">
            <span className="text-4xl sm:text-6xl">Full-stack</span>
            <br />
            <span>Developer</span>
          </div>
        </div>
      </div>

      <div className="mt-5 flex h-full max-h-125 flex-1 flex-col justify-between gap-5 border-t border-border p-3 text-sm leading-relaxed sm:gap-3 sm:p-5 sm:text-base">
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
