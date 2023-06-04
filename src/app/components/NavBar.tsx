import React from "react";
import MaxWidth from "./utility/MaxWidth";

const sectionLinks = [
  { label: "CONTACT", href: "#hero" },
  { label: "ABOUT", href: "#about" },
  { label: "PROJECTS", href: "#projects" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
];
const NavBar = () => {
  return (
    <nav className="py-[2rem] w-full z-10">
      <MaxWidth>
        <div className="flex flex-col gap-4 items-center justify-center px-[2rem]">
          <ul className="flex justify-center gap-[1rem] font-light relative">
            {sectionLinks.map((link, i) => (
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
      </MaxWidth>
    </nav>
  );
};

export default NavBar;
