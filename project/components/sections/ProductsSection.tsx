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
      name: 'Casual Wear',
      price: '450 ETB',
      description: 'Comfortable and stylish casual wear for everyday elegance.',
      image: '/image/product_1.jpg'
    },
    {
      name: 'Summer Collection',
      price: '550 ETB',
      description: 'Light and breezy pieces perfect for the warm season.',
      image: '/image/product_2.jpg'
    },
    {
      name: 'Traditional Set',
      price: '1,200 ETB',
      description: 'Beautiful traditional Ethiopian designs with a modern twist.',
      image: '/image/product_3.jpg'
    },
    {
      name: 'Urban Style',
      price: '750 ETB',
      description: 'Contemporary urban fashion that makes a statement.',
      image: '/image/product_4.jpg'
    },
    {
      name: 'Evening Wear',
      price: '900 ETB',
      description: 'Elegant designs for special occasions and evening events.',
      image: '/image/product_5.jpg'
    },
    {
      name: 'Accessories',
      price: 'From 200 ETB',
      description: 'Stylish accessories to complement your outfit.',
      image: '/image/product_6.jpg'
    },
    {
      name: 'Formal Collection',
      price: '1,100 ETB',
      description: 'Professional and formal wear for business and special events.',
      image: '/image/product_7.jpg'
    },
    {
      name: 'Streetwear',
      price: '600 ETB',
      description: 'Bold and trendy streetwear for the fashion-forward.',
      image: '/image/product_8.jpg'
    },
    {
      name: 'Designer Series',
      price: '1,500 ETB',
      description: 'Limited edition designer pieces for the fashion enthusiast.',
      image: '/image/product_9.jpg'
    },
    {
      name: 'Seasonal Collection',
      price: '800 ETB',
      description: 'Trendy pieces that capture the essence of the season.',
      image: '/image/product_10.jpg'
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
          <h2 className="text-4xl lg:text-5xl font-bold text-[#6A1B9A] mb-6">
            Our Products
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our collection of handcrafted fashion pieces, designed with love in Ethiopia
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
                        className="w-full bg-[#6A1B9A] hover:bg-[#8E24AA] text-white transition-colors duration-300"
                        onClick={() => window.open('https://t.me/teyimgarment', '_blank')}
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