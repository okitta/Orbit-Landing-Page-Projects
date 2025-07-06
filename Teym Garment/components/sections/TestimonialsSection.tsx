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
      name: "Mekdes A.",
      image: "/image/testimonial.png",
      rating: 5,
      text: "I wore Teyim's crop top to a party and got compliments all night. Super comfy and cute!"
    },
    {
      name: "Yared T.",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Honestly the best-fitting men's shirt I've bought in a long time. Top quality!"
    },
    {
      name: "Hanna M.",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Their two-piece sets are perfect for both work and casual days. Love the versatility!"
    },
    {
      name: "Liya G.",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Everything about the gift set I bought was beautiful. Packaging, quality, all of it!"
    },
    {
      name: "Samuel B.",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Supporting local while looking stylish? Count me in. Teyim delivers every time."
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
        className={`w-5 h-5 ${index < rating ? 'fill-[#402222] text-[#402222]' : 'text-[#0D0D0D]/20'}`}
      />
    ));
  };

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#402222]/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#402222] mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#0D0D0D] max-w-3xl mx-auto">
            Real experiences from our valued customers who trust in Teyim quality
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="h-6 w-6 text-[#402222]" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="h-6 w-6 text-[#402222]" />
            </Button>
          </div>

          {/* Main Testimonial Card */}
          <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-[#402222]/10 shadow-xl max-w-3xl mx-auto transform-gpu transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-[#402222]/20">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1 mb-4">{renderStars(testimonials[currentTestimonial].rating)}</div>
                <blockquote className="text-xl text-[#0D0D0D] italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <cite className="text-[#402222] font-semibold not-italic">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </div>
            </CardContent>
          </Card>

          {/* Background Testimonial Cards */}
          <Card className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[30%] transform rotate-[-12deg] opacity-20 w-full max-w-3xl pointer-events-none">
            <CardContent className="p-8 blur-sm" />
          </Card>
          <Card className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] transform rotate-[12deg] opacity-20 w-full max-w-3xl pointer-events-none">
            <CardContent className="p-8 blur-sm" />
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-[#402222] w-6' : 'bg-[#402222]/20 hover:bg-[#402222]/40'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}