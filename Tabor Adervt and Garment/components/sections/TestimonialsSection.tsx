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
      name: "Selam A., Addis Ababa",
      image: "/image/testimonial.png",
      rating: 5,
      text: "I ordered customized hoodies for my team—amazing quality and fast delivery!"
    },
    {
      name: "Daniel M.",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Their printing service exceeded my expectations. Will definitely return!"
    },
    {
      name: "Henok T., Business Owner",
      image: "/image/testimonial.png",
      rating: 5,
      text: "The garment quality is top-notch. Proud to wear our brand every day."
    },
    {
      name: "Ruth N., Event Organizer",
      image: "/image/testimonial.png",
      rating: 5,
      text: "From shirts to mugs, they made our event stand out. Thank you, Tabor!"
    },
    {
      name: "Amanuel B.",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Excellent service, creative designs, and attention to detail."
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
        className={`w-5 h-5 ${index < rating ? 'fill-primary text-primary' : 'text-primary/20'}`}
      />
    ));
  };

  return (
    <section className="py-32 bg-primary/10 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-lg text-primary/80 max-w-3xl mx-auto">
            Trusted by hundreds—here's why our customers keep coming back.
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-primary transition-all duration-300 hover:scale-105"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </Button>
          </div>

          {/* Main Testimonial Card */}
          <Card className="relative bg-white/80 backdrop-blur-sm border-2 border-primary/10 shadow-xl max-w-3xl mx-auto transform-gpu transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-primary/20">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1 mb-4">{renderStars(testimonials[currentTestimonial].rating)}</div>
                <blockquote className="text-xl text-primary/80 italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <cite className="text-primary font-semibold not-italic">
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
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-primary w-6' : 'bg-primary/20 hover:bg-primary/40'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}