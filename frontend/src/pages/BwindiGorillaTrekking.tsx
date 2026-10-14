import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  MapPin, 
  ChevronDown, 
  ArrowRight
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { businessConfig } from '../data/businessConfig';

const BwindiGorillaTrekking: React.FC = () => {
  const { openModal } = useCustomSafariModal();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': 'Bwindi Gorilla Trekking Safaris in Uganda',
    'description': 'Unforgettable mountain gorilla trekking expeditions in Bwindi Impenetrable National Park, Uganda. Guaranteed permits, expert naturalist guides, and 4x4 transfers.',
    'touristType': ['Primate Enthusiasts', 'Adventure Seekers', 'Eco-Travellers', 'Photographers'],
    'provider': {
      '@type': 'TravelAgency',
      'name': businessConfig.name,
      'url': businessConfig.website.url,
      'telephone': businessConfig.phone.raw,
      'email': businessConfig.email.primary,
    },
    'offers': {
      '@type': 'Offer',
      'priceCurrency': 'USD',
      'availability': 'https://schema.org/InStock',
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': businessConfig.website.url,
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Uganda Safaris',
        'item': `${businessConfig.website.url}/uganda-safaris`,
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': 'Bwindi Gorilla Trekking',
        'item': `${businessConfig.website.url}/bwindi-gorilla-trekking`,
      },
    ],
  };

  const faqs = [
    {
      q: 'How much does a Uganda gorilla permit cost?',
      a: 'A single Uganda gorilla trekking permit issued by the Uganda Wildlife Authority (UWA) costs $800 for Non-Resident Foreigners, $700 for Foreign Residents with valid work permits, and UGX 300,000 for East African citizens. Gorilla Habituation permits (4 hours with semi-habituated gorillas) cost $1,500.',
    },
    {
      q: 'How physically demanding is the gorilla trek in Bwindi?',
      a: 'Treks range from moderate to strenuous, lasting anywhere from 2 to 6 hours depending on the gorilla family’s movements through the steep, jungle-covered ridges. Bwindi sits between 1,160m and 2,607m above sea level. Porters are available at park headquarters ($15–$20) to assist with backpacks and walking, which we highly recommend.',
    },
    {
      q: 'What is the minimum age for gorilla trekking in Uganda?',
      a: 'The official minimum age set by the Uganda Wildlife Authority is 15 years old. This regulation is strictly enforced to protect both young trekkers and the endangered primates.',
    },
    {
      q: 'What should I pack for gorilla trekking?',
      a: 'Essential gear includes sturdy waterproof hiking boots with good ankle support, thick garden gloves (for gripping thorny vines), long lightweight trousers, long-sleeved moisture-wicking shirts, waterproof rain jacket, insect repellent, and a minimum of 2 litres of drinking water.',
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white">
      <SEO
        title="Bwindi Gorilla Trekking Safaris Uganda | Come Again Tours"
        description="Book your Bwindi gorilla trekking safari in Uganda. Guaranteed gorilla permits, licensed tour guides, luxury & midrange lodges, and 4x4 transport. Chat on WhatsApp."
        url={`${businessConfig.website.url}/bwindi-gorilla-trekking`}
        canonical={`${businessConfig.website.url}/bwindi-gorilla-trekking`}
        schema={[touristTripSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[78vh] lg:min-h-[85vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/gorilla1.webp"
              alt="Mountain gorilla trekking in Bwindi Impenetrable National Park Uganda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-black/35" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                UNESCO World Heritage Site • Bwindi Impenetrable Forest
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Bwindi Gorilla Trekking Safaris Uganda
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Stand just metres away from majestic mountain gorillas in their ancient natural mist-covered sanctuary. An awe-inspiring wildlife encounter that changes travellers forever.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan my Gorilla Trekking Safari to Bwindi.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2.5"
              >
                Plan My Gorilla Trekking Safari
              </a>

              <button
                type="button"
                onClick={() => openModal({ destination: 'Bwindi Impenetrable National Park' })}
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Inquire Gorilla Permit Availability
              </button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges variant="dark" />

        {/* 2. Destination & Experience Deep-Dive */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                The Gorilla Trekking Experience
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                What to Expect on a Bwindi Gorilla Safari
              </h2>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Bwindi Impenetrable National Park holds almost half of the world's remaining mountain gorilla population. Located in southwestern Uganda along the edge of the Albertine Rift Valley, its lush canopy has survived for over 25,000 years.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Your morning begins early at 7:30 AM with a thorough briefing at the park headquarters by Uganda Wildlife Authority (UWA) head rangers. You are assigned to a habituated gorilla family in groups of no more than 8 visitors. Led by expert trackers with machetes, you follow fresh knuckle tracks, bent vegetation, and gorilla night nests deep into the primary forest.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Once the family is located, you spend <strong>one life-affirming hour</strong> quietly observing the massive silverback male, playful juveniles somersaulting in the branches, and gentle nursing mothers just yards away.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-brand-green font-bold text-2xl font-serif">500+</div>
                  <div className="text-xs text-gray-400 mt-1">Mountain Gorillas in Bwindi</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-brand-green font-bold text-2xl font-serif">4</div>
                  <div className="text-xs text-gray-400 mt-1">Trekking Sectors</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-brand-green font-bold text-2xl font-serif">1 Hour</div>
                  <div className="text-xs text-gray-400 mt-1">Direct Gorilla Interaction</div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 text-center">
                  <div className="text-brand-green font-bold text-2xl font-serif">99%</div>
                  <div className="text-xs text-gray-400 mt-1">Sighting Success Rate</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.webp"
                  alt="Mountain gorilla family close up encounter"
                  className="w-full h-80 object-cover"
                />
              </div>

              {/* 4 Sectors Box */}
              <div className="bg-[#0b160d] p-6 rounded-2xl border border-brand-green/30 text-left">
                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-green" /> The 4 Trekking Sectors of Bwindi
                </h3>
                <p className="text-xs text-gray-300 mb-4">
                  Permits are sector-specific. We ensure your lodge matches your permit sector to eliminate stressful long morning transfers:
                </p>
                <ul className="text-xs text-gray-300 space-y-2">
                  <li><strong>• Buhoma (North):</strong> The first opened sector; gentle terrain and luxury lodges.</li>
                  <li><strong>• Ruhija (East):</strong> High altitude, cooler mist, fantastic birdwatching.</li>
                  <li><strong>• Rushaga (South):</strong> Houses the most gorilla families plus Habituation experience.</li>
                  <li><strong>• Nkuringo (South):</strong> Dramatic volcanic ridges facing the Virunga peaks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Popular Gorilla Packages */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Ready-to-Book Packages
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Top Bwindi Gorilla Trekking Itineraries
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                Each package includes guaranteed gorilla permits, full-board accommodation, private 4x4 safari transportation, and English-speaking driver-guide.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">3 Days • Express Safari</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">3 Days Bwindi Gorilla Trekking</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Depart Kampala/Entebbe via the Equator line to Bwindi forest. Trek the mountain gorillas on Day 2 and return with scenic vistas on Day 3.
                  </p>
                </div>
                <Link
                  to="/package/3-days-bwindi-gorilla-trekking"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 3-Day Itinerary
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">4 Days • Luxury Fly-in</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">4 Days Fly-In Gorilla Safari</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Skip the long road drive by flying directly from Entebbe to Kihihi/Kisoro airstrip. Perfect for travellers with limited time or luxury preferences.
                  </p>
                </div>
                <Link
                  to="/package/4-days-fly-uganda-gorillas"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View Fly-In Package
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">5 Days • Wildlife Combo</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">5 Days Gorilla & Queen Elizabeth</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    The ultimate southwestern circuit. Combine mountain gorilla trekking in Bwindi with savannah game drives and Kazinga Channel boat safari in Queen Elizabeth.
                  </p>
                </div>
                <Link
                  to="/package/5-days-gorilla-queen-combo"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 5-Day Combo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Frequently Asked Questions (FAQ) */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-4xl mx-auto text-left">
          <div className="text-center mb-12">
            <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
              Essential Traveller Advice
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Bwindi Gorilla Trekking FAQs
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-xl border border-white/10 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between text-base sm:text-lg font-bold text-white hover:text-brand-green transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-green transition-transform duration-300 ${
                      openFaq === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-gray-300 leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              to="/gorilla-permits-guide"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green hover:text-white transition-colors"
            >
              Read Full 2026/2027 Uganda Gorilla Permits Guide <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 5. Direct Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Secure Your Gorilla Permit Today
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Only a limited number of permits are issued daily by UWA to prevent gorilla stress. Contact us directly on WhatsApp to check live date availability.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to check gorilla permit availability for my dates.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Plan My Gorilla Trekking Safari
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark border border-white/20 transition-all duration-300"
              >
                Inquire via Email
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BwindiGorillaTrekking;
