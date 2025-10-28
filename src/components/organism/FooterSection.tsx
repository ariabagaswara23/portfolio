"use client";
import React, { useState } from "react";
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaPaperPlane,
  FaSpinner,
  FaCheck,
} from "react-icons/fa";
import ContactInfo from "../atoms/ContactInfo";
import SocialButton from "../atoms/SocialButton";
import tinycolor from "tinycolor2";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function FooterSection(): JSX.Element {
  const color = tinycolor("#000000");
  const toColor = tinycolor(color).analogous()[2].toHexString();

  return (
    <footer className="text-white bg-black z-20">
      <div className="container max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3 text-primary text-center lg:text-start">
              Let's Collaborate!
            </h2>
            <p className="text-lg mb-8 text-white text-center lg:text-start">
              I'm ready to help bring your digital ideas to life. Contact me for
              project discussions or collaborations.
            </p>

            <div className="flex space-x-4 w-full justify-center lg:justify-start">
              <SocialButton
                icon={<FaLinkedin />}
                href="https://www.linkedin.com/in/aria-bagaswara/"
              />
              <SocialButton
                icon={<FaGithub />}
                href="https://github.com/ariabagaswara23"
              />
              <SocialButton
                icon={<FaInstagram />}
                href="https://www.instagram.com/aria.bagaswara/"
              />
            </div>
          </div>

          <div className="w-full flex justify-start lg:justify-end">
            <div className="space-y-4 mb-8">
              <ContactInfo
                icon={<FaEnvelope />}
                label="Email"
                value="ariabagaswara23@gmail.com"
              />
              <ContactInfo
                icon={<FaPhone />}
                label="Phone"
                value="+62 859-5071-2155"
              />
              <ContactInfo
                icon={<FaMapMarkerAlt />}
                label="Location"
                value="Cimahi, Indonesia"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-white border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h4 className="text-xl text-primary font-bold">
                Aria Bagaswara.
              </h4>
              <p className="text-gray-200">Frontend Developer</p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <div className="text-sm text-white">
                © 2025. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
