import GithubActivity from "@/_components/layout/github-activity";
import Header from "@/_components/ui/header";
import Shell from "@/_components/ui/shell";

const Projects = () => {
  return (
    <div>
      <Header title="Projects" aside={<span>(see all)</span>} />
      <Shell>
        <div className="grid grid-cols-2 sm:grid-cols-5 border-b border-(--line) sm:border-b-0">
          <h1 className="p-5">hey there</h1>
        </div>
        <GithubActivity />
      </Shell>
    </div>
  );
};

export default Projects;
