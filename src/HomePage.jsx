import "./HomePage.css";
import { useState, useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import { Project } from "./Components/Project";
import todoPreview from "./assets/todoPreview.png";

export default function HomePage() {
  const [upwardScroll, setUpwardScroll] = useState(false);
  const scrollref = useRef(window.scrollY);

  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > scrollref.current) {
        console.log("Upward scroll");
        setUpwardScroll(true);
      } else {
        console.log("downward");
        setUpwardScroll(false);
      }
      scrollref.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    upwardScroll === true
      ? headerRef.current.classList.add("hide-header")
      : headerRef.current.classList.remove("hide-header");
  }, [upwardScroll]);

  return (
    <>
      <ReactLenis root />
      <section id="landing-wrapper" className="landing-wrapper">
        <div className="overlay-landing"></div>
        <section className="landing-page">
          <header ref={headerRef} className="header">
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
                  <a href="#contact">CONNECT</a>
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
        </section>

        <section className="about-section">
          <section className="about-details">
            <section className="about-left-container">
              <span className="about-text">
                THIS IS THE FOLIO OF UDEGBUNAM kINGSLEY KENECHUKWU{" "}
              </span>
              <span className="kay-interject">[KAY]</span>
            </section>
            {}
            <p className="about-details">
              A Creative Frontend Developer focused on building sleek
              experiences that transforns simple websites into something
              extraordinary.
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
              <p>[KAY]</p>

              <div className="copyright">
                <span className="small-device copyright-sym">
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

                <span className="small-device">2026</span>
                <span className="large-device">[COPYRIGHT 2026]</span>
              </div>
            </header>
          </div>
          <section className="hello">
            <div className="hello-word-2">
              <p>COME</p>
              <p>SAY</p>
            </div>
            <p>HI</p>
          </section>

          <section className="contact-links">
            <a
              href="https://www.instagram.com/kaythescientist_/"
              target="_blank"
              className="ig socials-icon"
            >
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
              <p className="social-text small-device">IG</p>
              <p className="social-text large-device">Instagram</p>
            </a>
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

            <a
              href="https://www.linkedin.com/in/kingsley-udegbunam/"
              target="_blank"
              className="socials-icon linkedin"
            >
              <p className="social-text small-device">LI</p>
              <p className="social-text large-device">LinkedIn</p>
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
            </a>
          </section>
        </section>
      </footer>
    </>
  );
}
