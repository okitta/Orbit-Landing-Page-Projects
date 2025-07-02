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
    <section className="py-32 bg-offWhite relative">
      {/* Dot Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #4682B4 1px, transparent 1px)',
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
                alt="Yared Engineering team or machinery in action" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-steelBlue rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-steelBlue mb-6 leading-tight animate-text-gradient">
                About Yared Engineering
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                At Yared Engineering, we believe infrastructure is more than construction — it's about innovation, quality, and creating impact. With years of experience in metalworks, manufacturing, and engineering solutions, we serve industries with prefabricated steel bridge components, machinery, and eco-solutions like charcoal systems and EV technology. Our team combines technical mastery with practical experience to ensure every product is built to last and designed for efficiency. Whether you're building bridges, baking for thousands, or going electric, we engineer to empower you.
              </p>
            </div>

            {/* Core Values */}
            {/* <div className="grid gap-4">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`transition-all duration-300 cursor-pointer border-l-4 border-l-[#FFD700] hover:shadow-lg ${hoveredCard === index ? 'bg-[#F5F5F5] scale-105' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-[#6A1B9A] flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#6A1B9A] mb-1">{value.title}</h3>
                        <p className={`text-gray-600 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-70'}`}>
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div> */}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes text-gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-text-gradient {
          background: linear-gradient(90deg, #4682B4 0%, #B0B3B8 50%, #4682B4 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}