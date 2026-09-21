import { useMemo } from "react";
import TopNav from "./components/TopNav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import useScrollSpy from "./hooks/useScrollSpy";
import useSmoothScroll from "./hooks/useSmoothScroll";

const SECTION_IDS = ["hero", "about", "skills", "projects", "contact"];

export default function App() {
  const ids = useMemo(() => SECTION_IDS, []);
  const activeId = useScrollSpy(ids);
  useSmoothScroll();

  return (
    <div className="app-shell">
      <CustomCursor />
      <ScrollProgress />
      <div className="page-frame">
        <TopNav activeId={activeId} />
        <main className="shell">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </main>
      </div>
      <BackToTop />
    </div>
  );
}
