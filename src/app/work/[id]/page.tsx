import { projects } from "@/data/project-data";
import { ProjectHeader } from "./components/ProjectHeader";
import { StandAloneSection } from "./components/StandAloneSection";
import { DetailedSection } from "./components/DetailedSection";
import { ProjectLinks } from "./components/ProjectLinks";
import { NextProject } from "./components/NextProject";
import { HeroVideo } from "@/components/web/HeroVideo";
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
        <HeroVideo src={project.heroImage} />
      </div>
      <StandAloneSection section={sections.overview} />
      <StandAloneSection section={sections.challenge} />
      <StandAloneSection section={sections.direction} />

      {/* The Experience */}
      <section className="py-20">
        <DetailedSection section={sections.experience} />
      </section>

      {/* The Engineering */}
      <section>
        <DetailedSection section={sections.engineering} />
      </section>

      <StandAloneSection section={sections.constraints} />
      <StandAloneSection section={sections.reflection} />
      <ProjectLinks project={project} />
      <NextProject index={index} />
    </div>
  );
}
