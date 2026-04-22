import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Star, Shield, Truck, RotateCcw, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = products.find(p => p.id === parseInt(id));
  const [selectedSize, setSelectedSize] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    setSelectedSize('');
    setError('');
  }, [id]);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center min-h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-purple-500 hover:text-purple-400 uppercase font-bold tracking-widest border-b border-purple-500 pb-1">
          Back to Shop
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    setError('');
    // Optional: show a toast notification here
  };

  const handleBuyNow = () => {
    if (!selectedSize) {
      setError('Please select a size');
      return;
    }
    addToCart(product, selectedSize);
    navigate('/cart');
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <nav className="flex items-center text-sm text-gray-400 mb-8 uppercase tracking-wider">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to="/shop" className="hover:text-white transition-colors">Shop</Link>
          <ChevronRight size={14} className="mx-2" />
          <Link to={`/shop?category=${product.category}`} className="hover:text-white transition-colors">{product.category}</Link>
          <ChevronRight size={14} className="mx-2" />
          <span className="text-white truncate max-w-[200px]">{product.name}</span>
        </nav>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          {/* Product Image */}
          <div className="lg:w-1/2">
            <div className="bg-zinc-900 aspect-[4/5] relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover object-center"
              />
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-purple-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                  New Arrival
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:w-1/2">
            <h1 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">{product.name}</h1>
            
            <div className="flex items-center mb-6">
              <div className="flex mr-2">
                {[...Array(Math.floor(product.rating))].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
                {product.rating % 1 !== 0 && (
                  <Star size={18} className="text-yellow-500 fill-yellow-500 opacity-50" />
                )}
              </div>
              <span className="text-gray-400 text-sm">({product.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-3xl font-bold text-white">₹{product.price}</span>
              <span className="text-xl text-gray-500 line-through">₹{product.originalPrice}</span>
              <span className="bg-green-500/20 text-green-400 text-xs font-bold px-2 py-1 uppercase tracking-wider border border-green-500/30">
                Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
              </span>
            </div>

            <p className="text-gray-300 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold uppercase tracking-wider text-sm">Select Size</span>
                <button className="text-purple-400 text-sm hover:text-purple-300 underline underline-offset-4 uppercase tracking-wider">Size Guide</button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => { setSelectedSize(size); setError(''); }}
                    className={`w-14 h-14 flex items-center justify-center font-bold transition-colors border ${
                      selectedSize === size 
                        ? 'border-purple-500 bg-purple-500/10 text-purple-400' 
                        : 'border-white/20 bg-black text-white hover:border-white'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {error && <p className="text-red-500 mt-3 text-sm font-bold uppercase tracking-wider animate-pulse">{error}</p>}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button 
                onClick={handleAddToCart}
                className="flex-1 py-4 border border-white/20 bg-black hover:bg-white/5 text-white font-bold uppercase tracking-wider transition-colors"
              >
                Add to Cart
              </button>
              <button 
                onClick={handleBuyNow}
                className="flex-1 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider transition-colors"
              >
                Buy It Now
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-center text-sm text-gray-300">
                <Truck className="mr-3 text-purple-500" size={20} />
                <span>Free Shipping over ₹2000</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <RotateCcw className="mr-3 text-purple-500" size={20} />
                <span>14-Day Easy Returns</span>
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <Shield className="mr-3 text-purple-500" size={20} />
                <span>Premium Quality Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-32">
            <h2 className="text-3xl font-black uppercase tracking-tighter mb-10 text-center">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <Link key={p.id} to={`/product/${p.id}`} className="group block">
                  <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden mb-4">
                    <img 
                      src={p.image} 
                      alt={p.name}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors line-clamp-1">{p.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-white font-bold">₹{p.price}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
