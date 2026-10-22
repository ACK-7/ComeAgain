import React, { useState, useEffect } from 'react';
import {
  Mail,
  Download,
  Plus,
  Search,
  Trash2,
  CheckCircle,
  XCircle,
  UserCheck,
  RefreshCw,
} from 'lucide-react';
import type { NewsletterSubscriber } from '../types/adminTypes';
import { adminApi } from '../services/adminApi';

export const AdminSubscribers: React.FC = () => {
  const [subscribers, setSubscribers] = useState<NewsletterSubscriber[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newSource, setNewSource] = useState('admin_manual');
  const [showAddModal, setShowAddModal] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadSubscribers();
  }, []);

  const loadSubscribers = async () => {
    setIsRefreshing(true);
    try {
      const list = await adminApi.getSubscribers();
      setSubscribers(list);
    } finally {
      setIsRefreshing(false);
    }
  };

  const handleToggle = async (id: string) => {
    await adminApi.toggleSubscriberStatus(id);
    await loadSubscribers();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Remove this subscriber from the mailing list?')) {
      await adminApi.deleteSubscriber(id);
      await loadSubscribers();
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newEmail.trim()) return;

    await adminApi.addSubscriber(newEmail.trim(), newSource);
    setNewEmail('');
    setShowAddModal(false);
    await loadSubscribers();
  };

  const handleExportCSV = () => {
    const headers = ['Email', 'Source', 'Status', 'Date Subscribed', 'IP Address'];
    const rows = subscribers.map((s) => [
      s.email,
      s.source,
      s.isActive ? 'Active' : 'Unsubscribed',
      s.subscribedAt,
      s.ipAddress || '',
    ]);

    const cell = (value: string) => '"' + (/^[=+@\-\t\r]/.test(value) ? "'" : '') + value.replaceAll('"', '""') + '"';
    const csvContent = [headers, ...rows].map(row => row.map(cell).join(',')).join('\r\n');
    const encodedUri = URL.createObjectURL(new Blob(['\ufeff' + csvContent], { type: 'text/csv;charset=utf-8' }));
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute(
      'download',
      `comeagain_safari_subscribers_${new Date().toISOString().slice(0, 10)}.csv`
    );
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(encodedUri);
  };

  const filtered = subscribers.filter(
    (s) =>
      s.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.source.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeCount = subscribers.filter((s) => s.isActive).length;

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
            <Mail className="h-6 w-6 text-brand-green" />
            Newsletter & Safari Leads Hub
          </h1>
          <p className="text-xs text-zinc-400 mt-1">
            Manage newsletter subscribers registered across the Safari Journal and website forms.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={loadSubscribers}
            disabled={isRefreshing}
            title="Refresh Subscribers from live database"
            className="inline-flex items-center gap-1.5 rounded-xl border border-[#273d1f] bg-[#141f12] hover:bg-[#1b2b16] text-zinc-300 hover:text-white px-3.5 py-2 text-xs font-medium transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-brand-green ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Refreshing...' : 'Refresh'}</span>
          </button>

          <button
            onClick={handleExportCSV}
            className="inline-flex items-center gap-2 rounded-xl bg-[#172413] hover:bg-[#20321a] text-zinc-200 border border-[#2b3e20] px-3.5 py-2 text-xs font-semibold transition-all cursor-pointer"
          >
            <Download className="h-4 w-4 text-brand-accent" />
            <span>Export CSV</span>
          </button>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-brand-green/20 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            <span>Add Subscriber</span>
          </button>
        </div>
      </div>

      {/* KPI Stats Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="rounded-2xl bg-[#141b12] border border-[#233519] p-4 flex items-center gap-3">
          <div className="rounded-xl bg-[#1b2a12] p-2.5 text-brand-green border border-[#2b421d]">
            <UserCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-zinc-400">Total Subscribers</p>
            <h4 className="text-xl font-bold text-white">{subscribers.length}</h4>
          </div>
        </div>

        <div className="rounded-2xl bg-[#141b12] border border-[#233519] p-4 flex items-center gap-3">
          <div className="rounded-xl bg-emerald-500/10 p-2.5 text-emerald-400 border border-emerald-500/30">
            <CheckCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-zinc-400">Active Contacts</p>
            <h4 className="text-xl font-bold text-emerald-400">{activeCount}</h4>
          </div>
        </div>

        <div className="rounded-2xl bg-[#141b12] border border-[#233519] p-4 flex items-center gap-3">
          <div className="rounded-xl bg-zinc-500/10 p-2.5 text-zinc-400 border border-zinc-500/30">
            <XCircle className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-wider text-zinc-400">Unsubscribed</p>
            <h4 className="text-xl font-bold text-zinc-400">{subscribers.length - activeCount}</h4>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="relative w-full sm:w-80">
        <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
        <input
          type="text"
          placeholder="Search by email or source..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-xl bg-[#141e11] border border-[#233519] pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
        />
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl bg-[#11190e] border border-[#223519] shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-[#0b1107] text-[11px] uppercase tracking-wider text-zinc-400 border-b border-[#223519]">
              <tr>
                <th className="py-3.5 px-4 font-semibold">Subscriber Email</th>
                <th className="py-3.5 px-4 font-semibold">Source Channel</th>
                <th className="py-3.5 px-4 font-semibold">Date Subscribed</th>
                <th className="py-3.5 px-4 font-semibold">Status</th>
                <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1e2e16]">
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-zinc-500">
                    No subscribers found matching &ldquo;{searchQuery}&rdquo;
                  </td>
                </tr>
              ) : (
                filtered.map((sub) => (
                  <tr key={sub.id} className="hover:bg-[#162312] transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-white">
                      {sub.email}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="rounded-lg bg-[#182613] px-2 py-0.5 text-[10px] text-zinc-300 border border-[#263c1e]">
                        {sub.source}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-zinc-400">
                      {new Date(sub.subscribedAt).toLocaleDateString()}
                    </td>
                    <td className="py-3.5 px-4">
                      <button
                        onClick={() => handleToggle(sub.id)}
                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium border cursor-pointer transition-colors ${
                          sub.isActive
                            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20'
                            : 'bg-zinc-500/10 text-zinc-400 border-zinc-500/30 hover:bg-zinc-500/20'
                        }`}
                      >
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${
                            sub.isActive ? 'bg-emerald-400' : 'bg-zinc-500'
                          }`}
                        />
                        <span>{sub.isActive ? 'Active' : 'Unsubscribed'}</span>
                      </button>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => handleDelete(sub.id)}
                        title="Delete Subscriber"
                        className="rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/15 hover:text-rose-400 transition-colors"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Subscriber Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div
            className="w-full max-w-md rounded-3xl bg-[#11190e] border border-[#283e1c] p-6 text-white shadow-2xl shadow-black/80"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#213318]">
              <h3 className="text-base font-bold text-white">Add Newsletter Subscriber</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-zinc-400 hover:text-white"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAdd} className="mt-4 space-y-4">
              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="traveler@example.com"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2.5 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-zinc-300 mb-1">
                  Acquisition Source
                </label>
                <select
                  value={newSource}
                  onChange={(e) => setNewSource(e.target.value)}
                  className="w-full rounded-xl bg-[#172314] border border-[#273d1f] px-3.5 py-2.5 text-xs text-white focus:border-brand-green focus:outline-none"
                >
                  <option value="admin_manual">Admin Manual Entry</option>
                  <option value="trade_fair">Tourism Trade Fair / WTM</option>
                  <option value="phone_inquiry">Phone Inquiry</option>
                  <option value="safari_partner">Partner Operator</option>
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-3 border-t border-[#213318]">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="rounded-xl px-4 py-2 text-xs text-zinc-400 hover:bg-[#172314] hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs cursor-pointer"
                >
                  Save Subscriber
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
export default AdminSubscribers;
