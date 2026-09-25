import Image from "next/image";
import { Article } from "@/types/project";

export function ProjectArticle({ section }: { section: Article | undefined }) {
  if (!section) return;
  return (
    <article className="grid grid-cols-1 gap-5">
      <div className="flex flex-col justify-center gap-3 text-center px-4">
        <h2 className="text-[0.85em] text-black/50 uppercase ">{section.id}</h2>
        <div className="flex flex-col gap-6">
          <p className="max-w-200 mx-auto">{section.p1}</p>
          {section?.p2 && <p className="max-w-200 mx-auto">{section.p2}</p>}
        </div>
      </div>

      {section.image && (
        <div className="h-87.5  md:h-125 lg:h-200 w-full relative overflow-hidden">
          <Image
            alt=""
            fill
            src={section.image}
            className="object-contain min-[480px]:scale-[1.2] md:scale-[1.1] lg:scale-100"
          />
        </div>
      )}
    </article>
  );
}
