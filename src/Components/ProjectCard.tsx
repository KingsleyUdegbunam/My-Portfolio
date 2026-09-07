import { ProjectCardProp } from "../schemas/home";

export function ProjectCard({
  number,
  projectName,
  year,
  src,
  stacks,
  liveLink,
}: ProjectCardProp) {
  const fileType = src.slice(-3);

  return (
    <div>
      <article className="flex flex-col gap-4 md:flex-row md:justify-between md:gap-6">
        <div className="flex-1 flex flex-col gap-5 md:gap-9 md:sticky md:top-8 h-fit">
          <div className="flex justify-between">
            <p className="md:text-black/60">[{number}]</p>
            <p>{projectName}</p>
          </div>
          <div className="flex flex-col gap-2.5 md:gap-4.5">
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

          <a
            href={liveLink}
            target="_blank"
            className="flex justify-end font-robotoMono transition-all duration-300 hover:text-red-800 group mt-2!"
          >
            <span className="md:opacity-0 transition-all duration-300 group-hover:opacity-100">
              [
            </span>
            Visit Website
            <span className="md:opacity-0 transition-all duration-300 group-hover:opacity-100">
              ]
            </span>
          </a>
        </div>

        <div className="md:flex-[1.1]!">
          <div>
            {fileType === "png" && (
              <img src={src} alt={`Preview of ${projectName}`} />
            )}
            {fileType === "mp4" && (
              <video autoPlay loop muted playsInline preload="none" src={src} />
            )}
          </div>
        </div>
      </article>

      <div className="w-full h-px bg-black opacity-5 my-8! md:my-16!"></div>
    </div>
  );
}
