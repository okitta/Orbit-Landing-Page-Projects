'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
}

export default function HeroSection() {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  const createBubble = () => ({
    id: Math.random(),
    x: Math.random() * 100,
    y: -20,
    size: Math.random() * 30 + 10,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.2
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setBubbles(prev => {
        const newBubbles = [...prev];
        
        // Add new bubble
        if (newBubbles.length < 15) {
          newBubbles.push(createBubble());
        }

        // Update positions and remove bubbles that are out of view
        return newBubbles
          .map(bubble => ({
            ...bubble,
            y: bubble.y + bubble.speed
          }))
          .filter(bubble => bubble.y < 120);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center bg-gradient-to-br from-[#F2C84B] via-[#F2A71B] to-[#D97C2B] overflow-hidden">
      {/* Honeycomb/Organic Overlay */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <svg width="100%" height="100%" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full opacity-20">
          <path fill="#734C29" d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,133.3C840,107,960,85,1080,101.3C1200,117,1320,171,1380,197.3L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
        </svg>
      </div>
      {/* Bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-[#F2A71B] pointer-events-none transition-transform duration-300"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity * 0.5,
          }}
        />
      ))}
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/image/background.jpg"
          alt="Background"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight tracking-tight text-[#0D0D0D] flex items-center gap-3 justify-center text-center">
            <span role="img" aria-label="bee" className="text-5xl md:text-6xl lg:text-7xl">🐝</span>
            Pure, Natural, Ethiopian – Taste the Golden Goodness of Maritu Honey
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 text-[#0D0D0D]/90 leading-relaxed max-w-3xl mx-auto">
            From the heart of Ethiopia to your table, our honey is harvested with care and packed with nature's best.
          </p>
          <Button 
            size="lg" 
            onClick={() => scrollToSection('products')}
            className="bg-[#734C29] hover:bg-[#0D0D0D] text-[#F2C84B] font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Shop Honey
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}