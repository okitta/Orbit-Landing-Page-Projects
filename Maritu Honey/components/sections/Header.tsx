'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-40 h-40">
              <Image
                src="/image/Asset 2@7x.png"
                alt="Maritu Honey Logo"
                fill
                // width={200}
                // height={200}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 hover:text-[#F2A71B] ${
                  isScrolled ? 'text-[#0D0D0D]' : 'text-[#0D0D0D]'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm ${
              isScrolled ? 'text-[#734C29]' : 'text-[#734C29]'
            }`}>
              <Phone className="w-4 h-4" />
              <span>+(251) 911389796 </span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-[#F2A71B] hover:bg-[#D97C2B] text-[#0D0D0D] font-semibold px-6 transition-colors duration-300"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-[#0D0D0D]' : 'text-[#0D0D0D]'
            }`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#F2C84B] shadow-lg border-t border-[#D97C2B]">
            <nav className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left font-medium text-[#0D0D0D] hover:text-[#F2A71B] transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t border-[#D97C2B]">
                <div className="flex items-center space-x-2 text-sm text-[#734C29] mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+(251) 911389796</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-[#F2A71B] hover:bg-[#D97C2B] text-[#0D0D0D] font-semibold transition-colors duration-300"
                >
                  Contact Us
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}