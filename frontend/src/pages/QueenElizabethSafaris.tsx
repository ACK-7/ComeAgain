import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Binoculars, 
  Waves 
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { businessConfig } from '../data/businessConfig';

const QueenElizabethSafaris: React.FC = () => {
  const { openModal } = useCustomSafariModal();

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': 'Queen Elizabeth National Park Safaris Uganda',
    'description': 'Experience classic Uganda savannah safaris in Queen Elizabeth National Park. Tree-climbing lions in Ishasha, Kazinga Channel boat cruise, elephants, and leopards.',
    'touristType': ['Wildlife Safari Enthusiasts', 'Birdwatchers', 'Family Travellers'],
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
        'name': 'Queen Elizabeth National Park Safaris',
        'item': `${businessConfig.website.url}/queen-elizabeth-national-park-safaris`,
      },
    ],
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white">
      <SEO
        title="Queen Elizabeth National Park Safaris Uganda | Come Again Tours"
        description="Book Queen Elizabeth National Park safaris with Come Again Tours. See tree-climbing lions in Ishasha, boat cruises on Kazinga Channel, and Big Game drives."
        url={`${businessConfig.website.url}/queen-elizabeth-national-park-safaris`}
        canonical={`${businessConfig.website.url}/queen-elizabeth-national-park-safaris`}
        schema={[touristTripSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/lions-tree.jpeg"
              alt="Tree climbing lions Queen Elizabeth National Park Uganda"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-black/35" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                Uganda’s Premier Savannah Park
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Queen Elizabeth National Park Safaris
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Home to the famous tree-climbing lions of Ishasha, the hippo-rich Kazinga Channel, and endless open savannah framed by the snow-capped Rwenzori Mountains.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to request my Queen Elizabeth Safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2.5"
              >
                Request My Queen Elizabeth Safari
              </a>

              <button
                type="button"
                onClick={() => openModal({ destination: 'Queen Elizabeth National Park' })}
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Custom Safari Quote
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
                The Pearl of Uganda’s Wildlife
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                An Iconic African Savannah Ecosystem
              </h2>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Covering nearly 1,978 square kilometres, Queen Elizabeth National Park (QENP) is Uganda’s most biodiverse wildlife reserve. Set against the dramatic backdrop of the jagged Rwenzori mountain range, the park spans open savannah plains, dense tropical fig forests, explosive crater lakes, and freshwater channels.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With over 95 mammal species and more than 600 recorded bird species, it offers some of the finest game viewing in Africa. From large elephant breeding herds and Cape buffaloes to elusive leopards, Uganda kobs, and giant forest hogs, every game drive brings unexpected drama.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <Binoculars className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Tree-Climbing Lions</h3>
                    <p className="text-xs text-gray-400 mt-1">In the Ishasha sector, lions rest lazily on sprawling sycamore fig trees to escape ground tsetse flies.</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <Waves className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Kazinga Channel Boat Cruise</h3>
                    <p className="text-xs text-gray-400 mt-1">A 2-hour launch cruise providing front-row photography of the world’s highest concentration of hippos and bathing elephants.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/image7.jpeg"
                  alt="Wildlife safari in Queen Elizabeth National Park"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-[#0b160d] p-6 rounded-2xl border border-brand-green/30 text-left">
                <h3 className="text-lg font-bold text-white mb-2">Key Safari Sectors in QENP</h3>
                <ul className="text-xs text-gray-300 space-y-2.5">
                  <li><strong>• Kasenyi Plains:</strong> Main savannah sector for early morning lion prides, leopards, and herds of Uganda kob.</li>
                  <li><strong>• Kazinga Channel:</strong> 32km natural waterway linking Lake George and Lake Edward.</li>
                  <li><strong>• Ishasha Sector:</strong> Southern corridor celebrated for tree-climbing lions and topis.</li>
                  <li><strong>• Kyambura Gorge:</strong> Sunken subterranean rainforest housing chimpanzee tracking.</li>
                  <li><strong>• Katwe Explosion Craters:</strong> Breathtaking volcanic crater lakes and historic salt mining.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Popular Queen Elizabeth Packages */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Featured Itineraries
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Popular Queen Elizabeth Safari Packages
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                Each safari includes private 4x4 Land Cruiser transport, park entrance fees, boat cruise tickets, and full-board lodge accommodation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">3 Days • Highlights</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">3 Days Queen Elizabeth Wildlife Safari</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Kasenyi game drives, afternoon Kazinga Channel boat safari, explosion crater drive, and scenic equator stopover.
                  </p>
                </div>
                <Link
                  to="/package/3-days-queen-elizabeth-safari"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 3-Day Safari
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">5 Days • Combo Safari</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">5 Days Gorilla & Queen Elizabeth</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Combine the Big Game savannas of Queen Elizabeth with mountain gorilla trekking in the misty forests of Bwindi.
                  </p>
                </div>
                <Link
                  to="/package/5-days-gorilla-queen-combo"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 5-Day Combo
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">7 Days • Classic Tour</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">7 Days Uganda Wildlife Classic</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    A grand circular expedition including Murchison Falls, Kibale chimpanzees, Queen Elizabeth lions, and Bwindi gorillas.
                  </p>
                </div>
                <Link
                  to="/package/7-days-uganda-wildlife-classic"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 7-Day Classic
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Direct Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Ready for a Queen Elizabeth Safari?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you prefer luxury tented camps or comfortable midrange lodges, our local tour specialists ensure an unforgettable safari experience.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to request a Queen Elizabeth National Park safari quote.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Request My Queen Elizabeth Safari
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark border border-white/20 transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default QueenElizabethSafaris;
