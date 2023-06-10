import ImageGallery from "./utility/image-gallery/ImageGallery";
import GalleryItem from "./utility/image-gallery/GalleryItem";
// import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import GetProjects from "../functions/GetProjects";

const Project = async () => {
  const projects = await GetProjects();

  return (
    <div className="h-full px-[2rem] flex flex-col items-center justify-center gap-[1rem] md:gap-[4rem]">
      <div className="relative w-full h-4/5 flex flex-col justify-center items-center">
        <h3 className="text-[3rem] md:text-[5rem] text-center">WEB PROJECTS</h3>
        <div className="relative w-full ">
          <ImageGallery>
            {projects.map((project, i) => (
              <GalleryItem className="w-full h-fit md:w-1/2" key={i}>
                <ProjectCard project={project} />
              </GalleryItem>
            ))}
          </ImageGallery>
        </div>
      </div>
    </div>
  );
};

export default Project;
