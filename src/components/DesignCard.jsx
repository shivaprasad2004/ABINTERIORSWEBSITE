import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DesignCard = ({ title, category, images }) => {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((index + 1) % images.length);
  const prev = () => setIndex((index - 1 + images.length) % images.length);

  const fallback =
    'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop';

  return (
    <div className="group relative overflow-hidden rounded-lg shadow-md border border-neutral-200 bg-white">
      <div className="relative aspect-[4/3]">
        <img
          src={images[index]}
          alt={title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = fallback;
          }}
        />
        <button
          type="button"
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-gray-900 font-semibold">{title}</h3>
          <span className="text-xs font-medium text-brand-orange uppercase tracking-wider">{category}</span>
        </div>
        <div className="mt-3 flex items-center justify-between">
          <Link to="/contact" className="px-4 py-2 bg-brand-dark text-white rounded-sm text-sm hover:bg-brand-orange">
            Get a Quote
          </Link>
          <Link to="/projects" className="text-brand-orange text-sm hover:text-brand-red">
            Explore more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DesignCard;
