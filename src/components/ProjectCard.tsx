import { ProjectCardProps } from "@/types/project";
import Image from "next/image";
import Link from "next/link";

export function ProjectCard({
  id,
  number,
  title,
  type,
  year,
  src,
  stacks,
}: ProjectCardProps) {
  const fileType = src.slice(-3);

  return (
    <div>
      <article className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-6">
        <div className="flex-1 flex flex-col gap-5 md:gap-9 md:sticky md:top-8 h-fit text-black/90">
          <div className="flex justify-between">
            <p className="md:text-black/60">[{number}]</p>
            <p>{title}</p>
          </div>
          <div className="flex flex-col gap-2.5 md:gap-4.5">
            <div className="flex justify-between">
              <p className="md:text-black/60">Type</p>
              <p>{type}</p>
            </div>

            <div className="flex justify-between">
              <p className="md:text-black/60">Year</p>
              <p>{year}</p>
            </div>

            <div className="flex justify-between">
              <p className="md:text-black/60">Stacks</p>

              <div className="flex flex-col justify-end items-end gap-1">
                {stacks.map((item, index) => (
                  <p key={index} className="text-end">
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end mt-2!">
            <Link
              href={`/work/${id}`}
              className="flex justify-end font-robotoMono transition-all duration-300 hover:text-red-800 w-fit"
            >
              <span className="transition-all duration-300 ">[</span>
              View Project
              <span className="transition-all duration-300 ">]</span>
            </Link>
          </div>
        </div>

        <div className="md:flex-[1.1]!">
          {fileType === "png" && (
            <div className="relative h-[clamp(250px,38vw,550px)] min-[480px]:max-[767px]:h-[50vw]">
              <Image
                className="object-cover size-full"
                src={src}
                alt={`Preview of ${title}`}
                fill
              />
            </div>
          )}
          {fileType === "mp4" && (
            <div className=" w-full! h-full  max-h-137.5 aspect-343/229 overflow-hidden">
              <video
                className="object-cover h-full w-full  scale-105"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
                src={src}
              />
            </div>
          )}
        </div>
      </article>

      <div className="w-full h-px bg-black opacity-5 my-8! md:my-16!"></div>
    </div>
  );
}
