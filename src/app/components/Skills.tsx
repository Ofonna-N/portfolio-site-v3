import Image from "next/image";
import SkillBox from "./SkillBox";

import skills from "@/data/skills";

const Skills = () => {
  return (
    <div className="px-[2rem] h-full flex flex-col justify-center items-center gap-[3rem]">
      <h3 className="text-center text-[5rem]">SKILLS</h3>
      <ul className="w-full md:px-[3rem] h-[70%] overflow-y-auto ">
        {skills.map((skillGroup) => (
          <li className="">
            <h3 className="text-[2.4rem]">{skillGroup.title}</h3>
            <hr className="mb-[1rem] opacity-30" />
            <ul className="grid grid-cols-4  gap-3 mb-[2rem] md:grid-cols-5 lg:grid-cols-7">
              {skillGroup.skillSets.map((skill) => (
                <li className="">
                  <SkillBox type={skill.type} label={skill.label} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
