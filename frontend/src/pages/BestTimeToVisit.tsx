import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Sun, 
  CloudRain, 
  Sparkles,
  Star
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

interface RatingDetail {
  stars: number;
  label: string;
}

interface MonthData {
  month: string;
  season: 'peak' | 'good' | 'green';
  seasonName: string;
  weather: string;
  gorillaRating: RatingDetail;
  wildlifeRating: RatingDetail;
  highlights: string;
}

const MONTHS: MonthData[] = [
  {
    month: 'January',
    season: 'peak',
    seasonName: 'Peak Dry Season',
    weather: 'Warm & dry (27°C / 81°F). Minimal rainfall.',
    gorillaRating: { stars: 5, label: 'Excellent (Dry forest trails)' },
    wildlifeRating: { stars: 5, label: 'Superb (Animals congregate around waterholes)' },
    highlights: 'Prime birding season with migratory European species and easy game drives in Queen Elizabeth.',
  },
  {
    month: 'February',
    season: 'peak',
    seasonName: 'Peak Dry Season',
    weather: 'Hot & dry across northern parks (Kidepo & Murchison).',
    gorillaRating: { stars: 5, label: 'Outstanding trekking conditions' },
    wildlifeRating: { stars: 5, label: 'High concentration near rivers & lakes' },
    highlights: 'Best month for Kidepo Valley and Murchison Falls boat safaris on the Nile.',
  },
  {
    month: 'March',
    season: 'good',
    seasonName: 'Transition to Green Season',
    weather: 'Light afternoon showers; lush green landscapes.',
    gorillaRating: { stars: 4, label: 'Very Good (Bring waterproof hiking boots)' },
    wildlifeRating: { stars: 4, label: 'Great (Lush photography background)' },
    highlights: 'Fewer crowds at luxury lodges; exceptional landscape photography.',
  },
  {
    month: 'April',
    season: 'green',
    seasonName: 'Green Season (Long Rains)',
    weather: 'Lush rains; vibrant vegetation.',
    gorillaRating: { stars: 3, label: 'Good (Gorillas stay at lower altitudes for food)' },
    wildlifeRating: { stars: 4, label: 'Lots of baby animals and calving' },
    highlights: 'Best lodge discounts, quietest trails, and gorillas forage at lower elevations.',
  },
  {
    month: 'May',
    season: 'green',
    seasonName: 'Green Season',
    weather: 'Afternoon rain clearing for sunny intervals.',
    gorillaRating: { stars: 3, label: 'Good (Shorter hikes as gorillas stay lower)' },
    wildlifeRating: { stars: 4, label: 'Fresh savanna landscapes' },
    highlights: 'Chimpanzee tracking in Kibale is excellent with abundant forest fruit.',
  },
  {
    month: 'June',
    season: 'peak',
    seasonName: 'Peak Dry Season',
    weather: 'Sunny & mild across all national parks.',
    gorillaRating: { stars: 5, label: 'Prime Gorilla Trekking Season' },
    wildlifeRating: { stars: 5, label: 'Excellent Big 5 sightings' },
    highlights: 'Early booking essential for gorilla permits; glorious weather for Jinja Nile rafting.',
  },
  {
    month: 'July',
    season: 'peak',
    seasonName: 'Peak Dry Season',
    weather: 'Dry, clear skies and comfortable temperatures.',
    gorillaRating: { stars: 5, label: 'Easiest trekking terrain' },
    wildlifeRating: { stars: 5, label: 'Savannas short and game spotting easiest' },
    highlights: 'Top month for combined Uganda gorilla and Kenya/Tanzania migration itineraries.',
  },
  {
    month: 'August',
    season: 'peak',
    seasonName: 'Peak Dry Season',
    weather: 'Pleasant, dry days and cool mountain nights.',
    gorillaRating: { stars: 5, label: 'Outstanding visibility in Bwindi' },
    wildlifeRating: { stars: 5, label: 'Large herds in Queen Elizabeth & Murchison' },
    highlights: 'Peak travel month for families and honeymooners.',
  },
  {
    month: 'September',
    season: 'good',
    seasonName: 'Transition Season',
    weather: 'Occasional light showers; warm and pleasant.',
    gorillaRating: { stars: 4, label: 'Very Good conditions' },
    wildlifeRating: { stars: 4, label: 'High wildlife density' },
    highlights: 'Pleasant shoulder season with great availability and golden light.',
  },
  {
    month: 'October',
    season: 'good',
    seasonName: 'Short Rains',
    weather: 'Intermittent rains, usually in late afternoons.',
    gorillaRating: { stars: 4, label: 'Good trekking with clear mountain views' },
    wildlifeRating: { stars: 4, label: 'Excellent birding and green scenery' },
    highlights: 'Shoebill Stork sightings in Mabamba Swamp are phenomenal.',
  },
  {
    month: 'November',
    season: 'green',
    seasonName: 'Short Rains (Birding Peak)',
    weather: 'Lush greenery with afternoon showers.',
    gorillaRating: { stars: 3, label: 'Good trekking' },
    wildlifeRating: { stars: 4, label: 'Millions of migratory birds arrive' },
    highlights: 'Uganda’s premier birdwatching month (over 1,060 recorded bird species).',
  },
  {
    month: 'December',
    season: 'peak',
    seasonName: 'Peak Dry Season (Holiday Season)',
    weather: 'Warm and dry throughout the country.',
    gorillaRating: { stars: 5, label: 'Festive season gorilla trekking' },
    wildlifeRating: { stars: 5, label: 'Superb game viewing' },
    highlights: 'Unforgettable African Christmas and New Year safari experiences.',
  },
];

