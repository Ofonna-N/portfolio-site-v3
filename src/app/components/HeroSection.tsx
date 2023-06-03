import React from "react";
import HeroTitle from "./HeroTitle";
import MotionDiv from "./utility/MotionDiv";
import AnimatedCubes from "./AnimatedCubes";
import Image from "next/image";
import profile from "../../assets/profile-pic.jpg";

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
    </div>
  );
};

export default HeroSection;
