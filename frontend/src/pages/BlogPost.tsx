import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Calendar,
  Share2,
  ChevronRight, 
  ArrowLeft, 
  CheckCircle2, 
  Sparkles, 
  MessageCircle, 
  Copy, 
  Check, 
  Compass,
  Tag, 
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import TrustBadges from '../components/TrustBadges';
import { blogPosts } from '../data/blogData';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { openBookingModal, openModal } = useCustomSafariModal();
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Scroll listener for reading progress bar
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / totalScroll) * 100)));
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const post = blogPosts.find((p) => p.slug === slug);

  // If article not found
  if (!post) {
    return (
      <div className="min-h-[70vh] bg-brand-dark flex items-center justify-center text-white px-4">
        <SEO 
          title="Article Not Found | Come Again Tours" 
          description="The requested safari journal article could not be found." 
        />
        <div className="text-center max-w-md">
          <h1 className="text-4xl sm:text-5xl font-serif mb-4">Story Not Found</h1>
          <p className="text-gray-400 text-sm mb-8">
            The safari article you are looking for may have been moved or updated.
          </p>
          <Link
            to="/blog"
            className="px-8 py-3.5 bg-brand-green text-white uppercase tracking-widest text-xs font-bold rounded-full hover:bg-white hover:text-brand-dark transition-all inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Safari Journal
          </Link>
        </div>
      </div>
    );
  }

  // Related articles
  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  // Previous & Next articles navigation
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : blogPosts[blogPosts.length - 1];
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : blogPosts[0];

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://comeagaintoursandtravels.com/blog/${post.slug}`;
  const whatsappShareText = encodeURIComponent(`Check out this safari guide from Come Again Tours: ${post.title}\n${shareUrl}`);
  const whatsappInquiryText = encodeURIComponent(`Hi Come Again Tours, I just read your article "${post.title}" and would like to ask about planning a safari.`);

  // JSON-LD Structured Data for Google Rich Snippets
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.metaDescription,
    "image": `https://comeagaintoursandtravels.com${post.featuredImage}`,
    "datePublished": post.publishedDate,
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "Come Again Tours and Travels",
      "logo": {
        "@type": "ImageObject",
        "url": "https://comeagaintoursandtravels.com/images/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": shareUrl
    }
  };

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": post.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null;

  const schemas = faqSchema ? [articleSchema, faqSchema] : [articleSchema];

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Section headings for quick in-guide table of contents
  const headings = post.sections
    .map((sec, idx) => ({ heading: sec.heading, id: `section-${idx}` }))
    .filter((h) => Boolean(h.heading));

  return (
    <div className="bg-[#0b120c] min-h-screen text-gray-200 selection:bg-brand-green selection:text-white">
      {/* 0. Real-Time Reading Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-white/10 z-[60] pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-brand-green via-emerald-400 to-[#6ab43e] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(106,180,62,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <SEO
        title={post.metaTitle}
        description={post.metaDescription}
        image={post.featuredImage}
        url={shareUrl}
        schema={schemas}
      />

      {/* 1. Top Breadcrumb Header */}
      <div className="bg-[#060e09] border-b border-white/10 pt-6 pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-gray-400">
          <div className="flex items-center gap-2 overflow-x-auto py-1">
            <Link to="/" className="hover:text-brand-green transition-colors whitespace-nowrap">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <Link to="/blog" className="hover:text-brand-green transition-colors whitespace-nowrap">Safari Journal</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-600 shrink-0" />
            <span className="text-gray-300 font-medium truncate max-w-[200px] sm:max-w-xs">{post.title}</span>
          </div>

          <button
            onClick={() => navigate('/blog')}
            className="hidden sm:flex items-center gap-1.5 text-brand-green hover:text-white font-bold transition-colors shrink-0 ml-4"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> All Stories
          </button>
        </div>
      </div>

      {/* 2. Main Article Stage */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Category & Read Time */}
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-brand-green/20 text-brand-green border border-brand-green/30 text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
            {post.category}
          </span>
          <span className="text-gray-400 text-xs flex items-center gap-1.5 font-medium">
            <Clock className="w-3.5 h-3.5 text-brand-green" /> {post.readTime}
          </span>
          <span className="text-gray-600">•</span>
          <span className="text-gray-400 text-xs flex items-center gap-1.5 font-medium">
            <Calendar className="w-3.5 h-3.5 text-gray-500" /> {post.publishedDate}
          </span>
        </div>

        {/* Title & Subtitle */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-serif tracking-tight leading-[1.1] mb-5">
          {post.title}
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 font-light leading-relaxed mb-8 italic border-l-2 border-brand-green pl-4">
          {post.subtitle}
        </p>

        {/* Author Bar & Share Actions */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-white/10 mb-8">
          <div className="flex items-center gap-3">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-11 h-11 rounded-full object-cover border border-white/20"
            />
            <div>
              <div className="text-white text-xs sm:text-sm font-bold">{post.author.name}</div>
              <div className="text-gray-400 text-[11px] flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-brand-green" /> {post.author.role}
              </div>
            </div>
          </div>

          {/* Social Share Buttons */}
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-xs mr-1 hidden sm:inline flex items-center gap-1">
              <Share2 className="w-3.5 h-3.5" /> Share:
            </span>
            <a
              href={`https://wa.me/?text=${whatsappShareText}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#25D366]/20 hover:bg-[#25D366] text-[#25D366] hover:text-white rounded-full border border-[#25D366]/30 transition-all text-xs"
              title="Share on WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <button
              onClick={handleCopyLink}
              className="p-2 bg-white/10 hover:bg-brand-green text-gray-300 hover:text-white rounded-full border border-white/15 transition-all text-xs flex items-center gap-1"
              title="Copy Link"
            >
              {copied ? <Check className="w-4 h-4 text-brand-green" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Featured Image */}
        <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 border border-white/10 bg-black/40">
          <img
            src={post.featuredImage}
            alt={post.title}
            className="w-full max-h-[520px] object-cover"
          />
        </div>

        {/* Quick In-Guide Table of Contents */}
        {headings.length > 1 && (
          <div className="mb-12 p-6 bg-[#0f1d13]/80 border border-brand-green/20 rounded-2xl shadow-xl">
            <div className="text-[11px] font-bold uppercase tracking-[0.25em] text-brand-green mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4 text-brand-green" /> In This Safari Guide
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 text-xs sm:text-sm text-gray-300">
              {headings.map((item, hIdx) => (
                <a
                  key={hIdx}
                  href={`#${item.id}`}
                  className="flex items-center gap-2.5 py-2 px-3 rounded-xl bg-white/[0.03] hover:bg-brand-green/15 hover:text-white border border-transparent hover:border-brand-green/30 transition-all group"
                >
                  <span className="text-brand-green font-mono text-xs font-bold w-5 shrink-0">
                    0{hIdx + 1}.
                  </span>
                  <span className="truncate group-hover:translate-x-1 transition-transform">
                    {item.heading}
                  </span>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Article Body Content */}
        <div className="space-y-10 text-gray-300 leading-relaxed text-base sm:text-lg">
          {post.sections.map((section, idx) => (
            <section key={idx} id={`section-${idx}`} className="space-y-5 scroll-mt-32">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl text-white font-serif tracking-tight pt-4">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed font-light text-gray-200/90">
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 p-6 bg-[#101e14] border-l-4 border-brand-green rounded-2xl shadow-xl">
                  <p className="text-lg sm:text-xl text-emerald-100 font-serif italic mb-2">
                    "{section.quote}"
                  </p>
                  <cite className="text-xs text-brand-green uppercase tracking-widest font-bold not-italic">
                    — {post.author.name}
                  </cite>
                </blockquote>
              )}

              {section.tips && section.tips.length > 0 && (
                <div className="my-6 p-5 sm:p-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="text-xs uppercase font-bold tracking-widest text-brand-green flex items-center gap-2 mb-3">
                    <Sparkles className="w-4 h-4" /> Insider Field Tips
                  </div>
                  <ul className="space-y-2.5">
                    {section.tips.map((tip, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-300">
                        <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-1" />
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {section.image && (
                <figure className="my-8 rounded-2xl overflow-hidden border border-white/10 shadow-xl">
                  <img
                    src={section.image}
                    alt={section.imageCaption || section.heading || post.title}
                    style={{ objectPosition: section.imagePosition || 'center' }}
                    className="w-full max-h-[500px] object-cover"
                  />
                  {section.imageCaption && (
                    <figcaption className="bg-[#0c1810] p-3 text-center text-xs text-gray-400 font-medium">
                      {section.imageCaption}
                    </figcaption>
                  )}
                </figure>
              )}
            </section>
          ))}
        </div>

        {/* ── HIGH CONVERSION WIDGET: Linked Safari Package ──────── */}
        {post.linkedPackage && (
          <div className="my-14 p-6 sm:p-8 bg-gradient-to-br from-[#102416] via-[#0b1710] to-[#07110a] rounded-3xl border border-brand-green/30 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 transform translate-x-8 -translate-y-8 w-40 h-40 bg-brand-green/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-full md:w-56 h-48 md:h-48 rounded-2xl overflow-hidden shrink-0 border border-white/20 shadow-lg">
                <img
                  src={post.linkedPackage.image}
                  alt={post.linkedPackage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 text-left">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-brand-green bg-brand-green/15 px-2.5 py-0.5 rounded-full border border-brand-green/20">
                    Recommended Safari Package
                  </span>
                  <span className="text-xs text-gray-400">
                    {post.linkedPackage.duration}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl text-white font-serif font-bold mb-2">
                  {post.linkedPackage.title}
                </h3>

                <div className="text-brand-green text-xl sm:text-2xl font-bold font-mono mb-4">
                  From {post.linkedPackage.price} <span className="text-xs text-gray-400 font-sans font-normal">/ person</span>
                </div>

                <ul className="space-y-1.5 mb-6 text-xs sm:text-sm text-gray-300">
                  {post.linkedPackage.highlights.slice(0, 3).map((h, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-brand-green shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openBookingModal({
                      title: post.linkedPackage!.title,
                      duration: post.linkedPackage!.duration,
                      price: post.linkedPackage!.price,
                      image: post.linkedPackage!.image,
                      slug: post.linkedPackage!.slug,
                    })}
                    className="px-6 py-3 bg-brand-green text-white font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-xl flex items-center gap-2"
                  >
                    <Compass className="w-4 h-4" /> Book This Safari
                  </button>

                  <button
                    onClick={() => openModal({ packageTitle: post.linkedPackage!.title })}
                    className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/20 transition-all flex items-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-300" /> Customize Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ── HIGH CONVERSION WIDGET: WhatsApp Concierge ────────── */}
        <div className="my-10 p-6 sm:p-7 bg-white/5 border border-white/15 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-white font-serif text-xl mb-1 flex items-center gap-2">
              <MessageCircle className="w-5 h-5 text-[#25D366]" /> Planning a trip around this experience?
            </h4>
            <p className="text-gray-400 text-xs sm:text-sm max-w-xl">
              Ask our senior safari planners in Kampala directly on WhatsApp for real-time lodge availability and UWA permit dates.
            </p>
          </div>
          <a
            href={`https://wa.me/+256786016031?text=${whatsappInquiryText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider rounded-full transition-all shadow-xl flex items-center gap-2 shrink-0"
          >
            <MessageCircle className="w-4 h-4" /> Chat on WhatsApp
          </a>
        </div>

        {/* FAQs Accordion */}
        {post.faqs && post.faqs.length > 0 && (
          <div className="my-12">
            <h3 className="text-2xl text-white font-serif mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-brand-green" /> Frequently Asked Questions
            </h3>
            <div className="space-y-4">
              {post.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="p-5 bg-white/5 border border-white/10 rounded-2xl">
                  <h4 className="text-white font-semibold text-base mb-2">
                    {faq.question}
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-white/10">
          <span className="text-gray-500 text-xs flex items-center gap-1 mr-1">
            <Tag className="w-3 h-3" /> Tags:
          </span>
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-gray-400 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-full border border-white/10 transition-colors"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Previous / Next Story Navigator */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12 pt-8 border-t border-white/10">
          <Link
            to={`/blog/${prevPost.slug}`}
            className="group p-5 bg-white/5 border border-white/10 hover:border-brand-green/50 rounded-2xl transition-all flex flex-col justify-between"
          >
            <div className="flex items-center gap-1.5 text-[11px] uppercase tracking-wider font-bold text-gray-400 group-hover:text-brand-green mb-1.5">
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" /> Previous Story
            </div>
            <div className="text-white font-serif text-lg font-bold group-hover:text-brand-green transition-colors line-clamp-2">
              {prevPost.title}
            </div>
          </Link>

          <Link
            to={`/blog/${nextPost.slug}`}
            className="group p-5 bg-white/5 border border-white/10 hover:border-brand-green/50 rounded-2xl transition-all flex flex-col justify-between sm:text-right"
          >
            <div className="flex items-center sm:justify-end gap-1.5 text-[11px] uppercase tracking-wider font-bold text-gray-400 group-hover:text-brand-green mb-1.5">
              Next Story <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-white font-serif text-lg font-bold group-hover:text-brand-green transition-colors line-clamp-2">
              {nextPost.title}
            </div>
          </Link>
        </div>

      </article>

      {/* 3. Related Stories Section */}
      {relatedPosts.length > 0 && (
        <section className="bg-[#060e09] py-16 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-brand-green font-bold text-xs uppercase tracking-widest mb-1 block">
                  Keep Exploring
                </span>
                <h3 className="text-2xl sm:text-3xl text-white font-serif">
                  More Stories from East Africa
                </h3>
              </div>
              <Link
                to="/blog"
                className="text-brand-green hover:text-white text-xs font-bold uppercase tracking-widest transition-colors flex items-center gap-1"
              >
                View All <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((rPost) => (
                <Link
                  key={rPost.slug}
                  to={`/blog/${rPost.slug}`}
                  className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-green/50 transition-all duration-300 flex flex-col"
                >
                  <div className="h-44 overflow-hidden relative">
                    <img
                      src={rPost.featuredImage}
                      alt={rPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-[#0c1810]/90 backdrop-blur-md text-brand-green text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-white/10">
                      {rPost.category}
                    </span>
                  </div>
                  <div className="p-5 flex-1 flex flex-col justify-between text-left">
                    <div>
                      <h4 className="text-white font-serif text-lg font-bold group-hover:text-brand-green transition-colors mb-2 leading-snug">
                        {rPost.title}
                      </h4>
                      <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                        {rPost.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-gray-500">
                      <span>{rPost.readTime}</span>
                      <span className="text-brand-green font-bold group-hover:translate-x-1 transition-transform">
                        Read Story →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Trust Badges & Footer */}
      <TrustBadges />
      <Footer />
    </div>
  );
};

export default BlogPost;
