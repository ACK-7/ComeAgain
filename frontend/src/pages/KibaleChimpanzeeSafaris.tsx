import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  TreePine, 
  Volume2 
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { businessConfig } from '../data/businessConfig';

const KibaleChimpanzeeSafaris: React.FC = () => {
  const { openModal } = useCustomSafariModal();

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': 'Kibale Chimpanzee Trekking Safaris Uganda',
    'description': 'Track wild chimpanzees in Kibale National Park, the Primate Capital of the World. Guaranteed permits, expert naturalist rangers, and Bigodi Wetland sanctuary walks.',
    'touristType': ['Primate Enthusiasts', 'Eco-Tourists', 'Birdwatchers'],
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
        'name': 'Kibale Chimpanzee Safaris',
        'item': `${businessConfig.website.url}/kibale-chimpanzee-safaris`,
      },
    ],
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white">
      <SEO
        title="Kibale Chimpanzee Trekking Safaris Uganda | Come Again Tours"
        description="Book your Kibale chimpanzee trekking safari in Uganda. Explore the Primate Capital of the World, Bigodi Wetland walks, habituation experiences, and 4x4 safaris."
        url={`${businessConfig.website.url}/kibale-chimpanzee-safaris`}
        canonical={`${businessConfig.website.url}/kibale-chimpanzee-safaris`}
        schema={[touristTripSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/chimp.jpeg"
              alt="Kibale chimpanzee trekking safari in Uganda tropical rainforest"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-black/35" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                Primate Capital of the World • 13 Primate Species
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Kibale Chimpanzee Trekking Safaris
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Walk beneath ancient fig tree canopies echoing with pant-hoots and tree drumming. Observe our closest living evolutionary cousins in their natural habitat.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan my Kibale Chimpanzee Safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2.5"
              >
                Plan My Kibale Safari
              </a>

              <button
                type="button"
                onClick={() => openModal({ destination: 'Kibale National Park' })}
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Check Chimpanzee Permits
              </button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges variant="dark" />

        {/* 2. Destination Highlights */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                The Primate Capital of the World
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                An Incredible Primate Density
              </h2>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Kibale National Park encompasses 795 square kilometres of rainforest in western Uganda, near the scenic tea plantation hills of Fort Portal. It boasts the highest concentration and greatest variety of primates anywhere in East Africa, with over 1,500 wild chimpanzees calling it home.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Chimpanzee trekking starts at Kanyanchu Visitor Centre twice daily (morning and afternoon). Guided by experienced Uganda Wildlife Authority (UWA) rangers, you track through gently undulating trails. When located, you spend an exhilarating hour watching the chimps groom, feed, climb, and communicate with high-pitched vocal calls that reverberate through the rainforest.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <Volume2 className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Chimpanzee Habituation (CHEX)</h3>
                    <p className="text-xs text-gray-400 mt-1">Spend an entire day (from de-nesting at dawn to re-nesting at dusk) accompanying researchers with semi-habituated chimpanzees.</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <TreePine className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Bigodi Wetland Sanctuary</h3>
                    <p className="text-xs text-gray-400 mt-1">A community-managed wetland sanctuary famed for Great Blue Turacos, 8 primate species (including red colobus and grey-cheeked mangabeys), and papyrus endemics.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/pic5.jpg"
                  alt="Uganda rainforest primate trekking experience"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-[#0b160d] p-6 rounded-2xl border border-brand-green/30 text-left">
                <h3 className="text-lg font-bold text-white mb-2">Key Primate Species in Kibale</h3>
                <ul className="text-xs text-gray-300 space-y-2">
                  <li><strong>• Eastern Chimpanzee:</strong> Over 1,500 individuals.</li>
                  <li><strong>• Uganda Red Colobus:</strong> Endangered primate resident in Kibale.</li>
                  <li><strong>• L'Hoest's Monkey:</strong> Handsome forest monkey with a white beard.</li>
                  <li><strong>• Grey-cheeked Mangabey:</strong> Arboreal monkey with distinct vocalizations.</li>
                  <li><strong>• Black-and-White Colobus:</strong> Spectacular long-furred canopy acrobats.</li>
                  <li><strong>• Olive Baboon, Vervet Monkeys, & Nocturnal Bushbabies.</strong></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Featured Packages */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Featured Itineraries
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Popular Kibale Chimpanzee Safari Packages
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                Each package includes UWA chimpanzee tracking permits, private 4x4 safari transport, expert guide, and forest lodge accommodation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">3 Days • Primate Focus</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">3 Days Kibale Chimpanzee Tour</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Scenic drive through Fort Portal's rolling crater lakes, chimpanzee tracking in Kibale, and a guided birding walk through Bigodi Wetland.
                  </p>
                </div>
                <Link
                  to="/package/3-days-kibale-chimpanzee-tour"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 3-Day Package
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">5 Days • Savanna & Primates</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">5 Days Murchison & Kibale Chimps</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Combine the thundering waterfalls and savanna game drives of Murchison Falls with chimpanzee tracking in Kibale Forest.
                  </p>
                </div>
                <Link
                  to="/package/5-days-murchison-chimps"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 5-Day Combo
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">7 Days • Primate & Big Game</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">7 Days Uganda Wildlife Classic</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Our definitive circuit connecting Kibale chimpanzees, Queen Elizabeth lions, Bwindi mountain gorillas, and Murchison Falls.
                  </p>
                </div>
                <Link
                  to="/package/7-days-uganda-wildlife-classic"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 7-Day Tour
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Direct Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Plan Your Kibale Chimpanzee Safari
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Chimpanzee permits sell out quickly during the peak dry seasons (June–August and December–February). Inquire today to guarantee your trek dates.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan my Kibale Chimpanzee Safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Plan My Kibale Safari
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark border border-white/20 transition-all duration-300"
              >
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default KibaleChimpanzeeSafaris;
