'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone } from 'lucide-react';

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
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/image/logo.png"
              alt="Yared Engineering Logo"
              className={`h-16 w-auto object-contain transition duration-300 ${!isScrolled ? 'filter invert brightness-0 saturate-0' : ''}`}
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`font-medium transition-colors duration-300 hover:text-white ${
                  isScrolled ? 'text-charcoal' : 'text-white'
                }`}
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 text-sm ${
              isScrolled ? 'text-industrialGray-dark' : 'text-gold'
            }`}>
              <Phone className="w-4 h-4" />
              <span>+251 911 123 456</span>
            </div>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-white hover:bg-gray-100 text-black font-semibold px-6"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 transition-colors duration-300 ${
              isScrolled ? 'text-charcoal' : 'text-steelBlue'
            }`}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-offWhite shadow-lg border-t z-50">
            <nav className="px-6 py-4 space-y-4">
              {['Home', 'About', 'Products', 'Testimonials', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left font-medium text-charcoal hover:text-white transition-colors"
                >
                  {item}
                </button>
              ))}
              <div className="pt-4 border-t">
                <div className="flex items-center space-x-2 text-sm text-industrialGray-dark mb-3">
                  <Phone className="w-4 h-4" />
                  <span>+251 911 123 456</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('contact')}
                  className="w-full bg-white hover:bg-gray-100 text-black font-semibold"
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