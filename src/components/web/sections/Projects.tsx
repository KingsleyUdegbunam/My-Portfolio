import { ProjectCard } from "../../ProjectCard";
import { projects } from "@/data/project-data";
import { ProjectCardProps } from "@/types/project";

export default function Projects() {
  let NUMBER = 1;
  const projectsBaseArray: Omit<ProjectCardProps, "number">[] = projects.map(
    (project) => ({
      id: project.id,
      title: project.header.title,
      src: project.heroImage,
      type: project.header.type,
      role: project.header.role,
      year: project.header.year,
      stack: project.header.stack,
      repo: project.repo,
    }),
  );
  const projectsArray = projectsBaseArray.map((project) => ({
    ...project,
    number: NUMBER++,
  }));

  return (
    <section id="works" className="px-4 py-12 md:px-6 lg:px-12">
      <h1 className="text-[4rem] text-black/90 text-center font-koulen pb-12 ">
        PROJECTS
      </h1>

      <div className="flex flex-col max-w-[1800px] mx-auto!">
        {
          <>
            {projectsArray.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </>
        }
      </div>
    </section>
  );
}
