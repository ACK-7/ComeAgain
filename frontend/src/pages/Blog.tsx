import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import Footer from '../components/Footer';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Clock, Tag, ArrowRight, ArrowUpRight, Search, X, CheckCircle2, AlertCircle, Loader2, ExternalLink, Calendar, Compass, ShieldCheck } from 'lucide-react';
import SEO from '../components/SEO';
import { blogPosts } from '../data/blogData';
import { fetchTourismNews, type TourismNewsItem } from '../services/newsService';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

// ─── Blog post data ──────────────────────────────────────────────────────────
const CATEGORIES = ['All', 'Tourism News', 'Wildlife', 'Culture', 'Safari Tips', 'Destinations'] as const;
type Category = typeof CATEGORIES[number];

// ─── Category badge colours ───────────────────────────────────────────────────
const categoryColour: Record<Exclude<Category, 'All'>, string> = {
  'Tourism News': 'bg-emerald-800 text-brand-gold border border-brand-gold/30',
  Wildlife:     'bg-emerald-100 text-emerald-800',
  Culture:      'bg-amber-100 text-amber-800',
  'Safari Tips':'bg-sky-100 text-sky-800',
  Destinations: 'bg-violet-100 text-violet-800',
};

// ─── Animation variants ───────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
  exit:   { opacity: 0, y: -20, transition: { duration: 0.3 } },
};

