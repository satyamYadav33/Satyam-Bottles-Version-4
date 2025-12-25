
import React from 'react';
import { 
  Droplet, 
  ShieldCheck, 
  Leaf, 
  ThermometerSun, 
  Sparkles, 
  Zap 
} from 'lucide-react';
import { Product, Testimonial, Feature } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'sb-001',
    name: 'Pure Essence 500',
    tagline: 'Minimalist clarity for daily hydration',
    price: 35.00,
    originalPrice: 45.00,
    description: 'Our flagship transparent bottle, crafted from premium borosilicate glass. Lightweight yet incredibly durable, the Pure Essence series is designed to showcase the clarity of your water while providing a spill-proof experience.',
    image: 'https://picsum.photos/seed/bottle1/800/800',
    gallery: [
      'https://picsum.photos/seed/bottle1/800/800',
      'https://picsum.photos/seed/bottle1-2/800/800',
      'https://picsum.photos/seed/bottle1-3/800/800'
    ],
    category: 'Daily',
    rating: 4.8,
    reviews: 124,
    features: ['100% BPA Free', 'Heat Resistant', 'Lightweight'],
    sizes: ['500ml', '750ml'],
    colors: [
      { name: 'Crystal Clear', hex: '#FFFFFF' },
      { name: 'Sea Foam', hex: '#E0F2F1' },
      { name: 'Arctic Blue', hex: '#E1F5FE' }
    ],
    inStock: true
  },
  {
    id: 'sb-002',
    name: 'Horizon Pro Max',
    tagline: 'The ultimate fitness companion',
    price: 55.00,
    description: 'A rugged, crystal-clear sport bottle with an ergonomic grip. The Horizon Pro is made for those who never stop. It features a fast-flow spout and a convenient carry handle.',
    image: 'https://picsum.photos/seed/bottle2/800/800',
    gallery: [
      'https://picsum.photos/seed/bottle2/800/800',
      'https://picsum.photos/seed/bottle2-2/800/800'
    ],
    category: 'Sport',
    rating: 4.9,
    reviews: 89,
    features: ['Impact Resistant', 'One-Hand Open', 'Measurement Markings'],
    sizes: ['750ml', '1000ml'],
    colors: [
      { name: 'Titanium Grey', hex: '#B0BEC5' },
      { name: 'Ocean Depth', hex: '#0277BD' },
      { name: 'Forest Green', hex: '#2E7D32' }
    ],
    inStock: true
  },
  {
    id: 'sb-003',
    name: 'Aura Glass Infuser',
    tagline: 'Infuse your day with freshness',
    price: 42.00,
    description: 'Elevate your hydration with the Aura Infuser. Featuring a removable stainless steel filter, it’s perfect for fruit infusions or loose leaf tea. Transparent elegance meets functional design.',
    image: 'https://picsum.photos/seed/bottle3/800/800',
    gallery: [
      'https://picsum.photos/seed/bottle3/800/800',
      'https://picsum.photos/seed/bottle3-2/800/800'
    ],
    category: 'Infuser',
    rating: 4.7,
    reviews: 56,
    features: ['Removable Infuser', 'Leak Proof', 'Easy Clean'],
    sizes: ['600ml'],
    colors: [
      { name: 'Rose Quartz', hex: '#F8BBD0' },
      { name: 'Clear Sky', hex: '#B3E5FC' }
    ],
    inStock: true
  },
  {
    id: 'sb-004',
    name: 'Satemades Kids Mini',
    tagline: 'Purity for the little ones',
    price: 25.00,
    description: 'Safe, durable, and perfectly sized for small hands. Our Kids Mini is made from food-grade Tritan, ensuring it remains crystal clear even after hundreds of washes.',
    image: 'https://picsum.photos/seed/bottle4/800/800',
    gallery: [
      'https://picsum.photos/seed/bottle4/800/800'
    ],
    category: 'Kids',
    rating: 4.9,
    reviews: 210,
    features: ['Child Safe', 'Shatterproof', 'Strap Included'],
    sizes: ['350ml'],
    colors: [
      { name: 'Candy Pink', hex: '#F06292' },
      { name: 'Sunny Yellow', hex: '#FFF176' },
      { name: 'Sky Blue', hex: '#4FC3F7' }
    ],
    inStock: true
  }
];

export const FEATURES: Feature[] = [
  {
    id: 'f1',
    title: '100% BPA-Free',
    description: 'Crafted from food-grade materials that ensure your water tastes exactly like water.',
    icon: 'ShieldCheck'
  },
  {
    id: 'f2',
    title: 'Eco-Friendly',
    description: 'Our commitment to sustainability reduces plastic waste one bottle at a time.',
    icon: 'Leaf'
  },
  {
    id: 'f3',
    title: 'Temperature Lock',
    description: 'Double-walled glass keeps your cold drinks crisp and hot drinks steaming.',
    icon: 'ThermometerSun'
  },
  {
    id: 'f4',
    title: 'Crystal Clarity',
    description: 'Ultra-transparent borosilicate glass for a premium, clean aesthetic.',
    icon: 'Sparkles'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Fitness Influencer',
    content: 'The clarity of these bottles is unmatched. It makes drinking water feel like a luxury experience every single day.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/avatar1/100/100'
  },
  {
    id: 't2',
    name: 'Michael Chen',
    role: 'Software Architect',
    content: 'Sleek, minimal, and fits perfectly in my bag. I love the focus on sustainable materials without compromising style.',
    rating: 5,
    avatar: 'https://picsum.photos/seed/avatar2/100/100'
  }
];

export const COLORS = {
  primary: '#00A8CC',
  primaryDark: '#0891B2',
  accent: '#10B981',
  white: '#FFFFFF',
  gray: '#F3F4F6',
  text: '#1F2937'
};
