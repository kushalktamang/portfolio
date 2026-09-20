function Skills() {
  return (
    <section>
      <h1 className="font-geist-pixel p-3 text-2xl text-dark-cyan border-b border-border">Skills</h1>
      <dl className="grid grid-cols-[max-content_1fr] gap-x-10 gap-y-[1.05rem] items-baseline p-5">
        <dt className="border-x border-border">Languages</dt>
        <dd className="flex gap-2">
          <span>Typescript</span>
          <span>Golang</span>
        </dd>
        <dt>FrontEnd</dt>
        <dd className="flex gap-2">
          <span>Nextjs</span>
          <span>TailwindCSS</span>
        </dd>
        <dt>Backend</dt>
        <dd className="flex gap-2">
          <span>Nodejs</span>
          <span>Bun</span>
          <span>Postgres</span>
          <span>MongoDB</span>
        </dd>
        <dt>Infrastructure</dt>
        <dd className="flex gap-2">
          <span>Docker</span>
          <span>Linux</span>
        </dd>
        <dt>Tools</dt>
        <dd className="flex gap-2">
          <span>Github</span>
          <span>Zed</span>
          <span>Bruno</span>
          <span>Excildraw</span>
          <span>Vscode</span>
          <span>Tabularis</span>
        </dd>
      </dl>
    </section>
  );
}

export default Skills;
