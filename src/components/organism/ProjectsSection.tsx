"use client";

import React from "react";
import GradientText from "../GradientText";
import FlippableCard from "../atoms/FlippableCard";
import AnimatedContent from "../AnimatedContent";

const projects = [
  {
    image: "/images/posaja.png",
    title: "PosAja UMKM",
    description:
      "A digital platform by Pos Indonesia designed to digitize and support Micro, Small, and Medium Enterprises (MSMEs).",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Tanstack Query",
      "Axios",
      "Yup",
    ],
    link: "https://posaja.id/",
    year: "2025",
    color: "#162691",
  },
  {
    image: "/images/mydigilearn.png",
    title: "myDigiLearn",
    description:
      "Corporate E-Learning solution that provides employees with a complete and organized learning program.",
    techStack: ["Vue.js", "Vite", "TailwindCSS", "Pinia", "Axios", "Firebase"],
    link: "https://mydigilearn.id/",
    year: "2023",
    color: "#DA4A4A",
  },
  {
    image: "/images/learnhub.png",
    title: "LearnHub",
    description:
      "Learnhub is a website builder for content creators, institutions, foundations, organizations and communities to create their own academies without many tools and without coding.",
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Tanstack Query",
      "Axios",
      "Zod",
    ],
    link: "https://learnhub.id/",
    year: "2024",
    color: "#9957ec",
  },
  {
    image: "/images/mudakerja.png",
    title: "MudaKerja",
    description: "E-Learning platform for hospitality training.",
    techStack: ["React", "Next.js", "TypeScript", "TailwindCSS", "Zod"],
    link: "https://www.mudakerja.com/",
    year: "2025",
    color: "#115198",
  },
  {
    image: "/images/hms_itb_2023.png",
    title: "HMS ITB 2023",
    description:
      "A voting website for the election of the chairman of the HMS ITB organization in 2023.",
    techStack: ["React", "Vite", "TailwindCSS", "Axios"],
    link: "https://github.com/linxtstudio/hms-election",
    year: "2023",
    color: "#D97522",
  },
  // {
  //   image: "/images/covid19web.png",
  //   title: "Covid 19 Stats Website",
  //   description:
  //     "Simple website to view Covid 19 statistics in various provincies in Indonesia.",
  //   techStack: ["Next.js", "TypeScript", "TailwindCSS", "React Query"],
  //   link: "https://learnhub.id/",
  //   year: "2020",
  // },
  {
    image: "/images/foodeez.png",
    title: "Foodeez",
    description:
      "Simple website showcasing core e-commerce functions: food listing, Add to Cart, cart management, and total price calculation.",
    techStack: ["Vue.js", "Webpack", "Vuex", "Sass (SCSS)", "PostCSS", "Axios"],
    link: "http://foodeez-two.vercel.app/",
    year: "2022",
    color: "#519259",
  },
];

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="relative w-full flex flex-col min-h-screen bg-secondary z-20"
    >
      {/* decorative background */}
      <div className="absolute inset-0 -z-10">
        {/* Top-left ellipse */}
        <div className="absolute top-0 left-3/4 w-10 h-6 border-2 border-sky-300 rounded-full animate-bounce"></div>

        {/* Bottom-right square */}
        <div className="absolute top-64 right-10 w-4 h-4 bg-sky-200 transform rotate-12 animate-pulse"></div>

        {/* Bottom floating line */}
        <div className="absolute top-3/4 left-24 w-4 h-4 bg-sky-300 rotate-45 animate-pulse"></div>

        <div className="absolute top-20 -left-20 opacity-40 pointer-events-none select-none">
          <img
            src="/pattern/pattern-2.svg"
            alt="decorative background pattern"
            className="w-[280px] md:w-[400px] lg:w-[500px] animate-float-slow"
          />
        </div>

        {/* Pattern image */}
        <div className="absolute bottom-0 -right-20 opacity-40 pointer-events-none select-none">
          <img
            src="/pattern/pattern-1.svg"
            alt="decorative background pattern"
            className="w-[280px] md:w-[400px] lg:w-[500px] animate-float-slow"
          />
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 py-10 mb-6 ">
        <h2 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl py-3 mx-0 mb-3 bg-gradient-to-r from-white via-[#00a2fa] to-white bg-clip-text text-transparent cursor-default">
          Selected Projects.
        </h2>
        <p className="text-center text-white mb-6">
          Click card to see the detail
        </p>
        {/* <div className="flex flex-row w-full px-4 sm:px-12 lg:px-24  py-4 h-screen text-white">
          
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {projects.map((project, index) => (
            // <ProjectCard key={index} {...project} />
            <AnimatedContent
              key={index}
              distance={200}
              direction="vertical"
              reverse={false}
              duration={1}
              ease="power3.out"
              initialOpacity={0.2}
              animateOpacity
              scale={1}
              threshold={0.1}
            >
              <FlippableCard key={index} {...project} flipOn="click" />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
