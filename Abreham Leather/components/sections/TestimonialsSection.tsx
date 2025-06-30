'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Testimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
}

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Selam M.',
      image: '/image/testimonial.png',
      rating: 5,
      text: "I've had my Abrish handbag for over a year now and it still looks brand new. Amazing quality!"
    },
    {
      name: 'Dawit L.',
      image: '/image/testimonial.png',
      rating: 5,
      text: "My leather backpack is a daily essential. It's sturdy, stylish, and gets compliments everywhere I go."
    },
    {
      name: 'Sara B.',
      image: '/image/testimonial.png',
      rating: 5,
      text: "I gifted a womens hand bag to my sister — she won't stop raving about it. Beautiful work!"
    },
    {
      name: 'Henok A.',
      image: '/image/testimonial.png',
      rating: 5,
      text: "The details and finishing on the laptop bag are next level. Worth every birr."
    },
    {
      name: 'Ruth T.',
      image: '/image/testimonial.png',
      rating: 5,
      text: "I love supporting local brands, especially when the products are this good. Abrish truly delivers."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${index < rating ? 'fill-[#D9A404] text-[#D9A404]' : 'text-[#D9A404]'}`}
      />
    ));
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 bg-leather-primary relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-leather-neutral/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-leather-brown mb-4 sm:mb-6">
            What Our Customers Say
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-leather-secondary max-w-2xl mx-auto">
            Real experiences from our valued customers who trust in Abrish's authentic leather craftsmanship
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-leather-primary/80 backdrop-blur-sm hover:bg-leather-primary transition-all duration-300 hover:scale-105 w-10 h-10 sm:w-12 sm:h-12"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-leather-brown" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-leather-primary/80 backdrop-blur-sm hover:bg-leather-primary transition-all duration-300 hover:scale-105 w-10 h-10 sm:w-12 sm:h-12"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-leather-brown" />
            </Button>
          </div>

          {/* Main Testimonial Card */}
          <Card className="relative bg-leather-primary/80 backdrop-blur-sm border-2 border-leather-neutral/10 shadow-xl max-w-xl sm:max-w-3xl mx-auto transform-gpu transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <CardContent className="p-4 sm:p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-4 sm:mb-6 ring-4 ring-leather-accent/20">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1 mb-2 sm:mb-4">{renderStars(testimonials[currentTestimonial].rating)}</div>
                <blockquote className="text-base sm:text-xl text-leather-secondary italic mb-4 sm:mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <cite className="text-leather-brown font-semibold not-italic text-sm sm:text-base">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </div>
            </CardContent>
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-leather-brown w-4 sm:w-6' : 'bg-leather-brown/20 hover:bg-leather-brown/40'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}