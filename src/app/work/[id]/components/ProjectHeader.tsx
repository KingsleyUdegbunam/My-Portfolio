import { ProjectData } from "@/types/project";
import { ProjectMeta } from "./ProjectMeta";

export function ProjectHeader({
  project,
}: {
  project: Pick<ProjectData, "header">;
}) {
  return (
    <header className="px-4 flex flex-col text-black/90">
      <h1 className=" text-center uppercase font-semibold font-koulen text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[100%]! ">
        {project.header.title}
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-[1fr_max-content_1fr] lg:text-center gap-y-2 py-8">
        <ProjectMeta type="type" content={project.header.type} />

        <ProjectMeta type="role" content={project.header.role} />

        <ProjectMeta type="year" content={project.header.year} />
      </div>
    </header>
  );
}
