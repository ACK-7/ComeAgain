import { adminApi } from '../services/adminApi';
import React, { useState, useRef } from 'react';
import {
  Upload,
  Link as LinkIcon,
  X,
  Check,
  FolderOpen,
} from 'lucide-react';

interface ImageUploadPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  helperText?: string;
}

// Curated list of Come Again's existing website images
const PRESET_SAFARI_ASSETS = [
  { name: 'Murchison Falls River Nile', path: 'images/Murchison.webp' },
  { name: 'Bwindi Mountain Gorilla', path: 'images/Gorillaa.webp' },
  { name: 'Tree-Climbing Lion (Ishasha)', path: 'images/tree-lion.webp' },
  { name: 'Kibale Forest Chimpanzee', path: 'images/monkey.webp' },
  { name: 'Budongo Forest Chimps', path: 'images/chimp.webp' },
  { name: 'Kidepo Valley Cape Buffaloes', path: 'images/buffaloes.webp' },
  { name: 'Lake Mburo Giraffes & Zebras', path: 'images/girrafe.webp' },
  { name: 'Jinja Source of River Nile', path: 'images/Nile.webp' },
  { name: 'Sipi Falls & Coffee Trails', path: 'images/sipifalls.webp' },
  { name: 'Sempaya Hot Springs', path: 'images/Sempaya.webp' },
  { name: 'Semuliki Game Reserve', path: 'images/antelope.webp' },
  { name: 'Pian Upe Savannah Leopard', path: 'images/leopard-footer.webp' },
  { name: 'Shoebill & Wetland Birding', path: 'images/bird.webp' },
  { name: 'Pearl of Africa Savannah', path: 'images/scene.webp' },
  { name: 'Safari Game Drive Land Cruiser', path: 'images/pic1.webp' },
  { name: 'Wild Elephant Herds', path: 'images/pic11.webp' },
  { name: 'Hippos Kazinga Channel', path: 'images/pic8.webp' },
];

