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
        initial={{ x: -500, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "backOut" }}
        className="relative"
      >
        <ul className="flex items-center justify-center gap-[2rem] text-[3rem]">
          <li>
            <a href="" target="_blank">
              <FaLinkedinIn />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaGithubSquare />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaTwitterSquare />
            </a>
          </li>
          <li>
            <a href="" target="_blank">
              <FaGooglePlay />
            </a>
          </li>
        </ul>
      </MotionDiv>
      {/* Get in touch text */}
    </div>
  );
};

export default HeroSection;
