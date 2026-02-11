import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      <a 
        href="https://wa.me/919059103403" 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-10 h-10 bg-[#25D366] text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-2 py-1 rounded shadow text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Chat with us
        </span>
      </a>
      
      <a 
        href="tel:+919059103403" 
        className="w-10 h-10 bg-brand-orange text-white rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform duration-300 group relative"
        aria-label="Call Now"
      >
        <Phone className="w-4 h-4" />
        <span className="absolute right-full mr-3 bg-white text-gray-800 px-2 py-1 rounded shadow text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingButtons;
