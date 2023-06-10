import sanityClient from "@/services/sanityClient";
import SkillGroupType from "../customTypes/SkillGroupType";

export default async function GetSkillGroups(): Promise<SkillGroupType[]> {
  return await sanityClient.fetch(
    '*[_type == "skillgroup"] | order(_updatedAt desc)'
  );
}
