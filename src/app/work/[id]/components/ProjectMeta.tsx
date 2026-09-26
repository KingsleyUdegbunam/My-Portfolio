import { ProjectHeader, ProjectMetaProps } from "@/types/project";

export function ProjectMeta<K extends keyof ProjectHeader>({
  type,
  content,
  position = "left",
}: ProjectMetaProps<K>) {
  if (!type || !content) return null;
  return (
    <div
      className={`uppercase md:text-${position ? position : "center"} lg:text-center`}
    >
      <h2 className="text-[.7rem]!">{type}</h2>
      <p className="font-koulen text-[.95rem]! md:text-[1.3rem]!  font-semibold tracking-tight">
        {content}
      </p>
    </div>
  );
}
