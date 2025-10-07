"use client";
import React from "react";
import Button from "@/components/atoms/Button";
import {
  FaDownload,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";


const HeroSection = () => {
  return (
    <section id="jumbotron" className="w-screen min-h-screen bg-gradient-to-br from-white via-sky-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-35">
            {/* Main Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(135, 206, 235, 0.15) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(135, 206, 235, 0.15) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            ></div>
            
            {/* Accent Grid */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(135, 206, 235, 0.25) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(135, 206, 235, 0.25) 1px, transparent 1px)
                `,
                backgroundSize: "120px 120px",
              }}
            ></div>
                
            {/* Dot Pattern Overlay */}
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(135, 206, 235, 0.12) 1px, transparent 0)",
                backgroundSize: "60px 60px",
              }}
            ></div>
        </div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-sky-400 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-sky-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-12 bg-sky-200 rounded-full transform rotate-12"></div>
      <div className="relative flex flex-col gap-1 md:gap-2 max-w-7xl mx-auto w-full px-4 sm:px-12 lg:px-24 h-screen justify-center items-center">
          <h1 className="text-1xl md:text-2xl lg:text-4xl text-secondary pl-1">
            Hi, I&#39;m
          </h1>
          <h3 className="text-primary font-bold text-center text-4xl md:text-7xl lg:text-8xl pb-3">
            Aria <span className="text-secondary">Bagaswara</span>
          </h3>
          <h5 className="text-xl md:text-4xl lg:text-5xl text-secondary italic">
            <span className="text-primary">Front</span>end Developer
          </h5>
          <p className="mt-3 text-secondary text-xs md:text-sm text-center w-full md:w-3/4 lg:w-2/3">
            a passionate Frontend Developer who loves bringing ambitious digital ideas to life. I specialize in the modern React ecosystem, ensuring every project is delivered with clean code and great UX.
          </p>
          <div className="flex flex-row justify-center items-center">
            <div className="flex flex-col">
              <span className="text-primary text-xl md:text-2xl font-bold text-center">2+</span>
              <span className="text-secondary text-center text-xs md:text-sm">Years of Experience</span>
            </div>
            <div className="border-l-2 border-secondary h-8 mx-6"></div>
            <div className="flex flex-col">
              <span className="text-primary text-xl md:text-2xl font-bold text-center">10+</span>
              <span className="text-secondary text-center text-xs md:text-sm">Completed Projects</span>
            </div>
          </div>
          <div className="flex flex-row flex-wrap mt-3 gap-x-6 gap-y-4 justify-center items-center">
            <Button
              label="Download Resume"
              type="button"
              icon={<FaDownload/>}
              onClick={() => console.log("Button clicked")}
              iconPosition="left"
              className="flex items-center justify-center px-4 py-2 w-full md:w-fit bg-transparent text-primary font-semibold rounded-md hover:border-secondary hover:text-secondary disabled:bg-gray-400 disabled:cursor-not-allowed border-2 border-primary"
            />
            <div className="flex flex-row gap-4 items-center">
              <a
                href="https://www.linkedin.com/in/aria-bagaswara/"
                target="_blank"
                className="text-lg md:text-2xl"
              >
                <FaLinkedinIn className="text-primary hover:text-black" />
              </a>
              <a
                href="https://github.com/ariabagaswara23"
                target="_blank"
                className="text-lg md:text-2xl"
              >
                <FaGithub className="text-primary hover:text-black" />
              </a>
              <a
                href="https://www.instagram.com/aria.bagaswara/"
                target="_blank"
                className="text-lg md:text-2xl"
              >
                <FaInstagram className="text-primary hover:text-black" />
              </a>
            </div>
          </div>
      </div>
    </section>
  );
};

export default HeroSection;
