import sanityClient from "@/services/sanityClient";
import { Experience } from "../customTypes/ExperienceType";

export default async function GetExperiences(): Promise<Experience[]> {
  return await sanityClient.fetch('*[_type == "experience"]');
}
