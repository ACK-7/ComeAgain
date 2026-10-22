import React, { useState } from 'react';
import {
  X,
  Sparkles,
  Plus,
  Trash2,
  Calendar,
  DollarSign,
  MapPin,
  Car,
  Hotel,
  CheckCircle2,
  XCircle,
  Image as ImageIcon,
} from 'lucide-react';
import type { SafariPackageItem, ItineraryDay } from '../types/adminTypes';
import { ImageUploadPicker } from './ImageUploadPicker';
import { PACKAGE_CATEGORIES } from '../../data/packageCategories';

const createEmptyPackage = (): SafariPackageItem => ({
  id: '',
  slug: '',
  title: '',
  category: 'Wildlife Safaris',
  durationDays: 1,
  durationNights: 0,
  price: '',
  priceUSD: 0,
  priceUGX: 0,
  per: '1 person',
  wildlife: [],
  highlights: [],
  image: '',
  featured: false,
  status: 'published',
  details: {
    duration: '1 Day',
    location: '',
    transport: '4x4 Custom Safari Land Cruiser with Pop-up Roof',
    accommodation: '',
    gallery: [],
    itinerary: [],
    inclusions: [],
    exclusions: [],
  },
});

interface PackageFormModalProps {
  pkg: SafariPackageItem | null;
  isOpen: boolean;
  onClose: () => void;
  onSave: (pkg: SafariPackageItem) => void;
}

