import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  CheckCircle2, 
  Hotel, 
  Car, 
  Plane, 
  ShieldCheck, 
  Calendar, 
  Phone,
  DollarSign
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCurrency } from '../context/CurrencyContext';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { businessConfig } from '../data/businessConfig';

const SafariCostEstimator: React.FC = () => {
  const { formatPrice, currency } = useCurrency();
  const { openModal } = useCustomSafariModal();

  // Estimator Inputs
  const [days, setDays] = useState(5);
  const [travelers, setTravelers] = useState(2);
  const [tier, setTier] = useState<'luxury' | 'midrange' | 'budget'>('midrange');
  const [includeGorilla, setIncludeGorilla] = useState(true);
  const [includeChimps, setIncludeChimps] = useState(true);
  const [transportType, setTransportType] = useState<'cruiser' | 'flight'>('cruiser');

  // Rates in USD per person/day base
  const tierDailyRates = {
    luxury: 480, // High-end lodge + gourmet meals + exclusive 4x4 guide ratio
    midrange: 260, // Quality eco-lodges + full board + 4x4 cruiser
    budget: 150, // Standard comfortable camps + 4x4 van
  };

  // Group size discount modifier (sharing vehicle/guide costs)
  const groupDiscountMultiplier = travelers === 1 ? 1.5 : travelers === 2 ? 1.0 : travelers <= 4 ? 0.85 : 0.75;

  const baseSafariCostUSD = days * tierDailyRates[tier] * groupDiscountMultiplier;
  const gorillaPermitUSD = includeGorilla ? 800 : 0;
  const chimpsPermitUSD = includeChimps ? 250 : 0;
  const flightAddonUSD = transportType === 'flight' ? 450 : 0;

  const estimatedPerPersonUSD = Math.round(baseSafariCostUSD + gorillaPermitUSD + chimpsPermitUSD + flightAddonUSD);
  const totalGroupUSD = estimatedPerPersonUSD * travelers;

  const estimatorSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: 'Uganda Safari Cost & Budget Calculator 2026',
    description: 'Calculate real-time estimated costs for your Uganda gorilla trekking and wildlife safari based on group size, duration, and lodge tier.',
  };

  const handleWhatsAppQuote = () => {
    const text = `*🌟 Uganda Safari Estimate from Calculator:*
----------------------------------------
⏱️ *Duration:* ${days} Days
👥 *Travelers:* ${travelers === 6 ? '6+ Guests' : `${travelers} Guest${travelers > 1 ? 's' : ''}`}
🏨 *Lodge Tier:* ${tier === 'luxury' ? 'Luxury 5-Star' : tier === 'midrange' ? 'Mid-Range (Top Pick)' : 'Budget Standard'}
🚗 *Transport:* ${transportType === 'flight' ? 'Domestic Fly-In Safari (AeroLink)' : '4x4 Safari Land Cruiser'}
🦍 *Gorilla Permit:* ${includeGorilla ? 'Included ($800)' : 'Not included'}
🐒 *Chimpanzee Permit:* ${includeChimps ? 'Included ($250)' : 'Not included'}
----------------------------------------
💰 *Estimated Price:* ${formatPrice(estimatedPerPersonUSD)} / person
💵 *Estimated Group Total:* ${formatPrice(totalGroupUSD)}
----------------------------------------
Hello Come Again Tours, I just calculated this safari estimate on your website and would like to confirm availability and discuss our custom itinerary!`;

    const waUrl = businessConfig.whatsapp.getLink(text);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="bg-white text-brand-dark min-h-screen">
      <SEO
        title="Uganda Safari Cost Calculator 2026 | How Much Does a Safari Cost?"
        description="Estimate the real cost of your Uganda safari in 30 seconds. Interactive budget calculator with gorilla permits ($800), lodge tiers (Luxury, Mid-range, Budget), and 4x4 transport."
        schema={estimatorSchema}
      />

      {/* Hero Header */}
      <section className="relative py-20 px-4 bg-brand-dark text-white text-left overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] block mb-3 flex items-center gap-2">
            <Calculator className="w-4 h-4" /> Transparent Pricing Tool
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Uganda Safari Cost Calculator <br />
            <span className="text-brand-green">& Budget Planning Guide</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed">
            Wondering how much a Uganda wildlife and gorilla trekking safari actually costs? Use our interactive planner to calculate realistic estimates based on your travel style, duration, and group size.
          </p>
        </div>
      </section>

      {/* Calculator Interactive Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-left">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-[#f7faf5] border border-brand-green/20 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8">
            <h3 className="text-2xl font-serif font-bold text-brand-dark border-b border-gray-200 pb-4 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-green" /> 1. Customize Your Safari Parameters
            </h3>

            {/* Duration Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Safari Duration (Days)
                </label>
                <span className="text-xl font-serif font-bold text-brand-green">{days} Days</span>
              </div>
              <input
                type="range"
                min="3"
                max="16"
                value={days}
                onChange={(e) => setDays(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-green"
              />
              <div className="flex justify-between text-[11px] text-gray-500 mt-1 font-medium">
                <span>3 Days</span>
                <span>7–10 Days</span>
                <span>16 Days</span>
              </div>
            </div>

            {/* Travelers Count */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Number of Travelers (Adults)
                </label>
                <span className="text-xl font-serif font-bold text-brand-green">
                  {travelers === 6 ? '6+ Guests' : `${travelers} Guest${travelers > 1 ? 's' : ''}`}
                </span>
              </div>
              <div className="grid grid-cols-6 gap-2">
                {[1, 2, 3, 4, 5, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setTravelers(num)}
                    className={`py-2.5 rounded-xl text-xs font-bold transition-all ${
                      travelers === num
                        ? 'bg-brand-green text-white shadow-md'
                        : 'bg-white border border-gray-200 text-gray-700 hover:border-brand-green'
                    }`}
                  >
                    {num === 6 ? '6+' : num === 1 ? '1 Solo' : num}
                  </button>
                ))}
              </div>
              {travelers > 1 && (
                <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green/10 text-brand-green text-[11px] font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Vehicle & guide sharing savings applied! (Save up to 25%)</span>
                </div>
              )}
            </div>

            {/* Accommodation Tier */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                Accommodation Style
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { id: 'luxury', title: 'Luxury 5-Star', desc: 'Boutique luxury lodges & fine dining' },
                  { id: 'midrange', title: 'Mid-Range (Top Pick)', desc: 'Comfortable eco-lodges with private ensuite' },
                  { id: 'budget', title: 'Budget Safari', desc: 'Clean safari camps & standard cottages' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setTier(item.id as any)}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      tier === item.id
                        ? 'bg-brand-green/10 border-brand-green shadow-sm'
                        : 'bg-white border-gray-200 text-gray-600 hover:border-brand-green/50'
                    }`}
                  >
                    <div className="text-sm font-bold text-brand-dark mb-1">{item.title}</div>
                    <div className="text-[11px] text-gray-500 leading-snug">{item.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Activities & Permits Checkboxes */}
            <div className="pt-2">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-3">
                Park Permits & Key Activities
              </label>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:border-brand-green">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeGorilla}
                      onChange={(e) => setIncludeGorilla(e.target.checked)}
                      className="w-4 h-4 accent-brand-green"
                    />
                    <div>
                      <div className="text-xs font-bold text-brand-dark">Mountain Gorilla Trekking Permit</div>
                      <div className="text-[10px] text-gray-500">Official UWA permit fee for Bwindi / Mgahinga</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-green font-mono">+{formatPrice(800)}/person</span>
                </label>

                <label className="flex items-center justify-between p-3.5 bg-white border border-gray-200 rounded-2xl cursor-pointer hover:border-brand-green">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeChimps}
                      onChange={(e) => setIncludeChimps(e.target.checked)}
                      className="w-4 h-4 accent-brand-green"
                    />
                    <div>
                      <div className="text-xs font-bold text-brand-dark">Chimpanzee Tracking (Kibale Forest)</div>
                      <div className="text-[10px] text-gray-500">Primate capital of the world permit fee</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-brand-green font-mono">+{formatPrice(250)}/person</span>
                </label>
              </div>
            </div>

            {/* Transport Preference */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                Safari Transport
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setTransportType('cruiser')}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                    transportType === 'cruiser'
                      ? 'bg-brand-green text-white shadow-sm border-brand-green'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-brand-green/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Car className="w-4 h-4 shrink-0" />
                    <span>4x4 Safari Land Cruiser</span>
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full ${
                    transportType === 'cruiser' ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-600'
                  }`}>
                    Included
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setTransportType('flight')}
                  className={`p-3.5 rounded-2xl border text-left text-xs font-bold transition-all flex items-center justify-between ${
                    transportType === 'flight'
                      ? 'bg-brand-green text-white shadow-sm border-brand-green'
                      : 'bg-white border-gray-200 text-gray-700 hover:border-brand-green/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <Plane className="w-4 h-4 shrink-0" />
                    <span>Fly-In Safari (AeroLink)</span>
                  </div>
                  <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded-full font-mono ${
                    transportType === 'flight' ? 'bg-white/20 text-white' : 'bg-amber-50 text-amber-800'
                  }`}>
                    +{formatPrice(450)}
                  </span>
                </button>
              </div>
            </div>

          </div>

          {/* Dynamic Quote Output Column */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="bg-brand-dark text-white rounded-3xl p-8 sm:p-10 shadow-2xl relative overflow-hidden border border-brand-green/20">
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <span className="text-brand-green text-xs font-bold uppercase tracking-widest">
                  Estimated Safari Quote
                </span>
                <span className="text-xs bg-white/10 px-2.5 py-1 rounded-full text-white/80 font-mono">
                  {currency}
                </span>
              </div>

              <div className="py-6">
                <span className="text-xs text-gray-400 uppercase tracking-wider block mb-1">
                  Estimated Cost Per Person
                </span>
                <div className="text-4xl sm:text-5xl font-serif font-black text-brand-green mb-1">
                  {formatPrice(estimatedPerPersonUSD)}
                </div>
                <p className="text-xs text-gray-400">
                  Total for {travelers} traveler{travelers > 1 ? 's' : ''}: <strong className="text-white">{formatPrice(totalGroupUSD)}</strong>
                </p>
              </div>

              {/* What is included in this estimate */}
              <div className="space-y-3 py-6 border-t border-white/10 text-xs text-gray-300">
                <div className="font-bold text-white uppercase tracking-wider text-[10px]">What is Included:</div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>{days} Days accommodation & all 3 meals daily</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Dedicated professional English-speaking guide</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>Custom 4x4 Safari Land Cruiser with fuel & pop-up roof</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0" />
                  <span>All national park conservation & entry fees</span>
                </div>
                {includeGorilla && (
                  <div className="flex items-center gap-2 text-brand-green font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Official UWA Gorilla Permit ($800 value included)</span>
                  </div>
                )}
                {includeChimps && (
                  <div className="flex items-center gap-2 text-brand-green font-medium">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>Chimpanzee tracking permit ($250 value included)</span>
                  </div>
                )}
              </div>

              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => openModal({
                    packageTitle: `${days}-Day Custom Safari (${tier.toUpperCase()})`,
                    duration: `${days} Days`,
                  })}
                  className="w-full py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-lg flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" /> Lock In This Estimate & Get Quote
                </button>

                <button
                  onClick={handleWhatsAppQuote}
                  className="w-full py-3.5 bg-[#25D366] text-white font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-[#1EBE5D] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Phone className="w-4 h-4" /> Send Estimate via WhatsApp
                </button>

                <p className="text-[10px] text-gray-400 text-center leading-relaxed">
                  *This is a realistic automated estimate. Exact final rates depend on seasonal lodge promotions and room availability.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Transparent Breakdown Section */}
      <section className="py-16 px-4 bg-[#f4faf2]">
        <div className="max-w-4xl mx-auto text-left">
          <h3 className="text-2xl font-serif font-bold text-brand-dark mb-6 text-center">
            Where Does Your Safari Money Go?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
              <h4 className="font-serif font-bold text-lg mb-2 text-brand-dark flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-green" /> 1. Conservation & Park Fees
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Permit and park fees go directly to the Uganda Wildlife Authority for gorilla anti-poaching patrols, veterinary doctors, and local community infrastructure around Bwindi and Queen Elizabeth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
              <h4 className="font-serif font-bold text-lg mb-2 text-brand-dark flex items-center gap-2">
                <Hotel className="w-5 h-5 text-brand-green" /> 2. Safari Lodges & Hospitality
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Lodges in Uganda are full-board (breakfast, lunch, and multi-course dinners) and employ local staff, ensuring luxury service and authentic African hospitality.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
              <h4 className="font-serif font-bold text-lg mb-2 text-brand-dark flex items-center gap-2">
                <Car className="w-5 h-5 text-brand-green" /> 3. 4x4 Vehicles & Expert Guide
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Uganda terrain requires rugged 4x4 Land Cruisers with heavy-duty suspension and professional safari drivers who navigate bush roads safely.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
              <h4 className="font-serif font-bold text-lg mb-2 text-brand-dark flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-brand-green" /> 4. Zero Hidden Surcharges
              </h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Come Again Tours provides all-inclusive pricing with complete transparency so you never encounter surprise fees upon arrival in Entebbe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <TrustBadges variant="light" />
      <Footer />
    </div>
  );
};

export default SafariCostEstimator;
