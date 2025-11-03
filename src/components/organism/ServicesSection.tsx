"use client";
import React from "react";
import { FaLaptopCode, FaPalette, FaPlug } from "react-icons/fa";
import AnimatedContent from "../AnimatedContent";

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="w-full min-h-screen relative bg-service-section"
    >
      <h2 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl py-3 mx-0 mb-3 bg-gradient-to-r from-[#003757] via-[#00a2fa] to-[#003757] bg-clip-text text-transparent cursor-default">
        What I Offer.
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center max-w-7xl mx-auto w-full px-4 sm:px-12 lg:px-24 py-6">
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.2}
        >
          <div className="flex flex-col w-full items-center bg-custom-glass p-6 rounded-lg shadow-lg">
            <FaLaptopCode size={48} className="mb-4 text-secondary" />
            <h3 className="text-base lg:text-xl text-primary font-bold mb-2">
              Web Development
            </h3>
            <p className="text-xs lg:text-sm text-center text-secondary">
              {" "}
              Building responsive and dynamic websites using modern technologies
              like React, Next.js, and TailwindCSS.
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.2}
        >
          <div className="flex flex-col w-full items-center bg-custom-glass p-6 rounded-lg shadow-lg">
            <FaPalette size={48} className="mb-4 text-secondary" />
            <h3 className="text-base lg:text-xl text-primary font-bold mb-2">
              UI/UX Implementation
            </h3>
            <p className="text-xs lg:text-sm text-center text-secondary">
              {" "}
              Improving site loading speed, minimizing bundle size, and
              optimizing images, fonts, and assets for better user experience.
            </p>
          </div>
        </AnimatedContent>
        <AnimatedContent
          distance={200}
          direction="vertical"
          reverse={false}
          duration={1}
          ease="power3.out"
          initialOpacity={0.2}
          animateOpacity
          scale={1}
          threshold={0.2}
        >
          <div className="flex flex-col w-full items-center bg-custom-glass p-6 rounded-lg shadow-lg">
            <FaPlug size={48} className="mb-4 text-secondary" />
            <h3 className="text-base lg:text-xl text-primary font-bold mb-2">
              API Integration
            </h3>
            <p className="text-xs lg:text-sm text-center text-secondary">
              {" "}
              Seamlessly connecting frontend applications with RESTful APIs to
              deliver dynamic and interactive user experiences.
            </p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
};

export default ServicesSection;
