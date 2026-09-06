"use client";

import "../reset.css";
import "../App.css";
import Projects from "../components/web/sections/Projects";
import Contact from "../components/web/sections/Contact";
import Hero from "../components/web/sections/Hero";
import ReactLenis from "lenis/react";

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
