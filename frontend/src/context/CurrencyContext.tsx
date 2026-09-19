import React, { createContext, useContext, useState, useEffect } from 'react';

export type CurrencyCode = 'USD' | 'EUR' | 'GBP' | 'UGX';

interface CurrencyInfo {
  code: CurrencyCode;
  symbol: string;
  rate: number; // multiplier from USD
  label: string;
  flag: string;
}

export const CURRENCIES: Record<CurrencyCode, CurrencyInfo> = {
  USD: { code: 'USD', symbol: '$', rate: 1, label: 'USD ($)', flag: '🇺🇸' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, label: 'EUR (€)', flag: '🇪🇺' },
  GBP: { code: 'GBP', symbol: '£', rate: 0.79, label: 'GBP (£)', flag: '🇬🇧' },
  UGX: { code: 'UGX', symbol: 'USh ', rate: 3800, label: 'UGX (USh)', flag: '🇺🇬' },
};

interface CurrencyContextType {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  formatPrice: (priceUSD: number | string | undefined) => string;
  currentCurrencyInfo: CurrencyInfo;
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export const CurrencyProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currency, setCurrencyState] = useState<CurrencyCode>('USD');

  useEffect(() => {
    const saved = localStorage.getItem('comeagain_currency') as CurrencyCode;
    if (saved && CURRENCIES[saved]) {
      setCurrencyState(saved);
    }
  }, []);

  const setCurrency = (c: CurrencyCode) => {
    setCurrencyState(c);
    localStorage.setItem('comeagain_currency', c);
  };

  const formatPrice = (priceUSD: number | string | undefined): string => {
    if (!priceUSD) return 'Contact Us';

    let numVal: number | null = null;

    if (typeof priceUSD === 'number') {
      numVal = priceUSD;
    } else if (typeof priceUSD === 'string') {
      // Clean string like "$2,450" or "From $1800"
      const cleaned = priceUSD.replace(/[^0-9.]/g, '');
      const parsed = parseFloat(cleaned);
      if (!isNaN(parsed) && parsed > 0) {
        numVal = parsed;
      }
    }

    if (numVal === null) return String(priceUSD);

    const info = CURRENCIES[currency];
    const converted = numVal * info.rate;

    if (currency === 'UGX') {
      // Round to thousands for UGX
      const rounded = Math.round(converted / 1000) * 1000;
      return `${info.symbol}${rounded.toLocaleString()}`;
    }

    // Round to nearest integer for USD, EUR, GBP
    const rounded = Math.round(converted);
    return `${info.symbol}${rounded.toLocaleString()}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        setCurrency,
        formatPrice,
        currentCurrencyInfo: CURRENCIES[currency],
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};
