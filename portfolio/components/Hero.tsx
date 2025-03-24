import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Vortex } from "./ui/vortex";
import localFont from "next/font/local";
import { Cover } from "@/components/ui/cover";
import { Spotlight } from "./ui/Spotlight";
import { DirectionAwareHover } from "./ui/direction-aware-hover";

const SpaceMono = localFont({
  src: "../fonts/LibreCaslonText-Regular.ttf",
});

const Hero = () => {
  const words = ["Learning ", "Building", "Adapting", "Scaling", "Debugging"];
  return (
    <div>
    <div className="absolute top-0 left-0 flex justify-start items-start p-4 z-50">
      <img src="/logo.png" className="w-full md:h-20 h-10" />
    </div>
    <div>
      <div className="pb-20 pt-36 relative">
        <div className="relative z-10">
        <Spotlight
          className="top-10 -left-10 md:-top-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="-top-40 left-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight
          className="-top-28 left-80 h-[80vh] w-[50vw]"
          fill="blue"
        />

            <Vortex
              backgroundColor="black"
              rangeY={800}
              particleCount={50}
              baseHue={270}
              baseSpeed={0.1}
              rangeSpeed={0.1}
              className="flex items-start flex-col justify-between px-2 md:px-10  py-4 w-full h-full"
            >
              <div className="flex flex-col justify-center items-center md:justify-between md:items-center md:flex-row w-full">
                <div className="flex flex-col justify-center md:items-start items-center w-full h-full">
                  <h3 className="text-white text-2xl md:text-4xl font-bold text-center">
                    Hello, It's me
                  </h3>
                  <h2 className="text-white text-2xl md:text-6xl font-bold text-center mt-4">
                    Eshan Bhanuka
                  </h2>

                  <div className="text-white text-sm md:text-4xl mt-6">
                    <span>As a developer, I'm </span>
                    <Cover className=" ">
                      <FlipWords words={words} /> Fast
                    </Cover>
                  </div>
                </div>
                <div>
                  <DirectionAwareHover imageUrl="/Eshan.jpg">
                    <p className="font-bold text-xl">Eshan Bhanuka Silva</p>
                    <p className="font-normal text-sm">
                      Computer Science Undergraduate
                    </p>
                  </DirectionAwareHover>
                </div>
              </div>
            </Vortex>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
