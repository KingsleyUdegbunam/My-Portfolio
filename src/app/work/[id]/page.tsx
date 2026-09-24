import { projects } from "@/data/project-data";
import { ProjectHeader } from "./components/ProjectHeader";
import { ProjectArticle } from "./components/ProjectArticle";
import Link from "next/link";
import { StandAloneSection } from "./components/StandAloneSection";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Params) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);
  if (!project) return;
  const index = projects.indexOf(project);
  const nextIndex = index + 1;
  const validNextIndex = projects[nextIndex]?.id ? nextIndex : 0;
  const section = project.sections;

  return (
    <div className="max-w-[2500px] mx-auto!">
      <ProjectHeader project={project} />

      <div className="max-h-dvh overflow-hidden">
        <video
          className="object-cover h-full w-full object-top aspect-video"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          src={project.heroImage}
        />
      </div>

      <StandAloneSection section={section.overview} />

      {section.challenge && <StandAloneSection section={section.challenge} />}

      {section.direction && <StandAloneSection section={section.direction} />}

      <div className="py-20">
        {section.experience && (
          <h2 className="text-[2rem]! md:text-[3rem]! text-center font-koulen leading-[100%] font-semibold">
            {section.experience.id}
          </h2>
        )}
        <div className="flex flex-col gap-15 md:gap-25 mt-20">
          <ProjectArticle section={section.experience?.article1} />
          <ProjectArticle section={section.experience?.article2} />
          <ProjectArticle section={section.experience?.article3} />
          <ProjectArticle section={section.experience?.article4} />
        </div>
      </div>

      {/* The Engineering */}
      <div>
        <h2 className="text-[2rem]! md:text-[3rem]! text-center font-koulen font-semibold leading-[100%]">
          {section.engineering?.id}
        </h2>

        <div className="flex flex-col gap-[60px] md:gap-[100px] mt-[80px]">
          <ProjectArticle section={section.engineering?.article1} />
          <ProjectArticle section={section.engineering?.article2} />

          <ProjectArticle section={section.engineering?.article3} />

          <ProjectArticle section={section.engineering?.article4} />

          {section.engineering?.article5 && (
            <div className="flex flex-col gap-3 h-[70vh] max-h-[350px] md:max-h-[400px] lg:max-h-[700px] text-center justify-center px-8  max-h-225">
              <h2 className="text-[0.85rem] text-black/50 uppercase ">
                {section.engineering?.article5?.id}
              </h2>
              <div className="flex flex-col gap-6 max-w-200 mx-auto text-[14px]!">
                <p>{section.engineering?.article5?.p1}</p>
                <p>{section.engineering?.article5?.p2}</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <StandAloneSection section={section?.constraints} />

      <StandAloneSection section={section.reflection} />

      <div className="flex items-center justify-center py-20 lg:py-40 gap-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.repo}
          className="flex justify-center min-w-[8rem] py-3 bg-black/80 text-white/80 transition-all duration-300 hover:bg-blue-200 hover:text-black/80  text-[12px]!"
        >
          View Repo
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.liveLink}
          className="flex justify-center text-black/80 min-w-[8rem] py-3 text-[12px]! border border-black/20 transition-all duration-300 hover:bg-blue-200 hover:border-blue-200"
        >
          Visit Website
        </a>
      </div>

      <div className="flex flex-col justify-center items-center gap-10 mb-20 lg:mb-40">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-[0.85rem] text-black/50 uppercase">
            Next Project
          </h2>

          <h3 className="text-center uppercase font-semibold font-koulen text-[3rem] md:text-[4.5rem] lg:text-[6rem] leading-[100%]!">
            {projects[validNextIndex].id}
          </h3>
        </div>
        <Link
          href={`/work/${projects[validNextIndex].id}`}
          className="w-[clamp(250px,50vw,600px)] h-[200px] md:h-[350px] lg:h-[400px] mx-auto bg-red-100 group cursor-pointer overflow-hidden*"
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
    </div>
  );
}
