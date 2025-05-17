import React from 'react';
import { Phone, Mail } from 'lucide-react';

interface ContactInfoProps {
  textColor?: string;
}

export default function ContactInfo({ textColor = 'text-white' }: ContactInfoProps) {
  return (
    <div className={`absolute bottom-4 right-4 md:bottom-8 md:right-8 ${textColor} text-right z-30`}>
      <div className="flex flex-col items-end gap-2">
        <div className="flex items-center gap-2">
          <span className="text-sm">(512) 650-5012 / (805) 423-0593</span>
          <Phone size={16} className={textColor} />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-sm">centralcoastfishingcharters@gmail.com</span>
          <Mail size={16} className={textColor} />
        </div>
      </div>
    </div>
  );
} 