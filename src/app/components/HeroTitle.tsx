"use client";
import Typewriter from "typewriter-effect";

const sectionLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
];

const HeroTitle = () => {
  return (
    <div className="text-center">
      <span className="text-[2rem]">
        <Typewriter
          options={{
            strings: ["Hi there 👋,", "My name is Ofonna"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
      <h1 className="text-[1.6rem] text-white/30">SOFTWARE ENGINEER</h1>
      <h3 className="max-w-[50rem] text-[1.3rem] mb-[4rem] text-white/60">
        Passionate about creating exceptional user experiences.
      </h3>
      <ul className="flex justify-center gap-[2rem] font-light relative">
        {sectionLinks.map((link) => (
          <li key={link.label} className="text-[1.4rem]">
            <a
              href={link.href}
              className="hover:text-amber-500 hover:border-b hover:border-yellow-500 transition-all"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroTitle;
