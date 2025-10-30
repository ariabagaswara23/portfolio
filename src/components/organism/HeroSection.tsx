"use client";
import React from "react";
import Button from "@/components/atoms/Button";
import {
  FaDownload,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import SplitText from "../SplitText";
import BlurText from "../BlurText";
import CountUp from "../CountUp";

const HeroSection = () => {
  return (
    <section
      id="jumbotron"
      className="w-screen min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-35">
        {/* Floating Shapes */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-sky-400 transform rotate-45 animate-pulse"></div>
        <div className="absolute top-1/2 right-1/4 w-6 h-6 border-2 border-sky-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/4 w-3 h-12 bg-sky-200 rounded-full transform rotate-12"></div>
      </div>
      <div className="relative flex flex-col z-10 gap-1 md:gap-2 max-w-7xl mx-auto w-full px-4 sm:px-12 lg:px-24 h-screen justify-center items-center">
        <SplitText
          text={"Hi, I'm"}
          className="text-1xl md:text-2xl lg:text-4xl text-secondary"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
        <div className="flex flex-row flex-wrap gap-1 md:gap-2 lg:gap-3 justify-center items-center text-4xl md:text-7xl lg:text-8xl font-bold pb-3">
          <BlurText
            text="Aria"
            delay={1000}
            animateBy="words"
            direction="top"
            className="text-primary"
          />
          <BlurText
            text="Bagaswara"
            delay={1000}
            animateBy="words"
            direction="top"
            className="text-secondary"
          />
        </div>

        <h5 className="text-xl md:text-4xl lg:text-5xl text-secondary italic">
          <span className="text-primary">Front</span>end Developer
        </h5>
        <p className="mt-3 text-secondary text-xs md:text-sm text-center w-full md:w-3/4 lg:w-2/3">
          a passionate Frontend Developer who loves bringing ambitious digital
          ideas to life. I specialize in the modern React ecosystem, ensuring
          every project is delivered with clean code and great UX.
        </p>
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col">
            <CountUp
              from={0}
              to={2}
              separator=","
              direction="up"
              duration={1}
              className="text-primary text-xl md:text-2xl font-bold text-center"
            />
            <span className="text-secondary text-center text-xs md:text-sm">
              Years of Experience
            </span>
          </div>
          <div className="border-l-2 border-secondary h-8 mx-6"></div>
          <div className="flex flex-col">
            <CountUp
              from={0}
              to={6}
              separator=","
              direction="up"
              duration={5}
              className="text-primary text-xl md:text-2xl font-bold text-center"
            />
            <span className="text-secondary text-center text-xs md:text-sm">
              Completed Projects
            </span>
          </div>
        </div>
        <div className="flex flex-row flex-wrap mt-3 gap-x-6 gap-y-4 justify-center items-center">
          <Button
            label="Download Resume"
            type="button"
            icon={<FaDownload />}
            onClick={() =>
              window.open(
                process.env.NEXT_PUBLIC_CV_LINK || "",
                "_blank",
                "noopener,noreferrer"
              )
            }
            iconPosition="left"
            className="flex items-center justify-center px-4 py-2 w-full md:w-fit bg-secondary text-white font-semibold rounded-md hover:text-primary disabled:bg-gray-400 disabled:cursor-not-allowed"
          />
          <div className="flex flex-row gap-4 items-center">
            <a
              href="https://www.linkedin.com/in/aria-bagaswara/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl"
            >
              <FaLinkedinIn className="text-primary hover:text-black" />
            </a>
            <a
              href="https://github.com/ariabagaswara23"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg md:text-2xl"
            >
              <FaGithub className="text-primary hover:text-black" />
            </a>
            <a
              href="https://www.instagram.com/aria.bagaswara/"
              target="_blank"
              rel="noopener noreferrer"
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
