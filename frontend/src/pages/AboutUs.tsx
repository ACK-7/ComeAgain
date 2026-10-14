import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Compass, 
  CheckCircle, 
  Sparkles, 
  Globe, 
  Award
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { businessConfig } from '../data/businessConfig';

const AboutUs: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    'name': businessConfig.name,
    'legalName': businessConfig.legalName,
    'url': businessConfig.website.url,
    'logo': `${businessConfig.website.url}/images/logo.png`,
    'image': `${businessConfig.website.url}/images/logo.png`,
    'telephone': businessConfig.phone.raw,
    'email': businessConfig.email.primary,
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': businessConfig.address.street,
      'addressLocality': businessConfig.address.city,
      'addressRegion': businessConfig.address.region,
      'postalCode': businessConfig.address.postalCode,
      'addressCountry': businessConfig.address.countryCode,
    },
    'sameAs': [
      businessConfig.socials.tripadvisor,
      businessConfig.socials.facebook,
      businessConfig.socials.instagram,
    ],
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
        'name': 'About Us',
        'item': `${businessConfig.website.url}/about`,
      },
    ],
  };

  const values = [
    {
      title: 'Integrity & Transparency',
      desc: 'Transparent pricing with zero hidden fees. We honour our promises and deliver the exact safari quality booked.',
    },
    {
      title: 'Guest Safety & Comfort',
      desc: 'Comprehensive insurance, expertly maintained 4x4 vehicles, and experienced driver-guides trained in remote wilderness protocols.',
    },
    {
      title: 'Responsible & Sustainable Tourism',
      desc: 'Strict adherence to UWA conservation rules, eco-lodge partnerships, and giving back to forest-edge communities.',
    },
    {
      title: 'Authentic Local Knowledge',
      desc: 'We are born and raised in Uganda. We share genuine cultural heritage, hidden scenic spots, and deep wildlife lore.',
    },
  ];

  const whyChooseUs = [
    'Licensed and certified by the Uganda Tourism Board (UTB)',
    'Direct booking partner with Uganda Wildlife Authority (UWA) for guaranteed primate permits',
    'Private fleet of 4x4 Safari Land Cruisers and Vans with pop-up viewing roofs',
    '100% bespoke tailor-made itineraries adapted to your budget, time, and pace',
    'Dedicated 24/7 operations and concierge support on the ground in Kampala',
    '5-Star guest satisfaction rating on Tripadvisor with hundreds of delighted global travellers',
  ];

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SEO 
        title="About Us | Come Again Tours and Travels Uganda"
        description="Learn about Come Again Tours and Travels, a licensed Uganda tour operator. Discover our vision, mission, values, authentic safaris, and responsible tourism."
        url={`${businessConfig.website.url}/about`}
        canonical={`${businessConfig.website.url}/about`}
        schema={[organizationSchema, breadcrumbSchema]}
      />

      <main>
        {/* 1. Hero Section */}
        <section className="relative min-h-[75vh] lg:min-h-[82vh] flex items-end overflow-hidden pb-16 pt-32">
          <div className="absolute inset-0 z-0">
            <img 
              src="/images/hills.jpeg" 
              alt="Come Again Tours and Travels Uganda Team and Safaris" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1106] via-[#0c1106]/70 to-black/40" />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/20 border border-brand-green/40 backdrop-blur-md mb-4">
              <Sparkles className="w-4 h-4 text-brand-green" />
              <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                Our Story • Uganda Tour Operator
              </span>
            </div>

            <h1 
              className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 leading-[1.05]"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              About Come Again Tours and Travels
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mb-8 leading-relaxed font-serif italic">
              Founded in the heart of Kampala, Uganda. Born from a profound passion for East Africa’s wilderness and an unwavering commitment to authentic, unforgettable safari journeys.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href={businessConfig.whatsapp.getLink('Hello Come Again Tours! I would like to know more about your safaris.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center gap-2"
              >
                Chat With Us on WhatsApp
              </a>

              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center gap-2"
              >
                Request a Custom Quote
              </Link>
            </div>
          </div>
        </section>

        {/* Trust Badges */}
        <TrustBadges variant="dark" />

        {/* 2. Who We Are */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
                More Than a Safari, It's a Story
              </h2>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                <strong>Come Again Tours and Travels</strong> is a fully registered, licensed tour and travel company based in Kampala, Uganda. We operate throughout Uganda and across the greater East African region including Rwanda, Kenya, and Tanzania.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                We believe that travel is not simply moving between destinations—it is about forming emotional connections with the land, its wildlife, and its people. Whether tracking endangered mountain gorillas in the dense rainforest of Bwindi, taking a sunset boat cruise along the Kazinga Channel, or driving across the rugged savannah of Kidepo, we ensure every detail is handled with precision and heart.
              </p>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Our team is composed of passionate travel consultants, logistics professionals, and native Ugandan naturalist guides who have spent years navigating every corner of this beautiful country.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="/images/image1.jpeg"
                  alt="Come Again Tours and Travels wildlife game drive"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#08120c] p-6 rounded-2xl border border-brand-green/30 shadow-2xl max-w-xs hidden sm:block">
                <div className="text-brand-green font-bold text-2xl font-serif">100% Ugandan</div>
                <p className="text-xs text-gray-300 mt-1">
                  Locally owned, deeply rooted, and dedicated to authentic tourism.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Vision, Mission & Values */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10 text-left">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Our Vision</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  To be the leading, most trustworthy, and highly professional tour operator in East Africa, offering unique, adventure-filled, and memorable travel experiences while championing sustainable conservation and community empowerment.
                </p>
              </div>

              <div className="bg-white/5 p-8 rounded-2xl border border-white/10 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-white">Our Mission</h3>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  To deliver exceptional, high-value, and personalized safari adventures through knowledgeable guides, comfortable 4x4 vehicles, and hand-picked lodges, ensuring that every guest leaves with cherished memories and a deep love for Africa.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <div className="mb-8">
                <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                  What Drives Us
                </span>
                <h3 className="text-3xl font-serif font-bold text-white">Our Core Values</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((val, idx) => (
                  <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 space-y-2">
                    <h4 className="text-lg font-bold text-brand-green font-serif">{val.title}</h4>
                    <p className="text-xs text-gray-300 leading-relaxed">{val.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. Our Services & Destinations Overview */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                What We Do
              </span>
              <h3 className="text-3xl font-serif font-bold text-white">Comprehensive Safari Services</h3>
              <ul className="space-y-3 text-sm text-gray-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Mountain Gorilla Trekking:</strong> Guaranteed Bwindi & Mgahinga gorilla permits and lodge arrangements.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Chimpanzee Habituation & Tracking:</strong> Primate expeditions in Kibale, Kyambura Gorge, and Budongo Forest.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Classic Savannah Wildlife Safaris:</strong> Big Five game drives across Queen Elizabeth, Murchison Falls, and Kidepo.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>4x4 Car Hire & Professional Drivers:</strong> Reliable Land Cruisers and safari vans with pop-up roofs.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <span><strong>Airport Transfers & Concierge:</strong> 24/7 Entebbe International Airport pickup and hotel booking.</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                Destinations We Cover
              </span>
              <h3 className="text-3xl font-serif font-bold text-white">East Africa's Finest Wilderness</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We craft comprehensive tours to all 10 national parks of Uganda, as well as cross-border expeditions into Rwanda (Volcanoes National Park, Nyungwe, Akagera) and Kenya/Tanzania (Serengeti, Masai Mara).
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {[
                  'Bwindi Impenetrable National Park',
                  'Queen Elizabeth National Park',
                  'Murchison Falls National Park',
                  'Kibale Forest National Park',
                  'Kidepo Valley National Park',
                  'Lake Mburo National Park',
                  'Rwenzori Mountains',
                  'Mount Elgon & Sipi Falls',
                  'Lake Bunyonyi',
                  'Jinjas Source of the Nile',
                ].map((dest, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                    {dest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Why Choose Us */}
        <section className="py-20 bg-[#070d05] px-6 sm:px-8 lg:px-12 border-y border-white/10 text-left">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block mb-2">
                The Come Again Difference
              </span>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white">
                Why Travellers Choose Us
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {whyChooseUs.map((point, idx) => (
                <div key={idx} className="bg-white/5 p-6 rounded-2xl border border-white/10 flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-green/20 text-brand-green flex items-center justify-center font-bold text-sm shrink-0">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-gray-200 leading-relaxed font-medium">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6. Commitment to Responsible Tourism & Regulatory Partners */}
        <section className="py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8 space-y-6">
              <span className="text-brand-green text-xs font-bold uppercase tracking-[0.25em] block">
                Sustainable Travel
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-white leading-tight">
                Our Commitment to Responsible & Professional Tourism
              </h3>
              <div className="w-20 h-1 bg-brand-green" />
              <p className="text-gray-300 text-base leading-relaxed">
                As a licensed Ugandan operator, we recognize our responsibility to protect Uganda's pristine ecosystems. We strictly abide by the rules established by the <strong>Uganda Tourism Board (UTB)</strong>, <strong>Uganda Wildlife Authority (UWA)</strong>, and the <strong>Association of Uganda Tour Operators (AUTO)</strong>.
              </p>
              <p className="text-gray-300 text-base leading-relaxed">
                We practice low-impact wildlife viewing, ensure that gorilla trekking distances are strictly maintained, support local porters and community-owned lodges, and actively contribute to the preservation of Uganda’s wildlife heritage for generations to come.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white/5 p-6 rounded-2xl border border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-brand-green font-bold text-sm">
                <Award className="w-5 h-5" /> Official Accreditations
              </div>
              <ul className="text-xs text-gray-300 space-y-3">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Licensed by Uganda Tourism Board</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Uganda Wildlife Authority Partner</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Uganda Tour Operators Association</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 7. International Partnership Opportunities (B2B) */}
        <section className="py-20 bg-gradient-to-r from-brand-green/20 via-[#0e1d0f] to-brand-green/10 border-t border-white/10 px-6 sm:px-8 lg:px-12 text-left">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/30 border border-brand-green/50 text-white text-xs font-bold uppercase tracking-widest">
                <Globe className="w-4 h-4 text-brand-green" /> Global Travel Trade
              </div>
              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white">
                International Partnership Opportunities
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Are you an outbound travel agency, international tour operator, or group leader looking for a reliable, verified Destination Management Company (DMC) on the ground in Uganda?
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="bg-black/40 p-6 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-white text-base">White-Label Ground Handling</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  We manage full safari logistics under your agency brand, providing seamless transfers, expert naturalist guides, and premium lodge coordination.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-white text-base">Competitive Trade Rates</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Direct net B2B pricing on safari vehicles, lodge contracts, and priority UWA gorilla and chimpanzee permit booking.
                </p>
              </div>

              <div className="bg-black/40 p-6 rounded-xl border border-white/10 space-y-2">
                <h4 className="font-bold text-white text-base">Fast 24-Hour Quote Turnaround</h4>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Rapid, accurate itinerary creation and real-time WhatsApp communication with our senior reservations team in Kampala.
                </p>
              </div>
            </div>

            <div className="text-center pt-4">
              <a
                href={`mailto:${businessConfig.email.primary}?subject=${encodeURIComponent('International B2B Tour Operator Partnership Inquiry')}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl"
              >
                Inquire About International B2B Partnerships
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutUs;
