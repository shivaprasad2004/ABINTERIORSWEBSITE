import React from 'react';
import { motion } from 'framer-motion';

const Stats = () => {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "100+", label: "Happy Families" },
    { value: "5+", label: "Years Experience" },
    { value: "10-Year", label: "Warranty on Woodwork" }, // Inspired by reference
  ];

  return (
    <section className="py-12 bg-brand-dark text-white border-y border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-4"
            >
              <h3 className="text-3xl md:text-5xl font-bold text-brand-orange mb-2 font-serif">
                {stat.value}
              </h3>
              <p className="text-gray-400 text-sm md:text-base uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
