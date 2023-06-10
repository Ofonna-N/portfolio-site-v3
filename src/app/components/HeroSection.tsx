import React from "react";
import HeroTitle from "./HeroTitle";
import MotionDiv from "./utility/MotionDiv";
import AnimatedCubes from "./AnimatedCubes";
import Image from "next/image";
import profile from "../../assets/profile-pic.jpg";
import {
  FaLinkedinIn,
  FaTwitterSquare,
  FaGithubSquare,
  FaGooglePlay,
  FaEnvelopeSquare,
} from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center z-50 h-full">
      <div className="relative mb-5">
        <AnimatedCubes />
        <Image
          src={profile}
          width={250}
          height={250}
          alt=""
          className="relative rounded-full w-[15rem] aspect-square"
        />
      </div>
      <HeroTitle />
      {/* Social Icons */}
      <MotionDiv
        initial={{ x: -200, opacity: 0 }}
        whileInView={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, ease: "backOut" },
        }}
        className="relative"
      >
        <ul className="flex items-center justify-center gap-[2rem] text-[3rem]">
          <li className="hover:scale-125">
            <a
              href="https://www.linkedin.com/in/ofonna-nweze-2abbb9173/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className="hover:scale-125">
            <a href="https://github.com/Ofonna-N" target="_blank">
              <FaGithubSquare />
            </a>
          </li>
          <li className="hover:scale-125">
            <a href="https://twitter.com/_ofonna" target="_blank">
              <FaTwitterSquare />
            </a>
          </li>
          <li className="hover:scale-125">
            <a
              href="https://play.google.com/store/apps/dev?id=7837179898460799569"
              target="_blank"
            >
              <FaGooglePlay />
            </a>
          </li>
          <li className="hover:scale-125">
            <a href="mailto:nwezeofonna@gmail.com" target="_blank">
              <FaEnvelopeSquare />
            </a>
          </li>
        </ul>
      </MotionDiv>
      {/* Get in touch text */}
    </div>
  );
};

export default HeroSection;
