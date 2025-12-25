
import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Home/Hero';
import { FEATURES, PRODUCTS, TESTIMONIALS } from '../constants';
import * as LucideIcons from 'lucide-react';
import ProductCard from '../components/Products/ProductCard';
import { Link } from 'react-router-dom';

const FeatureSection = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Crafted for Excellence</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover the features that set Satemades Bottles apart. Every detail is engineered for performance, style, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = (LucideIcons as any)[feature.icon] || LucideIcons.Info;
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-cyan-600 shadow-sm mb-6 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <main>
      <Hero />
      <FeatureSection />

      {/* Product Showcase */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Bestsellers</h2>
              <p className="text-slate-600">
                Join thousands of satisfied customers who have switched to the pure, clean hydration of Satemades.
              </p>
            </div>
            <Link to="/products" className="group flex items-center gap-2 text-cyan-600 font-bold">
              View All Products
              <LucideIcons.ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What Our Users Say</h2>
            <div className="flex justify-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => <LucideIcons.Star key={i} size={20} fill="currentColor" />)}
            </div>
            <p className="mt-4 text-slate-500 font-medium">4.9/5 Average Rating</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 rounded-3xl glass shadow-lg">
                <p className="text-lg text-slate-700 italic mb-8">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-full" />
                  <div>
                    <h4 className="font-bold text-slate-900">{t.name}</h4>
                    <p className="text-sm text-slate-500">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
