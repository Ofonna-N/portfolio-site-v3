import { ProjectType } from "@/data/projects";
import React from "react";
import Image from "next/image";

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-primary-800/30 p-[2rem] rounded-xl">
      <div className="w-full aspect-video flex justify-center">
        <Image
          src={project.imgSrc}
          width={1024}
          height={1024}
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
  );
};

export default ProjectCard;
