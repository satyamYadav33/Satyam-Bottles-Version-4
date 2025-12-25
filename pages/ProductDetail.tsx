
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Star, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Heart, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  RotateCcw,
  ChevronLeft
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { useApp } from '../AppContext';
import { Product } from '../types';

const ProductDetail: React.FC = () => {
  const { id } = useParams();
  const { addToCart, toggleWishlist, wishlist } = useApp();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImg, setActiveImg] = useState('');

  useEffect(() => {
    const found = PRODUCTS.find(p => p.id === id);
    if (found) {
      setProduct(found);
      setSelectedSize(found.sizes[0]);
      setSelectedColor(found.colors[0].name);
      setActiveImg(found.image);
    }
  }, [id]);

  if (!product) return <div className="pt-32 text-center">Loading...</div>;

  const isWishlisted = wishlist.some(p => p.id === product.id);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <Link to="/products" className="inline-flex items-center gap-2 text-slate-500 hover:text-cyan-600 mb-8 font-medium">
          <ChevronLeft size={20} />
          Back to Products
        </Link>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Gallery */}
          <div className="lg:w-1/2">
            <div className="aspect-square rounded-[2.5rem] overflow-hidden bg-slate-50 mb-6">
              <img src={activeImg} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((img, i) => (
                <button 
                  key={i}
                  onClick={() => setActiveImg(img)}
                  className={`aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                    activeImg === img ? 'border-cyan-500 scale-95' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${i}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="lg:w-1/2">
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-cyan-100">
                  {product.category}
                </span>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star size={16} fill="currentColor" />
                  <span className="font-bold text-slate-900">{product.rating}</span>
                  <span className="text-slate-400 text-sm">({product.reviews} reviews)</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <p className="text-xl text-slate-500 italic mb-6">{product.tagline}</p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <span className="text-xl text-slate-400 line-through">${product.originalPrice.toFixed(2)}</span>
                )}
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed mb-8 text-lg">
              {product.description}
            </p>

            {/* Selectors */}
            <div className="space-y-8 mb-12">
              <div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Select Size</h4>
                <div className="flex gap-4">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-2xl font-bold transition-all border-2 ${
                        selectedSize === size 
                          ? 'border-cyan-500 bg-cyan-50 text-cyan-700 shadow-md' 
                          : 'border-slate-100 text-slate-500 hover:border-slate-200'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 mb-4 uppercase text-xs tracking-widest">Select Color</h4>
                <div className="flex gap-4">
                  {product.colors.map(color => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-2xl font-medium transition-all border-2 ${
                        selectedColor === color.name 
                          ? 'border-cyan-500 bg-white' 
                          : 'border-slate-100 text-slate-500 hover:border-slate-200'
                      }`}
                    >
                      <div className="w-6 h-6 rounded-full border border-slate-200 shadow-inner" style={{ backgroundColor: color.hex }}></div>
                      {color.name}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="flex items-center border-2 border-slate-100 rounded-2xl px-2 py-2 w-full sm:w-auto">
                  <button 
                    onClick={() => setQuantity(q => Math.max(1, q - 1))}
                    className="p-2 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="w-12 text-center font-bold text-xl">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(q => q + 1)}
                    className="p-2 hover:bg-slate-50 rounded-xl transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
                <div className="flex gap-4 w-full">
                  <button 
                    onClick={() => addToCart(product, quantity, selectedSize, selectedColor)}
                    className="flex-1 py-4 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-slate-200 hover:bg-cyan-600 transition-all"
                  >
                    <ShoppingCart size={22} />
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => toggleWishlist(product)}
                    className={`p-4 rounded-2xl border-2 transition-all ${
                      isWishlisted ? 'bg-rose-50 text-rose-500 border-rose-100' : 'border-slate-100 text-slate-400 hover:text-rose-500 hover:border-rose-100'
                    }`}
                  >
                    <Heart size={24} fill={isWishlisted ? "currentColor" : "none"} />
                  </button>
                </div>
              </div>
            </div>

            {/* Specs / Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              {product.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100/50">
                  <CheckCircle2 size={20} className="text-emerald-500" />
                  <span className="text-slate-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* Badges */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div className="text-center">
                <Truck size={24} className="mx-auto mb-2 text-slate-400" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Free Shipping</span>
              </div>
              <div className="text-center border-x border-slate-100">
                <ShieldCheck size={24} className="mx-auto mb-2 text-slate-400" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Lifetime Warranty</span>
              </div>
              <div className="text-center">
                <RotateCcw size={24} className="mx-auto mb-2 text-slate-400" />
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">30 Day Returns</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
