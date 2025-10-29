import FooterSection from "@/components/organism/FooterSection";
import Navbar from "@/components/organism/global-components/Navbar";
import HeroSection from "@/components/organism/HeroSection";
import ProjectsSection from "@/components/organism/ProjectsSection";
import ServicesSection from "@/components/organism/ServicesSection";

// import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden relative bg-gradient-to-br from-white via-sky-50 to-white">
      {/* Global Background Layer */}
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
      {/* Page Sections */}
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <FooterSection />
    </div>
  );
}
