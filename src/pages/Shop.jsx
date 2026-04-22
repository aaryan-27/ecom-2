import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Filter, ChevronDown } from 'lucide-react';
import { products, categories } from '../data/products';

const Shop = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryQuery = queryParams.get('category');

  const [activeCategory, setActiveCategory] = useState(categoryQuery || 'All');
  const [sortBy, setSortBy] = useState('popular');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    if (categoryQuery) {
      setActiveCategory(categoryQuery);
    }
  }, [categoryQuery]);

  const filteredProducts = products.filter(p => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    return true;
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price;
    if (sortBy === 'price-high') return b.price - a.price;
    if (sortBy === 'newest') return (b.isNew === a.isNew) ? 0 : b.isNew ? 1 : -1;
    return b.rating - a.rating; // default to popular
  });

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">
            {activeCategory === 'All' ? 'All Products' : `${activeCategory} Collection`}
          </h1>
          <p className="text-gray-400">Showing {filteredProducts.length} products</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden flex items-center justify-center w-full py-3 bg-zinc-900 border border-white/10 uppercase font-bold tracking-wider"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <Filter size={20} className="mr-2" /> Filters
          </button>

          {/* Sidebar / Filters */}
          <div className={`lg:w-1/4 ${isFilterOpen ? 'block' : 'hidden'} lg:block`}>
            <div className="sticky top-28 space-y-8">
              {/* Category Filter */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Category</h3>
                <ul className="space-y-3">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => setActiveCategory(cat)}
                        className={`text-sm uppercase tracking-wider transition-colors ${
                          activeCategory === cat ? 'text-purple-500 font-bold' : 'text-gray-400 hover:text-white'
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Filter (Mock) */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Price Range</h3>
                <ul className="space-y-3">
                  {['Under ₹1000', '₹1000 - ₹1500', 'Over ₹1500'].map((range, i) => (
                    <li key={i}>
                      <label className="flex items-center space-x-3 cursor-pointer group">
                        <input type="checkbox" className="form-checkbox h-4 w-4 text-purple-600 border-white/20 bg-black rounded focus:ring-purple-500 focus:ring-offset-black" />
                        <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{range}</span>
                      </label>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Size Filter */}
              <div>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-4 border-b border-white/10 pb-2">Size</h3>
                <div className="flex flex-wrap gap-2">
                  {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                    <button key={size} className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-purple-500 hover:text-purple-500 transition-colors bg-black">
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            {/* Sort Bar */}
            <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
              <div className="hidden sm:block text-gray-400 text-sm">
                Showing {filteredProducts.length} results
              </div>
              <div className="flex items-center w-full sm:w-auto justify-between sm:justify-start">
                <span className="text-sm text-gray-400 mr-3 uppercase tracking-wider">Sort By</span>
                <div className="relative">
                  <select 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="appearance-none bg-zinc-900 border border-white/10 text-white py-2 pl-4 pr-10 focus:outline-none focus:border-purple-500 text-sm uppercase tracking-wider"
                  >
                    <option value="popular">Popularity</option>
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                  </select>
                  <ChevronDown size={16} className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400" />
                </div>
              </div>
            </div>

            {/* Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Link key={product.id} to={`/product/${product.id}`} className="group block">
                    <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden mb-4">
                      {product.isNew && (
                        <div className="absolute top-3 left-3 z-10 bg-purple-600 text-white text-xs font-bold px-2 py-1 uppercase tracking-wider">
                          New
                        </div>
                      )}
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white text-black text-center py-3 font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 hover:bg-purple-600 hover:text-white">
                          View Details
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors line-clamp-1">{product.name}</h3>
                      <p className="text-sm text-gray-400 mb-2">{product.category}</p>
                      <div className="flex items-center gap-3">
                        <span className="text-white font-bold text-lg">₹{product.price}</span>
                        <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">No Products Found</h3>
                <p className="text-gray-400">Try adjusting your filters to find what you're looking for.</p>
                <button 
                  onClick={() => { setActiveCategory('All'); setSortBy('popular'); }}
                  className="mt-6 px-6 py-3 bg-purple-600 text-white font-bold uppercase tracking-wider hover:bg-purple-700 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
