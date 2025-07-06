'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Heart, Star } from 'lucide-react';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Natural & Pure",
      description: "100% pure, unprocessed honey from Ethiopian highlands"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Ethical Harvesting",
      description: "Sustainable beekeeping practices that protect our environment"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Premium Quality",
      description: "Rich in nutrients and authentic Ethiopian heritage"
    }
  ];

  return (
    <section className="py-32 bg-[#F2C84B]/20 relative">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #734C29 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Honey Image */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <img 
                src="/image/background_1.jpg" 
                alt="Ethiopian honey being harvested" 
                className="w-full h-auto rounded-2xl shadow-2xl object-cover" 
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6 leading-tight">
                About Maritu Honey
              </h2>
              <p className="text-lg text-[#734C29] leading-relaxed mb-8">
                Maritu Honey is more than just a sweet treat — it's a story of nature, tradition, and dedication. Harvested from the rich highlands of Ethiopia, our honey is 100% pure, unprocessed, and rich in nutrients. We work closely with local beekeepers who practice ethical and sustainable harvesting methods, ensuring the bees thrive and the environment is protected. With every jar, we aim to share a piece of Ethiopia's heritage and natural wealth with the world.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`transition-all duration-300 cursor-pointer ${
                    hoveredCard === index 
                      ? 'transform -translate-y-2 shadow-xl bg-[#F2A71B] text-[#0D0D0D]' 
                      : 'bg-[#F2C84B]/50 text-[#734C29] hover:bg-[#F2A71B]/80'
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`mb-4 transition-colors duration-300 ${
                      hoveredCard === index ? 'text-[#0D0D0D]' : 'text-[#D97C2B]'
                    }`}>
                      {value.icon}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm opacity-90">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}