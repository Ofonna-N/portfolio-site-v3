export type SkillGroup = {
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
  {
    title: "Toos & Technologies",
    skillSets: [
      { type: "firebase" },
      { type: "mongodb" },
      { type: "hookform", label: "hookform" },
      { type: "git" },
    ],
  },
];

export default skills;
