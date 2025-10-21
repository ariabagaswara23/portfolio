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
    <nav className={`fixed w-full z-[100] transition-all duration-300 ${
          scrolling ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm" : "bg-transparent"
        }`}>
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-12 lg:px-24`}
      >
        <div className="flex justify-between items-center h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span
              className="text-2xl font-bold cursor-pointer text-primary"
              onClick={() => handleNavigation("/")}
            >
              Aria<span className="text-secondary">.dev</span>
            </span>
          </div>

          {/* Links untuk desktop */}
          <div className="hidden md:flex space-x-8">
            <span
              className={`cursor-pointer font-semibold hover:text-primary ${
                pathname === "/" ? "text-primary" : "text-black"
              }`}
              onClick={() => handleNavigation("/")}
            >
              Home
              <div
                className={`flex gap-x-[2px] items-start ${
                  pathname === "/" ? "" : "hidden"
                }`}
              >
                <span className="h-[2px] grow bg-primary rounded-xl"></span>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className="h-[2px] w-[4px] bg-primary rounded-xl"
                  ></span>
                ))}
              </div>
            </span>
            <span
              className={`cursor-pointer font-semibold hover:text-primary ${
                pathname === "/project" ? "text-primary" : "text-black"
              }`}
              onClick={() => handleNavigation("/project")}
            >
              Project
              <div
                className={`flex gap-x-[2px] items-start ${
                  pathname === "/project" ? "" : "hidden"
                }`}
              >
                <span className="h-[2px] grow bg-primary rounded-xl"></span>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className="h-[2px] w-[4px] bg-primary rounded-xl"
                  ></span>
                ))}
              </div>
            </span>
            <span
              className={`cursor-pointer font-semibold hover:text-primary ${
                pathname === "/contact" ? "text-primary" : "text-black"
              }`}
              onClick={() => handleNavigation("/contact")}
            >
              Contact
              <div
                className={`flex gap-x-[2px] items-start ${
                  pathname === "/contact" ? "" : "hidden"
                }`}
              >
                <span className="h-[2px] grow bg-primary rounded-xl"></span>
                {[...Array(3)].map((_, index) => (
                  <span
                    key={index}
                    className="h-[2px] w-[4px] bg-primary rounded-xl"
                  ></span>
                ))}
              </div>
            </span>
          </div>

          {/* Hamburger Icon untuk mobile */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-primary focus:outline-none"
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
        } fixed right-0 top-0 w-2/3 h-full bg-custom-glass shadow-lg z-[99]`}
      >
        <div className="flex flex-col items-start p-4 space-y-6">
          <span
            className={`text-xl cursor-pointer hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-black"
            }`}
            onClick={() => handleNavigation("/")}
          >
            Home
            <div
              className={`flex gap-x-[2px] items-start ${
                pathname === "/" ? "" : "hidden"
              }`}
            >
              <span className="h-[2px] grow bg-primary rounded-xl"></span>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="h-[2px] w-[4px] bg-primary rounded-xl"
                ></span>
              ))}
            </div>
          </span>
          <span
            className={`text-xl cursor-pointer hover:text-primary ${
              pathname === "/project" ? "text-primary" : "text-black"
            }`}
            onClick={() => handleNavigation("/project")}
          >
            Project
            <div
              className={`flex gap-x-[2px] items-start ${
                pathname === "/project" ? "" : "hidden"
              }`}
            >
              <span className="h-[2px] grow bg-primary rounded-xl"></span>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="h-[2px] w-[4px] bg-primary rounded-xl"
                ></span>
              ))}
            </div>
          </span>
          <span
            className={`text-xl cursor-pointer hover:text-primary ${
              pathname === "/contact" ? "text-primary" : "text-black"
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
            <div
              className={`flex gap-x-[2px] items-start ${
                pathname === "/contact" ? "" : "hidden"
              }`}
            >
              <span className="h-[2px] grow bg-primary rounded-xl"></span>
              {[...Array(3)].map((_, index) => (
                <span
                  key={index}
                  className="h-[2px] w-[4px] bg-primary rounded-xl"
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
