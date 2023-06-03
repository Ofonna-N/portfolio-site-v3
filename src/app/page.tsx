import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import MaxWidth from "./components/utility/MaxWidth";

export default function Home() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <section className="relative h-[calc(100vh-4.4rem)] flex items-center">
        <MaxWidth>
          <HeroSection />
        </MaxWidth>
      </section>
      {/* Header */}
      {/* Hero */}
      {/* About */}
      {/* Experience */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
}
