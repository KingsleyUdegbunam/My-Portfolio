import { projects } from "@/data/project-data";
import Link from "next/link";

export function NextProject({ index }: { index: number }) {
  const nextIndex = index + 1;
  const validNextIndex = projects[nextIndex]?.id ? nextIndex : 0;
  return (
    <div className="flex flex-col justify-center items-center gap-10 mb-20 lg:mb-40">
      <div className="flex flex-col items-center gap-3">
        <h2 className="text-[0.85rem] text-black/50 uppercase">Next Project</h2>

        <h3 className="text-center uppercase font-semibold font-koulen text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[100%]! text-black/90">
          {projects[validNextIndex].id}
        </h3>
      </div>
      <Link
        href={`/work/${projects[validNextIndex].id}`}
        className="w-[clamp(250px,50vw,600px)] h-50 md:h-87.5 lg:h-100 mx-auto bg-mist-200 group cursor-pointer"
      >
        <video
          className="object-cover h-full w-full group-hover:scale-105 transition-transform duration-300"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          src={projects[validNextIndex].heroImage}
        />
      </Link>
    </div>
  );
}
