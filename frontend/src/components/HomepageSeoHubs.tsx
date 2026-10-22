import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const hubs = [
  {
    title: 'Uganda Safaris',
    tag: 'Overview & Circuits',
    slug: '/uganda-safaris',
    image: '/images/scene.webp',
    description: 'Comprehensive safari planning across Uganda, combining gorillas, chimps, Big 5 savanna drives, and local culture.',
  },
  {
    title: 'Bwindi Gorilla Trekking',
    tag: 'Primate Sanctuary',
    slug: '/bwindi-gorilla-trekking',
    image: '/images/gorilla1.webp',
    description: 'Trek the misty mountains of Bwindi Impenetrable National Park to meet endangered mountain gorillas in their wild habitat.',
  },
  {
    title: 'Queen Elizabeth National Park',
    tag: 'Lions & Boat Cruise',
    slug: '/queen-elizabeth-national-park-safaris',
    image: '/images/lions-tree.webp',
    description: 'Famous tree-climbing lions in Ishasha and scenic boat cruises along the hippo-packed Kazinga Channel.',
  },
  {
    title: 'Murchison Falls Safaris',
    tag: 'The Mighty Nile',
    slug: '/murchison-falls-safaris',
    image: '/images/elephant.webp',
    description: 'Witness the world’s most powerful surge of water and game drives for Rothschild’s giraffes, lions, and elephants.',
  },
  {
    title: 'Kibale Chimpanzee Trekking',
    tag: 'Primate Capital',
    slug: '/kibale-chimpanzee-safaris',
    image: '/images/chimp.webp',
    description: 'Walk through dense tropical rainforests with 13 primate species and the largest population of habituated chimpanzees.',
  },
  {
    title: 'Uganda Wildlife Safaris',
    tag: 'Savannah Holidays',
    slug: '/uganda-wildlife-safaris',
    image: '/images/WhatsApp-Image-2026-02-24-at-15.06.18-1.webp',
    description: 'Classic Big Five game drives across Murchison, Queen Elizabeth, Kidepo Valley, and Lake Mburo.',
  },
  {
    title: 'Car Hire & Professional Drivers',
    tag: '4x4 Safari Transport',
    slug: '/car-hire-uganda',
    image: '/images/vehicle1.webp',
    description: 'Custom safari Land Cruisers and vans with pop-up roofs, driven by licensed Uganda naturalist driver-guides.',
  },
];

const HomepageSeoHubs: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a130c] border-y border-white/10 text-left">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/20 border border-brand-green/30 text-brand-green text-xs font-bold uppercase tracking-widest mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Core Safari Experiences
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
              Discover Uganda With Come Again Tours
            </h2>
          </div>
          <p className="text-gray-400 max-w-md text-sm leading-relaxed">
            Come Again Tours and Travels is a Uganda-based tour operator offering tailored Uganda safaris, gorilla trekking, wildlife expeditions, and 4x4 car hire with professional drivers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {hubs.map((hub, idx) => (
            <Link
              key={idx}
              to={hub.slug}
              className={`group bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-green/60 transition-all duration-300 flex flex-col justify-between ${
                idx === 0 ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${idx === 0 ? 'h-64 sm:h-72' : 'h-52'}`}>
                <img
                  src={hub.image}
                  alt={hub.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <span className="absolute top-4 left-4 bg-brand-green/90 backdrop-blur-md text-brand-dark text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                  {hub.tag}
                </span>
                <h3 className="absolute bottom-4 left-5 right-5 text-xl sm:text-2xl font-serif font-bold text-white group-hover:text-brand-green transition-colors leading-tight">
                  {hub.title}
                </h3>
              </div>

              <div className="p-5 flex flex-col justify-between flex-1">
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4">
                  {hub.description}
                </p>

                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-green group-hover:text-white transition-colors">
                  Explore Page <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomepageSeoHubs;
