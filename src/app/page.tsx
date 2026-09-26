import { ScrollToHash } from "@/components/web/Scroll-to-hash";
import Contact from "../components/web/sections/Contact";
import Hero from "../components/web/sections/Hero";
import Projects from "../components/web/sections/Projects";

function App() {
  return (
    <>
      <ScrollToHash />
      <Hero />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
