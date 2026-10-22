import { useAdminAuth } from '../context/AdminAuthContext';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Users,
  DollarSign,
  Compass,
  Mail,
  Sparkles,
  ArrowUpRight,
  MessageCircle,
  Clock,
  MapPin,
  CheckCircle2,
} from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { StatusBadge } from '../components/StatusBadge';
import { adminApi } from '../services/adminApi';
import type { DashboardStats, SafariInquiry } from '../types/adminTypes';
import { LeadDetailDrawer } from '../components/LeadDetailDrawer';

export const AdminDashboard: React.FC = () => {
  const { user } = useAdminAuth();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [recentInquiries, setRecentInquiries] = useState<SafariInquiry[]>([]);
  const [selectedInquiry, setSelectedInquiry] = useState<SafariInquiry | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([adminApi.getStats(), user?.role === 'content_editor' ? Promise.resolve([]) : adminApi.getInquiries()]).then(([data, inquiries]) => { setStats(data); setRecentInquiries(inquiries.slice(0, 5)); }).catch(() => {});
  }, [user?.role]);

  const loadData = async () => {
    const s = await adminApi.getStats();
    const inqs = user?.role === 'content_editor' ? [] : await adminApi.getInquiries();
    setStats(s);
    setRecentInquiries(inqs.slice(0, 5));
  };

  const handleUpdateInquiry = async (updated: SafariInquiry) => {
    await adminApi.saveInquiry(updated);
    setSelectedInquiry(updated);
    await loadData();
  };

  const handleDeleteInquiry = async (id: string) => {
    if (window.confirm('Delete this inquiry?')) {
      await adminApi.deleteInquiry(id);
      setSelectedInquiry(null);
      await loadData();
    }
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#142310] via-[#101b0d] to-[#0a1208] border border-[#263e1d] p-6 lg:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-green/15 border border-brand-green/30 px-3 py-1 text-xs font-semibold text-brand-accent mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Safari Operations Center</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-serif">
              Welcome back to Come Again Safaris
            </h1>
            <p className="mt-2 text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Real-time pipeline monitoring, gorilla permit requests, customer inquiries, and fleet operations across Uganda.
            </p>
          </div>

          {/* Fast Quick Action Bar */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={() => navigate('/admin/inquiries')}
              className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2.5 text-xs transition-all shadow-lg shadow-brand-green/20 cursor-pointer"
            >
              <Users className="h-4 w-4" />
              <span>Review Leads</span>
            </button>

            <button
              onClick={() => navigate('/admin/packages')}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a2914] hover:bg-[#23381b] text-white border border-[#2b4420] px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer"
            >
              <Compass className="h-4 w-4 text-brand-accent" />
              <span>Catalog Manager</span>
            </button>

            <button
              onClick={() => navigate('/admin/subscribers')}
              className="inline-flex items-center gap-2 rounded-xl bg-[#1a2914] hover:bg-[#23381b] text-white border border-[#2b4420] px-4 py-2.5 text-xs font-semibold transition-all cursor-pointer"
            >
              <Mail className="h-4 w-4 text-emerald-400" />
              <span>Mailing List</span>
            </button>
          </div>
        </div>

        {/* Ambient background decoration */}
        <div className="absolute right-0 top-0 -mt-12 -mr-12 w-64 h-64 rounded-full bg-brand-green/10 blur-3xl pointer-events-none" />
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard
          title="Active Safari Leads"
          value={stats?.activeLeads ?? '—'}
          subtitle="Awaiting consultant response"
          icon={Users}
          iconColor="text-brand-green"
          onClick={() => navigate('/admin/inquiries')}
        />

        <StatCard
          title="Estimated Pipeline"
          value={`$${(stats?.estimatedPipelineUSD ?? 0).toLocaleString()}`}
          subtitle="Total open quote value"
          icon={DollarSign}
          iconColor="text-brand-accent"
          onClick={() => navigate('/admin/inquiries')}
        />

        <StatCard
          title="Confirmed Bookings"
          value={stats?.confirmedBookings ?? '—'}
          subtitle="Inquiries marked confirmed"
          icon={CheckCircle2}
          iconColor="text-emerald-400"
          onClick={() => navigate('/admin/inquiries')}
        />

        <StatCard
          title="Journal Subscribers"
          value={stats?.totalSubscribers ?? '—'}
          subtitle="Email marketing list"
          icon={Mail}
          iconColor="text-blue-400"
          onClick={() => navigate('/admin/subscribers')}
        />
      </div>

      {/* Two Column Layout: Leads Pipeline + Safari Destinations */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Inquiries (2 Cols) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-white font-serif flex items-center gap-2">
                <Clock className="h-4 w-4 text-brand-green" />
                Recent Safari Inquiries & Requests
              </h3>
              <p className="text-xs text-zinc-400 mt-0.5">
                Incoming leads captured via website forms and staff entries.
              </p>
            </div>

            <button
              onClick={() => navigate('/admin/inquiries')}
              className="text-xs font-semibold text-brand-accent hover:underline flex items-center gap-1"
            >
              <span>View All CRM</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>

          <div className="divide-y divide-[#1d2d16] rounded-2xl bg-[#11190e] border border-[#223519] overflow-hidden shadow-xl">
            {recentInquiries.map((inq) => (
              <div
                key={inq.id}
                onClick={() => setSelectedInquiry(inq)}
                className="flex items-center justify-between p-4 hover:bg-[#162312] transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#1b2b14] text-brand-green font-bold text-sm border border-[#28411d]">
                    {inq.clientName.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-white group-hover:text-brand-accent transition-colors truncate">
                      {inq.clientName}
                    </p>
                    <p className="text-xs text-zinc-400 truncate max-w-sm">
                      {inq.packageInterest || inq.message}
                    </p>
                    <div className="flex items-center gap-3 text-[10px] text-zinc-500 mt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-2.5 w-2.5 text-brand-green" />
                        {inq.country}
                      </span>
                      <span>•</span>
                      <span>{inq.travelersCount} Travelers</span>
                      <span>•</span>
                      <span className="font-semibold text-emerald-400">
                        {inq.estimatedBudget || 'Budget not specified'}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 ml-4">
                  <StatusBadge status={inq.status} />

                  <a
                    href={`https://wa.me/${inq.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    title="Quick WhatsApp Reply"
                    className="rounded-xl p-2 text-zinc-400 hover:bg-[#25D366]/20 hover:text-[#25D366] transition-colors"
                  >
                    <MessageCircle className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar Column: Pipeline Stages & Quick Stats */}
        <div className="space-y-6">
          <div className="rounded-2xl bg-[#11190e] border border-[#223519] p-5 space-y-3">
            <h4 className="text-sm font-bold">Current records</h4>
            <p className="text-sm text-zinc-300">Safari packages: {stats?.packagesCount ?? '—'}</p>
            <p className="text-sm text-zinc-300">Fleet vehicles: {stats?.fleetCount ?? '—'}</p>
            <p className="text-sm text-zinc-300">Published articles: {stats?.publishedArticlesCount ?? '—'}</p>
            <p className="text-sm text-zinc-300">Total inquiries: {stats?.totalInquiries ?? '—'}</p>
          </div>
        </div>
      </div>

      {/* Lead Detail Drawer */}
      <LeadDetailDrawer
        inquiry={selectedInquiry}
        onClose={() => setSelectedInquiry(null)}
        onUpdate={handleUpdateInquiry}
        onDelete={handleDeleteInquiry}
      />
    </div>
  );
};
export default AdminDashboard;
