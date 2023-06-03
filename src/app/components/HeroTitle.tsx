"use client";
import Typewriter from "typewriter-effect";

const sectionLinks = ["ABOUT", "PROJECTS", "SKILLS", "EXPERIENCE"];

const HeroTitle = () => {
  return (
    <div className="text-center">
      <span className="text-[3rem]">
        <Typewriter
          options={{
            strings: ["Hi there 👋,", "My name is Ofonna"],
            autoStart: true,
            loop: true,
          }}
        />
      </span>
      <h1 className="text-[3rem] text-white/30">SOFTWARE ENGINEER</h1>
      <h3 className="max-w-[50rem] mb-[4rem] text-white/60">
        Passionate about creating exceptional user experiences.
      </h3>
      <ul className="flex justify-center gap-[2rem] font-light relative">
        {sectionLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="hover:text-amber-500 hover:border-b hover:border-yellow-500 transition-all"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HeroTitle;
