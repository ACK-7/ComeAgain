import { applyBusinessSettings } from '../../services/websiteContent';
import React, { useState, useEffect } from 'react';
import {
  Settings,
  Save,
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  DollarSign,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';
import type { BusinessSettings } from '../types/adminTypes';
import { adminApi } from '../services/adminApi';

export const AdminSettings: React.FC = () => {
  const [settings, setSettings] = useState<BusinessSettings | null>(null);
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    adminApi.getSettings().then(setSettings).catch(() => {});
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!settings) return;

    applyBusinessSettings(await adminApi.saveSettings(settings));
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  if (!settings) return null;

  return (
    <div className="space-y-6 animate-fadeIn max-w-4xl">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <Settings className="h-6 w-6 text-brand-green" />
            Business Information & Settings
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Global configuration for phone numbers, WhatsApp links, official office address, and currency rates.
          </p>
        </div>

        {isSaved && (
          <div className="flex items-center gap-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 px-3.5 py-1.5 text-xs text-emerald-400 font-medium animate-fadeIn">
            <CheckCircle2 className="h-4 w-4" />
            <span>Settings updated successfully!</span>
          </div>
        )}
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Core Identity */}
        <div className="rounded-2xl bg-[#11190e] border border-[#223519] p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-brand-green flex items-center gap-2">
            <ShieldCheck className="h-4 w-4" />
            Company Identity & Tagline
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Company Legal Name
              </label>
              <input
                type="text"
                value={settings.companyName}
                onChange={(e) => setSettings({ ...settings, companyName: e.target.value })}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Company Tagline
              </label>
              <input
                type="text"
                value={settings.tagline}
                onChange={(e) => setSettings({ ...settings, tagline: e.target.value })}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Contact Numbers & Channels */}
        <div className="rounded-2xl bg-[#11190e] border border-[#223519] p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-brand-accent flex items-center gap-2">
            <Phone className="h-4 w-4" />
            Official Contact & Direct Chat
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-brand-green" />
                Phone Display (Local)
              </label>
              <input
                type="text"
                value={settings.phoneDisplay}
                onChange={(e) => setSettings({ ...settings, phoneDisplay: e.target.value })}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5 text-brand-green" />
                Phone International Link
              </label>
              <input
                type="text"
                value={settings.phoneRaw}
                onChange={(e) => setSettings({ ...settings, phoneRaw: e.target.value })}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1.5">
                <MessageCircle className="h-3.5 w-3.5 text-[#25D366]" />
                WhatsApp Direct Number
              </label>
              <input
                type="text"
                value={settings.whatsappDisplay}
                onChange={(e) => setSettings({ ...settings, whatsappDisplay: e.target.value })}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5 text-blue-400" />
                Primary Inquiries Email
              </label>
              <input
                type="email"
                value={settings.primaryEmail}
                onChange={(e) => setSettings({ ...settings, primaryEmail: e.target.value })}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Physical Office & Country */}
        <div className="rounded-2xl bg-[#11190e] border border-[#223519] p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-zinc-300 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-brand-green" />
            Physical Office Address
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-zinc-300 mb-1">
                Street & Building Address
              </label>
              <input
                type="text"
                value={settings.physicalAddress}
                onChange={(e) => setSettings({ ...settings, physicalAddress: e.target.value })}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">City & Country</label>
              <input
                type="text"
                value={`${settings.city}, ${settings.country}`}
                onChange={(e) => {
                  const [c, co] = e.target.value.split(',');
                  setSettings({ ...settings, city: c?.trim() || '', country: co?.trim() || '' });
                }}
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Currency Rates */}
        <div className="rounded-2xl bg-[#11190e] border border-[#223519] p-6 shadow-xl space-y-4">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider text-emerald-400 flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Currency Conversion Baselines (from 1 USD)
          </h3>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">USD to UGX</label>
              <input
                type="number"
                value={settings.currencyRates.USD_TO_UGX}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    currencyRates: {
                      ...settings.currencyRates,
                      USD_TO_UGX: parseFloat(e.target.value) || 3750,
                    },
                  })
                }
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">USD to EUR</label>
              <input
                type="number"
                step="0.01"
                value={settings.currencyRates.USD_TO_EUR}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    currencyRates: {
                      ...settings.currencyRates,
                      USD_TO_EUR: parseFloat(e.target.value) || 0.92,
                    },
                  })
                }
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-300 mb-1">USD to GBP</label>
              <input
                type="number"
                step="0.01"
                value={settings.currencyRates.USD_TO_GBP}
                onChange={(e) =>
                  setSettings({
                    ...settings,
                    currencyRates: {
                      ...settings.currencyRates,
                      USD_TO_GBP: parseFloat(e.target.value) || 0.78,
                    },
                  })
                }
                className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none font-mono"
              />
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-zinc-700 p-6 space-y-4">
          <h3 className="font-semibold">Social links & licenses</h3>
          {(['facebook', 'instagram', 'tripadvisor'] as const).map(network => <label key={network} className="block text-sm capitalize">{network}<input type="url" className="block w-full mt-1 bg-zinc-900 rounded p-3" value={settings.socials[network]} onChange={e => setSettings({ ...settings, socials: { ...settings.socials, [network]: e.target.value } })} /></label>)}
          <label className="block text-sm">Licenses (one per line)<textarea className="block w-full mt-1 bg-zinc-900 rounded p-3" value={settings.licenses.join('\n')} onChange={e => setSettings({ ...settings, licenses: e.target.value.split('\n') })} /></label>
        </div>
        {/* Submit Bar */}
        <div className="flex items-center justify-end gap-3 pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-6 py-2.5 text-xs transition-all shadow-lg shadow-brand-green/20 cursor-pointer"
          >
            <Save className="h-4 w-4" />
            <span>Save Business Settings</span>
          </button>
        </div>
      </form>
    </div>
  );
};
export default AdminSettings;
