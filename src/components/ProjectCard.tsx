import { ProjectCardProps } from "@/types/project";
import Image from "next/image";
import Link from "next/link";
import { HeroVideo } from "./web/HeroVideo";
import { ArrowIcon } from "./ArrowIcon";

export function ProjectCard({
  id,
  number,
  title,
  role,
  type,
  year,
  src,
  repo,
  stack,
}: ProjectCardProps) {
  const fileType = src.slice(-3);

  return (
    <div>
      <article className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-6">
        <div className="flex-1 flex flex-col gap-5 md:gap-9 md:sticky md:top-8 h-fit text-black/90">
          <div className="flex flex-col gap-2.5 md:gap-4.5">
            <div className="flex justify-between">
              <p className="md:text-black/60">[{number}]</p>
              <div className="flex flex-col items-end">
                <p>{title}</p>
                <p>{year}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="md:text-black/60">Role</p>
            <p>{role}</p>
          </div>
          <div className="flex flex-col gap-2.5 md:gap-4.5">
            <div className="flex justify-between">
              <p className="md:text-black/60">Type</p>
              <p>{type}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <p className="md:text-black/60">Stack</p>

            <div className="flex flex-col justify-end items-end gap-1">
              {stack.map((item, index) => (
                <p key={index} className="text-end">
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="flex justify-end flex-col gap-4 items-end mt-2!">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href={repo}
              className="flex gap-2 justify-end items-end text-end font-robotoMono transition-all duration-300 hover:text-blue-600 w-fit group"
            >
              Repository <ArrowIcon />{" "}
            </a>
          </div>

          {id === "flaretag" ? null : (
            <div className="flex justify-end flex-col gap-4 items-end mt-2!">
              <Link
                href={`/work/${id}`}
                className="flex justify-end font-robotoMono transition-all duration-300 hover:text-blue-600 w-fit"
              >
                <span className="transition-all duration-300 ">[</span>
                View Project
                <span className="transition-all duration-300 ">]</span>
              </Link>
            </div>
          )}
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
              <HeroVideo src={src} scale />
            </div>
          )}
        </div>
      </article>

      <div className="w-full h-px bg-black opacity-5 mt-20! mb-8 md:my-16!"></div>
    </div>
  );
}
