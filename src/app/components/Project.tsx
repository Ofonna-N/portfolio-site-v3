import ImageGallery from "./utility/image-gallery/ImageGallery";
import GalleryItem from "./utility/image-gallery/GalleryItem";
// import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";
import GetProjects from "../functions/GetProjects";
import MotionDiv from "./utility/MotionDiv";

const Project = async () => {
  const projects = await GetProjects();

  return (
    <>
      <h3 className="text-[3rem] md:text-[5rem] text-center">WEB PROJECTS</h3>
      <MotionDiv
        className="relative w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{
          opacity: 1,
          scale: 1,
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
    </>
  );
};

export default Project;
