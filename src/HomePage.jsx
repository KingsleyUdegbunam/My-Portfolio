import "./HomePage.css";
export default function HomePage() {
  return (
    <>
      <section className="landing-wrapper">
        <header className="header">
          <h1>KAY</h1>

          <nav>
            <ul>
              <li className="nav-li">HOME</li>
              <li className="nav-li">WORK</li>
              <li className="nav-li">INFO</li>
            </ul>
          </nav>

          <span>[2026]</span>
        </header>
        <section className="landing">
          <span>K</span>
          <span>A</span>
          <span>Y</span>
        </section>

        <section className="about-section">
          <header className="intro-text">
            <h1 className="logo-about">KAY</h1>
          </header>
          <section className="about-details">
            <p className="about-text">
              THIS IS THE FOLIO OF UDEGBUNAM kINGSLEY KENECHUKWU{" "}
              <span className="kay-interject">[KAY]</span>
            </p>
            <p className="about-details">
              A CREATIVE FRONTEND DEVELOPER FOCUSED ON BUILDING SLEEK
              EXPERIENCES THAT TRANSFORM SIMPLE WEBSITES INTO SOMETHING
              EXTRAORDINARY{" "}
            </p>

            <p className="scroll">[SCROLL DOWN]</p>
          </section>
        </section>
      </section>

      <section className="works">
        <h1 className="project-h1">PROJECTS</h1>

        <div className="projects-container">
          <article className="project-card">
            <div className="card-text-details">
              <div className="project-meta">
                <p className="project-number">[01]</p>
                <p className="project-name">Todo Buddy</p>
              </div>

              <div className="project-meta">
                <p className="project-number">[Year]</p>
                <p className="project-name">2026</p>
              </div>

              <div className="project-meta">
                <p className="project-number">[Tech]</p>
                <div>
                  <p className="project-name">HTML</p>
                  <p className="project-name">CSS</p>
                  <p className="project-name">JS</p>
                </div>
              </div>

              <div className="project-meta">
                <p className="project-number">[Visit Website]</p>
                <div className="enter-svg-container">
                  <svg
                    class="h-12px"
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
          </article>
        </div>
      </section>
    </>
  );
}
