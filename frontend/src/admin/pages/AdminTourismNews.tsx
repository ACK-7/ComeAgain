import React, { useState, useEffect } from 'react';
import {
  Newspaper,
  RefreshCw,
  Star,
  ExternalLink,
  Eye,
} from 'lucide-react';
import type { TourismNewsAdminItem } from '../types/adminTypes';
import { adminApi } from '../services/adminApi';

export const AdminTourismNews: React.FC = () => {
  const [news, setNews] = useState<TourismNewsAdminItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<TourismNewsAdminItem | null>(null);

  useEffect(() => {
    loadNews();
  }, []);

  const loadNews = async () => {
    setIsLoading(true);
    try { setNews(await adminApi.getTourismNews()); } finally { setIsLoading(false); }
  };

  const handleToggleFeatured = async (id: number) => {
    const item = news.find(n => n.id === id);
    if (!item) return;
    await adminApi.updateNews(id, { is_featured: !item.is_featured });
    setNews((prev) =>
      prev.map((n) => (n.id === id ? { ...n, is_featured: !n.is_featured } : n))
    );
  };

  const categories = ['all', 'Wildlife', 'Aviation', 'Conservation', 'Destinations', 'Travel Advisory'];

  const filtered = news.filter(
    (n) => categoryFilter === 'all' || n.category === categoryFilter
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <Newspaper className="h-6 w-6 text-brand-green" />
            AI Uganda Tourism News Monitor
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Automated intelligence feed monitoring national park updates, aviation routes, and conservation breakthroughs.
          </p>
        </div>

        <button
          onClick={loadNews}
          disabled={isLoading}
          className="inline-flex items-center gap-2 rounded-xl bg-[#172314] hover:bg-[#20321a] text-zinc-200 border border-[#273d1f] px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer self-start sm:self-auto disabled:opacity-50"
        >
          <RefreshCw className={`h-4 w-4 text-brand-green ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Fetching Feed...' : 'Sync Latest News'}</span>
        </button>
      </div>

      {/* Category Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-thin">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className={`rounded-xl px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors capitalize ${
              categoryFilter === cat
                ? 'bg-brand-green text-black font-bold'
                : 'bg-[#141e11] text-zinc-300 hover:bg-[#1b2816]'
            }`}
          >
            {cat === 'all' ? 'All Intelligence' : cat}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-between overflow-hidden rounded-2xl bg-[#11190e] border border-[#223519] transition-all hover:border-brand-green/30 shadow-xl"
          >
            <div className="relative h-44 w-full overflow-hidden bg-black/40">
              <img
                src={item.image_url}
                alt={item.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#11190e] via-transparent to-black/30" />

              <div className="absolute top-3 left-3 flex items-center gap-1.5">
                <span className="rounded-lg bg-black/75 px-2 py-0.5 text-xs backdrop-blur-sm">
                  {item.emoji} {item.category}
                </span>
                {item.is_featured && (
                  <span className="flex items-center gap-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-current" />
                    Featured
                  </span>
                )}
              </div>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <p className="text-[10px] text-zinc-400">
                  Source: {item.source_name}
                </p>
                <h3 className="mt-1 text-sm font-bold text-white line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-xs text-zinc-400 line-clamp-3">
                  {item.summary}
                </p>
              </div>

              <div className="pt-2 border-t border-[#1b2b13] flex items-center justify-between">
                <span className="text-[10px] text-zinc-500">
                  {new Date(item.published_at).toLocaleDateString()}
                </span>

                <div className="flex items-center gap-1">
                  <button
                    onClick={() => handleToggleFeatured(item.id)}
                    title={item.is_featured ? 'Unfeature' : 'Feature on Home Page'}
                    className={`rounded-lg p-1.5 transition-colors ${
                      item.is_featured ? 'text-brand-accent bg-brand-accent/10' : 'text-zinc-500 hover:text-zinc-300'
                    }`}
                  >
                    <Star className={`h-4 w-4 ${item.is_featured ? 'fill-current' : ''}`} />
                  </button>

                  <button
                    onClick={() => setSelectedItem(item)}
                    title="View Full Intelligence"
                    className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#1a2914] hover:text-white transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                  </button>

                  <button className="text-xs text-zinc-300 p-2" onClick={async () => { await adminApi.updateNews(item.id, { is_active: !item.is_active }); await loadNews(); }}>{item.is_active ? 'Hide' : 'Publish'}</button>
                  {item.source_url && (
                    <a
                      href={item.source_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Open Source Link"
                      className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#1a2914] hover:text-brand-green transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Item Inspection Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-full max-w-2xl rounded-3xl bg-[#11190e] border border-[#283e1c] p-6 text-white shadow-2xl max-h-[85vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#213318]">
              <span className="text-xs uppercase tracking-wider text-brand-green">
                {selectedItem.emoji} {selectedItem.category} • {selectedItem.source_name}
              </span>
              <button onClick={() => setSelectedItem(null)} className="text-zinc-400 hover:text-white">
                ✕
              </button>
            </div>

            <div className="mt-4 space-y-4">
              <h2 className="text-lg font-bold text-white font-serif">{selectedItem.title}</h2>
              <img
                src={selectedItem.image_url}
                alt={selectedItem.title}
                className="w-full h-56 object-cover rounded-2xl border border-[#233519]"
              />
              <p className="text-xs leading-relaxed text-zinc-200 whitespace-pre-line bg-[#0d140a] p-4 rounded-xl border border-[#1b2b13]">
                {selectedItem.content}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-[#213318] flex items-center justify-between">
              {selectedItem.source_url && (
                <a
                  href={selectedItem.source_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brand-accent hover:underline flex items-center gap-1"
                >
                  Visit Original Source ({selectedItem.source_name}) ↗
                </a>
              )}
              <button
                onClick={() => setSelectedItem(null)}
                className="rounded-xl bg-[#172314] px-4 py-2 text-xs text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminTourismNews;
