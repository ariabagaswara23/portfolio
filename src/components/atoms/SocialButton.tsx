// File: components/SocialButton.tsx
import React from "react";

interface SocialButtonProps {
  icon: React.ReactNode;
  href: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, href }) => {
  return (
    <a
      href={href}
      className="w-12 h-12 bg-secondary bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all social-icon"
      aria-label="social"
      target="_blank"
    >
      {icon}
    </a>
  );
};

export default SocialButton;
