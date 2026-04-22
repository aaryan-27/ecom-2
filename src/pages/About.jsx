import React from 'react';
import { Target, Eye, Zap } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative py-32 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/assets/images/Artboard26_2_c3ed6588-164f-4e3c-80c9-eccbf1bc3a8c.jpg" 
            alt="About Hero" 
            className="w-full h-full object-cover object-center grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">Our Story</h1>
          <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
            Born in the streets of Gurugram. Fueled by internet culture, anime, and the rebellious spirit of youth.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Story */}
        <section className="mb-32">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-8">The Movement</h2>
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  Pop Culture isn't just another clothing brand. It's a statement. We started in 2024 with a simple idea: premium streetwear shouldn't be boring, and graphic tees shouldn't feel cheap.
                </p>
                <p>
                  Based in the fast-paced hub of Gurugram, we draw inspiration from the things we consume daily—the anime we binge, the movies that move us, the music that scores our lives, and the memes that make us laugh.
                </p>
                <p>
                  We collaborate with independent artists and use high-density printing on 100% combed cotton to ensure that every piece you wear is a canvas of expression that stands the test of time.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="/assets/images/Artboard27_2.jpg" alt="Streetwear 1" className="w-full h-full object-cover aspect-square bg-zinc-900" />
              <img src="/assets/images/Artboard31_44.jpg" alt="Streetwear 2" className="w-full h-full object-cover aspect-square bg-zinc-900 translate-y-8" />
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="bg-zinc-900 p-10 border border-white/10 hover:border-purple-500/50 transition-colors group">
            <Eye size={48} className="text-purple-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-black uppercase tracking-wider mb-4">Our Vision</h3>
            <p className="text-gray-400 leading-relaxed">
              To be the definitive voice of youth culture in fashion, bridging the gap between premium quality and bold, unapologetic internet aesthetics globally.
            </p>
          </div>
          
          <div className="bg-zinc-900 p-10 border border-white/10 hover:border-pink-500/50 transition-colors group">
            <Target size={48} className="text-pink-500 mb-6 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-black uppercase tracking-wider mb-4">Our Mission</h3>
            <p className="text-gray-400 leading-relaxed">
              To craft high-quality, comfortable streetwear that allows individuals to wear their passions proudly, without compromising on style or durability.
            </p>
          </div>
        </section>
        
        {/* Core Values */}
        <section className="text-center py-20 border-t border-white/10">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-16">Why We Do It</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <Zap size={32} className="mx-auto text-purple-500 mb-4" />
              <h4 className="text-xl font-bold uppercase tracking-wider mb-3">Authenticity</h4>
              <p className="text-gray-400 text-sm">No generic designs. Everything we release has a story and connects with genuine subcultures.</p>
            </div>
            <div>
              <Zap size={32} className="mx-auto text-purple-500 mb-4" />
              <h4 className="text-xl font-bold uppercase tracking-wider mb-3">Quality First</h4>
              <p className="text-gray-400 text-sm">From the stitching to the print quality, we obsess over every detail so your clothes last longer.</p>
            </div>
            <div>
              <Zap size={32} className="mx-auto text-purple-500 mb-4" />
              <h4 className="text-xl font-bold uppercase tracking-wider mb-3">Community</h4>
              <p className="text-gray-400 text-sm">We're more than a brand; we're a collective of like-minded individuals who shape culture together.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
