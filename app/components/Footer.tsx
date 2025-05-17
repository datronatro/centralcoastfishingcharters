'use client';

import React from 'react';
import { Phone, Mail, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface FooterProps {
  landing?: boolean;
}

export default function Footer({ landing = false }: FooterProps) {
  const pathname = usePathname();
  const textColor = landing ? 'text-white' : 'text-primary';
  
  return (
    <footer className={`relative z-40 h-16 ${
      landing ? '' : 'bg-white/60 backdrop-blur-md border-t border-black/10'
    }`}>
      <div className="flex justify-between items-center px-4 md:px-6 h-full">
        {/* Social Links */}
        <div className="flex items-center gap-2 md:gap-3">
          <Link href="https://www.instagram.com/central_coast_fishing_charters/" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <Instagram size={26} className={textColor} />
          </Link>
          <Link href="https://www.facebook.com/centralcoastfishingchartersinc" target="_blank" rel="noopener noreferrer" className="transition hover:scale-110">
            <Facebook size={26} className={textColor} />
          </Link>
        </div>
        
        {/* Contact Info */}
        <div className={`${textColor} text-right text-xs`}>
          <div className="flex flex-col items-end gap-1">
            <div className="flex items-center gap-2">
              <span>(512) 650-5012 &nbsp;/&nbsp; (805) 423-0593</span>
              <Phone size={14} className={textColor} />
            </div>
            <div className="flex items-center gap-2">
              <span>centralcoastfishingcharters@gmail.com</span>
              <Mail size={14} className={textColor} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}