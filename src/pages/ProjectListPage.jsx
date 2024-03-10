import PageHeader from "../components/PageHeader";
import ProjectCard from "../components/ProjectCard";
import Searchsection from "../components/Serchsection";

const ProjectListPage = () => {
  return (
    <div>
      <PageHeader link={false} title="Project List" />
      <Searchsection />
      <div className="container grid grid-cols-4 gap-6 gap-y-10">
        <ProjectCard img="/images/window2.jpeg" text="projectX" />
        <ProjectCard img="/images/window3.jpeg" text="projectX" />
        <ProjectCard img="/images/window4.jpeg" text="projectX" />
        <ProjectCard img="/images/window5.jpeg" text="projectX" />
        <ProjectCard img="/images/window6.jpeg" text="projectX" />
        <ProjectCard img="/images/window2.jpeg" text="projectX" />
        <ProjectCard img="/images/window4.jpeg" text="projectX" />
        <ProjectCard img="/images/window6.jpeg" text="projectX" />
      </div>
    </div>
  );
};

export default ProjectListPage;
