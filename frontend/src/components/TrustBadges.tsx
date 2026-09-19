import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Car, HeartHandshake, Star } from 'lucide-react';

interface TrustBadgesProps {
  variant?: 'light' | 'dark';
}

export const TrustBadges: React.FC<TrustBadgesProps> = ({ variant = 'dark' }) => {
  const isDark = variant === 'dark';

  const badges = [
    {
      icon: <Award className="w-6 h-6 text-brand-green" />,
      title: 'UTB & UWA Licensed',
      desc: 'Official Uganda Tourism Board accredited & registered tour operator.',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-green" />,
      title: 'Guaranteed Gorilla Permits',
      desc: 'Direct reservations with Uganda Wildlife Authority for Bwindi & Mgahinga.',
    },
    {
      icon: <Car className="w-6 h-6 text-brand-green" />,
      title: 'Custom 4x4 Safari Cruisers',
      desc: 'Guaranteed window seats, pop-up viewing roof & charging ports.',
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-green" />,
      title: '24/7 Local Concierge',
      desc: 'On-ground operational team headquartered in Kampala for seamless support.',
    },
    {
      icon: <Star className="w-6 h-6 text-[#34E0A1]" />,
      title: '5-Star Tripadvisor Rated',
      desc: 'Consistently top-rated by international travelers across the globe.',
    },
  ];

  return (
    <section className={`py-12 px-4 border-y ${
      isDark 
        ? 'bg-brand-dark/95 border-white/10 text-white' 
        : 'bg-[#f4faf2] border-brand-green/15 text-brand-dark'
    }`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] block mb-2">
            Why Discerning Travelers Choose Come Again
          </span>
          <h3 className={`text-2xl md:text-3xl font-serif font-bold ${isDark ? 'text-white' : 'text-brand-dark'}`}>
            Global Safari Standards & Seamless Uganda Operations
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {badges.map((badge, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 rounded-2xl transition-all duration-300 ${
                isDark
                  ? 'bg-white/5 border border-white/10 hover:border-brand-green/40 hover:bg-white/10'
                  : 'bg-white border border-brand-green/20 shadow-sm hover:shadow-md'
              }`}
            >
              <div className="mb-4 inline-flex p-3 rounded-xl bg-brand-green/10">
                {badge.icon}
              </div>
              <h4 className="font-serif font-bold text-base mb-2 leading-snug">
                {badge.title}
              </h4>
              <p className={`text-xs leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                {badge.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
