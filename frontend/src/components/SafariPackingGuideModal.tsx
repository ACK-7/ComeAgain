import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, CheckSquare, Square, Backpack, Sparkles } from 'lucide-react';

interface ChecklistItem {
  id: string;
  category: string;
  item: string;
  note?: string;
}

const PACKING_ITEMS: ChecklistItem[] = [
  // Gorilla Trekking
  { id: 'g1', category: 'Gorilla & Primate Trekking', item: 'Sturdy waterproof hiking boots with ankle support', note: 'Essential for slippery volcanic terrain' },
  { id: 'g2', category: 'Gorilla & Primate Trekking', item: 'Gardening / puncture-resistant gloves', note: 'Protects hands when gripping prickly stinging nettles' },
  { id: 'g3', category: 'Gorilla & Primate Trekking', item: 'Long hiking socks & tuck-in trousers (or gaiters)', note: 'Prevents safari ants from crawling up legs' },
  { id: 'g4', category: 'Gorilla & Primate Trekking', item: 'Lightweight breathable rain poncho or waterproof jacket', note: 'Rain can occur unexpectedly in mountain rainforests' },
  { id: 'g5', category: 'Gorilla & Primate Trekking', item: 'Small daypack (20–30L) with rain cover', note: 'For water bottle, camera, and packed lunch' },

  // Savannah & Bush Drives
  { id: 's1', category: 'Savannah Game Drives', item: 'Neutral earth-toned clothing (khaki, tan, olive, brown)', note: 'Avoid dark blue & black (attracts tsetse flies); avoid bright white' },
  { id: 's2', category: 'Savannah Game Drives', item: 'Wide-brim safari sun hat with chinstrap', note: 'Sun protection for open pop-up roof drives' },
  { id: 's3', category: 'Savannah Game Drives', item: 'Polarized sunglasses & UV lip balm', note: 'Reduces equatorial glare' },
  { id: 's4', category: 'Savannah Game Drives', item: 'Binoculars (8x42 or 10x42 recommended)', note: 'Vital for spotting leopards and rare birds in distance' },
  { id: 's5', category: 'Savannah Game Drives', item: 'Light fleece or safari jacket for early morning game drives', note: 'Mornings at 6:00 AM can be brisk' },

  // Health & Documentation
  { id: 'h1', category: 'Health & Essential Documents', item: 'Yellow Fever Vaccination Certificate (Yellow Card)', note: 'Mandatory for entry at Entebbe airport' },
  { id: 'h2', category: 'Health & Essential Documents', item: 'Passport valid for at least 6 months + printed e-visa', note: 'Keep physical copies in waterproof pouch' },
  { id: 'h3', category: 'Health & Essential Documents', item: 'Insect repellent with DEET (30%+ concentration)', note: 'Key protection against mosquitoes and sandflies' },
  { id: 'h4', category: 'Health & Essential Documents', item: 'Malaria prophylaxis prescribed by your physician', note: 'Consult travel medicine doctor before departure' },
  { id: 'h5', category: 'Health & Essential Documents', item: 'US Dollars in clean, crisp notes printed after 2013', note: 'Older or torn notes are rejected by banks in Uganda' },

  // Photography & Gear
  { id: 'p1', category: 'Photography & Electronics', item: 'Telephoto camera lens (70-200mm or 100-400mm)', note: 'Gorillas are close (7m), savannah animals further' },
  { id: 'p2', category: 'Photography & Electronics', item: 'Extra camera batteries & high-speed memory cards', note: 'Lodges run on solar; charge when power is on' },
  { id: 'p3', category: 'Photography & Electronics', item: 'UK 3-pin rectangular plug adapter (Type G)', note: 'Standard electrical outlet across Uganda' },
  { id: 'p4', category: 'Photography & Electronics', item: 'Waterproof dry bag / dust cover for camera', note: 'Protects gear from fine savannah dust and rain' },
];

interface SafariPackingGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SafariPackingGuideModal: React.FC<SafariPackingGuideModalProps> = ({ isOpen, onClose }) => {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  const toggleCheck = (id: string) => {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handlePrint = () => {
    window.print();
  };

  const categories = Array.from(new Set(PACKING_ITEMS.map((i) => i.category)));

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-[#0e1711] border border-brand-green/30 rounded-3xl shadow-2xl overflow-hidden z-10 text-white my-8 flex flex-col max-h-[90vh]"
          >
            {/* Header */}
            <div className="p-6 sm:p-8 bg-gradient-to-r from-brand-dark via-[#122016] to-brand-dark border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-brand-green/20 text-brand-green border border-brand-green/30">
                  <Backpack className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Official ComeAgain Concierge Guide</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Ultimate Uganda Safari Packing Checklist
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-bold uppercase tracking-wider text-white transition-colors"
                  title="Print checklist"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                  aria-label="Close packing guide"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Checklist Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1">
              <p className="text-sm text-gray-300 leading-relaxed bg-brand-green/10 border-l-2 border-brand-green p-4 rounded-r-xl">
                Pack smart for Uganda’s microclimates. Soft-sided duffel bags are required for domestic bush flights (max 15kg / 33lbs). Tick off each essential item as you pack!
              </p>

              {categories.map((cat) => (
                <div key={cat} className="space-y-3">
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-gold border-b border-white/10 pb-2">
                    {cat}
                  </h4>
                  <div className="space-y-2.5">
                    {PACKING_ITEMS.filter((i) => i.category === cat).map((item) => {
                      const isChecked = !!checked[item.id];
                      return (
                        <div
                          key={item.id}
                          onClick={() => toggleCheck(item.id)}
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 select-none ${
                            isChecked
                              ? 'bg-brand-green/15 border-brand-green/40 text-gray-300'
                              : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.06]'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0 text-brand-green">
                            {isChecked ? (
                              <CheckSquare className="w-5 h-5 text-brand-green" />
                            ) : (
                              <Square className="w-5 h-5 text-gray-500" />
                            )}
                          </div>
                          <div className="space-y-0.5">
                            <span
                              className={`text-sm font-medium ${
                                isChecked ? 'line-through text-gray-400' : 'text-white'
                              }`}
                            >
                              {item.item}
                            </span>
                            {item.note && (
                              <p className="text-xs text-gray-400 font-light italic">
                                {item.note}
                              </p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-6 bg-brand-dark/95 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                {Object.values(checked).filter(Boolean).length} of {PACKING_ITEMS.length} packed
              </span>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrint}
                  className="sm:hidden inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 text-xs font-bold text-white"
                >
                  <Printer className="w-4 h-4" /> Print
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs uppercase tracking-wider shadow-md"
                >
                  Got It
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SafariPackingGuideModal;
