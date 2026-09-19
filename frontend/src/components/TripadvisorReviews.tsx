import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, ExternalLink, Quote, ShieldCheck, Award } from 'lucide-react';
import { siteData } from '../data/siteData';

export interface ReviewItem {
  id: number;
  author: string;
  country?: string;
  avatar?: string;
  date: string;
  headline: string;
  text: string;
  rating: number;
  guideMentioned?: string;
  tripadvisorReviewUrl?: string;
}

export const TRIPADVISOR_REVIEWS: ReviewItem[] = [
  {
    id: 1,
    author: 'Twenyumize R',
    date: 'May 2024',
    headline: 'Family DayOut',
    text: 'It was such an exceptional experience with all the wildlife adventures and waterfall experiences..... my family created memories that will last for a lifetime and hope to visit again soon. Thanks for the exceptional services, comeagaintoursandtravel has got you covered all the way!',
    rating: 5,
  },
  {
    id: 2,
    author: 'Bwindi community V (Agaba Adams)',
    date: 'April 2024',
    headline: 'My Experience in Murchison N.P.',
    text: 'I had a safari trip with Come Again Tour and Travel. It was an amazing experience. My priority was to see lions since i had missed them in my previous trips. Our journey started with Ziwa Rhinos, and we headed to Muchison. We spotted a female lion on that day, and on the second day i was very lucky to see a pride of lions and a leopard. Guide Isah did a great job to make my dreams come true....',
    rating: 5,
    guideMentioned: 'Isah',
  },
  {
    id: 3,
    author: 'Dagmar P',
    date: 'January 2024',
    headline: 'Unforgettable memories of Uganda',
    text: 'Our trip to Uganda was amazing. We spent there 12 beautiful days. Thanks to our guide, Issa, we have unforgettable memories of this country. I think this country has a lot to offer and it\'s really Pearl of Africa.',
    rating: 5,
    guideMentioned: 'Issa',
  },
  {
    id: 4,
    author: 'MarikaZem',
    date: 'December 2023',
    headline: 'Uganda has beautiful nature',
    text: 'During our family vacation, we really enjoyed the beautiful nature of green Uganda, we definitely recommend a stay of at least 7 to 10 days. The guide was nice, flexible and helpful.',
    rating: 5,
  },
  {
    id: 5,
    author: 'Couples Traveler',
    date: 'March 2024',
    headline: 'Worth single penny',
    text: 'Hakam is very honest and kind. I have really enjoyed the balloon ride. Really enjoyed the package with included lunch and the private transport to the hotel.',
    rating: 5,
    guideMentioned: 'Hakam',
  },
  {
    id: 6,
    author: 'Nanyunja L',
    date: 'March 2024',
    headline: 'amazing ever',
    text: 'it was really amazing and gave me and my family the best memorable tour with the best tour guides and a very well trained driver. we really had a great time. thank you so much come again safaris',
    rating: 5,
  },
  {
    id: 7,
    author: 'Turaf N',
    date: 'February 2024',
    headline: 'Incredible 10-day Safari Tour in Uganda',
    text: 'I and my friends had an amazing 10 days Safari Tour in Uganda with Come Again Tour and Travel Team. Issa is such a friendly guy! Very knowledgeable about wildlife movements, patient, and always made sure we were comfortable. I highly recommended Issa for Safari Tour. Looking forward to traveling with him again.',
    rating: 5,
    guideMentioned: 'Issa',
  },
  {
    id: 8,
    author: 'Jtripaf',
    date: 'November 2023',
    headline: 'Honest, Loyal & Truly Hassle-Free Journey',
    text: 'Yes, the tour was excellent, the driver was so cooperative, customer understanding, hassle-free journey, feel like your own, very honest and loyal.',
    rating: 5,
  },
  {
    id: 9,
    author: 'John B',
    date: 'April 2024',
    headline: 'Very good',
    text: 'Hospitable staff with the best customer service',
    rating: 5,
  },
];

