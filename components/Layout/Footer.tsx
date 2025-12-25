
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube, Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6 group">
              <div className="w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-xl font-bold font-heading text-white tracking-tight">
                Satemades
              </span>
            </Link>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Purity in every drop. We craft premium transparent hydration solutions for a sustainable and elegant lifestyle.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="p-2 bg-slate-800 rounded-full hover:bg-cyan-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-white font-bold mb-6">Shop</h4>
            <ul className="space-y-4">
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Daily Collection</Link></li>
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Sport Series</Link></li>
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Glass Infusers</Link></li>
              <li><Link to="/products" className="hover:text-cyan-400 transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-cyan-400 transition-colors">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/faq" className="hover:text-cyan-400 transition-colors">FAQ</Link></li>
              <li><Link to="/shipping" className="hover:text-cyan-400 transition-colors">Shipping & Returns</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold mb-6">Join Our Newsletter</h4>
            <p className="text-slate-400 mb-4 text-sm">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="relative">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full bg-slate-800 border-none rounded-lg py-3 px-4 focus:ring-2 focus:ring-cyan-500 text-white placeholder-slate-500"
              />
              <button className="absolute right-2 top-1.5 p-2 bg-cyan-500 text-white rounded-md hover:bg-cyan-600 transition-colors">
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Satemades Bottles. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
