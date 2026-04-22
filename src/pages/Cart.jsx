import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, CheckCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = getCartTotal();
  const shipping = subtotal > 2000 ? 0 : 150;
  const total = subtotal + shipping;

  const handleCheckout = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
        <CheckCircle size={80} className="text-green-500 mb-6" />
        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Order Confirmed!</h1>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">
          Thank you for joining the cult. Your order is being processed and you will receive an email confirmation shortly.
        </p>
        <Link 
          to="/shop" 
          onClick={() => setIsSuccess(false)}
          className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider transition-colors inline-flex items-center"
        >
          Continue Shopping <ArrowRight size={20} className="ml-2" />
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-black flex flex-col items-center justify-center px-4 text-center">
        <div className="w-24 h-24 border border-white/10 rounded-full flex items-center justify-center mb-6">
          <Trash2 size={40} className="text-gray-600" />
        </div>
        <h1 className="text-3xl font-black uppercase tracking-tighter mb-4">Your Cart is Empty</h1>
        <p className="text-gray-400 mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link 
          to="/shop" 
          className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-wider transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-black uppercase tracking-tighter mb-10">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="border-t border-white/10">
              {cart.map((item) => (
                <div key={`${item.id}-${item.size}`} className="py-8 border-b border-white/10 flex flex-col sm:flex-row gap-6 relative">
                  <Link to={`/product/${item.id}`} className="w-full sm:w-32 aspect-[3/4] sm:aspect-square bg-zinc-900 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </Link>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <Link to={`/product/${item.id}`}>
                          <h3 className="text-xl font-bold hover:text-purple-400 transition-colors uppercase tracking-wider">{item.name}</h3>
                        </Link>
                        <button 
                          onClick={() => removeFromCart(item.id, item.size)}
                          className="text-gray-500 hover:text-red-500 transition-colors"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>
                      <p className="text-sm text-gray-400 uppercase tracking-wider mb-2">Size: <span className="text-white font-bold">{item.size}</span></p>
                      <p className="text-lg font-bold">₹{item.price}</p>
                    </div>
                    
                    <div className="flex items-center mt-4 sm:mt-0">
                      <div className="flex items-center border border-white/20 bg-black">
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-12 text-center font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                          className="w-10 h-10 flex items-center justify-center hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary & Checkout */}
          <div className="lg:w-1/3">
            <div className="bg-zinc-900 border border-white/10 p-8 sticky top-28">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-6 pb-4 border-b border-white/10">Order Summary</h2>
              
              <div className="space-y-4 mb-6 text-sm uppercase tracking-wider">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="font-bold">₹{subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="font-bold">{shipping === 0 ? 'Free' : `₹${shipping}`}</span>
                </div>
                {shipping > 0 && (
                  <p className="text-xs text-purple-400 normal-case tracking-normal">
                    Add ₹{2000 - subtotal} more to get free shipping!
                  </p>
                )}
              </div>
              
              <div className="flex justify-between items-center mb-8 pt-4 border-t border-white/10">
                <span className="text-lg font-black uppercase tracking-wider">Total</span>
                <span className="text-2xl font-bold text-white">₹{total}</span>
              </div>

              {!isCheckingOut ? (
                <button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center"
                >
                  Proceed to Checkout <ArrowRight size={20} className="ml-2" />
                </button>
              ) : (
                <form onSubmit={handleCheckout} className="space-y-4 animate-fade-in">
                  <h3 className="font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Shipping Details</h3>
                  <input type="text" placeholder="Full Name" required className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-sm" />
                  <input type="email" placeholder="Email Address" required className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-sm" />
                  <input type="text" placeholder="Phone Number" required className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-sm" />
                  <textarea placeholder="Shipping Address" required className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-sm h-24 resize-none"></textarea>
                  
                  <div className="pt-4 flex gap-3">
                    <button 
                      type="button"
                      onClick={() => setIsCheckingOut(false)}
                      className="flex-1 py-3 border border-white/20 hover:bg-white/5 font-bold uppercase tracking-wider text-sm transition-colors"
                    >
                      Back
                    </button>
                    <button 
                      type="submit"
                      className="flex-1 py-3 bg-green-600 hover:bg-green-700 font-bold uppercase tracking-wider text-sm transition-colors"
                    >
                      Place Order
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
