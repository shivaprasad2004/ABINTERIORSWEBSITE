import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const TiltCard = ({ project, index }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="relative h-[400px] w-full rounded-xl perspective-1000"
    >
      <div
        style={{
          transform: "translateZ(20px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-0 rounded-xl bg-white shadow-xl overflow-hidden group"
      >
        <img 
          src={project.img} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-6">
           <motion.p 
             style={{ transform: "translateZ(50px)" }}
             className="text-brand-orange text-sm font-bold uppercase tracking-wider mb-2"
           >
             {project.category}
           </motion.p>
           <motion.h3 
             style={{ transform: "translateZ(40px)" }}
             className="text-white text-2xl font-serif font-bold"
           >
             {project.title}
           </motion.h3>
        </div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const projects = [
    { id: 1, category: "Bedroom", img: "https://images.unsplash.com/photo-1616594039964-40891a909d99?q=80&w=800&auto=format&fit=crop", title: "Serene Master Bedroom" },
    { id: 2, category: "Living", img: "https://images.unsplash.com/photo-1618219740975-d429804e8546?q=80&w=800&auto=format&fit=crop", title: "Modern Living Room" },
    { id: 3, category: "Kitchen", img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?q=80&w=800&auto=format&fit=crop", title: "Minimalist Kitchen" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold text-brand-dark mb-4"
          >
            Signature Projects
          </motion.h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto rounded-full mb-6"></div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Experience our finest work, crafted with precision and passion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <motion.a 
            href="https://abinteriors.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-brand-dark text-white font-medium hover:bg-brand-orange transition-colors duration-300 rounded-sm shadow-lg"
          >
            View Full Portfolio
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
