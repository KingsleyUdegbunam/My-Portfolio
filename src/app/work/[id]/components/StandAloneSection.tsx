import { SectionContent } from "@/types/project";

export function StandAloneSection({
  section,
}: {
  section: SectionContent | undefined;
}) {
  if (!section) return;
  return (
    <div
      style={{ backgroundColor: `var(--color-${section?.bgColor})` }}
      className="flex flex-col gap-3 h-[75vh] max-h-112.5 md:max-h-137.5 lg:max-h-237.5 text-center justify-center  px-8  max-h-225 w-full"
    >
      <h2 className="text-[0.85rem] text-black/50 uppercase">{section.id}</h2>

      <div className="flex flex-col gap-6 max-w-200 mx-auto text-[14px]!">
        {section.header && (
          <p className="text-[2rem]! md:text-[3rem]! font-normal font-koulen! leading-[100%]">
            {section.header}
          </p>
        )}
        <p>{section.p1}</p>
        <p>{section.p2}</p>
      </div>
    </div>
  );
}
