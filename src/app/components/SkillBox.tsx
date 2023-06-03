import { SiJavascript } from "react-icons/si";
import {
  SiCsharp,
  SiTypescript,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiUnity,
  SiReact,
  SiNextdotjs,
  SiExpress,
} from "react-icons/si";
import { AiFillHtml5 } from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";

const iconMap: { [key: string]: JSX.Element } = {
  javascript: <SiJavascript />,
  csharp: <SiCsharp />,
  typescript: <SiTypescript />,
  css: <SiCss3 />,
  scss: <SiSass />,
  tailwindcss: <SiTailwindcss />,
  html: <AiFillHtml5 />,
  unity: <SiUnity />,
  react: <SiReact />,
  nextjs: <SiNextdotjs />,
  express: <SiExpress />,
  nodejs: <FaNodeJs />,
};

type Props = {
  type: string;
  label?: string;
};

const SkillBox = ({ type, label }: Props) => {
  return (
    <div
      className="flex flex-col gap-2 justify-center p-[1rem] 
    items-center rounded-md bg-primary-800/70"
    >
      <span className="text-[4rem]  text-primary-200">{iconMap[type]}</span>
      <span className="capitalize text-primary-200">{label || type}</span>
    </div>
  );
};

export default SkillBox;
