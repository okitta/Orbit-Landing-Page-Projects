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
        { name: 'Hawassa beside Addis ketema highschool', href: '#', icon: <MapPin className="w-4 h-4" /> },
        { name: 'Hawassa, Ethiopia', href: '#', icon: <MapPin className="w-4 h-4" /> },
        { name: '+251 916 866 084', href: 'tel:+251916866084', icon: <Phone className="w-4 h-4" /> },
        { name: 'contact@abrehamleather.com', href: 'mailto:contact@abrehamleather.com', icon: <Mail className="w-4 h-4" /> }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Tiktok', href: 'https://tiktok.com/@abrishleather', icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
      </svg>
    ) },
    { name: 'Facebook', href: 'https://web.facebook.com/abrishleatherproduct', icon: <Facebook className="w-5 h-5" /> },
    { name: 'Telegram', href: 'https://t.me/abrishleather', icon: <Send className="w-5 h-5" /> }
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