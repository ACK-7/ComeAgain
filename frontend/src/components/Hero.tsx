import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.heroSlides;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[calc(90vh-6rem)] w-full overflow-hidden bg-brand-dark">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          {/* Ken Burns Effect Layer */}
          <motion.div 
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 10, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="relative z-10 h-full flex items-center justify-start text-left px-8 md:px-10 lg:px-16">
        <div className="max-w-7xl w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="flex flex-col items-start"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white mb-2 pt-40 drop-shadow-2xl leading-none max-w-4xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
                dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
              />
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
                className="text-xl md:text-2xl lg:text-3xl text-white/90 drop-shadow-md max-w-2xl mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>

              {/* Tripadvisor Trust Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/20 hover:bg-white/20 transition-colors cursor-pointer group"
                onClick={() => window.open(siteData.home.testimonials.tripadvisorUrl, '_blank')}
              >
                <div className="flex items-center gap-1.5 ">
                  <span className="text-brand-green font-bold text-sm tracking-tighter">Excellent</span>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 fill-[#34E0A1] text-[#34E0A1]" viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="w-[1px] h-4 bg-white/30" />
                <div className="flex items-center gap-2">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">Tripadvisor</span>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Modern Slide Indicators (Progress Bars) */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4 z-20">
        {slides.map((_, index) => (
          <div 
            key={index}
            className="h-[3px] w-12 md:w-20 bg-white/20 overflow-hidden cursor-pointer"
            onClick={() => setCurrentSlide(index)}
          >
            {currentSlide === index && (
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 8, ease: "linear" }}
                className="h-full bg-brand-green origin-left"
              />
            )}
            {index < currentSlide && (
              <div className="h-full w-full bg-brand-green/40" />
            )}
          </div>
        ))}
      </div>

      {/* Pulsing Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none"
      >
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-[2px] h-8 bg-gradient-to-b from-brand-green to-transparent" 
        />
      </motion.div>
    </section>
  );
};

export default Hero;
