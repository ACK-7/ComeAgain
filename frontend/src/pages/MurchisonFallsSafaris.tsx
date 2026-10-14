import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Waves, 
  Zap 
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { businessConfig } from '../data/businessConfig';

const MurchisonFallsSafaris: React.FC = () => {
  const { openModal } = useCustomSafariModal();

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': 'Murchison Falls National Park Safaris Uganda',
    'description': 'Witness the world’s most powerful waterfall and Big Four savannah wildlife in Murchison Falls National Park with Come Again Tours.',
    'touristType': ['Adventure Travellers', 'Wildlife Photographers', 'Family Safaris'],
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
        'name': 'Murchison Falls Safaris',
        'item': `${businessConfig.website.url}/murchison-falls-safaris`,
      },
    ],
  };

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white">
      <SEO
        title="Murchison Falls Safaris & Wildlife Tours | Come Again Tours"
        description="Book unforgettable Murchison Falls safaris in Uganda. See the world's strongest waterfall, Nile River boat cruises, Rothschild giraffes, and Big Four game drives."
        url={`${businessConfig.website.url}/murchison-falls-safaris`}
        canonical={`${businessConfig.website.url}/murchison-falls-safaris`}
        schema={[touristTripSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/elephant.jpeg"
              alt="Murchison Falls National Park safari wildlife and elephant"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-black/35" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                The World’s Most Powerful Waterfall • Largest National Park
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Murchison Falls National Park Safaris
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Experience the thunderous roar of the Victoria Nile squeezing through a narrow 7-metre gorge, surrounded by dense elephant herds, Rothschild’s giraffes, and Nile crocodiles.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan my Murchison Falls Safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2.5"
              >
                Plan My Murchison Falls Safari
              </a>

              <button
                type="button"
                onClick={() => openModal({ destination: 'Murchison Falls National Park' })}
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Get Murchison Safari Quote
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
                Uganda's Largest Conservation Area
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Where the Mighty Nile Meets the African Savannah
              </h2>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Spanning over 3,840 square kilometres in northwestern Uganda, Murchison Falls National Park is bisected by the historic Victoria Nile River. Here, the world’s longest river violently plunges 43 metres over the rift valley wall through a narrow 7-metre cleft with thunderous energy before calming into a tranquil stream flowing into Lake Albert.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                The park's northern sector offers rolling savannah plains studded with Borassus palm trees, providing prime territory for lions, leopards, oribis, Jackson’s hartebeests, and the highest concentration of endangered Rothschild’s giraffes in Uganda.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Top of the Falls Experience</h3>
                    <p className="text-xs text-gray-400 mt-1">Stand right at the edge of the gorge and feel the ground vibrate beneath your feet as millions of litres surge into the Devil’s Cauldron.</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <Waves className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Nile River Boat Cruise</h3>
                    <p className="text-xs text-gray-400 mt-1">Cruise past colossal pods of hippos, giant Nile crocodiles basking on sandbanks, and red-throated bee-eaters nesting in riverbanks.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/image2.jpeg"
                  alt="Murchison Falls boat safari and river"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-[#0b160d] p-6 rounded-2xl border border-brand-green/30 text-left">
                <h3 className="text-lg font-bold text-white mb-2">Must-Do Experiences in Murchison</h3>
                <ul className="text-xs text-gray-300 space-y-2.5">
                  <li><strong>• Delta Boat Cruise:</strong> A morning cruise down towards Lake Albert, famous for rare Shoebill stork sightings.</li>
                  <li><strong>• Ziwa Rhino Sanctuary Stopover:</strong> Track endangered southern white rhinos on foot on your drive from Kampala.</li>
                  <li><strong>• Northern Buligi Game Tracks:</strong> Early morning game drives for lions, hyenas, elephants, and leopards.</li>
                  <li><strong>• Hot Air Balloon Safaris:</strong> Soar above the palm-fringed savannah at sunrise followed by a bush breakfast.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Popular Murchison Packages */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Featured Itineraries
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Popular Murchison Falls Safari Packages
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                Complete safaris featuring private 4x4 transport, rhino tracking permits, park fees, and riverside lodge stays.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">3 Days • Drive Safari</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">3 Days Murchison Falls Safari</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Our best-selling safari. Includes Ziwa Rhino tracking, Top of the Falls visit, savannah game drives, and Victoria Nile boat cruise.
                  </p>
                </div>
                <Link
                  to="/package/3-days-murchison-falls-safari"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 3-Day Safari
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">3 Days • Luxury Fly-In</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">3 Days Fly-In Murchison Safari</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Fly directly from Entebbe to Pakuba airstrip in just one hour. Maximise wildlife viewing time with luxury boutique lodge accommodations.
                  </p>
                </div>
                <Link
                  to="/package/3-days-fly-murchison-falls"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View Fly-In Package
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">5 Days • Savanna & Chimps</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">5 Days Murchison & Kibale Chimps</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Combine the Big Five savannah experience of Murchison Falls with chimpanzee tracking in the tropical rainforest of Kibale.
                  </p>
                </div>
                <Link
                  to="/package/5-days-murchison-chimps"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 5-Day Combo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Direct Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Plan Your Murchison Falls Safari
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Ready to witness the raw power of the Nile? Connect with our Kampala tour planners on WhatsApp for custom quotes and availability.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan my Murchison Falls Safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Plan My Murchison Falls Safari
              </a>
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark border border-white/20 transition-all duration-300"
              >
                Request a Quote Online
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MurchisonFallsSafaris;
