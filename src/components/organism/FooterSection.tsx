"use client";
import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function FooterSection(): JSX.Element {
  return (
    <footer id="footer" className="relative bg-black text-white z-20 border-t border-white/5 pt-20 pb-10">
      <div className="container max-w-7xl mx-auto px-6 lg:px-24 flex flex-col items-center">
        {/* Large Typography Call to Action */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white">
            Let&apos;s build <br /> something <span className="text-primary italic">great.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base font-light">
            I&apos;m constantly looking for new opportunities and creative collaborations. If you have an exciting project or just want to say hi, my inbox is always open!
          </p>
          <a
            href="mailto:ariabagaswara23@gmail.com"
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 bg-white text-black font-semibold rounded-full hover:scale-105 transition-transform duration-300"
          >
            <FaEnvelope /> Get in Touch
          </a>
        </div>

        {/* Minimal Information Row */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 py-10 border-t border-white/10 text-center md:text-left">
          <div className="flex flex-col space-y-2 items-center md:items-start">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Location</span>
            <span className="text-gray-300 font-light flex items-center gap-2"><FaMapMarkerAlt className="text-primary"/> Cimahi, Indonesia</span>
          </div>
          <div className="flex flex-col space-y-2 items-center md:items-center">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Socials</span>
            <div className="flex space-x-6">
              <a href="https://www.linkedin.com/in/aria-bagaswara/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition-colors text-xl"><FaLinkedin /></a>
              <a href="https://github.com/ariabagaswara23" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition-colors text-xl"><FaGithub /></a>
              <a href="https://www.instagram.com/aria.bagaswara/" target="_blank" rel="noreferrer" className="text-gray-300 hover:text-primary transition-colors text-xl"><FaInstagram /></a>
            </div>
          </div>
          <div className="flex flex-col space-y-2 items-center md:items-end">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-2">Direct</span>
            <span className="text-gray-300 font-light flex items-center gap-2">+62 859-5071-2155 <FaPhone className="text-primary text-xs" /></span>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-12 text-sm text-gray-500 font-light">
          <div className="mb-4 md:mb-0">
            <span className="text-white font-semibold">Aria Bagaswara.</span> Frontend Developer.
          </div>
          <div>
            © {new Date().getFullYear()}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
