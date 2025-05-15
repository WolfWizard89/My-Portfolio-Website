import { cn } from "@/lib/utils";
import { FaReact} from 'react-icons/fa';
import { IoLogoNodejs } from "react-icons/io5";
import { SiSpringboot, SiExpress } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative, TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";


export function FeaturesSectionDemoFrams() {
  const features = [
   {
      title: "React JS",
      description:
        "Core frontend library in my development toolkit, used extensively to build dynamic and responsive web applications.",
      icon: <FaReact />,
    },
    {
      title: "React Native",
      description: "Experienced in React Native for cross-platform mobile development. Developed Pause+, a productivity-focused mobile app.",
      icon: <TbBrandReactNative />,
    },
    {
      title: "Next JS",
      description:  "Skilled in Next.js for building performant, SEO-friendly web applications. This portfolio is developed using Next.js.",
      icon: <RiNextjsFill />,
    },
    {
      title: "Spring Boot",
      description:
         "Backend framework of choice for Java-based web applications. Utilized in multiple full-stack and academic projects.",
      icon: <SiSpringboot />,
    },
    {
      title: "Node JS",
      description:  "Used Node.js for backend development in several projects, including the API layer for this portfolio website.",
      icon: <IoLogoNodejs />,
    },
    {
      title: "Mongo DB",
      description:   "Currently exploring MongoDB and incorporating it into backend services for modern NoSQL data handling.",
      icon: <BiLogoMongodb />,
    },
    {
      title: "Express JS",
      description: "Proficient with Express.js for building RESTful APIs and server-side logic in Node.js environments.",
      icon: <SiExpress />,
    },
    {
      title: "Framer Motion",
      description: "Applied Framer Motion to create fluid, interactive UI animations that enhance user experience in web applications.",
      icon: <TbBrandFramerMotion />,
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
