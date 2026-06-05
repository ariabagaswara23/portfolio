"use client";

import React from "react";
import AnimatedContent from "../AnimatedContent";

const experiences = [
  {
    company: "Motiolabs Digital Indonesia",
    location: "Bandung, Indonesia",
    role: "Frontend Developer",
    period: "March 2023 — September 2025",
    responsibilities: [
      "Developed 3-5 critical new major features for the PosAja UMKM project, simultaneously managing bug fixing to reduce feature-specific errors by 25%.",
      "Redesigned the UI of the Landing Page and Product Detail pages for the Mudakerja project using Next.js and Typescript.",
      "Optimized the UI and frontend logic of the Laravel monolith (SimakLearnhub Assessment). Delivered 5+ minor features and successfully eliminated recurrent UI/UX bugs, improving user flow consistency.",
      "Contributed to the frontend development for the LearnHub SaaS platform over 8 months, developing 8+ features across the Marketing Site and Dashboard. Utilized Next.js, TypeScript, and Tailwind CSS to improve component reusability by 20% within the team's codebase.",
      "Contributed to the frontend development for the myDigiLearn SaaS platform for 1 year, developing 10+ features across the Marketing Site and Dashboard. Utilized Vue 3 and Tailwind CSS to optimize component rendering speed by 15% and ensure adherence to best practices.",
    ],
  },
  {
    company: "SampulKreativ Technology",
    location: "Cimahi, Indonesia",
    role: "Junior Web Developer",
    period: "December 2021 — August 2022",
    responsibilities: [
      "Contributed to the UI development of the Komite Penggerak Pariwisata Jawa Barat website. Integrated UI components with the existing Ruby on Rails monolith backend, improving page load time by 10% and ensuring full responsiveness.",
      "Maintained and stabilized the Core Dashboard UI of the WhatsDoc platform over 5 months. Resolved the majority of reported bugs and implemented minor UI updates to improve data readability and user interaction flow.",
      "Engineered the UI and core logic for key features of the Hubin App (Hubungan Industri) for SMK Negeri 1 Cimahi. Utilized Laravel (monolith) and Bootstrap 5 to digitalize the internship application system, reducing the time and effort for students to apply for internships by an estimated 40%.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="w-full min-h-screen relative bg-[#0B1120] flex flex-col justify-center overflow-hidden py-20"
    >
      {/* Ambient background glows for smooth transition */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] right-1/4 w-[40rem] h-[40rem] bg-indigo-600 rounded-full mix-blend-screen filter blur-[150px] opacity-[0.08]"></div>
        <div className="absolute bottom-[10%] left-1/4 w-[30rem] h-[30rem] bg-teal-500 rounded-full mix-blend-screen filter blur-[120px] opacity-[0.05]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-12 lg:px-24">
        <h2 className="text-center font-bold text-4xl md:text-5xl lg:text-6xl py-3 mx-0 mb-12 bg-gradient-to-r from-[#003757] via-[#00a2fa] to-[#003757] bg-clip-text text-transparent cursor-default">
          Work Experience.
        </h2>

        <div className="relative border-l-2 border-primary/30 ml-3 md:ml-6">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-10 ml-8 md:ml-12 relative">
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-[#0B1120] border-4 border-primary"></span>
              <AnimatedContent
                distance={100}
                direction="vertical"
                reverse={false}
                duration={0.8}
                ease="power3.out"
                initialOpacity={0.2}
                animateOpacity
                scale={1}
                threshold={0.2}
              >
                <div className="bg-custom-glass p-6 md:p-8 rounded-lg shadow-lg">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-primary">
                        {exp.role}
                      </h3>
                      <h4 className="text-lg text-white font-semibold mt-1">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="text-left md:text-right mt-2 md:mt-0">
                      <p className="text-sm md:text-base text-gray-300 font-medium">
                        {exp.period}
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        {exp.location}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc ml-5 space-y-2 text-sm md:text-base text-gray-300">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContent>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
