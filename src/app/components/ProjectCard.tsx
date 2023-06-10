// import { ProjectType } from "@/data/projects";
import React from "react";
import Image from "next/image";
import ProjectType from "../customTypes/ProjectType";
import ExpandableText from "./utility/expandable-text/ExpandableText";

type Props = {
  project: ProjectType;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="bg-primary-800/30 p-[2rem] rounded-xl transition-all">
      <div className="w-full aspect-video flex justify-center">
        <Image
          src={project.imgSrc}
          width={1024}
          height={1024}
          alt={project.alt}
          className="w-full object-cover"
        />
      </div>
      <h3 className="text-[3rem]">{project.name}</h3>
      <div className="flex gap-6 mb-4">
        <a
          href={project.demolink}
          target="_blank"
          className="underline text-yellow-500"
        >
          Live Demo
        </a>
        <a
          href={project.githublink}
          target="_blank"
          className="underline text-yellow-500"
        >
          Github
        </a>
      </div>
      <div>
        {/* <p className="mb-4">{project.description}</p> */}
        <ExpandableText text={project.description} limit={180} />
        {project.techstack && (
          <div>
            <h4 className="text-primary-600 font-bold">Tech Stack</h4>
            <hr className="border-primary-200/20 mb-[0.5rem]" />
            <ul className="flex flex-wrap gap-2">
              {project.techstack?.map((techStack, i) => (
                <li className="" key={i}>
                  <span className="bg-primary-900/90 px-[5px] rounded-md text-yellow-800">
                    {techStack}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
