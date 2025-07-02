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
      name: 'Precast Bridge Metals / Prefabricated Steel Components',
      price: '',
      description: 'Built for strength, designed for ease. Our prefabricated bridge components are precision-engineered for quick installation, cost-effectiveness, and exceptional durability.',
      image: '/image/product_1.jpg'
    },
    {
      name: 'Charcoal Making Machine',
      price: '',
      description: 'Turn waste into energy. Eco-friendly biomass charcoal machines to convert organic waste into sustainable fuel sources for industries and households.',
      image: '/image/product_2.jpg'
    },
    {
      name: 'Bread Mixer / Dough Mixer',
      price: '',
      description: 'Mix with consistency. Heavy-duty dough mixers for bakeries and factories—ensuring even, fast, and high-volume production.',
      image: '/image/product_3.jpg'
    },
    {
      name: 'Electric Vehicles (EVs)',
      price: '',
      description: 'Drive into the future. Affordable, efficient, and eco-conscious electric mobility options designed for cities and industries.',
      image: '/image/product_4.jpg'
    },
    {
      name: 'Bread Kneading Machine',
      price: '',
      description: 'Automated precision, bakery perfection. Optimized kneading machines for uniform dough texture and minimized manual labor.',
      image: '/image/product_5.jpg'
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
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-steelBlue mb-6">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our range of engineering solutions for infrastructure, manufacturing, and sustainability.
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
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-steelBlue/20 to-transparent z-10" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-steelBlue">{product.name}</h3>
                        <span className="text-lg font-bold text-gold">{product.price}</span>
                      </div>
                      <p className="text-gray-600 mb-6">{product.description}</p>
                      <Button 
                        className="w-full bg-steelBlue hover:bg-charcoal text-white transition-colors duration-300"
                        onClick={() => {
                          window.open('https://t.me/YaredEngineering', '_blank');
                        }}
                      >
                        Order Now
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <Button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-steelBlue hover:bg-steelBlue hover:text-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-steelBlue hover:bg-steelBlue hover:text-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}