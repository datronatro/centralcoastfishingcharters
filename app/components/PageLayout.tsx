import React from 'react';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';

interface PageLayoutProps {
  children: React.ReactNode;
  bgWhite?: boolean;
}

export default function PageLayout({ children, bgWhite = true }: PageLayoutProps) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden flex flex-col pt-[72px]">
      {/* Background */}
      {bgWhite && <div className="absolute inset-0 z-0 bg-white"></div>}
      
      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full w-full">
        {/* Shared Header */}
        <Header landing={false} />
        
        {/* Page Content */}
        {children}

        {/* Shared Footer */}
        <Footer landing={false} />
      </div>
    </main>
  );
} 