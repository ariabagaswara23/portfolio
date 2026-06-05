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
      className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all duration-300 hover:bg-primary/20 hover:text-white text-primary hover:shadow-[0_0_20px_rgba(0,162,250,0.5)] social-icon hover:-translate-y-1"
      aria-label="social"
      target="_blank"
    >
      {icon}
    </a>
  );
};

export default SocialButton;
