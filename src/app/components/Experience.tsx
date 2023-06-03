type Experience = {
  title: string;
  company: string;
  date: string;
  responsibilities: string[];
};

const experiences: Experience[] = [
  {
    title: "Game Developer, Founder",
    company: "Smally Games",
    date: "September 2018 - August 2022",
    responsibilities: [
      "Used Unity and C# programming language to develop game prototypes based on ideas from gaming designers. Collaborated extensively.",
      "Collaborated extensively with the Game design team and product managers to take project goals, break each into job tasks and prioritize tasks for easier management.",
      "Met strict deadlines for on-schedule game delivery by leveraging time management, team leadership and task prioritization skills.",
      "Solicited, obtained and integrated feedback from design and technical staff into original game design.",
    ],
  },
  {
    title: "Game Developer",
    company: "Moonee",
    date: "June 2021-June 2022",
    responsibilities: [
      "Created quick prototypes and proof of concepts for Super store Rush and Crow Step",
      "Met strict deadlines for on-schedule game delivery by leveraging time management, team leadership and task prioritization skills.",
      "Worked closely with team members to deliver project requirements, develop solutions and",
    ],
  },
  {
    title: "Game Developer",
    company: "Lion Studios",
    date: "May 2021-June 2021",
    responsibilities: [
      "Created quick prototypes and proof of concepts for Swipe Duel",
      "Accomplished project objectives in technical and design areas to facilitate smooth, customerfocused gameplay.",
      "Reported progress and resolved problems to keep projects on schedule and within budget parameters.",
    ],
  },
  {
    title: "Game Programmer",
    company: "ketchap,",
    date: "February 2021-March 2021",
    responsibilities: [
      "Created quick prototypes and proof of concepts for Man Bash",
      "Participated in team meetings and provided input on deadlines, designs and enhancements.",
      "Tested Game project to alleviate bugs and troubleshoot issues prior to going live.",
    ],
  },
  {
    title: "SEO Content Writer",
    company: "Clifton Creative Web",
    date: "February 2022- Present (Part Time)",
    responsibilities: [
      "Write 20+ high-quality web articles, blogs, and web copies for various industries, including dentists, real estate, and law firms.",
      "Research and gather information from credible sources to ensure accuracy and relevance of content.",
      "Collaborate with clients and team members to understand project requirements and deliver content that meets their needs.",
    ],
  },
];

const Experience = () => {
  return (
    <div className="h-full gap-[7rem] px-[1rem] flex flex-col justify-center ">
      <h3 className="text-[3rem] text-center">EXPERIENCE</h3>
      <div className="h-fit flex flex-col justify-center">
        <ul
          className="snap-mandatory w-full py-4 px-[1rem] 
      snap-x text-[1.4rem] gap-[1rem] flex overflow-x-auto"
        >
          {experiences.map((experience, i) => (
            <li
              key={i}
              className="w-full rounded-xl bg-primary-800 shrink-0 py-[2rem] 
              pl-[2rem] pr-[0.25rem] snap-center"
            >
              <h4 className="text-[2.4rem]">{experience.title}</h4>
              <h5 className="text-[1.8rem] mb-[.5rem]">{experience.company}</h5>
              <p>{experience.date}</p>
              <hr className="mb-1" />
              <ul className="list-disc">
                {experience.responsibilities.map((responsibility) => (
                  <li key={responsibility} className="mb-4">
                    {responsibility}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