export const ImageUploadPicker: React.FC<ImageUploadPickerProps> = ({
  label,
  value,
  onChange,
  helperText,
}) => {
  const [activeTab, setActiveTab] = useState<'upload' | 'presets' | 'url'>('upload');
  const [urlInput, setUrlInput] = useState(value && value.startsWith('http') ? value : '');
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Handle local PC file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const processFile = async (file: File) => {
    // Basic file validation
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (.jpg, .png, .webp).');
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      alert('Image size exceeds 5MB. Please choose a smaller photo.');
      return;
    }

    try {
      const result = await adminApi.uploadImage(file);
      onChange(result.url);
    } catch { /* The dashboard displays the API error. */ }

  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handlePresetSelect = (path: string) => {
    // Generate valid asset reference
    const fullPath = `${import.meta.env.BASE_URL}${path}`;
    onChange(fullPath);
  };

  const handleUrlSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (urlInput.trim()) {
      onChange(urlInput.trim());
    }
  };

  const clearImage = () => {
    onChange('');
    setUrlInput('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Resolve visual preview URL
  const previewSrc = value || '';

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <label className="block text-xs font-semibold text-zinc-300 dark:text-zinc-300 light:text-zinc-700">
          {label}
        </label>
        {value && (
          <button
            type="button"
            onClick={clearImage}
            className="text-[11px] text-rose-400 hover:underline flex items-center gap-1 cursor-pointer"
          >
            <X className="h-3 w-3" />
            Remove Image
          </button>
        )}
      </div>

      {/* Selected Image Preview */}
      {previewSrc ? (
        <div className="relative group overflow-hidden rounded-2xl border border-[#2d4420] dark:border-[#2d4420] bg-black/40 h-44 w-full">
          <img
            src={previewSrc}
            alt="Preview"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => fileInputRef.current?.click()}
              className="rounded-xl bg-brand-green px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-[#4ea84e] transition-colors"
            >
              Replace Photo
            </button>
            <button
              type="button"
              onClick={clearImage}
              className="rounded-xl bg-rose-500/80 px-3.5 py-1.5 text-xs font-semibold text-white hover:bg-rose-600 transition-colors"
            >
              Remove
            </button>
          </div>
          <div className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded text-[10px] text-zinc-300 flex items-center gap-1">
            <Check className="h-3 w-3 text-emerald-400" />
            <span>Image Attached</span>
          </div>
        </div>
      ) : (
        /* Image Selection Tabs */
        <div className="rounded-2xl border border-[#273d1f] dark:border-[#273d1f] bg-[#141e11] dark:bg-[#141e11] overflow-hidden">
          {/* Tab buttons */}
          <div className="flex items-center border-b border-[#203218] dark:border-[#203218] text-xs">
            <button
              type="button"
              onClick={() => setActiveTab('upload')}
              className={`flex-1 py-2 text-center font-medium transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'upload'
                  ? 'bg-brand-green/20 text-brand-green border-b-2 border-brand-green font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <Upload className="h-3.5 w-3.5" />
              <span>Upload from PC</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('presets')}
              className={`flex-1 py-2 text-center font-medium transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'presets'
                  ? 'bg-brand-green/20 text-brand-green border-b-2 border-brand-green font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <FolderOpen className="h-3.5 w-3.5" />
              <span>Website Gallery</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('url')}
              className={`flex-1 py-2 text-center font-medium transition-colors flex items-center justify-center gap-1.5 ${
                activeTab === 'url'
                  ? 'bg-brand-green/20 text-brand-green border-b-2 border-brand-green font-semibold'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              <LinkIcon className="h-3.5 w-3.5" />
              <span>Paste Web URL</span>
            </button>
          </div>

          {/* Tab 1: Local PC File Drag & Drop */}
          {activeTab === 'upload' && (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className={`p-6 text-center cursor-pointer transition-colors ${
                isDragging ? 'bg-brand-green/10 border-brand-green' : 'hover:bg-[#172413]'
              }`}
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png,image/jpeg,image/webp,image/jpg"
                onChange={handleFileChange}
                className="hidden"
              />
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-[#1b2b15] text-brand-green mb-2 border border-[#2b4220]">
                <Upload className="h-5 w-5" />
              </div>
              <p className="text-xs font-semibold text-white">
                Click to browse photo from your computer
              </p>
              <p className="text-[11px] text-zinc-400 mt-1">
                or drag & drop here (JPG, PNG, WebP up to 5MB)
              </p>
            </div>
          )}

          {/* Tab 2: Existing Website Presets */}
          {activeTab === 'presets' && (
            <div className="p-3 max-h-52 overflow-y-auto grid grid-cols-2 sm:grid-cols-3 gap-2 scrollbar-thin">
              {PRESET_SAFARI_ASSETS.map((asset, idx) => {
                const fullAssetUrl = `${import.meta.env.BASE_URL}${asset.path}`;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handlePresetSelect(asset.path)}
                    className="group relative overflow-hidden rounded-xl border border-[#263c1e] bg-black/40 text-left hover:border-brand-green transition-all"
                  >
                    <img
                      src={fullAssetUrl}
                      alt={asset.name}
                      className="h-16 w-full object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="p-1.5 bg-[#0f170e]">
                      <p className="text-[10px] font-medium text-zinc-300 truncate">
                        {asset.name}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}

          {/* Tab 3: Paste External Web URL */}
          {activeTab === 'url' && (
            <div className="p-4 space-y-2">
              <div className="flex gap-2">
                <input
                  type="url"
                  placeholder="https://images.unsplash.com/photo-..."
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  className="flex-1 rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-1.5 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleUrlSubmit}
                  className="rounded-xl bg-brand-green px-3.5 py-1.5 text-xs font-semibold text-black hover:bg-[#4ea84e] transition-colors cursor-pointer"
                >
                  Apply
                </button>
              </div>
              <p className="text-[10px] text-zinc-400">
                Paste any high-resolution public photo link from Unsplash, Wikimedia, or cloud storage.
              </p>
            </div>
          )}
        </div>
      )}

      {helperText && <p className="text-[10px] text-zinc-400">{helperText}</p>}
    </div>
  );
};
