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
    <section className="relative min-h-[80vh] sm:min-h-[90vh] md:min-h-screen flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img src="/image/background.png" alt="Abrish Leather Hero" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-br from-leather-brown/90 via-leather-neutral/80 to-leather-secondary/80" />
      </div>
      {/* Bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-leather-primary/30 pointer-events-none transition-transform duration-300"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
          }}
        />
      ))}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-20 flex-1 flex flex-col items-start justify-center text-left w-full">
        <div className="max-w-2xl ml-0 w-full">
          <div className="mb-4 flex items-center gap-3">
            {/* Minimalist leather bag icon using Lucide icon, hidden on mobile */}
            <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block w-8 h-8 sm:w-10 sm:h-10 text-leather-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="4" y="7" width="16" height="13" rx="3" strokeWidth="2"/><path d="M8 7V5a4 4 0 1 1 8 0v2" strokeWidth="2"/></svg>
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight tracking-tight text-leather-primary">
            Where Craftsmanship Meets Style.
          </h1>
          <p className="hidden sm:block text-sm sm:text-base md:text-lg lg:text-2xl mb-4 sm:mb-6 md:mb-8 text-leather-primary/90 leading-relaxed max-w-xl sm:max-w-2xl">
            Explore our exclusive collection of original leather hand and backpacks for men and women — made to last and designed to stand out. Crafted in Ethiopia with premium quality and timeless design.
          </p>
          <Button 
            size="lg" 
            onClick={() => window.open('https://t.me/abrishleather', '_blank')}
            className="bg-leather-secondary hover:bg-leather-accent text-leather-brown font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-full sm:w-auto"
          >
            Explore Collection
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}