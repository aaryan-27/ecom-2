import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    e.target.reset();
  };

  return (
    <div className="pt-24 pb-20 min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4">Holla at Us</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Got a question about an order, want to collaborate, or just want to say hi? Drop us a line below and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-2">HQ</h3>
              <div className="flex items-start">
                <MapPin className="text-purple-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div>
                  <p className="text-white font-bold mb-1">Pop Culture Studios</p>
                  <p className="text-gray-400">Sector 29, Cyber City<br />Gurugram, Haryana 122002<br />India</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-2">Reach Out</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="text-purple-500 mr-4 flex-shrink-0" size={24} />
                  <a href="mailto:hello@popculture.in" className="text-gray-400 hover:text-white transition-colors">hello@popculture.in</a>
                </div>
                <div className="flex items-center">
                  <Phone className="text-purple-500 mr-4 flex-shrink-0" size={24} />
                  <a href="tel:+919876543210" className="text-gray-400 hover:text-white transition-colors">+91 98765 43210</a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold uppercase tracking-wider mb-6 border-b border-white/10 pb-2">Hours</h3>
              <div className="flex items-start">
                <Clock className="text-purple-500 mr-4 mt-1 flex-shrink-0" size={24} />
                <div className="text-gray-400">
                  <p className="mb-1"><span className="text-white font-bold">Mon - Fri:</span> 10:00 AM - 7:00 PM</p>
                  <p><span className="text-white font-bold">Sat - Sun:</span> Closed (We're probably gaming)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="bg-zinc-900 border border-white/10 p-8 md:p-10">
              <h2 className="text-2xl font-black uppercase tracking-tighter mb-8">Send a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-500/10 border border-green-500/30 p-6 flex flex-col items-center text-center animate-fade-in">
                  <CheckCircle size={48} className="text-green-500 mb-4" />
                  <h3 className="text-xl font-bold uppercase tracking-wider mb-2 text-green-400">Message Sent!</h3>
                  <p className="text-gray-300">Thanks for reaching out. We'll be in touch soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-white transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Email</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-white transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Subject</label>
                    <select 
                      id="subject"
                      className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-white transition-colors appearance-none"
                    >
                      <option>General Inquiry</option>
                      <option>Order Status</option>
                      <option>Returns & Exchanges</option>
                      <option>Collaborations</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">Message</label>
                    <textarea 
                      id="message"
                      required
                      rows="6"
                      className="w-full bg-black border border-white/20 px-4 py-3 focus:outline-none focus:border-purple-500 text-white transition-colors resize-none"
                      placeholder="What's on your mind?"
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold uppercase tracking-wider transition-colors flex items-center justify-center group"
                  >
                    Shoot Message <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
