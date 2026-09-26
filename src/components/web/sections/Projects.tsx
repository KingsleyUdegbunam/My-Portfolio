import { Project } from "@/types/home";
import { ProjectCard } from "../../ProjectCard";

export default function Projects() {
  let NUMBER = 1;
  const projectsBaseArray: Project[] = [
    {
      id: "leadbookstore",
      projectName: "Lead Bookstore",
      src: "/assets/lead-store.mp4",
      type: "Study | Ecommerce",
      year: "2026",
      stacks: ["React", "Vite", "JS", "Supabase", "PayStack"],
      liveLink: "https://leadbookstore.netlify.app",
    },
    {
      id: "memry",
      projectName: "Memry",
      src: "/assets/memry.mp4",
      type: "Learning Tool",
      year: "2025",
      stacks: ["HTML", "CSS", "JS"],
      liveLink: "https://usememry.netlify.app",
    },

    {
      id: "quantized",
      projectName: "Quantized",
      src: "/assets/quantized.mp4",
      type: "Personal Project",
      year: "2025",
      stacks: ["HTML", "CSS", "JS"],
      liveLink: "https://quantized23.netlify.app",
    },
  ];

  const projectsArray = projectsBaseArray.map((project) => ({
    ...project,
    number: NUMBER++,
  }));

  return (
    <section id="works" className="px-4 py-12 md:px-6 lg:px-12">
      <h1 className="text-[4rem] text-black/90 text-center font-koulen pb-12 ">
        PROJECTS
      </h1>

      <div className="flex flex-col max-w-[1800px] mx-auto!">
        {
          <>
            {projectsArray.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </>
        }
      </div>
    </section>
  );
}
