import React, { useEffect, useState, useRef } from 'react';
import { Cloud, Sun, CloudRain, Wind, Compass, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';

export interface ParkWeather {
  id: string;
  name: string;
  region: string;
  tagline: string;
  lat: number;
  lon: number;
  tempC: number;
  condition: string;
  windKm: number;
  icon: string;
}

const ALL_PARKS: ParkWeather[] = [
  {
    id: 'bwindi',
    name: 'Bwindi Impenetrable',
    region: 'Southwestern Highlands',
    tagline: 'Gorilla Rainforest',
    lat: -1.05,
    lon: 29.61,
    tempC: 19,
    condition: 'Misty & Mild',
    windKm: 8,
    icon: 'rain',
  },
  {
    id: 'kibale',
    name: 'Kibale National Park',
    region: 'Fort Portal Plateau',
    tagline: 'Primate Capital & Chimps',
    lat: 0.48,
    lon: 30.39,
    tempC: 22,
    condition: 'Lush Forest Breeze',
    windKm: 7,
    icon: 'cloud',
  },
  {
    id: 'queen-elizabeth',
    name: 'Queen Elizabeth',
    region: 'Western Rift Valley',
    tagline: 'Savannah & Kazinga Channel',
    lat: -0.20,
    lon: 29.98,
    tempC: 27,
    condition: 'Sunny & Warm',
    windKm: 12,
    icon: 'sun',
  },
  {
    id: 'murchison',
    name: 'Murchison Falls',
    region: 'Albertine Nile Basin',
    tagline: 'River & Wildlife Plains',
    lat: 2.28,
    lon: 31.68,
    tempC: 29,
    condition: 'Warm & Clear',
    windKm: 14,
    icon: 'sun',
  },
  {
    id: 'kidepo',
    name: 'Kidepo Valley',
    region: 'Wild Northern Karamoja',
    tagline: 'Untouched Wilderness',
    lat: 3.90,
    lon: 33.85,
    tempC: 31,
    condition: 'Arid & Sunny',
    windKm: 15,
    icon: 'sun',
  },
  {
    id: 'lake-mburo',
    name: 'Lake Mburo',
    region: 'Ankole Savannah Hills',
    tagline: 'Zebras & Walking Safaris',
    lat: -0.60,
    lon: 30.95,
    tempC: 25,
    condition: 'Pleasant & Breezy',
    windKm: 10,
    icon: 'sun',
  },
  {
    id: 'jinja-nile',
    name: 'Jinja & River Nile',
    region: 'Source of the Nile',
    tagline: 'White-Water & Adventure',
    lat: 0.44,
    lon: 33.20,
    tempC: 26,
    condition: 'Fresh River Breeze',
    windKm: 11,
    icon: 'cloud',
  },
  {
    id: 'sipi-falls',
    name: 'Sipi Falls & Mt. Elgon',
    region: 'Eastern Highlands',
    tagline: 'Waterfalls & Coffee Trails',
    lat: 1.34,
    lon: 34.37,
    tempC: 20,
    condition: 'Cool Mountain Air',
    windKm: 9,
    icon: 'cloud',
  },
  {
    id: 'entebbe',
    name: 'Entebbe Hub',
    region: 'Lake Victoria Peninsula',
    tagline: 'Airport & Botanical Gateway',
    lat: 0.05,
    lon: 32.46,
    tempC: 24,
    condition: 'Fresh Lake Breeze',
    windKm: 16,
    icon: 'cloud',
  },
];

const LiveParkWeather: React.FC = () => {
  const [parks, setParks] = useState<ParkWeather[]>(ALL_PARKS);
  const [loading, setLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<string>('Live on-ground feed');
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 320;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const fetchWeather = async () => {
    setLoading(true);
    try {
      const updated = await Promise.all(
        ALL_PARKS.map(async (p) => {
          try {
            const url = `https://api.open-meteo.com/v1/forecast?latitude=${p.lat}&longitude=${p.lon}&current_weather=true`;
            const res = await fetch(url, { signal: AbortSignal.timeout(4000) });
            if (res.ok) {
              const data = await res.json();
              const cw = data.current_weather;
              if (cw) {
                let cond = p.condition;
                let icon = p.icon;
                if (cw.weathercode === 0) {
                  cond = 'Clear Skies';
                  icon = 'sun';
                } else if (cw.weathercode >= 1 && cw.weathercode <= 3) {
                  cond = 'Partly Cloudy';
                  icon = 'cloud';
                } else if (cw.weathercode >= 51) {
                  cond = 'Rain & Mist';
                  icon = 'rain';
                }

                return {
                  ...p,
                  tempC: Math.round(cw.temperature),
                  condition: cond,
                  windKm: Math.round(cw.windspeed),
                  icon,
                };
              }
            }
          } catch (e) {
            // keep fallback
          }
          return p;
        })
      );
      setParks(updated);
      setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();

    // Automatically re-fetch every 15 minutes while the visitor is on the page
    const interval = setInterval(() => {
      fetchWeather();
    }, 15 * 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      checkScroll();
      return () => el.removeEventListener('scroll', checkScroll);
    }
  }, [parks]);

  const renderIcon = (icon: string) => {
    switch (icon) {
      case 'sun':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'rain':
        return <CloudRain className="w-5 h-5 text-sky-400" />;
      default:
        return <Cloud className="w-5 h-5 text-emerald-300" />;
    }
  };

  return (
    <section className="py-10 md:py-12 px-4 bg-[#081008] text-white border-y border-brand-green/20 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with Live Status & Carousel Navigation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 text-brand-green text-xs font-bold uppercase tracking-widest mb-1.5">
              <Compass className="w-4 h-4" />
              <span>Real-Time Field Intelligence</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Current Safari Conditions Across Uganda
            </h3>
          </div>

          {/* Controls: Last Updated + Refresh + Carousel Arrows */}
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-2 text-xs text-gray-400 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
              <span>Updated: {lastUpdated}</span>
              <button
                onClick={fetchWeather}
                disabled={loading}
                className="p-1 rounded-md bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors disabled:opacity-50"
                title="Refresh live conditions"
                aria-label="Refresh weather"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-brand-gold' : ''}`} />
              </button>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="flex items-center gap-1.5 bg-white/5 border border-white/10 p-1 rounded-xl">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Scroll left"
                title="Previous destinations"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Scroll right"
                title="Next destinations"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* 100% Horizontal Carousel Track (Single Row) */}
        <div className="relative group/carousel">
          {/* Subtle edge fades to indicate horizontal scrollability */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#081008] to-transparent z-10 pointer-events-none hidden sm:block" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#081008] to-transparent z-10 pointer-events-none hidden sm:block" />
          )}

          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth scrollbar-none snap-x snap-mandatory py-2 px-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {parks.map((park) => (
              <div
                key={park.id}
                className="w-[260px] sm:w-[280px] flex-shrink-0 snap-start p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-green/40 transition-all duration-300 group shadow-lg flex flex-col justify-between hover:bg-white/[0.05]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-brand-gold px-2.5 py-0.5 rounded-full bg-brand-gold/10 border border-brand-gold/20">
                      {park.tagline}
                    </span>
                    {renderIcon(park.icon)}
                  </div>

                  <h4 className="text-lg font-serif font-bold text-white group-hover:text-brand-green transition-colors leading-tight">
                    {park.name}
                  </h4>
                  <p className="text-xs text-gray-400 mb-4">{park.region}</p>
                </div>

                <div className="pt-3.5 border-t border-white/10 flex items-end justify-between">
                  <div>
                    <div className="text-2xl sm:text-3xl font-bold text-white leading-none">
                      {park.tempC}°<span className="text-xs font-normal text-gray-400">C</span>
                    </div>
                    <p className="text-[11px] text-emerald-300 font-medium mt-1">
                      {park.condition}
                    </p>
                  </div>

                  <div className="text-right text-[11px] text-gray-400 flex items-center gap-1">
                    <Wind className="w-3 h-3 text-gray-400" />
                    <span>{park.windKm} km/h</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveParkWeather;