export const PackageFormModal: React.FC<PackageFormModalProps> = ({
  pkg,
  isOpen,
  onClose,
  onSave,
}) => {
  const [activeTab, setActiveTab] = useState<'general' | 'itinerary' | 'gallery' | 'inclusions'>('general');

  // Form State
  const [formData, setFormData] = useState<SafariPackageItem>(() => pkg || createEmptyPackage());

  // Inputs for adding items
  const [highlightInput, setHighlightInput] = useState('');
  const [wildlifeInput, setWildlifeInput] = useState('');
  const [inclusionInput, setInclusionInput] = useState('');
  const [exclusionInput, setExclusionInput] = useState('');
  const [newGalleryImage, setNewGalleryImage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const slug = formData.slug || formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const priceStr = formData.price.includes('$') ? formData.price : `$${formData.price}`;

    const updatedPackage: SafariPackageItem = {
      ...formData,
      slug,
      price: priceStr,
      details: {
        ...formData.details,
        location: formData.details?.location?.trim() || 'Uganda National Parks',
        duration: `${formData.durationDays} Days / ${formData.durationNights ?? formData.durationDays - 1} Nights`,
      },
    };

    onSave(updatedPackage);
  };

  // Itinerary Day Methods
  const addItineraryDay = () => {
    const nextDayNum = (formData.details.itinerary?.length || 0) + 1;
    const newDay: ItineraryDay = {
      day: nextDayNum,
      title: `Day ${nextDayNum} - Safari Game Activity & Exploration`,
      description: 'Morning and afternoon game drives tracking wildlife with scenic meal stops.',
      meals: 'Breakfast, Lunch, Dinner',
      stay: formData.details.accommodation || 'Safari Lodge',
    };

    setFormData({
      ...formData,
      details: {
        ...formData.details,
        itinerary: [...(formData.details.itinerary || []), newDay],
      },
    });
  };

  const updateItineraryDay = (index: number, updatedDay: ItineraryDay) => {
    const updatedList = [...formData.details.itinerary];
    updatedList[index] = updatedDay;
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        itinerary: updatedList,
      },
    });
  };

  const removeItineraryDay = (index: number) => {
    const filtered = formData.details.itinerary
      .filter((_, i) => i !== index)
      .map((d, i) => ({ ...d, day: i + 1 })); // renumber days

    setFormData({
      ...formData,
      details: {
        ...formData.details,
        itinerary: filtered,
      },
    });
  };

  // Highlights & Tags Methods
  const addHighlight = () => {
    if (highlightInput.trim()) {
      setFormData({
        ...formData,
        highlights: [...formData.highlights, highlightInput.trim()],
      });
      setHighlightInput('');
    }
  };

  const removeHighlight = (idx: number) => {
    setFormData({
      ...formData,
      highlights: formData.highlights.filter((_, i) => i !== idx),
    });
  };

  const addWildlife = () => {
    if (wildlifeInput.trim()) {
      setFormData({
        ...formData,
        wildlife: [...formData.wildlife, wildlifeInput.trim()],
      });
      setWildlifeInput('');
    }
  };

  const removeWildlife = (idx: number) => {
    setFormData({
      ...formData,
      wildlife: formData.wildlife.filter((_, i) => i !== idx),
    });
  };

  const addInclusion = () => {
    if (inclusionInput.trim()) {
      setFormData({
        ...formData,
        details: {
          ...formData.details,
          inclusions: [...formData.details.inclusions, inclusionInput.trim()],
        },
      });
      setInclusionInput('');
    }
  };

  const removeInclusion = (idx: number) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        inclusions: formData.details.inclusions.filter((_, i) => i !== idx),
      },
    });
  };

  const addExclusion = () => {
    if (exclusionInput.trim()) {
      setFormData({
        ...formData,
        details: {
          ...formData.details,
          exclusions: [...formData.details.exclusions, exclusionInput.trim()],
        },
      });
      setExclusionInput('');
    }
  };

  const removeExclusion = (idx: number) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        exclusions: formData.details.exclusions.filter((_, i) => i !== idx),
      },
    });
  };

  const addGalleryImage = (img: string) => {
    if (img) {
      setFormData({
        ...formData,
        details: {
          ...formData.details,
          gallery: [...(formData.details.gallery || []), img],
        },
      });
      setNewGalleryImage('');
    }
  };

  const removeGalleryImage = (idx: number) => {
    setFormData({
      ...formData,
      details: {
        ...formData.details,
        gallery: formData.details.gallery.filter((_, i) => i !== idx),
      },
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div
        className="relative flex h-full max-h-[92vh] w-full max-w-4xl flex-col rounded-3xl bg-[#0f170e] border border-[#25391c] text-white shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#213318] px-6 py-4 bg-[#0a0f08]">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-brand-green" />
            <h3 className="text-base font-bold text-white font-serif">
              {pkg ? 'Edit Safari Package & Itinerary' : 'Create New Safari Package'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-2 text-zinc-400 hover:bg-[#1a2914] hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Section Tabs */}
        <div className="flex items-center border-b border-[#203218] px-6 bg-[#0c1308] text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className={`py-3 px-4 font-semibold transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'general'
                ? 'border-brand-green text-brand-green'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <span>1. General & Pricing</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('itinerary')}
            className={`py-3 px-4 font-semibold transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'itinerary'
                ? 'border-brand-green text-brand-green'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <Calendar className="h-3.5 w-3.5" />
            <span>2. Day-by-Day Itinerary ({formData.details.itinerary?.length || 0})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('gallery')}
            className={`py-3 px-4 font-semibold transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'gallery'
                ? 'border-brand-green text-brand-green'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <ImageIcon className="h-3.5 w-3.5" />
            <span>3. Trip Photo Gallery ({formData.details.gallery?.length || 0})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('inclusions')}
            className={`py-3 px-4 font-semibold transition-colors border-b-2 flex items-center gap-2 ${
              activeTab === 'inclusions'
                ? 'border-brand-green text-brand-green'
                : 'border-transparent text-zinc-400 hover:text-white'
            }`}
          >
            <span>4. Inclusions & Exclusions</span>
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* TAB 1: General & Pricing */}
          {activeTab === 'general' && (
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Package Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 3 Days Murchison Falls Safari"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  >
                    {PACKAGE_CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Duration (Days / Nights)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="number"
                      min={1}
                      value={formData.durationDays}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          durationDays: parseInt(e.target.value, 10) || 1,
                          durationNights: Math.max(0, (parseInt(e.target.value, 10) || 1) - 1),
                        })
                      }
                      className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white text-center focus:outline-none"
                    />
                    <input
                      type="number"
                      min={0}
                      value={formData.durationNights ?? (formData.durationDays - 1)}
                      onChange={(e) =>
                        setFormData({ ...formData, durationNights: parseInt(e.target.value, 10) || 0 })
                      }
                      className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white text-center focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Pricing Basis (per)
                  </label>
                  <input
                    type="text"
                    placeholder="1 person"
                    value={formData.per}
                    onChange={(e) => setFormData({ ...formData, per: e.target.value })}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              {/* Pricing Blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-[#141f12] border border-[#25391c]">
                <div>
                  <label className="block text-xs font-semibold text-emerald-400 mb-1 flex items-center gap-1">
                    <DollarSign className="h-3.5 w-3.5" />
                    Display Price (USD) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="1450$"
                    value={formData.price}
                    onChange={(e) => {
                      const raw = e.target.value;
                      const num = parseInt(raw.replace(/[^0-9]/g, ''), 10) || 0;
                      setFormData({
                        ...formData,
                        price: raw,
                        priceUSD: num,
                        priceUGX: num * 3750,
                      });
                    }}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Local UGX Equivalent (Auto-calculated)
                  </label>
                  <input
                    type="number"
                    value={formData.priceUGX || 0}
                    onChange={(e) =>
                      setFormData({ ...formData, priceUGX: parseInt(e.target.value, 10) || 0 })
                    }
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none font-mono"
                  />
                </div>
              </div>

              {/* Primary Location, Transport, Accommodation */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5 text-brand-green" />
                    Safari Location / Park
                  </label>
                  <input
                    type="text"
                    placeholder="Murchison Falls National Park"
                    value={formData.details.location}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        details: { ...formData.details, location: e.target.value },
                      })
                    }
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                    <Car className="h-3.5 w-3.5 text-brand-accent" />
                    Safari Transport
                  </label>
                  <input
                    type="text"
                    placeholder="4x4 Safari Land Cruiser"
                    value={formData.details.transport}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        details: { ...formData.details, transport: e.target.value },
                      })
                    }
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1 flex items-center gap-1">
                    <Hotel className="h-3.5 w-3.5 text-amber-400" />
                    Lodge Accommodation
                  </label>
                  <input
                    type="text"
                    placeholder="Parkside Safari Lodge"
                    value={formData.details.accommodation}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        details: { ...formData.details, accommodation: e.target.value },
                      })
                    }
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              {/* Cover Photo Upload with Local PC File Support */}
              <div className="pt-2">
                <ImageUploadPicker
                  label="Package Main Hero Cover Photo *"
                  value={formData.image}
                  onChange={(val) => setFormData({ ...formData, image: val })}
                  helperText="Upload an image from your computer, choose from the website gallery, or paste a link."
                />
              </div>

              {/* Highlights & Wildlife Tags */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Quick Highlights
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="e.g. Top of the falls hike"
                      value={highlightInput}
                      onChange={(e) => setHighlightInput(e.target.value)}
                      className="flex-1 rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1.5 text-xs text-white focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={addHighlight}
                      className="rounded-xl bg-[#203318] px-3 py-1.5 text-xs text-brand-accent hover:bg-[#2b4421]"
                    >
                      Add
                    </button>
                  </div>
                  <div className="space-y-1">
                    {formData.highlights.map((h, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-lg bg-[#141e11] px-2.5 py-1 text-xs border border-[#223519]"
                      >
                        <span className="truncate">✓ {h}</span>
                        <button
                          type="button"
                          onClick={() => removeHighlight(i)}
                          className="text-zinc-500 hover:text-rose-400"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Key Wildlife Sighted
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      placeholder="e.g. Mountain Gorilla, Lion"
                      value={wildlifeInput}
                      onChange={(e) => setWildlifeInput(e.target.value)}
                      className="flex-1 rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1.5 text-xs text-white focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={addWildlife}
                      className="rounded-xl bg-[#203318] px-3 py-1.5 text-xs text-brand-accent hover:bg-[#2b4421]"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {formData.wildlife.map((w, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 text-xs text-emerald-400"
                      >
                        <span>{w}</span>
                        <button
                          type="button"
                          onClick={() => removeWildlife(i)}
                          className="hover:text-rose-400"
                        >
                          ✕
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Toggles */}
              <div className="flex items-center gap-6 pt-3 border-t border-[#203218]">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                    className="rounded border-[#2a401f] bg-[#141e11] text-brand-green focus:ring-0"
                  />
                  <span className="text-xs font-medium text-zinc-200">Featured on Home Page</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.status === 'published'}
                    onChange={(e) =>
                      setFormData({ ...formData, status: e.target.checked ? 'published' : 'draft' })
                    }
                    className="rounded border-[#2a401f] bg-[#141e11] text-brand-green focus:ring-0"
                  />
                  <span className="text-xs font-medium text-zinc-200">Published Live</span>
                </label>
              </div>
            </div>
          )}

          {/* TAB 2: Day-by-Day Itinerary Builder */}
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-[#203218]">
                <div>
                  <h4 className="text-sm font-bold text-white font-serif">
                    Safari Day-by-Day Itinerary Schedule
                  </h4>
                  <p className="text-xs text-zinc-400">
                    Detailed itinerary displayed on the package detail page.
                  </p>
                </div>

                <button
                  type="button"
                  onClick={addItineraryDay}
                  className="inline-flex items-center gap-1.5 rounded-xl bg-brand-green px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-[#4ea84e] transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>Add Next Day</span>
                </button>
              </div>

              <div className="space-y-4">
                {formData.details.itinerary?.map((dayItem, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-[#141e11] border border-[#233519] p-4 space-y-3 relative group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="rounded-lg bg-brand-green px-2.5 py-0.5 text-xs font-bold text-black">
                          Day {dayItem.day}
                        </span>
                        <input
                          type="text"
                          placeholder="Day Title (e.g. Pickup and Transfer to Murchison Falls)"
                          value={dayItem.title}
                          onChange={(e) =>
                            updateItineraryDay(idx, { ...dayItem, title: e.target.value })
                          }
                          className="rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1.5 text-xs text-white font-semibold w-72 sm:w-96 focus:border-brand-green focus:outline-none"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => removeItineraryDay(idx)}
                        className="text-zinc-500 hover:text-rose-400 p-1"
                        title="Delete this Day"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Day description */}
                    <div>
                      <textarea
                        rows={3}
                        placeholder="Detailed itinerary description for this day..."
                        value={dayItem.description}
                        onChange={(e) =>
                          updateItineraryDay(idx, { ...dayItem, description: e.target.value })
                        }
                        className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-zinc-200 placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                      />
                    </div>

                    {/* Meals and Accommodation */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                      <div>
                        <label className="block text-[10px] text-zinc-400 mb-0.5">
                          Meals Included
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Breakfast, Lunch, Dinner"
                          value={dayItem.meals}
                          onChange={(e) =>
                            updateItineraryDay(idx, { ...dayItem, meals: e.target.value })
                          }
                          className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1 text-xs text-white focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-[10px] text-zinc-400 mb-0.5">
                          Overnight Stay (Lodge / Camp)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. Parkside Safari Lodge"
                          value={dayItem.stay}
                          onChange={(e) =>
                            updateItineraryDay(idx, { ...dayItem, stay: e.target.value })
                          }
                          className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1 text-xs text-white focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Trip Photo Gallery */}
          {activeTab === 'gallery' && (
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-bold text-white font-serif">
                  Safari Photo Gallery & Visuals
                </h4>
                <p className="text-xs text-zinc-400">
                  Upload photos from your computer or choose from the safari library to appear in the package photo grid.
                </p>
              </div>

              {/* Add to gallery picker */}
              <div className="p-4 rounded-2xl bg-[#141e11] border border-[#233519]">
                <ImageUploadPicker
                  label="Add Image to Package Gallery"
                  value={newGalleryImage}
                  onChange={(img) => {
                    if (img) addGalleryImage(img);
                  }}
                  helperText="Select or upload a photo to append to this package's photo grid."
                />
              </div>

              {/* Existing Gallery Grid */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-zinc-300">
                  Current Gallery Images ({formData.details.gallery?.length || 0})
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {formData.details.gallery?.map((img, idx) => (
                    <div
                      key={idx}
                      className="group relative overflow-hidden rounded-2xl border border-[#25391c] bg-black/40 h-28"
                    >
                      <img src={img} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                      <button
                        type="button"
                        onClick={() => removeGalleryImage(idx)}
                        className="absolute top-2 right-2 rounded-lg bg-black/80 p-1 text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-rose-500 hover:text-white"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: Inclusions & Exclusions */}
          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4" />
                  What is Included
                </h4>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. Park entrance fees"
                    value={inclusionInput}
                    onChange={(e) => setInclusionInput(e.target.value)}
                    className="flex-1 rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1.5 text-xs text-white focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={addInclusion}
                    className="rounded-xl bg-[#203318] px-3 py-1.5 text-xs text-brand-accent hover:bg-[#2b4421]"
                  >
                    Add
                  </button>
                </div>

                <div className="space-y-1.5">
                  {formData.details.inclusions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl bg-[#141e11] px-3 py-1.5 text-xs border border-[#223519]"
                    >
                      <span className="text-zinc-200">✓ {item}</span>
                      <button
                        type="button"
                        onClick={() => removeInclusion(idx)}
                        className="text-zinc-500 hover:text-rose-400"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exclusions */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <XCircle className="h-4 w-4" />
                  What is Excluded
                </h4>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="e.g. International airfare"
                    value={exclusionInput}
                    onChange={(e) => setExclusionInput(e.target.value)}
                    className="flex-1 rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1.5 text-xs text-white focus:outline-none"
                  />
                  <button
                    type="button"
                    onClick={addExclusion}
                    className="rounded-xl bg-[#203318] px-3 py-1.5 text-xs text-brand-accent hover:bg-[#2b4421]"
                  >
                    Add
                  </button>
                </div>

                <div className="space-y-1.5">
                  {formData.details.exclusions.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between rounded-xl bg-[#141e11] px-3 py-1.5 text-xs border border-[#223519]"
                    >
                      <span className="text-zinc-200">✗ {item}</span>
                      <button
                        type="button"
                        onClick={() => removeExclusion(idx)}
                        className="text-zinc-500 hover:text-rose-400"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="flex items-center justify-between pt-4 border-t border-[#213318]">
            <div className="text-xs text-zinc-400">
              Matches public website schema in <code>siteData.ts</code>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:bg-[#172314] hover:text-white transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-6 py-2 text-xs cursor-pointer shadow-md shadow-brand-green/20"
              >
                Save Safari Package
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
