'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';

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
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/image/logo.png" 
              alt="Tabor Advert" 
              className="h-20 lg:h-24 w-auto brightness-0"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Services', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 hover:text-black ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm ${
              isScrolled ? 'text-black' : 'text-white'
            }`}>
              <Phone className="w-4 h-4" />
              <span>+(251) 911389796</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-white/90 text-black font-semibold px-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-black' : 'text-black'
            }`}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary shadow-lg border-t">
            <nav className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Products', 'Services', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left font-medium text-black hover:text-black/80 transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-black mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+(251) 911389796</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-black hover:bg-black/90 text-white font-semibold"
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