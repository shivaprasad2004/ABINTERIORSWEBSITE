import React from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Contact Form */}
          <div className="p-10 md:w-1/2 bg-white">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input type="text" id="name" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input type="email" id="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="your@email.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-brand-dark text-white py-3 px-6 rounded-md font-medium hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center gap-2">
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

          {/* Right Side - Info matching the card style */}
          <div className="relative md:w-1/2 bg-black text-white p-10 flex flex-col justify-center overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 mb-10">
              <h3 className="text-3xl font-serif font-bold mb-2">AB Interiors</h3>
              <p className="text-gray-400 italic">Dream. Create. Live</p>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Ribbon style contact items */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center relative"
              >
                <div className="bg-gradient-to-r from-brand-orange to-brand-red p-4 rounded-l-md shadow-lg z-20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white text-brand-dark py-3 px-6 rounded-r-md flex-1 shadow-inner font-bold text-lg">
                  9059 103 403
                </div>
                {/* Ribbon fold effect */}
                <div className="absolute top-full left-0 w-4 h-4 bg-brand-accent transform skew-y-12 -z-10 origin-top-right brightness-75"></div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center relative"
              >
                <div className="bg-gradient-to-r from-brand-red to-brand-orange p-4 rounded-l-md shadow-lg z-20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white text-brand-dark py-3 px-6 rounded-r-md flex-1 shadow-inner font-bold text-lg truncate">
                  abinteriors9@gmail.com
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center relative"
              >
                <div className="bg-gradient-to-r from-brand-orange to-brand-red p-4 rounded-l-md shadow-lg z-20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white text-brand-dark py-3 px-6 rounded-r-md flex-1 shadow-inner font-bold text-lg uppercase">
                  HYDERABAD
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center md:text-left">
              <p className="text-xl font-medium text-brand-orange">Abhilash Neela</p>
              <p className="text-gray-400 text-sm tracking-wider uppercase">Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
