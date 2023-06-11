import React from "react";
import MaxWidth from "./utility/MaxWidth";
import sectionLinks from "@/data/sectionLinks";

const NavBar = () => {
  return (
    <nav className="py-[2rem] w-full z-10 bg-black/80 md:bg-primary-900">
      <MaxWidth>
        <ul className="px-2 flex flex-wrap justify-center gap-[1rem] font-light relative md:gap-[2rem]">
          {sectionLinks.map((link) => (
            <li
              key={link.label}
              className="text-[1.4rem] hover:scale-125 transition-all"
            >
              <a
                href={link.href}
                className="hover:text-amber-500 hover:border-b hover:border-yellow-500 active:text-amber-500 transition-all"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </MaxWidth>
    </nav>
  );
};

export default NavBar;
