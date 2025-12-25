
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// Fix: Import Sparkles and Leaf from lucide-react to resolve missing names
import { ArrowRight, Droplets, Sparkles, Leaf } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#F0F9FF]">
      {/* Background Shapes */}
      <div className="absolute top-0 right-0 -mr-20 w-1/2 h-full bg-cyan-100 rounded-l-[100px] z-0 opacity-50"></div>
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-cyan-200 rounded-full blur-[80px] z-0 opacity-40"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center space-x-2 bg-cyan-50 text-cyan-600 px-4 py-2 rounded-full text-sm font-semibold mb-6 border border-cyan-100">
                <Droplets size={16} />
                <span>Pure Perfection Redefined</span>
              </span>
              <h1 className="text-5xl md:text-7xl font-bold font-heading text-slate-900 leading-[1.1] mb-6">
                Crystal Clear. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-500">
                  Perfectly Pure.
                </span>
              </h1>
              <p className="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Elevate your daily hydration with Satemades. Premium transparent bottles crafted for those who value elegance, sustainability, and absolute purity.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link to="/products" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl shadow-slate-200 hover:bg-cyan-600 hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                  Shop Collection
                  <ArrowRight size={20} />
                </Link>
                <Link to="/about" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-800 rounded-full font-bold border border-slate-200 hover:border-cyan-400 hover:text-cyan-600 transition-all">
                  Our Story
                </Link>
              </div>

              {/* Stats */}
              <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 border-t border-slate-200 pt-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900">50k+</div>
                  <div className="text-sm text-slate-500">Happy Customers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">100%</div>
                  <div className="text-sm text-slate-500">BPA Free</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900">12k+</div>
                  <div className="text-sm text-slate-500">Trees Planted</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <img 
                src="https://picsum.photos/seed/mainbottle/800/1000" 
                alt="Satemades Bottle" 
                className="w-full max-w-[500px] mx-auto rounded-[2rem] shadow-2xl shadow-cyan-200 rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-10 -left-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <Leaf size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Eco Friendly</div>
                  <div className="text-[10px] text-slate-500">Sustainable Choice</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-20 -right-6 glass p-4 rounded-2xl shadow-xl flex items-center gap-3"
              >
                <div className="w-10 h-10 bg-cyan-100 text-cyan-600 rounded-full flex items-center justify-center">
                  <Sparkles size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Premium Glass</div>
                  <div className="text-[10px] text-slate-500">Handcrafted Quality</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
