import AboutSection from "@/components/organism/AboutSection";
import Navbar from "@/components/organism/global-components/Navbar";
import HeroSection from "@/components/organism/HeroSection";
import Meteors from "@/components/ui/meteors";

// import { ChevronDownIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden relative bg-blurry-gradient bg-cover bg-center">
      <Navbar />
      <Meteors number={30} />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
