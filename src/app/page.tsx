import FooterSection from "@/components/organism/FooterSection";
import Navbar from "@/components/organism/global-components/Navbar";
import HeroSection from "@/components/organism/HeroSection";
import ProjectsSection from "@/components/organism/ProjectsSection";
import ServicesSection from "@/components/organism/ServicesSection";
import ExperienceSection from "@/components/organism/ExperienceSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden relative bg-[#0B1120]">
      {/* Page Sections */}
      <div className="transition-all duration-700 ease-out opacity-100 scale-100">
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
