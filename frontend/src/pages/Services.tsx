import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { siteData } from '../data/siteData';
import { motion, type Variants } from 'framer-motion';

const Services: React.FC = () => {

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
  };

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* 1. Hero Section — Ken Burns + 90vh */}
        <section className="relative h-[90vh] flex items-end overflow-hidden">
          {/* Ken Burns background */}
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 z-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/elephant.jpeg`}
              alt="Elephant Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          </motion.div>

          {/* Hero content pinned to bottom */}
          <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-end pb-16">
            <div className="lg:col-span-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-4 block"
              >
                Our Services
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
                className="text-7xl md:text-9xl font-serif text-white leading-[0.9] drop-shadow-2xl"
              >
                Services
              </motion.h1>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
              className="bg-black/40 backdrop-blur-sm p-10 border-l-4 border-brand-green"
            >
              <p className="text-white text-xl md:text-2xl font-serif italic leading-relaxed">
                "We promise to provide every client with a well-organized, enjoyable, and memorable safari experience."
              </p>
            </motion.div>
          </div>

          {/* Animated scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[2px] h-8 bg-gradient-to-b from-brand-green to-transparent"
            />
          </motion.div>
        </section>

        {/* 2. Intro Text Section */}
        <section className="py-24 px-4 bg-[#f4f7f4]">
          <div className="max-w-4xl mx-auto text-left">
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6 }}
              className="text-brand-green text-[10px] font-black uppercase tracking-[0.4em] mb-6"
            >
              About us
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
              className="text-[#2d2d2d] text-lg font-serif italic leading-[1.8] opacity-80"
            >
              COME AGAIN TOURS AND TRAVELS is committed to provide incredible tour and travel services to both safari lovers and business people across the world. In line with our objectives we have set practices and standards so as to meet and potentially exceed customers expectations through service excellence, effectively and efficiently while communicating with transparency and supporting local communities.
            </motion.p>
          </div>
        </section>

        {/* 3. Detailed Services List */}
        <section className="py-24 px-4 bg-[#f4f7f4]">
          <div className="max-w-7xl mx-auto space-y-0">
            {siteData.services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-10 items-start border-t border-brand-green/20 py-16 ${idx === 0 ? 'border-t-0 pt-0' : ''}`}
                >
                  {/* Image — alternates sides */}
                  <motion.div
                    variants={isEven ? slideInLeft : slideInRight}
                    className={`md:col-span-4 ${!isEven ? 'md:order-last' : ''}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl group">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <motion.div
                    variants={isEven ? slideInRight : slideInLeft}
                    className="md:col-span-8 flex flex-col justify-center"
                  >
                    {/* Index number accent */}
                    <span className="text-brand-green/30 font-serif text-7xl font-black leading-none mb-2 select-none">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-3xl md:text-4xl font-serif text-brand-dark mb-4 hover:text-brand-green transition-colors duration-300">
                      {service.title}
                    </h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="w-16 h-[2px] bg-brand-green mb-6 origin-left"
                    />
                    <p className="text-[#555] text-[15px] leading-[1.9] max-w-2xl">
                      {service.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 4. Tripadvisor Reviews Section */}
        

        {/* 5. Final CTA Section — fixed background */}
        <section
          className="relative py-48 px-4 min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-25-at-18.19.43-1.jpeg)` }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-5xl mx-auto text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-8xl font-serif text-brand-green mb-10 leading-[1.1]"
            >
              Taking you anywhere you can imagine.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white text-xl md:text-2xl font-serif max-w-4xl mb-16 leading-relaxed"
            >
              Experience the wilderness of East Africa like never before. From the mists of Bwindi to the savannas of Murchison Falls.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-10"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all"
              >
                Plan Your Safari
              </motion.a>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Call us directly:</span>
                <a href="tel:+256774243747" className="text-brand-green text-3xl font-serif font-bold hover:text-brand-accent transition-colors">
                  +256 774 243 747
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
