import { projects } from "@/data/project-data";
import { ProjectHeader } from "./components/ProjectHeader";
import { ProjectArticle } from "./components/ProjectArticle";
import { StandAloneSection } from "./components/StandAloneSection";
import ProjectSectionHeader from "./components/ProjectSectionHeader";
import { NextProject } from "./components/NextProject";

type Params = {
  params: Promise<{ id: string }>;
};

export default async function ProjectPage({ params }: Params) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id);
  if (!project) return;
  const index = projects.indexOf(project);

  const sections = project.sections;

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
      <StandAloneSection section={sections.overview} />
      {sections.challenge && <StandAloneSection section={sections.challenge} />}
      {sections.direction && <StandAloneSection section={sections.direction} />}

      {/* The Experience */}
      <div className="py-20">
        <ProjectSectionHeader section={sections.experience} />

        <div className="flex flex-col gap-15 md:gap-25 mt-20">
          <ProjectArticle section={sections.experience?.article1} />
          <ProjectArticle section={sections.experience?.article2} />
          <ProjectArticle section={sections.experience?.article3} />
          <ProjectArticle section={sections.experience?.article4} />
        </div>
      </div>

      {/* The Engineering */}
      <div>
        <ProjectSectionHeader section={sections.engineering} />
        <div className="flex flex-col gap-15 md:gap-25 mt-20">
          <ProjectArticle section={sections.engineering?.article1} />
          <ProjectArticle section={sections.engineering?.article2} />

          <ProjectArticle section={sections.engineering?.article3} />

          <ProjectArticle section={sections.engineering?.article4} />
        </div>
      </div>
      <StandAloneSection section={sections.constraints} />
      <StandAloneSection section={sections.reflection} />
      <div className="flex items-center justify-center py-20 lg:py-40 gap-6">
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.repo}
          className="flex justify-center min-w-32 py-3 bg-black/80 text-white/80 transition-all duration-300 hover:bg-blue-200 hover:text-black/80  text-[12px]!"
        >
          View Repo
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={project.liveLink}
          className="flex justify-center text-black/80 min-w-32 py-3 text-[12px]! border border-black/20 transition-all duration-300 hover:bg-blue-200 hover:border-blue-200"
        >
          Visit Website
        </a>
      </div>
      <NextProject index={index} />
    </div>
  );
}
