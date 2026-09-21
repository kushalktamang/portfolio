function Projects() {
  return (
    <section className="border-b border-border border-dashed font-victor-mono p-5">
      <h1 className="font-geist-pixel p-3 text-2xl text-dark-cyan">Projects</h1>
      {/*  -------project one*/}
      <div className=" border-t border-border text-start p-5 hover:bg-hover">
        <a
          href="https://github.com/kushalktamang/flowstate"
          target="_blank"
          className="flex flex-col cursor"
        >
          <span className="text-xl mb-2">FlowState</span>
          <span className="text-sm text-coral-red">
            CLI agent that helps you write code using any AI Agent.
          </span>
        </a>
      </div>
      {/*------------project two*/}
      <div className=" border-t border-border text-start p-5 hover:bg-hover">
        <a
          href="https://github.com/kushalktamang/flowstate"
          target="_blank"
          className="flex flex-col cursor"
        >
          <span className="text-xl mb-2">Newsletter</span>
          <span className="text-sm text-coral-red">
            full-stack Newsletter using the pub-sub.
          </span>
        </a>
      </div>
      {/*  --------------project three*/}
      <div className=" border-t border-border text-start p-5 hover:bg-hover">
        <a
          href="https://github.com/kushalktamang/flowstate"
          target="_blank"
          className="flex flex-col cursor"
        >
          <span className="text-xl mb-2">Banking Transaction System</span>
          <span className="text-sm text-coral-red">
            A full backend system for bank transactions using typescript.
          </span>
        </a>
      </div>
    </section>
  );
}

export default Projects;
