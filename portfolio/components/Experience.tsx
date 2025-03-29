import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FeaturesSectionDemo } from "./ui/FeaturesSectionDemo";
import { FaCloudflare } from "react-icons/fa6";
import { SiClerk } from "react-icons/si";
import { RiSupabaseFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";
import { Bs1CircleFill } from "react-icons/bs";
import { PiLetterCircleHDuotone } from "react-icons/pi";

const Experience = () => {
  return (
    <div>
      <div className="flex justify-start items-start m-4 ">
        <TextGenerateEffect words="Languages & Frameworks:" />
      </div>
      <div className="mt-5">
        <FeaturesSectionDemo />
      </div>
      <div className="flex justify-center items-center flex-col mt-3">
        <h3 className="text-2xl">Other Platforms</h3>
      </div>
      <div className="flex flex-row justify-center items-center mt-5 gap-5 mb-5">
        <div className="flex flex-col justify-center items-center">
          <FaCloudflare className="mb-1 relative text-neutral-600 dark:text-neutral-400 text-5xl text-center" />
          <p className="text-lg text-neutral-600">Cloudflare</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <SiClerk className="mb-1 relative text-neutral-600 dark:text-neutral-400 text-5xl text-center" />
          <p className="text-lg text-neutral-600">Clerk</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <RiSupabaseFill className="mb-1 relative text-neutral-600 dark:text-neutral-400 text-5xl text-center" />
          <p className="text-lg text-neutral-600">Supabase</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <IoLogoFirebase className="mb-1 relative text-neutral-600 dark:text-neutral-400 text-5xl text-center" />
          <p className="text-lg text-neutral-600">Firebase</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Bs1CircleFill className="mb-1 relative text-neutral-600 dark:text-neutral-400 text-5xl text-center" />
          <p className="text-lg text-neutral-600">Onesignal</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <PiLetterCircleHDuotone className="mb-1 relative text-neutral-600 dark:text-neutral-400 text-5xl text-center" />
          <p className="text-lg text-neutral-600">Hostinger</p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