const TripadvisorReviews: React.FC = () => {
  const [reviews, setReviews] = useState<ReviewItem[]>(TRIPADVISOR_REVIEWS);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = reviews.length;

  useEffect(() => {
    let isMounted = true;
    const baseUrl = (import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000').replace(/\/+$/, '');
    const endpoint = baseUrl.endsWith('/api') ? `${baseUrl}/reviews` : `${baseUrl}/api/reviews`;

    fetch(endpoint)
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (isMounted && data && Array.isArray(data.data) && data.data.length > 0) {
          setReviews(data.data);
        }
      })
      .catch(() => {
        // Keeps verified cached reviews
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const nextReview = () => setCurrentIndex((prev) => (prev + 1) % total);
  const prevReview = () => setCurrentIndex((prev) => (prev - 1 + total) % total);

  const review = reviews[currentIndex] || reviews[0];
  const tripadvisorUrl = siteData.home.testimonials.tripadvisorUrl;

  return (
    <section className="py-10 md:py-14 px-4 bg-[#0a110a] text-white relative overflow-hidden border-t border-brand-green/20">
      {/* Background Ambience */}
      <div className="absolute top-0 right-1/4 w-72 h-72 bg-brand-green/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header with Official TripAdvisor Badge */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-6 pb-4 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#00AA6C]/15 border border-[#00AA6C]/30 text-[#00AA6C] text-[11px] font-bold uppercase tracking-wider mb-2">
              <Award className="w-3 h-3" />
              <span>TripAdvisor Certificate of Excellence</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-white leading-tight">
              Real Travelers, <span className="text-brand-gold italic">Unfiltered Memories</span>
            </h2>
          </div>

          {/* TripAdvisor 5.0 Star Summary Card */}
          <div className="flex items-center gap-2.5 bg-white/5 border border-white/10 p-2.5 rounded-xl backdrop-blur-sm">
            <div className="w-9 h-9 rounded-lg bg-[#00AA6C] flex items-center justify-center font-black text-base text-white shadow-md">
              🦉
            </div>
            <div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#00AA6C] text-[#00AA6C]" />
                ))}
                <span className="text-white font-bold ml-1 text-xs">5.0 / 5.0</span>
              </div>
              <p className="text-[10px] text-gray-400">
                Rated Excellent on{' '}
                <a
                  href={tripadvisorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00AA6C] hover:underline font-semibold"
                >
                  Tripadvisor
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Showcase Card — Compact & Sleek Height */}
        <div className="relative bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/15 rounded-2xl p-5 sm:p-6 lg:p-7 shadow-2xl backdrop-blur-md">
          <Quote className="absolute top-5 right-5 w-10 h-10 text-brand-green/10 pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="space-y-3"
            >
              {/* Star Rating & Metadata */}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#00AA6C] text-[#00AA6C]" />
                  ))}
                  <span className="ml-2 text-[10px] font-semibold uppercase tracking-wider text-[#00AA6C] px-2 py-0.5 rounded-full bg-[#00AA6C]/15">
                    Verified Guest Review
                  </span>
                </div>

                <div className="text-[11px] text-gray-400 flex items-center gap-2">
                  {review.country && <span>📍 {review.country}</span>}
                  <span>•</span>
                  <span>📅 {review.date}</span>
                </div>
              </div>

              {/* Review Headline */}
              <h3 className="text-lg sm:text-xl font-serif font-bold text-white leading-snug">
                "{review.headline}"
              </h3>

              {/* Review Body */}
              <p className="text-gray-300 text-xs sm:text-sm md:text-[15px] font-light leading-relaxed italic">
                "{review.text}"
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Unified Compact Footer Row: Author & Nav Controls Combined */}
          <div className="mt-4 pt-3.5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            {/* Dynamic Author info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={review.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="flex items-center gap-2.5"
              >
                <div className="w-8 h-8 rounded-full bg-brand-green/20 border border-brand-green/40 flex items-center justify-center font-bold text-brand-gold text-xs">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-white text-xs sm:text-sm tracking-wide">
                      {review.author}
                    </h4>
                    {review.guideMentioned && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-brand-green/15 border border-brand-green/30 text-[10px] text-brand-green">
                        Guide: <strong className="text-white">{review.guideMentioned}</strong>
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-gray-400 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#00AA6C]" />
                    TripAdvisor Traveler
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Stable Navigation Controls */}
            <div className="flex items-center justify-between sm:justify-end gap-3">
              <div className="flex items-center gap-1.5">
                {reviews.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 transition-all rounded-full ${
                      idx === currentIndex
                        ? 'w-5 bg-brand-gold'
                        : 'w-1.5 bg-white/20 hover:bg-white/40'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
                <span className="text-[11px] text-gray-400 ml-1">
                  {currentIndex + 1}/{total}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={prevReview}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={nextReview}
                  className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Direct TripAdvisor Links Footer */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs">
          <a
            href={tripadvisorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#00AA6C] hover:bg-[#00AA6C]/90 text-white font-bold transition-transform active:scale-95 shadow-md"
          >
            <span>Read All Reviews on TripAdvisor</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href="https://www.tripadvisor.com/UserReview-g293841-d23932600-Come_Again_Tours_and_Travel-Kampala_Central_Region.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors"
          >
            <span>Traveled with us? Leave a Review</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default TripadvisorReviews;
