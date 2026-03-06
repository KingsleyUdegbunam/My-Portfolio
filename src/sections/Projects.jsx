import { ProjectCard } from "../Components/ProjectCard";
import todoPreview from "../assets/todoPreview.png";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="works" className="works">
      <h1 className="project-h1">PROJECTS</h1>

      <div className="projects-container">
        {
          <>
            <ProjectCard
              projectName="Memry"
              number="01"
              image={todoPreview}
              year="2025"
              stack='["HTML", "CSS", "JS"]'
              liveLink="https://usememry.netlify.app/"
            />

            <ProjectCard
              projectName="Todo Buddy"
              number="02"
              image={todoPreview}
              year="2026"
              stack='["HTML", "CSS", "JS", "React"]'
              liveLink="https://yourtodobuddy.netlify.app/"
            />
          </>
        }
      </div>
    </section>
  );
}
