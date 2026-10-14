import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Users, 
  Compass, 
  Send, 
  CheckCircle2, 
  Phone, 
  ShieldCheck, 
  Hotel, 
  Car, 
  Plane, 
  ArrowRight, 
  ArrowLeft, 
  Clock, 
  Footprints, 
  Trees, 
  Binoculars, 
  Mountain, 
  Waves, 
  Feather, 
  Heart, 
  DollarSign, 
  Globe, 
  Check, 
  Camera, 
  Coffee, 
  Award
} from 'lucide-react';
import { businessConfig } from '../data/businessConfig';

// --- Destination Data ---
export const DESTINATIONS = [
  { id: 'uganda', name: 'Uganda', tag: 'The Pearl of Africa', flag: '🇺🇬', desc: 'Mountain Gorillas, Chimps, Big 5 & Source of the Nile' },
  { id: 'rwanda', name: 'Rwanda', tag: 'Land of a Thousand Hills', flag: '🇷🇼', desc: 'Volcanoes NP Gorillas, Nyungwe Canopy & Lake Kivu' },
  { id: 'kenya', name: 'Kenya', tag: 'Classic Savannah', flag: '🇰🇪', desc: 'Masai Mara Migration, Amboseli & Mt Kenya' },
  { id: 'tanzania', name: 'Tanzania', tag: 'Serengeti & Crater', flag: '🇹🇿', desc: 'Serengeti Migration, Ngorongoro & Zanzibar' },
  { id: 'multicountry', name: 'Multi-Country East Africa', tag: 'Full Circuit', flag: '🌍', desc: 'Combine Uganda Gorillas with Kenya/Tanzania Migration' },
];

// --- Curated Experiences (Mapped from Come Again portfolio & competitor reference) ---
export const EXPERIENCES = [
  { id: 'gorilla', name: 'Mountain Gorilla Trekking', park: 'Bwindi & Mgahinga', icon: <Footprints className="w-4 h-4" /> },
  { id: 'chimps', name: 'Chimpanzee Tracking & Habituation', park: 'Kibale Forest & Kyambura', icon: <Trees className="w-4 h-4" /> },
  { id: 'bigfive', name: 'Classic Big 5 Game Drives', park: 'Murchison Falls & Queen Elizabeth', icon: <Binoculars className="w-4 h-4" /> },
  { id: 'rhino', name: 'Rhino Tracking on Foot', park: 'Ziwa Rhino Sanctuary', icon: <Compass className="w-4 h-4" /> },
  { id: 'tree_lions', name: 'Tree-Climbing Lions Encounter', park: 'Ishasha Sector', icon: <Camera className="w-4 h-4" /> },
  { id: 'boat_safari', name: 'Nile & Kazinga Boat Cruises', park: 'Murchison & Kazinga Channel', icon: <Waves className="w-4 h-4" /> },
  { id: 'jinja_rafting', name: 'Source of the Nile Rafting & Adventure', park: 'Jinja River Nile', icon: <Waves className="w-4 h-4" /> },
  { id: 'sipi_coffee', name: 'Sipi Falls & Arabica Coffee Tours', park: 'Mount Elgon Slopes', icon: <Coffee className="w-4 h-4" /> },
  { id: 'mountain_climbing', name: 'Rwenzori Mountains or Kilimanjaro Trekking', park: 'Mountains of the Moon', icon: <Mountain className="w-4 h-4" /> },
  { id: 'kidepo_wild', name: 'Remote Wilderness & Kidepo Valley', park: 'Kidepo & Pian Upe', icon: <Compass className="w-4 h-4" /> },
  { id: 'balloon', name: 'Hot Air Balloon Safari', park: 'Murchison & Queen Elizabeth', icon: <Plane className="w-4 h-4" /> },
  { id: 'birding', name: 'Birding & Rare Shoebill Stork Quest', park: 'Mabamba & Albertine Rift', icon: <Feather className="w-4 h-4" /> },
  { id: 'cultural', name: 'Batwa, Karamojong & Maasai Cultural Tours', park: 'Indigenous Community Encounters', icon: <Users className="w-4 h-4" /> },
  { id: 'migration', name: 'Great Wildebeest Migration', park: 'Serengeti & Masai Mara', icon: <Binoculars className="w-4 h-4" /> },
  { id: 'honeymoon', name: 'Romantic & Honeymoon Luxury Package', park: 'Private Bush Dining & Scenery', icon: <Heart className="w-4 h-4" /> },
];

