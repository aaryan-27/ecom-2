import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, MessageCircle, Monitor, Camera, MapPin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-bold text-white tracking-tighter uppercase">Pop<span className="text-purple-500">Culture</span></span>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Wear your culture. Premium streetwear inspired by anime, movies, music, and the internet. Based in Gurugram, India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Camera size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Monitor size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/shop" className="hover:text-purple-400 transition-colors">Shop All</Link></li>
              <li><Link to="/shop?category=Anime" className="hover:text-purple-400 transition-colors">Anime Collection</Link></li>
              <li><Link to="/shop?category=Movies" className="hover:text-purple-400 transition-colors">Movie Merch</Link></li>
              <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-6">Customer Service</h3>
            <ul className="space-y-4">
              <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-purple-400 transition-colors">Size Guide</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-purple-500 flex-shrink-0 mt-1" />
                <span>Sector 29, Cyber City<br />Gurugram, Haryana 122002<br />India</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-purple-500 flex-shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-purple-500 flex-shrink-0" />
                <span>hello@popculture.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p>&copy; {new Date().getFullYear()} Pop Culture. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
