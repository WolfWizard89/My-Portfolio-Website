import Hero from "@/components/Hero";
import Exprerience from "@/components/Experience";
import Image from "next/image";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { tree } from "next/dist/build/templates/app-page";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main>
      <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
        </div>
        <div className="h-[40rem] flex items-center justify-center ">
          <TextHoverEffect text="Wolf Wizard" automatic={true} />
        </div>
      </div>
      <div className="relative bg-black flex justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <Exprerience />
      </div>
      <div className="relative bg-black flex justify-center flex-col ">
        <Project />
      </div>
    </main>
  );
}
