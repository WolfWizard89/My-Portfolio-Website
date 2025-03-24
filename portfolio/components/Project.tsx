import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const Project = () => {
  return (
    <div>
      <div className="flex justify-start items-start m-4">
        <TextGenerateEffect words="Projects:" />
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center bg-black ">
        <div className="h-auto w-full flex justify-center gap-4 p-4 flex-wrap flex-col-4">
          <div className="m-8">
            <PinContainer
              title="pauseplus.click"
              href="http://pauseplus.click/"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Pause+ (Ongoing)
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    A social media detox app that helps you to take a break from
                    the digital world.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/pause.png"
                    alt="aceternity"
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="m-8">
            <PinContainer
              title="Github Repo"
              href="https://github.com/WolfWizard89/Horizon-Homes"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Horizon Homes
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Real estate website that lets users search, filter, view
                    property listings with details.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/homes.png"
                    alt="aceternity"
                    className="w-full h-full object-cover rounded-lg bg-white"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="m-8">
            <PinContainer
              title="Github Repo"
              href="https://github.com/WolfWizard89/Pause_Plus_WebSite"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Pause+ Website
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Marketing website for the Pause+ app. Build with Next.js and
                    Tailwind CSS.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/pause-web.png"
                    alt="aceternity"
                    className="w-full h-full object-cover rounded-lg bg-white"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="m-8">
            <PinContainer
              title="Github Repo"
              href="https://github.com/WolfWizard89/Plane-Ticket-Management-System"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Plane Ticket Management System
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Java program for book seats, cancellation, tracks sales,
                    prints tickets and setup seating.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/Plane.jpg"
                    alt="aceternity"
                    className="w-full h-full object-cover rounded-lg bg-white"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
        <div className="h-auto w-full flex justify-center gap-4 p-4 flex-wrap flex-col-4">
          <div className="m-8">
            <PinContainer
              title="Github Repo"
              href="https://github.com/WolfWizard89/Real-Time-Event-Ticketing-System"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Real Time Event Ticketing System
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    Real-time event ticketing system using a multi-threaded
                    producer-consumer model. Vendors release tickets and
                    customers purchasing simulator.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/ticket.jpg"
                    alt="aceternity"
                    className="w-full h-full object-cover rounded-lg bg-white"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="m-8">
            <PinContainer
              title="Github Repo"
              href="https://github.com/WolfWizard89/Student-Grading-System"
            >
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Student Grading System
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    A Python program that classifies student progression and
                    visualizes results with a histogram
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/grade.jpg"
                    alt="aceternity"
                    className="w-full h-full object-cover rounded-lg bg-white"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
          <div className="m-8">
            <PinContainer title="Private & Confidential" href="/">
              <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem] ">
                <h3 className="max-w-xs !pb-2 !m-0 font-bold  text-base text-slate-100">
                  Sentinel Lock (Ongoing | Private)
                </h3>
                <div className="text-base !m-0 !p-0 font-normal">
                  <span className="text-slate-500 ">
                    advanced secondary AI-powered drone system designed to lock
                    onto targets with precision while intelligently bypassing
                    countermeasures for enhanced mission effectiveness.
                  </span>
                </div>
                <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden">
                  <img
                    src="/drone.jpeg"
                    alt="aceternity"
                    className="w-full h-full object-cover rounded-lg bg-white"
                  />
                </div>
              </div>
            </PinContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
