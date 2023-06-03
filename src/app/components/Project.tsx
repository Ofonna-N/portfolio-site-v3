import Image, { StaticImageData } from "next/image";
import placeHolder from "../../assets/netflix.png";

type ProjectType = {
  imgSrc: StaticImageData;
  title: string;
  gitHubLink: string;
  liveDemoLink: string;
  description: string;
  techStack: string[];
};

const projects: ProjectType[] = [
  {
    imgSrc: placeHolder,
    title: "Nextflix clone",
    gitHubLink: "",
    liveDemoLink: "",
    description:
      "I wanted to challenge myself by creating a clone of one of the most popular streaming services, Netflix. My Netflix clone project is a responsive web application that replicates the core features of the original Netflix user interface from the home page to the signup and login pages. The project demonstrates my skills in creating modular and scalable web applications, including movie and TV show listings, and user authentication.",
    techStack: [
      "ReactJS",
      "SCSS",
      "Firebase",
      "TMBD API",
      "React Router",
      "React Redux",
    ],
  },
  {
    imgSrc: placeHolder,
    title: "Nextflix clone",
    gitHubLink: "",
    liveDemoLink: "",
    description:
      "I wanted to challenge myself by creating a clone of one of the most popular streaming services, Netflix. My Netflix clone project is a responsive web application that replicates the core features of the original Netflix user interface from the home page to the signup and login pages. The project demonstrates my skills in creating modular and scalable web applications, including movie and TV show listings, and user authentication.",
    techStack: [
      "ReactJS",
      "SCSS",
      "Firebase",
      "TMBD API",
      "React Router",
      "React Redux",
    ],
  },
];

const Project = () => {
  return (
    <div className="h-full px-[2rem] flex flex-col items-center justify-center gap-[4rem]">
      <h3 className="text-[5rem] text-center">PROJECTS</h3>
      <div className="w-full flex flex-col justify-center py-[1rem] overflow-x-hidden">
        <ul className="flex overflow-x-auto w-full gap-2 snap-mandatory snap-x">
          {projects.map((project) => (
            <li className="w-full shrink-0 snap-center">
              <div className="bg-primary-800/30 p-[2rem] rounded-xl">
                <div className="w-full  aspect-video flex justify-center">
                  <Image
                    src={project.imgSrc}
                    width={250}
                    height={250}
                    alt=""
                    className="w-full object-cover"
                  />
                </div>
                <h3 className="text-[3rem]">{project.title}</h3>
                <div className="flex gap-6 mb-4">
                  <a href="http://" className="underline text-yellow-500">
                    Live Demo
                  </a>
                  <a href="http://" className="underline text-yellow-500">
                    Github
                  </a>
                </div>
                <div>
                  <p className="mb-4">{project.description}</p>
                  <div>
                    <h4>Tech Stack</h4>
                    <hr className="border-primary-200/20 mb-[0.5rem]" />
                    <ul className="flex flex-wrap gap-2">
                      {project.techStack.map((techStack) => (
                        <li className="">
                          <span className="bg-primary-900/90 px-[5px] rounded-md">
                            {techStack}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
