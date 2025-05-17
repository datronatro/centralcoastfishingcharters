'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import MobileMenu from './MobileMenu';

interface HeaderProps {
  landing?: boolean;
}

export default function Header({ landing = false }: HeaderProps) {
  const pathname = usePathname();
  
  // Determine styles based on landing prop
  const textColor = landing ? 'text-white' : 'text-primary';
  const headerStyle = landing 
    ? 'border-b border-transparent' 
    : 'bg-white/20 backdrop-blur-sm border-b border-black/10';
  const logoStyle = landing ? 'brightness-0 invert' : '';
  const buttonBgStyle = landing 
    ? 'bg-white/20 backdrop-blur-sm hover:bg-white/30 active:bg-white/40' 
    : 'bg-[var(--primary-light)] hover:bg-[var(--primary)] active:bg-[var(--primary)]';
  
  // Navigation items
  const navItems = [
    { href: '/about', label: 'About' },
    { href: '/packages', label: 'Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: 'https://ccfc.printify.me/', label: 'Merch', external: true },
  ];
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 h-[72px] transition-all duration-300 ${headerStyle}`}>
      <div className="flex justify-between items-center px-4 md:px-6 h-full">
        {/* Logo */}
        <Link href="/">
          <Image 
            src="/logo.png" 
            alt="Central Coast Fishing Charters" 
            width={250} 
            height={250}
            className={`-mt-2 w-48 md:w-64 transition-all duration-300 ${logoStyle}`}
          />
        </Link>
        
        <div className="flex items-center gap-3 mt-1">
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex gap-3 font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href} 
                    className={`px-1 py-2 transition-all duration-300 ${textColor} hover:underline hover:decoration-[1.5px] ${pathname === item.href ? 'underline decoration-[1.5px]' : ''}`}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Book Button */}
          <Link 
            href="https://centralcoastfishingchartersinc.schedulista.com/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`text-white hidden md:flex font-medium px-2.5 py-0.5 ml-1 shadow-md rounded-full ${buttonBgStyle} transition-all duration-300 group items-center gap-1`}
          >
            <span>Book</span>
            <ArrowRight size={14} strokeWidth={3} className="transition-transform duration-300 group-hover:translate-x-[2px]" />
          </Link>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu darkMode={landing} />
          </div>
        </div>
      </div>
    </header>
  );
} 