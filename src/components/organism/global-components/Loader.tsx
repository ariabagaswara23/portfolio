"use client";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-[9999]">
      <div className="loader"></div>
      <p className="mt-4 text-secondary font-bold text-2xl">
        Loading<span className="dots text-primary"></span>
      </p>
    </div>
  );
}
