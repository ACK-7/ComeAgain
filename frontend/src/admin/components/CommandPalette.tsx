import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Search,
  Compass,
  Users,
  Car,
  FileText,
  Star,
  Mail,
  Newspaper,
  Settings,
  Activity,
  ExternalLink,
  X,
  PlusCircle,
} from 'lucide-react';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { label: 'Safari Inquiries & Leads', icon: Users, path: '/admin/inquiries', category: 'Operations' },
    { label: 'New Safari Package', icon: PlusCircle, path: '/admin/packages?action=new', category: 'Catalog' },
    { label: 'Safari Packages & Itineraries', icon: Compass, path: '/admin/packages', category: 'Catalog' },
    { label: 'Car Hire & Safari Fleet', icon: Car, path: '/admin/fleet', category: 'Catalog' },
    { label: 'Newsletter Subscribers & Export', icon: Mail, path: '/admin/subscribers', category: 'Marketing' },
    { label: 'Safari Blog & Travel Guides', icon: FileText, path: '/admin/blog', category: 'Content' },
    { label: 'Customer Reviews & Ratings', icon: Star, path: '/admin/reviews', category: 'Content' },
    { label: 'AI Tourism News Monitor', icon: Newspaper, path: '/admin/tourism-news', category: 'Marketing' },
    { label: 'Business Settings & Contacts', icon: Settings, path: '/admin/settings', category: 'System' },
    { label: 'cPanel & API Health Diagnostics', icon: Activity, path: '/admin/system-health', category: 'System' },
    { label: 'Open Public Website', icon: ExternalLink, path: '/', external: true, category: 'Navigation' },
  ];

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action: typeof actions[0]) => {
    onClose();
    if (action.external) {
      window.open(action.path, '_blank');
    } else {
      navigate(action.path);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-xl overflow-hidden rounded-2xl bg-[#141b12] border border-[#2d421e] shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 border-b border-[#233519] px-4 py-3.5">
          <Search className="h-5 w-5 text-brand-green" />
          <input
            type="text"
            placeholder="Type a command or search pages... (e.g. leads, fleet, packages)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-sm text-white placeholder-zinc-500 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-zinc-400 hover:bg-[#1f2d19] hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <div className="py-8 text-center text-sm text-zinc-500">
              No matching admin commands found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {filtered.map((action, i) => {
                const Icon = action.icon;
                return (
                  <button
                    key={i}
                    onClick={() => handleSelect(action)}
                    className="flex w-full items-center justify-between rounded-xl px-3.5 py-2.5 text-left text-sm text-zinc-200 transition-colors hover:bg-brand-green/15 hover:text-brand-accent group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-[#1c2914] p-2 text-brand-green group-hover:text-brand-accent border border-[#293d1e]">
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-medium">{action.label}</span>
                    </div>
                    <span className="text-xs uppercase tracking-wider text-zinc-500 group-hover:text-zinc-400">
                      {action.category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts hint */}
        <div className="flex items-center justify-between border-t border-[#1f2d19] bg-[#0f140e] px-4 py-2 text-xs text-zinc-500">
          <span>Navigate with click or enter</span>
          <span className="flex items-center gap-1">
            <kbd className="rounded bg-[#1a2415] px-1.5 py-0.5 border border-[#2b3a20] font-mono text-[10px] text-zinc-300">
              ESC
            </kbd>{' '}
            to close
          </span>
        </div>
      </div>
    </div>
  );
};
