import React from "react";
import MaxWidth from "./utility/MaxWidth";
import {
  FaLinkedinIn,
  FaTwitterSquare,
  FaGithubSquare,
  FaGooglePlay,
  FaEnvelopeSquare,
} from "react-icons/fa";
import MotionDiv from "./utility/MotionDiv";

const NavBar = () => {
  return (
    <nav className="bg-primary-900 py-[1rem] z-10">
      <MaxWidth>
        <div className="flex flex-col gap-4 items-center justify-center px-[2rem] sm:justify-between sm:flex-row">
          {/* Social Icons */}
          <MotionDiv
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
          >
            <ul className="flex items-center justify-center gap-[2rem]">
              <li>
                <a href="">
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGithubSquare />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitterSquare />
                </a>
              </li>
              <li>
                <a href="">
                  <FaGooglePlay />
                </a>
              </li>
            </ul>
          </MotionDiv>
          {/* Get in touch text */}
          <MotionDiv
            initial={{ x: 500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "backOut" }}
            className="flex items-center justify-center gap-[1rem]"
          >
            <FaEnvelopeSquare />
            GET IN TOUCH
          </MotionDiv>
        </div>
      </MaxWidth>
    </nav>
  );
};

export default NavBar;
