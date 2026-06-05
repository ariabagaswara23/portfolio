// File: components/ContactInfo.tsx
import React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-4 group cursor-default">
      <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center text-primary group-hover:shadow-[0_0_15px_rgba(0,162,250,0.4)] group-hover:bg-primary/10 transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="font-semibold text-primary">{label}</p>
        <p className="text-white">{value}</p>
      </div>
    </div>
  );
};

export default ContactInfo;
