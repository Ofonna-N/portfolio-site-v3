import GetGameProjects from "../functions/GetGameProjects";
import ProjectCard from "./ProjectCard";
import GalleryItem from "./utility/image-gallery/GalleryItem";
import ImageGallery from "./utility/image-gallery/ImageGallery";

const GameProjects = async () => {
  const projects = await GetGameProjects();

  return (
    <div className="relative h-full px-[2rem] flex flex-col items-center justify-center gap-[1rem] md:gap-[4rem]">
      <div className="h-[80%] relative w-full flex flex-col items-center justify-center">
        <h3 className="text-[3rem] md:text-[5rem] text-center">
          GAME PROJECTS
        </h3>
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

export default GameProjects;
