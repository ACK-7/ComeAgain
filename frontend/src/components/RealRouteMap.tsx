import React, { useEffect, useRef, useState } from 'react';
import { Info } from 'lucide-react';

interface RealRouteMapProps {
  locations?: Array<{
    name: string;
    lat: number;
    lng: number;
    description: string;
  }>;
}

const RealRouteMap: React.FC<RealRouteMapProps> = ({ locations }) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [scriptsLoading, setScriptsLoading] = useState(true);

  useEffect(() => {
    // 1. DYNAMICALLY LOAD LEAFLET FROM CDN (Bypasses Vite Bundler Errors)
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.async = true;
    script.onload = () => {
      setScriptsLoading(false);
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (scriptsLoading || !locations || locations.length === 0 || !mapRef.current) return;

    // Wait for the 'L' global variable to be available from the CDN
    const L = (window as any).L;
    if (!L) return;

    // 2. INITIALIZE THE MAP
    const map = L.map(mapRef.current, {
      scrollWheelZoom: false,
      zoomControl: true
    });

    // 3. ADD TILE LAYER (OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);

    // 4. DRAW THE JOURNEY LINE (Polyline)
    const coordinates = locations.map(loc => [loc.lat, loc.lng]);
    const polyline = L.polyline(coordinates, {
      color: '#2563eb', // Professional Journey Blue
      weight: 5,
      opacity: 0.8,
      smoothFactor: 1,
      dashArray: '10, 10', // Dashed look like the reference
      lineJoin: 'round'
    }).addTo(map);

    // 5. ADD MARKERS
    locations.forEach((loc, idx) => {
      const isStart = idx === 0;
      const isEnd = idx === locations.length - 1;

      const markerHtml = `
        <div style="
          background-color: ${isStart ? '#0c1106' : isEnd ? '#ef4444' : '#6ab43e'};
          width: 14px;
          height: 14px;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 0 15px rgba(0,0,0,0.4);
        "></div>
      `;

      const customIcon = L.divIcon({
        html: markerHtml,
        className: '',
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });

      L.marker([loc.lat, loc.lng], { icon: customIcon })
        .bindPopup(`<strong style="font-family: serif; text-transform: uppercase;">${loc.name}</strong><br/><span style="font-size: 10px; color: #666;">${loc.description}</span>`)
        .addTo(map);
    });

    // 6. AUTO-FIT THE MAP TO THE ROUTE
    map.fitBounds(polyline.getBounds(), { padding: [50, 50] });
    setMapLoaded(true);

    // Cleanup map on unmount
    return () => {
      map.remove();
    };
  }, [scriptsLoading, locations]);

  if (!locations || locations.length === 0) {
    return <div className="h-[400px] bg-gray-100 animate-pulse rounded-3xl" />;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 mb-24">
      {/* MAP COLUMN - WITH JOURNEY LINES */}
      <div className="lg:w-2/3 h-[450px] md:h-[550px] relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-2xl z-20">
        <div ref={mapRef} style={{ height: '100%', width: '100%' }} />
        
        {!mapLoaded && (
          <div className="absolute inset-0 bg-white/50 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="flex flex-col items-center gap-4">
              <div className="w-8 h-8 border-4 border-brand-green border-t-transparent rounded-full animate-spin" />
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Generating Journey Route...</span>
            </div>
          </div>
        )}

        {/* Map Label Overlay */}
        <div className="absolute top-6 left-6 z-[1000] bg-white/90 backdrop-blur-md px-6 py-3 rounded-2xl border border-gray-100 shadow-xl flex items-center gap-3">
           <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse" />
           <span className="text-xs font-bold text-brand-dark uppercase tracking-widest">Interactive Journey Map</span>
        </div>
      </div>

      {/* TIMELINE COLUMN */}
      <div className="lg:w-1/3 flex flex-col justify-center">
        <div className="space-y-6">
          <div className="mb-8">
             <h3 className="text-[10px] uppercase font-bold tracking-[0.3em] text-brand-green mb-2">Safari Narrative</h3>
             <h2 className="text-3xl font-serif text-brand-dark leading-tight">Journey Flow</h2>
          </div>

          <div className="relative pl-8 pr-4 py-2 space-y-8 max-h-[300px] overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-brand-green/30 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-brand-green">
            <div className="absolute left-[7px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-brand-dark via-brand-green to-brand-green/10" />

            {locations.map((loc, idx) => (
              <div key={idx} className="relative group">
                <div className={`absolute -left-[30px] top-1.5 w-4 h-4 rounded-full border-2 border-white shadow-md z-10 
                  ${idx === 0 ? 'bg-brand-dark' : idx === locations.length - 1 ? 'bg-brand-green' : 'bg-brand-green'} transition-transform group-hover:scale-125`} 
                />
                
                <div className="flex flex-col">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-none">
                      {idx === 0 ? 'Departure' : idx === locations.length - 1 ? 'Final Destination' : `Stop ${idx}`}
                    </span>
                  </div>
                  <h4 className="text-base font-serif text-brand-dark font-bold group-hover:text-brand-green transition-colors leading-tight">
                    {loc.name}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 line-clamp-2">
                    {loc.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-brand-dark rounded-3xl text-white shadow-xl relative overflow-hidden group">
             <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <Info className="text-brand-green w-5 h-5" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Travel Tip</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed font-serif italic">
                  "The route through Nakasongola offers the best views of the countryside before reaching the heart of Murchison."
                </p>
             </div>
             <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-brand-green/20 rounded-full blur-2xl group-hover:bg-brand-green/40 transition-all duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealRouteMap;
