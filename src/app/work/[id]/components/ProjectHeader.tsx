import { ProjectData } from "@/types/project";
import { ProjectMeta } from "./ProjectMeta";

export function ProjectHeader({
  project,
}: {
  project: Pick<ProjectData, "header">;
}) {
  return (
    <header className="px-4 flex flex-col">
      <h1 className=" text-center uppercase font-semibold font-koulen text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[100%]!">
        {project.header.title}
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 justify-center align-center lg:text-center gap-2 py-8">
        <ProjectMeta type="type" content={project.header.type} />

        <ProjectMeta
          type="role"
          content={project.header.role}
          position="right"
        />

        <ProjectMeta
          type="deliverables"
          content={project.header.deliverables}
        />

        <ProjectMeta
          type="year"
          content={project.header.year}
          position="right"
        />
      </div>
    </header>
  );
}
