import React from "react";

import { cn } from "@/lib/utils";
import { Boxes } from "./ui/background-boxes";
import { FaFacebookSquare, FaInstagram, FaLinkedin,FaGithub,FaSpotify } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="h-96 relative w-full overflow-hidden bg-black flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-black  z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Contact me
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          ebbhanuka@gmail.com | eshan.20232120@iit.ac.lk
        </p>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          TP: +94761619282
        </p>
        <div className=" flex flex-row justify-center items-center mt-10 gap-5">
                            <a
                              href="https://www.facebook.com/wolfwizard.11/"
                              target="_blank"
                              className="mb-4 relative text-neutral-600 dark:text-neutral-400 "
                            >
                              <FaFacebookSquare className="text-4xl" />
                            </a>
                            <a
                              href="https://www.instagram.com/wolfwizard_/"
                              target="_blank"
                              className="mb-4 relative text-neutral-600 dark:text-neutral-400 "
                            >
                              <FaInstagram className="text-4xl" />
                            </a>
                            <a
                              href="https://www.linkedin.com/in/eshan-bhanuka-5b80b8192/"
                              target="_blank"
                              className="mb-4 relative text-neutral-600 dark:text-neutral-400 "
                            >
                              <FaLinkedin className="text-4xl" />
                            </a>
                            <a
                              href="https://github.com/WolfWizard89"
                              target="_blank"
                              className="mb-4 relative text-neutral-600 dark:text-neutral-400 "
                            >
                              <FaGithub className="text-4xl" />
                            </a>
                            <a
                              href="https://open.spotify.com/user/cob7xkhnkhkvkplef82x4np00"
                              target="_blank"
                              className="mb-4 relative text-neutral-600 dark:text-neutral-400 "
                            >
                              <FaSpotify className="text-4xl" />
                            </a>
                          </div>
        <p className="text-center text-neutral-300 absolute bottom-4 z-20">
          All rights reserved &copy; 2024-2025 Wolf-Wizard
        </p>
      </div>
    </div>
  );
};

export default Footer;
