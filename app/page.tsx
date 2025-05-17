// /app

import React from 'react';
import Link from 'next/link';
import { Anchor } from 'lucide-react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

export default function Landing() {
  return (
    <main className="relative h-screen w-full overflow-hidden flex flex-col">
      {/* Background Video - Different for mobile and desktop */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden md:block h-full w-full object-cover"
        >
          <source src="https://res.cloudinary.com/hypertheory/video/upload/v1747509436/DesktopBackground_cg5ndb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="md:hidden h-full w-full object-cover"
        >
          <source src="https://res.cloudinary.com/hypertheory/video/upload/v1747509816/MobileBackground_l4mvqi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      
      {/* Desktop Overlay */}
      <div className="absolute inset-0 bg-black/10 z-10 hidden md:block"></div>
      
      {/* Mobile Overlay - darker */}
      <div className="absolute inset-0 bg-black/30 z-10 md:hidden"></div>
      
      {/* Content Container */}
      <div className="relative z-20 flex flex-col h-full w-full">
        {/* Shared Header Component */}
        <Header landing={true} />
        
        {/* Hero Statement - centered vertically and horizontally */}
        <div className="flex-grow flex flex-col justify-center items-start p-4 md:p-6">
          <div className="max-w-full md:max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The best private fishing experience on California&apos;s central coast
            </h1>
            <div className="mt-4 md:mt-6">
              <Link 
                href="/packages" 
                className="text-white group flex items-center gap-2 hover:text-gray-200 transition-all duration-300"
              >
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white/30 group-hover:scale-110">
                  <Anchor size={16} className="text-white transition-all duration-300 group-hover:scale-110" />
                </span>
                <span className="text-white">Plan your next adventure</span>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Shared Footer Component */}
        <Footer landing={true} />
      </div>
    </main>
  );
}

