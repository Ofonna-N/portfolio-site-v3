import About from "./components/About";
import Experience from "./components/Experience";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import Project from "./components/Project";
import Skills from "./components/Skills";

import Section from "./components/utility/Section";

export default function Home() {
  return (
    <div
      className="relative mx-auto h-[100vh] overflow-x-hidden 
    overflow-y-auto snap-y snap-mandatory transition-all"
    >
      {/* <header className="sticky top-0 w-full z-[1000]">
        <NavBar />
      </header> */}
      <Section className="" id="hero">
        <HeroSection />
      </Section>
      <Section className="" id="about">
        <About />
      </Section>
      <Section className="" id="projects">
        <Project />
      </Section>
      <Section className="" id="skills">
        <Skills />
      </Section>
      <Section className="" id="experience">
        <Experience />
      </Section>
    </div>
  );
}
