const Projects = () => {
  return (
    <section className="border-b border-dashed border-border p-3 font-victor-mono sm:p-5">
      <h1 className="p-3 font-geist-pixel text-2xl text-dark-cyan">Projects</h1>
      {/*  -------project one*/}
      <div className="border-t border-border p-3 text-start hover:bg-hover sm:p-5">
        <a
          href="https://github.com/kushalktamang/flowstate"
          target="_blank"
          rel="noopener noreferrer"
          className="flex min-w-0 cursor flex-col"
        >
          <span className="mb-2 text-xl">FlowState</span>
          <span className="wrap-break-word text-sm text-coral-red">
            CLI agent that helps you write code using any AI Agent.
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
