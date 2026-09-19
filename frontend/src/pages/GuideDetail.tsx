import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Award, 
  Languages, 
  Compass, 
  PawPrint, 
  ShieldCheck, 
  Quote, 
  Star, 
  Calendar, 
  ArrowLeft,
  ArrowRight,
  UserCheck,
  Sparkles,
  Heart,
  Feather,
  MapPin
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { guidesData } from '../data/guidesData';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

const GuideDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { openModal } = useCustomSafariModal();

  const guideIndex = guidesData.findIndex((g) => g.slug === slug);
  const guide = guideIndex !== -1 ? guidesData[guideIndex] : null;

  // Prev / Next guides
  const prevGuide = guideIndex > 0 ? guidesData[guideIndex - 1] : guidesData[guidesData.length - 1];
  const nextGuide = guideIndex < guidesData.length - 1 ? guidesData[guideIndex + 1] : guidesData[0];

  if (!guide) {
    return (
      <div className="min-h-[70vh] bg-brand-dark flex items-center justify-center text-white px-4">
        <SEO title="Guide Not Found | Come Again Tours" description="The requested guide profile could not be found." />
        <div className="text-center max-w-md">
          <h1 className="text-5xl font-serif mb-4">Guide Not Found</h1>
          <p className="text-gray-400 text-sm mb-8">
            The safari guide profile you are looking for may have been moved or updated.
          </p>
          <Link
            to="/about/our-team"
            className="px-8 py-4 bg-brand-green text-white uppercase tracking-widest text-xs font-bold rounded-xl hover:bg-white hover:text-brand-dark transition-all"
          >
            Meet Our Full Team
          </Link>
        </div>
      </div>
    );
  }

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: guide.name,
    jobTitle: guide.role,
    worksFor: {
      '@type': 'TravelAgency',
      name: 'Come Again Tours and Travels',
      url: 'https://comeagaintoursandtravels.com',
    },
    image: guide.portraitImage,
    knowsLanguage: guide.languages,
    description: guide.summary,
  };

  return (
    <div className="bg-[#fcfdfa] text-brand-dark min-h-screen selection:bg-brand-green selection:text-white">
      <SEO
        title={`${guide.name} - ${guide.subtitle} | Come Again Tours Uganda`}
        description={`${guide.name} is a licensed Ugandan safari guide with ${guide.experienceYears}. Read their bush stories, wildlife specialties, and request a private guided safari.`}
        image={guide.portraitImage}
        schema={guideSchema}
      />

      {/* Breadcrumb Navigation Bar */}
      <div className="bg-brand-dark text-white py-4 px-4 sm:px-8 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2">
            <Link to="/" className="hover:text-brand-green transition-colors">Home</Link>
            <span>/</span>
            <Link to="/about/our-team" className="hover:text-brand-green transition-colors">Team & Guides</Link>
            <span>/</span>
            <span className="text-brand-green font-semibold">{guide.name}</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] uppercase tracking-wider font-bold text-gray-300">
            <span className="flex items-center gap-1.5 text-brand-green">
              <ShieldCheck className="w-4 h-4" /> Licensed UTB Safari Guide
            </span>
          </div>
        </div>
      </div>

      {/* Main Guide Profile Article */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        
        {/* Top Editorial Header */}
        <div className="text-left mb-10 pb-8 border-b border-gray-200/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green/10 text-brand-green font-bold text-xs uppercase tracking-wider mb-3">
            <UserCheck className="w-3.5 h-3.5" /> {guide.badge}
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-brand-dark tracking-tight leading-[1.1] mb-2">
            {guide.name}
          </h1>
          <p className="text-lg sm:text-xl font-serif text-brand-green italic font-medium mb-4">
            {guide.subtitle || 'Tour Guide from Uganda'} • {guide.role}
          </p>
          <div className="w-20 h-1 bg-brand-green rounded-full" />
        </div>

        {/* Content Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Field Photo Card & Quick Specs */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            
            {/* Primary Field / Vehicle Portrait Card */}
            <div className="bg-white rounded-3xl p-4 shadow-xl border border-gray-100 overflow-hidden text-left group">
              <div className="h-[400px] sm:h-[460px] rounded-2xl overflow-hidden relative bg-brand-dark/10">
                <img
                  src={guide.fieldImage || guide.portraitImage}
                  alt={`${guide.name} with Come Again Safari Fleet`}
                  style={{ objectPosition: guide.imagePosition || 'center' }}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green block mb-0.5">
                      Come Again In-House Guide
                    </span>
                    <h3 className="text-2xl font-serif font-bold">{guide.name}</h3>
                    <p className="text-xs text-gray-300">{guide.experienceYears}</p>
                  </div>
                  <div className="w-11 h-11 rounded-full bg-brand-green text-white flex items-center justify-center shadow-lg shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                </div>
              </div>

              {/* Portrait & Action Thumbnail Row */}
              <div className="grid grid-cols-2 gap-3 mt-3">
                <div className="h-28 rounded-xl overflow-hidden border border-gray-100 relative">
                  <img
                    src={guide.portraitImage}
                    alt={guide.name}
                    style={{ objectPosition: guide.imagePosition || 'center' }}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-1.5 left-2 bg-black/60 px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider">
                    Portrait
                  </div>
                </div>

                {guide.actionImage && (
                  <div className="h-28 rounded-xl overflow-hidden border border-gray-100 relative">
                    <img
                      src={guide.actionImage}
                      alt={`${guide.name} on field`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute bottom-1.5 left-2 bg-black/60 px-2 py-0.5 rounded text-[9px] font-bold text-white uppercase tracking-wider flex items-center gap-1">
                      <Sparkles className="w-2.5 h-2.5 text-brand-green" /> In Bush
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Guide Specifications Box */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-gray-100 text-left space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 border-b border-gray-100 pb-3 flex items-center justify-between">
                <span>Guide Specifications</span>
                <span className="text-brand-green font-bold">Verified</span>
              </h4>

              <div className="space-y-3.5 text-xs text-gray-700">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green shrink-0 mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Experience</span>
                    <span className="text-sm font-bold text-brand-dark">{guide.experienceYears}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green shrink-0 mt-0.5">
                    <Languages className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Languages Spoken</span>
                    <span className="text-sm font-bold text-brand-dark">{guide.languages.join(', ')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Favorite National Parks</span>
                    <span className="text-sm font-bold text-brand-dark">{guide.favoriteParks.join(' • ')}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green shrink-0 mt-0.5">
                    <PawPrint className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Favorite Wildlife</span>
                    <span className="text-sm font-bold text-brand-dark">{guide.favoriteWildlife.join(', ')}</span>
                  </div>
                </div>

                {guide.favoriteBirds && guide.favoriteBirds.length > 0 && (
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-brand-green/10 text-brand-green shrink-0 mt-0.5">
                      <Feather className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">Favorite Bird Species</span>
                      <span className="text-sm font-bold text-brand-dark">{guide.favoriteBirds.join(', ')}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Direct Booking & WhatsApp Concierge */}
            <div className="bg-brand-dark text-white rounded-3xl p-6 sm:p-7 shadow-xl text-left border border-brand-green/20">
              <span className="text-brand-green text-[10px] font-bold uppercase tracking-widest block mb-1">
                Private Safari Concierge
              </span>
              <h4 className="text-2xl font-serif font-bold mb-2">
                Request {guide.name.split(' ')[0]} for Your Safari
              </h4>
              <p className="text-xs text-gray-300 mb-6 leading-relaxed">
                Enjoy a 100% private customized itinerary with a dedicated Come Again 4x4 Land Cruiser and {guide.name} exclusively assigned to your group.
              </p>

              <div>
                <button
                  onClick={() => openModal({
                    packageTitle: `Private Safari with Guide: ${guide.name}`,
                  })}
                  className="w-full py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" /> Check Dates & Request Guide
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Narrative Story & Bush Encounters */}
          <div className="lg:col-span-7 space-y-10 text-left">
            
            {/* Full Bio Paragraphs */}
            <div className="space-y-5 text-gray-700 text-base sm:text-lg leading-relaxed font-sans">
              {guide.fullBio.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Favorite Quote Callout */}
            {guide.favoriteQuote && (
              <div className="bg-[#f2f7ed] border-l-4 border-brand-green rounded-2xl p-6 sm:p-8">
                <Quote className="w-8 h-8 text-brand-green/40 mb-2" />
                <p className="text-base sm:text-xl font-serif italic text-brand-dark leading-relaxed mb-3">
                  "{guide.favoriteQuote}"
                </p>
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green">
                  — {guide.name}
                </span>
              </div>
            )}

            {/* Memorable Moments & Bush Stories */}
            {guide.bushStories && guide.bushStories.length > 0 && (
              <div className="space-y-6 pt-2">
                <div className="border-b border-gray-200 pb-3">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-green block mb-1">
                    True Field Tales
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark flex items-center gap-2">
                    <Compass className="w-6 h-6 text-brand-green" /> Memorable Moments & Bush Stories
                  </h3>
                </div>

                <p className="text-gray-600 text-sm sm:text-base italic">
                  Over the years, I have had countless memorable moments in the African wilderness, but these stories stand out:
                </p>

                <div className="space-y-6">
                  {guide.bushStories.map((story, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-3 relative overflow-hidden"
                    >
                      <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-green" />
                      
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-1">
                        <h4 className="text-lg sm:text-xl font-serif font-bold text-brand-dark flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-brand-green/10 text-brand-green text-xs font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          {story.title}
                        </h4>
                        {story.location && (
                          <span className="text-[11px] font-bold uppercase tracking-wider text-brand-green/80 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {story.location}
                          </span>
                        )}
                      </div>

                      <p className="text-gray-600 text-sm sm:text-base leading-relaxed pl-8">
                        {story.story}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Free Time & Wildlife Passions */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
              <h4 className="text-xl font-serif font-bold text-brand-dark flex items-center gap-2">
                <Feather className="w-5 h-5 text-brand-green" /> Personal Passions & Hobbies
              </h4>
              {guide.freeTime && (
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {guide.freeTime}
                </p>
              )}
              
              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-[#fcfdfa] border border-gray-100">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-1">
                    Favorite Mammals
                  </span>
                  <p className="text-xs text-gray-700 font-medium">
                    {guide.favoriteWildlife.join(' • ')}
                  </p>
                </div>
                {guide.favoriteBirds && (
                  <div className="p-4 rounded-2xl bg-[#fcfdfa] border border-gray-100">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-green block mb-1">
                      Favorite Birds
                    </span>
                    <p className="text-xs text-gray-700 font-medium">
                      {guide.favoriteBirds.join(' • ')}
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Why I Work With Come Again */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-gray-100 shadow-sm space-y-4">
              <h4 className="text-xl font-serif font-bold text-brand-dark flex items-center gap-2">
                <Heart className="w-5 h-5 text-brand-green" /> Why I Guide with Come Again Tours & Travels
              </h4>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {guide.whyGuiding}
              </p>
            </div>

            {/* Traveler Testimonial Quote */}
            {guide.guestReview && (
              <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-10 shadow-lg relative overflow-hidden">
                <div className="flex items-center gap-1 text-[#34E0A1] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-[10px] uppercase font-bold text-gray-300 ml-2">Verified Safari Review</span>
                </div>
                <p className="text-base sm:text-lg font-serif italic text-white/90 leading-relaxed mb-6">
                  "{guide.guestReview.quote}"
                </p>
                <div className="text-xs font-bold tracking-wider uppercase text-brand-green">
                  — {guide.guestReview.traveler} <span className="text-gray-400 font-normal">({guide.guestReview.country})</span>
                </div>
              </div>
            )}

            {/* Request Guide Bar */}
            <div className="bg-[#f2f7ed] rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 border border-brand-green/20">
              <div className="text-center sm:text-left">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-green block">
                  Request {guide.name.split(' ')[0]} For Your Expedition
                </span>
                <p className="text-xs text-gray-600">Submit an inquiry with your preferred travel dates to reserve this guide.</p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => openModal({
                    packageTitle: `Private Safari with Guide: ${guide.name}`,
                  })}
                  className="px-5 py-2.5 bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-brand-dark transition-all flex items-center gap-1.5 shadow-sm cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" /> Request Itinerary
                </button>
              </div>
            </div>

            {/* Recommended Safaris Led by this Guide */}
            {guide.recommendedSafaris && guide.recommendedSafaris.length > 0 && (
              <div className="space-y-6 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-green block mb-0.5">
                      Expert Field Routes
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-brand-dark">
                      Recommended Safaris Guided by {guide.name.split(' ')[0]}
                    </h3>
                  </div>
                  <Link to="/packages" className="text-xs font-bold uppercase tracking-wider text-brand-green hover:underline">
                    View All Safaris &rarr;
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {guide.recommendedSafaris.map((safari, idx) => (
                    <Link
                      key={idx}
                      to={`/package/${safari.slug}`}
                      className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
                    >
                      <div className="h-44 overflow-hidden relative">
                        <img
                          src={safari.image}
                          alt={safari.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 right-3 bg-brand-green text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-md">
                          {safari.duration}
                        </div>
                      </div>
                      <div className="p-5 flex-1 flex flex-col justify-between">
                        <h4 className="font-serif font-bold text-base text-brand-dark group-hover:text-brand-green transition-colors mb-4">
                          {safari.title}
                        </h4>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center gap-1 mt-auto">
                          View Itinerary <ArrowRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Next / Prev Guide Navigation */}
            <div className="pt-8 border-t border-gray-200 flex items-center justify-between gap-4">
              <Link
                to={`/guides/${prevGuide.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-brand-green transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> Previous Guide: {prevGuide.name.split(' ')[0]}
              </Link>

              <Link
                to="/about/our-team"
                className="hidden sm:inline-block text-xs font-bold uppercase tracking-wider text-brand-green hover:underline"
              >
                All Team Members
              </Link>

              <Link
                to={`/guides/${nextGuide.slug}`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-600 hover:text-brand-green transition-colors"
              >
                Next Guide: {nextGuide.name.split(' ')[0]} <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </main>

      <TrustBadges variant="light" />
      <Footer />
    </div>
  );
};

export default GuideDetail;
