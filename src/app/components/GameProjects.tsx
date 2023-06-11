import GetGameProjects from "../functions/GetGameProjects";
import ProjectCard from "./ProjectCard";
import MotionDiv from "./utility/MotionDiv";
import GalleryItem from "./utility/image-gallery/GalleryItem";
import ImageGallery from "./utility/image-gallery/ImageGallery";

const GameProjects = async () => {
  const projects = await GetGameProjects();

  return (
    <>
      <h3 className="text-[3rem] md:text-[5rem] text-center font-bold">
        GAME PROJECTS
      </h3>
      <MotionDiv
        className="relative w-full"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{
          scale: 1,
          opacity: 1,
          transition: {
            duration: 0.35,
          },
        }}
      >
        <ImageGallery>
          {projects.map((project, i) => (
            <GalleryItem className="w-full h-fit md:w-1/2" key={i}>
              <ProjectCard project={project} />
            </GalleryItem>
          ))}
        </ImageGallery>
      </MotionDiv>
      {/* <div className="h-[80%] relative w-full flex flex-col items-center justify-center">
      </div> */}
    </>
  );
};

export default GameProjects;
