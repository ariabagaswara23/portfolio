"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/organism/global-components/Loader";
import FooterSection from "@/components/organism/FooterSection";
import Navbar from "@/components/organism/global-components/Navbar";
import HeroSection from "@/components/organism/HeroSection";
import ProjectsSection from "@/components/organism/ProjectsSection";
import ServicesSection from "@/components/organism/ServicesSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // show loader for 2s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />; // <-- loader shown first render

  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-white via-sky-50 to-white">
      {/* Background Layer */}
      <div className="absolute inset-0 opacity-35">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(135, 206, 235, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(135, 206, 235, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(135, 206, 235, 0.25) 1px, transparent 1px),
              linear-gradient(90deg, rgba(135, 206, 235, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "120px 120px",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(135, 206, 235, 0.12) 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Page Sections */}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
