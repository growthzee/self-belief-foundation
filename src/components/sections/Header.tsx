// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Helper logic to dynamically generate link styles
  const getLinkClass = (path: string) => {
    const baseClass = "text-sm font-semibold pb-1 transition-all duration-300 ";
    const isActive = pathname === path;
    
    return isActive 
      ? `${baseClass} text-[#ae0011] border-b-2 border-[#ae0011]` 
      : `${baseClass} text-[#1a1c1c] hover:text-[#ae0011] border-b-2 border-transparent`;
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-[#926f6b]/10 ${isScrolled ? 'bg-white/80 shadow-md' : 'bg-white/60'}`}>
      <nav className="flex justify-between items-center px-6 py-4 max-w-[1280px] mx-auto">
        <Link href="/" className="text-2xl font-bold text-[#ae0011] font-serif">
          SelfBelief Foundation
        </Link>
        
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex gap-8 items-center">
          <Link className={getLinkClass('/programs')} href="/programs">Programs</Link>
         
          <Link className={getLinkClass('/about')} href="/about">About Us</Link>
          <Link className={getLinkClass('/events')} href="/events">Events</Link>
          <Link className={getLinkClass('/donate')} href="/donate">Donate</Link>
        </div>

        {/* Action Callouts */}
        <div className="flex gap-4 items-center">
          <Link href="/get-involved" className="hidden lg:flex text-sm font-semibold text-[#ae0011] px-4 py-2 hover:bg-[#ffdad6] transition-all rounded-lg">
            Volunteer
          </Link>
          <Link href="/donate" className="bg-[#d71920] text-[#ffece9] text-sm font-semibold px-6 py-2 rounded-full scale-95 active:scale-100 transition-transform shadow-md hover:bg-[#ae0011]">
            Donate
          </Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-[#1a1c1c] p-1">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
      
      {/* Mobile Responsive Navigation Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 px-6 py-4 flex flex-col gap-4">
          <Link className="text-sm font-medium text-[#1a1c1c]" href="/programs">Programs</Link>
          <Link className="text-sm font-medium text-[#1a1c1c]" href="#">Impact</Link>
          <Link className="text-sm font-medium text-[#1a1c1c]" href="/about">About Us</Link>
          <Link className="text-sm font-medium text-[#1a1c1c]" href="/events">Events</Link>
          <Link className="text-sm font-medium text-[#1a1c1c]" href="/donate">Donate</Link>
          <Link className="text-left text-sm font-medium text-[#ae0011] py-2" href="/events">Volunteer</Link>
        </div>
      )}
    </header>
  );
}