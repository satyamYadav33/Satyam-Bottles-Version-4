
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Eye, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../../types';
import { useApp } from '../../AppContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const isWishlisted = wishlist.some(p => p.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-[2rem] aspect-square mb-6 bg-slate-100">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {product.originalPrice && (
          <div className="absolute top-4 left-4 bg-emerald-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            Sale -{Math.round((1 - product.price / product.originalPrice) * 100)}%
          </div>
        )}

        <button 
          onClick={() => toggleWishlist(product)}
          className={`absolute top-4 right-4 p-3 rounded-full transition-all duration-300 shadow-xl ${
            isWishlisted ? 'bg-rose-500 text-white' : 'bg-white text-slate-600 hover:text-rose-500'
          }`}
        >
          <Heart size={20} fill={isWishlisted ? "currentColor" : "none"} />
        </button>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Link 
            to={`/product/${product.id}`}
            className="p-4 bg-white text-slate-900 rounded-full shadow-xl hover:bg-cyan-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300"
          >
            <Eye size={22} />
          </Link>
          <button 
            onClick={() => addToCart(product, 1, product.sizes[0], product.colors[0].name)}
            className="p-4 bg-slate-900 text-white rounded-full shadow-xl hover:bg-cyan-600 transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75"
          >
            <ShoppingCart size={22} />
          </button>
        </div>
      </div>

      <div className="text-center sm:text-left px-2">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{product.category}</span>
          <div className="flex items-center gap-1 text-amber-400 text-xs font-bold">
            <Star size={14} fill="currentColor" />
            <span>{product.rating}</span>
          </div>
        </div>
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-slate-900 group-hover:text-cyan-600 transition-colors mb-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-slate-500 text-sm mb-4 line-clamp-1">{product.tagline}</p>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-slate-900">${product.price.toFixed(2)}</span>
          {product.originalPrice && (
            <span className="text-sm text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
