type SkillType = {
  tag: string;
  label?: string;
};

type SkillGroupType = {
  title: string;
  skillsets: SkillType[];
};

export default SkillGroupType;
