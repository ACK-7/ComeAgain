import React, { useState } from 'react';
import {
  X,
  Phone,
  Mail,
  MapPin,
  Calendar,
  Users,
  DollarSign,
  Send,
  MessageCircle,
  Trash2,
  Clock,
  Sparkles,
} from 'lucide-react';
import type { SafariInquiry, InquiryStatus } from '../types/adminTypes';
import { StatusBadge } from './StatusBadge';
import { useAdminAuth } from '../context/AdminAuthContext';

interface LeadDetailDrawerProps {
  inquiry: SafariInquiry | null;
  onClose: () => void;
  onUpdate: (updated: SafariInquiry) => Promise<void>;
  onDelete: (id: string) => void;
}

export const LeadDetailDrawer: React.FC<LeadDetailDrawerProps> = ({
  inquiry,
  onClose,
  onUpdate,
  onDelete,
}) => {
  const { user } = useAdminAuth();
  const [newNote, setNewNote] = useState('');

  if (!inquiry) return null;

  const handleStatusChange = (newStatus: InquiryStatus) => {
    const updated: SafariInquiry = {
      ...inquiry,
      status: newStatus,
      updatedAt: new Date().toISOString(),
    };
    onUpdate(updated);
  };

  const handleAddNote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    const noteObj = {
      id: `n_${Date.now()}`,
      author: user?.name || 'Staff Member',
      text: newNote.trim(),
      createdAt: new Date().toISOString(),
    };

    const updated: SafariInquiry = {
      ...inquiry,
      notes: [noteObj, ...(inquiry.notes || [])],
      updatedAt: new Date().toISOString(),
    };

    await onUpdate(updated);
    setNewNote('');
  };

  // Format WhatsApp Link
  const cleanPhone = inquiry.phone.replace(/[^0-9]/g, '');
  const waText = encodeURIComponent(
    `Hello ${inquiry.clientName}! Greetings from Come Again Tours and Travels Ltd Uganda. We received your safari inquiry regarding "${inquiry.packageInterest || 'your upcoming Uganda trip'}" and would love to assist you with the custom itinerary and gorilla permits.`
  );
  const waUrl = `https://wa.me/${cleanPhone}?text=${waText}`;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative flex h-full w-full max-w-xl flex-col bg-[#0f170e] border-l border-[#24371b] shadow-2xl text-white overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-[#213218] px-6 py-4 bg-[#0a0f08]">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#1b2b14] text-brand-green font-bold text-lg border border-[#2b4420]">
              {inquiry.clientName.charAt(0)}
            </div>
            <div>
              <h3 className="text-base font-bold text-white leading-tight">
                {inquiry.clientName}
              </h3>
              <p className="text-xs text-zinc-400 flex items-center gap-1.5 mt-0.5">
                <MapPin className="h-3 w-3 text-brand-green" />
                {inquiry.country || 'International Traveler'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onDelete(inquiry.id)}
              title="Delete Inquiry"
              className="rounded-lg p-2 text-zinc-400 hover:bg-rose-500/15 hover:text-rose-400 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </button>
            <button
              onClick={onClose}
              className="rounded-lg p-2 text-zinc-400 hover:bg-[#1a2914] hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Drawer Body Scroll */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Status Pipeline Selector */}
          <div className="rounded-2xl bg-[#141e11] border border-[#233519] p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                Pipeline Stage
              </span>
              <StatusBadge status={inquiry.status} size="md" />
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(
                [
                  'new',
                  'contacted',
                  'itinerary_sent',
                  'confirmed',
                  'completed',
                  'lost',
                ] as InquiryStatus[]
              ).map((st) => (
                <button
                  key={st}
                  onClick={() => handleStatusChange(st)}
                  className={`rounded-xl px-2.5 py-1.5 text-xs font-medium capitalize transition-all ${
                    inquiry.status === st
                      ? 'bg-brand-green text-black font-bold shadow-md shadow-brand-green/20'
                      : 'bg-[#192715] text-zinc-300 hover:bg-[#20321a] border border-[#263c1e]'
                  }`}
                >
                  {st.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact & WhatsApp Triggers */}
          <div className="grid grid-cols-2 gap-3">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25D366]/15 border border-[#25D366]/40 text-[#25D366] hover:bg-[#25D366]/25 py-2.5 text-xs font-semibold transition-colors"
            >
              <MessageCircle className="h-4 w-4" />
              <span>Chat on WhatsApp</span>
            </a>

            <a
              href={`mailto:${inquiry.email}?subject=Come Again Tours — Uganda Safari Consultation`}
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-500/15 border border-blue-500/40 text-blue-400 hover:bg-blue-500/25 py-2.5 text-xs font-semibold transition-colors"
            >
              <Mail className="h-4 w-4" />
              <span>Send Official Email</span>
            </a>
          </div>

          {/* Safari Inquiry Specifications */}
          <div className="rounded-2xl bg-[#141e11] border border-[#233519] p-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-brand-green flex items-center gap-1.5">
              <Sparkles className="h-3.5 w-3.5" />
              Safari Trip Details
            </h4>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="flex items-center gap-2 text-xs">
                <Calendar className="h-4 w-4 text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-400">Target Date</p>
                  <p className="font-medium text-white">{inquiry.travelDate || 'Flexible'}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Users className="h-4 w-4 text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-400">Travelers</p>
                  <p className="font-medium text-white">{inquiry.travelersCount} Person(s)</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <DollarSign className="h-4 w-4 text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-400">Estimated Budget</p>
                  <p className="font-medium text-white">{inquiry.estimatedBudget || 'Not specified'}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Phone className="h-4 w-4 text-zinc-400" />
                <div>
                  <p className="text-[10px] text-zinc-400">Direct Phone</p>
                  <p className="font-medium text-white">{inquiry.phone || 'None'}</p>
                </div>
              </div>
            </div>

            {inquiry.packageInterest && (
              <div className="pt-2 border-t border-[#1f3016]">
                <p className="text-[10px] text-zinc-400">Package / Safari Focus</p>
                <p className="text-xs font-semibold text-brand-accent mt-0.5">
                  {inquiry.packageInterest}
                </p>
              </div>
            )}
          </div>

          {/* Original Client Message */}
          <div className="rounded-2xl bg-[#141e11] border border-[#233519] p-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 mb-2">
              Client Inquiry Message
            </h4>
            <p className="text-xs leading-relaxed text-zinc-200 bg-[#0c1308] p-3 rounded-xl border border-[#1b2a12]">
              {inquiry.message || 'No additional message was provided.'}
            </p>
            <div className="mt-2 flex items-center justify-between text-[10px] text-zinc-400">
              <span>Source: {inquiry.source.replace('_', ' ').toUpperCase()}</span>
              <span>Received: {new Date(inquiry.createdAt).toLocaleString()}</span>
            </div>
          </div>

          {/* Internal Staff Notes Timeline */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
              Internal Staff Notes & Activity
            </h4>

            {/* Note input */}
            <form onSubmit={handleAddNote} className="flex gap-2">
              <input
                type="text"
                placeholder="Log internal note, quote sent, or permit details..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="flex-1 rounded-xl bg-[#141e11] border border-[#233519] px-3.5 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-xl bg-brand-green px-3.5 py-2 text-xs font-semibold text-black hover:bg-[#4ea84e] transition-colors cursor-pointer"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>

            {/* Notes list */}
            <div className="space-y-2 mt-3">
              {(!inquiry.notes || inquiry.notes.length === 0) ? (
                <p className="text-xs text-zinc-400 italic">No notes logged yet for this lead.</p>
              ) : (
                inquiry.notes.map((n) => (
                  <div
                    key={n.id}
                    className="rounded-xl bg-[#141e11] border border-[#233519] p-3 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-brand-green">{n.author}</span>
                      <span className="flex items-center gap-1 text-[10px] text-zinc-400">
                        <Clock className="h-3 w-3" />
                        {new Date(n.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-zinc-300">{n.text}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
