import { ProjectCardProp } from "../schemas/home";
import "./ProjectCard.css";

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
    <>
      <article className="project-card">
        <div className="card-text-details">
          <div className="project-meta  project-header purge-whitespace">
            <p className="project-number">[{number}]</p>
            <p className="project-name">{projectName}</p>
          </div>

          <div className="project-sub-details">
            <div className="project-meta">
              <p className="project-number">[Year]</p>
              <p className="project-name">{year}</p>
            </div>

            <div className="project-meta">
              <p className="project-number">Stacks</p>

              <div>
                {stacks.map((item, index) => (
                  <p key={index} className="project-name">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <a
              href={liveLink}
              target="_blank"
              className="project-meta project-footer purge-whitespace"
            >
              <div className="visit-text-container">
                <span className="project-number">[Visit Website]</span>
              </div>
              <div className="enter-svg-container">
                <svg
                  viewBox="0 0 11 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M4.80248 10.069L8.07867 7.24247H0V0H1.52629V5.92566H8.07867L4.80248 3.09912L5.88157 2.16813L11 6.58407L5.88157 11L4.80248 10.069Z"
                    fill="currentColor"
                  ></path>{" "}
                </svg>
              </div>
            </a>
          </div>
        </div>

        <section className="project-images">
          <div className="img-container">
            {fileType === "png" && (
              <img
                className="card-image"
                src={src}
                alt={`Preview of ${projectName}`}
              />
            )}
            {fileType === "mp4" && (
              <video autoPlay loop muted playsInline preload="none" src={src} />
            )}
          </div>
        </section>
      </article>
    </>
  );
}
