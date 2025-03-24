"use client";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

import { FaJava, FaPhp ,FaReact} from 'react-icons/fa';
import { IoLogoJavascript,IoLogoPython, IoLogoNodejs } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiSpringboot, SiKotlin } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { BiLogoMongodb } from "react-icons/bi";


export function FeaturesSectionDemo() {
  const features = [
    {
      title: "Java",
      description:
        "For backend development, I learnt Java. Used it in many projects.",
      icon: <FaJava />,
    },
    {
      title: "Javascript",
      description:
        "Javascript is one of my favourite languages. Used it in many projects.",
      icon: <IoLogoJavascript />,
    },
    {
      title: "Python",
      description:
        "Learned Python for AI and ML. Still learning about AI and ML and working on it.",
      icon: <IoLogoPython />,
    },
    {
      title: "SQL",
      description: "Used SQL in many projects. I am a pro in SQL I guess.",
      icon: <DiMysql />,
    },
    {
      title: "PHP",
      description: "PHP is one of the languages I learnt in my university. Worked on couple of projects.",
      icon: <FaPhp />,
    },
    {
      title: "React JS",
      description:
        "The foundation of my frontend development. Goated framework.",
      icon: <FaReact />,
    },
    {
      title: "Spring Boot",
      description:
        "The goated framework for backend development. Used it in many projects.",
      icon: <SiSpringboot />,
    },
    {
      title: "Next JS",
      description: "Even this website is built using Next JS. After learning React JS, I moved to Next JS.",
      icon: <RiNextjsFill />,
    },
    {
      title: "Kotlin",
      description: "Learned Kotlin for Android development. Especially for controll native android apis.",
      icon: <SiKotlin />,
    },
    {
      title: "React Native",
      description: "Another goated framework for mobile development. Created a app called Pause+ and it is one of my best projects.",
      icon: <TbBrandReactNative />,
    },
    {
      title: "Mongo DB",
      description: "New to Mongo DB. Currently learning about it.",
      icon: <BiLogoMongodb />,
    },
    {
      title: "Node JS",
      description: "Node JS is the backend of this website. Used it in many projects.",
      icon: <IoLogoNodejs />,
    },
    
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6  relative z-10 py-10 max-w-8xl mx-auto">
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
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 6) && "lg:border-l dark:border-neutral-800",
        index < 6 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 6 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 6 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400 text-5xl">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
