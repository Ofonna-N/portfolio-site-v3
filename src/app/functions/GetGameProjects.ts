import sanityClient from "@/services/sanityClient";
import ProjectType from "../customTypes/ProjectType";

export default async function GetGameProjects(): Promise<ProjectType[]> {
  return await sanityClient.fetch(
    '*[_type == "gameproject"]{..., "imgSrc":image.asset->url}'
  );
}
