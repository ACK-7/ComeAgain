import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteData } from '../data/siteData';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Sparkles, 
  Compass, 
  Calculator, 
  Calendar, 
  Footprints, 
  Search, 
  MapPin, 
  Clock, 
  ShieldCheck,
  ChevronUp,
  ChevronDown
} from 'lucide-react';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteData.heroSlides;
  const { openModal } = useCustomSafariModal();
  const navigate = useNavigate();

  // Search Bar Filter State
  const [selectedDestination, setSelectedDestination] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedDuration, setSelectedDuration] = useState('');

  // 8-Second Slide Auto-Rotation & Timer Reset on change
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (selectedDestination) params.append('destination', selectedDestination);
    if (selectedExperience) params.append('style', selectedExperience);
    if (selectedDuration) params.append('duration', selectedDuration);

    const queryString = params.toString();
    navigate(queryString ? `/packages?${queryString}` : '/packages');
  };

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-brand-dark flex flex-col justify-between pt-24 sm:pt-32 lg:pt-36 pb-8 sm:pb-12">
      
      {/* 1. Cinematic Background Slides with Optimized Mobile Framing */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
          className="absolute top-0 left-0 right-0 h-[68vh] min-h-[500px] max-h-[640px] lg:h-full lg:max-h-none lg:min-h-0 lg:bottom-0 z-0 overflow-hidden"
        >
          <motion.div
            initial={{ scale: 1.02 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: 'easeOut' }}
            className="absolute inset-0 bg-cover bg-[center_25%] sm:bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].backgroundImage})` }}
          >
            {/* Multi-layered cinematic gradient for high text contrast & rich wildlife visibility */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-transparent sm:bg-gradient-to-r sm:from-black/90 sm:via-black/65 sm:to-black/35" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#060e09] via-[#060e09]/40 to-transparent" />
            
            {/* Smooth transition into brand-dark on mobile before search console */}
            <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-brand-dark via-brand-dark/90 to-transparent lg:hidden" />
          </motion.div>
        </motion.div>
      </AnimatePresence>

      {/* 2. Main Hero Stage (2-Column Grid) */}
      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Typography & Conversion Area (8 Cols) */}
          <div className="lg:col-span-7 xl:col-span-8 text-left">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-start w-full"
              >
                {/* Tripadvisor Trust Badge */}
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-2.5 sm:gap-3 bg-white/10 backdrop-blur-md px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20 hover:bg-white/20 transition-all cursor-pointer mb-3 sm:mb-5 shadow-lg group"
                  onClick={() => window.open(siteData.home.testimonials.tripadvisorUrl, '_blank')}
                >
                  <div className="flex items-center gap-1.5">
                    <span className="text-brand-green font-bold text-[11px] sm:text-xs tracking-tight">Excellent</span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-3 sm:w-3.5 h-3 sm:h-3.5 fill-[#34E0A1] text-[#34E0A1]" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="w-[1px] h-3 bg-white/30" />
                  <span className="text-white text-[10px] sm:text-[11px] font-bold uppercase tracking-wider group-hover:text-brand-green transition-colors">
                    Tripadvisor 5.0
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-[2.2rem] sm:text-[3.2rem] md:text-[4.4rem] xl:text-[5.4rem] text-white mb-2 sm:mb-4 drop-shadow-2xl leading-[1.04] max-w-4xl tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  dangerouslySetInnerHTML={{ __html: slides[currentSlide].title }}
                />

                {/* Subtitle */}
                <motion.p
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
                  className="text-base sm:text-xl md:text-2xl xl:text-3xl text-white/95 drop-shadow-md max-w-2xl mb-4 sm:mb-6 md:mb-8"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                {/* Action Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-4 sm:mb-6 w-full sm:w-auto"
                >
                  <Link
                    to="/packages"
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-2xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5 text-center"
                  >
                    <Compass className="w-4 h-4" /> Explore Safari Packages
                  </Link>

                  <button
                    type="button"
                    onClick={() => openModal({})}
                    className="px-6 sm:px-8 py-3 sm:py-4 bg-white/10 border border-white/30 text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 backdrop-blur-md flex items-center justify-center gap-2 shadow-xl transform hover:-translate-y-0.5 text-center"
                  >
                    <Sparkles className="w-4 h-4 text-amber-300" /> Plan Custom Trip (Free Quote)
                  </button>
                </motion.div>

                {/* Social Proof Micro Bar */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.45 }}
                  className="flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs text-gray-300 font-medium pt-1"
                >
                  <div className="flex items-center gap-1.5 text-emerald-400">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-green shrink-0" />
                    <span className="text-white">99.4% Gorilla Trek Success</span>
                  </div>
                  <span className="hidden sm:inline text-white/30">•</span>
                  <div className="flex items-center gap-1.5">
                    <span className="hidden sm:inline text-white/30">•</span>
                    <span>Guaranteed Permits with UWA</span>
                  </div>
                  <span className="hidden sm:inline text-white/30">•</span>
                  <div className="hidden sm:block">
                    100% Private Custom 4x4 Cruisers
                  </div>
                </motion.div>

                {/* Mobile Responsive Circular Countdown Dial Bar */}
                <div className="flex lg:hidden items-center justify-between w-full mt-4 bg-[#0c1810]/75 backdrop-blur-md px-3.5 py-2 rounded-2xl border border-white/15 shadow-xl">
                  {/* Slide Counter & Arrows */}
                  <div className="flex items-center gap-1.5 text-xs font-mono text-white/90">
                    <button
                      type="button"
                      onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                      className="p-1 hover:text-brand-green transition-colors"
                      aria-label="Previous slide"
                    >
                      <ChevronUp className="w-3.5 h-3.5 -rotate-90" />
                    </button>
                    <span className="font-bold text-brand-green">{String(currentSlide + 1).padStart(2, '0')}</span>
                    <span className="text-white/30">/</span>
                    <span>{String(slides.length).padStart(2, '0')}</span>
                    <button
                      type="button"
                      onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                      className="p-1 hover:text-brand-green transition-colors"
                      aria-label="Next slide"
                    >
                      <ChevronDown className="w-3.5 h-3.5 -rotate-90" />
                    </button>
                  </div>

                  {/* 3 Horizontal Circular Dials with Animated Countdown Ring */}
                  <div className="flex items-center gap-2 sm:gap-3">
                    {(slides.length <= 3 
                      ? slides.map((_, i) => i) 
                      : [
                          (currentSlide - 1 + slides.length) % slides.length,
                          currentSlide,
                          (currentSlide + 1) % slides.length
                        ]
                    ).map((slideIdx) => {
                      const slide = slides[slideIdx];
                      const isActive = currentSlide === slideIdx;

                      return (
                        <div
                          key={slideIdx}
                          onClick={() => setCurrentSlide(slideIdx)}
                          className="relative flex items-center cursor-pointer"
                          aria-label={`Jump to slide ${slideIdx + 1}`}
                        >
                          <div className={`relative w-[46px] h-[46px] flex items-center justify-center transition-all duration-300 ${
                            isActive ? 'scale-105 drop-shadow-[0_0_12px_rgba(106,180,62,0.5)]' : 'opacity-60 scale-90'
                          }`}>
                            {/* SVG Circular Countdown Ring */}
                            <svg className="absolute inset-0 w-full h-full -rotate-90 origin-center pointer-events-none" viewBox="0 0 50 50">
                              <circle
                                cx="25"
                                cy="25"
                                r="21"
                                fill="none"
                                stroke="rgba(255, 255, 255, 0.25)"
                                strokeWidth="2"
                              />
                              {isActive && (
                                <motion.circle
                                  key={currentSlide}
                                  cx="25"
                                  cy="25"
                                  r="21"
                                  fill="none"
                                  stroke="#6ab43e"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeDasharray={131.9}
                                  initial={{ strokeDashoffset: 0 }}
                                  animate={{ strokeDashoffset: 131.9 }}
                                  transition={{ duration: 8, ease: "linear" }}
                                />
                              )}
                            </svg>

                            {/* Center Circular Thumbnail Image */}
                            <div className="w-[34px] h-[34px] rounded-full overflow-hidden border-2 border-white/60 shadow-inner">
                              <img 
                                src={slide.backgroundImage} 
                                alt=""
                                className="w-full h-full object-cover" 
                              />
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Column: Smart 3-Dial Adaptive Countdown Window (Always fits up to 10+ slides perfectly) */}
          <div className="hidden lg:flex lg:col-span-5 xl:col-span-4 flex-col items-end justify-center gap-3 pr-4">
            
            {/* Slide Index Counter & Micro Navigation (shown when > 3 slides) */}
            {slides.length > 3 && (
              <div className="flex items-center gap-2 mb-1 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-[11px] font-mono text-white/90 shadow-lg">
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                  className="hover:text-brand-green transition-colors p-0.5"
                  aria-label="Previous slide"
                >
                  <ChevronUp className="w-3.5 h-3.5" />
                </button>
                <span className="font-bold text-brand-green">
                  {String(currentSlide + 1).padStart(2, '0')}
                </span>
                <span className="text-white/40">/</span>
                <span>{String(slides.length).padStart(2, '0')}</span>
                <button
                  type="button"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                  className="hover:text-brand-green transition-colors p-0.5"
                  aria-label="Next slide"
                >
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            {/* The 3 Focused Floating Countdown Dials */}
            <div className="flex flex-col items-end gap-5">
              {(slides.length <= 3 
                ? slides.map((_, i) => i) 
                : [
                    (currentSlide - 1 + slides.length) % slides.length,
                    currentSlide,
                    (currentSlide + 1) % slides.length
                  ]
              ).map((slideIdx) => {
                const slide = slides[slideIdx];
                const isActive = currentSlide === slideIdx;

                return (
                  <div
                    key={slideIdx}
                    onClick={() => setCurrentSlide(slideIdx)}
                    className="group relative flex items-center cursor-pointer"
                    aria-label={`Jump to slide ${slideIdx + 1}`}
                  >
                    {/* Subtle Hover Tooltip (Floats to the left on hover) */}
                    <span className="absolute right-[calc(100%+14px)] opacity-0 group-hover:opacity-100 transition-all duration-300 bg-[#0c1810]/95 backdrop-blur-md border border-white/20 text-white text-[11px] font-bold px-3 py-1.5 rounded-full whitespace-nowrap pointer-events-none shadow-xl transform translate-x-2 group-hover:translate-x-0">
                      {slide.subtitle || `Safari Highlight #${slideIdx + 1}`}
                    </span>

                    {/* Circular Dial Container */}
                    <div className={`relative w-[78px] h-[78px] flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'scale-110 drop-shadow-[0_0_20px_rgba(106,180,62,0.45)]' 
                        : 'opacity-55 hover:opacity-100 hover:scale-105 scale-95'
                    }`}>
                      
                      {/* SVG Animated Circular Countdown Line */}
                      <svg className="absolute inset-0 w-full h-full -rotate-90 origin-center pointer-events-none" viewBox="0 0 80 80">
                        {/* Background Faint Track */}
                        <circle
                          cx="40"
                          cy="40"
                          r="35"
                          fill="none"
                          stroke="rgba(255, 255, 255, 0.25)"
                          strokeWidth="2.5"
                        />

                        {/* Active Countdown Ring (Smoothly reduces around the circle over 8s) */}
                        {isActive && (
                          <motion.circle
                            key={currentSlide}
                            cx="40"
                            cy="40"
                            r="35"
                            fill="none"
                            stroke="#6ab43e"
                            strokeWidth="3.5"
                            strokeLinecap="round"
                            strokeDasharray={219.9}
                            initial={{ strokeDashoffset: 0 }}
                            animate={{ strokeDashoffset: 219.9 }}
                            transition={{ duration: 8, ease: "linear" }}
                          />
                        )}
                      </svg>

                      {/* Center Circular Thumbnail Image */}
                      <div className="w-[58px] h-[58px] rounded-full overflow-hidden border-2 border-white/50 shadow-inner group-hover:border-brand-green transition-colors">
                        <img 
                          src={slide.backgroundImage} 
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-500" 
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* 3. DOCKED INTERACTIVE SAFARI QUICK-SEARCH ENGINE */}
      <div className="relative z-20 w-full px-6 sm:px-10 lg:px-16 xl:px-20 2xl:px-24 mt-4 sm:mt-8">
        <div className="bg-[#0c1810]/90 backdrop-blur-xl border border-white/20 rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl">
          
          {/* Live Reservations & Permit Urgency Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3 pb-2.5 border-b border-white/10 px-1">
            <div className="inline-flex items-center gap-2 text-[11px] text-amber-200/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500" />
              </span>
              <span>
                <strong className="text-white font-semibold">2026/27 Gorilla Permits:</strong> Peak dry season permits booking fast with UWA.
              </span>
              <Link
                to="/gorilla-permits-guide"
                className="text-brand-green hover:text-white underline font-bold transition-colors ml-0.5"
              >
                Check Availability →
              </Link>
            </div>

            <div className="hidden sm:inline-flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded-full">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
              </span>
              <span>Reservations Desk Live · Avg. Reply &lt; 15 mins</span>
            </div>
          </div>

          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 items-center">
            
            {/* Field 1: Destination */}
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl p-2 px-3 sm:p-2.5 sm:px-3.5 transition-colors text-left">
              <label htmlFor="hero-dest" className="text-[10px] uppercase font-bold tracking-widest text-brand-green flex items-center gap-1.5 mb-0.5 sm:mb-1">
                <MapPin className="w-3 h-3" /> Destination
              </label>
              <select
                id="hero-dest"
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="" className="bg-[#0c1810] text-white">All East Africa</option>
                <option value="uganda" className="bg-[#0c1810] text-white">Uganda (Gorillas & Chimps)</option>
                <option value="rwanda" className="bg-[#0c1810] text-white">Rwanda (Volcanoes)</option>
                <option value="kenya" className="bg-[#0c1810] text-white">Kenya (Masai Mara)</option>
                <option value="tanzania" className="bg-[#0c1810] text-white">Tanzania (Serengeti)</option>
              </select>
            </div>

            {/* Field 2: Experience / Interest */}
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl p-2 px-3 sm:p-2.5 sm:px-3.5 transition-colors text-left">
              <label htmlFor="hero-exp" className="text-[10px] uppercase font-bold tracking-widest text-brand-green flex items-center gap-1.5 mb-0.5 sm:mb-1">
                <Compass className="w-3 h-3" /> Safari Style
              </label>
              <select
                id="hero-exp"
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="" className="bg-[#0c1810] text-white">All Experiences</option>
                <option value="gorilla" className="bg-[#0c1810] text-white">Gorilla & Chimp Trekking</option>
                <option value="big5" className="bg-[#0c1810] text-white">Classic Big 5 Wildlife</option>
                <option value="flyin" className="bg-[#0c1810] text-white">Luxury Fly-in Safaris</option>
                <option value="birding" className="bg-[#0c1810] text-white">Birding & Nature Safaris</option>
              </select>
            </div>

            {/* Field 3: Duration */}
            <div className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl sm:rounded-2xl p-2 px-3 sm:p-2.5 sm:px-3.5 transition-colors text-left">
              <label htmlFor="hero-dur" className="text-[10px] uppercase font-bold tracking-widest text-brand-green flex items-center gap-1.5 mb-0.5 sm:mb-1">
                <Clock className="w-3 h-3" /> Duration
              </label>
              <select
                id="hero-dur"
                value={selectedDuration}
                onChange={(e) => setSelectedDuration(e.target.value)}
                className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
              >
                <option value="" className="bg-[#0c1810] text-white">Any Duration</option>
                <option value="short" className="bg-[#0c1810] text-white">1–3 Days (Short Breaks)</option>
                <option value="medium" className="bg-[#0c1810] text-white">4–7 Days (Most Popular)</option>
                <option value="grand" className="bg-[#0c1810] text-white">8–12 Days (Grand Safaris)</option>
                <option value="ultimate" className="bg-[#0c1810] text-white">13+ Days (Epic Africa)</option>
              </select>
            </div>

            {/* Field 4: Search Button */}
            <div>
              <button
                type="submit"
                className="w-full py-3 sm:py-3.5 px-6 bg-brand-green hover:bg-white text-white hover:text-brand-dark font-bold text-xs uppercase tracking-widest rounded-xl sm:rounded-2xl transition-all duration-300 shadow-xl flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Search className="w-4 h-4" /> Find Safaris
              </button>
            </div>

          </form>

          {/* Quick Trending Guides Under Search Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 mt-3 border-t border-white/10 text-xs text-gray-300">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-wider text-brand-green mr-1">
                Trending Guides:
              </span>
              <Link
                to="/gorilla-permits-guide"
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-brand-green hover:text-white border border-white/10 transition-colors text-[11px] font-medium flex items-center gap-1"
              >
                <Footprints className="w-3 h-3 text-brand-green" /> Gorilla Permits 2026/27
              </Link>
              <Link
                to="/safari-cost-calculator"
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-brand-green hover:text-white border border-white/10 transition-colors text-[11px] font-medium flex items-center gap-1"
              >
                <Calculator className="w-3 h-3 text-brand-green" /> Cost Estimator
              </Link>
              <Link
                to="/best-time-to-visit-uganda"
                className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-brand-green hover:text-white border border-white/10 transition-colors text-[11px] font-medium flex items-center gap-1"
              >
                <Calendar className="w-3 h-3 text-brand-green" /> Best Time to Visit
              </Link>
            </div>

            {/* Slide Progress Dots */}
            <div className="flex items-center gap-2 ml-auto">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === index ? 'w-6 bg-brand-green' : 'w-2 bg-white/30 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;
