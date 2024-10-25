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
      <section id="about" className="w-full">
        <div className="flex flex-col w-full px-4 sm:px-12 lg:px-24  py-4 h-screen bg-about-section text-white">
          <h3 className="text-center text-4xl text-[#00A6FB]">About Me</h3>
        </div>
      </section>
    </div>
  );
}
