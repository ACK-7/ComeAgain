import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { siteData } from '../data/siteData';
import SEO from '../components/SEO';

import type { Variants } from 'framer-motion';

const Destination: React.FC = () => {
  const { hero, destinations } = siteData.destinationPage;

  // Container stays always visible — only items animate in.
  // This prevents the whole grid vanishing on mobile if the
  // IntersectionObserver fires late.
  const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SEO 
        title="Explore Uganda Destinations | Come Again Tours"
        description="Discover the beauty of Uganda. From the Murchison Falls to the impenetrable forests of Bwindi, explore our top safari destinations."
        url="https://comeagaintoursandtravels.com/destination"
      />
      <main>
        {/* 1. Hero Section */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <motion.div 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 15, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={hero.image} 
              alt="Destinations Hero" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </motion.div>

          {/* Content pinned to bottom-right */}
          <div className="relative z-10 w-full px-6 pb-10 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Explore Africa
            </motion.span>
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              {hero.title}
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="w-16 h-[2px] bg-brand-green mt-4 origin-right"
            />
          </div>
        </section>

        {/* 2. Destinations Grid */}
        <section className="py-8 px-4 bg-[#0c1106]">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0, margin: '0px 0px -60px 0px' }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20"
            >
              {destinations.map((dest, idx) => (
                <motion.div 
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="flex flex-col group transition-all duration-300"
                >
                  {/* Image Container */}
                  <div className="h-72 overflow-hidden mb-8 shadow-2xl relative rounded-sm">
                    <img 
                      src={dest.image} 
                      alt={dest.name} 
                      className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute inset-0 border-[1px] border-white/10 pointer-events-none" />
                  </div>

                  {/* Text Content */}
                  <div className="flex flex-col text-left">
                    <h3 className="text-2xl font-serif font-bold text-brand-green tracking-wide mb-4 uppercase min-h-[3rem]">
                      {dest.name}
                    </h3>
                    
                    {/* Divider Line */}
                    <motion.div 
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ duration: 0.8 }}
                      className="w-full h-[1px] bg-brand-green/40 mb-6 origin-left" 
                    />

                    <p className="text-gray-400 text-[15px] leading-relaxed font-medium">
                      {dest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 3. Scenic Action Section (Parity with Home) */}
        <section 
          className="relative py-48 px-4 overflow-hidden min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${siteData.home.cta.backgroundImage})` }}
        >
           <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

           <div className="relative z-10 max-w-5xl mx-auto text-left">
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-6xl md:text-8xl font-serif text-brand-green mb-10 leading-[1.1]"
              >
                 {siteData.home.cta.heading}
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white text-xl md:text-2xl font-serif max-w-4xl mb-16 leading-relaxed"
              >
                 {siteData.home.cta.description}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex flex-col md:flex-row items-start md:items-center gap-10"
              >
                 <motion.a 
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95 }}
                   href="/contact"
                   className="px-8 py-3 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all"
                 >
                   BOOK WITH US NOW
                 </motion.a>
                 <div className="hidden md:block w-[1px] h-12 bg-white/30" />
                 <div className="flex flex-col">
                    <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Or give us a call:</span>
                    <a href={`tel:${siteData.home.cta.phone}`} className="text-brand-green text-3xl font-serif font-bold hover:text-brand-accent transition-colors">
                       {siteData.home.cta.phone}
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

export default Destination;
