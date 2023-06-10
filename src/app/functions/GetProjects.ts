import sanityClient from "@/services/sanityClient";
import ProjectType from "../customTypes/ProjectType";

export default async function GetProjects(): Promise<ProjectType[]> {
  const projects = await sanityClient.fetch(
    '*[_type == "project"]{..., "imgSrc":image.asset->url}'
  );

  return projects;
}
