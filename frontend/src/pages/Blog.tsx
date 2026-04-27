import React, { useState } from 'react';
import Footer from '../components/Footer';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Clock, Tag, ArrowRight, ArrowUpRight } from 'lucide-react';

// ─── Blog post data ──────────────────────────────────────────────────────────
const CATEGORIES = ['All', 'Wildlife', 'Culture', 'Safari Tips', 'Destinations'] as const;
type Category = typeof CATEGORIES[number];

interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: Exclude<Category, 'All'>;
  image: string;
  featured?: boolean;
  externalUrl?: string;
}

const posts: Post[] = [
  {
    slug: 'tracking-mountain-gorillas',
    title: 'Tracking the Majestic Mountain Gorillas of Bwindi',
    excerpt:
      'An unforgettable morning in the mists of Bwindi Impenetrable Forest — what it truly feels like to sit face-to-face with one of our closest relatives in the wild.',
    date: 'March 15, 2024',
    readTime: '6 min read',
    category: 'Wildlife',
    image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-14.58.51.jpeg`,
    featured: true,
    externalUrl: 'https://comeagaintoursandtravels.com',
  },
  {
    slug: 'murchison-falls-guide',
    title: 'A Complete Guide to the Murchison Falls Safari',
    excerpt:
      'Discover the sheer power of the Nile crashing through a 7-metre gorge, and the diverse wildlife that roams Uganda\'s oldest and largest national park.',
    date: 'February 28, 2024',
    readTime: '8 min read',
    category: 'Destinations',
    image: `${import.meta.env.BASE_URL}images/murhison-drone.webp`,
    externalUrl: 'https://comeagaintoursandtravels.com',
  },
  {
    slug: 'top-10-safari-tips',
    title: 'Top 10 Tips for Your First East African Safari',
    excerpt:
      'Everything you need to know before you step onto the savanna — from what to pack to how to behave around wildlife.',
    date: 'January 10, 2024',
    readTime: '5 min read',
    category: 'Safari Tips',
    image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-26-at-09.39.51-1024x684.jpeg`,
    externalUrl: 'https://comeagaintoursandtravels.com',
  },
  {
    slug: 'white-water-rafting-jinja',
    title: 'White Water Rafting on the Nile at Jinja',
    excerpt:
      'Jinja is the adventure capital of East Africa for a reason. We take you through the rapids, the calm stretches, and everything in between.',
    date: 'December 5, 2023',
    readTime: '4 min read',
    category: 'Destinations',
    image: `${import.meta.env.BASE_URL}images/rafting.jpg`,
    externalUrl: 'https://comeagaintoursandtravels.com',
  },
  {
    slug: 'chimpanzee-trekking',
    title: 'Chimpanzee Trekking in Kibale Forest',
    excerpt:
      'Kibale National Park is home to the highest density of primates in Africa. Here\'s what to expect on a full-day chimpanzee habituation experience.',
    date: 'November 18, 2023',
    readTime: '7 min read',
    category: 'Wildlife',
    image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.02.10.jpeg`,
    externalUrl: 'https://comeagaintoursandtravels.com',
  },
  {
    slug: 'ugandan-culture-kampala',
    title: 'Discovering Kampala: Culture, Food & History',
    excerpt:
      'Beyond the game parks, Uganda\'s capital is a vibrant city full of colour, music, and history. A guide to its must-see cultural spots.',
    date: 'October 30, 2023',
    readTime: '5 min read',
    category: 'Culture',
    image: `${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.06.18-1.jpeg`,
    externalUrl: 'https://comeagaintoursandtravels.com',
  },
];

// ─── Category badge colours ───────────────────────────────────────────────────
const categoryColour: Record<Exclude<Category, 'All'>, string> = {
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
  const [active, setActive] = useState<Category>('All');

  const featured = posts.find((p) => p.featured)!;
  // always show featured in its own slot regardless of filter
  const gridPosts = active === 'All'
    ? posts.filter((p) => !p.featured)
    : posts.filter((p) => p.category === active);

  return (
    <div className="bg-[#0c1106] min-h-screen text-white selection:bg-brand-green selection:text-white overflow-x-hidden">
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
              src={`${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.49-1.jpeg`}
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

            <motion.a
              href={featured.externalUrl}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-0 shadow-2xl overflow-hidden"
            >
              {/* Image */}
              <div className="h-72 lg:h-[520px] overflow-hidden relative">
                <img
                  src={featured.image}
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
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className="w-12 h-[2px] bg-brand-green mb-8 origin-left"
                />
                <p className="text-[#555] text-[15px] leading-relaxed mb-10 max-w-lg">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-3 text-brand-green font-bold text-xs uppercase tracking-widest group/btn">
                  <span className="border-b-2 border-brand-green group-hover/btn:border-brand-dark transition-colors">
                    Read Full Story
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
                <p className="text-brand-dark/40 text-xs mt-8 font-mono">{featured.date}</p>
              </div>
            </motion.a>
          </div>
        </section>

        {/* ── 3. Filter Bar + Grid ─────────────────────────────────────── */}
        <section className="bg-[#f4f7f4] pb-32 px-4">
          <div className="max-w-7xl mx-auto">

            {/* Filter strip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-wrap gap-3 mb-16 border-b border-brand-green/15 pb-8"
            >
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-5 py-2 text-[11px] font-black uppercase tracking-widest transition-all duration-300 ${
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
            </motion.div>

            {/* Cards grid */}
            <AnimatePresence mode="wait">
              {gridPosts.length === 0 ? (
                <motion.p
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-brand-dark/40 font-serif italic text-xl text-center py-20"
                >
                  No posts in this category yet.
                </motion.p>
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
                    <motion.a
                      key={post.slug}
                      variants={cardVariants}
                      href={post.externalUrl}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ y: -8 }}
                      className="group flex flex-col bg-white shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
                    >
                      {/* Thumbnail */}
                      <div className="h-60 overflow-hidden relative">
                        <img
                          src={post.image}
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
                          <span>{post.date}</span>
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
                    </motion.a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* ── 4. Newsletter / CTA — fixed background ──────────────────── */}
        <section
          className="relative py-48 px-4 min-h-[600px] flex items-center bg-fixed bg-cover bg-center"
          style={{ backgroundImage: `url(${import.meta.env.BASE_URL}images/WhatsApp-Image-2026-02-24-at-15.00.50-1.jpeg)` }}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-0 max-w-lg"
            >
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/40 outline-none focus:border-brand-green transition-colors"
              />
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="px-8 py-4 bg-brand-green text-white font-bold text-xs tracking-widest uppercase hover:bg-white hover:text-brand-dark transition-all whitespace-nowrap"
              >
                Subscribe
              </motion.button>
            </motion.div>

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
