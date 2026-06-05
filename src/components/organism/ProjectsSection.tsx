"use client";

import React from "react";
import ProjectCard from "../atoms/ProjectCard";
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
      className="relative w-full flex flex-col min-h-screen bg-[#0B1120] z-20"
    >
      {/* Elegant Glassmorphism Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[10%] -left-[10%] w-[30rem] h-[30rem] bg-indigo-600/30 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[20%] -right-[10%] w-[40rem] h-[40rem] bg-primary/20 rounded-full filter blur-[150px]"></div>
        <div className="absolute top-[50%] left-[30%] w-[20rem] h-[20rem] bg-teal-500/20 rounded-full filter blur-[120px]"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 py-10 my-10 ">
        <h2 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl py-3 mx-0 mb-3 bg-gradient-to-r from-white via-[#00a2fa] to-white bg-clip-text text-transparent cursor-default">
          Selected Projects.
        </h2>
        {/* <div className="flex flex-row w-full px-4 sm:px-12 lg:px-24  py-4 h-screen text-white">
          
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {projects.map((project, index) => (
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
              <ProjectCard {...project} />
            </AnimatedContent>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