// --- Vehicle / Transport Options ---
export const TRANSPORT_OPTIONS = [
  {
    id: 'cruiser',
    title: 'Custom 4x4 Safari Land Cruiser',
    badge: 'Recommended',
    desc: 'Guaranteed window seat, 360° pop-up photo roof, cooler box, charging ports & rugged all-terrain capability.',
    icon: <Car className="w-5 h-5 text-brand-green" />
  },
  {
    id: 'minivan',
    title: '4x4 Safari Minivan',
    badge: 'Value Option',
    desc: 'Equipped with pop-up roof for game viewing. Economical choice for standard road safaris.',
    icon: <Car className="w-5 h-5 text-gray-500" />
  },
  {
    id: 'flight',
    title: 'Luxury Fly-In Safari (AeroLink Bush Flights)',
    badge: 'Premium Comfort',
    desc: 'Short domestic flights direct to Bwindi (Kihihi), Murchison (Pakuba/Chobe) or Kidepo, eliminating 8-10 hr drives.',
    icon: <Plane className="w-5 h-5 text-amber-500" />
  }
];

// --- Lodging Style ---
export const ACCOMMODATION_STYLES = [
  { 
    id: 'luxury', 
    title: 'Luxury Lodges & Boutique Safari Camps', 
    desc: 'World-class 5-star boutique lodges, gourmet cuisine, private plunge pools & fly-in access.',
    examples: 'e.g. Nile Safari Lodge, Sanctuary Gorilla Forest, Mahogany Springs, Chobe Safari Lodge'
  },
  { 
    id: 'midrange', 
    title: 'Mid-Range Eco-Lodges (Most Popular)', 
    desc: 'Comfortable ensuite cottages, breathtaking park vistas, delicious full-board dining & authentic safari warmth.',
    examples: 'e.g. Parkside Safari Lodge, Turaco Treetops, Enganzi Game Lodge, Bakiga Lodge'
  },
  { 
    id: 'budget', 
    title: 'Budget / Standard Safari Cottages', 
    desc: 'Clean, safe, well-managed safari camps with private bathrooms and great access to park gates.',
    examples: 'e.g. Red Chilli Camp, standard park bandas & eco-guesthouses'
  },
];

// --- Duration Options ---
export const DURATIONS = [
  '1 - 3 Days',
  '4 - 7 Days',
  '8 - 12 Days',
  '13 - 16 Days',
  '17+ Days'
];

// --- Budget Ranges per Person (USD) ---
export const BUDGET_RANGES = [
  { id: 'under_1500', label: 'Under $1,500 / person', sub: 'Short getaways & budget safari' },
  { id: '1500_3000', label: '$1,500 – $3,000 / person', sub: 'Standard wildlife safari' },
  { id: '3000_5000', label: '$3,000 – $5,000 / person', sub: 'Classic Mid-Range Gorilla & Wildlife (Most Popular)' },
  { id: '5000_8000', label: '$5,000 – $8,000 / person', sub: 'Luxury lodge experience' },
  { id: '8000_plus', label: '$8,000+ / person', sub: 'Ultra-Luxury & Fly-In private safari' },
  { id: 'undecided', label: 'Undecided / Need guidance', sub: 'Recommend based on our itinerary wishlist' }
];

// --- Referral Sources ---
export const REFERRAL_SOURCES = [
  'Google Search',
  'Instagram (@comeagaintoursandtravels)',
  'TikTok (@come_again_tours_travel)',
  'TripAdvisor',
  'SafariBookings.com',
  'Friend or Family Recommendation',
  'Other'
];

interface SafariPlannerWizardProps {
  initialPackageTitle?: string;
  initialDestination?: string;
  initialDuration?: string;
  onSuccessClose?: () => void;
  isStandalonePage?: boolean;
}

