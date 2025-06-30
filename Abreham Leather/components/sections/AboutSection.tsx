'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Scissors, Heart, Star } from 'lucide-react';

export default function AboutSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const values = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Master Craftsmanship",
      description: "Expert artisans with generations of leather-working expertise"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Authentic Materials",
      description: "Premium Ethiopian leather, carefully selected and treated"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Heritage & Innovation",
      description: "Traditional techniques enhanced with modern design principles"
    }
  ];

  return (
    <section className="py-32 bg-leather-primary relative">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Fashion Image */}
          <div className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              <img 
                src="/image/background.png" 
                alt="Leather Crafting Workshop" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#D9A404] rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#8C4E03] rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-leather-brown mb-6 leading-tight animate-text-gradient">
                Who We Are
              </h2>
              <p className="text-lg text-leather-secondary leading-relaxed mb-8">
                Abrish Leather is more than just a leather brand — it's a dedication to timeless craftsmanship, bold expression, and everyday elegance. Born in Ethiopia, our mission is to create original leather goods that blend durability with distinct style. Every Abrish piece is handcrafted by skilled artisans using high-quality leather, ensuring a product that ages beautifully and stands the test of time. Whether you're heading to work or exploring the city, our bags are designed to elevate your look and serve you for years to come.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid gap-4">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`transition-all duration-300 cursor-pointer border-l-4 border-l-leather-accent hover:shadow-lg ${hoveredCard === index ? 'bg-leather-primary scale-105' : 'bg-leather-primary'}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-leather-brown flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-leather-brown mb-1">{value.title}</h3>
                        <p className={`text-leather-secondary transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-70'}`}>
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
          background: linear-gradient(90deg, #6A1B9A 0%, #8E24AA 50%, #6A1B9A 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}