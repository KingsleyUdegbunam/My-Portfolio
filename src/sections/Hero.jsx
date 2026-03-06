import Header from "../Components/Header";
import "./Hero.css";

export default function Hero() {
  return (
    <section id="landing-wrapper" className="landing-wrapper">
      <div className="overlay-landing"></div>
      <section className="landing-page">
        {<Header />}

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
              THIS IS THE FOLIO OF UDEGBUNAM KINGSLEY KENECHUKWU{" "}
            </span>
            <span className="kay-interject">[KAY]</span>
          </section>
          {}
          <p className="about-details">
            A Creative Frontend Developer focused on building sleek experiences
            that transforns simple websites into something extraordinary.
          </p>

          <p className="scroll">[SCROLL DOWN]</p>
        </section>
      </section>
    </section>
  );
}
