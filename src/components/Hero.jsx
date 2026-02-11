import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center bg-black overflow-hidden perspective-1000">
      {/* 3D Vector-like Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
         {/* Floating Cube 1 */}
        <motion.div 
          animate={{ 
            rotateX: [0, 360], 
            rotateY: [0, 360],
            y: [0, 50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-[10%] top-[15%] w-24 h-24 border-2 border-brand-orange/30 opacity-50"
        />
        
         {/* Floating Cube 2 */}
        <motion.div 
          animate={{ 
            rotateX: [360, 0], 
            rotateY: [360, 0],
            y: [0, -30, 0]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute left-[5%] bottom-[20%] w-16 h-16 border border-brand-red/30 opacity-40"
        />

        {/* Abstract Gradient Orbs */}
        <div className="absolute -right-20 top-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -left-20 bottom-1/4 w-96 h-96 bg-brand-red/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, type: "spring" }}
            className="text-left perspective-1000"
          >
            <h2 className="text-brand-orange text-xl tracking-[0.2em] mb-4 uppercase font-semibold">
              Premium Interior Solutions
            </h2>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Your Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red">End-to-End</span> Interior Design Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-light border-l-4 border-brand-orange pl-6 py-2 leading-relaxed">
              From concept to creation, we craft premium spaces that reflect your unique lifestyle. Experience the perfect blend of modern aesthetics and functional living in Hyderabad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-3 bg-gradient-to-r from-brand-orange to-brand-red text-white font-medium rounded-sm hover:shadow-lg hover:shadow-brand-orange/30 transition-all duration-300 flex items-center gap-2 transform hover:-translate-y-1">
                Get Free Estimate <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#portfolio" className="px-8 py-3 border border-white/30 text-white font-medium rounded-sm hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                View Portfolio
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:block relative h-[500px] perspective-1000"
          >
            <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 bg-neutral-900 rounded-lg overflow-hidden border border-white/10 shadow-2xl transform-style-3d"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent z-10"></div>
              <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-60"></div>
            </motion.div>
            
            {/* Floating 3D Card */}
            <motion.div 
              animate={{ y: [0, 15, 0], rotateX: [0, 5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded shadow-xl z-20 max-w-xs border-l-4 border-brand-orange transform-style-3d"
            >
              <p className="text-brand-dark font-serif text-lg italic">"Transforming spaces into living dreams."</p>
              <p className="text-gray-500 text-sm mt-2">- Abhilash Neela</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