export const SafariPlannerWizard: React.FC<SafariPlannerWizardProps> = ({
  initialPackageTitle,
  initialDestination,
  initialDuration,
  onSuccessClose,
  isStandalonePage = false
}) => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [selectedDestinations, setSelectedDestinations] = useState<string[]>(['Uganda']);
  const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
  const [transport, setTransport] = useState('cruiser');
  const [style, setStyle] = useState('midrange');
  const [duration, setDuration] = useState('4 - 7 Days');
  
  // Group & Timing
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [groupType, setGroupType] = useState('Couple');
  const [travelMonthYear, setTravelMonthYear] = useState('');
  const [isDatesFlexible, setIsDatesFlexible] = useState(true);

  // Budget & Referral
  const [budgetRange, setBudgetRange] = useState('$3,000 – $5,000 / person');
  const [referralSource, setReferralSource] = useState('Google Search');

  // Contact Details
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [dietaryRequirements, setDietaryRequirements] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');

  useEffect(() => {
    if (initialPackageTitle) {
      setSelectedInterests([initialPackageTitle]);
    }
    if (initialDestination) {
      setSelectedDestinations([initialDestination]);
    }
    if (initialDuration) {
      setDuration(initialDuration);
    }
  }, [initialPackageTitle, initialDestination, initialDuration]);

  const toggleDestination = (name: string) => {
    setSelectedDestinations(prev => 
      prev.includes(name) 
        ? (prev.length > 1 ? prev.filter(d => d !== name) : prev) 
        : [...prev, name]
    );
  };

  const toggleInterest = (name: string) => {
    setSelectedInterests(prev => 
      prev.includes(name) ? prev.filter(i => i !== name) : [...prev, name]
    );
  };

  const formatSummaryMessage = () => {
    return `*🌟 Custom Safari Inquiry for Come Again Tours & Travels:*
----------------------------------------
📍 *Destinations:* ${selectedDestinations.join(', ') || 'Uganda'}
🎯 *Bucket-List Interests:* ${selectedInterests.length > 0 ? selectedInterests.join(', ') : 'Classic Wildlife & Gorilla Safari'}
🚗 *Preferred Transport:* ${TRANSPORT_OPTIONS.find(t => t.id === transport)?.title || transport}
🏨 *Lodge Comfort Tier:* ${ACCOMMODATION_STYLES.find(s => s.id === style)?.title || style}
⏱️ *Duration:* ${duration}
👥 *Travelers:* ${adults} Adults${children > 0 ? `, ${children} Children` : ''} (${groupType})
📅 *Target Dates / Month:* ${travelMonthYear || 'Flexible'} (${isDatesFlexible ? 'Flexible' : 'Exact Dates'})
💰 *Estimated Budget:* ${budgetRange}
📣 *Source of Referral:* ${referralSource}
----------------------------------------
👤 *Lead Traveler:* ${firstName} ${lastName}
📧 *Email:* ${email}
📱 *WhatsApp/Phone:* ${phone || 'Not provided'}
🌍 *Country of Residence:* ${country || 'International'}
🥗 *Dietary / Mobility Needs:* ${dietaryRequirements || 'None'}
📝 *Special Requests / Notes:* ${specialNotes || 'None'}`;
  };

  const handleWhatsAppSend = () => {
    const summary = formatSummaryMessage();
    // Official WhatsApp line for Come Again Tours (0786016031)
    const waUrl = businessConfig.whatsapp.getLink(summary);
    window.open(waUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      firstName: firstName || 'Safari',
      lastName: lastName || 'Traveler',
      email,
      phone,
      message: `[Plan My Trip Inquiry]
Destinations: ${selectedDestinations.join(', ')}
Interests: ${selectedInterests.join(', ')}
Transport: ${transport}
Lodge Style: ${style}
Duration: ${duration}
Travelers: ${adults} Adults, ${children} Children (${groupType})
Target Dates: ${travelMonthYear} (Flexible: ${isDatesFlexible ? 'Yes' : 'No'})
Budget: ${budgetRange}
Referral Source: ${referralSource}
Country: ${country}
Dietary: ${dietaryRequirements}
Special Notes: ${specialNotes}`
    };

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || 'https://api.comeagaintoursandtravels.com/api').replace(/\/+$/, '');
      const endpoint = baseUrl.endsWith('/api') ? `${baseUrl}/contact` : `${baseUrl}/api/contact`;
      await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      }).catch((err) => console.error('Wizard submission error:', err));
    } catch (err) {
      console.error('Wizard submission failed:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  const totalSteps = 4;

  const stepTitles = [
    { num: 1, title: 'Destinations & Adventures', icon: <Compass className="w-4 h-4" /> },
    { num: 2, title: 'Transport & Comfort', icon: <Hotel className="w-4 h-4" /> },
    { num: 3, title: 'Dates, Budget & Referral', icon: <DollarSign className="w-4 h-4" /> },
    { num: 4, title: 'Traveler Details', icon: <ShieldCheck className="w-4 h-4" /> },
  ];

  return (
    <div className={`w-full ${isStandalonePage ? 'bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden' : ''}`}>
      {/* Progress Stepper Bar */}
      {!submitted && (
        <div className="bg-gray-50/80 border-b border-gray-100 p-4 sm:p-5">
          <div className="flex items-center justify-between max-w-2xl mx-auto mb-2.5">
            <span className="text-[11px] font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-brand-green" />
              Step {step} of {totalSteps}: {stepTitles[step - 1].title}
            </span>
            <span className="text-xs font-semibold text-gray-500">
              {Math.round((step / totalSteps) * 100)}% Completed
            </span>
          </div>

          <div className="grid grid-cols-4 gap-2 max-w-2xl mx-auto">
            {stepTitles.map((st) => (
              <div
                key={st.num}
                onClick={() => {
                  if (st.num < step) setStep(st.num);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  step >= st.num 
                    ? 'bg-brand-green cursor-pointer' 
                    : 'bg-gray-200'
                }`}
                title={st.title}
              />
            ))}
          </div>

          <div className="hidden sm:flex justify-between max-w-2xl mx-auto mt-2 text-[10px] font-semibold text-gray-500">
            {stepTitles.map(st => (
              <span key={st.num} className={step === st.num ? 'text-brand-dark font-bold' : ''}>
                {st.title}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Main Body */}
      <div className="p-5 sm:p-8">
        {submitted ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-brand-green/10 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-dark mb-2">
              Safari Itinerary Request Received!
            </h3>
            <p className="text-gray-600 text-sm max-w-lg mx-auto mb-6">
              Thank you, <span className="font-bold text-brand-dark">{firstName || 'Traveler'}</span>! Our senior safari concierge team in Kampala has received your adventure preferences and is drafting your customized proposal.
            </p>

            <div className="bg-[#f2faf0] border border-brand-green/30 rounded-2xl p-6 max-w-lg mx-auto text-left mb-6 shadow-sm">
              <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-wider mb-2">
                <ShieldCheck className="w-4 h-4" /> Instant VIP Concierge Service
              </div>
              <p className="text-xs text-gray-700 mb-4 leading-relaxed">
                Need quick clarification on <strong>gorilla permit dates</strong>, domestic flight connections, or lodge availability? Connect directly with our lead safari planner on WhatsApp right now.
              </p>
              <button
                onClick={handleWhatsAppSend}
                className="w-full py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
              >
                <Phone className="w-4 h-4" /> Open Your Itinerary in WhatsApp
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              {onSuccessClose && (
                <button
                  onClick={onSuccessClose}
                  className="px-8 py-3 bg-brand-dark text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-green transition-colors"
                >
                  Close Window
                </button>
              )}
              <button
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                }}
                className="px-6 py-3 border border-gray-200 text-gray-700 text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-gray-50 transition-colors"
              >
                Plan Another Safari
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* ================= STEP 1: DESTINATIONS & ADVENTURES ================= */}
            {step === 1 && (
              <div className="space-y-6 text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                      <Globe className="w-4 h-4 text-brand-green" /> 1. Where Would You Love To Go? *
                    </label>
                    <span className="text-[11px] text-gray-600">Select one or multiple</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {DESTINATIONS.map(d => {
                      const isSelected = selectedDestinations.includes(d.name);
                      return (
                        <button
                          key={d.id}
                          type="button"
                          onClick={() => toggleDestination(d.name)}
                          className={`p-3.5 rounded-2xl border text-left transition-all flex items-start justify-between ${
                            isSelected
                              ? 'bg-brand-green/10 border-brand-green shadow-sm'
                              : 'bg-gray-50/50 border-gray-200 hover:border-brand-green/50 hover:bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{d.flag}</span>
                              <span className="text-xs font-bold text-brand-dark">{d.name}</span>
                            </div>
                            <p className="text-[10px] text-gray-700 mt-1 leading-tight">{d.desc}</p>
                          </div>
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'bg-brand-green border-brand-green text-white' : 'border-gray-300'
                          }`}>
                            {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                      <Compass className="w-4 h-4 text-brand-green" /> 2. Which Experiences Are on Your Bucket List?
                    </label>
                    <span className="text-[11px] text-gray-600">Choose all that inspire you</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[42vh] overflow-y-auto pr-1">
                    {EXPERIENCES.map((exp) => {
                      const isSelected = selectedInterests.includes(exp.name);
                      return (
                        <button
                          key={exp.id}
                          type="button"
                          onClick={() => toggleInterest(exp.name)}
                          className={`p-3 rounded-xl border text-left flex items-center gap-3 transition-all ${
                            isSelected
                              ? 'bg-brand-green/10 border-brand-green shadow-sm text-brand-dark'
                              : 'bg-gray-50/40 border-gray-200 text-gray-700 hover:border-brand-green/40 hover:bg-white'
                          }`}
                        >
                          <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 ${
                            isSelected ? 'bg-brand-green text-white shadow-sm' : 'bg-brand-green/10 text-brand-green'
                          }`}>
                            {exp.icon}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-xs font-semibold truncate leading-tight">{exp.name}</p>
                            <p className="text-[10px] text-gray-600 truncate">{exp.park}</p>
                          </div>
                          {isSelected && (
                            <Check className="w-3.5 h-3.5 text-brand-green shrink-0 ml-auto stroke-[2.5]" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-7 py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all shadow-sm flex items-center gap-2"
                  >
                    Next: Transport & Lodging <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 2: LOGISTICS, TRANSPORT & LODGING ================= */}
            {step === 2 && (
              <div className="space-y-6 text-left">
                {/* Transport Preference */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-1.5">
                    <Car className="w-4 h-4 text-brand-green" /> Preferred Type of Transport *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {TRANSPORT_OPTIONS.map((t) => {
                      const isSelected = transport === t.id;
                      return (
                        <button
                          key={t.id}
                          type="button"
                          onClick={() => setTransport(t.id)}
                          className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                            isSelected
                              ? 'bg-brand-green/10 border-brand-green shadow-sm'
                              : 'bg-gray-50/50 border-gray-200 hover:border-brand-green/50 hover:bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              {t.icon}
                              <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider ${
                                t.badge === 'Recommended' 
                                  ? 'bg-brand-green text-white' 
                                  : t.badge === 'Premium Comfort'
                                  ? 'bg-amber-100 text-amber-800'
                                  : 'bg-gray-200 text-gray-700'
                              }`}>
                                {t.badge}
                              </span>
                            </div>
                            <div className="text-xs font-bold text-brand-dark mb-1">{t.title}</div>
                            <p className="text-[11px] text-gray-700 leading-relaxed">{t.desc}</p>
                          </div>
                          <div className="mt-3 pt-2 border-t border-gray-200/50 flex items-center justify-between">
                            <span className="text-[10px] font-semibold text-brand-dark">
                              {isSelected ? 'Selected' : 'Click to select'}
                            </span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              isSelected ? 'bg-brand-green border-brand-green text-white' : 'border-gray-300'
                            }`}>
                              {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Accommodation Style */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-2 flex items-center gap-1.5">
                    <Hotel className="w-4 h-4 text-brand-green" /> Accommodation Comfort Level *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {ACCOMMODATION_STYLES.map((st) => {
                      const isSelected = style === st.id;
                      return (
                        <button
                          key={st.id}
                          type="button"
                          onClick={() => setStyle(st.id)}
                          className={`p-4 rounded-2xl border text-left flex flex-col justify-between transition-all ${
                            isSelected
                              ? 'bg-brand-green/10 border-brand-green shadow-sm'
                              : 'bg-gray-50/50 border-gray-200 hover:border-brand-green/50 hover:bg-white'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <span className="text-xs font-bold text-brand-dark">{st.title}</span>
                              <div className={`w-4 h-4 rounded-full border shrink-0 flex items-center justify-center ${
                                isSelected ? 'bg-brand-green border-brand-green text-white' : 'border-gray-300'
                              }`}>
                                {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                              </div>
                            </div>
                            <p className="text-[11px] text-gray-700 leading-snug mb-2">{st.desc}</p>
                          </div>
                          <p className="text-[10px] text-brand-dark/80 italic border-t border-gray-100 pt-2">{st.examples}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Duration & Group Size Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5 flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand-green" /> Estimated Duration *
                    </label>
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 focus:outline-none focus:border-brand-green"
                    >
                      {DURATIONS.map(d => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5 flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-brand-green" /> Group Size & Composition *
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-2">
                        <span className="text-[10px] font-bold text-gray-500 mr-1.5">Adults:</span>
                        <input
                          type="number"
                          min="1"
                          max="40"
                          value={adults}
                          onChange={(e) => setAdults(Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-full bg-transparent text-xs font-bold text-brand-dark focus:outline-none"
                        />
                      </div>
                      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-xl px-2.5 py-2">
                        <span className="text-[10px] font-bold text-gray-500 mr-1.5">Kids:</span>
                        <input
                          type="number"
                          min="0"
                          max="20"
                          value={children}
                          onChange={(e) => setChildren(Math.max(0, parseInt(e.target.value) || 0))}
                          className="w-full bg-transparent text-xs font-bold text-brand-dark focus:outline-none"
                        />
                      </div>
                      <select
                        value={groupType}
                        onChange={(e) => setGroupType(e.target.value)}
                        className="p-2 bg-gray-50 border border-gray-200 rounded-xl text-[11px] font-semibold text-gray-800 focus:outline-none focus:border-brand-green"
                      >
                        <option value="Solo">Solo</option>
                        <option value="Couple">Couple</option>
                        <option value="Family">Family</option>
                        <option value="Private Group">Group</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-4 py-2.5 text-gray-600 text-xs font-bold uppercase tracking-wider hover:text-brand-dark flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-7 py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all shadow-sm flex items-center gap-2"
                  >
                    Next: Dates & Budget <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 3: DATES, BUDGET & REFERRAL ================= */}
            {step === 3 && (
              <div className="space-y-6 text-left">
                {/* Travel Timing */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-brand-green" /> When Do You Plan To Travel? *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="sm:col-span-2">
                      <input
                        type="text"
                        placeholder="e.g. August 2026, or Festive Christmas / New Year"
                        value={travelMonthYear}
                        onChange={(e) => setTravelMonthYear(e.target.value)}
                        className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 font-medium focus:outline-none focus:border-brand-green"
                      />
                    </div>
                    <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-3.5 py-3">
                      <input
                        type="checkbox"
                        id="flexible-checkbox"
                        checked={isDatesFlexible}
                        onChange={(e) => setIsDatesFlexible(e.target.checked)}
                        className="w-4 h-4 text-brand-green rounded accent-brand-green cursor-pointer"
                      />
                      <label htmlFor="flexible-checkbox" className="text-xs font-medium text-gray-700 cursor-pointer">
                        Dates are flexible (+/- few days)
                      </label>
                    </div>
                  </div>
                  <p className="text-[11px] text-gray-600 mt-1.5">
                    💡 <em>Uganda Gorilla Trekking Peak Seasons: June–September & December–February (Permits are limited to 8 visitors per gorilla family per day).</em>
                  </p>
                </div>

                {/* Budget Bracket */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-dark flex items-center gap-1.5">
                      <DollarSign className="w-4 h-4 text-brand-green" /> Budget Per Person (USD) *
                    </label>
                    <span className="text-[11px] text-gray-600">Excluding international flights</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                    {BUDGET_RANGES.map(b => {
                      const isSelected = budgetRange === b.label;
                      return (
                        <button
                          key={b.id}
                          type="button"
                          onClick={() => setBudgetRange(b.label)}
                          className={`p-3.5 rounded-xl border text-left transition-all ${
                            isSelected
                              ? 'bg-brand-green/10 border-brand-green shadow-sm'
                              : 'bg-gray-50/50 border-gray-200 hover:border-brand-green/50 hover:bg-white'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-bold text-brand-dark">{b.label}</span>
                            <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center ${
                              isSelected ? 'bg-brand-green border-brand-green text-white' : 'border-gray-300'
                            }`}>
                              {isSelected && <Check className="w-2.5 h-2.5 stroke-[3]" />}
                            </div>
                          </div>
                          <p className="text-[10px] text-gray-600 mt-0.5">{b.sub}</p>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Source of Referral */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-brand-dark mb-1.5 flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-brand-green" /> How Did You Hear About Come Again Tours? *
                  </label>
                  <select
                    value={referralSource}
                    onChange={(e) => setReferralSource(e.target.value)}
                    className="w-full p-3.5 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-800 focus:outline-none focus:border-brand-green"
                  >
                    {REFERRAL_SOURCES.map(src => (
                      <option key={src} value={src}>{src}</option>
                    ))}
                  </select>
                </div>

                <div className="flex justify-between pt-4 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="px-4 py-2.5 text-gray-600 text-xs font-bold uppercase tracking-wider hover:text-brand-dark flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(4)}
                    className="px-7 py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all shadow-sm flex items-center gap-2"
                  >
                    Next: Final Step & Quote <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {/* ================= STEP 4: CONTACT & SUBMIT ================= */}
            {step === 4 && (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="bg-brand-green/5 border border-brand-green/20 rounded-2xl p-4 mb-4 flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div className="text-xs text-gray-700">
                    <span className="font-bold text-brand-dark">100% Free & No-Obligation Custom Proposal: </span>
                    Your itinerary is handcrafted by licensed Ugandan safari directors. We respond within <strong>2–4 hours</strong> with live availability and exact pricing.
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Smith"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                    />
                  </div>
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="john.smith@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      WhatsApp / Mobile Phone *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+1 (555) 000-0000 or +44 7000 000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                    />
                  </div>
                </div>

                {/* Country of Residence */}
                <div>
                  <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                    Country of Residence *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. United States, United Kingdom, Canada, Germany, Australia..."
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                  />
                </div>

                {/* Dietary & Special Requirements */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Dietary Requirements
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Vegetarian, Vegan, Halal, Gluten-Free, None"
                      value={dietaryRequirements}
                      onChange={(e) => setDietaryRequirements(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-gray-700 uppercase tracking-wider mb-1">
                      Special Requests / Mobility / Interests
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Photography beanbags, Honeymoon surprise, Senior mobility"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl text-xs text-gray-800 focus:outline-none focus:border-brand-green"
                    />
                  </div>
                </div>

                {/* Summary Pill */}
                <div className="bg-gray-50 rounded-xl p-3 border border-gray-200 text-[11px] text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                  <span><strong>Destinations:</strong> {selectedDestinations.join(', ')}</span>
                  <span><strong>Duration:</strong> {duration}</span>
                  <span><strong>Travelers:</strong> {adults} Adults{children > 0 ? `, ${children} Kids` : ''}</span>
                  <span><strong>Lodge Tier:</strong> {style.toUpperCase()}</span>
                  <span><strong>Transport:</strong> {transport.toUpperCase()}</span>
                </div>

                {/* Submission CTA Row */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="px-4 py-2.5 text-gray-600 text-xs font-bold uppercase tracking-wider hover:text-brand-dark flex items-center gap-1.5"
                  >
                    <ArrowLeft className="w-4 h-4" /> Back
                  </button>

                  <div className="flex flex-col sm:flex-row items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="w-full sm:w-auto px-5 py-3.5 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-sm"
                      title="Send directly to our reservations team on WhatsApp"
                    >
                      <Phone className="w-4 h-4" /> Send via WhatsApp
                    </button>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 bg-brand-green text-white text-xs font-bold uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all flex items-center justify-center gap-2 shadow-md disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" /> Submit Safari Request
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SafariPlannerWizard;
