"use client";
import React from "react";
import { IconCloud } from "@/components/ui/iconcloud";
import Button from "@/components/atoms/Button";
import {
  FaDownload,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "git",
  "vuedotjs",
];

const HeroSection = () => {
  return (
    <section id="jumbotron" className="w-full flex flex-col">
      <div className="flex flex-row w-full px-4 sm:px-12 lg:px-24 h-screen justify-between items-center">
        <div className="flex flex-col grow">
          {" "}
          {/* Adjust width here */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0582CA] pl-1">
            Hi,
          </h1>
          <h3 className="text-white text-7xl md:text-8xl lg:text-9xl">
            I&#39;m <span className="text-[#00A6FB] font-bold">Aria.</span>
          </h3>
          <h5 className="text-2xl md:text-3xl lg:text-4xl text-white pl-2 italic">
            Front End Developer
          </h5>
          <p className="mt-3 pl-2 text-white">
            with 2 years of experience, specializing in building responsive,
            user-friendly web applications using React, JavaScript, and modern
            front-end technologies. Passionate about creating clean, efficient
            code and enhancing user experiences.
          </p>
          <div className="flex flex-row flex-wrap mt-6 pl-2 gap-x-6 gap-y-4">
            <Button
              label="Download Resume"
              type="button"
              icon={<FaDownload className="text-[#00A6FB]" />}
              onClick={() => console.log("Button clicked")}
              iconPosition="left"
              className="flex items-center justify-center px-4 py-2 bg-transparent text-white font-semibold rounded-md hover:border-[#003554] hover:text-white disabled:bg-gray-400 disabled:cursor-not-allowed border-2 border-[#00A6FB]"
            />
            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/aria-bagaswara/"
                target="_blank"
                className="text-2xl"
              >
                <FaLinkedinIn className="text-[#00A6FB]" />
              </a>
              <a
                href="https://github.com/ariabagaswara23"
                target="_blank"
                className="text-2xl"
              >
                <FaGithub className="text-[#00A6FB]" />
              </a>
              <a
                href="https://www.instagram.com/aria.bagaswara/"
                target="_blank"
                className="text-2xl"
              >
                <FaInstagram className="text-[#00A6FB]" />
              </a>
            </div>
          </div>
        </div>
        <div className="hidden sm:block w-full">
          {" "}
          {/* Adjust width here */}
          <IconCloud iconSlugs={slugs} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
