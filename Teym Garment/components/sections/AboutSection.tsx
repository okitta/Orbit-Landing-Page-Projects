'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Heart, Star } from 'lucide-react';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Craftsmanship",
      description: "Precision tailoring and attention to detail in every stitch"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Inclusivity",
      description: "Stylish designs for every body type and personality"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Quality",
      description: "Premium fabrics and modern trends combined with tradition"
    }
  ];

  return (
    <section className="py-32 bg-white relative">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #402222 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Fashion Image */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <img 
                src="/image/about.jpg" 
                alt="Teyim Garment Workshop" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#FFD700] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#402222] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#402222] mb-6 leading-tight animate-text-gradient">
                Who We Are
              </h2>
              <p className="text-lg text-[#0D0D0D] leading-relaxed mb-8">
                Teyim Garment is more than a clothing brand — it's a statement of individuality, inclusivity, and creativity. Founded with the belief that everyone deserves stylish and comfortable wear, we specialize in garments that combine tradition with modern trends. From hand-selected fabrics to precision tailoring, every piece we create is designed to make you feel bold, beautiful, and authentically you.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`transition-all duration-300 cursor-pointer border-l-4 border-l-[#402222] hover:shadow-lg ${hoveredCard === index ? 'bg-[#F5F5F5] scale-105' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-[#402222] flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#402222] mb-1">{value.title}</h3>
                        <p className={`text-[#0D0D0D] transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-70'}`}>
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-text-gradient {
          background: linear-gradient(90deg, #402222 0%, #0D0D0D 50%, #402222 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}