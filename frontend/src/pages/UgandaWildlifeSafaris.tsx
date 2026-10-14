import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { businessConfig } from '../data/businessConfig';

const UgandaWildlifeSafaris: React.FC = () => {
  const { openModal } = useCustomSafariModal();

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': 'Uganda Wildlife Safaris & Savannah Tours',
    'description': 'Experience Big Five wildlife safaris in Uganda. Savannah game drives in Murchison Falls, Queen Elizabeth, Kidepo Valley, and Lake Mburo with Come Again Tours.',
    'touristType': ['Wildlife Enthusiasts', 'Photographers', 'Family Safaris'],
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
        'name': 'Uganda Wildlife Safaris',
        'item': `${businessConfig.website.url}/uganda-wildlife-safaris`,
      },
    ],
  };

  const savannaDestinations = [
    {
      name: 'Murchison Falls National Park',
      slug: '/murchison-falls-safaris',
      animals: 'Lions, Elephants, Giraffes, Hippos, Nile Crocodiles',
      highlight: 'World’s most powerful waterfall & Victoria Nile boat cruise',
      image: '/images/elephant.jpeg',
    },
    {
      name: 'Queen Elizabeth National Park',
      slug: '/queen-elizabeth-national-park-safaris',
      animals: 'Tree-climbing Lions, Leopards, Buffalos, Kazinga Hippos',
      highlight: 'Kazinga Channel boat safari & Ishasha wilderness',
      image: '/images/lions-tree.jpeg',
    },
    {
      name: 'Kidepo Valley National Park',
      slug: '/package/3-days-kidepo-wilderness',
      animals: 'Cheetahs, Lions on Kopjes, Ostriches, Huge Buffalo herds',
      highlight: 'Africa’s true untouched wilderness in the remote Northeast',
      image: '/images/scene.jpeg',
    },
    {
      name: 'Lake Mburo National Park',
      slug: '/package/2-days-lake-mburo-safari',
      animals: 'Zebras, Elands, Impalas, Giraffes, Leopards',
      highlight: 'Walking safaris, horseback safaris & night game drives',
      image: '/images/image8.jpeg',
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white">
      <SEO
        title="Uganda Wildlife Safaris & Savannah Tours | Come Again Tours"
        description="Book Big Five Uganda wildlife safaris and savanna tours with Come Again Tours. Experience Murchison Falls, Queen Elizabeth, Kidepo Valley, and Lake Mburo."
        url={`${businessConfig.website.url}/uganda-wildlife-safaris`}
        canonical={`${businessConfig.website.url}/uganda-wildlife-safaris`}
        schema={[touristTripSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg"
              alt="Uganda wildlife safari savannah game drive"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-black/35" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                Classic African Savannah Safaris
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Uganda Wildlife Safaris & Holidays
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Traverse dramatic golden savannas, river deltas, and volcanic crater valleys. Witness Africa’s greatest wildlife wonders in their uncrowded, pristine habitats.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan my Uganda Wildlife Safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2.5"
              >
                Plan My Uganda Wildlife Safari
              </a>

              <button
                type="button"
                onClick={() => openModal({})}
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Request Custom Itinerary
              </button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges variant="dark" />

        {/* 2. Savannah Destinations Grid */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <div className="mb-12">
            <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
              Uganda's Premier Wildlife Parks
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Where to Experience Uganda’s Wildlife
            </h2>
            <p className="text-gray-300 text-base max-w-3xl mt-4">
              Uganda offers a diverse network of national parks spanning from the northern savannahs of the Nile to the open grasslands of the south. Below are the key game reserves that form our signature safari circuits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {savannaDestinations.map((dest, idx) => (
              <div
                key={idx}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-green/50 transition-all duration-300 flex flex-col group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  <h3 className="absolute bottom-4 left-6 text-2xl font-serif font-bold text-white">
                    {dest.name}
                  </h3>
                </div>

                <div className="p-6 space-y-4 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="text-xs text-brand-green font-bold uppercase tracking-wider mb-1">
                      Key Wildlife Sighted:
                    </div>
                    <p className="text-sm text-gray-300 mb-3">{dest.animals}</p>

                    <div className="text-xs text-gray-400 font-medium">
                      <strong>Highlight:</strong> {dest.highlight}
                    </div>
                  </div>

                  <Link
                    to={dest.slug}
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green group-hover:text-white transition-colors pt-2"
                  >
                    Explore Destination Safaris <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Featured Multi-Park Safaris */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Complete Safari Circuits
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Signature Uganda Wildlife Safari Holidays
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                Carefully crafted multi-day journeys combining savannah game drives, primate tracking, and boat cruises across Uganda.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">7 Days • Classic Circuit</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">7 Days Uganda Wildlife Classic</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    Murchison Falls, Kibale chimpanzees, Queen Elizabeth lions, and Bwindi mountain gorillas. The perfect week-long overview.
                  </p>
                </div>
                <Link
                  to="/package/7-days-uganda-wildlife-classic"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 7-Day Classic
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">10 Days • In-Depth Safari</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">10 Days Best of Uganda & Gorillas</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    A comprehensive expedition including Ziwa Rhinos, Murchison Falls, Kibale Chimpanzees, Queen Elizabeth lions, Bwindi gorillas, and Lake Bunyonyi.
                  </p>
                </div>
                <Link
                  to="/package/10-days-best-of-uganda-gorillas"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 10-Day Safari
                </Link>
              </div>

              <div className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col justify-between hover:border-brand-green/50 transition-colors">
                <div>
                  <div className="text-brand-green font-bold text-xs uppercase mb-2">12 Days • Grand Expedition</div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-3">12 Days Uganda Wildlife Adventure</h3>
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    The ultimate journey across Uganda covering savannah wildlife, primate trekking, crater lakes, Lake Mburo zebras, and scenic cultural encounters.
                  </p>
                </div>
                <Link
                  to="/package/12-days-uganda-wildlife-adventure"
                  className="w-full py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl hover:bg-white hover:text-brand-dark transition-all"
                >
                  View 12-Day Adventure
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Direct Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Start Planning Your Uganda Wildlife Safari
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Our Uganda travel experts are ready to assist you. Chat with us on WhatsApp or request a transparent, customized safari proposal today.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan a custom Uganda wildlife safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Plan My Uganda Wildlife Safari
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

export default UgandaWildlifeSafaris;
