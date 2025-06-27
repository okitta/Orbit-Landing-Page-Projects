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
    <section className="relative min-h-screen flex items-center bg-[#6A1B9A] overflow-hidden">
      {/* Bubbles */}
      {bubbles.map(bubble => (
        <div
          key={bubble.id}
          className="absolute rounded-full bg-white/30 pointer-events-none transition-transform duration-300"
          style={{
            left: `${bubble.x}%`,
            top: `${bubble.y}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
          }}
        />
      ))}
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/image/background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="max-w-2xl ml-0">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-white">
            Wear Confidence.
            <span className="block text-[#FFD700]">
              Crafted by Teyim
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
            Premium fashion for every body type - from casual classic to bold pieces made with love in Ethiopia.
          </p>
          
          <Button 
            size="lg" 
            onClick={() => scrollToSection('products')}
            className="bg-[#FFD700] hover:bg-[#FFA000] text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            Shop Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}