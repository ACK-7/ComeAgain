import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

const VisualMap: React.FC = () => {
  return (
    <div className="relative w-full bg-brand-green/5 rounded-3xl overflow-hidden p-8 border border-brand-green/10 mb-16">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-serif text-brand-dark flex items-center gap-3">
          <Navigation className="text-brand-green w-6 h-6 rotate-45" />
          Journey Visualized
        </h3>
        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 bg-white px-4 py-1.5 rounded-full shadow-sm">Safari Flow Map</span>
      </div>

      <div className="relative h-[400px] md:h-[500px] w-full">
        {/* Stylized SVG Map Base */}
        <svg viewBox="0 0 800 600" className="w-full h-full drop-shadow-2xl">
          {/* Abstract Uganda-like shape */}
          <path 
            d="M200,50 Q400,20 600,100 Q800,200 700,400 Q600,550 400,580 Q200,550 100,400 Q50,200 200,50" 
            fill="#f9fafb" 
            stroke="#e5e7eb" 
            strokeWidth="2"
          />
          
          {/* Water Bodies (Lake Victoriaish) */}
          <circle cx="500" cy="550" r="100" fill="#e0f2fe" opacity="0.5" />
          
          {/* Nile River Abstract Path */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M480,550 L450,450 L460,350 L400,250 L420,150"
            fill="none"
            stroke="#bae6fd"
            strokeWidth="8"
            strokeLinecap="round"
          />

          {/* Safari Route Path */}
          <motion.path
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, ease: "linear" }}
            d="M400,520 L400,380 L350,220 L350,150"
            fill="none"
            stroke="#6ab43e"
            strokeWidth="3"
            strokeDasharray="8,8"
          />

          {/* Key Location Markers */}
          
          {/* Kampala */}
          <g transform="translate(400, 520)">
            <circle r="6" fill="#0c1106" />
            <motion.circle 
              animate={{ scale: [1, 2], opacity: [0.5, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              r="12" 
              fill="#0c1106" 
            />
            <text x="15" y="5" className="text-[14px] font-bold fill-brand-dark font-serif uppercase tracking-widest">Kampala (Start)</text>
          </g>

          {/* Ziwa Rhino Sanctuary */}
          <g transform="translate(400, 380)">
             <circle r="6" fill="#0c1106" />
             <text x="15" y="5" className="text-[14px] font-bold fill-brand-dark font-serif uppercase tracking-widest">Ziwa Rhinos</text>
             <text x="15" y="22" className="text-[10px] fill-gray-400 font-sans uppercase">Day 1 Stopover</text>
          </g>

          {/* Murchison Falls */}
          <g transform="translate(350, 150)">
             <motion.path 
               animate={{ y: [0, -5, 0] }}
               transition={{ repeat: Infinity, duration: 1.5 }}
               d="M0,0 L-5,-15 L5,-15 Z" 
               fill="#ef4444" 
             />
             <circle r="8" fill="#ef4444" />
             <motion.circle 
                animate={{ scale: [1, 2.5], opacity: [0.4, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                r="10" 
                fill="#ef4444" 
             />
             <text x="15" y="5" className="text-[16px] font-black fill-brand-dark font-serif uppercase tracking-widest">Murchison Falls</text>
             <text x="15" y="25" className="text-[10px] fill-gray-500 font-sans uppercase font-bold tracking-tighter">Wildlife & Nile Cruise</text>
          </g>
        </svg>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2">
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 bg-[#6ab43e] rounded-full border-2 border-white shadow-sm" />
             <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Adventure Path</span>
          </div>
          <div className="flex items-center gap-3">
             <div className="w-3 h-3 bg-[#ef4444] rounded-full border-2 border-white shadow-sm" />
             <span className="text-[11px] font-bold text-gray-500 uppercase tracking-widest">Major National Park</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisualMap;
