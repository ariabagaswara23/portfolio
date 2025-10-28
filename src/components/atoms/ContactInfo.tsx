// File: components/ContactInfo.tsx
import React from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, label, value }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
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
