import About from "./components/About";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

import Section from "./components/utility/Section";

export default function Home() {
  return (
    <div
      className="relative mx-auto h-[100vh] overflow-x-hidden 
    overflow-y-auto snap-y snap-mandatory transition-all"
    >
      <header className="sticky top-0 w-full z-[1000]">
        <NavBar />
      </header>
      <Section className="" id="hero">
        <HeroSection />
      </Section>
      <Section className="" id="about">
        <About />
      </Section>
      <Section className="bg-red-700">{/* PROJECTS */}</Section>
      <Section className="bg-orange-900">{/* SKILLS */}</Section>
      <Section className="bg-green-800">{/* EXPERIENCE */}</Section>
    </div>
  );
}
