import { cn } from "@/lib/utils";
import { FaJava, FaPhp ,FaHtml5} from 'react-icons/fa';
import { IoLogoJavascript,IoLogoPython} from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiKotlin } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";

export function FeaturesSectionDemoLangs() {
  const features = [
   {
      title: "Java",
      description:
       "Proficient in Java, primarily used for backend development across multiple academic and personal projects.",
      icon: <FaJava />,
    },
    {
      title: "Javascript",
      description:
       "Skilled in JavaScript, utilized extensively in web development projects for both frontend and backend solutions.",
      icon: <IoLogoJavascript />,
    },
    {
      title: "Typescript",
      description:
        "Experienced with TypeScript for building scalable and maintainable web applications, especially in React-based projects.",
      icon: <BiLogoTypescript />,
    },
    {
      title: "Python",
      description:
         "Applied Python in the context of data science, machine learning, and automation tasks; currently expanding expertise in AI/ML.",
      icon: <IoLogoPython />,
    },
    {
      title: "PHP",
      description:  "Gained practical experience with PHP through university coursework and project-based web development.",
      icon: <FaPhp />,
    },
    {
      title: "Kotlin",
      description:  "Used Kotlin for native Android development, focusing on leveraging Android APIs for performance and integration.",
      icon: <SiKotlin />,
    },
    {
      title: "SQL",
      description: "Strong understanding of SQL, frequently applied in designing and querying relational databases for full-stack applications.",
      icon: <DiMysql />,
    },
    {
      title: "HTML5",
      description: "Well-versed in HTML5, used consistently in building responsive and accessible web interfaces.",
      icon: <FaHtml5 />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-400 text-5xl">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
