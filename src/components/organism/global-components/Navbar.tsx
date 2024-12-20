"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk membuka/menutup menu
  const [scrolling, setScrolling] = useState(false); // State untuk mengatur efek scroll
  const router = useRouter();
  const pathname = usePathname(); // Get current pathname
  const menuRef = useRef<HTMLDivElement>(null); // Ref untuk menu

  // Fungsi untuk toggle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Fungsi untuk navigasi dan menutup menu saat link diklik
  const handleNavigation = (path: string) => {
    router.push(path);
    setIsOpen(false); // Tutup menu setelah navigasi
  };

  // Effect untuk menutup menu ketika user mengklik di luar menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Menutup menu jika klik di luar
      }
    };

    // Menambahkan event listener saat component di-mount
    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat component di-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolling(true); // Set scrolling to true when scrolled more than 50px
      } else {
        setScrolling(false); // Set scrolling to false when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`fixed w-full z-10 transition-all duration-300`}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-12 lg:px-[104px] ${
          scrolling ? "bg-custom-glass shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className="text-2xl font-bold cursor-pointer text-[#00A6FB]"
              onClick={() => handleNavigation("/")}
            >
              Aria.
            </span>
          </div>

          {/* Links untuk desktop */}
          <div className="hidden md:flex space-x-8">
            <span
              className={`cursor-pointer hover:text-[#0582CA] ${
                pathname === "/" ? "text-[#00A6FB]" : "text-[#ffffff]"
              }`}
              onClick={() => handleNavigation("/")}
            >
              Home
              <div
                className={`flex gap-x-[2px] items-start ${
                  pathname === "/" ? "" : "hidden"
                }`}
              >
                <span className="h-[2px] grow bg-[#00A6FB] rounded-xl"></span>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className="h-[2px] w-[4px] bg-[#00A6FB] rounded-xl"
                  ></span>
                ))}
              </div>
            </span>
            <span
              className={`cursor-pointer hover:text-[#0582CA] ${
                pathname === "/project" ? "text-[#00A6FB]" : "text-[#ffffff]"
              }`}
              onClick={() => handleNavigation("/project")}
            >
              Project
              <div
                className={`flex gap-x-[2px] items-start ${
                  pathname === "/project" ? "" : "hidden"
                }`}
              >
                <span className="h-[2px] grow bg-[#00A6FB] rounded-xl"></span>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className="h-[2px] w-[4px] bg-[#00A6FB] rounded-xl"
                  ></span>
                ))}
              </div>
            </span>
            <span
              className={`cursor-pointer hover:text-[#0582CA] ${
                pathname === "/contact" ? "text-[#00A6FB]" : "text-[#ffffff]"
              }`}
              onClick={() => handleNavigation("/contact")}
            >
              Contact
              <div
                className={`flex gap-x-[2px] items-start ${
                  pathname === "/contact" ? "" : "hidden"
                }`}
              >
                <span className="h-[2px] grow bg-[#00A6FB] rounded-xl"></span>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className="h-[2px] w-[4px] bg-[#00A6FB] rounded-xl"
                  ></span>
                ))}
              </div>
            </span>
          </div>

          {/* Hamburger Icon untuk mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#00A6FB] focus:outline-none"
            >
              <svg
                className="h-8 w-8"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef} // Menambahkan ref ke elemen ini
        className={`md:hidden transition-transform transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed right-0 top-0 w-2/3 h-full bg-custom-glass shadow-lg z-20`}
      >
        <div className="flex flex-col items-start p-4 space-y-6">
          <span
            className={`text-xl cursor-pointer hover:text-[#0582CA] ${
              pathname === "/" ? "text-[#00A6FB]" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleNavigation("/")}
          >
            Home
            <div
              className={`flex gap-x-[2px] items-start ${
                pathname === "/" ? "" : "hidden"
              }`}
            >
              <span className="h-[2px] grow bg-[#00A6FB] rounded-xl"></span>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="h-[2px] w-[4px] bg-[#00A6FB] rounded-xl"
                ></span>
              ))}
            </div>
          </span>
          <span
            className={`text-xl cursor-pointer hover:text-[#0582CA] ${
              pathname === "/project" ? "text-[#00A6FB]" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleNavigation("/project")}
          >
            Project
            <div
              className={`flex gap-x-[2px] items-start ${
                pathname === "/project" ? "" : "hidden"
              }`}
            >
              <span className="h-[2px] grow bg-[#00A6FB] rounded-xl"></span>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="h-[2px] w-[4px] bg-[#00A6FB] rounded-xl"
                ></span>
              ))}
            </div>
          </span>
          <span
            className={`text-xl cursor-pointer hover:text-[#0582CA] ${
              pathname === "/contact" ? "text-[#00A6FB]" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
            <div
              className={`flex gap-x-[2px] items-start ${
                pathname === "/contact" ? "" : "hidden"
              }`}
            >
              <span className="h-[2px] grow bg-[#00A6FB] rounded-xl"></span>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="h-[2px] w-[4px] bg-[#00A6FB] rounded-xl"
                ></span>
              ))}
            </div>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
