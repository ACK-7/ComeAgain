import React, { useState, useRef, useEffect } from 'react';
import { useCurrency, CURRENCIES, type CurrencyCode } from '../context/CurrencyContext';
import { ChevronDown, Globe } from 'lucide-react';

interface CurrencySelectorProps {
  compact?: boolean;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({ compact = false }) => {
  const { currency, setCurrency, currentCurrencyInfo } = useCurrency();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 font-bold tracking-wider uppercase transition-all rounded-full border ${
          compact
            ? 'px-3 py-1.5 text-xs bg-white/10 border-white/20 text-white hover:bg-white/20'
            : 'px-3.5 py-1.5 text-xs bg-white/10 border-white/25 text-white hover:bg-white/20 hover:border-brand-green/60 shadow-sm backdrop-blur-md'
        }`}
        aria-label="Select Currency"
      >
        <Globe className="w-3.5 h-3.5 text-brand-green shrink-0" />
        <span>{currentCurrencyInfo.flag}</span>
        <span className="font-bold text-white tracking-wide">{currency}</span>
        <ChevronDown className={`w-3 h-3 text-gray-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-[#0c1810] rounded-2xl shadow-2xl border border-white/15 py-2 z-50 animate-in fade-in zoom-in-95 duration-150 backdrop-blur-xl">
          <div className="px-3 py-1 text-[10px] uppercase font-bold tracking-wider text-brand-green border-b border-white/10">
            Select Currency
          </div>
          {(Object.keys(CURRENCIES) as CurrencyCode[]).map((code) => {
            const item = CURRENCIES[code];
            const isSelected = currency === code;
            return (
              <button
                key={code}
                type="button"
                onClick={() => {
                  setCurrency(code);
                  setIsOpen(false);
                }}
                className={`w-full px-3 py-2 text-left flex items-center justify-between text-xs transition-colors ${
                  isSelected
                    ? 'bg-brand-green text-white font-bold'
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span>{item.flag}</span>
                  <span>{code}</span>
                </div>
                <span className="text-[11px] text-gray-400 font-mono">{item.symbol}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
