import sanityClient from "@/services/sanityClient";
import ProjectType from "../customTypes/ProjectType";

export default async function GetProjects(): Promise<ProjectType[]> {
  return await sanityClient.fetch(
    '*[_type == "project"]{..., "imgSrc":image.asset->url}'
  );
}
