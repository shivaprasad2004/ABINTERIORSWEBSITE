import React, { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    // EmailJS credentials
    const serviceId = 'service_mv4j3sk';
    const templateId = 'template_km4rsag';
    const publicKey = 'k9drnP1b-3o_lofXn';

    // Initialize EmailJS
    emailjs.init(publicKey);

    console.log('Attempting to send email with:', {
      serviceId,
      templateId,
      publicKey,
      formData
    });

    // Using send instead of sendForm for more control in React
    emailjs.send(
      serviceId,
      templateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: 'AB Interiors Team',
        to_email: 'abinteriors9@gmail.com', // Explicitly adding recipient email
        reply_to: formData.email,
      }
    ).then(
      (result) => {
        console.log('EmailJS Success:', result.text);
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      },
      (error) => {
        console.error('EmailJS Error Details:', error);
        setStatus('error');
        // If the error is an object, try to stringify it for the UI
        const errorMsg = error?.text || error?.message || 'Check console for details';
        alert(`Failed to send: ${errorMsg}`);
        setTimeout(() => setStatus('idle'), 5000);
      }
    );
  };

  return (
    <section id="contact" className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-dark mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-brand-orange mx-auto"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Contact Form */}
          <div className="p-10 md:w-1/2 bg-white">
            <h3 className="text-2xl font-bold text-brand-dark mb-6">Send us a message</h3>
            
            {status === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold mb-2">Message Sent!</h4>
                <p>Thank you for reaching out to us! We have received your request and we'll do our best to process it within 3 business days.</p>
              </motion.div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="from_name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
                    placeholder="Your Name" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="from_email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
                    placeholder="your@email.com" 
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    name="message"
                    rows="4" 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all" 
                    placeholder="Tell us about your project..."
                  ></textarea>
                </div>
                
                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 text-sm bg-red-50 p-3 rounded">
                    <AlertCircle className="w-4 h-4" />
                    <span>Something went wrong. Please try again or email us directly.</span>
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className={`w-full bg-brand-dark text-white py-3 px-6 rounded-md font-medium hover:bg-brand-orange transition-colors duration-300 flex items-center justify-center gap-2 ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'} 
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Side - Info matching the card style */}
          <div className="relative md:w-1/2 bg-black text-white p-10 flex flex-col justify-center overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-orange/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            
            <div className="relative z-10 mb-10">
              <h3 className="text-3xl font-serif font-bold mb-2">AB Interiors</h3>
              <p className="text-gray-400 italic">Dream. Create. Live</p>
            </div>

            <div className="space-y-8 relative z-10">
              {/* Ribbon style contact items */}
              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex items-center relative"
              >
                <div className="bg-gradient-to-r from-brand-orange to-brand-red p-4 rounded-l-md shadow-lg z-20">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white text-brand-dark py-3 px-6 rounded-r-md flex-1 shadow-inner font-bold text-lg">
                  9059 103 403
                </div>
                {/* Ribbon fold effect */}
                <div className="absolute top-full left-0 w-4 h-4 bg-brand-accent transform skew-y-12 -z-10 origin-top-right brightness-75"></div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center relative"
              >
                <div className="bg-gradient-to-r from-brand-red to-brand-orange p-4 rounded-l-md shadow-lg z-20">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white text-brand-dark py-3 px-6 rounded-r-md flex-1 shadow-inner font-bold text-lg truncate">
                  abinteriors9@gmail.com
                </div>
              </motion.div>

              <motion.div 
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center relative"
              >
                <div className="bg-gradient-to-r from-brand-orange to-brand-red p-4 rounded-l-md shadow-lg z-20">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div className="bg-white text-brand-dark py-3 px-6 rounded-r-md flex-1 shadow-inner font-bold text-lg uppercase">
                  HYDERABAD
                </div>
              </motion.div>
            </div>

            <div className="mt-12 text-center md:text-left">
              <p className="text-xl font-medium text-brand-orange">Abhilash Neela</p>
              <p className="text-gray-400 text-sm tracking-wider uppercase">Interior Designer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
