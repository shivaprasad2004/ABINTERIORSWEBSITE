import React from 'react';
import { motion } from 'framer-motion';

const DesignGallery = () => {
  const groups = [
    {
      heading: 'Kitchen Design Gallery',
      items: [
        {
          title: 'Modern L‑Shaped Kitchen',
          sub: 'Clean Lines',
          img: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=800&auto=format&fit=crop',
          points: ['Soft‑close hardware', 'LED task lighting', 'Quartz or granite countertop'],
        },
        {
          title: 'Traditional U‑Shaped Kitchen',
          sub: 'Cultural Style',
          img: 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800&auto=format&fit=crop',
          points: ['Solid‑wood look finishes', 'Granite top', 'Deep drawers and spice pull‑outs'],
        },
        {
          title: 'Island Kitchen Design',
          sub: 'Family‑friendly',
          img: 'https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=800&auto=format&fit=crop',
          points: ['Central island', 'Wet and dry zones', 'Premium branded hardware'],
        },
      ],
    },
    {
      heading: 'Bedroom Design Collection',
      items: [
        {
          title: 'Master Bedroom Suite',
          sub: 'Contemporary Style',
          img: 'https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=800&auto=format&fit=crop',
          points: ['Walk‑in wardrobe with loft', 'Study or dressing area', 'Window seating or balcony'],
        },
        {
          title: 'Kids Bedroom Design',
          sub: 'Playful Style',
          img: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
          points: ['Study desk', 'Play and storage zones', 'Safety finishes and edges'],
        },
        {
          title: 'Guest Bedroom',
          sub: 'Elegant Style',
          img: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=800&auto=format&fit=crop',
          points: ['Compact layout', 'Storage bed', 'Reading nook with lighting'],
        },
      ],
    },
    {
      heading: 'Living Room Style Gallery',
      items: [
        {
          title: 'Modern Minimalist',
          sub: 'Clean Lines Theme',
          img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop',
          points: ['Neutral palette', 'Smart storage', 'Ambient lighting'],
        },
        {
          title: 'Traditional Indian',
          sub: 'Cultural Theme',
          img: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=800&auto=format&fit=crop',
          points: ['Rich fabrics', 'Teak or Sheesham furniture', 'Brass accents and jaali details'],
        },
        {
          title: 'Contemporary Luxury',
          sub: 'Sophisticated Theme',
          img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=800&auto=format&fit=crop',
          points: ['Premium materials', 'Statement pieces', 'Art walls and textures'],
        },
      ],
    },
    {
      heading: 'Pooja Unit Designs',
      items: [
        {
          title: 'Modern Marble Pooja Mandir',
          sub: 'Divine Luxury',
          img: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop',
          points: ['Backlit CNC jali design', 'Premium marble finish', 'Soft focus warm lighting'],
        },
        {
          title: 'Traditional Wooden Mandir',
          sub: 'Sacred Tradition',
          img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=800&auto=format&fit=crop',
          points: ['Teak wood craftsmanship', 'Intricate carvings', 'Storage for puja essentials'],
        },
        {
          title: 'Wall-Mounted Compact Mandir',
          sub: 'Space Efficient',
          img: 'https://images.unsplash.com/photo-1615873966503-490333d4f82a?q=80&w=800&auto=format&fit=crop',
          points: ['Minimalist design', 'Glass door protection', 'Inbuilt drawer'],
        },
      ],
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {groups.map((group, gi) => (
          <div key={gi} className={gi === 0 ? '' : 'mt-12'}>
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-brand-dark mb-2">{group.heading}</h2>
              <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((item, ii) => (
                <motion.div
                  key={ii}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: ii * 0.05 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-neutral-200 overflow-hidden"
                >
                  <div className="h-48 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-brand-orange text-sm mt-1">{item.sub}</p>
                  <ul className="list-disc marker:text-brand-orange text-gray-700 space-y-2 pl-5 mt-4">
                    {item.points.map((pt, pi) => (
                      <li key={pi} className="text-sm">{pt}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DesignGallery;
