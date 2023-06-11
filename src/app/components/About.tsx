"use client";
import Image from "next/image";
import aboutImg from "../../assets/Resume Pic.jpg";
import MotionDiv from "./utility/MotionDiv";

const About = () => {
  return (
    <div className="text-center flex flex-col items-center justify-center gap-[2rem]">
      <h3 className="text-[4rem] font-bold">ABOUT</h3>
      <div
        className="flex flex-col justify-center items-center 
      md:flex-row md:gap-[2rem] md:px-[3rem]"
      >
        <MotionDiv
          initial={{ x: -100, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.45,
            },
          }}
          // viewport={{ once: true }}
          className="w-[15rem] mb-5 overflow-hidden rounded-full flex-grow aspect-square 
        md:rounded-none md:aspect-auto md:w-[30%]"
        >
          <Image
            src={aboutImg}
            width={300}
            height={800}
            alt=""
            className="w-full object-cover"
          />
        </MotionDiv>
        <div className="hidden bg-white w-[2px] h-[50%] md:block"></div>
        <MotionDiv
          className="md:w-[60%]"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.75,
            },
          }}
        >
          <h4 className="text-[2rem] font-bold md:text-left md:text-[3rem]">
            A little about me
          </h4>
          <div className="text-center px-6  md:px-0 md:text-left lg:text-[1.8rem]">
            I am dedicated to crafting exceptional user experiences. With
            expertise in React and Next.js, I specialize in creating responsive
            and interactive web applications. By merging my technical skills
            with creative problem-solving, I strive to deliver seamless user
            interfaces that captivate and engage.{" "}
            <span className="hidden md:inline">
              Alongside my frontend proficiency, I have a keen interest in game
              development, utilizing my knowledge of C# and Unity to bring
              virtual worlds to life. Continuously staying ahead in this dynamic
              field, I explore emerging technologies and techniques. When
              I&apos;m not coding, you can find me enjoying a game of soccer or
              hitting the gym. Let&apos;s connect and collaborate on innovative
              projects that push the boundaries of frontend development.
            </span>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
};

export default About;
