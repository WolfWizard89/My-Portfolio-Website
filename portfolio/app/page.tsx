import Hero from "@/components/Hero";
import Exprerience from "@/components/Experience";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import Project from "@/components/Project";
import Approch from "@/components/Approch";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { FaHome, FaMedapps} from "react-icons/fa";
import { SiFramework } from "react-icons/si";
import { VscProject } from "react-icons/vsc";
import { RiContactsFill } from "react-icons/ri";

export default function Home() {
  return (
    <main>
      <FloatingNav
      navItems={[
        { name: "Home", link: "#Hero", icon: <FaHome /> },
        { name: "FrameWorks", link: "#FrameWorks", icon: <SiFramework /> },
        { name: "Projects", link: "#Projects", icon: <VscProject /> },
        { name: "Approch", link: "#Approch", icon: <FaMedapps /> },
        { name: "Contact", link: "#Contact", icon: <RiContactsFill /> },
        
      ]}
      />
      <div id="Home" className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <Hero />
        
        <div className="h-[40rem] flex items-center justify-center ">
          <TextHoverEffect text="Wolf Wizard" automatic={true} />
        </div>
      </div>
      <div id="FrameWorks" className="relative bg-black flex justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
          <Exprerience />
      </div>
      <div  id="Projects" className="relative bg-black flex justify-center flex-col ">
        <Project />
      </div>
      <div  id="Approch" className="relative bg-black flex justify-center flex-col">
        <Approch />
      </div></div>
      <div  id="Contact" className="relative bg-black flex justify-center flex-col mt-5">
        <Footer />
      </div>
    </main>
  );
}