const BestTimeToVisit: React.FC = () => {
  const { openModal } = useCustomSafariModal();
  const [selectedMonth, setSelectedMonth] = useState<MonthData>(MONTHS[5]); // June default

  const guideSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Best Time to Visit Uganda for Safari & Gorilla Trekking (2026/2027 Guide)',
    description: 'Detailed month-by-month guide on weather, wildlife viewability, gorilla trekking conditions, and seasonal lodge rates in Uganda.',
  };

  return (
    <div className="bg-white text-brand-dark min-h-screen">
      <SEO
        title="Best Time to Visit Uganda for Safaris & Gorilla Trekking | Come Again Tours"
        description="When is the best time to visit Uganda? Complete month-by-month guide covering dry seasons (June-Aug, Dec-Feb), green seasons, gorilla permit availability, and wildlife ratings."
        schema={guideSchema}
      />

      {/* Hero Header */}
      <section className="relative py-24 px-4 bg-brand-dark text-white text-left overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <span className="text-brand-green font-bold text-xs uppercase tracking-[0.3em] block mb-4 flex items-center gap-2">
            <Sun className="w-4 h-4" /> Seasonal Travel Guide
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Best Time to Visit Uganda <br />
            <span className="text-brand-green">for Safaris & Gorilla Trekking</span>
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl leading-relaxed mb-8">
            Uganda is a year-round destination located on the Equator. However, choosing the best month depends on whether your priority is dry trekking trails, newborn wildlife, bird migrations, or avoiding peak crowds.
          </p>

          <button
            onClick={() => openModal({ packageTitle: `Uganda Safari in ${selectedMonth.month}` })}
            className="px-8 py-4 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-white hover:text-brand-dark transition-all shadow-xl"
          >
            Plan Your Safari For {selectedMonth.month}
          </button>
        </div>
      </section>

      {/* Month Selector Grid */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-left">
        <div className="text-center mb-12">
          <span className="text-brand-green font-bold text-xs uppercase tracking-widest block mb-2">
            Interactive 12-Month Calendar
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
            Select a Month to View Weather & Safari Conditions
          </h2>
        </div>

        {/* Month Buttons */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-2 mb-12">
          {MONTHS.map((m) => {
            const isSelected = selectedMonth.month === m.month;
            return (
              <button
                key={m.month}
                type="button"
                onClick={() => setSelectedMonth(m)}
                className={`py-3 px-2 rounded-2xl border text-center transition-all flex flex-col items-center justify-center ${
                  isSelected
                    ? 'bg-brand-green text-white font-bold shadow-lg scale-105 border-brand-green'
                    : m.season === 'peak'
                    ? 'bg-[#eef7ed] border-brand-green/30 text-brand-dark hover:bg-brand-green/20'
                    : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="text-xs font-bold">{m.month.slice(0, 3)}</span>
                <span className={`text-[9px] uppercase font-semibold mt-0.5 ${
                  isSelected ? 'text-white/80' : m.season === 'peak' ? 'text-brand-green' : 'text-gray-400'
                }`}>
                  {m.season === 'peak' ? 'Peak' : m.season === 'good' ? 'Good' : 'Green'}
                </span>
              </button>
            );
          })}
        </div>

        {/* Selected Month Detail Card */}
        <motion.div
          key={selectedMonth.month}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#f7faf5] border-2 border-brand-green/30 rounded-3xl p-8 sm:p-12 shadow-sm mb-16"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-green/20 mb-8">
            <div>
              <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 ${
                selectedMonth.season === 'peak'
                  ? 'bg-brand-green text-white'
                  : selectedMonth.season === 'good'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-emerald-700 text-white'
              }`}>
                {selectedMonth.seasonName}
              </span>
              <h3 className="text-3xl sm:text-4xl font-serif font-bold text-brand-dark">
                Visiting Uganda in {selectedMonth.month}
              </h3>
            </div>

            <button
              onClick={() => openModal({ packageTitle: `Uganda Safari (${selectedMonth.month})` })}
              className="px-6 py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-xl hover:bg-brand-dark transition-all"
            >
              Inquire For {selectedMonth.month}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                Typical Weather
              </span>
              <p className="text-sm font-semibold text-brand-dark">{selectedMonth.weather}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                Gorilla Trekking Rating
              </span>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < selectedMonth.gorillaRating.stars ? 'fill-current' : 'text-gray-200 fill-none'}`} 
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-brand-dark">{selectedMonth.gorillaRating.label}</p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
              <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider block mb-1">
                Wildlife & Game Drives
              </span>
              <div className="flex items-center gap-1 text-amber-500 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < selectedMonth.wildlifeRating.stars ? 'fill-current' : 'text-gray-200 fill-none'}`} 
                  />
                ))}
              </div>
              <p className="text-xs font-semibold text-brand-dark">{selectedMonth.wildlifeRating.label}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-brand-green/20">
            <span className="text-xs font-bold text-brand-green uppercase tracking-wider block mb-2 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" /> Highlights & Travel Advice for {selectedMonth.month}
            </span>
            <p className="text-sm text-gray-700 leading-relaxed">{selectedMonth.highlights}</p>
          </div>
        </motion.div>

        {/* Season Summary Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-brand-green/20 rounded-3xl p-8">
            <div className="inline-flex p-3 rounded-2xl bg-amber-50 text-amber-600 mb-4">
              <Sun className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-brand-dark mb-3">
              The Dry Seasons (June to August & Dec to Feb)
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              The most popular times for gorilla trekking and savanna game drives. Forest trails are firmer underfoot, rainfall is minimal, and animals congregate around permanent rivers like the Nile and Kazinga Channel.
            </p>
            <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider">
              Tip: Reserve permits 3–6 months in advance.
            </span>
          </div>

          <div className="bg-white border border-brand-green/20 rounded-3xl p-8">
            <div className="inline-flex p-3 rounded-2xl bg-emerald-50 text-emerald-600 mb-4">
              <CloudRain className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-serif font-bold text-brand-dark mb-3">
              The Green Seasons (March to May & Sept to Nov)
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-4">
              Known as the green season, these months bring lush emerald scenery, newborn calves, and spectacular bird migrations. Luxury lodges often offer reduced rates and the national parks are delightfully peaceful.
            </p>
            <span className="text-[11px] font-bold text-brand-green uppercase tracking-wider">
              Tip: Ideal for photography, birders, and budget-conscious travelers.
            </span>
          </div>
        </div>
      </section>

      <TrustBadges variant="light" />
      <Footer />
    </div>
  );
};

export default BestTimeToVisit;
