'use client';

import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp, Send } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    for (let i = 0; i < 30; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(242, 167, 27, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#734C29] text-[#F2C84B] overflow-hidden">
      {/* Particle Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-30"
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative w-32 h-32">
                  <Image
                    src="/image/Asset 2@7x.png"
                    alt="Maritu Honey Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <h3 className="text-2xl text-[#F2C84B] font-bold">
                  Maritu Honey
                </h3>
              </div>
              <p className="text-[#F2C84B]/90 leading-relaxed">
                Pure, natural, and ethically harvested from the highlands of Ethiopia. Maritu Honey brings you golden goodness in every jar, supporting local beekeepers and sharing Ethiopia's natural wealth with the world.
              </p>
              
              {/* Social Media */}
              <div className="flex gap-4">
                {[
                  {
                    name: "TikTok",
                    href: "https://www.tiktok.com/@.maritu.honey?is_from_webapp=1&sender_device=pc",
                    icon: (
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    )
                  },
                  {
                    name: "Facebook",
                    href: "https://web.facebook.com/profile.php?id=61577289740190",
                    icon: <Facebook className="w-5 h-5" />
                  },
                  {
                    name: "Telegram",
                    href: "https://t.me/maritu_honey",
                    icon: <Send className="w-5 h-5" />
                  }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-[#F2A71B]/20 rounded-full flex items-center justify-center hover:bg-[#F2A71B] hover:text-[#0D0D0D] transition-all duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#F2A71B]">Quick Links</h4>
              <ul className="space-y-3">
                {['About Us', 'Products', 'Testimonials', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-[#F2C84B]/80 hover:text-[#F2A71B] transition-colors duration-300">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Product Categories */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#F2A71B]">Product Categories</h4>
              <ul className="space-y-3">
                {['1kg Maritu Honey Jar', '500g Maritu Honey Jar', '250g Maritu Honey Jar'].map((category) => (
                  <li key={category}>
                    <a href="#products" className="text-[#F2C84B]/80 hover:text-[#F2A71B] transition-colors duration-300">
                      {category}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-[#F2A71B]">Stay Updated</h4>
              <p className="text-[#F2C84B]/80 mb-4">
                Subscribe to our newsletter for the latest updates and insights.
              </p>
              <div className="space-y-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-[#F2C84B]/10 border-[#D97C2B]/40 text-[#F2C84B] placeholder:text-[#F2C84B]/60 focus:border-[#F2A71B]"
                />
                <Button className="w-full bg-[#F2A71B] hover:bg-[#D97C2B] text-[#0D0D0D] font-semibold transition-colors duration-300">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#D97C2B]/40">
          <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#F2C84B]/60 text-sm">
              © {currentYear} Maritu Honey. All rights reserved.
            </p>
            
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-[#F2C84B]/60 hover:text-[#F2A71B] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-[#F2C84B]/60 hover:text-[#F2A71B] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-[#F2C84B]/60 hover:text-[#F2A71B] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 w-12 h-12 bg-[#F2A71B] hover:bg-[#D97C2B] text-[#0D0D0D] rounded-full shadow-lg z-50 transition-colors duration-300"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
}