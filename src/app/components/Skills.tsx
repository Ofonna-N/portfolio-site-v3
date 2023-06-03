import Image from "next/image";
import SkillBox from "./SkillBox";

type SkillGroup = {
  title: string;
  skillSets: SkillSet[];
};

type SkillSet = {
  label?: string;
  type: string;
};

const skills: SkillGroup[] = [
  {
    title: "Languages",
    skillSets: [
      { type: "html" },
      { type: "javascript" },
      { type: "css" },
      { type: "typescript" },
      { type: "scss" },
      { type: "tailwindcss" },
      { type: "csharp", label: "C#" },
    ],
  },
  {
    title: "Frameworks & Engines",
    skillSets: [
      { type: "react" },
      { type: "nextjs" },
      { type: "unity" },
      { type: "nodejs" },
      { type: "express" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="px-[2rem]">
      <h3 className="text-center text-[3rem]">SKILLS</h3>
      <ul className="">
        {skills.map((skillGroup) => (
          <>
            <h3 className="text-[2.4rem]">{skillGroup.title}</h3>
            <hr className="mb-[2rem]" />
            <ul className="grid grid-cols-3 gap-3 mb-[2rem]">
              {skillGroup.skillSets.map((skill) => (
                <li className="">
                  <SkillBox type={skill.type} label={skill.label} />
                </li>
              ))}
            </ul>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
