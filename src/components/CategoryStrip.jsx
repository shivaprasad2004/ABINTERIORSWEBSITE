import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, DoorOpen, BedDouble, Armchair, Sparkles, Gamepad2, Bath, MonitorPlay } from 'lucide-react';

const categories = [
  { name: 'Modular Kitchen', slug: 'modular-kitchen-designs', icon: Utensils },
  { name: 'Wardrobe', slug: 'wardrobe-designs', icon: DoorOpen },
  { name: 'Master Bedroom', slug: 'master-bedroom-designs', icon: BedDouble },
  { name: 'Living Room', slug: 'living-room-designs', icon: Armchair },
  { name: 'Pooja Room', slug: 'pooja-room-designs', icon: Sparkles },
  { name: 'TV Units', slug: 'tv-unit-designs', icon: MonitorPlay },
  { name: 'Kids Room', slug: 'kids-bedroom-designs', icon: Gamepad2 },
  { name: 'Bathroom', slug: 'bathroom-designs', icon: Bath },
];

const CategoryStrip = () => {
  return (
    <section className="bg-white py-12 border-b border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-serif font-bold text-brand-dark">What are you looking for?</h3>
          <div className="w-16 h-1 bg-brand-orange mx-auto mt-2"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              to={`/design-ideas/${cat.slug}`}
              className="flex flex-col items-center group cursor-pointer"
            >
              <div className="w-16 h-16 rounded-full bg-neutral-50 border border-gray-200 flex items-center justify-center mb-3 group-hover:bg-brand-orange group-hover:border-brand-orange group-hover:scale-110 group-hover:shadow-lg transition-all duration-300">
                <cat.icon strokeWidth={1.5} className="w-7 h-7 text-gray-600 group-hover:text-white transition-colors" />
              </div>
              <span className="text-xs md:text-sm font-medium text-gray-700 group-hover:text-brand-orange text-center uppercase tracking-wide">{cat.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryStrip;
