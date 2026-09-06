import { ProjectBaseArray } from "../../../schemas/home";
import { ProjectCard } from "../../ProjectCard";

import "./Projects.css";

export default function Projects() {
  let NUMBER = 1;
  const projectsBaseArray: ProjectBaseArray[] = [
    {
      projectName: "Memry",
      src: "/assets/memry-vid.mp4",
      year: "2025",
      stacks: ["HTML", "CSS", "JS"],
      liveLink: "https://usememry.netlify.app/",
    },
    {
      projectName: "Todo Buddy",
      src: "/assets/todoPreview.png",
      year: "2025",
      stacks: ["HTML", "CSS", "JS"],
      liveLink: "https://yourtodobuddy.netlify.app",
    },
    {
      projectName: "Quantized",
      src: "/assets/Quantized.mp4",
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
    <section id="works" className="works">
      <h1 className="project-h1">PROJECTS</h1>

      <div className="projects-container">
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
