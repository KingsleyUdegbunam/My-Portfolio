import "./ContactNav.css";

export function ContactNav() {
  return (
    <section className="contact-links">
      <a
        href="https://github.com/KingsleyUdegbunam"
        target="_blank"
        className="ig socials-icon"
      >
        <svg
          className="arrow-svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          ></path>
        </svg>
        <p className="social-text small-device">GH</p>
        <p className="social-text large-device">GitHub</p>
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
        className="socials-icon linkedin linkedin"
      >
        <p className="social-text small-device">LI</p>
        <p className="social-text large-device">LinkedIn</p>
        <svg
          className="arrow-svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          color="var(--token-45c3258e-4d2a-4b3e-81ad-3afbbbf577b1, rgb(0, 0, 0))"
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
  );
}
