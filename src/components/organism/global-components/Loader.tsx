"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-[#0B1120] overflow-hidden z-[9999]">
      {/* Pulsing Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[40rem] h-[40rem] bg-indigo-600/20 rounded-full filter blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[20%] right-[20%] w-[40rem] h-[40rem] bg-teal-500/20 rounded-full filter blur-[150px] animate-[pulse_3s_ease-in-out_infinite]"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="loader"></div>
        <p className="mt-4 text-white font-bold text-2xl">
          Loading<span className="dots text-primary"></span>
        </p>
      </div>
    </div>
  );
}
