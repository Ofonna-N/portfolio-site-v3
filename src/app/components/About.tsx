import Image from "next/image";
import aboutImg from "../../assets/Resume Pic.jpg";

const About = () => {
  return (
    <div className="text-center h-full flex flex-col justify-center gap-[2rem]">
      <h3 className="text-[3rem]">ABOUT</h3>
      <div className="flex justify-center">
        <Image
          src={aboutImg}
          width={300}
          height={800}
          alt=""
          className="rounded-full w-[15rem] aspect-square object-cover"
        />
      </div>
      <h4 className="text-[2rem] font-bold">A little about me</h4>
      <div className="text-center px-[2rem]">
        As a passionate frontend developer, I am dedicated to crafting
        exceptional user experiences. With expertise in React and Next.js, I
        specialize in creating responsive and interactive web applications. By
        merging my technical skills with creative problem-solving, I strive to
        deliver seamless user interfaces that captivate and engage.
      </div>
      <div className="text-center hidden">
        As a passionate frontend developer, I am dedicated to crafting
        exceptional user experiences. With expertise in React and Next.js, I
        specialize in creating responsive and interactive web applications. By
        merging my technical skills with creative problem-solving, I strive to
        deliver seamless user interfaces that captivate and engage. Alongside my
        frontend proficiency, I have a keen interest in game development,
        utilizing my knowledge of C# and Unity to bring virtual worlds to life.
        Continuously staying ahead in this dynamic field, I explore emerging
        technologies and techniques. When I'm not coding, you can find me
        enjoying a game of soccer or hitting the gym. Let's connect and
        collaborate on innovative projects that push the boundaries of frontend
        development.
      </div>
    </div>
  );
};

export default About;
