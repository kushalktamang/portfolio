import { Stack } from "../ui/stack";

function Skills() {
  return (
    <section className="p-5">
      <h1 className="font-geist-pixel p-3 text-2xl text-dark-cyan border-b border-border">
        Skills
      </h1>
      <dl className="grid grid-cols-[max-content_1fr] gap-x-10 gap-y-[1.05rem] items-baseline p-5">
        <dt>Languages</dt>
        <dd className="flex gap-2">
          <span>
            <Stack name="Typescript" />
          </span>
          <span>
            <Stack name="Go" />
          </span>
        </dd>
        <dt>FrontEnd</dt>
        <dd className="flex gap-2">
          <span>
            <Stack name="Nextjs" />
          </span>
          <span>
            <Stack name="Tailwind" />
          </span>
          <span>
            <Stack name="Framer" />
          </span>
        </dd>
        <dt>Backend</dt>
        <dd className="flex gap-2">
          <span>
            <Stack name="Nodejs" />
          </span>
          <span>
            <Stack name="Bun" />
          </span>
        </dd>
        <dt>Database</dt>

        <dd className="flex gap-2">
          <span>
            <Stack name="Postgres" />
          </span>
          <span>
            <Stack name="Mongodb" />
          </span>
        </dd>
        <dt>ORM</dt>
        <dd className="flex gap-2">
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
        <dt>Infrastructure</dt>
        <dd className="flex gap-2">
          <span>
            <Stack name="Docker" />
          </span>
          <span>
            <Stack name="Linux" />
          </span>
        </dd>
        <dt>Tools</dt>
        <dd className="flex gap-2">
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
}

export default Skills;
