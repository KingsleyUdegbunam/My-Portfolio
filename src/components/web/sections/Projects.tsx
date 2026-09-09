import { Project } from "../../../schemas/home";
import { ProjectCard } from "../../ProjectCard";

export default function Projects() {
  let NUMBER = 1;
  const projectsBaseArray: Project[] = [
    {
      projectName: "Lead Bookstore",
      src: "/assets/lead-store.mp4",
      type: "Study | Ecommerce",
      year: "2026",
      stacks: ["React", "Vite", "JS", "Supabase", "PayStack"],
      liveLink: "https://https://leadbookstore.netlify.app",
    },
    {
      projectName: "Memry",
      src: "/assets/memry-vid.mp4",
      type: "Study",
      year: "2025",
      stacks: ["HTML", "CSS", "JS"],
      liveLink: "https://usememry.netlify.app",
    },
    {
      projectName: "Todo Buddy",
      src: "/assets/todoPreview.png",
      type: "Study",
      year: "2025",
      stacks: ["HTML", "CSS", "JS"],
      liveLink: "https://yourtodobuddy.netlify.app",
    },
    {
      projectName: "Quantized",
      src: "/assets/Quantized.mp4",
      type: "Community",
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
    <section id="works">
      <h1 className="text-[4rem] text-center font-koulen pb-12 ">PROJECTS</h1>

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
