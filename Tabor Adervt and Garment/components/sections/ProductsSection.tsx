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
    <section id="products" className="py-24 bg-primary/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Branded Products that Make a Statement
          </h2>
          <p className="text-lg text-black/80 max-w-3xl mx-auto">
            Explore our wide selection of custom apparel and gift items designed to amplify your identity.
          </p>
        </div>
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out mb-4"
              style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
            >
              {products.map((product, index) => (
                <div key={index} className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 px-2 sm:px-3 lg:px-4">
                  <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-pureWhite">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold text-black">
                          {product.name}
                        </h3>
                      </div>
                      <p className="text-black/80 mb-6">{product.description}</p>
                      <Button
                        className="w-full bg-primary text-primary-foreground font-semibold transition-colors duration-300 shadow-md hover:bg-primary/80"
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
          {/* Carousel Navigation */}
          <Button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-pureWhite text-primary hover:bg-primary hover:text-primary-foreground rounded-full p-2 shadow-lg"
            aria-label="Previous"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-pureWhite text-primary hover:bg-primary hover:text-primary-foreground rounded-full p-2 shadow-lg"
            aria-label="Next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}
// Services Section as a separate component
export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-primary/10 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black mb-6">
            Custom Printing & Garment Services That Elevate Your Brand
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Banner Printing */}
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-3 bg-brand-dillGreen rounded-full p-2">🖼️</span>
              <h3 className="text-xl font-semibold text-black">Banner Printing</h3>
              <p className="text-black/80 mb-4">Eye-catching and durable—ideal for indoor and outdoor visibility.</p>
            </CardContent>
          </Card>
          {/* T-shirt Printing */}
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-3 bg-brand-dillGreen rounded-full p-2">👕</span>
              <h3 className="text-xl font-semibold text-black">T-shirt Printing</h3>
              <p className="text-black/80 mb-4">High-quality custom prints with vibrant colors and lasting impressions.</p>
            </CardContent>
          </Card>
          {/* Stamp Printing */}
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-3 bg-brand-dillGreen rounded-full p-2">🧾</span>
              <h3 className="text-xl font-semibold text-black">Stamp Printing</h3>
              <p className="text-black/80 mb-4">Professional custom stamps for businesses, schools, or personal use.</p>
            </CardContent>
          </Card>
          {/* Mug Printing */}
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-3 bg-brand-dillGreen rounded-full p-2">☕</span>
              <h3 className="text-xl font-semibold text-black">Mug Printing</h3>
              <p className="text-black/80 mb-4">Personalized mugs for gifting or brand merchandise.</p>
            </CardContent>
          </Card>
          {/* Paper Bag Printing */}
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-3 bg-brand-dillGreen rounded-full p-2">🛍️</span>
              <h3 className="text-xl font-semibold text-black">Paper Bag Printing</h3>
              <p className="text-black/80 mb-4">Eco-friendly and brand-forward—designed to carry your message.</p>
            </CardContent>
          </Card>
          {/* Garment Production */}
          <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-white">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <span className="text-3xl mb-3 bg-brand-dillGreen text-white rounded-full p-2">🧵</span>
              <h3 className="text-xl font-semibold text-black">Garment Production</h3>
              <p className="text-black/80 mb-4">In-house garment crafting. From fabric selection to final stitch, we produce quality shirts, jerseys, and custom pieces tailored to your needs. Fashion labels, corporate uniforms, or promotional wear—we bring precision and passion to every thread.</p>
            </CardContent>
          </Card>
        </div>
        <div className="text-center">
          <Button onClick={() => window.open('https://t.me/teyimgarment', '_blank')} className="bg-primary hover:bg-brand-dillGreen text-black font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Let's Print Together
          </Button>
        </div>
      </div>
    </section>
  );
}
