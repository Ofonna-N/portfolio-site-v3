import Image from "next/image";
import SkillBox from "./SkillBox";

// import skills from "@/data/skills";
import GetSkillGroups from "../functions/GetSkillGroups";

const Skills = async () => {
  const skillGroups = await GetSkillGroups();
  return (
    <>
      <h3 className="text-center text-[3rem] md:text-[5rem]">SKILLS</h3>
      <ul className="w-full md:px-[3rem] overflow-y-auto">
        {skillGroups.map((skillGroup, groupIndex) => (
          <li className="" key={groupIndex}>
            <h3 className="text-[2.4rem]">{skillGroup.title}</h3>
            <hr className="mb-[1rem] opacity-30" />
            <ul className="grid grid-cols-3  gap-3 mb-[2rem] md:grid-cols-5 lg:grid-cols-7">
              {skillGroup.skillsets.map((skill, i) => (
                <li className="" key={i}>
                  <SkillBox tag={skill.tag} label={skill.label} />
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Skills;
