
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import { useApp } from '../../AppContext';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity } = useApp();

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-[70] flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="text-cyan-600" />
                <h2 className="text-xl font-bold text-slate-900">Your Cart ({cart.length})</h2>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mb-6 text-slate-300">
                    <ShoppingBag size={40} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">Empty Cart</h3>
                  <p className="text-slate-500 mb-8">Looks like you haven't added any bottles to your hydration ritual yet.</p>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="px-8 py-3 bg-cyan-600 text-white rounded-full font-bold shadow-lg"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-8">
                  {cart.map((item) => (
                    <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="flex gap-4">
                      <div className="w-24 h-24 rounded-2xl bg-slate-100 overflow-hidden shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-bold text-slate-900">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id, item.selectedSize, item.selectedColor)}
                            className="text-slate-400 hover:text-rose-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-xs text-slate-500 mb-3">{item.selectedSize} / {item.selectedColor}</p>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center border border-slate-200 rounded-full px-2 py-1">
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, -1)}
                              className="p-1 hover:text-cyan-600"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.selectedSize, item.selectedColor, 1)}
                              className="p-1 hover:text-cyan-600"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="font-bold text-slate-900">${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cart.length > 0 && (
              <div className="p-6 border-t border-slate-100 space-y-4 bg-slate-50/50">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Subtotal</span>
                  <span className="text-xl font-bold text-slate-900">${subtotal.toFixed(2)}</span>
                </div>
                <p className="text-xs text-slate-400 italic">Shipping and taxes calculated at checkout.</p>
                <Link 
                  to="/checkout" 
                  onClick={() => setIsCartOpen(false)}
                  className="w-full py-4 bg-cyan-600 text-white rounded-full font-bold flex items-center justify-center gap-2 shadow-xl shadow-cyan-100 hover:bg-cyan-700 transition-all"
                >
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </Link>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
