import React from 'react';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <main>
        {/* 1. Hero Section */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={`${import.meta.env.BASE_URL}images/hills.jpeg`} 
              alt="About Us Hero" 
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1106] via-transparent to-[#0c1106]/40" />
          </div>
          
          <div className="relative z-10 w-full px-6 pb-10 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Our Heritage
            </motion.span>
            <motion.h1 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              About <span style={{ color: '#6ab43e' }}>Us</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="max-w-md mt-4 text-white/80 text-xl md:text-2xl leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
            >
              Founded in the heart of Uganda, born from a passion for the African wilderness.
            </motion.p>
          </div>
        </section>

        {/* 2. Main Content */}
        <section className="py-8 px-4 max-w-7xl mx-auto bg-[#0c1106]">
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
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
