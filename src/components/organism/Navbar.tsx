"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter, usePathname } from "next/navigation"; // Import usePathname

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // State untuk membuka/menutup menu
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

  return (
    <nav className="bg-transparent fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24">
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
              className={`cursor-pointer ${
                pathname === "/" ? "text-[#00A6FB]" : "text-[#ffffff]"
              }`}
              onClick={() => handleNavigation("/")}
            >
              Home
            </span>
            <span
              className={`cursor-pointer ${
                pathname === "/project" ? "text-[#00A6FB]" : "text-[#ffffff]"
              }`}
              onClick={() => handleNavigation("/project")}
            >
              Project
            </span>
            <span
              className={`cursor-pointer ${
                pathname === "/contact" ? "text-[#00A6FB]" : "text-[#ffffff]"
              }`}
              onClick={() => handleNavigation("/contact")}
            >
              Contact
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
            className={`text-xl cursor-pointer ${
              pathname === "/" ? "text-[#00A6FB]" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleNavigation("/")}
          >
            Home
          </span>
          <span
            className={`text-xl cursor-pointer ${
              pathname === "/project" ? "text-[#00A6FB]" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleNavigation("/project")}
          >
            Project
          </span>
          <span
            className={`text-xl cursor-pointer ${
              pathname === "/contact" ? "text-[#00A6FB]" : "text-[#FFFFFF]"
            }`}
            onClick={() => handleNavigation("/contact")}
          >
            Contact
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
