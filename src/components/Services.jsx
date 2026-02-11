import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Sofa, Lightbulb, Grid, Home, Hammer } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Complete Home Interiors",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&auto=format&fit=crop",
      description: "End‑to‑end interiors crafted for Hyderabad homes with a warm, South Indian touch.",
      points: [
        "3D design and Vaastu‑friendly space planning",
        "Smart layouts for apartments, villas and independent houses",
        "Material selection suited to local climate",
        "Lighting and electrical planning"
      ]
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Modular Kitchens",
      image: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800&auto=format&fit=crop",
      description: "Efficient, long‑lasting kitchens designed for everyday Indian cooking.",
      points: [
        "Branded hardware with soft‑close channels",
        "BWP/BWR plywood and water‑resistant laminates",
        "L‑shape / U‑shape with corner and tall units",
        "10‑year workmanship assurance"
      ]
    },
    {
      icon: <Grid className="w-8 h-8" />,
      title: "Bedroom Design",
      image: "https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=800&auto=format&fit=crop",
      description: "Comfortable bedrooms with practical storage and serene aesthetics.",
      points: [
        "Walk‑in wardrobes with lofts",
        "Study nooks and dressing areas",
        "Ambient and task lighting",
        "Climate‑friendly finishes"
      ]
    },
    {
      icon: <Sofa className="w-8 h-8" />,
      title: "Living Room Design",
      image: "https://images.unsplash.com/photo-1618219740975-d429804e8546?q=80&w=800&auto=format&fit=crop",
      description: "Elegant halls that reflect South Indian hospitality and lifestyle.",
      points: [
        "Entertainment units and seating layouts",
        "Hidden storage for apartment living",
        "Texture paints and wall cladding",
        "Layered lighting for cosy evenings"
      ]
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "TV Unit Design",
      image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?q=80&w=800&auto=format&fit=crop",
      description: "Functional TV walls with clean lines and ample storage.",
      points: [
        "Wall‑mounted and floating units",
        "Display plus closed storage combinations",
        "Backlit panels and textured finishes",
        "Neat wire‑management solutions"
      ]
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Pooja Unit Design",
      image: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=800&auto=format&fit=crop",
      description: "Serene mandirs crafted for traditional values with modern detailing.",
      points: [
        "CNC jaali and classic motifs",
        "Compact wall‑mounted mandirs",
        "Drawer and shelf storage",
        "Backlit panels for divine ambience"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Our Interior Design Services in Telangana</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Transforming South Indian homes with thoughtful, practical and timeless interiors.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-neutral-200 group overflow-hidden"
            >
              <div className="h-48 overflow-hidden relative">
                 <img 
                   src={service.image} 
                   alt={service.title} 
                   className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                 />
                 <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-brand-orange/10 p-3 rounded-full text-brand-orange group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{service.description}</p>
                {service.points && (
                  <ul className="list-disc marker:text-brand-orange text-gray-700 space-y-2 pl-5">
                    {service.points.map((pt, i) => (
                      <li key={i} className="text-sm">{pt}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
