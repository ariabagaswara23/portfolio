"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/organism/global-components/Loader";
import FooterSection from "@/components/organism/FooterSection";
import Navbar from "@/components/organism/global-components/Navbar";
import HeroSection from "@/components/organism/HeroSection";
import ProjectsSection from "@/components/organism/ProjectsSection";
import ServicesSection from "@/components/organism/ServicesSection";
import ExperienceSection from "@/components/organism/ExperienceSection";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Step 1: Keep loader for 2.5s, then start fade-out animation
    const timer1 = setTimeout(() => setFadeOut(true), 2500);

    // Step 2: Fully hide loader after fade-out completes (0.5s)
    const timer2 = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden relative bg-[#0B1120]">
      {/* Loader with smooth fade out */}
      {loading && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <Loader />
        </div>
      )}

      {/* Page Sections with smooth fade-in */}
      <div
        className={`transition-all duration-700 ease-out ${
          loading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      >
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <ExperienceSection />
        <ProjectsSection />
        <FooterSection />
      </div>
    </div>
  );
}
