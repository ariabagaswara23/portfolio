"use client";

import React from "react";
import GradientText from "../GradientText";
import Image from "next/image";

const ProjectsSection = () => {
  return (
    <section id="projects" className="w-full flex flex-col min-h-screen bg-secondary">
      <div className="absolute inset-0 opacity-35">
        {/* Top-left ellipse */}
        <div className="absolute top-2/4 left-3/4 w-10 h-6 border-2 border-sky-300 rounded-full animate-bounce"></div>
        {/* Bottom-right square */}
        <div className="absolute bottom-16 right-24 w-4 h-4 bg-sky-200 transform rotate-12 animate-pulse"></div>

        {/* Bottom floating line */}
        <div className="absolute bottom-12 left-1/2 w-24 h-[2px] bg-sky-300 animate-pulse"></div>
      </div>
      <div className="px-4 sm:px-12 lg:px-24 py-10 ">
        <GradientText
          colors={["#ffffff", "#00a2fa", "#ffffff"]}
          animationSpeed={10}
          showBorder={false}
          className="text-start font-bold text-4xl md:text-5xl lg:text-6xl py-3 cursor-default mx-0 bg-transparent"
        >
          Projects.
        </GradientText>
        {/* <div className="flex flex-row w-full px-4 sm:px-12 lg:px-24  py-4 h-screen text-white">
          
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {Array.from({ length: 3 }).map((_, idx) => (
            <div
            // onClick={() => window.open(link, "_blank")}
            className="group cursor-pointer rounded-xl overflow-hidden shadow-lg z-10 bg-[#003757] text-white transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="relative w-full h-48 overflow-hidden">
              <img
                src={
                  "https://slickdeals.net/blog/wp-content/uploads/2020/03/20-hero-dell-remote-work-3.jpg"
                }
                alt={"tes"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 border-b-primary border-b-4"
              />
            </div>

            <div className="p-5 space-y-3">
              <h3 className="text-xl font-semibold group-hover:text-[#00a2fa] transition-colors duration-300">
                Tes
              </h3>
              <p className="text-sm text-gray-200">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Impedit, ea modi! Ab quibusdam officiis libero vitae voluptas
                quas inventore ipsam.
              </p>

              <div className="flex flex-wrap gap-2 pt-2">
                <span
                  key={"1"}
                  className="text-xs bg-[#00a2fa]/20 border border-[#00a2fa]/40 text-[#00a2fa] px-2 py-1 rounded-full"
                >
                  Next.js
                </span>
              </div>
            </div>
          </div>
          ))}    
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
