import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  CheckCircle, 
  Phone, 
  Users, 
  Briefcase, 
  Plane
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { businessConfig } from '../data/businessConfig';

const CarHireUganda: React.FC = () => {

  const autoRentalSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    'name': 'Uganda 4x4 Car Hire with Professional Driver | Come Again Tours',
    'description': 'Reliable 4x4 car hire in Uganda with professional drivers. Toyota Land Cruisers with pop-up roofs, Safari Vans, and Entebbe Airport transfers.',
    'url': `${businessConfig.website.url}/car-hire-uganda`,
    'telephone': businessConfig.phone.raw,
    'priceRange': '$$',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': businessConfig.address.street,
      'addressLocality': businessConfig.address.city,
      'addressRegion': businessConfig.address.region,
      'postalCode': businessConfig.address.postalCode,
      'addressCountry': businessConfig.address.countryCode,
    },
    'areaServed': ['Uganda', 'Rwanda', 'Kenya', 'Tanzania'],
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
        'name': 'Car Hire & Professional Driver Services',
        'item': `${businessConfig.website.url}/car-hire-uganda`,
      },
    ],
  };

  const vehicles = [
    {
      name: 'Custom Safari Land Cruiser (Extended)',
      seats: '7-8 Window Seats',
      luggage: 'Spacious Trunk + Roof Rack',
      features: 'Pop-up roof for 360° wildlife photography, on-board charging ports (USB/inverter), cooler box, high-clearance 4WD, dual spare tyres.',
      bestFor: 'Extended Uganda safaris, wildlife photographers, family groups & rough terrain.',
      image: '/images/vehicle1.jpeg',
      rate: 'From $150 – $180 / day (Includes driver-guide)',
    },
    {
      name: 'Safari Minivan / Super Custom 4x4',
      seats: '6-8 Passengers',
      luggage: 'Generous Luggage Space',
      features: 'Pop-up viewing roof, air conditioning, power steering, raised suspension for national park tracks, radio communication.',
      bestFor: 'Midrange wildlife tours, budget family travel & group airport transfers.',
      image: '/images/vehicle2.jpeg',
      rate: 'From $90 – $110 / day (Includes driver-guide)',
    },
    {
      name: 'Toyota Land Cruiser Prado TX / TZ',
      seats: '4-5 Passengers',
      luggage: 'Standard Luggage',
      features: 'Full-time 4WD, comfortable leather interior, roof rack or optional rooftop tent, fuel-efficient diesel engine.',
      bestFor: 'Couples, corporate travel in Kampala, self-drive enthusiasts & business visitors.',
      image: '/images/vehicle3.jpeg',
      rate: 'From $70 – $90 / day (Self-drive or with driver)',
    },
    {
      name: 'Toyota RAV4 4x4 (Compact SUV)',
      seats: '2-4 Passengers',
      luggage: 'Compact Luggage',
      features: 'Full-time 4WD, automatic transmission, outstanding fuel economy, air conditioning.',
      bestFor: 'Budget couples, solo adventurers & city tours across Uganda.',
      image: '/images/vehicle4.jpeg',
      rate: 'From $45 – $55 / day (Self-drive)',
    },
  ];

  return (
    <div className="bg-brand-dark min-h-screen text-white selection:bg-brand-green selection:text-white">
      <SEO
        title="4x4 Car Hire Uganda with Professional Driver | Come Again Tours"
        description="Reliable 4x4 car hire in Uganda with professional driver-guides. Safari Land Cruisers with pop-up roofs, Safari vans, and Entebbe Airport transfers. WhatsApp us."
        url={`${businessConfig.website.url}/car-hire-uganda`}
        canonical={`${businessConfig.website.url}/car-hire-uganda`}
        schema={[autoRentalSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img
              src="/images/vehicle1.jpeg"
              alt="4x4 safari car hire in Uganda with professional driver"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/75 to-black/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                Reliable Safari Vehicles & Licensed Naturalist Drivers
              </span>
            </div>

            <h1
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Car Hire Uganda & Professional Drivers
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Explore Uganda with total peace of mind. Well-maintained 4x4 safari vehicles equipped with pop-up roofs, driven by licensed English-speaking safari guides.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I am inquiring about car hire with a driver in Uganda.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2.5"
              >
                Book Car Hire on WhatsApp
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Request a Car Hire Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges variant="dark" />

        {/* 2. Why Hire With a Driver */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                Why Hire With a Driver in Uganda
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                Stress-Free Safari Travel with a Local Expert
              </h2>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Navigating Uganda’s diverse terrain—from bustling Kampala traffic to unpaved murram roads and muddy national park tracks—requires seasoned local knowledge and technical 4WD expertise.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                When you hire with <strong>Come Again Tours and Travels</strong>, our drivers are not just motorists; they are <strong>certified safari guides and naturalists</strong>. They understand wildlife animal behaviour, know the exact spots where lion prides or leopards were sighted at dawn, speak local dialects, and handle all mechanical maintenance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">No Security Deposit Stress</h3>
                    <p className="text-xs text-gray-400 mt-1">Hiring with a driver removes the heavy liability and security deposit risks associated with self-drive rentals.</p>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-start gap-3">
                  <Plane className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-white text-sm">Entebbe Airport Pickups</h3>
                    <p className="text-xs text-gray-400 mt-1">Prompt airport pickup and drop-off at Entebbe International Airport (EBB) at any hour of the day or night.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="/images/vehicle2.jpeg"
                  alt="4x4 safari vehicle with pop up roof in Uganda"
                  className="w-full h-80 object-cover"
                />
              </div>

              <div className="bg-[#0b160d] p-6 rounded-2xl border border-brand-green/30 text-left">
                <h3 className="text-lg font-bold text-white mb-2">What’s Included with Every Rental</h3>
                <ul className="text-xs text-gray-300 space-y-2">
                  <li><strong>• Comprehensive Insurance:</strong> Covers vehicle damages and third-party liabilities.</li>
                  <li><strong>• Driver Allowance:</strong> Driver’s daily fee and meals are covered in the daily quote.</li>
                  <li><strong>• Unlimited Mileage:</strong> Travel freely across all designated Uganda national parks.</li>
                  <li><strong>• 24/7 Roadside Support:</strong> Immediate backup vehicle dispatched in the rare event of mechanical issues.</li>
                  <li><strong>• Free Travel Advice:</strong> We help optimize your driving itinerary between parks.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Vehicle Fleet */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10">
          <div className="max-w-7xl mx-auto text-left">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  Our Fleet
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                  Available Safari & 4x4 Rental Vehicles
                </h2>
              </div>
              <p className="text-gray-400 max-w-md text-sm">
                Clean, comprehensively serviced, and customized specifically for East African safari expeditions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {vehicles.map((v, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 rounded-2xl overflow-hidden border border-white/10 hover:border-brand-green/50 transition-all duration-300 flex flex-col group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={v.image}
                      alt={v.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-6">
                      <h3 className="text-2xl font-serif font-bold text-white mb-1">
                        {v.name}
                      </h3>
                      <div className="text-xs text-brand-green font-bold uppercase">
                        {v.rate}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-4 flex flex-col flex-1 justify-between text-left">
                    <div className="space-y-3">
                      <div className="flex items-center gap-6 text-xs text-gray-300">
                        <span className="flex items-center gap-1.5"><Users className="w-4 h-4 text-brand-green" /> {v.seats}</span>
                        <span className="flex items-center gap-1.5"><Briefcase className="w-4 h-4 text-brand-green" /> {v.luggage}</span>
                      </div>
                      <p className="text-xs text-gray-300 leading-relaxed">
                        <strong>Features:</strong> {v.features}
                      </p>
                      <p className="text-xs text-gray-400 italic">
                        <strong>Ideal For:</strong> {v.bestFor}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4">
                      <a
                        href={businessConfig.whatsapp.getLink(`Hello Come Again Tours! I am interested in hiring the ${v.name}. Could you please check availability and pricing?`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-5 bg-brand-green text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-white hover:text-brand-dark transition-colors flex items-center gap-2"
                      >
                        Inquire on WhatsApp
                      </a>

                      <Link
                        to="/contact"
                        className="text-xs text-gray-300 hover:text-white uppercase font-bold tracking-wider"
                      >
                        Send Inquiry
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Direct Conversion Banner */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white">
              Reserve Your 4x4 Safari Vehicle in Uganda
            </h2>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Whether you need an airport transfer from Entebbe, a city drive in Kampala, or a 14-day overland safari across Uganda and Rwanda, we have the right vehicle and professional driver for you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I want to book a car hire with driver in Uganda.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Chat With Us on WhatsApp
              </a>
              <a
                href={businessConfig.phone.telLink}
                className="px-8 py-4 bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark border border-white/20 transition-all duration-300 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-brand-green" /> Call: {businessConfig.phone.display}
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CarHireUganda;
