import Navbar from "@/components/organism/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-row w-full px-8 h-screen items-center bg-blurry-gradient bg-cover bg-center">
        <div className="flex flex-col">
          <h1 className="text-6xl text-[#0582CA] pl-2">Hi,</h1>
          <h3 className="text-white text-9xl">
            I&#39;m <span className="text-[#00A6FB]">Aria.</span>
          </h3>
          <h5 className="text-4xl text-white pl-2 italic">
            Front End Developer
          </h5>
        </div>
      </div>
    </div>
  );
}
