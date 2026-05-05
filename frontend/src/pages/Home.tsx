import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import Footer from '../components/Footer';
import { siteData } from '../data/siteData';
import { Users } from 'lucide-react';
import SEO from '../components/SEO';

import type { Variants } from 'framer-motion';

const Home: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Come Again Tours and Travels",
    "image": "https://comeagaintoursandtravels.com/images/logo.png",
    "@id": "",
    "url": "https://comeagaintoursandtravels.com",
    "telephone": "+256-774-243-747",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kampala",
      "addressLocality": "Kampala",
      "addressCountry": "UG"
    }
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SEO 
        title="Come Again Tours & Travels | Premier Uganda Safaris"
        description="Experience the ultimate African adventure with Come Again Tours and Travels. We offer bespoke gorilla trekking, wildlife safaris, and cultural tours in Uganda."
        schema={localBusinessSchema}
      />
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Packages Intro & Grid */}
        <section className="py-4 px-4 bg-brand-dark overflow-hidden">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12 mb-20">
              <div className="lg:w-1/3">
                <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="text-7xl md:text-8xl font-serif text-brand-green leading-none text-center lg:text-left"
                >
                  {siteData.home.packagesIntro.title.split(' ')[0]} <br/>
                  <span className="text-white lg:ml-20">{siteData.home.packagesIntro.title.split(' ')[1]}</span>
                </motion.h2>
              </div>
              <div className="lg:w-1/2">
                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.3 }}
                  className="text-gray-400 text-lg leading-relaxed md:text-left"
                >
                  {siteData.home.packagesIntro.description}
                </motion.p>
              </div>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {siteData.packagesPage.sections[0].packages
                .filter(pkg => 
                  ['11-days-classic-uganda-safari', '7-days-fly-pearl-of-africa', '3-days-fly-murchison-falls'].includes(pkg.slug || '')
                )
                .slice(0, 3) 
                .map((pkg, idx) => (
                <motion.div key={pkg.slug || idx} variants={itemVariants}>
                  <PackageCard packageData={pkg} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/packages"
                className="inline-block px-12 py-4 bg-transparent border-2 border-brand-green hover:bg-brand-green text-brand-green hover:text-white font-bold transition-all uppercase tracking-[0.2em] text-sm shadow-lg"
              >
                VIEW ALL PACKAGES
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* 3. About Us Section */}
        <section className="py-4 px-4 bg-brand-dark relative overflow-hidden">
           <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative text-left"
              >
                 <span className="text-brand-green font-bold tracking-[0.4em] mb-4 block uppercase text-sm">{siteData.home.about.subheading}</span>
                 <h2 className="text-5xl md:text-7xl font-serif mb-8 text-white leading-tight">
                    {siteData.home.about.heading}
                 </h2>
                 <p className="text-gray-400 text-lg leading-[1.8] mb-12 max-w-xl">
                    {siteData.home.about.description}
                 </p>
                 <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/about" 
                    className="inline-block px-10 py-4 bg-brand-green hover:bg-white hover:text-brand-dark text-white font-bold transition-all uppercase tracking-widest text-xs text-center border-2 border-transparent hover:border-brand-green"
                 >
                    Read More
                 </motion.a>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="relative"
              >
                 <div className=" overflow-hidden border-[10px] border-brand-muted/30 ">
                    <img src={siteData.home.about.image} alt="About Us" className="w-[1500px] h-[600px] object-cover" />
                 </div>
                 <div className="absolute -bottom-10 -right-10 w-50 h-40 bg-brand-green/20  blur-3xl -z-10" />
              </motion.div>
           </div>
        </section>

        {/* 4. Our Services Section */}
        <section className="py-32 px-4 bg-[#eef7ed] text-brand-dark relative overflow-hidden">
          <motion.div 
            initial={{ scale: 1.2, opacity: 0.05 }}
            whileInView={{ scale: 1, opacity: 0.08 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 pointer-events-none"
          >
            <img src={`${import.meta.env.BASE_URL}images/Busowoko-falls-rafting15-1024x679.jpeg`} className="w-full h-full object-cover grayscale opacity-5" alt="" />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto text-left">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-20"
            >
              <span className="text-brand-dark font-bold text-sm uppercase tracking-widest block mb-4">{siteData.home.services.header}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-brand-green max-w-4xl leading-tight">
                {siteData.home.services.promise}
              </h2>
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12"
            >
              {siteData.home.services.items.slice(0, 3).map((service, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="flex flex-col bg-white/60 backdrop-blur-md p-8 border-t-4 border-brand-green shadow-xl text-left transition-all duration-300 hover:shadow-2xl"
                >
                  <h3 className="text-2xl font-serif font-bold mb-6 min-h-[4rem]">{service.title}</h3>
                  <div className="flex-grow">
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                    {service.bullets && (
                      <ul className="space-y-3 mb-6">
                        {service.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-500 italic text-left">
                            <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-1.5 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="h-48 overflow-hidden rounded-xl mt-auto">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale-[20%] transition-transform duration-500 hover:scale-110" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto"
            >
              {siteData.home.services.items.slice(3, 5).map((service, idx) => (
                <motion.div 
                  key={idx} 
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="flex flex-col bg-white/60 backdrop-blur-md p-8 border-t-4 border-brand-green shadow-xl text-left transition-all duration-300 hover:shadow-2xl"
                >
                  <h3 className="text-2xl font-serif font-bold mb-6 min-h-[4rem]">{service.title}</h3>
                  <div className="flex-grow">
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                    {service.bullets && (
                      <ul className="space-y-3 mb-6">
                        {service.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-500 italic text-left">
                            <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-1.5 shrink-0" />
                            {b}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="h-64 overflow-hidden rounded-xl mt-auto">
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover grayscale-[20%] transition-transform duration-500 hover:scale-110" />
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-16 text-center"
            >
              <a href="/services" className="inline-block px-12 py-4 bg-brand-green hover:bg-brand-dark text-white font-bold transition-all uppercase tracking-[0.2em] text-sm shadow-lg">VIEW ALL</a>
            </motion.div>
          </div>
        </section>

        {/* 5. Why Choose Us Section */}
        <section className="py-0 px-0 bg-white text-brand-dark overflow-hidden">
           <div className="flex flex-col lg:flex-row min-h-[700px]">
              <motion.div 
                initial={{ opacity: 0, scale: 1.1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                className="lg:w-1/3 relative min-h-[400px] lg:min-h-full"
              >
                 <img src={siteData.home.whyChooseUs.image} alt="Lions in Tree" className="absolute inset-0 w-full h-full object-cover" />
              </motion.div>

              <div className="lg:w-2/3 py-24 px-8 lg:px-20 flex items-center text-left">
                 <motion.div 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: "easeOut" }}
                 >
                    <span className="text-brand-dark font-bold text-[13px] uppercase tracking-widest mb-4 block">
                       {siteData.home.whyChooseUs.subheading}
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif text-brand-green mb-16 leading-tight">
                       {siteData.home.whyChooseUs.heading}
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                       <ul className="space-y-6">
                          {siteData.home.whyChooseUs.featuresColumn1.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex items-start gap-3"
                            >
                               <div className="mt-1.5 w-1.5 h-1.5 bg-brand-dark rounded-full shrink-0" />
                               <span className="text-gray-700 text-sm font-medium">{feature}</span>
                            </motion.li>
                          ))}
                       </ul>
                       <ul className="space-y-6">
                          {siteData.home.whyChooseUs.featuresColumn2.map((feature, idx) => (
                            <motion.li 
                              key={idx} 
                              initial={{ opacity: 0, x: 10 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              viewport={{ once: true }}
                              transition={{ delay: (idx + 4) * 0.1 }}
                              className="flex items-start gap-3"
                            >
                               <div className="mt-1.5 w-1.5 h-1.5 bg-brand-dark rounded-full shrink-0" />
                               <span className="text-gray-700 text-sm font-medium">{feature}</span>
                            </motion.li>
                          ))}
                       </ul>
                    </div>
                 </motion.div>
              </div>
           </div>
        </section>

        {/* 6. Testimonials Section */}
        <section className="py-32 px-4 bg-[#eef7ed] text-brand-dark overflow-hidden">
           <div className="max-w-7xl mx-auto">
              <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-20 text-left">
                 <motion.h2 
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="text-5xl md:text-7xl font-serif text-brand-green leading-tight max-w-2xl"
                 >
                    {siteData.home.testimonials.heading}
                 </motion.h2>
                 <motion.p 
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="text-brand-dark font-medium max-w-md text-sm leading-relaxed pt-4"
                 >
                    {siteData.home.testimonials.subheading}
                 </motion.p>
              </div>

              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-left"
              >
                 {siteData.home.testimonials.items.map((testimonial, idx) => (
                   <motion.div 
                     key={idx}
                     variants={itemVariants}
                     className="flex flex-col bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-300 group relative border-b-4 border-[#34E0A1]"
                   >
                      <div className="flex items-center justify-between mb-6">
                         <div className="flex gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <svg key={i} className="w-4 h-4 fill-[#34E0A1] text-[#34E0A1]" viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                              </svg>
                            ))}
                         </div>
                         <span className="text-[10px] font-bold text-[#34E0A1] uppercase tracking-tighter">via Tripadvisor</span>
                      </div>
                      <p className="text-gray-700 text-[15px] leading-relaxed mb-10 flex-grow italic">
                         "{testimonial.text}"
                      </p>
                      <div className="border-t border-brand-green/20 pt-8 flex items-center gap-4">
                         <div className="bg-brand-green/10 p-3 rounded-full group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                            <Users className="w-5 h-5" />
                         </div>
                         <span className="font-serif font-bold tracking-widest text-brand-dark uppercase text-sm">
                            {testimonial.author}
                         </span>
                      </div>
                   </motion.div>
                 ))}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
              >
                <a 
                  href={siteData.home.testimonials.tripadvisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-10 py-4 bg-[#34E0A1] text-brand-dark font-bold text-xs tracking-widest uppercase hover:bg-brand-dark hover:text-white transition-all shadow-lg"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                  View all reviews on Tripadvisor
                </a>
              </motion.div>
           </div>
        </section>

        {/* 7. Scenic Action Section */}
        <section 
          className="relative py-16 px-4 overflow-hidden min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${siteData.home.cta.backgroundImage})` }}
        >
           <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

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

        {/* 8. Removed Stats Section as per request */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
