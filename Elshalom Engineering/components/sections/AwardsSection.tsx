'use client';

import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Star, Medal } from 'lucide-react';

interface Certificate {
  id: number;
  title: string;
  year: string;
  category: string;
  description: string;
  image: string;
}

export default function AwardsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      id: 1,
      title: 'Excellence in Engineering Innovation',
      year: '2024',
      category: 'Innovation',
      description: 'Recognized for outstanding contributions to agricultural machinery development and engineering excellence.',
      image: '/image/certificate_1.jpg' // Replace with actual certificate images
    },
    {
      id: 2,
      title: 'Quality Management System',
      year: '2018',
      category: 'Quality',
      description: 'Certification establishing our company as a model example of quality management excellence in the city and region.',
      image: '/image/certificate_2.jpg'
    },
    {
      id: 3,
      title: 'Quality Management System',
      year: '2016',
      category: 'Quality',
      description: 'Initial certification establishing our company as a regional model for quality management and operational excellence.',
      image: '/image/certificate_3.jpg'
    },
    {
      id: 4,
      title: 'Excellence in Engineering Innovation',
      year: '2024',
      category: 'Innovation',
      description: 'Awarded for breakthrough innovations in agricultural machinery design and manufacturing processes.',
      image: '/image/certificate_4.jpg'
    },
    {
      id: 5,
      title: 'Quality Management System',
      year: '2017',
      category: 'Quality',
      description: 'Renewed certification reinforcing our position as the leading quality management model in the city and surrounding region.',
      image: '/image/certificate_5.jpg'
    },
    {
      id: 6,
      title: 'Excellence in Engineering Innovation',
      year: '2018',
      category: 'Innovation',
      description: 'Recognized for pioneering engineering solutions and innovative approaches to agricultural challenges.',
      image: '/image/certificate_6.jpg'
    },
    {
      id: 7,
      title: 'Recognition for Job Creation',
      year: '2023',
      category: 'Business',
      description: 'Acknowledged for significant contribution to local employment and economic development through job creation.',
      image: '/image/certificate_7.jpg'
    },
    {
      id: 8,
      title: 'Business Excellence Award',
      year: '2024',
      category: 'Business',
      description: 'Recognized for outstanding business performance and contribution to local economic development.',
      image: '/image/certificate_8.jpg'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case 'innovation':
        return <Star className="w-4 h-4" />;
      case 'quality':
        return <Award className="w-4 h-4" />;
      case 'sustainability':
        return <Medal className="w-4 h-4" />;
      default:
        return <Trophy className="w-4 h-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'innovation':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'quality':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'sustainability':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'agriculture':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'safety':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'service':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'technology':
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'business':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-primary/10 text-primary border-primary/20';
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-muted via-white to-muted relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,0,0,0.02)_0%,transparent_50%)]"></div>
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-crimson" />
            <Badge variant="outline" className="border-crimson text-crimson px-4 py-2">
              Awards & Recognition
            </Badge>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary mb-6">
            Celebrating Our Achievements
          </h2>
          <p className="text-lg text-foreground max-w-3xl mx-auto">
            Our commitment to excellence has been recognized through various prestigious awards and certifications, 
            validating our dedication to quality, innovation, and customer satisfaction.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {certificates.map((certificate) => (
            <Card
              key={certificate.id}
              className="group cursor-pointer overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-105 transform-gpu border-primary/10 bg-white/80 backdrop-blur-sm"
              onClick={() => setSelectedCertificate(certificate)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 z-10" />
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 z-20">
                  <Badge className={`${getCategoryColor(certificate.category)} border-2`}>
                    {getCategoryIcon(certificate.category)}
                    <span className="ml-1">{certificate.category}</span>
                  </Badge>
                </div>
                <div className="absolute bottom-3 left-3 z-20">
                  <Badge variant="secondary" className="bg-white/90 text-foreground font-semibold">
                    {certificate.year}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-primary text-sm leading-tight mb-2 line-clamp-2 group-hover:text-crimson transition-colors duration-300">
                  {certificate.title}
                </h3>
                <p className="text-xs text-foreground/70 line-clamp-2">
                  {certificate.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 text-primary/70 text-sm">
            <Trophy className="w-4 h-4" />
            <span>Click on any certificate to view details</span>
          </div>
        </div>
      </div>

      {/* Certificate Detail Modal */}
      {selectedCertificate && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedCertificate(null)}
        >
          <Card 
            className="max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <Badge className={`${getCategoryColor(selectedCertificate.category)} mb-2`}>
                    {getCategoryIcon(selectedCertificate.category)}
                    <span className="ml-1">{selectedCertificate.category}</span>
                  </Badge>
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {selectedCertificate.title}
                  </h3>
                  <p className="text-foreground/70 mb-4">
                    Awarded in {selectedCertificate.year}
                  </p>
                </div>
                <Badge variant="outline" className="text-lg font-bold border-2 border-primary/30">
                  {selectedCertificate.year}
                </Badge>
              </div>
              
              <div className="relative aspect-video mb-6 rounded-lg overflow-hidden">
                <img
                  src={selectedCertificate.image}
                  alt={selectedCertificate.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <p className="text-foreground leading-relaxed mb-6">
                {selectedCertificate.description}
              </p>
              
              <div className="flex justify-end">
                <button
                  onClick={() => setSelectedCertificate(null)}
                  className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground transition-colors duration-200"
                >
                  Close
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </section>
  );
} 