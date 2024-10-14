import Navbar from "@/components/organism/Navbar";
import Meteors from "@/components/ui/meteors";
import { IconCloud } from "@/components/ui/iconcloud";
// import { ChevronDownIcon } from "@radix-ui/react-icons";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "git",
  "vuedotjs",
];

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen w-full overflow-hidden relative bg-blurry-gradient bg-cover bg-center">
      <Navbar />
      <Meteors number={30} />
      {/* Scroll Down Icon */}
      {/* <div className="fixed bottom-5 flex justify-center w-full">
        <button className="bg-transparent hover:bg-[#00A6FB] p-2 rounded-full transition duration-300">
          <ChevronDownIcon className="text-white w-10" />
        </button>
      </div> */}
      <section id="jumbotron" className="w-full">
        <div className="flex flex-row w-full px-4 sm:px-12 lg:px-24 h-screen justify-between items-center">
          <div className="flex flex-col w-7/10">
            {" "}
            {/* Adjust width here */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-[#0582CA] pl-2">
              Hi,
            </h1>
            <h3 className="text-white text-7xl md:text-8xl lg:text-9xl">
              I&#39;m <span className="text-[#00A6FB] font-bold">Aria.</span>
            </h3>
            <h5 className="text-2xl md:text-3xl lg:text-4xl text-white pl-2 italic">
              Front End Developer
            </h5>
          </div>
          <div className="hidden sm:block w-3/10">
            {" "}
            {/* Adjust width here */}
            <IconCloud iconSlugs={slugs} />
          </div>
        </div>
      </section>
      <section id="about" className="w-full">
        <div className="flex flex-col w-full px-4 sm:px-12 lg:px-24  py-4 h-screen bg-about-section text-white">
          <h3 className="text-center text-4xl text-[#00A6FB]">About Me</h3>
        </div>
      </section>
    </div>
  );
}
