import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { businessConfig } from '../data/businessConfig';

const UgandaSafaris: React.FC = () => {
  const { openModal } = useCustomSafariModal();

  const touristTripSchema = {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    'name': 'Uganda Safaris & Wildlife Tours',
    'description': 'Experience bespoke Uganda safaris with Come Again Tours and Travels. Mountain gorilla trekking, chimpanzee tracking, Big 5 savanna game drives, and 4x4 car hire.',
    'touristType': ['Wildlife Enthusiasts', 'Adventure Travellers', 'Birdwatchers', 'Photographers'],
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
    ],
  };

  const safariTypes = [
    {
      title: 'Bwindi Gorilla Trekking',
      slug: '/bwindi-gorilla-trekking',
      image: '/images/gorilla1.jpeg',
      description: 'Face-to-face encounters with endangered mountain gorillas in the ancient misty rainforests of Bwindi Impenetrable National Park.',
      badge: 'Most Popular',
    },
    {
      title: 'Queen Elizabeth Wildlife Safaris',
      slug: '/queen-elizabeth-national-park-safaris',
      image: '/images/lions-tree.jpeg',
      description: 'Famous tree-climbing lions in Ishasha, hippos and elephants along the Kazinga Channel boat safari, and vast savannah plains.',
      badge: 'Savanna & Cruise',
    },
    {
      title: 'Murchison Falls Expeditions',
      slug: '/murchison-falls-safaris',
      image: '/images/elephant.jpeg',
      description: 'Witness the world’s most powerful surge of water through a 7-meter gorge, accompanied by Big Four game drives and Victoria Nile cruises.',
      badge: 'Mighty Nile',
    },
    {
      title: 'Kibale Chimpanzee Tracking',
      slug: '/kibale-chimpanzee-safaris',
      image: '/images/chimp.jpeg',
      description: 'Trek through the Primate Capital of the World housing 13 primate species and the largest population of habituated chimpanzees.',
      badge: 'Primate Capital',
    },
    {
      title: 'Savannah Wildlife Safaris',
      slug: '/uganda-wildlife-safaris',
      image: '/images/scene.jpeg',
      description: 'Classic African game drives across Kidepo Valley, Lake Mburo, and Semuliki for zebras, giraffes, leopards, and rare bird species.',
      badge: 'Big Five & Birds',
    },
    {
      title: '4x4 Car Hire & Professional Drivers',
      slug: '/car-hire-uganda',
      image: '/images/vehicle1.jpeg',
      description: 'Custom safari Land Cruisers and vans equipped with pop-up roofs, driven by licensed Uganda naturalist driver-guides.',
      badge: 'Transport & Guides',
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white">
      <SEO
        title="Uganda Safaris & Safari Tours | Come Again Tours and Travels"
        description="Book authentic Uganda safaris with Come Again Tours and Travels, a licensed Uganda tour operator. Mountain gorilla trekking, chimpanzee tracking, wildlife safaris, and 4x4 car hire."
        url={`${businessConfig.website.url}/uganda-safaris`}
        canonical={`${businessConfig.website.url}/uganda-safaris`}
        schema={[touristTripSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/scene.jpeg"
              alt="Uganda Safaris and Wildlife Tours"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/70 to-black/30" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                Uganda Tour Operator & Safari Specialist
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Uganda Safaris & Wildlife Tours
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Immerse yourself in the Pearl of Africa. From mountain gorilla encounters in ancient misty rainforests to open savannah game drives and Nile boat safaris.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to plan my Uganda Safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2.5"
              >
                Plan My Uganda Safari – WhatsApp Us
              </a>

              <button
                type="button"
                onClick={() => openModal({})}
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Request a Custom Quote
              </button>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges variant="dark" />

        {/* 2. Overview & Key Experiences */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                Why Choose Uganda
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                An Unrivalled African Safari Destination
              </h2>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Known rightfully as the <strong>Pearl of Africa</strong>, Uganda stands apart from any other safari destination. Here, the dense tropical jungles of Central Africa meet the sweeping golden savannahs of East Africa, creating an extraordinary density of biodiversity.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                With <strong>Come Again Tours and Travels</strong>, your journey is handled by licensed local experts born and raised in Uganda. We take care of every detail: guaranteed Uganda Wildlife Authority (UWA) gorilla and chimpanzee permits, custom 4x4 safari vehicles with pop-up viewing roofs, verified eco-luxury lodges, and professional driver-guides.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Guaranteed Primate Permits</h3>
                    <p className="text-xs text-gray-400 mt-1">Direct booking with UWA for Bwindi and Kibale permits.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Dedicated 4x4 Safari Fleet</h3>
                    <p className="text-xs text-gray-400 mt-1">Comfortable Land Cruisers with pop-up roofs and power sockets.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/lions-tree.jpeg"
                  alt="Uganda safari wildlife tree climbing lions"
                  className="w-full h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#08120c] p-6 rounded-2xl border border-brand-green/30 shadow-2xl max-w-xs text-left hidden sm:block">
                <div className="text-brand-green font-bold text-2xl font-serif">100% Bespoke</div>
                <p className="text-xs text-gray-300 mt-1">
                  Tailored itineraries designed around your dates, pace, and preferred accommodation level.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Explore Dedicated Safari Pages */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Destination Pillars
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Signature Uganda Safari Experiences
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                Each destination has its own unique ecosystem, activities, and seasonal highlights. Explore our specialized guides below.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {safariTypes.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-green/50 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <span className="absolute top-4 left-4 bg-brand-green text-white text-[11px] font-bold uppercase px-3 py-1 rounded-full shadow-md">
                      {item.badge}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1 justify-between text-left">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-white group-hover:text-brand-green transition-colors mb-3">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm leading-relaxed mb-6">
                        {item.description}
                      </p>
                    </div>

                    <Link
                      to={item.slug}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-green group-hover:text-white transition-colors"
                    >
                      Explore Details <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Featured Safari Itineraries */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <div className="mb-12">
            <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
              Curated Itineraries
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Most Popular Uganda Safari Packages
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0c160c] p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">3 Days Gorilla Trek</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">3 Days Bwindi Gorilla Trekking Safari</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  The ideal short gorilla tour. Includes 1 habituated gorilla permit, scenic drive through Kigezi highlands, full-board accommodation, and private 4x4 transport.
                </p>
              </div>
              <Link
                to="/package/3-days-bwindi-gorilla-trekking"
                className="w-full py-3 bg-brand-green/20 hover:bg-brand-green text-white text-center rounded-xl font-bold text-xs uppercase tracking-wider border border-brand-green/40 transition-colors"
              >
                View Full Itinerary
              </Link>
            </div>

            <div className="bg-[#0c160c] p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">5 Days Primate & Savanna</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">5 Days Gorilla & Queen Elizabeth Combo</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Combine mountain gorillas in Bwindi with lions, elephants, and a boat cruise along the Kazinga Channel in Queen Elizabeth National Park.
                </p>
              </div>
              <Link
                to="/package/5-days-gorilla-queen-combo"
                className="w-full py-3 bg-brand-green/20 hover:bg-brand-green text-white text-center rounded-xl font-bold text-xs uppercase tracking-wider border border-brand-green/40 transition-colors"
              >
                View Full Itinerary
              </Link>
            </div>

            <div className="bg-[#0c160c] p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="text-brand-green font-bold text-xs uppercase tracking-wider mb-2">7 Days Classic</div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">7 Days Uganda Wildlife Classic</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Experience Murchison Falls, Kibale chimpanzees, Queen Elizabeth safari, and Bwindi mountain gorillas on the ultimate week-long expedition.
                </p>
              </div>
              <Link
                to="/package/7-days-uganda-wildlife-classic"
                className="w-full py-3 bg-brand-green/20 hover:bg-brand-green text-white text-center rounded-xl font-bold text-xs uppercase tracking-wider border border-brand-green/40 transition-colors"
              >
                View Full Itinerary
              </Link>
            </div>
          </div>
        </section>

        {/* 5. Direct Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Ready to Plan Your Uganda Safari?
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Tell us your travel dates, group size, and interests. Our expert safari planners will craft a tailored itinerary and transparent quote within a few hours.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I would like to plan a custom Uganda safari.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Plan My Uganda Safari – WhatsApp Us
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

export default UgandaSafaris;
