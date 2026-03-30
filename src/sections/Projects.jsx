import { ProjectCard } from "../Components/ProjectCard";
import todoPreview from "../assets/todoPreview.png";
import memryVid from "../assets/memry-vid.mp4";
import quantizedSrc from "../assets/Quantized.mp4";
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
              src={memryVid}
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

            <ProjectCard
              projectName={"Quantized"}
              number={"03"}
              src={quantizedSrc}
              year={"2025"}
              stack={'["HTML", "CSS", "JS"]'}
              liveLink="https://quantized23.netlify.app/"
            />
          </>
        }
      </div>
    </section>
  );
}
