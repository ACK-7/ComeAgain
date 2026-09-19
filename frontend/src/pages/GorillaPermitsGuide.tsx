import React, { useState } from 'react';
import { 
  Calendar, 
  CheckCircle2, 
  HelpCircle, 
  ChevronDown, 
  Sparkles, 
  Phone
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { useCurrency } from '../context/CurrencyContext';

const FAQS = [
  {
    q: 'How much does a Uganda Gorilla Trekking Permit cost in 2026/2027?',
    a: 'According to official Uganda Wildlife Authority (UWA) tariffs, gorilla trekking permits cost: $800 USD for Foreign Non-Residents, $700 USD for Foreign Residents (with work permits in East Africa), $500 USD for Rest of Africa citizens, and 300,000 UGX for East African Community (EAC) citizens. Gorilla Habituation Experience permits (which give you 4 hours with the gorillas) cost $1,500 USD.',
  },
  {
    q: 'How far in advance should I book my gorilla permit?',
    a: 'Because UWA issues only 8 permits per habituated gorilla family per day, permits sell out rapidly for peak dry months (June to September and December to February). We recommend booking your permit at least 3 to 6 months in advance. Come Again Tours can secure your permit directly from UWA.',
  },
  {
    q: 'What is the minimum age for gorilla trekking in Uganda?',
    a: 'The official minimum age set by the Uganda Wildlife Authority is 15 years old. This is strictly enforced at Bwindi Impenetrable and Mgahinga National Parks.',
  },
  {
    q: 'What is included in the gorilla permit fee?',
    a: 'The permit fee includes entry into the National Park, an armed UWA ranger guide and trackers, 1 full hour of direct face-to-face observation with the mountain gorilla family, and the contribution towards gorilla conservation and local community infrastructure.',
  },
  {
    q: 'What is the difference between Gorilla Trekking and Gorilla Habituation?',
    a: 'Standard Gorilla Trekking allows 1 hour with a fully habituated gorilla group (max 8 visitors). Gorilla Habituation Experience in Rushaga sector allows 4 hours in the company of researchers, rangers, and semi-habituated gorillas (max 4 visitors).',
  },
];

const GorillaPermitsGuide: React.FC = () => {
  const { openModal } = useCustomSafariModal();
  const { formatPrice } = useCurrency();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQS.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <div className="bg-white text-brand-dark min-h-screen">
      <SEO
        title="Uganda Gorilla Trekking Permits 2026/2027 Guide & Booking | Come Again Tours"
        description="Complete guide on how to secure Uganda gorilla permits for Bwindi & Mgahinga. Official UWA rates ($800 FNR), availability calendar, age limits, and guaranteed permit reservations."
        schema={faqSchema}
      />

      {/* Hero Header */}
      <section className="relative py-24 px-4 bg-brand-dark text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={`${import.meta.env.BASE_URL}images/gorilla1.jpeg`}
            alt="Mountain Gorilla Uganda"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-left">
          <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] block mb-4 flex items-center gap-2">
            <Sparkles className="w-4 h-4" /> Official UWA Partner Guide
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Uganda Gorilla Permits Guide <br />
            <span className="text-brand-green">& Booking Service (2026/2027)</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
            Everything you need to know about securing your mountain gorilla trekking permit in Bwindi Impenetrable Forest and Mgahinga Gorilla National Park. Guaranteed reservations directly through the Uganda Wildlife Authority.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => openModal({ packageTitle: 'Gorilla Permit Reservation & Safari' })}
              className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" /> Check Permit Availability & Reserve
            </button>
            <a
              href="https://wa.me/256784549282?text=Hi%20Come%20Again%20Tours,%20I%20would%20like%20to%20check%20Gorilla%20Permit%20availability"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/20 bg-white/5 backdrop-blur-md text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Instant WhatsApp Check
            </a>
          </div>
        </div>
      </section>

      {/* Official Tariff Cards */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">
            Official Pricing Structure
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
            Official Uganda Gorilla Trekking Permit Fees
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto mt-2">
            Permit rates are regulated by the Uganda Wildlife Authority (UWA) and include park entry, ranger guides, and 1 full hour with a habituated gorilla family.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* FNR */}
          <div className="bg-[#f7faf5] border-2 border-brand-green rounded-3xl p-8 text-left relative shadow-sm flex flex-col justify-between">
            <div className="absolute -top-3 right-6 bg-brand-green text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              International Visitors
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-brand-dark mb-1">Foreign Non-Resident</h3>
              <p className="text-xs text-gray-500 mb-6">International tourists from USA, UK, EU, Asia & worldwide</p>
              <div className="mb-6">
                <span className="text-4xl font-serif font-black text-brand-green">{formatPrice(800)}</span>
                <span className="text-xs text-gray-500 block mt-1">per person / per trek</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-700 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> 1 Hour face-to-face gorilla viewing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> Armed UWA ranger escorts & trackers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> Bwindi or Mgahinga park entry included</li>
              </ul>
            </div>
            <button
              onClick={() => openModal({ packageTitle: 'Gorilla Permit - Foreign Non-Resident' })}
              className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-dark transition-colors"
            >
              Book This Permit
            </button>
          </div>

          {/* Habituation */}
          <div className="bg-brand-dark text-white rounded-3xl p-8 text-left relative shadow-xl flex flex-col justify-between">
            <div className="absolute -top-3 right-6 bg-yellow-500 text-brand-dark text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
              VIP 4-Hour Experience
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white mb-1">Gorilla Habituation</h3>
              <p className="text-xs text-gray-400 mb-6">Rushaga Sector (Bwindi) — Max 4 guests per group</p>
              <div className="mb-6">
                <span className="text-4xl font-serif font-black text-brand-green">{formatPrice(1500)}</span>
                <span className="text-xs text-gray-400 block mt-1">per person / 4 full hours</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-300 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> 4 Hours with semi-habituated gorillas</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> Accompanied by lead researchers & rangers</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> Exclusive small group experience</li>
              </ul>
            </div>
            <button
              onClick={() => openModal({ packageTitle: 'Gorilla Habituation Experience ($1500)' })}
              className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-white hover:text-brand-dark transition-colors"
            >
              Reserve Habituation Permit
            </button>
          </div>

          {/* Resident */}
          <div className="bg-[#f7faf5] border border-gray-200 rounded-3xl p-8 text-left relative shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-serif font-bold text-brand-dark mb-1">Foreign Resident & EAC</h3>
              <p className="text-xs text-gray-500 mb-6">Expatriates with EA work permits / East African citizens</p>
              <div className="mb-6">
                <span className="text-4xl font-serif font-black text-brand-green">{formatPrice(700)}</span>
                <span className="text-xs text-gray-500 block mt-1">Resident ($700) / EAC (UGX 300k)</span>
              </div>
              <ul className="space-y-3 text-xs text-gray-700 mb-8">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> Valid Work Permit / National ID required</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> Standard 1-Hour trekking access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" /> Applicable across all 4 Bwindi sectors</li>
              </ul>
            </div>
            <button
              onClick={() => openModal({ packageTitle: 'Gorilla Permit - Resident / EAC' })}
              className="w-full py-3 bg-brand-dark text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-green transition-colors"
            >
              Book Resident Permit
            </button>
          </div>
        </div>
      </section>

      {/* How Come Again Secures Permits */}
      <section className="py-16 px-4 bg-[#f4faf2]">
        <div className="max-w-5xl mx-auto text-left">
          <div className="text-center mb-12">
            <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">
              Hassle-Free Booking Process
            </span>
            <h2 className="text-3xl font-serif font-bold text-brand-dark">
              How We Guarantee Your Gorilla Permit in 3 Simple Steps
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-green/20 shadow-sm">
              <div className="w-10 h-10 bg-brand-green text-white font-serif font-bold rounded-xl flex items-center justify-center mb-4 text-lg">
                1
              </div>
              <h4 className="font-serif font-bold text-lg mb-2">Check Real-Time UWA Dates</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Provide your desired travel dates. Our Kampala operations team checks live UWA databases across Buhoma, Ruhija, Rushaga, and Nkuringo sectors.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-green/20 shadow-sm">
              <div className="w-10 h-10 bg-brand-green text-white font-serif font-bold rounded-xl flex items-center justify-center mb-4 text-lg">
                2
              </div>
              <h4 className="font-serif font-bold text-lg mb-2">Passport Registration</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We collect your passport bio-data (required by Uganda Wildlife Authority) and officially issue your personalized permit registration cards.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-green/20 shadow-sm">
              <div className="w-10 h-10 bg-brand-green text-white font-serif font-bold rounded-xl flex items-center justify-center mb-4 text-lg">
                3
              </div>
              <h4 className="font-serif font-bold text-lg mb-2">Full Safari Coordination</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                We pair your permit with luxury 4x4 Land Cruiser transport, expert driver-guides, and lodge accommodations situated closest to your trekking sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive FAQ Accordion */}
      <section className="py-20 px-4 max-w-4xl mx-auto text-left">
        <div className="text-center mb-12">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
            Gorilla Trekking FAQs
          </h2>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-200 bg-white"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base sm:text-lg text-brand-dark hover:text-brand-green transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-brand-green shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges variant="light" />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-3xl sm:text-4xl font-serif font-bold mb-4">
            Ready to Stand Face-to-Face with Gentle Giants?
          </h3>
          <p className="text-gray-300 text-sm mb-8">
            Permits for upcoming peak months are selling fast. Let our local team secure yours today.
          </p>
          <button
            onClick={() => openModal({ packageTitle: 'Gorilla Trekking Safari Package' })}
            className="px-10 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl"
          >
            Plan My Gorilla Trekking Safari
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GorillaPermitsGuide;
