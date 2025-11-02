import React from 'react';

export interface Feature {
  category: string;
  level: 'bronze' | 'silver' | 'gold';
  name: string;
  description: string;
  rankings: string[];
  icon: React.ReactNode;
}

export interface ServiceCategory {
  name: string;
  icon: React.ReactNode;
  features: Feature[];
}

export interface Service {
  tier: string;
  tierSubtitle: string;
  price: string;
  description: string;
  categories: ServiceCategory[];
  main?: boolean;
}

export interface SuccessStory {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  impact: string[];
}

export interface Testimonial {
  quote: string;
  author: string;
  title: string;
  university: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface NewsArticle {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  imageUrl: string;
  category: string;
}
