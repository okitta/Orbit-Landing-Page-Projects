'use client';

import React, { useState, useEffect } from 'react';
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
      name: 'Premium Leather Handbag',
      price: '4,000 ETB',
      description: 'Elegant and spacious, our leather handbags are perfect for everyday essentials with a touch of luxury.',
      image: '/image/product_1.jpg'
    },
    {
      name: "Men's Premium Leather Bags",
      price: '5,000 ETB',
      description: 'Rugged and refined, this backpack balances function and form for the modern man on the move.',
      image: '/image/product_2.jpg'
    },
    {
      name: 'Laptop Bag',
      price: '4,000 ETB',
      description: 'Sleek and structured leather laptop bag built for professionals who value both protection and presentation.',
      image: '/image/product_3.jpg'
    },
    {
      name: "Women's Premium Leather Handbags",
      price: '4,000 ETB',
      description: "Elegant, flowy, stylish and practical, this women's hand bag is the perfect grab-and-go companion for any outing.",
      image: '/image/product_4.jpg'
    },
    {
      name: 'Leather Sandals',
      price: '1,500 ETB',
      description: 'Handcrafted from genuine leather, our sandals offer a perfect blend of comfort, durability, and style — made for both men and women.',
      image: '/image/product_5.jpg'
    },
    {
      name: 'Leather Sandals',
      price: '1,500 ETB',
      description: 'Handcrafted from genuine leather, our sandals offer a perfect blend of comfort, durability, and style — made for both men and women.',
      image: '/image/product_7.jpg'
    }
  ];

  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate the number of slides (pages)
  const totalSlides = Math.max(1, Math.ceil(products.length / cardsPerView));
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Reset to first slide if cardsPerView changes and currentSlide is out of range
    if (currentSlide > totalSlides - 1) setCurrentSlide(0);
  }, [cardsPerView, totalSlides]);

  // Get the products for the current slide
  const getVisibleProducts = () => {
    const start = currentSlide * cardsPerView;
    const end = start + cardsPerView;
    // If not enough products to fill the last slide, pad with placeholders
    const visible = products.slice(start, end);
    while (visible.length < cardsPerView) {
      // Push a dummy object with unique key, but type Product
      visible.push({
        name: '',
        price: '',
        description: '',
        image: '',
        // Optionally, add a special property to identify as placeholder if needed
        // _placeholder: true
      });
    }
    return visible;
  };

  const handlePrevious = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-leather-primary relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-leather-brown mb-6">
            Premium Leather Collection
          </h2>
          <p className="text-lg text-leather-secondary max-w-3xl mx-auto">
            Discover our exquisite range of handcrafted leather products, made with authentic Ethiopian leather and traditional craftsmanship
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] justify-center"
              style={{ transform: 'none' }}
            >
              {getVisibleProducts().map((product, index) => (
                product ? (
                  <div key={"product-card-" + index} className="w-full flex-shrink-0 px-1 sm:px-2 lg:px-4 max-w-[400px] min-w-[260px] sm:min-w-[320px] lg:min-w-[340px]">
                    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-[1.02] transform-gpu bg-leather-primary h-full flex flex-col">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>
                      <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-2 sm:mb-4">
                          <h3 className="text-lg sm:text-xl font-semibold text-leather-brown">{product.name}</h3>
                          <span className="text-base sm:text-lg font-bold text-leather-secondary">{product.price}</span>
                        </div>
                        <p className="text-leather-secondary mb-4 sm:mb-6 flex-1 text-sm sm:text-base">{product.description}</p>
                        <Button 
                          className="w-full bg-leather-brown hover:bg-leather-primary hover:text-leather-brown transition-colors duration-300 mt-auto text-sm sm:text-base"
                          onClick={() => window.open('https://t.me/abrishleather', '_blank')}
                        >
                        Buy Now
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                ) : null
              ))}
            </div>
          </div>

          <Button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-leather-primary text-leather-brown hover:bg-leather-accent hover:text-leather-primary rounded-full p-2 shadow-lg"
            disabled={products.length <= cardsPerView}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-leather-primary text-leather-brown hover:bg-leather-accent hover:text-leather-primary rounded-full p-2 shadow-lg"
            disabled={products.length <= cardsPerView}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
}