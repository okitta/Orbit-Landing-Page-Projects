'use client';

import React from 'react';
import { Instagram, Facebook, Send, MapPin, Phone, Mail } from 'lucide-react';

export default function FooterSection() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Products',
      links: [
        { name: 'Leather Bags', href: '#products' },
        { name: 'Wallets', href: '#products' },
        { name: 'Accessories', href: '#products' },
        { name: 'Custom Orders', href: '#contact' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#about' },
        { name: 'Our Process', href: '#about' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { name: 'Merkato Leather District', href: '#', icon: <MapPin className="w-4 h-4" /> },
        { name: 'Addis Ababa, Ethiopia', href: '#', icon: <MapPin className="w-4 h-4" /> },
        { name: '+251 911 234 567', href: 'tel:+251911234567', icon: <Phone className="w-4 h-4" /> },
        { name: 'contact@abrehamleather.com', href: 'mailto:contact@abrehamleather.com', icon: <Mail className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://instagram.com/abrehamleather', icon: <Instagram className="w-5 h-5" /> },
    { name: 'Facebook', href: 'https://facebook.com/abrehamleather', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Telegram', href: 'https://t.me/abrehamleather', icon: <Send className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-leather-brown text-leather-primary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Abrish Leather</h2>
            <p className="text-leather-secondary text-sm">
              Crafting premium Ethiopian leather goods with traditional artistry and contemporary design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-leather-primary hover:text-leather-accent transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-lg font-semibold">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-leather-secondary hover:text-leather-accent transition-colors duration-300 flex items-center gap-2"
                    >
                      {'icon' in link && link.icon}
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-leather-primary/10 text-center text-leather-secondary text-sm">
          <p>© {currentYear} Abrish Leather. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}