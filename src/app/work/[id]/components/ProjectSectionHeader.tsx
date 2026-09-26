import { SectionContent } from "@/types/project";

export default function ProjectSectionHeader({
  section,
}: {
  section: SectionContent;
}) {
  if (!section) return;
  return (
    <h2 className="text-[2rem]! md:text-[3rem]! text-center font-koulen font-semibold capitalize leading-[100%] text-black/90">
      {section.id}
    </h2>
  );
}
