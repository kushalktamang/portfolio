import Stack from "../ui/stack";

const Skills = () => {
  return (
    <section className="p-3 sm:p-5">
      <h1 className="border-b border-border p-3 font-geist-pixel text-2xl text-dark-cyan">
        Skills
      </h1>
      <dl className="grid grid-cols-1 items-baseline gap-y-4 p-3 sm:grid-cols-[max-content_1fr] sm:gap-x-10 sm:gap-y-[1.05rem] sm:p-5">
        <dt className="text-rose-pine border-b border-border sm:border-none">Languages</dt>
        <dd className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Javascript" />
          </span>
          <span>
            <Stack name="Typescript" />
          </span>
          <span>
            <Stack name="Go" />
          </span>
        </dd>
        <dt className="text-rose-pine border-b border-border sm:border-none">FrontEnd</dt>
        <dd className="flex min-w-0 flex-wrap gap-1.5">
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
        </dd>
        <dt className="text-rose-pine border-b border-border sm:border-none">Backend</dt>
        <dd className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Nodejs" />
          </span>
          <span>
            <Stack name="Bun" />
          </span>
          <span>
            <Stack name="Hono" />
          </span>
        </dd>
        <dt className="text-rose-pine border-b border-border sm:border-none">Database</dt>

        <dd className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Postgres" />
          </span>
          <span>
            <Stack name="Mongodb" />
          </span>
        </dd>
        <dt className="text-rose-pine border-b  border-border sm:border-none">ORM</dt>
        <dd className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Drizzle" />
          </span>
          <span>
            <Stack name="Prisma" />
          </span>
          <span>
            <Stack name="Mongoose" />
          </span>
        </dd>
        <dt className="text-rose-pine border-b border-border sm:border-none">Infrastructure</dt>
        <dd className="flex min-w-0 flex-wrap gap-1.5">
          <span>
            <Stack name="Docker" />
          </span>
          <span>
            <Stack name="Linux" />
          </span>
        </dd>
        <dt className="text-rose-pine border-b border-border sm:border-none">Tools</dt>
        <dd className="flex min-w-0 flex-wrap gap-1.5">
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
        </dd>
      </dl>
    </section>
  );
};

export default Skills;
