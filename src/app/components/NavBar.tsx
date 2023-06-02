import React from "react";
import MaxWidth from "./utility/MaxWidth";
import {
  FaLinkedinIn,
  FaTwitterSquare,
  FaGithubSquare,
  FaGooglePlay,
  FaEnvelopeSquare,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="bg-primary-900 py-[1rem] z-10">
      <MaxWidth>
        <div className="flex flex-col gap-4 justify-center px-[2rem] sm:justify-between sm:flex-row">
          {/* Social Icons */}
          <ul className="flex items-center justify-center gap-[1rem]">
            <li>
              <FaLinkedinIn />
            </li>
            <li>
              <FaGithubSquare />
            </li>
            <li>
              <FaTwitterSquare />
            </li>
            <li>
              <FaGooglePlay />
            </li>
          </ul>
          {/* Get in touch text */}
          <div className="flex items-center justify-center gap-[1rem]">
            <FaEnvelopeSquare />
            GET IN TOUCH
          </div>
        </div>
      </MaxWidth>
    </nav>
  );
};

export default NavBar;