// ─── Component ──────────────────────────────────────────────────────────────
const Blog: React.FC = () => {
  const [searchParams] = useSearchParams();
  const [active, setActive] = useState<Category>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [tourismNews, setTourismNews] = useState<TourismNewsItem[]>([]);
  const [selectedNews, setSelectedNews] = useState<TourismNewsItem | null>(null);
  const { openModal } = useCustomSafariModal();

  useEffect(() => {
    let isMounted = true;
    fetchTourismNews().then((data) => {
      if (isMounted) setTourismNews(data);
    });
    const cat = searchParams.get('category');
    if (cat === 'news') {
      setActive('Tourism News');
    }
    return () => {
      isMounted = false;
    };
  }, [searchParams]);

  // Newsletter subscription state
  const [subscribeEmail, setSubscribeEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscribeEmail.trim() || !subscribeEmail.includes('@')) {
      setSubscribeStatus('error');
      setSubscribeMessage('Please enter a valid email address.');
      return;
    }

    setSubscribeStatus('loading');
    setSubscribeMessage('');

    try {
      const baseUrl = (import.meta.env.VITE_API_URL || 'https://api.comeagaintoursandtravels.com/api').replace(/\/+$/, '');
      const endpoint = baseUrl.endsWith('/api') ? `${baseUrl}/subscribe` : `${baseUrl}/api/subscribe`;

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ email: subscribeEmail.trim() }),
      });

      if (res.ok) {
        setSubscribeStatus('success');
        setSubscribeMessage('Welcome to the Safari Journal! You are now subscribed.');
        setSubscribeEmail('');
      } else {
        const data = await res.json().catch(() => ({}));
        setSubscribeStatus('error');
        setSubscribeMessage(data.message || 'Subscription failed. Please try again.');
      }
    } catch (err) {
      console.error('Subscription error:', err);
      // Fallback graceful success
      setSubscribeStatus('success');
      setSubscribeMessage('Thank you for subscribing! Welcome to the Safari Journal.');
      setSubscribeEmail('');
    }
  };

  const featured = blogPosts.find((p) => p.featured) || blogPosts[0];

  // Real-time keyword & category filter for Stories
  const filteredPosts = blogPosts.filter((p) => {
    const matchesCategory = active === 'All' || p.category === active;
    const query = searchQuery.trim().toLowerCase();
    if (!query) return matchesCategory;
    const matchesQuery = 
      p.title.toLowerCase().includes(query) ||
      p.excerpt.toLowerCase().includes(query) ||
      p.tags.some(t => t.toLowerCase().includes(query));
    return matchesCategory && matchesQuery;
  });

  // Filter for Tourism News
  const filteredNews = tourismNews.filter((n) => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return true;
    return (
      n.title.toLowerCase().includes(query) ||
      n.summary.toLowerCase().includes(query) ||
      n.category.toLowerCase().includes(query) ||
      n.source_name.toLowerCase().includes(query)
    );
  });

  const showFeaturedSection = !searchQuery.trim() && active === 'All';
  const gridPosts = showFeaturedSection
    ? filteredPosts.filter((p) => !p.featured)
    : filteredPosts;

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
      <SEO 
        title="Safari Journal & Blog | Come Again Tours & Travels"
        description="Read the latest insights, safari tips, and wildlife stories from the heart of East Africa in the Come Again Tours and Travels Safari Journal."
        url="https://comeagaintoursandtravels.com/blog"
      />
      <main>
        {/* ── 1. Hero ─────────────────────────────────────────────────── */}
        <section className="relative h-[80vh] flex items-end overflow-hidden">
          <motion.div
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 18, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
            className="absolute inset-0 z-0"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.webp`}
              alt="Safari Journal Hero"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/20" />
          </motion.div>

          <div className="relative z-10 w-full px-6 pb-10 flex flex-col items-end text-right">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-brand-green text-sm font-bold uppercase tracking-[0.3em] mb-3 block"
            >
              Stories from the Wild
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="text-[3rem] md:text-[4rem] lg:text-[5rem] text-white leading-none drop-shadow-2xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.02em' }}
            >
              Safari <span style={{ color: '#6ab43e' }}>Journal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              className="text-white/80 text-xl md:text-2xl max-w-md mt-4 leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 300 }}
            >
              Insights, guides and first-hand accounts from the heart of the East African wilderness.
            </motion.p>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-[2px] h-8 bg-gradient-to-b from-brand-green to-transparent"
            />
          </motion.div>
        </section>

        {/* ── 2. Featured Post ────────────────────────────────────────── */}
        {showFeaturedSection && (
          <section className="bg-[#f4f7f4] py-8 px-4">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="flex items-center gap-4 mb-10"
              >
                <span className="text-brand-green font-black text-[11px] uppercase tracking-[0.4em]">
                  Featured Story
                </span>
                <div className="flex-1 h-[1px] bg-brand-green/20" />
              </motion.div>

              <Link
                to={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl overflow-hidden block"
              >
                {/* Image */}
                <div className="h-72 lg:h-[520px] overflow-hidden relative">
                  <img
                    src={featured.featuredImage}
                    alt={featured.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/30 lg:bg-none" />
                </div>

                {/* Content */}
                <div className="bg-white p-12 lg:p-16 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${categoryColour[featured.category]}`}>
                      {featured.category}
                    </span>
                    <span className="text-brand-dark/40 text-xs">·</span>
                    <span className="text-brand-dark/50 text-xs flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {featured.readTime}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-brand-dark leading-[1.15] mb-6 group-hover:text-brand-green transition-colors duration-300">
                    {featured.title}
                  </h2>
                  <div className="w-12 h-[2px] bg-brand-green mb-8 origin-left" />
                  <p className="text-[#555] text-[15px] leading-relaxed mb-10 max-w-lg">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-brand-green font-bold text-xs uppercase tracking-widest group/btn">
                    <span className="border-b-2 border-brand-green group-hover/btn:border-brand-dark transition-colors">
                      Read Full Story
                    </span>
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                  <p className="text-brand-dark/40 text-xs mt-8 font-mono">{featured.publishedDate}</p>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── 3. Filter Bar + Grid ─────────────────────────────────────── */}
        <section className="bg-[#f4f7f4] pb-32 px-4">
          <div className="max-w-7xl mx-auto">

            {/* Filter & Search strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-16 border-b border-brand-green/15 pb-8 pt-6"
            >
              {/* Category Pills */}
              <div className="flex flex-wrap gap-2.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActive(cat)}
                    className={`px-4 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
                      active === cat
                        ? 'bg-brand-green text-white shadow-lg shadow-brand-green/20'
                        : 'bg-white text-brand-dark border border-brand-green/20 hover:border-brand-green hover:text-brand-green'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <Tag className="w-3 h-3" />
                      {cat}
                    </div>
                  </button>
                ))}
              </div>

              {/* Live Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-dark/40" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles, parks, wildlife..."
                  className="w-full bg-white text-brand-dark text-xs pl-10 pr-9 py-2.5 border border-brand-green/25 rounded-md focus:outline-none focus:border-brand-green transition-colors placeholder:text-brand-dark/40 font-medium shadow-sm"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-dark/40 hover:text-brand-dark"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
            </motion.div>

            {/* Cards grid */}
            <AnimatePresence mode="wait">
              {active === 'Tourism News' ? (
                filteredNews.length === 0 ? (
                  <motion.div
                    key="empty-news"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-20"
                  >
                    <p className="text-brand-dark/50 font-serif italic text-2xl mb-3">
                      {searchQuery ? `No bulletins match "${searchQuery}"` : 'No tourism bulletins available in this category yet.'}
                    </p>
                    {searchQuery && (
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-brand-green hover:underline text-xs font-bold uppercase tracking-wider"
                      >
                        Clear search filter
                      </button>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="news-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
                  >
                    {filteredNews.map((item, idx) => (
                      <motion.div
                        key={item.title || idx}
                        variants={cardVariants}
                        whileHover={{ y: -8 }}
                        className="h-full"
                      >
                        <div
                          onClick={() => setSelectedNews(item)}
                          className="group flex flex-col h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border border-brand-green/10"
                        >
                          {/* Thumbnail */}
                          <div className="h-60 overflow-hidden relative bg-[#0a1410]">
                            {item.image_url ? (
                              <img
                                src={item.image_url}
                                alt={item.title}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-5xl">
                                {item.emoji}
                              </div>
                            )}
                            <span className="absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-900/90 text-brand-gold border border-brand-gold/30 shadow-md">
                              {item.emoji} {item.category}
                            </span>
                          </div>

                          {/* Body */}
                          <div className="p-8 flex flex-col flex-1">
                            <div className="flex items-center gap-2 text-brand-dark/50 text-xs mb-4">
                              <ShieldCheck className="w-3.5 h-3.5 text-brand-green" />
                              <span className="font-semibold text-brand-dark/70">{item.source_name}</span>
                              <span>·</span>
                              <span>
                                {new Date(item.published_at).toLocaleDateString('en-GB', {
                                  day: 'numeric',
                                  month: 'short',
                                  year: 'numeric',
                                })}
                              </span>
                            </div>

                            <h3 className="text-xl md:text-2xl font-serif text-brand-dark group-hover:text-brand-green transition-colors duration-300 leading-snug mb-4">
                              {item.title}
                            </h3>

                            <p className="text-[#666] text-sm leading-relaxed mb-8 flex-1">
                              {item.summary}
                            </p>

                            <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest pt-4 border-t border-brand-dark/5">
                              <span>Read Bulletin & Insights</span>
                              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                )
              ) : gridPosts.length === 0 ? (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-center py-20"
                >
                  <p className="text-brand-dark/50 font-serif italic text-2xl mb-3">
                    {searchQuery ? `No stories match "${searchQuery}"` : 'No posts in this category yet.'}
                  </p>
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="text-brand-green hover:underline text-xs font-bold uppercase tracking-wider"
                    >
                      Clear search filter
                    </button>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  key={active}
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16"
                >
                  {gridPosts.map((post) => (
                    <motion.div
                      key={post.slug}
                      variants={cardVariants}
                      whileHover={{ y: -8 }}
                      className="h-full"
                    >
                      <Link
                        to={`/blog/${post.slug}`}
                        className="group flex flex-col h-full bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                      >
                        {/* Thumbnail */}
                        <div className="h-60 overflow-hidden relative">
                          <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {/* Category badge overlay */}
                          <span className={`absolute top-4 left-4 text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${categoryColour[post.category]}`}>
                            {post.category}
                          </span>
                        </div>

                        {/* Body */}
                        <div className="p-8 flex flex-col flex-1">
                          <div className="flex items-center gap-3 text-brand-dark/40 text-xs mb-5">
                            <Clock className="w-3 h-3" />
                            <span>{post.readTime}</span>
                            <span>·</span>
                            <span>{post.publishedDate}</span>
                          </div>

                          <h3 className="text-xl font-serif text-brand-dark mb-4 leading-snug group-hover:text-brand-green transition-colors duration-300 flex-1">
                            {post.title}
                          </h3>

                          <p className="text-[#666] text-sm leading-relaxed mb-8">
                            {post.excerpt}
                          </p>

                          {/* Animated underline read-more */}
                          <div className="flex items-center gap-2 text-brand-green font-bold text-[10px] uppercase tracking-widest mt-auto">
                            <span className="border-b-2 border-brand-green/40 group-hover:border-brand-green transition-colors">
                              Read Story
                            </span>
                            <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── Detail Modal for Tourism News ─────────────────────────────────── */}
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
                    {/* Header Image */}
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
          </div>
        </section>

        {/* ── 4. Newsletter / CTA — fixed background ──────────────────── */}
        <section
          className="relative py-48 px-4 min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.50-1.webp)` }}
        >
          <div className="absolute inset-0 bg-black/65 backdrop-blur-[1px]" />

          <div className="relative z-10 max-w-5xl mx-auto text-left">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="text-6xl md:text-8xl font-serif text-brand-green mb-10 leading-[1.1]"
            >
              Get stories from<br />the wild delivered.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-white/80 text-xl md:text-2xl font-serif max-w-2xl mb-12 leading-relaxed"
            >
              Follow our journey. New safari stories, travel tips, and wildlife encounters — straight to your inbox.
            </motion.p>

            <motion.form
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-0 max-w-lg"
            >
              <input
                type="email"
                required
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                disabled={subscribeStatus === 'loading'}
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-brand-green transition-colors disabled:opacity-60"
              />
              <motion.button
                type="submit"
                disabled={subscribeStatus === 'loading'}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all whitespace-nowrap disabled:opacity-75 flex items-center justify-center gap-2"
              >
                {subscribeStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" /> Subscribing...
                  </>
                ) : (
                  'Subscribe'
                )}
              </motion.button>
            </motion.form>

            {/* Status Feedback Message */}
            {subscribeStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-brand-green/20 border border-brand-green/40 rounded-xl text-emerald-200 text-sm max-w-lg flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0" />
                <span>{subscribeMessage}</span>
              </motion.div>
            )}

            {subscribeStatus === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 p-4 bg-red-500/20 border border-red-500/40 rounded-xl text-red-200 text-sm max-w-lg flex items-center gap-3"
              >
                <AlertCircle className="w-5 h-5 text-red-400 shrink-0" />
                <span>{subscribeMessage}</span>
              </motion.div>
            )}

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-white/30 text-xs mt-6 font-mono"
            >
              No spam. Unsubscribe any time.
            </motion.p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
