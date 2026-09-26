import { ProjectData } from "@/types/project";

export function ProjectLinks({ project }: { project: ProjectData }) {
  return (
    <div className="flex items-center justify-center py-20 lg:py-40 gap-6">
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={project.repo}
        className="flex justify-center min-w-32 py-3 bg-black/80 text-white/80 transition-all duration-300 hover:bg-blue-200 hover:text-black/80  text-[12px]!"
      >
        View Repo
      </a>
      {project?.liveLink && (
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.liveLink}
          className="flex justify-center text-black/80 min-w-32 py-3 text-[12px]! border border-black/20 transition-all duration-300 hover:bg-blue-200 hover:border-blue-200"
        >
          Visit Website
        </a>
      )}
    </div>
  );
}
