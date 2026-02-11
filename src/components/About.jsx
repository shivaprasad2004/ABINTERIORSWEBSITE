import React from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ShieldCheck, Users } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Why Choose AB Interiors?</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We don't just design interiors; we curate lifestyles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-neutral-200 rounded-lg overflow-hidden relative">
               <img 
                 src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=800&auto=format&fit=crop" 
                 alt="Luxury Interior Design Hyderabad" 
                 className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Crafting Premium Spaces That Reflect Your Vision</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At AB Interiors, we understand that your home is an extension of your personality. As one of Hyderabad's trusted interior design firms, we offer comprehensive end-to-end solutions tailored to your specific needs and budget.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              From the initial concept to the final handover, our expert team handles everything with transparency and precision. We pride ourselves on delivering quality craftsmanship on time, every time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />, title: "Quality Assured", desc: "Premium materials & finish" },
                { icon: <Clock className="w-6 h-6 text-brand-orange" />, title: "On-Time Delivery", desc: "Strict timeline adherence" },
                { icon: <Users className="w-6 h-6 text-brand-orange" />, title: "Expert Team", desc: "Skilled professionals" },
                { icon: <Award className="w-6 h-6 text-brand-orange" />, title: "Transparent Pricing", desc: "No hidden costs" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="text-gray-900 font-bold">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h4 className="text-xl font-semibold mb-4">Advanced Capabilities</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                <ul className="list-disc marker:text-brand-orange text-gray-700 space-y-2 pl-5">
                  <li>Vaastu‑aligned planning for South Indian homes</li>
                  <li>3D renders and optional VR walkthroughs</li>
                  <li>German hardware with BWP/BWR plywood</li>
                  <li>Moisture and termite‑resistant treatments</li>
                </ul>
                <ul className="list-disc marker:text-brand-orange text-gray-700 space-y-2 pl-5">
                  <li>100‑point site quality checklist</li>
                  <li>Dedicated project manager and clear timelines</li>
                  <li>Eco‑friendly, low‑VOC paint options</li>
                  <li>Warranty and annual maintenance plans</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
