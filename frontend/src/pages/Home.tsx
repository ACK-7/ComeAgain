import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import PackageCard from '../components/PackageCard';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import GuideProfiles from '../components/GuideProfiles';
import { siteData } from '../data/siteData';
import { Sparkles, Calculator, Backpack } from 'lucide-react';
import SEO from '../components/SEO';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { Link } from 'react-router-dom';
import TourismMarquee from '../components/TourismMarquee';
import TripadvisorReviews from '../components/TripadvisorReviews';
import GorillaPermitNotice from '../components/GorillaPermitNotice';
import SafariFAQ from '../components/SafariFAQ';
import LiveParkWeather from '../components/LiveParkWeather';
import SafariPackingGuideModal from '../components/SafariPackingGuideModal';

import type { Variants } from 'framer-motion';

const Home: React.FC = () => {
  const { openModal } = useCustomSafariModal();
  const [isPackingModalOpen, setIsPackingModalOpen] = useState(false);

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
        title="Come Again Tours & Travels | Premier Uganda Safaris & Gorilla Trekking"
        description="Experience the ultimate African adventure with Come Again Tours and Travels. We offer bespoke gorilla trekking, wildlife safaris, and cultural tours in Uganda."
        schema={localBusinessSchema}
      />
      <main>
        {/* 1. Hero Section */}
        <Hero />

        {/* Live Uganda Tourism Wire Marquee */}
        <TourismMarquee />

        {/* Trust Badges Bar */}
        <TrustBadges variant="dark" />

        {/* Live Real-Time Safari Weather Widget */}
        <LiveParkWeather />

        {/* 2. Packages Intro & Grid */}
        <section className="py-16 px-4 bg-brand-dark overflow-hidden">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col lg:flex-row items-end lg:items-center justify-between gap-12 mb-14">
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

            {/* Gorilla Permit Scarcity & Seasonality Notice */}
            <div className="mb-12">
              <GorillaPermitNotice />
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
              className="mt-16 flex flex-wrap items-center justify-center gap-4"
            >
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/packages"
                className="inline-block px-10 py-4 bg-transparent border-2 border-brand-green hover:bg-brand-green text-brand-green hover:text-white font-bold transition-all uppercase tracking-[0.2em] text-xs shadow-lg"
              >
                VIEW ALL PACKAGES
              </motion.a>
              <button
                type="button"
                onClick={() => setIsPackingModalOpen(true)}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 border border-white/20 hover:bg-white/10 text-white font-bold transition-all uppercase tracking-[0.2em] text-xs shadow-lg rounded-none cursor-pointer"
              >
                <Backpack className="w-4 h-4 text-brand-gold" />
                <span>Safari Packing Guide</span>
              </button>
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

        {/* 4.5 Interactive Custom Safari & Cost Estimator Banner */}
        <section className="py-16 px-4 bg-gradient-to-r from-brand-dark via-brand-dark/95 to-black text-white border-y border-brand-green/20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 text-left">
            <div className="max-w-2xl">
              <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] block mb-2 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> 100% Tailor-Made East Africa Safaris
              </span>
              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4 leading-tight">
                Design Your Custom Safari & Calculate Estimated Costs
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                Whether you want a 3-day private gorilla trek in Bwindi or a 14-day fly-in savanna expedition across Uganda, our local experts will craft a bespoke itinerary tailored to your exact budget and travel style.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto">
              <button
                type="button"
                onClick={() => openModal({})}
                className="w-full sm:w-auto px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Plan Custom Trip (Free Quote)
              </button>
              <Link
                to="/safari-cost-calculator"
                className="w-full sm:w-auto px-8 py-4 bg-white/10 border border-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all backdrop-blur-md flex items-center justify-center gap-2"
              >
                <Calculator className="w-4 h-4 text-brand-green" /> Try Safari Cost Calculator
              </Link>
            </div>
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

        {/* 6. Luxury TripAdvisor Reviews Showcase */}
        <TripadvisorReviews />

        {/* 7. Essential Safari FAQ Accordion */}
        <SafariFAQ />

        {/* 6.5 Safari Guides & Field Experts */}
        <GuideProfiles />

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

      {/* Safari Packing Checklist Modal */}
      <SafariPackingGuideModal
        isOpen={isPackingModalOpen}
        onClose={() => setIsPackingModalOpen(false)}
      />
    </div>
  );
};

export default Home;
