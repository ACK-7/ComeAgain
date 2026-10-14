import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, MessageCircle, PhoneCall } from 'lucide-react';
import { siteData } from '../data/siteData';
import { businessConfig } from '../data/businessConfig';

export interface FAQItem {
  question: string;
  category: string;
  answer: string;
}

export const SAFARI_FAQS: FAQItem[] = [
  {
    category: 'Gorilla Trekking',
    question: 'How physically demanding is gorilla trekking in Bwindi?',
    answer: 'Trekking can take anywhere between 1.5 to 6 hours depending on where the gorilla family spent the night and how high they moved into the misty canopy. Elevations range from 1,160m to 2,600m with muddy, uneven rainforest trails. You do not need to be an Olympic athlete—porters are readily available for hire ($15–$20) to carry your backpack and provide a supportive hand on steep terrain. Our guides will match your pacing.',
  },
  {
    category: 'Health & Entry',
    question: 'Do I need a Yellow Fever vaccination and Malaria prophylaxis?',
    answer: 'Yes. Proof of Yellow Fever vaccination (the International Certificate of Vaccination) is a mandatory requirement for entering Uganda through Entebbe International Airport. For malaria, we strongly recommend consulting your travel doctor for preventive medication (like Malarone or Doxycycline), using DEET insect repellent, and wearing lightweight long sleeves in the evenings.',
  },
  {
    category: 'Inclusions & Costs',
    question: 'What is included in ComeAgain Safari packages?',
    answer: 'Our bespoke itineraries are comprehensive. They include all national park entry fees, official Uganda Wildlife Authority (UWA) gorilla and chimpanzee permits ($800/gorilla permit included in full), dedicated 4x4 safari land cruiser transport with pop-up roof, full-board lodge accommodations, bottled drinking water throughout game drives, and the services of an expert English-speaking driver-guide. Only international flights, visas, and personal tips are excluded.',
  },
  {
    category: 'Permit Guarantees',
    question: 'How do gorilla permits work, and is our encounter guaranteed?',
    answer: 'Once you confirm your safari booking with us, ComeAgain Safaris purchases and secures your official UWA permits directly in your name. Sightings are over 98% guaranteed because specialized UWA ranger-trackers head into the forest early each morning at dawn to locate the family before travelers arrive at the trailhead.',
  },
  {
    category: 'Timing & Weather',
    question: 'When is the best time of year to visit Uganda?',
    answer: 'Uganda is an exceptional year-round destination because it sits right on the equator. The two dry seasons—June to September and December to February—are considered the absolute best for gorilla trekking and savannah game viewing around waterholes. The greener months (March–May and October–November) offer breathtaking lush scenery, fewer travelers, and prime migratory birdwatching.',
  },
  {
    category: 'Safety & Family',
    question: 'Is Uganda safe for families, solo female travelers, and seniors?',
    answer: 'Uganda is known as one of the most welcoming and peaceful nations in East Africa. The national parks are heavily guarded by professional rangers and tourism police. We offer private chauffeured transfers, vetted luxury partner lodges with high security, and 24/7 concierge support. The minimum age for gorilla trekking is 15 years, while children can enjoy boat cruises and savannah game drives.',
  },
];

const SafariFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-[#0c130c] text-white relative border-t border-brand-green/20">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/15 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-widest mb-4">
            <HelpCircle className="w-4 h-4" />
            <span>Essential Traveler Intelligence</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Frequently Asked <span className="text-brand-gold italic">Questions</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Everything international adventurers need to know before stepping into the Pearl of Africa.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {SAFARI_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={false}
                className={`rounded-2xl border transition-colors overflow-hidden ${
                  isOpen
                    ? 'bg-white/[0.06] border-brand-green/40 shadow-xl'
                    : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold">
                      {faq.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`p-2 rounded-full transition-transform duration-300 shrink-0 ${
                      isOpen ? 'bg-brand-green text-white rotate-180' : 'bg-white/10 text-gray-300'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: 'easeOut' }}
                    >
                      <div className="px-6 pb-7 sm:px-7 text-gray-300 text-sm sm:text-base leading-relaxed border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Direct Help Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="font-bold text-white text-base">Have a specific question about your trip?</h4>
            <p className="text-xs text-gray-400">Our local Uganda safari experts are online 24/7 on WhatsApp.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I have a question about planning my Uganda safari.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#22c55e] text-white font-bold text-xs uppercase tracking-wider transition-transform active:scale-95 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Ask on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteData.contact.phones[0]}`}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Call Us</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafariFAQ;
