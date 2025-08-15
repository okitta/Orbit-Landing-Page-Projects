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
      name: 'Coffee Grinder Machine',
      price: '',
      description: 'Efficient grinding with consistent quality, designed for large-volume coffee producers and commercial operations.',
      image: '/image/product_1.jpg'
    },
    {
      name: 'Bread Kneading Machine',
      price: '',
      description: 'Mixes dough evenly and powerfully for commercial bakeries, ensuring consistent quality in every batch.',
      image: '/image/product_2.jpg'
    },
    {
      name: 'Bread Dough Rising Machine',
      price: '',
      description: 'Automated temperature and humidity control system for perfect dough proofing in commercial bakeries.',
      image: '/image/product_3.png'
    },
    {
      name: 'Grain Sorting (Classifier) Machine',
      price: '',
      description: 'High-precision grain sorting and grading system that increases crop quality and market value.',
      image: '/image/product_4.jpg'
    },
    {
      name: 'Manure Composting Machine',
      price: '',
      description: 'Eco-friendly machine that transforms animal waste into rich, usable compost for sustainable farming.',
      image: '/image/product_5.jpg'
    },
    {
      name: 'Hand Tractor',
      price: '',
      description: 'Versatile and compact tractor ideal for plowing, tilling, and preparing small to medium farmlands.',
      image: '/image/product_6.jpg'
    },
    {
      name: 'Butter Maker Machine',
      price: '',
      description: 'Hygiene-focused butter production system with food-grade components for commercial dairy operations.',
      image: '/image/product_7.jpg'
    },
    {
      name: 'Grain Mill & Roaster',
      price: '',
      description: 'Grinds and roasts cereals like barley, wheat, and corn simultaneously, delivering flavorful, high-quality flour efficiently.',
      image: '/image/product_8.jpg'
    },
    {
      name: 'AutoBake Oven',
      price: '',
      description: 'Handles the baking process with precision, ensuring evenly baked bread with consistent quality.',
      image: '/image/product_9.jpg'
    },
    {
      name: 'MultiGrain Mill',
      price: '',
      description: 'Capable of milling 40 kilos in just 10 minutes, efficiently grinding barley, wheat, and corn into fine, high-quality flour.',
      image: '/image/product_10.jpg'
    },
    {
      name: '500L Liquid Soap Mixer',
      price: '',
      description: 'Efficiently blends up to 500 liters in just 30 minutes, ensuring smooth, consistent quality.',
      image: '/image/product_11.jpg'
    },
    {
      name: '1000L Liquid Soap Mixer',
      price: '',
      description: 'High-capacity mixer blending up to 1000 liters in 30 minutes, ensuring uniform consistency.',
      image: '/image/product_12.jpg'
    },
    {
      name: 'Different Gym Materials',
      price: '',
      description: 'We design and manufacture durable, high-performance gym equipment, from cardio and strength machines to free weights.',
      image: '/image/product_13.jpg'
    },
    {
      name: 'Drive way gate',
      price: '',
      description: 'We design and manufacture durable, stylish driveway gates that combine security and aesthetic appeal.',
      image: '/image/product_14.jpg'
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
    <section className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Our Engineering Solutions
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Comprehensive engineering services and equipment for industrial and commercial applications.
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
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu border-primary/10 mb-4">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-10" />
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-semibold text-primary">{product.name}</h3>
                        <span className="text-lg font-bold text-secondary">{product.price}</span>
                      </div>
                      <p className="text-foreground mb-6">{product.description}</p>
                      <Button 
                        className="w-full bg-primary hover:bg-primary/80 text-white font-semibold transition-colors duration-300"
                        onClick={() => window.open('https://t.me/GashawEdeo0911763219or0921765465', '_blank')}
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
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white text-primary hover:bg-primary hover:text-white rounded-full p-2 shadow-lg"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white text-primary hover:bg-primary hover:text-white rounded-full p-2 shadow-lg"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}