import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Sparkles, 
  Footprints, 
  Calculator, 
  Calendar,
  Compass,
  Target,
  Users,
  Phone,
  Mail,
  ShieldCheck,
  Camera,
  Briefcase,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Music
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import CurrencySelector from './CurrencySelector';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { siteData } from '../data/siteData';
import { businessConfig } from '../data/businessConfig';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [safarisDropdownOpen, setSafarisDropdownOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [planningDropdownOpen, setPlanningDropdownOpen] = useState(false);
  
  const location = useLocation();
  const { openModal } = useCustomSafariModal();
  const isHome = location.pathname === '/';

  // Track scroll position to trigger floating glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 35);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setSafarisDropdownOpen(false);
    setAboutDropdownOpen(false);
    setPlanningDropdownOpen(false);
  }, [location.pathname]);

  const isAboutActive = location.pathname.startsWith('/about');
  const isSafarisActive = [
    '/uganda-safaris',
    '/bwindi-gorilla-trekking',
    '/queen-elizabeth-national-park-safaris',
    '/murchison-falls-safaris',
    '/kibale-chimpanzee-safaris',
    '/uganda-wildlife-safaris',
    '/car-hire-uganda'
  ].includes(location.pathname);
  const isGuidesActive = ['/gorilla-permits-guide', '/safari-cost-calculator', '/best-time-to-visit-uganda'].includes(location.pathname);

  // Dynamic navbar background styling:
  // On Home: Transparent with gentle top gradient when at top, frosted luxury dark when scrolled.
  // On inner pages: Always frosted luxury dark with bottom border for 100% crisp legibility.
  const navContainerClass = isHome && !isScrolled
    ? 'bg-gradient-to-b from-black/85 via-black/50 to-transparent text-white'
    : 'bg-[#0b1710]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl text-white';

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 1. TOP UTILITY BAR (Earthy Luxury Safari Bar) */}
      <div className="w-full bg-[#08120c] border-b border-white/10 text-[11px] text-gray-300 py-1.5 px-8 sm:px-12 lg:px-20 xl:px-24 2xl:px-28 hidden md:block">
        <div className="w-full flex items-center justify-between">
          
          {/* Left: Direct Support & Accreditation */}
          <div className="flex items-center gap-5">
            <a 
              href={businessConfig.phone.telLink} 
              className="flex items-center gap-1.5 hover:text-brand-green transition-colors text-white font-medium"
            >
              <Phone className="w-3 h-3 text-brand-green" />
              <span>{businessConfig.phone.display}</span>
              <span className="text-emerald-400 font-normal ml-1">(24/7 Desk)</span>
            </a>

            <div className="h-3 w-[1px] bg-white/20" />

            <a 
              href="mailto:info@comeagaintoursandtravels.com" 
              className="flex items-center gap-1.5 hover:text-brand-green transition-colors text-gray-300"
            >
              <Mail className="w-3 h-3 text-brand-green" />
              <span>info@comeagaintoursandtravels.com</span>
            </a>

            <div className="hidden lg:block h-3 w-[1px] bg-white/20" />

            <div className="hidden lg:flex items-center gap-1.5 text-gray-400 text-[10px]">
              <ShieldCheck className="w-3 h-3 text-brand-green" />
              <span>Official UTB & UWA Licensed Tour Operator</span>
            </div>
          </div>

          {/* Right: Secondary Links & Socials */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 text-gray-300">
              <Link to="/blog" className="hover:text-brand-green transition-colors">
                Safari Blog
              </Link>
              <span>•</span>
              <Link to="/gallery" className="hover:text-brand-green transition-colors">
                Photo Gallery
              </Link>
            </div>

            <div className="h-3 w-[1px] bg-white/20" />

            {/* Social Icons from Footer Data */}
            <div className="flex items-center gap-3 text-gray-300">
              {siteData.home.footer.socials.map((social) => {
                const getSocialIcon = () => {
                  switch (social.icon) {
                    case 'facebook': return <Facebook className="w-3.5 h-3.5" />;
                    case 'instagram': return <Instagram className="w-3.5 h-3.5" />;
                    case 'twitter': return <Twitter className="w-3.5 h-3.5" />;
                    case 'music': return <Music className="w-3.5 h-3.5" />;
                    case 'linkedin': return <Linkedin className="w-3.5 h-3.5" />;
                    default: return null;
                  }
                };

                return (
                  <a 
                    key={social.name}
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-brand-green transition-colors flex items-center"
                    aria-label={social.name}
                    title={social.name}
                  >
                    {getSocialIcon()}
                  </a>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN NAVIGATION (Streamlined to 5-6 Key Items) */}
      <nav className={`w-full transition-all duration-300 ${navContainerClass}`}>
        <div className="w-full px-8 sm:px-12 lg:px-20 xl:px-24 2xl:px-28">
          <div className="flex items-center justify-between h-20">
            
            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center group py-2">
              <img 
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-md" 
                src={`${import.meta.env.BASE_URL}images/logo.png`} 
                alt="Come Again Tours and Travels" 
              />
            </Link>

            {/* Desktop Navigation Links (Spacious & Streamlined) */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 text-[13px] font-semibold tracking-wide">
              
              {/* 1. Home */}
              <Link
                to="/"
                className={`px-3.5 py-2 flex items-center transition-all relative group ${
                  location.pathname === '/' ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                }`}
              >
                Home
                <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand-green transition-transform duration-300 transform ${
                  location.pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

              {/* 2. Uganda Safaris (Dropdown) */}
              <div 
                onMouseEnter={() => setSafarisDropdownOpen(true)}
                onMouseLeave={() => setSafarisDropdownOpen(false)}
                className="relative h-20 flex items-center"
              >
                <button
                  className={`px-3.5 py-2 flex items-center gap-1 transition-all ${
                    isSafarisActive ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                  }`}
                >
                  Uganda Safaris <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                
                <div 
                  className={`absolute left-0 mt-0 w-72 bg-[#0c1810] shadow-2xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 origin-top p-2 ${
                    safarisDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}
                  style={{ top: '80%' }}
                >
                  <Link
                    to="/uganda-safaris"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Compass size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Uganda Safaris Hub</span>
                      <span className="text-[10px] text-gray-400">Complete safari guide & circuits</span>
                    </div>
                  </Link>

                  <Link
                    to="/bwindi-gorilla-trekking"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Footprints size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Bwindi Gorilla Trekking</span>
                      <span className="text-[10px] text-gray-400">Guaranteed gorilla permits</span>
                    </div>
                  </Link>

                  <Link
                    to="/queen-elizabeth-national-park-safaris"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Camera size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Queen Elizabeth Safaris</span>
                      <span className="text-[10px] text-gray-400">Tree lions & Kazinga boat cruise</span>
                    </div>
                  </Link>

                  <Link
                    to="/murchison-falls-safaris"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Sparkles size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Murchison Falls Safaris</span>
                      <span className="text-[10px] text-gray-400">World's most powerful waterfall</span>
                    </div>
                  </Link>

                  <Link
                    to="/kibale-chimpanzee-safaris"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Compass size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Kibale Chimp Trekking</span>
                      <span className="text-[10px] text-gray-400">Primate capital of the world</span>
                    </div>
                  </Link>

                  <Link
                    to="/uganda-wildlife-safaris"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Camera size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Uganda Wildlife Safaris</span>
                      <span className="text-[10px] text-gray-400">Classic Big Five savannah tours</span>
                    </div>
                  </Link>

                  <Link
                    to="/car-hire-uganda"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Briefcase size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">4x4 Car Hire with Driver</span>
                      <span className="text-[10px] text-gray-400">Safari Land Cruisers & vans</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* 3. Safari Packages */}
              <Link
                to="/packages"
                className={`px-3.5 py-2 flex items-center transition-all relative group ${
                  location.pathname.startsWith('/package') ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                }`}
              >
                Safari Packages
                <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand-green transition-transform duration-300 transform ${
                  location.pathname.startsWith('/package') ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

              {/* 4. About Us (Dropdown) */}
              <div 
                onMouseEnter={() => setAboutDropdownOpen(true)}
                onMouseLeave={() => setAboutDropdownOpen(false)}
                className="relative h-20 flex items-center"
              >
                <button
                  className={`px-3.5 py-2 flex items-center gap-1 transition-all ${
                    isAboutActive ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                  }`}
                >
                  About Us <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                
                <div 
                  className={`absolute left-0 mt-0 w-64 bg-[#0c1810] shadow-2xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 origin-top p-2 ${
                    aboutDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}
                  style={{ top: '80%' }}
                >
                  <Link
                    to="/about"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Compass size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Who We Are</span>
                      <span className="text-[10px] text-gray-400">Our story, values & heritage</span>
                    </div>
                  </Link>

                  <Link
                    to="/about/vision-mission"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Target size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Vision & Mission</span>
                      <span className="text-[10px] text-gray-400">Sustainable luxury tourism</span>
                    </div>
                  </Link>

                  <Link
                    to="/about/our-team"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Users size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Our Team & Guides</span>
                      <span className="text-[10px] text-gray-400">Expert safari naturalists</span>
                    </div>
                  </Link>

                  <Link
                    to="/services"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Briefcase size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Safari Services</span>
                      <span className="text-[10px] text-gray-400">4x4 Land Cruisers & Logistics</span>
                    </div>
                  </Link>

                  <Link
                    to="/gallery"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Camera size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Safari Gallery</span>
                      <span className="text-[10px] text-gray-400">Real guest memories & wildlife</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* 5. Safari Guide (Dropdown) */}
              <div 
                onMouseEnter={() => setPlanningDropdownOpen(true)}
                onMouseLeave={() => setPlanningDropdownOpen(false)}
                className="relative h-20 flex items-center"
              >
                <button
                  className={`px-3.5 py-2 flex items-center gap-1 transition-all ${
                    isGuidesActive ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                  }`}
                >
                  Safari Guide <ChevronDown className="w-3.5 h-3.5 opacity-80" />
                </button>
                
                <div 
                  className={`absolute right-0 mt-0 w-64 bg-[#0c1810] shadow-2xl border border-white/10 rounded-2xl overflow-hidden transition-all duration-200 origin-top p-2 ${
                    planningDropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}
                  style={{ top: '80%' }}
                >
                  <Link
                    to="/gorilla-permits-guide"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Footprints size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Gorilla Permits 2026/27</span>
                      <span className="text-[10px] text-gray-400">Rules, prices & availability</span>
                    </div>
                  </Link>

                  <Link
                    to="/safari-cost-calculator"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Calculator size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Cost Calculator</span>
                      <span className="text-[10px] text-gray-400">Instant price estimates</span>
                    </div>
                  </Link>

                  <Link
                    to="/best-time-to-visit-uganda"
                    className="p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center gap-3 text-white group"
                  >
                    <Calendar size={16} className="text-brand-green group-hover:text-white transition-colors shrink-0" />
                    <div>
                      <span className="font-bold text-xs block text-white group-hover:text-brand-green transition-colors">Best Time to Visit</span>
                      <span className="text-[10px] text-gray-400">Weather & seasons chart</span>
                    </div>
                  </Link>
                </div>
              </div>

              {/* 6. Contact */}
              <Link
                to="/contact"
                className={`px-3.5 py-2 flex items-center transition-all relative group ${
                  location.pathname === '/contact' ? 'text-brand-green font-bold' : 'text-white/90 hover:text-brand-green'
                }`}
              >
                Contact
                <span className={`absolute bottom-0 left-3.5 right-3.5 h-[2px] bg-brand-green transition-transform duration-300 transform ${
                  location.pathname === '/contact' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`} />
              </Link>

            </div>

            {/* Right Action Area (Currency + CTA Button) */}
            <div className="hidden lg:flex items-center gap-3">
              <CurrencySelector />

              <button
                onClick={() => openModal({})}
                className="px-6 py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-xl hover:shadow-brand-green/30 flex items-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-200" /> Plan Your Trip
              </button>
            </div>

            {/* Mobile Actions & Menu Toggle */}
            <div className="lg:hidden flex items-center gap-2">
              <CurrencySelector compact />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-xl text-white hover:text-brand-green focus:outline-none bg-white/10"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`lg:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'} fixed inset-0 top-[112px] md:top-[120px] bg-[#0b1710] transition-transform duration-300 z-40 overflow-y-auto pb-24 shadow-2xl border-t border-white/10`}>
          <div className="px-6 py-6 space-y-4 text-left">
            
            <button
              onClick={() => {
                setIsOpen(false);
                openModal({});
              }}
              className="w-full py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-2xl hover:bg-brand-dark transition-all shadow-lg flex items-center justify-center gap-2 mb-4"
            >
              <Sparkles className="w-4 h-4 text-amber-200" /> Plan Custom Safari (Free Quote)
            </button>

            <div className="space-y-1 border-b border-white/10 pb-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-base font-bold text-white hover:text-brand-green"
              >
                Home
              </Link>
              <Link
                to="/destination"
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-base font-bold text-white hover:text-brand-green"
              >
                Destinations
              </Link>
              <Link
                to="/packages"
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-base font-bold text-white hover:text-brand-green"
              >
                Safari Packages
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-base font-bold text-white hover:text-brand-green"
              >
                About Come Again Tours
              </Link>
              <Link
                to="/services"
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-base font-bold text-white hover:text-brand-green"
              >
                Services & 4x4 Cruisers
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-2.5 text-base font-bold text-white hover:text-brand-green"
              >
                Contact Us
              </Link>
            </div>

            {/* Guides Section in Mobile */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-green block mb-2">
                Safari Planning Guides
              </span>
              <div className="space-y-2">
                <Link
                  to="/gorilla-permits-guide"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs text-gray-300 hover:text-brand-green py-1"
                >
                  <Footprints className="w-4 h-4 text-brand-green" /> Gorilla Permits 2026/27
                </Link>
                <Link
                  to="/safari-cost-calculator"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs text-gray-300 hover:text-brand-green py-1"
                >
                  <Calculator className="w-4 h-4 text-brand-green" /> Safari Cost Calculator
                </Link>
                <Link
                  to="/best-time-to-visit-uganda"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs text-gray-300 hover:text-brand-green py-1"
                >
                  <Calendar className="w-4 h-4 text-brand-green" /> Best Time to Visit Uganda
                </Link>
                <Link
                  to="/gallery"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-2 text-xs text-gray-300 hover:text-brand-green py-1"
                >
                  <Camera className="w-4 h-4 text-brand-green" /> Wildlife Photo Gallery
                </Link>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href={businessConfig.whatsapp.getLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" /> Chat on WhatsApp ({businessConfig.whatsapp.display})
              </a>
              <a
                href="mailto:info@comeagaintoursandtravels.com"
                className="w-full py-3 bg-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-xl flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" /> info@comeagaintoursandtravels.com
              </a>
            </div>

            {/* Social Icons in Mobile */}
            <div className="pt-4 flex items-center justify-center gap-5 text-gray-300">
              {siteData.home.footer.socials.map((social) => {
                const getSocialIcon = () => {
                  switch (social.icon) {
                    case 'facebook': return <Facebook className="w-4 h-4" />;
                    case 'instagram': return <Instagram className="w-4 h-4" />;
                    case 'twitter': return <Twitter className="w-4 h-4" />;
                    case 'music': return <Music className="w-4 h-4" />;
                    case 'linkedin': return <Linkedin className="w-4 h-4" />;
                    default: return null;
                  }
                };

                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-white/10 hover:bg-brand-green hover:text-white transition-colors"
                    aria-label={social.name}
                  >
                    {getSocialIcon()}
                  </a>
                );
              })}
            </div>

          </div>
        </div>

      </nav>
    </header>
  );
};

export default Navbar;
