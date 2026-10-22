import { getApiBaseUrl } from '../services/apiClient';
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { 
  Clock, 
  MapPin, 
  Car, 
  Hotel, 
  CheckCircle2, 
  XCircle, 
  ChevronRight,
  Phone,
  Mail,
  Calendar,
  Share2,
  Download,
  Star,
  Quote,
  ShieldCheck,
  Globe,
  PawPrint,
  Bird,
  TreePalm,
  Mountain,
  Leaf,
  MessageCircle,
  Zap
} from 'lucide-react';
import { siteData } from '../data/siteData';
import { businessConfig } from '../data/businessConfig';
import Footer from '../components/Footer';
import RealRouteMap from '../components/RealRouteMap';
import SEO from '../components/SEO';
import { isUwaRelevantPackage } from '../components/RegulatoryPartners';
import { useCurrency } from '../context/CurrencyContext';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import GorillaPermitNotice from '../components/GorillaPermitNotice';
import SafariPackingGuideModal from '../components/SafariPackingGuideModal';

// Collapsible text for long itinerary descriptions
const ExpandableText: React.FC<{ text: string }> = ({ text }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > 320;
  return (
    <div>
      <p
        className={`text-gray-500 leading-relaxed text-lg mb-4 transition-all duration-300 ${
          !expanded && isLong ? 'line-clamp-4' : ''
        }`}
      >
        {text}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-brand-green text-sm font-bold uppercase tracking-widest hover:underline flex items-center gap-1 mb-6"
        >
          {expanded ? '↑ Show less' : '↓ Read more'}
        </button>
      )}
    </div>
  );
};

const PackageDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [showStickyBar, setShowStickyBar] = useState(false);
  const { formatPrice } = useCurrency();
  const { openModal, openBookingModal } = useCustomSafariModal();
  const [isPackingOpen, setIsPackingOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowStickyBar(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleDownloadPDF = () => {
    window.print();
  };

  const [livePkg, setLivePkg] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    const fetchPackage = async () => {
      if (!slug) return;
      setIsLoading(true);
      setLivePkg(null);
      try {
        const baseUrl = getApiBaseUrl();

        const res = await fetch(`${baseUrl}/packages/${slug}`, {
          headers: { Accept: 'application/json' },
          signal: AbortSignal.timeout(6000),
        });

        if (res.status === 404) setLivePkg(null);
        if (res.ok) {
          const json = await res.json();
          if (json.success && json.data) {
            setLivePkg(json.data);
          }
        }
      } catch {
        // Failed requests must not republish static or draft packages.
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackage();
  }, [slug]);

  const pkg = livePkg;

  if (isLoading && !pkg) {
    return (
      <div className="min-h-screen bg-[#FDFCFB] flex flex-col items-center justify-center text-brand-dark">
        <SEO title="Loading Safari... | Come Again Tours" description="Loading safari itinerary details." />
        <div className="w-12 h-12 border-4 border-brand-green/20 border-t-brand-green rounded-full animate-spin mb-4" />
        <p className="text-sm font-bold uppercase tracking-widest text-brand-dark/60">Loading Safari Itinerary...</p>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center text-brand-dark">
        <SEO title="Package Not Found | Come Again Tours" description="The requested safari package could not be found." />
        <div className="text-center">
          <h1 className="text-6xl font-serif mb-4">404</h1>
          <p className="text-xl mb-8 font-serif italic text-brand-dark/60 text-brand-green">Package Not Found</p>
          <Link to="/packages" className="px-8 py-4 bg-brand-green text-white uppercase tracking-widest text-xs font-bold transition-all hover:bg-brand-dark">
            Back to Packages
          </Link>
        </div>
      </div>
    );
  }

  const details = (pkg as any).details;
  const gallery = details?.gallery && Array.isArray(details.gallery) && details.gallery.length > 0
    ? details.gallery
    : [pkg.image || '/images/Gorillaa.webp'];

  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    "name": pkg.title,
    "description": pkg.description,
    "image": gallery[0],
    "touristType": [
      "Sightseeing",
      "Wildlife"
    ],
    "itinerary": {
      "@type": "ItemList",
      "itemListElement": details?.itinerary?.map((day: any, idx: number) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "item": {
          "@type": "TouristAttraction",
          "name": day.title,
          "description": day.description
        }
      }))
    },
    "offers": {
      "@type": "Offer",
      "price": pkg.price?.replace(/[^0-9.]/g, '') || "0",
      "priceCurrency": "USD"
    }
  };

  return (
    <div className="bg-[#FDFCFB] min-h-screen text-brand-dark selection:bg-brand-green selection:text-white">
      <SEO 
        title={`${pkg.title} | Come Again Tours & Travels`}
        description={pkg.description ?? `Discover ${pkg.title} with Come Again Tours & Travels.`}
        image={gallery[0]}
        schema={touristTripSchema}
      />
      <style dangerouslySetInnerHTML={{ __html: `
        @media print {
          /* Reset & Layout */
          @page { size: A4; margin: 0; }
          html, body { 
            background: white !important; 
            margin: 0 !important; 
            padding: 0 !important;
            -webkit-print-color-adjust: exact;
          }
          
          /* Hide Web UI */
          .main-content, .no-print, #whatsapp-widget, nav, footer { 
            display: none !important; 
          }
          
          /* Show Brochure */
          .pdf-brochure { 
            display: block !important; 
            visibility: visible !important;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20mm; /* A4 Margin */
          }

          /* Design Utilities */
          .itinerary-item { page-break-inside: avoid; border-bottom: 0.5px solid #eee; padding-bottom: 20px; margin-bottom: 20px; }
          .sh-green { color: #6ab43e !important; }
          .sh-dark { color: #0c1106 !important; }
          .hero-img { height: 350px !important; width: 100% !important; object-fit: cover; border-radius: 15px; margin-bottom: 30px; }
        }
        .pdf-brochure { display: none; }
      `}} />

      {/* 2. CUSTOM PDF BROCHURE - Only Visible in Print */}
      <div className="pdf-brochure bg-white">
        {/* Letterhead */}
        <header className="flex justify-between items-center border-b-[3px] border-brand-green pb-8 mb-10">
          <div>
            <img src={`${import.meta.env.BASE_URL}images/logo.webp`} alt="Logo" className="h-24 mb-2" />
            <p className="text-xs uppercase font-bold tracking-[0.2em] text-brand-green">Safari & Adventure Experts</p>
          </div>
          <div className="text-right space-y-1">
             <h3 className="text-xl font-bold sh-dark">Come Again Tours & Travel</h3>
             <p className="text-[11px] text-gray-500">Kampala, Uganda | Plot 42, Entebbe Road</p>
             <p className="text-[11px] text-gray-500">+256 774 243 747 | +256 784 549 282</p>
             <p className="text-[11px] text-gray-500">info@comeagaintours.com</p>
             <p className="text-[11px] font-bold sh-green">www.comeagaintours.com</p>
          </div>
        </header>

        {/* Hero Section */}
        <div className="mb-12">
            <img src={gallery[0]} alt={pkg.title} className="hero-img" />
            <div className="flex justify-between items-end">
              <div>
                <span className="text-sm font-bold sh-green uppercase tracking-widest">{pkg.destination}</span>
                <h1 className="text-5xl sh-dark mt-2">{pkg.title}</h1>
              </div>
              <div className="text-right">
                 <p className="text-3xl font-bold sh-green">{pkg.price}</p>
                 <p className="text-[10px] uppercase text-gray-400">Total Price Per Person</p>
              </div>
            </div>
        </div>

        {/* Quick Summary Bar */}
        <div className="grid grid-cols-4 border-y border-gray-100 py-6 mb-12">
           <div className="text-center border-r border-gray-100">
              <p className="text-[9px] uppercase text-gray-400 font-bold">Duration</p>
              <p className="text-lg font-bold sh-dark">{details?.duration || '3 Days'}</p>
           </div>
           <div className="text-center border-r border-gray-100">
              <p className="text-[9px] uppercase text-gray-400 font-bold">Transport</p>
              <p className="text-lg font-bold sh-dark">4x4 Land Cruiser</p>
           </div>
           <div className="text-center border-r border-gray-100">
              <p className="text-[9px] uppercase text-gray-400 font-bold">Accommodation</p>
              <p className="text-lg font-bold sh-dark">{details?.accommodation || 'Safari Lodge'}</p>
           </div>
           <div className="text-center">
              <p className="text-[9px] uppercase text-gray-400 font-bold">Best Time</p>
              <p className="text-lg font-bold sh-dark">All Year Round</p>
           </div>
        </div>

        {/* Overview */}
        <div className="mb-12">
           <h3 className="text-2xl font-bold sh-dark mb-4 border-l-4 border-brand-green pl-4">Trip Overview</h3>
           <p className="text-lg font-serif italic text-gray-600 mb-6">{pkg.description}</p>
           <p className="text-sm text-gray-500">
             Discover the untouched beauty of Uganda's wilderness. Our expert-led safaris offer a perfect blend of adventure, safety, and luxury, ensuring every moment is unforgettable.
           </p>
        </div>

        {/* Itinerary */}
        <div className="mb-12">
           <h3 className="text-2xl font-bold sh-dark mb-8 border-l-4 border-brand-green pl-4">Daily Itinerary</h3>
           <div className="space-y-4">
              {details?.itinerary?.map((day: any, idx: number) => (
                <div key={idx} className="itinerary-item">
                   <div className="flex gap-6">
                      <div className="flex-shrink-0 w-16 h-16 bg-brand-green text-white rounded-xl flex flex-col items-center justify-center">
                         <span className="text-[10px] uppercase font-bold">Day</span>
                         <span className="text-3xl font-black">{day.day}</span>
                      </div>
                      <div>
                         <h4 className="text-xl font-bold sh-dark mb-2">{day.title}</h4>
                         <p className="text-[13px] leading-relaxed mb-4">{day.description}</p>
                         <div className="flex gap-6 text-[11px] font-bold text-gray-400">
                            <span className="flex items-center gap-1"><Hotel className="w-3 h-3" /> {day.stay}</span>
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {day.meals}</span>
                         </div>
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </div>

        {/* Inclusions / Exclusions */}
        <div className="grid grid-cols-2 gap-10 mb-12 page-break-before-always">
           <div>
              <h3 className="text-xl font-bold sh-dark mb-6 flex items-center gap-2">
                 <CheckCircle2 className="w-5 h-5 sh-green" /> Inclusions
              </h3>
              <ul className="space-y-3">
                 {details?.inclusions?.map((item: string, i: number) => (
                   <li key={i} className="text-xs flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-brand-green rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
           <div>
              <h3 className="text-xl font-bold sh-dark mb-6 flex items-center gap-2">
                 <XCircle className="w-5 h-5 text-red-500" /> Exclusions
              </h3>
              <ul className="space-y-3">
                 {details?.exclusions?.map((item: string, i: number) => (
                   <li key={i} className="text-xs flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-gray-300 rounded-full mt-1.5 flex-shrink-0" />
                      {item}
                   </li>
                 ))}
              </ul>
           </div>
        </div>

        {/* Contact CTA */}
        <footer className="mt-20 border-t-2 border-gray-100 pt-10 text-center">
           <div className="flex justify-center gap-10 mb-8">
              <div className="flex items-center gap-2">
                 <Phone className="w-4 h-4 sh-green" />
                 <span className="text-xs font-bold">+256 774 243 747</span>
              </div>
              <div className="flex items-center gap-2">
                 <Mail className="w-4 h-4 sh-green" />
                 <span className="text-xs font-bold">info@comeagaintours.com</span>
              </div>
              <div className="flex items-center gap-2">
                 <Globe className="w-4 h-4 sh-green" />
                 <span className="text-xs font-bold">www.comeagaintours.com</span>
              </div>
           </div>
           <p className="text-[11px] text-gray-400 italic">"Making your safari dreams a reality. Professionalism and safety are our top priorities."</p>
           <p className="text-[9px] text-gray-300 mt-4 uppercase tracking-[0.4em]">© 2026 Come Again Tours & Travel Ltd</p>
        </footer>
      </div>

      {/* WEB VIEW CONTENT (Hides in Print) */}
      <div className="main-content">
        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-brand-green z-[100] origin-left"
          style={{ scaleX }}
        />

        <main className="pt-10">
          {/* 1. Bento Gallery Hero — Fixed Height */}
          <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
            
            {/* Breadcrumbs & Actions */}
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
                <ChevronRight className="w-3 h-3" />
                <Link to="/packages" className="hover:text-brand-green transition-colors">Packages</Link>
                <ChevronRight className="w-3 h-3" />
                <span className="text-brand-dark">{pkg.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleDownloadPDF}
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-green hover:text-brand-dark transition-colors border border-brand-green/20 px-4 py-2 rounded-full"
                >
                  <Download className="w-4 h-4" /> Download Itinerary (PDF)
                </button>
                <button className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest hover:text-brand-green transition-colors">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </div>
            </div>

            {/* Gallery Grid — Fixed Heights */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              {/* Main Featured Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="md:col-span-8 relative overflow-hidden rounded-2xl group border border-gray-100"
                style={{ height: '420px' }}
              >
                <img
                  src={gallery[0]}
                  alt={pkg.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Supporting Images — desktop only */}
              <div className="hidden md:flex md:col-span-4 flex-col gap-3" style={{ height: '420px' }}>
                {/* Top image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                  className="relative overflow-hidden rounded-2xl group border border-gray-100 flex-1"
                >
                  <img
                    src={gallery[1] || gallery[0]}
                    alt="Safari detail"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </motion.div>

                {/* Bottom two images */}
                <div className="flex gap-3 flex-1">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative overflow-hidden rounded-2xl group border border-gray-100 flex-1"
                  >
                    <img
                      src={gallery[2] || gallery[0]}
                      alt="Safari detail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="relative overflow-hidden rounded-2xl border border-gray-100 group flex-1"
                  >
                    <img
                      src={gallery[3] || gallery[0]}
                      alt="Safari detail"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </motion.div>
                </div>
              </div>
            </div>

          </section>

          {/* 2. Title & Stats Bar */}
          <section className="max-w-7xl mx-auto px-4 lg:px-8 mb-16">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-gray-100">
              <div>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-brand-green text-sm font-bold uppercase tracking-[0.4em] mb-4 block"
                >
                  {pkg.destination}
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl md:text-6xl text-brand-dark leading-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {pkg.title}
                </motion.h1>
              </div>
              <div className="flex items-center gap-10">
                <div>
                  <p className="text-gray-400 text-[10px] uppercase tracking-widest font-bold mb-1">Starting From</p>
                <p className="text-4xl text-brand-green font-serif font-black">{formatPrice(pkg.price)} <span className="text-sm font-sans font-normal text-gray-400 italic">/ per person</span></p>
                </div>
              </div>
            </div>

            {/* Quick Info Grid - Light Theme */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-green/5 rounded-xl flex items-center justify-center text-brand-green shadow-inner">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Duration</p>
                  <p className="text-md font-serif font-bold">{details?.duration || '3 Days'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-green/5 rounded-xl flex items-center justify-center text-brand-green shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Location</p>
                  <p className="text-md font-serif font-bold">Uganda</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-green/5 rounded-xl flex items-center justify-center text-brand-green shadow-inner">
                  <Car className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Transport</p>
                  <p className="text-md font-serif font-bold">{details?.transport || '4x4 Safari'}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-brand-green/5 rounded-xl flex items-center justify-center text-brand-green shadow-inner">
                  <Hotel className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[9px] uppercase tracking-widest text-gray-400 font-bold">Lodging</p>
                  <p className="text-md font-serif font-bold truncate max-w-[120px]">{details?.accommodation || 'Standard'}</p>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Main Details Section */}
          <section className="max-w-7xl mx-auto px-4 lg:px-8 pb-32">
            <div className="flex flex-col lg:flex-row gap-20">
              
              {/* Left Column: Story & Journey */}
              <div className="lg:w-2/3">
                
                {/* Overview */}
                <div className="mb-24">
                  <h3 className="text-2xl font-serif text-brand-dark mb-6 flex items-center gap-3">
                    <span className="w-8 h-[1px] bg-brand-green"></span>
                    Overview
                  </h3>
                  <p className="text-gray-600 text-xl font-serif italic leading-relaxed mb-8">
                    {pkg.description}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    Experience the heart of Africa with Come Again Tours. Our carefully curated itineraries ensure you witness the most spectacular wildlife, breathtaking landscapes, and authentic cultural encounters that Uganda has to offer.
                  </p>

                  {/* Gorilla & Primate Permit Scarcity Advisory */}
                  {((pkg.title || '').toLowerCase().includes('gorilla') ||
                    (pkg.title || '').toLowerCase().includes('bwindi') ||
                    (pkg.description || '').toLowerCase().includes('gorilla') ||
                    (details?.highlights || []).some((h: string) => h.toLowerCase().includes('gorilla'))) && (
                    <div className="mt-8">
                      <GorillaPermitNotice />
                    </div>
                  )}
                </div>

                {/* Real Map Integration */}
                <div>
                   <RealRouteMap locations={details?.routeCoordinates} />
                </div>

                {/* Transition styling for Timeline */}
                <div className="mb-24">
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-3xl font-serif text-brand-dark">The Journey</h3>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 py-1 px-3 border border-gray-100 rounded-full">Explore Day By Day</span>
                  </div>
                  
                  <div className="space-y-16 relative before:absolute before:left-8 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-100 before:hidden md:before:block">
                    {details?.itinerary?.map((day: any, idx: number) => (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative pl-0 md:pl-24 group"
                      >
                        {/* Day Indicator */}
                        <div className="relative md:absolute md:left-0 md:top-0 w-16 h-16 bg-white border-2 border-brand-green rounded-2xl flex flex-col items-center justify-center z-10 transition-colors group-hover:bg-brand-green group-hover:border-brand-green transition-all duration-300 mb-6 md:mb-0">
                          <span className="text-[10px] uppercase font-bold text-gray-400 group-hover:text-white/80">Day</span>
                          <span className="text-3xl font-black text-brand-green group-hover:text-white leading-none">{day.day}</span>
                        </div>

                        <div className="bg-white p-8 md:p-12 shadow-sm border border-gray-50 rounded-2xl hover:shadow-xl hover:shadow-brand-green/5 transition-all duration-500 w-full">
                          <h4 className="text-2xl md:text-3xl font-serif text-brand-dark mb-6">
                            {day.title}
                          </h4>
                          <ExpandableText text={day.description} />
                          
                          {day.image && (
                            <div className="mt-8 relative overflow-hidden rounded-2xl h-48 md:h-72 lg:h-96 group/img shadow-md">
                              <img 
                                src={day.image} 
                                alt={day.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 ring-1 ring-black/5 rounded-2xl pointer-events-none" />
                            </div>
                          )}

                          <div className="flex flex-wrap items-center gap-10 pt-8 border-t border-gray-50">
                            <div className="flex items-center gap-3 text-brand-green">
                              <Hotel className="w-5 h-5 opacity-40" />
                              <div className="flex flex-col">
                                <span className="text-[9px] uppercase tracking-widest font-bold text-gray-300">Accommodation</span>
                                <span className="text-sm font-bold text-brand-dark">{day.stay}</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 text-brand-green">
                              <Clock className="w-5 h-5 opacity-40" />
                              <div className="flex flex-col">
                                <span className="text-[9px] uppercase tracking-widest font-bold text-gray-300">Meals</span>
                                <span className="text-sm font-bold text-brand-dark">{day.meals}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )) || (
                      <p className="text-gray-300 italic">Detailed itinerary coming soon...</p>
                    )}
                  </div>
                </div>

                {/* Inclusions & Exclusions */}
                <div className="grid md:grid-cols-2 gap-8 pb-32">
                  <div className="bg-[#f2f7ed] rounded-3xl p-10 border border-brand-green/10">
                    <h4 className="text-brand-dark text-xl font-bold mb-8 flex items-center gap-3 uppercase tracking-tighter">
                      <CheckCircle2 className="text-brand-green w-6 h-6" />
                      Trip Inclusions
                    </h4>
                    <ul className="space-y-5">
                      {details?.inclusions?.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-gray-600 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-brand-green mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      )) || <li>Loading...</li>}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 rounded-3xl p-10 border border-gray-100">
                    <h4 className="text-brand-dark text-xl font-bold mb-8 flex items-center gap-3 uppercase tracking-tighter">
                      <XCircle className="text-red-400 w-6 h-6" />
                      Trip Exclusions
                    </h4>
                    <ul className="space-y-5">
                      {details?.exclusions?.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-4 text-sm text-gray-500 leading-snug">
                          <span className="w-1.5 h-1.5 rounded-full bg-gray-200 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      )) || <li>Loading...</li>}
                    </ul>
                  </div>
                </div>

                {/* Wildlife Sighting Probability (Task 7) */}
                {(pkg as any).wildlife && (pkg as any).wildlife.length > 0 && (
                  <div className="mb-32">
                    <div className="flex items-center justify-between mb-10">
                      <h3 className="text-3xl font-serif text-brand-dark">Wildlife Sightings</h3>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green px-3 py-1 bg-brand-green/5 rounded-full flex items-center gap-2">
                        <Zap className="w-3 h-3" /> Historical Probabilities
                      </span>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      {(pkg as any).wildlife.map((animal: string, idx: number) => {
                         const getProb = () => {
                           if (animal.toLowerCase().includes('gorilla')) return '99%';
                           if (animal.toLowerCase().includes('chimp')) return '95%';
                           if (animal.toLowerCase().includes('lion')) return '82%';
                           if (animal.toLowerCase().includes('elephant')) return '94%';
                           if (animal.toLowerCase().includes('hippo')) return '98%';
                           return '85%';
                         };
                         const getIcon = () => {
                           const a = animal.toLowerCase();
                           if (a.includes('lion')) return <PawPrint className="w-5 h-5" />;
                           if (a.includes('bird')) return <Bird className="w-5 h-5" />;
                           if (a.includes('gorilla') || a.includes('chimp')) return <TreePalm className="w-5 h-5" />;
                           if (a.includes('rhino') || a.includes('elephant')) return <Mountain className="w-5 h-5" />;
                           return <Leaf className="w-5 h-5" />;
                         };

                         return (
                           <motion.div 
                             key={idx}
                             whileHover={{ y: -5 }}
                             className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col items-center text-center group"
                           >
                              <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-brand-green mb-4 group-hover:bg-brand-green group-hover:text-white transition-all">
                                {getIcon()}
                              </div>
                              <h5 className="font-bold text-sm text-brand-dark mb-1">{animal}</h5>
                              <div className="flex flex-col items-center">
                                <span className="text-2xl font-serif font-black text-brand-green">{getProb()}</span>
                                <span className="text-[9px] uppercase font-bold text-gray-300 tracking-widest">Visibility</span>
                              </div>
                           </motion.div>
                         );
                      })}
                    </div>
                  </div>
                )}

                {/* 4. REVIEWS SECTION - Dynamic */}
                <section className="mb-24">
                  <div className="bg-brand-dark rounded-[2.5rem] p-12 text-white overflow-hidden relative">
                     <div className="relative z-10">
                        <div className="flex items-center gap-3 text-brand-green mb-6">
                           {[...Array(5)].map((_, i) => (
                             <Star key={i} className="w-5 h-5 fill-brand-green" />
                           ))}
                           <span className="text-xs font-bold tracking-widest ml-4 uppercase">
                             {details?.testimonial?.platform || 'Excellence on TripAdvisor'}
                           </span>
                        </div>
                        
                        <h4 className="text-4xl font-serif mb-8 max-w-xl">
                          {details?.testimonial?.headline || "Don't just take our word for it."}
                        </h4>
                        
                        <div className="grid md:grid-cols-2 gap-10">
                           <div>
                              <Quote className="text-brand-green w-10 h-10 mb-4 opacity-50" />
                              <p className="text-white/80 italic font-serif text-lg mb-6 leading-relaxed">
                                 "{details?.testimonial?.quote || "Our trip with Come Again Tours was breathtaking. The attention to detail and professional guide were unforgettable."}"
                              </p>
                              <p className="text-sm font-bold tracking-widest uppercase">
                                 — {details?.testimonial?.author || 'Happy Traveler'}
                              </p>
                           </div>
                           <div className="flex flex-col justify-center items-start md:items-end">
                              <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/10 w-full md:w-auto">
                                 <p className="text-center md:text-right text-sm mb-6 opacity-70">Share your experience with us!</p>
                                 <a 
                                   href="https://www.tripadvisor.com/UserReview-g293841-d23869274-Come_Again_Tours_and_Travel_Ltd-Kampala_Central_Region.html" 
                                   target="_blank"
                                   rel="noopener noreferrer"
                                   className="px-8 py-4 bg-white text-brand-dark text-[11px] font-bold uppercase tracking-widest hover:bg-brand-green hover:text-white transition-all flex items-center gap-3"
                                 >
                                    Write a Review
                                 </a>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="absolute -top-20 -right-20 w-64 h-64 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
                  </div>
                </section>

              </div>

              {/* Right Column: Sticky Sidebar Info */}
              <div className="lg:w-1/3">
                <div className="sticky top-32 space-y-8">
                  
                  {/* PDF Quick Download Button in Sidebar */}
                  <button 
                    onClick={handleDownloadPDF}
                    className="w-full py-6 bg-white border-2 border-brand-green/30 text-brand-dark rounded-3xl flex items-center justify-center gap-4 hover:border-brand-green hover:bg-brand-green/5 transition-all group"
                  >
                    <Download className="w-5 h-5 text-brand-green group-hover:scale-110 transition-transform" />
                    <div className="flex flex-col items-start translate-y-0.5">
                      <span className="text-[9px] uppercase font-bold text-gray-400 leading-none">Print Offline Version</span>
                      <span className="text-sm font-bold tracking-tight">Download Itinerary PDF</span>
                    </div>
                  </button>

                  {/* Booking Sidebar - Professional Card */}
                  <div className="bg-brand-dark rounded-[2.5rem] p-12 text-white overflow-hidden shadow-2xl relative">
                    <div className="relative z-10">
                      <h4 className="text-4xl font-serif mb-3 leading-tight">Secure Your Safari</h4>
                      <p className="text-white/60 text-sm mb-12">Expertly crafted experiences by Come Again Tours.</p>
                      
                      <div className="space-y-4 mb-16">
                        <button 
                          type="button"
                          onClick={() => openBookingModal({
                            title: pkg.title,
                            price: pkg.price,
                            duration: details?.duration || (pkg.durationDays ? `${pkg.durationDays} Days` : undefined),
                            image: pkg.image,
                            destination: pkg.destination,
                            slug: pkg.slug
                          })}
                          className="w-full py-5 bg-brand-green text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-brand-dark transition-all duration-300 rounded-2xl shadow-lg"
                        >
                          <Calendar className="w-4 h-4" />
                          Book This Safari Now
                        </button>

                        <button
                          type="button"
                          onClick={() => openModal({ packageTitle: pkg.title, duration: details?.duration })}
                          className="w-full py-3 text-xs text-white/70 hover:text-brand-green underline transition-colors"
                        >
                          Need custom changes? Plan a tailor-made version &rarr;
                        </button>
                        
                        <a 
                          href={businessConfig.whatsapp.getLink(`Hi Come Again Tours, I'm interested in booking the ${pkg.title}`)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-5 border border-white/20 text-white text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-brand-dark transition-all duration-300 rounded-2xl"
                        >
                          <Phone className="w-4 h-4" />
                          Quick Chat on WhatsApp
                        </a>
                      </div>

                      <div className="pt-10 border-t border-white/10 space-y-6">
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                            <Phone className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Direct Line</span>
                            <span className="text-md font-bold">+256 774 243 747</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-4 group">
                          <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-green transition-colors">
                            <Mail className="w-4 h-4" />
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-bold text-white/40 tracking-wider">Official Email</span>
                            <span className="text-sm font-bold truncate max-w-[180px]">info@comeagaintours.com</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
                  </div>

                  {/* Trust & regulatory partners */}
                  <div className="p-8 border border-gray-100 rounded-[2rem] bg-white space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="w-16 h-16 bg-brand-green/5 rounded-full flex items-center justify-center shrink-0">
                        <ShieldCheck className="text-brand-green w-8 h-8" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-xs font-bold uppercase text-gray-300">Trusted operator</span>
                        <span className="text-sm text-gray-600 font-serif leading-tight">
                          Licensed safari services in Uganda
                        </span>
                      </div>
                    </div>
                    {isUwaRelevantPackage((pkg as { category?: string }).category) && (
                      <p className="text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-6">
                        {siteData.regulatoryPartners.uwaPermitNote}
                      </p>
                    )}
                  </div>

                </div>
              </div>

            </div>
          </section>
        </main>
        <Footer />
        
        {/* Sticky Booking Bar */}
        <AnimatePresence>
          {showStickyBar && (
            <motion.div
              initial={{ y: 100 }}
              animate={{ y: 0 }}
              exit={{ y: 100 }}
              className="fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-t border-gray-100 p-4 no-print shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)]"
            >
              <div className="max-w-7xl mx-auto flex items-center justify-between gap-6">
                <div className="hidden md:flex items-center gap-6">
                   <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">You are viewing</span>
                      <span className="text-sm font-bold text-brand-dark truncate max-w-[200px]">{pkg.title}</span>
                   </div>
                   <div className="h-8 w-[1px] bg-gray-100" />
                   <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-gray-400 tracking-widest">Duration</span>
                      <span className="text-sm font-bold text-brand-dark">{details?.duration}</span>
                   </div>
                </div>

                <div className="flex items-center gap-8 flex-1 md:flex-none justify-between md:justify-end">
                   <div className="flex flex-col text-right">
                      <span className="text-[10px] uppercase font-bold text-brand-green tracking-widest">Starting From</span>
                      <p className="text-2xl font-serif font-black text-brand-dark leading-none">{formatPrice(pkg.price)}</p>
                   </div>
                   
                   <div className="flex items-center gap-3">
                      <a 
                        href={businessConfig.whatsapp.getLink(`Hi Come Again Tours, I'm interested in booking the ${pkg.title}`)}
                        className="p-4 bg-brand-green/10 text-brand-green rounded-xl hover:bg-brand-green hover:text-white transition-all hidden sm:flex"
                        title="Chat on WhatsApp"
                      >
                         <MessageCircle className="w-5 h-5" />
                      </a>
                      <button 
                        type="button"
                        onClick={() => openBookingModal({
                          title: pkg.title,
                          price: pkg.price,
                          duration: details?.duration || (pkg.durationDays ? `${pkg.durationDays} Days` : undefined),
                          image: pkg.image,
                          destination: pkg.destination,
                          slug: pkg.slug
                        })}
                        className="px-8 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-brand-dark shadow-lg shadow-brand-green/20 transition-all rounded-xl flex items-center gap-2"
                      >
                         <Calendar className="w-4 h-4" /> Book Safari
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Safari Packing Checklist Modal */}
      <SafariPackingGuideModal
        isOpen={isPackingOpen}
        onClose={() => setIsPackingOpen(false)}
      />
    </div>
  );
};

export default PackageDetail;
