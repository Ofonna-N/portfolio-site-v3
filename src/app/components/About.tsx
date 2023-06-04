import Image from "next/image";
import aboutImg from "../../assets/Resume Pic.jpg";

const About = () => {
  return (
    <div className="text-center h-full flex flex-col items-center justify-center gap-[4rem]">
      <h3 className="text-[4rem]">ABOUT</h3>
      <div
        className="flex flex-col justify-center items-center 
      md:flex-row md:gap-[2rem] md:px-[3rem]"
      >
        <div
          className="w-[15rem] overflow-hidden rounded-full flex-grow aspect-square 
        md:rounded-none md:aspect-auto md:w-[30%]"
        >
          <Image
            src={aboutImg}
            width={300}
            height={800}
            alt=""
            className="w-full object-cover"
          />
        </div>
        <div className="hidden bg-white w-[2px] h-[50%] md:block"></div>
        <div className="md:w-[60%]">
          <h4 className="text-[2rem] font-bold md:text-left md:text-[3rem]">
            A little about me
          </h4>
          <div className="text-center md:text-left px-[2rem] lg:text-[1.8rem]">
            I am dedicated to crafting exceptional user experiences. With
            expertise in React and Next.js, I specialize in creating responsive
            and interactive web applications. By merging my technical skills
            with creative problem-solving, I strive to deliver seamless user
            interfaces that captivate and engage.{" "}
            <span className="hidden md:inline">
              Alongside my frontend proficiency, I have a keen interest in game
              development, utilizing my knowledge of C# and Unity to bring
              virtual worlds to life. Continuously staying ahead in this dynamic
              field, I explore emerging technologies and techniques. When I'm
              not coding, you can find me enjoying a game of soccer or hitting
              the gym. Let's connect and collaborate on innovative projects that
              push the boundaries of frontend development.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
