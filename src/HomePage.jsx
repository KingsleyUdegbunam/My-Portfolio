import "./HomePage.css";
import Lenis from "lenis";
import { Project } from "./Components/Project";
import todoPreview from "./assets/todoPreview.png";

const lenis = new Lenis({
  autoRaf: true,
});
export default function HomePage() {
  return (
    <>
      <section id="landing-wrapper" className="landing-wrapper">
        <div className="overlay-landing"></div>
        <section className="landing-page">
          <header className="header">
            <h1>KAY</h1>

            <nav>
              <ul>
                <li className="nav-li">
                  <a href="#">HOME</a>
                </li>
                <li className="nav-li">
                  <a href="#works">WORK</a>
                </li>
                <li className="nav-li">
                  <a href="#contact">INFO</a>
                </li>
              </ul>
            </nav>

            <span>[2026]</span>
          </header>

          <div className="hero-text">
            <p>Shaping The Web</p>
            <p>
              With <span className="script-text">Intent.</span>
            </p>
          </div>
          <section className="landing">
            <span>K</span>
            <span>A</span>
            <span>Y</span>
          </section>
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

      <section id="works" className="works">
        <h1 className="project-h1">PROJECTS</h1>

        <div className="projects-container">
          {
            <>
              <Project
                projectName="Todo Buddy"
                number="01"
                image={todoPreview}
                year="2026"
                stack='["HTML", "CSS", "JS", "React"]'
              />

              <Project
                projectName="UseMemry"
                number="02"
                image={todoPreview}
                year="2026"
                stack='["HTML", "CSS", "JS"]'
              />
            </>
          }
        </div>
      </section>

      <footer id="contact" className="contact">
        <section className="contact-wrapper">
          <div className="overlay-footer"></div>
          <div className="header-welcome-text-wrapper">
            <header className="contact-header">
              <h1>KAY</h1>

              <div className="copyright">
                <span className="copyright-sym">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <text x="50%" y="50%" dy=".3em">
                      ©
                    </text>
                  </svg>
                </span>
                <span>2026</span>
              </div>
            </header>
            <section className="hello">
              <p>COME</p>
              <p>SAY</p>
              <p>HI</p>
            </section>
          </div>

          <section className="contact-links">
            <div className="linkedin socials-icon">
              <svg
                className="arrow-svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color="var(--token-45c3258e-4d2a-4b3e-81ad-3afbbbf577b1, rgb(0, 0, 0))"
                style={{ width: "100%", height: "100%" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
              <p className="social-text">LI</p>
            </div>
            <nav>
              <ul>
                <a href="#">
                  <li className="nav-footer">
                    <svg
                      className="arrow-svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      color="var(--token-45c3258e-4d2a-4b3e-81ad-3afbbbf577b1, rgb(0, 0, 0))"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      ></path>
                    </svg>
                  </li>
                </a>
              </ul>
            </nav>

            <div className="socials-icon ig">
              <p className="social-text">IG</p>
              <svg
                className="arrow-svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color="var(--token-45c3258e-4d2a-4b3e-81ad-3afbbbf577b1, rgb(0, 0, 0))"
                style={{ width: "100%", height: "100%" }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                ></path>
              </svg>
            </div>
          </section>
        </section>
      </footer>
    </>
  );
}
