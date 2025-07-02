'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
}

export default function ProductsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const products: Product[] = [
    {
      name: '1kg Maritu Honey Jar',
      price: '',
      description: "Perfect for families and bulk users, this jar ensures you'll never run out of natural sweetness.",
      image: '/image/product_3.jpg'
    },
    {
      name: '500g Maritu Honey Jar',
      price: '',
      description: 'A great balance between value and convenience, ideal for everyday use.',
      image: '/image/product_4.jpg'
    },
    {
      name: '250g Maritu Honey Jar',
      price: '',
      description: 'Compact and convenient — the perfect size for travel, gifting, or trying Maritu Honey for the first time.',
      image: '/image/product_8.jpg'
    }
  ];

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? products.length - 3 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === products.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="py-24 bg-primary/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Products
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Whether you're looking for everyday sweetness or a premium gift, Maritu Honey offers sizes to match your needs – always packed fresh and sealed with care.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 lg:px-4">
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu rounded-2xl border-primary/20">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#6A1B9A]/20 to-transparent z-10" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-[#6A1B9A]">{product.name}</h3>
                        <span className="text-lg font-bold text-[#FFD700]">{product.price}</span>
                      </div>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <Button 
                        className="w-full bg-primary hover:bg-yellow-400 text-foreground font-semibold transition-colors duration-300 rounded-full"
                        onClick={() => {
                          const section = document.getElementById('contact');
                          if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Buy Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-[#6A1B9A] hover:bg-[#6A1B9A] hover:text-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-[#6A1B9A] hover:bg-[#6A1B9A] hover:text-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}