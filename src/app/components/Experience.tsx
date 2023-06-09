// import experiences from "@/data/experiences";
import ImageGallery from "./utility/image-gallery/ImageGallery";
import GalleryItem from "./utility/image-gallery/GalleryItem";
import GetExperiences from "../functions/GetExperiences";

const Experience = async () => {
  const experiences = await GetExperiences();

  return (
    <>
      <h3 className="text-[3rem] md:text-[6rem] text-center font-bold">
        EXPERIENCE
      </h3>
      <div className="h-fit flex flex-col justify-center">
        <ImageGallery>
          {experiences.map((experience, i) => (
            <GalleryItem key={i} className="w-full md:w-1/2">
              <div className="bg-primary-800/30 p-[2rem] rounded-xl">
                <h4 className="text-[2.4rem]">{experience.title}</h4>
                <h5 className="text-[1.8rem] mb-[.5rem]">
                  {experience.company}
                </h5>
                <p>{experience.date}</p>
                <hr className="mb-1" />
                <ul className="list-disc">
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility} className="mb-4">
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>
            </GalleryItem>
          ))}
        </ImageGallery>
      </div>
    </>
  );
};

export default Experience;
