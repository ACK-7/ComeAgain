import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, Award, Shield, Languages, UserCheck, BookOpen, ArrowRight } from 'lucide-react';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

export const GuideProfiles: React.FC = () => {
  const { openModal } = useCustomSafariModal();

  const guides = [
    {
      slug: 'issa-ssesanga',
      name: 'Ssesanga Issa',
      role: 'Head Safari Guide & Primate Specialist',
      experience: 'Head Guide • 20+ Yrs Exp',
      specialty: 'Mountain Gorillas (Bwindi), Chimpanzees & Savanna Mammals',
      languages: 'English, Swahili, Luganda, Arabic, Lusoga',
      bio: 'With 20+ years of hands-on field experience, Issa is Come Again\'s esteemed Head Guide, master tracker, and multilingual naturalist.',
      image: `${import.meta.env.BASE_URL}images/Issa.jpeg`,
      imagePosition: 'center 35%',
    },
    {
      slug: 'ramathan-muwonge',
      name: 'Ramathan Muwonge',
      role: 'Safari & Bush Guide',
      experience: 'Safari Guide • 5+ Yrs Exp',
      specialty: 'Big 5 Game Drives, Murchison Falls & Kidepo Valley',
      languages: 'English, Swahili, Luganda, Runyankore',
      bio: 'A dedicated savanna tracker renowned for predator sightings and birding knowledge, navigating Uganda\'s northern and western corridors across Murchison Falls, Queen Elizabeth, and Kidepo Valley.',
      image: `${import.meta.env.BASE_URL}images/Ramathan.jpeg`,
      imagePosition: 'center 38%',
    },
    {
      slug: 'patrick-kikonyogo',
      name: 'Patrick John Kikonyogo',
      role: 'Professional Driver-Guide (Uganda & Rwanda)',
      experience: 'Certified Driver-Guide • 2+ Yrs Exp',
      specialty: 'All Uganda & Rwanda Game Parks, Cross-Border Safaris & Navigation',
      languages: 'English, Swahili, Luganda, Runyankore',
      bio: 'A certified professional driver-guide from Kakiri, Wakiso District, with active operational knowledge of game parks across Uganda and Rwanda, focused on safe driving and genuine guest care.',
      image: `${import.meta.env.BASE_URL}images/kikonyogo.jpeg`,
      imagePosition: 'center 35%',
    },
  ];

  return (
    <section className="py-20 px-4 bg-brand-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 text-left">
          <div>
            <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] block mb-3">
              Our In-House Safari Team
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white leading-tight">
              Meet Our Expert Safari Guides
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Every Come Again safari includes your own dedicated, licensed Ugandan driver-guide and private 4x4 Land Cruiser for an exclusive and personalized journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {guides.map((guide, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-brand-green/50 transition-all duration-300 group flex flex-col"
            >
              <Link to={`/guides/${guide.slug}`} className="h-72 overflow-hidden relative bg-black/40 block">
                <img
                  src={guide.image}
                  alt={guide.name}
                  style={{ objectPosition: guide.imagePosition || 'center' }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 bg-brand-green/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white flex items-center gap-1.5 shadow-md">
                  <Award className="w-3 h-3" /> {guide.experience}
                </div>
              </Link>

              <div className="p-6 text-left flex-1 flex flex-col justify-between">
                <div>
                  <Link to={`/guides/${guide.slug}`} className="hover:text-brand-green transition-colors">
                    <h3 className="text-2xl font-serif font-bold text-white mb-1 group-hover:text-brand-green transition-colors">
                      {guide.name}
                    </h3>
                  </Link>
                  <p className="text-brand-green text-xs font-bold uppercase tracking-wider mb-4">
                    {guide.role}
                  </p>
                  <p className="text-gray-300 text-xs leading-relaxed mb-6">
                    {guide.bio}
                  </p>
                </div>

                <div>
                  <div className="space-y-2 pt-4 border-t border-white/10 text-xs text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <Compass className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span><strong className="text-white">Specialty:</strong> {guide.specialty}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Languages className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span><strong className="text-white">Languages:</strong> {guide.languages}</span>
                    </div>
                  </div>

                  {/* Dual Actions: Read Full Story & Request Guide */}
                  <div className="space-y-2.5">
                    <Link
                      to={`/guides/${guide.slug}`}
                      className="w-full py-3 bg-brand-green hover:bg-white text-white hover:text-brand-dark text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      <BookOpen className="w-4 h-4" /> Read Guide Story & Bio <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => openModal({
                        packageTitle: `Private Safari with Guide: ${guide.name}`,
                      })}
                      className="w-full py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-xl transition-all border border-white/15 flex items-center justify-center gap-2"
                    >
                      <UserCheck className="w-4 h-4 text-brand-green" /> Request {guide.name.split(' ')[0]} as Your Guide
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => openModal({
              packageTitle: 'Custom Private Safari (Dedicated Vehicle & In-House Guide)',
            })}
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all shadow-lg"
          >
            <Shield className="w-4 h-4" /> Book a 100% Private Safari (Exclusive Vehicle & Guide)
          </button>
        </div>
      </div>
    </section>
  );
};

export default GuideProfiles;
