import React from 'react';
import Footer from '../components/Footer';
import { siteData } from '../data/siteData';
import { motion, type Variants } from 'framer-motion';
import { Star, Target, Eye, Layers } from 'lucide-react';
import SEO from '../components/SEO';

const VisionMission: React.FC = () => {
  const { visionMission } = siteData.aboutPage;


  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' }
    }
  };

  const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: 'easeOut' } }
  };

  const slideInRight: Variants = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.85, ease: 'easeOut' } }
  };

  // Icon map for each section
  const sectionIcons = [
    <Target className="w-10 h-10 text-brand-green" />,
    <Eye className="w-10 h-10 text-brand-green" />,
    <Layers className="w-10 h-10 text-brand-green" />,
  ];

  const sections = [
    { key: 'mission', data: visionMission.mission, icon: sectionIcons[0] },
    { key: 'vision',  data: visionMission.vision,  icon: sectionIcons[1] },
  ];

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SEO 
        title="Vision & Mission | Come Again Tours & Travels"
        description="Learn about the core values, vision, and mission that drive Come Again Tours and Travels to deliver exceptional and sustainable safari experiences in East Africa."
        url="https://comeagaintoursandtravels.com/vision-mission"
      />
      <main>
        {/* 1. Hero Section — 90vh + Ken Burns */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 z-0"
          >
            <img
              src={visionMission.hero.image}
              alt="Vision & Mission Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20" />
          </motion.div>

          {/* Content pinned to bottom-right */}
          <div className="relative z-10 w-full px-6 pb-16 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Our Core
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              Vision & Mission
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: 'easeOut' }}
              className="text-white/80 text-xl md:text-2xl max-w-md mt-4 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
            >
              {visionMission.hero.description}
            </motion.p>
          </div>

          {/* Scroll indicator */}
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

        {/* 2. Mission & Vision — alternating layout */}
        <section className="px-4 bg-[#f4f7f4]">
          <div className="max-w-7xl mx-auto space-y-0">
            {sections.map(({ key, data, icon }, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={key}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className={`grid grid-cols-1 md:grid-cols-12 gap-12 items-center border-b border-brand-green/15 py-20 ${idx === 0 ? 'pt-4' : ''}`}
                >
                  {/* Image */}
                  <motion.div
                    variants={isEven ? slideInLeft : slideInRight}
                    className={`md:col-span-5 ${!isEven ? 'md:order-last' : ''}`}
                  >
                    <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-2xl group relative">
                      <img
                        src={data.image}
                        alt={data.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {/* Icon badge */}
                      <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-sm p-4 rounded-full">
                        {icon}
                      </div>
                    </div>
                  </motion.div>

                  {/* Text content */}
                  <motion.div
                    variants={isEven ? slideInRight : slideInLeft}
                    className="md:col-span-7 flex flex-col justify-center"
                  >
                    <span className="text-brand-green/30 font-serif text-7xl font-black leading-none block select-none mb-2">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
                      {data.title}
                    </h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="w-16 h-[2px] bg-brand-green mb-8 origin-left"
                    />
                    <p className="text-[#444] text-lg leading-[1.9] font-serif italic opacity-90 max-w-2xl">
                      {data.content}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3. Objectives — staggered list with animated icons */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left: image */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.85 }}
                className="lg:col-span-4"
              >
                <div className="aspect-[3/4] overflow-hidden rounded-sm shadow-2xl sticky top-28 group">
                  <img
                    src={visionMission.objectives.image}
                    alt="Objectives"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </motion.div>

              {/* Right: objectives */}
              <div className="lg:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="mb-12"
                >
                  <span className="text-brand-green/25 font-serif text-7xl font-black leading-none block select-none mb-2">03</span>
                  <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-6">
                    {visionMission.objectives.title}
                  </h2>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="w-16 h-[2px] bg-brand-green origin-left"
                  />
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.05 }}
                  className="space-y-8"
                >
                  {visionMission.objectives.items.map((obj, i) => (
                    <motion.div
                      key={i}
                      variants={itemVariants}
                      whileHover={{ x: 6 }}
                      className="flex gap-5 p-6 border border-brand-green/10 hover:border-brand-green/40 hover:bg-brand-green/5 transition-all duration-300 group"
                    >
                      <div className="shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-brand-green/10 group-hover:bg-brand-green/20 flex items-center justify-center transition-colors">
                          <Star className="w-4 h-4 text-brand-green" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-brand-dark mb-2 group-hover:text-brand-green transition-colors">
                          {obj.title}
                        </h4>
                        <p className="text-[#555] text-[15px] leading-relaxed">{obj.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        

        {/* 5. Final CTA Section — fixed background */}
        <section
          className="relative py-48 px-4 min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-20-at-20.30.59.webp)` }}
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
              Planning your next adventure? Let Come Again Tours and Travels create a perfect safari experience for you.
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
                className="px-10 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all"
              >
                Plan Yours Now
              </motion.a>
              <div className="hidden md:block w-px h-12 bg-white/30" />
              <div className="flex flex-col">
                <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-1">Or give us a call:</span>
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

export default VisionMission;
