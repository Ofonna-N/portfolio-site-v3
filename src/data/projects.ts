import placeHolder from "../assets/netflix.png";
import Image, { StaticImageData } from "next/image";
export type ProjectType = {
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

export default projects;
