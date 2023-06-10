export type SkillGroup = {
  title: string;
  skillSets: SkillSet[];
};

type SkillSet = {
  label?: string;
  tag: string;
};

const skills: SkillGroup[] = [
  {
    title: "Languages",
    skillSets: [
      { tag: "html" },
      { tag: "javascript" },
      { tag: "css" },
      { tag: "typescript" },
      { tag: "scss" },
      { tag: "tailwindcss" },
      { tag: "csharp", label: "C#" },
    ],
  },
  {
    title: "Frameworks & Engines",
    skillSets: [
      { tag: "react" },
      { tag: "nextjs" },
      { tag: "unity" },
      { tag: "nodejs" },
      { tag: "express" },
    ],
  },
  {
    title: "Toos & Technologies",
    skillSets: [
      { tag: "firebase" },
      { tag: "mongodb" },
      { tag: "hookform", label: "hookform" },
      { tag: "git" },
    ],
  },
];

export default skills;
