import React from 'react';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-serif font-bold mb-4">
              AB <span className="text-brand-orange">Interiors</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Transforming spaces into living dreams with passion, precision, and modern design.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-brand-orange">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com/abinteriors9?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} AB Interiors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
