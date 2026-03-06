import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import { ReactLenis } from "lenis/react";
import Contact from "./sections/Contact";

import "./reset.css";
import "./App.css";

function App() {
  return (
    <>
      <ReactLenis root />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
