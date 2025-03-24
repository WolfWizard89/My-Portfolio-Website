import React from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FeaturesSectionDemo } from "./ui/FeaturesSectionDemo";

const Experience = () => {
  return (
    <div>
      <div className="flex justify-start items-start m-4 ">
        <TextGenerateEffect words="Languages & Frameworks:" />
      </div>
      <div className="mt-5">
        <FeaturesSectionDemo />
      </div>
    </div>
  );
};

export default Experience;
