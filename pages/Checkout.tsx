
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../AppContext';
import { CheckCircle2, ChevronRight, Lock, CreditCard, Truck, MapPin, PackageCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Checkout: React.FC = () => {
  const { cart, clearCart } = useApp();
  const [step, setStep] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = step > 1 ? 0 : 9.99; // Free shipping logic
  const total = subtotal + (subtotal > 100 ? 0 : shipping);

  if (cart.length === 0 && step !== 4) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
        <Link to="/products" className="text-cyan-600 font-bold hover:underline">Go Shop Now</Link>
      </div>
    );
  }

  const handleNext = () => setStep(s => s + 1);
  const handlePlaceOrder = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setStep(4);
      clearCart();
    }, 2500);
  };

  return (
    <div className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Progress Tracker */}
          {step < 4 && (
            <div className="flex items-center justify-center mb-12 gap-4">
              {[
                { n: 1, label: 'Shipping', icon: MapPin },
                { n: 2, label: 'Delivery', icon: Truck },
                { n: 3, label: 'Payment', icon: CreditCard }
              ].map((s, i) => (
                <React.Fragment key={s.n}>
                  <div className={`flex items-center gap-2 ${step === s.n ? 'text-cyan-600' : step > s.n ? 'text-emerald-500' : 'text-slate-400'}`}>
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 font-bold ${
                      step === s.n ? 'border-cyan-500 bg-white' : step > s.n ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200'
                    }`}>
                      {step > s.n ? <CheckCircle2 size={20} /> : s.n}
                    </div>
                    <span className="hidden sm:block font-bold">{s.label}</span>
                  </div>
                  {i < 2 && <div className={`h-0.5 w-8 sm:w-16 rounded ${step > s.n ? 'bg-emerald-500' : 'bg-slate-200'}`}></div>}
                </React.Fragment>
              ))}
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Form Content */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-[2rem] shadow-xl p-8">
                <AnimatePresence mode="wait">
                  {step === 1 && (
                    <motion.div 
                      key="step1"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Shipping Information</h2>
                      <form className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <input placeholder="First Name" className="p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                          <input placeholder="Last Name" className="p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                        <input placeholder="Email Address" className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                        <input placeholder="Shipping Address" className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <input placeholder="City" className="p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                          <input placeholder="Postal Code" className="p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                          <input placeholder="Country" className="p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                        </div>
                        <button onClick={handleNext} type="button" className="w-full mt-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-cyan-600 transition-colors">
                          Continue to Delivery
                        </button>
                      </form>
                    </motion.div>
                  )}

                  {step === 2 && (
                    <motion.div 
                      key="step2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Delivery Method</h2>
                      <div className="space-y-4">
                        {[
                          { id: 'std', name: 'Standard Delivery', time: '3-5 business days', price: 9.99 },
                          { id: 'exp', name: 'Express Delivery', time: '1-2 business days', price: 19.99 }
                        ].map(m => (
                          <label key={m.id} className="flex items-center justify-between p-6 border-2 border-slate-100 rounded-2xl cursor-pointer hover:border-cyan-200 transition-all">
                            <div className="flex items-center gap-4">
                              <input type="radio" name="delivery" className="w-5 h-5 text-cyan-600" defaultChecked={m.id === 'std'} />
                              <div>
                                <h4 className="font-bold text-slate-900">{m.name}</h4>
                                <p className="text-sm text-slate-500">{m.time}</p>
                              </div>
                            </div>
                            <span className="font-bold">${m.price}</span>
                          </label>
                        ))}
                        <button onClick={handleNext} type="button" className="w-full mt-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-cyan-600 transition-colors">
                          Continue to Payment
                        </button>
                        <button onClick={() => setStep(1)} className="w-full text-slate-500 font-bold hover:text-slate-800 transition-colors">Back</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 3 && (
                    <motion.div 
                      key="step3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                    >
                      <h2 className="text-2xl font-bold mb-6">Payment Method</h2>
                      <div className="space-y-6">
                        <div className="p-6 bg-slate-900 rounded-2xl text-white">
                          <div className="flex justify-between items-start mb-12">
                            <CreditCard size={32} />
                            <div className="flex gap-2">
                              <div className="w-8 h-8 bg-white/20 rounded"></div>
                              <div className="w-8 h-8 bg-white/20 rounded"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="text-slate-400 text-xs uppercase tracking-widest">Card Holder</div>
                            <div className="text-xl font-bold tracking-wider">JOHN DOE</div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <input placeholder="Card Number" className="w-full p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                          <div className="grid grid-cols-2 gap-4">
                            <input placeholder="MM/YY" className="p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                            <input placeholder="CVC" className="p-3 bg-slate-50 rounded-xl border-none outline-none focus:ring-2 focus:ring-cyan-500" />
                          </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-50 p-4 rounded-xl">
                          <Lock size={16} />
                          Your transaction is secure and encrypted.
                        </div>

                        <button 
                          onClick={handlePlaceOrder}
                          disabled={isProcessing}
                          className="w-full mt-8 py-4 bg-cyan-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-cyan-100 hover:bg-cyan-700 disabled:opacity-50"
                        >
                          {isProcessing ? 'Processing Order...' : `Pay $${total.toFixed(2)}`}
                        </button>
                        <button onClick={() => setStep(2)} className="w-full text-slate-500 font-bold hover:text-slate-800 transition-colors">Back</button>
                      </div>
                    </motion.div>
                  )}

                  {step === 4 && (
                    <motion.div 
                      key="step4"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
                        <PackageCheck size={48} />
                      </div>
                      <h2 className="text-3xl font-bold text-slate-900 mb-4">Order Confirmed!</h2>
                      <p className="text-slate-600 mb-2">Order #SB-827491-X</p>
                      <p className="text-slate-500 mb-12 max-w-sm mx-auto">
                        Your Satemades hydration gear is being prepared for shipment. You'll receive a confirmation email shortly.
                      </p>
                      <Link 
                        to="/products"
                        className="px-10 py-4 bg-slate-900 text-white rounded-full font-bold shadow-xl hover:bg-cyan-600 transition-all"
                      >
                        Continue Shopping
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Summary Sidebar */}
            {step < 4 && (
              <div className="lg:w-1/3">
                <div className="bg-white rounded-[2rem] shadow-xl p-8 sticky top-32">
                  <h3 className="text-xl font-bold mb-6">Order Summary</h3>
                  <div className="space-y-4 mb-8">
                    {cart.map(item => (
                      <div key={item.id} className="flex justify-between text-sm">
                        <span className="text-slate-600">{item.name} x {item.quantity}</span>
                        <span className="font-bold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3 pt-6 border-t border-slate-100">
                    <div className="flex justify-between text-slate-500">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-slate-500">
                      <span>Shipping</span>
                      <span>{subtotal > 100 ? 'FREE' : `$${shipping.toFixed(2)}`}</span>
                    </div>
                    <div className="flex justify-between text-xl font-bold text-slate-900 pt-4 border-t border-slate-100">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
