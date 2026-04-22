import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Zap } from 'lucide-react';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.slice(0, 4);
  const newArrivals = products.filter(p => p.isNew).slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-10" />
          <img 
            src="/assets/images/Artboard14_37.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6 animate-fade-in-up">
            Wear Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Culture</span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-light">
            Premium streetwear inspired by the internet, anime, movies, and music. Stand out from the noise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/shop" 
              className="group relative px-8 py-4 bg-white text-black font-bold uppercase tracking-wider overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 w-0 bg-purple-600 transition-all duration-[250ms] ease-out group-hover:w-full"></div>
              <span className="relative group-hover:text-white flex items-center justify-center gap-2">
                Explore Collection <ArrowRight size={20} />
              </span>
            </Link>
            <Link 
              to="/shop?category=Anime" 
              className="px-8 py-4 border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-wider transition-colors w-full sm:w-auto"
            >
              Shop Anime
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Categories Grid */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Collections</h2>
          <Link to="/shop" className="hidden md:flex items-center text-purple-400 hover:text-purple-300 transition-colors uppercase font-bold tracking-widest text-sm">
            View All <ArrowRight size={16} className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: "Anime", image: "/assets/images/Artboard21_56.jpg", span: "lg:col-span-2 lg:row-span-2" },
            { name: "Music", image: "/assets/images/Artboard15_37.jpg", span: "col-span-1" },
            { name: "Movies", image: "/assets/images/Artboard19_67.jpg", span: "col-span-1" },
            { name: "Memes", image: "/assets/images/Artboard20_62.jpg", span: "md:col-span-2" }
          ].map((cat, index) => (
            <Link 
              key={index} 
              to={`/shop?category=${cat.name}`}
              className={`group relative overflow-hidden bg-zinc-900 aspect-square md:aspect-auto md:min-h-[300px] ${cat.span}`}
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold uppercase tracking-wider mb-2">{cat.name}</h3>
                <span className="inline-block text-sm font-semibold text-purple-400 group-hover:text-white transition-colors transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 duration-300">
                  Shop Now &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Trending / Best Sellers */}
      <section className="py-20 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-12">
            <TrendingUp className="text-purple-500 mr-4" size={32} />
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Best Sellers</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden mb-4">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white text-black text-center py-3 font-bold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Quick View
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors line-clamp-1">{product.name}</h3>
                  </div>
                  <p className="text-sm text-gray-400 mb-2">{product.category}</p>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-bold">₹{product.price}</span>
                    <span className="text-gray-500 line-through text-sm">₹{product.originalPrice}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center mb-12">
          <Zap className="text-yellow-500 mr-4" size={32} />
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">New Drops</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
             <Link key={product.id} to={`/product/${product.id}`} className="group block">
             <div className="relative aspect-[3/4] bg-zinc-900 overflow-hidden mb-4">
               {product.isNew && (
                 <div className="absolute top-4 left-4 z-10 bg-purple-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                   New
                 </div>
               )}
               <img 
                 src={product.image} 
                 alt={product.name}
                 className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
               />
             </div>
             <div>
               <h3 className="text-lg font-bold text-gray-100 group-hover:text-purple-400 transition-colors line-clamp-1">{product.name}</h3>
               <div className="flex items-center gap-3 mt-2">
                 <span className="text-white font-bold">₹{product.price}</span>
               </div>
             </div>
           </Link>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-zinc-900 border-t border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-16">The Hype Is Real</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rahul S.", review: "The print quality is insane. Washed it 5 times and it still looks brand new. Best streetwear brand in NCR right now.", rating: 5 },
              { name: "Priya M.", review: "Finally a brand that gets anime aesthetics right without being corny. The oversized fit is absolutely perfect.", rating: 5 },
              { name: "Aditya K.", review: "Packaging was premium, delivery was fast, and the t-shirt is easily the most comfortable one I own.", rating: 4 }
            ].map((t, i) => (
              <div key={i} className="bg-black p-8 border border-white/5 relative">
                <div className="flex justify-center mb-4">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} size={20} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  {[...Array(5 - t.rating)].map((_, j) => (
                    <Star key={j} size={20} className="text-gray-600" />
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{t.review}"</p>
                <p className="font-bold text-white uppercase tracking-wider text-sm">- {t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-purple-900/20" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Join The Cult</h2>
          <p className="text-xl text-gray-300 mb-10">Subscribe to get early access to limited drops and exclusive discounts.</p>
          <form className="flex flex-col sm:flex-row max-w-md mx-auto gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="YOUR EMAIL" 
              className="flex-grow bg-black/50 border border-white/20 px-6 py-4 focus:outline-none focus:border-purple-500 text-white placeholder-gray-500 uppercase tracking-wider"
              required
            />
            <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 font-bold uppercase tracking-wider transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;
