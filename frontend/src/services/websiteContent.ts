import { useEffect, useState } from 'react';
import type { BlogPost } from '../data/blogData';
import type { BusinessSettings } from '../admin/types/adminTypes';
import { businessConfig } from '../data/businessConfig';
import { CURRENCIES } from '../context/CurrencyContext';
import { apiRequest } from './apiClient';
import { normalizeBlogArticles } from './blogArticles';

export function applyBusinessSettings(settings: BusinessSettings): void {
  businessConfig.name = settings.companyName;
  businessConfig.tagline = settings.tagline;
  businessConfig.email.primary = settings.primaryEmail;
  businessConfig.email.mailto = `mailto:${settings.primaryEmail}`;
  businessConfig.phone.display = settings.phoneDisplay;
  businessConfig.phone.international = settings.phoneRaw;
  businessConfig.phone.raw = settings.phoneRaw;
  businessConfig.phone.telLink = `tel:${settings.phoneRaw}`;
  businessConfig.whatsapp.display = settings.whatsappDisplay;
  businessConfig.whatsapp.international = settings.whatsappRaw;
  businessConfig.whatsapp.number = settings.whatsappRaw.replace(/\D/g, '');
  businessConfig.whatsapp.rawWithPlus = settings.whatsappRaw;
  businessConfig.location = `${settings.city}, ${settings.country}`;
  Object.assign(businessConfig.address, { street: settings.physicalAddress, city: settings.city, country: settings.country });
  businessConfig.licenses = settings.licenses;
  businessConfig.socials = settings.socials;
  CURRENCIES.UGX.rate = settings.currencyRates.USD_TO_UGX;
  CURRENCIES.EUR.rate = settings.currencyRates.USD_TO_EUR;
  CURRENCIES.GBP.rate = settings.currencyRates.USD_TO_GBP;
}

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    let active = true;
    apiRequest<BlogPost[]>('/blog').then(data => { if (active) setPosts(normalizeBlogArticles(data)); })
      .catch(() => { if (active) setError('The safari journal is temporarily unavailable. Please try again.'); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, []);
  return { posts, loading, error };
}
