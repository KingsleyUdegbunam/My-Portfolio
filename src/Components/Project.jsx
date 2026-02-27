export function Project({ number, projectName, year, image, stack }) {
  //{stack} = ["HTML", "CSS", "JS", "React"];

  let buildTool = [];
  try {
    buildTool = JSON.parse(stack);
  } catch (e) {
    console.log("Parsing failed", e.message);
  }

  return (
    <>
      <article className="project-card">
        <div className="card-text-details">
          <div className="project-meta">
            <p className="project-number">[{number}]</p>
            <p className="project-name">{projectName}</p>
          </div>

          <div className="project-meta">
            <p className="project-number">[Year]</p>
            <p className="project-name">{year}</p>
          </div>

          <div className="project-meta">
            <p className="project-number">[Tech]</p>

            <div>
              {buildTool.map((item, index) => (
                <p key={index} className="project-name">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div className="project-meta visit-project">
            <p className="project-number">[Visit Website]</p>
            <div className="enter-svg-container">
              <svg
                viewBox="0 0 11 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {" "}
                <path
                  d="M4.80248 10.069L8.07867 7.24247H0V0H1.52629V5.92566H8.07867L4.80248 3.09912L5.88157 2.16813L11 6.58407L5.88157 11L4.80248 10.069Z"
                  fill="black"
                ></path>{" "}
              </svg>
            </div>
          </div>
        </div>
        <section className="project-images">
          <div className="img-container">
            <img src={image} alt="" />
          </div>
        </section>
      </article>
    </>
  );
}
