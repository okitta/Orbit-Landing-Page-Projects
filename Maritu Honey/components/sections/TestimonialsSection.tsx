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
      name: "Samrawit T., Addis Ababa",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Maritu Honey is the best I've ever tasted — rich, smooth, and deeply flavorful. A must-have in my kitchen!"
    },
    {
      name: "Daniel K., Bahir Dar",
      image: "/image/testimonial.png",
      rating: 5,
      text: "I love how natural and clean this honey is. You can tell it's authentic. I've even started using it in my skincare!"
    },
    {
      name: "Marta G., Hawassa",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Fantastic packaging and the taste is unmatched. It reminded me of my childhood in the countryside."
    },
    {
      name: "Getahun A., Mekelle",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Affordable, high-quality honey that I trust. I buy the 1kg size and it lasts me months."
    },
    {
      name: "Helen M., USA (import)",
      image: "/image/testimonial.png",
      rating: 5,
      text: "Delivered fast, and the flavor is rich and deep. I've recommended it to all my friends."
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
        className={`w-5 h-5 ${index < rating ? 'fill-[#F2A71B] text-[#F2A71B]' : 'text-[#D97C2B]/30'}`}
      />
    ));
  };

  return (
    <section className="py-32 bg-[#F2C84B]/15 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F2A71B]/10 to-transparent"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0D0D0D] mb-6">
            What Our Customers Say
          </h2>
          <p className="text-lg text-[#734C29] max-w-3xl mx-auto">
            Real experiences from our valued customers who trust in Maritu Honey quality
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full bg-[#F2C84B]/80 backdrop-blur-sm hover:bg-[#F2C84B] transition-all duration-300 hover:scale-105 border-[#D97C2B]"
            >
              <ChevronLeft className="h-6 w-6 text-[#0D0D0D]" />
            </Button>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full bg-[#F2C84B]/80 backdrop-blur-sm hover:bg-[#F2C84B] transition-all duration-300 hover:scale-105 border-[#D97C2B]"
            >
              <ChevronRight className="h-6 w-6 text-[#0D0D0D]" />
            </Button>
          </div>

          {/* Main Testimonial Card */}
          <Card className="relative bg-[#F2C84B]/30 backdrop-blur-sm border-2 border-[#D97C2B]/20 shadow-xl max-w-3xl mx-auto transform-gpu transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] rounded-2xl">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mb-6 ring-4 ring-[#F2A71B]/30">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-1 mb-4">{renderStars(testimonials[currentTestimonial].rating)}</div>
                <blockquote className="text-xl text-[#734C29] italic mb-6">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                <cite className="text-[#0D0D0D] font-semibold not-italic">
                  — {testimonials[currentTestimonial].name}
                </cite>
              </div>
            </CardContent>
          </Card>

          {/* Background Testimonial Cards */}
          <Card className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-[30%] transform rotate-[-12deg] opacity-20 w-full max-w-3xl pointer-events-none bg-[#F2A71B]/20 rounded-2xl">
            <CardContent className="p-8 blur-sm" />
          </Card>
          <Card className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-[30%] transform rotate-[12deg] opacity-20 w-full max-w-3xl pointer-events-none bg-[#F2A71B]/20 rounded-2xl">
            <CardContent className="p-8 blur-sm" />
          </Card>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentTestimonial ? 'bg-[#F2A71B] w-6' : 'bg-[#D97C2B]/40 hover:bg-[#D97C2B]/60'}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}