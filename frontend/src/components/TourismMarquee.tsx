import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X, Compass, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { fetchTourismNews, type TourismNewsItem } from '../services/newsService';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import { Link } from 'react-router-dom';

const TourismMarquee: React.FC = () => {
  const [news, setNews] = useState<TourismNewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<TourismNewsItem | null>(null);
  const { openModal } = useCustomSafariModal();

  useEffect(() => {
    let isMounted = true;
    fetchTourismNews().then((data) => {
      if (isMounted && data.length > 0) {
        setNews(data);
      }
    });
    return () => {
      isMounted = false;
    };
  }, []);

  if (news.length === 0) return null;

  // Duplicate items to ensure seamless infinite scroll loop
  const marqueeItems = [...news, ...news];

  return (
    <>
      {/* ─── Luxury Marquee Bar ───────────────────────────────────────────── */}
      <aside aria-label="Uganda Tourism Live Wire" className="relative w-full bg-[#0a1410] border-y border-brand-green/20 text-white overflow-hidden select-none z-30 shadow-inner">
        <div className="flex items-center">
          {/* Static Pinned Label */}
          <div className="flex-shrink-0 flex items-center gap-2.5 px-4 md:px-6 py-3 bg-brand-dark/95 border-r border-brand-green/30 z-10 shadow-lg">
            <span className="text-[11px] md:text-xs font-bold tracking-wider text-brand-gold uppercase whitespace-nowrap">
              Uganda Tourism Wire
            </span>
          </div>

          {/* Marquee Track with CSS Animation */}
          <div className="relative flex overflow-x-hidden group py-2.5">
            <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap will-change-transform">
              {marqueeItems.map((item, idx) => (
                <button
                  key={`${item.title}-${idx}`}
                  type="button"
                  onClick={() => setSelectedNews(item)}
                  className="inline-flex items-center gap-3 mx-6 text-sm text-gray-200 hover:text-brand-gold transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-brand-gold/50 rounded-full px-2 py-0.5"
                >
                  <span className="text-base">{item.emoji}</span>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-brand-green/20 text-brand-green border border-brand-green/30">
                    {item.category}
                  </span>
                  <span className="font-medium text-gray-200 hover:underline">
                    {item.title}
                  </span>
                  <span className="text-xs text-gray-400 font-light">
                    via {item.source_name}
                  </span>
                  <span className="text-brand-gold/40 text-xs ml-4">✦</span>
                </button>
              ))}
            </div>
          </div>

          {/* Right Pinned "All Bulletins" Link */}
          <div className="hidden lg:flex flex-shrink-0 items-center px-4 py-3 bg-brand-dark/95 border-l border-brand-green/30 z-10">
            <Link
              to="/blog"
              className="text-[11px] text-gray-400 hover:text-brand-gold font-medium tracking-wide flex items-center gap-1 transition-colors"
            >
              <span>Explore Journal</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </aside>

      {/* ─── Detail Modal ─────────────────────────────────────────────────── */}
      <AnimatePresence>
        {selectedNews && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedNews(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-2xl bg-[#0f1b15] border border-brand-green/30 rounded-2xl shadow-2xl overflow-hidden z-10 text-white flex flex-col max-h-[90vh]"
            >
              {/* Header Image or Banner */}
              {selectedNews.image_url ? (
                <div className="relative h-48 sm:h-56 w-full overflow-hidden">
                  <img
                    src={selectedNews.image_url}
                    alt={selectedNews.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f1b15] via-[#0f1b15]/40 to-transparent" />
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-6 flex items-center gap-2">
                    <span className="text-2xl">{selectedNews.emoji}</span>
                    <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-brand-green/90 text-white shadow-md">
                      {selectedNews.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-6 border-b border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{selectedNews.emoji}</span>
                    <span className="text-xs uppercase font-bold tracking-widest px-3 py-1 rounded-full bg-brand-green/30 text-brand-green border border-brand-green/40">
                      {selectedNews.category}
                    </span>
                  </div>
                  <button
                    onClick={() => setSelectedNews(null)}
                    className="p-1.5 rounded-full bg-white/10 text-gray-300 hover:text-white hover:bg-white/20 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Body Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white leading-snug">
                  {selectedNews.title}
                </h3>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pb-2 border-b border-white/10">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
                    Source: <strong className="text-gray-200">{selectedNews.source_name}</strong>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    {new Date(selectedNews.published_at).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </span>
                </div>

                {/* Summary Box */}
                {selectedNews.summary && (
                  <p className="text-brand-gold/90 font-medium text-sm sm:text-base leading-relaxed bg-brand-gold/5 p-3 rounded-lg border-l-2 border-brand-gold">
                    {selectedNews.summary}
                  </p>
                )}

                {/* Full Bulletin Body */}
                <div className="text-gray-300 text-sm sm:text-base leading-relaxed space-y-3 whitespace-pre-line">
                  {selectedNews.content}
                </div>
              </div>

              {/* Action Buttons Footer */}
              <div className="p-4 sm:p-6 bg-brand-dark/90 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedNews(null);
                    openModal({ packageTitle: `Inquiry: ${selectedNews.title}` });
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-brand-green hover:bg-brand-green/90 text-white font-medium text-sm shadow-md transition-transform active:scale-95"
                >
                  <Compass className="w-4 h-4" />
                  <span>Plan Safari Here</span>
                </button>

                {selectedNews.source_url && (
                  <a
                    href={selectedNews.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white text-xs sm:text-sm font-medium transition-colors"
                  >
                    <span>Official Wire</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default TourismMarquee;
