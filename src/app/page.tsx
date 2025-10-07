import AboutSection from "@/components/organism/AboutSection";
import Navbar from "@/components/organism/global-components/Navbar";
import HeroSection from "@/components/organism/HeroSection";

// import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden relative">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
