import React, { useState, useEffect } from 'react';
import {
  Users,
  Search,
  Filter,
  Plus,
  MessageCircle,
  ExternalLink,
  RefreshCw,
} from 'lucide-react';
import type { SafariInquiry, InquiryStatus, InquirySource } from '../types/adminTypes';
import { adminApi } from '../services/adminApi';
import { StatusBadge } from '../components/StatusBadge';
import { LeadDetailDrawer } from '../components/LeadDetailDrawer';

export const AdminInquiries: React.FC = () => {
  const [inquiries, setInquiries] = useState<SafariInquiry[]>([]);
  const [activeTab, setActiveTab] = useState<InquiryStatus | 'all'>('all');
  const [sourceFilter, setSourceFilter] = useState<InquirySource | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedInquiry, setSelectedInquiry] = useState<SafariInquiry | null>(null);
  const [showNewModal, setShowNewModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // New Lead Form State
  const [newClientName, setNewClientName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newCountry, setNewCountry] = useState('Uganda');
  const [newPackage, setNewPackage] = useState('');
  const [newBudget, setNewBudget] = useState('');
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    loadInquiries();
  }, []);

  const loadInquiries = async () => {
    setIsRefreshing(true);
    try {
      const data = await adminApi.getInquiries();
      setInquiries(data);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleUpdate = async (updated: SafariInquiry) => {
    await adminApi.saveInquiry(updated);
    setSelectedInquiry(updated);
    await loadInquiries();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this safari inquiry?')) {
      await adminApi.deleteInquiry(id);
      setSelectedInquiry(null);
      await loadInquiries();
    }
  };

  const handleCreateNewInquiry = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newClientName || !newEmail) return;

    const newInq: SafariInquiry = {
      id: `new_${Date.now()}`,
      clientName: newClientName,
      email: newEmail,
      phone: newPhone,
      country: newCountry,
      source: 'contact_form',
      packageInterest: newPackage || 'Custom Uganda Safari',
      travelersCount: 2,
      estimatedBudget: newBudget || '$2,500',
      status: 'new',
      message: newMessage,
      notes: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    await adminApi.saveInquiry(newInq);
    setShowNewModal(false);
    // Reset form
    setNewClientName('');
    setNewEmail('');
    setNewPhone('');
    setNewPackage('');
    setNewBudget('');
    setNewMessage('');
    await loadInquiries();
  };

  // Filter inquiries
  const filtered = inquiries.filter((inq) => {
    const matchesTab = activeTab === 'all' || inq.status === activeTab;
    const matchesSource = sourceFilter === 'all' || inq.source === sourceFilter;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      inq.clientName.toLowerCase().includes(q) ||
      inq.email.toLowerCase().includes(q) ||
      inq.country.toLowerCase().includes(q) ||
      (inq.packageInterest && inq.packageInterest.toLowerCase().includes(q));

    return matchesTab && matchesSource && matchesSearch;
  });

  // Tab counts
  const countByStatus = (status: InquiryStatus) =>
    inquiries.filter((i) => i.status === status).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <Users className="h-6 w-6 text-brand-green" />
            Safari Inquiries & Leads CRM
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Track inquiries captured across the contact forms, safari calculators, and WhatsApp.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={loadInquiries}
            disabled={isRefreshing}
            title="Refresh Inquiries from live database"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#273d1f] bg-[#141f12] hover:bg-[#1b2b16] text-zinc-300 hover:text-white px-3.5 py-2 text-xs font-medium transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-brand-green ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>

          <button
            onClick={() => setShowNewModal(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-brand-green/20 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            <span>Log Offline Lead</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#213218] scrollbar-thin scrollbar-thumb-[#1f3015]">
        <button
          onClick={() => setActiveTab('all')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'all'
              ? 'bg-brand-green text-black font-bold'
              : 'bg-[#141d11] text-zinc-300 hover:bg-[#1a2717]'
          }`}
        >
          All Inquiries ({inquiries.length})
        </button>

        <button
          onClick={() => setActiveTab('new')}
          className={`flex items-center gap-1.5 rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'new'
              ? 'bg-emerald-500 text-black font-bold'
              : 'bg-[#141d11] text-emerald-400 hover:bg-[#1a2717]'
          }`}
        >
          <span>New Leads</span>
          <span className="rounded-full bg-emerald-500/30 px-1.5 py-0.2 text-[10px]">
            {countByStatus('new')}
          </span>
        </button>

        <button
          onClick={() => setActiveTab('contacted')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'contacted'
              ? 'bg-blue-500 text-white font-bold'
              : 'bg-[#141d11] text-zinc-300 hover:bg-[#1a2717]'
          }`}
        >
          Contacted ({countByStatus('contacted')})
        </button>

        <button
          onClick={() => setActiveTab('itinerary_sent')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'itinerary_sent'
              ? 'bg-amber-500 text-black font-bold'
              : 'bg-[#141d11] text-zinc-300 hover:bg-[#1a2717]'
          }`}
        >
          Itinerary Sent ({countByStatus('itinerary_sent')})
        </button>

        <button
          onClick={() => setActiveTab('confirmed')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'confirmed'
              ? 'bg-emerald-400 text-black font-bold'
              : 'bg-[#141d11] text-zinc-300 hover:bg-[#1a2717]'
          }`}
        >
          Confirmed ({countByStatus('confirmed')})
        </button>

        <button
          onClick={() => setActiveTab('completed')}
          className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap transition-colors ${
            activeTab === 'completed'
              ? 'bg-zinc-400 text-black font-bold'
              : 'bg-[#141d11] text-zinc-400 hover:bg-[#1a2717]'
          }`}
        >
          Completed ({countByStatus('completed')})
        </button>
      </div>

      {/* Search & Channel Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search by client name, email, country..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-[#141e11] border border-[#233519] pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto">
          <Filter className="h-4 w-4 text-zinc-400" />
          <select
            value={sourceFilter}
            onChange={(e) => setSourceFilter(e.target.value as InquirySource | 'all')}
            className="rounded-xl bg-[#141e11] border border-[#233519] px-3 py-2 text-xs text-white focus:border-brand-green focus:outline-none"
          >
            <option value="all">All Lead Sources</option>
            <option value="contact_form">Contact Form</option>
            <option value="safari_planner">Safari Planner Wizard</option>
            <option value="package_booking">Package Booking</option>
            <option value="car_hire">Car Hire Uganda</option>
            <option value="whatsapp">Direct WhatsApp</option>
          </select>
        </div>
      </div>

      {/* Inquiries Table */}
      <div className="overflow-hidden rounded-2xl bg-[#11190e] border border-[#223519] shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-[#0b1107] text-[11px] uppercase tracking-wider text-zinc-400 border-b border-[#223519]">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Traveler</th>
                <th className="py-3.5 px-4 font-semibold">Package / Interest</th>
                <th className="py-3.5 px-4 font-semibold">Dates & Pax</th>
                <th className="py-3.5 px-4 font-semibold">Budget</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-4 font-semibold">Source</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2e16]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="py-12 text-center text-zinc-500">
                    No safari inquiries found matching your filters.
                  </td>
                </tr>
              ) : (
                filtered.map((inq) => (
                  <tr
                    key={inq.id}
                    onClick={() => setSelectedInquiry(inq)}
                    className="hover:bg-[#162312] transition-colors cursor-pointer group"
                  >
                    {/* Client */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#1c2c15] text-brand-green font-bold text-xs border border-[#2a4320]">
                          {inq.clientName.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-white group-hover:text-brand-accent transition-colors">
                            {inq.clientName}
                          </p>
                          <p className="text-[11px] text-zinc-400">{inq.email}</p>
                        </div>
                      </div>
                    </td>

                    {/* Package */}
                    <td className="py-3.5 px-4 max-w-xs">
                      <p className="font-medium text-zinc-200 truncate">
                        {inq.packageInterest || 'Custom Safari Package'}
                      </p>
                      <p className="text-[10px] text-zinc-400">{inq.country}</p>
                    </td>

                    {/* Dates & Pax */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <p className="font-medium text-zinc-200">
                        {inq.travelDate || 'Flexible Dates'}
                      </p>
                      <p className="text-[10px] text-zinc-400">{inq.travelersCount} Travelers</p>
                    </td>

                    {/* Budget */}
                    <td className="py-3.5 px-4 whitespace-nowrap font-medium text-emerald-400">
                      {inq.estimatedBudget || '$2,000+'}
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <StatusBadge status={inq.status} />
                    </td>

                    {/* Source */}
                    <td className="py-3.5 px-4 whitespace-nowrap">
                      <span className="rounded-lg bg-[#182613] px-2 py-0.5 text-[10px] text-zinc-300 border border-[#263c1e]">
                        {inq.source.replace('_', ' ')}
                      </span>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-1.5" onClick={(e) => e.stopPropagation()}>
                        <a
                          href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="WhatsApp Client"
                          className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#25D366]/20 hover:text-[#25D366] transition-colors"
                        >
                          <MessageCircle className="h-4 w-4" />
                        </a>
                        <button
                          onClick={() => setSelectedInquiry(inq)}
                          title="Open Drawer Details"
                          className="rounded-lg p-1.5 text-zinc-400 hover:bg-brand-green/20 hover:text-brand-green transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Slide-out Lead Drawer */}
      <LeadDetailDrawer
        inquiry={selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />

      {/* Log Offline Inquiry Modal */}
      {showNewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-full max-w-lg rounded-3xl bg-[#11190e] border border-[#283e1c] p-6 text-white shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#213318]">
              <h3 className="text-base font-bold text-white">Log Offline Safari Lead</h3>
              <button
                onClick={() => setShowNewModal(false)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleCreateNewInquiry} className="mt-4 space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                    Client Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. David Mueller"
                    value={newClientName}
                    onChange={(e) => setNewClientName(e.target.value)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="david@travel.com"
                    value={newEmail}
                    onChange={(e) => setNewEmail(e.target.value)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+49 170 123456"
                    value={newPhone}
                    onChange={(e) => setNewPhone(e.target.value)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                    Country of Origin
                  </label>
                  <input
                    type="text"
                    placeholder="Germany"
                    value={newCountry}
                    onChange={(e) => setNewCountry(e.target.value)}
                    className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  Package / Safari Focus
                </label>
                <input
                  type="text"
                  placeholder="3-Day Bwindi Gorilla Trekking"
                  value={newPackage}
                  onChange={(e) => setNewPackage(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  Estimated Budget
                </label>
                <input
                  type="text"
                  placeholder="$3,000 - $4,000"
                  value={newBudget}
                  onChange={(e) => setNewBudget(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  Trip Notes / Special Requests
                </label>
                <textarea
                  rows={3}
                  placeholder="Inquired via phone regarding gorilla permits and fly-in charter options..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#213318]">
                <button
                  type="button"
                  onClick={() => setShowNewModal(false)}
                  className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:bg-[#172314] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs cursor-pointer"
                >
                  Save Safari Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminInquiries;
