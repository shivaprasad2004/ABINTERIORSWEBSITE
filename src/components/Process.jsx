import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, PenTool, Hammer, Key } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Consultation",
      desc: "We meet to understand your lifestyle, needs, and budget."
    },
    {
      icon: <PenTool className="w-6 h-6" />,
      title: "Design Concept",
      desc: "We create 2D layouts and 3D visualizations for your approval."
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Execution",
      desc: "Our expert team brings the design to life with precision."
    },
    {
      icon: <Key className="w-6 h-6" />,
      title: "Handover",
      desc: "Walk into your dream home, ready for you to live in."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Our Design Process</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          <p className="mt-4 text-gray-600">Simple, transparent, and hassle-free journey to your dream home.</p>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 text-center group"
              >
                <div className="w-16 h-16 mx-auto bg-neutral-100 rounded-full flex items-center justify-center text-brand-dark mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors duration-300 shadow-lg relative border-4 border-white">
                  {step.icon}
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-brand-dark text-white rounded-full text-xs flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
