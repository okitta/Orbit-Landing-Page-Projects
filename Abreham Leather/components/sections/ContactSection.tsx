'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, MessageCircle, Facebook, Send, Film } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const { toast } = useToast();

  const validateField = (name: string, value: string) => {
    switch (name) {
      case 'name':
        return value.length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Please enter a valid email' : '';
      case 'phone':
        return !/^\+?[\d\s\-\(\)]{10,}$/.test(value) ? 'Please enter a valid phone number' : '';
      case 'message':
        return value.length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    };
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate all fields
    const newErrors: Record<string, string> = {};
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with your public key
      emailjs.init(process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY!);

      // Send email using EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_YOUR_SERVICE_ID!,
        process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID!,
        {
          to_email: 'contact@abrehamleather.com',
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          message: formData.message
        }
      );

      toast({
        title: 'Message Sent Successfully!',
        description: "Thank you for your message. We'll get back to you soon.",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: 'Error Sending Message',
        description: 'Please try again later or contact us directly.',
        variant: 'destructive',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Visit us",
      details: [
        "Hawassa beside Addis ketema highschool"
      ]
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Call us",
      details: [
        "0916866084",
        "0930280511"
      ]
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email us",
      details: ["contact@abrishleather.com"]
    }
  ];

  const socialLinks = [
    { name: "Tiktok", url: "https://tiktok.com/@abrishleather", icon: <Film className="w-5 h-5" /> },
    { name: "Facebook", url: "https://facebook.com/abrishleatherproduct", icon: <Facebook className="w-5 h-5" /> },
    { name: "Telegram", url: "https://t.me/abrishleather", icon: <Send className="w-5 h-5" /> }
  ];

  return (
    <section className="py-24 bg-leather-primary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-leather-brown mb-6">Let's Stay Connected</h2>
          <p className="text-lg text-leather-secondary max-w-2xl mx-auto">
            Got a question, custom order, or want to learn more about our products? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="w-full shadow-lg border-2 border-leather-primary bg-leather-primary">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-leather-brown">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    className="border-2 border-leather-brown bg-leather-primary"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    className="border-2 border-leather-brown bg-leather-primary"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className="border-2 border-leather-brown bg-leather-primary"
                  />
                  {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className="min-h-[120px] border-2 border-leather-brown bg-leather-primary"
                  />
                  {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-leather-secondary hover:bg-leather-accent text-leather-brown font-semibold"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                  <MessageCircle className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="transform-gpu transition-all duration-300 hover:shadow-lg hover:scale-105 border-2 border-leather-primary bg-leather-primary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-leather-brown">{info.icon}</div>
                      <div>
                        <h3 className="font-semibold text-leather-brown mb-2">{info.title}</h3>
                        {info.details.map((detail, i) => (
                          <p key={i} className="text-leather-secondary">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Media Links */}
            <Card className="transform-gpu transition-all duration-300 hover:shadow-lg border-2 border-leather-primary bg-leather-primary">
              <CardContent className="p-6">
                <h3 className="font-semibold text-leather-brown mb-4">Follow us on</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-full bg-leather-secondary/10 text-leather-secondary hover:bg-leather-secondary hover:text-white transition-all duration-300 transform hover:scale-110"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}