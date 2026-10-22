import React, { useState, useEffect } from 'react';
import {
  Star,
  Plus,
  Trash2,
} from 'lucide-react';
import type { CustomerReview } from '../types/adminTypes';
import { adminApi } from '../services/adminApi';

export const AdminReviews: React.FC = () => {
  const [reviews, setReviews] = useState<CustomerReview[]>([]);
  const [showModal, setShowModal] = useState(false);

  // New review state
  const [authorName, setAuthorName] = useState('');
  const [authorCountry, setAuthorCountry] = useState('United States');
  const [rating, setRating] = useState(5);
  const [source, setSource] = useState<CustomerReview['source']>('TripAdvisor');
  const [safariTaken, setSafariTaken] = useState('3-Day Bwindi Gorilla Trekking');
  const [reviewTitle, setReviewTitle] = useState('');
  const [reviewText, setReviewText] = useState('');

  useEffect(() => {
    adminApi.getReviews().then(setReviews).catch(() => {});
  }, []);

  const loadReviews = async () => {
    const list = await adminApi.getReviews();
    setReviews(list);
  };

  const handleToggleApproved = async (rev: CustomerReview) => {
    const updated = {
      ...rev,
      status: (rev.status === 'approved' ? 'pending' : 'approved') as CustomerReview['status'],
    };
    await adminApi.saveReview(updated);
    await loadReviews();
  };

  const handleToggleFeatured = async (rev: CustomerReview) => {
    const updated = { ...rev, isFeatured: !rev.isFeatured };
    await adminApi.saveReview(updated);
    await loadReviews();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this customer review?')) {
      await adminApi.deleteReview(id);
      await loadReviews();
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    const newRev: CustomerReview = {
      id: `rev_${Date.now()}`,
      authorName,
      authorCountry,
      rating,
      source,
      safariTaken,
      reviewTitle,
      reviewText,
      isFeatured: true,
      status: 'approved',
      date: new Date().toISOString().slice(0, 10),
    };

    await adminApi.saveReview(newRev);
    setShowModal(false);
    // Reset
    setAuthorName('');
    setReviewTitle('');
    setReviewText('');
    await loadReviews();
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <Star className="h-6 w-6 text-brand-green fill-current" />
            Customer Reviews & Reputation Hub
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Curate traveler feedback from TripAdvisor, Google Reviews, and direct safari guest evaluations.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-brand-green/20 cursor-pointer self-start sm:self-auto"
        >
          <Plus className="h-4 w-4" />
          <span>Add Traveler Review</span>
        </button>
      </div>

      {/* Reviews Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reviews.map((rev) => (
          <div
            key={rev.id}
            className="flex flex-col justify-between rounded-2xl bg-[#11190e] border border-[#223519] p-5 shadow-xl transition-all hover:border-brand-green/30"
          >
            <div>
              {/* Stars & Source */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < rev.rating ? 'fill-current' : 'text-zinc-600'}`}
                    />
                  ))}
                </div>
                <span className="rounded-lg bg-[#182613] px-2 py-0.5 text-[10px] text-zinc-300 border border-[#273d1f]">
                  {rev.source}
                </span>
              </div>

              {/* Title & Body */}
              <h3 className="mt-3 text-sm font-bold text-white leading-snug">
                &ldquo;{rev.reviewTitle || rev.headline || 'Verified Safari Experience'}&rdquo;
              </h3>
              <p className="mt-2 text-xs text-zinc-300 leading-relaxed italic line-clamp-4">
                {rev.reviewText || rev.text || ''}
              </p>

              {/* Author & Safari Info */}
              <div className="mt-4 pt-3 border-t border-[#1b2b13] flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold text-white">
                    {rev.authorName || rev.author || 'Safari Guest'}
                  </p>
                  <p className="text-[10px] text-zinc-400">
                    {rev.authorCountry || rev.country || 'Verified Traveler'}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium text-brand-accent truncate max-w-[140px]">
                    {rev.safariTaken || (rev.guideMentioned ? `Guide: ${rev.guideMentioned}` : 'Uganda Wildlife Safari')}
                  </p>
                  <p className="text-[10px] text-zinc-500">{rev.date}</p>
                </div>
              </div>
            </div>

            {/* Actions & Toggles */}
            <div className="mt-4 pt-3 border-t border-[#1b2b13] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleToggleApproved(rev)}
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border transition-colors ${
                    rev.status === 'approved'
                      ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                      : 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  }`}
                >
                  {rev.status === 'approved' ? '✓ Approved' : 'Pending'}
                </button>

                <button
                  onClick={() => handleToggleFeatured(rev)}
                  className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border transition-colors ${
                    rev.isFeatured
                      ? 'bg-brand-accent/20 text-brand-accent border-brand-accent/40'
                      : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30'
                  }`}
                >
                  {rev.isFeatured ? '★ Featured' : 'Standard'}
                </button>
              </div>

              <button
                onClick={() => handleDelete(rev.id)}
                title="Delete Review"
                className="rounded-lg p-1.5 text-zinc-500 hover:bg-rose-500/15 hover:text-rose-400 transition-colors"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Add Review Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-full max-w-lg rounded-3xl bg-[#11190e] border border-[#283e1c] p-6 text-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#213318]">
              <h3 className="text-base font-bold text-white">Log Verified Safari Review</h3>
              <button onClick={() => setShowModal(false)} className="text-zinc-400 hover:text-white">
                ✕
              </button>
            </div>

            <form onSubmit={handleAdd} className="mt-4 space-y-3.5">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Traveler Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maria Svensson"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sweden"
                    value={authorCountry}
                    onChange={(e) => setAuthorCountry(e.target.value)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-300 mb-1">
                    Review Platform
                  </label>
                  <select
                    value={source}
                    onChange={(e) => setSource(e.target.value as CustomerReview['source'])}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                  >
                    <option value="TripAdvisor">TripAdvisor</option>
                    <option value="Google">Google Business</option>
                    <option value="Direct Safari Feedback">Direct Safari Feedback</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-amber-400 mb-1">
                    Star Rating (1-5)
                  </label>
                  <select
                    value={rating}
                    onChange={(e) => setRating(parseInt(e.target.value, 10))}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none font-bold text-amber-400"
                  >
                    <option value={5}>★★★★★ (5 Stars)</option>
                    <option value={4}>★★★★☆ (4 Stars)</option>
                    <option value={3}>★★★☆☆ (3 Stars)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Safari Package Taken
                </label>
                <input
                  type="text"
                  placeholder="3-Day Bwindi Mountain Gorilla Trekking"
                  value={safariTaken}
                  onChange={(e) => setSafariTaken(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Review Headline *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Unforgettable encounters and top-tier guides!"
                  value={reviewTitle}
                  onChange={(e) => setReviewTitle(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-300 mb-1">
                  Review Feedback / Testimonial *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Paste the guest's feedback regarding lodges, driver guides, and wildlife sightings..."
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#213318]">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:bg-[#172314] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-5 py-2 text-xs cursor-pointer"
                >
                  Save Review
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminReviews;
