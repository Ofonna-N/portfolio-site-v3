import ImageGallery from "./utility/image-gallery/ImageGallery";
import GalleryItem from "./utility/image-gallery/GalleryItem";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

const Project = () => {
  return (
    <div className="h-full px-[2rem] flex flex-col items-center justify-center gap-[4rem]">
      <h3 className="text-[5rem] text-center">PROJECTS</h3>
      <div className="relative w-full ">
        <ImageGallery>
          {projects.map((project) => (
            <GalleryItem className="w-full h-fit md:w-1/2">
              <ProjectCard project={project} />
            </GalleryItem>
          ))}
        </ImageGallery>
      </div>
    </div>
  );
};

export default Project;
