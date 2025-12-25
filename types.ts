
export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  description: string;
  image: string;
  gallery: string[];
  category: string;
  rating: number;
  reviews: number;
  features: string[];
  sizes: string[];
  colors: { name: string; hex: string }[];
  inStock: boolean;
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export type CheckoutStep = 'shipping' | 'method' | 'payment' | 'review' | 'success';

export interface ShippingDetails {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
}
