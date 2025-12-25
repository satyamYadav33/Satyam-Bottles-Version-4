
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Award, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-8"
          >
            Purity. Transparency. <br />
            <span className="text-cyan-600">Sustainability.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 leading-relaxed"
          >
            Founded in 2021, Satemades was born from a simple observation: the world needs more clarity. We believe that hydration is the foundation of life, and the vessel you use should be as pure as the water within.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-slate-50 py-24 mb-24">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <img 
                src="https://picsum.photos/seed/story/800/600" 
                alt="Our Story" 
                className="rounded-[2.5rem] shadow-2xl"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Journey</h2>
              <p className="text-slate-600 mb-6 text-lg leading-relaxed">
                What started as a small project in a design studio has grown into a global community of conscious consumers. Our team of engineers and designers worked tirelessly to create a bottle that wasn't just transparent, but truly beautiful.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                Every Satemades bottle undergoes rigorous testing to ensure it meets our "Crystal Clear" standard. We use medical-grade borosilicate glass and food-grade silicone to ensure zero leaching and absolute taste neutrality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container mx-auto px-4 md:px-8 mb-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900">What Drives Us</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Leaf, title: 'Eco-Conscious', text: 'We use 100% recyclable materials and offset our carbon footprint for every shipment.' },
            { icon: Award, title: 'Quality First', text: 'Our bottles are designed to last a lifetime, reducing the need for single-use replacements.' },
            { icon: Globe, title: 'Global Impact', text: 'A portion of every sale goes to clean water initiatives across the globe.' },
            { icon: Heart, title: 'Customer First', text: 'We offer a lifetime warranty on all our glass components because we believe in our craft.' }
          ].map((val, idx) => (
            <div key={idx} className="p-8 bg-white border border-slate-100 rounded-3xl shadow-sm hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-cyan-50 text-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                <val.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
