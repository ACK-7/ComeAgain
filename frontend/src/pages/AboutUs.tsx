import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen text-white">
      <Navbar />
      
      {/* Header */}
      <section className="relative h-[50vh] flex items-center justify-center pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://comeagaintoursandtravels.com/wp-content/uploads/2023/11/about-hero.jpg" 
            alt="About Us Hero" 
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-brand-dark/60" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.h1 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-6xl md:text-8xl font-serif text-white mb-6"
          >
            About <span className="text-brand-accent italic">Us</span>
          </motion.h1>
          <p className="text-xl text-brand-green font-bold tracking-[0.2em] uppercase">
            Come Again Tours & Travels
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-white">Our <span className="text-brand-accent">Story</span></h2>
            <div className="w-20 h-1 bg-brand-green mb-10" />
            <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
              <p>
                Founded in the heart of Uganda, Come Again Tours and Travels was born from a passion for the African wilderness and a commitment to providing authentic travel experiences.
              </p>
              <p>
                We believe that every journey should tell a story. Whether you're tracking mountain gorillas in Bwindi Impenetrable Forest or witnessing the majesty of the Murchison Falls, we are here to ensure your story is unforgettable.
              </p>
              <p>
                Our team of experienced guides and travel consultants work tirelessly to craft bespoke safaris that respect the environment and empower local communities.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[2rem] overflow-hidden border border-white/10 shadow-3xl">
              <img 
                src="https://comeagaintoursandtravels.com/wp-content/uploads/2023/11/story-img.jpg" 
                alt="Safari Story" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 bg-brand-green p-10 rounded-3xl hidden md:block">
               <p className="text-4xl font-serif font-bold text-white mb-2">10+</p>
               <p className="text-sm text-white/80 font-bold uppercase tracking-widest">Years of Excellence</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
