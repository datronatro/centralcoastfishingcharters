'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  darkMode?: boolean;
}

export default function MobileMenu({ darkMode = true }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();
  
  const textColor = darkMode ? 'text-white' : 'text-primary';
  const hoverColor = darkMode ? 'hover:text-gray-200' : 'hover:text-primary/80';
  const menuBgColor = darkMode ? 'bg-black/10 backdrop-blur-md' : 'bg-white shadow-lg';

  // Handle clicks outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && 
          menuRef.current && 
          buttonRef.current && 
          !menuRef.current.contains(event.target as Node) && 
          !buttonRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  // List of navigation items to avoid repetition
  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/packages', label: 'Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: 'https://ccfc.printify.me/', label: 'Merch', external: true },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <div className="absolute top-[18px] right-[18px] z-50">
        <button 
          ref={buttonRef}
          className="flex items-center justify-center transition-colors duration-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={32} className={`${textColor} transition-colors duration-300`} />
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div 
          ref={menuRef}
          className={`absolute top-14 right-[18px] z-[51] ${menuBgColor} rounded-lg py-3 px-6 transition-all duration-300`}
        >
          <nav>
            <ul className="flex flex-col gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`text-lg transition-all duration-300 
                      ${pathname === item.href ? 'font-bold underline decoration-2 underline-offset-4' : ''} 
                      ${textColor} ${hoverColor}`}
                    onClick={() => setMobileMenuOpen(false)}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
} 