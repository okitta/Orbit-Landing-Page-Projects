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
          backgroundImage: 'radial-gradient(circle, var(--tw-gradient-stops, hsl(var(--primary)) 1px, transparent 1px))',
          backgroundSize: '24px 24px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto lg:mx-0">
              <img 
                src="/image/about_us.jpg" 
                alt="Elshalom Engineering Workshop 1" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/image/about_us_2.jpg" 
                alt="Elshalom Engineering Workshop 2" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/image/about_us_3.jpg" 
                alt="Elshalom Engineering Workshop 3" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <img 
                src="/image/about_us_4.jpg" 
                alt="Elshalom Engineering Workshop 4" 
                className="w-full h-auto rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-full opacity-10 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-crimson mb-6 leading-tight animate-text-gradient">
                Who We Are
              </h2>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                Founded in 2015 in Hawassa, Ethiopia, Elshalom Electromechanical Engineering began as the ambitious dream of Mr. Gashaw Edo, a passionate technical school graduate. With a modest capital of just 27,000 birr, he set out with a clear mission: to empower local farmers and businesses with high-quality, reliable agricultural machinery. Drawing on his engineering expertise and deep understanding of the agricultural sector, Mr. Gashaw was determined to bridge the gap between traditional farming methods and modern technology.
              </p>
              <p className="text-lg text-foreground leading-relaxed mb-8">
                What started as a small venture soon grew into a respected enterprise, achieving numerous milestones along the way. Elshalom Electromechanical Engineering is now recognized not only for its innovative machinery but also for its commitment to transforming the agricultural landscape of Ethiopia, one machine at a time.
              </p>
            </div>

            {/* Core Values */}
            {/* <div className="grid gap-4">
              {values.map((value, index) => (
                <Card 
                  key={index}
                  className={`transition-all duration-300 cursor-pointer border-l-4 border-l-secondary hover:shadow-lg ${hoveredCard === index ? 'bg-muted scale-105' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="text-primary flex-shrink-0">
                        {value.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">{value.title}</h3>
                        <p className={`text-foreground transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-70'}`}>
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
          background: linear-gradient(90deg, hsl(var(--crimson)) 0%, hsl(var(--secondary)) 50%, hsl(var(--crimson)) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: text-gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}