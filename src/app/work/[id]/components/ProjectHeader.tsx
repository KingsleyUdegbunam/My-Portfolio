import { ProjectData } from "@/types/project";

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
        {project.header.type && (
          <div className="uppercase">
            <h2 className="text-[.7rem]!">type</h2>
            <p className="font-koulen text-[.95rem]! md:text-[1.2rem]!  font-semibold tracking-tight">
              {project.header.type}
            </p>
          </div>
        )}

        <div className="uppercase md:text-right lg:text-center">
          <h2 className="text-[.7rem]!">role</h2>
          <p className="font-koulen text-[.95rem]! md:text-[1.2rem]!  font-semibold tracking-tight">
            {project.header.role}
          </p>
        </div>

        {project.header.deliverables && (
          <div className="uppercase ">
            <h2 className="text-[.7rem]!">deliverables</h2>
            <p className="font-koulen text-[.95rem]! md:text-[1.2rem]!  font-semibold tracking-tight">
              {project.header.deliverables}
            </p>
          </div>
        )}
        <div className="uppercase md:text-right lg:text-center">
          <h2 className="text-[.7rem]!">year</h2>
          <p className="font-koulen text-[.95rem]! md:text-[1.2rem]!  font-semibold tracking-tight">
            {project.header.year}
          </p>
        </div>
      </div>
    </header>
  );
}
