import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  Menu,
  Search,
  Bell,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
  Clock,
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';
import { adminApi } from '../services/adminApi';
import type { SafariInquiry } from '../types/adminTypes';

interface AdminHeaderProps {
  onOpenMobileMenu: () => void;
  onOpenCommandPalette: () => void;
}

export const AdminHeader: React.FC<AdminHeaderProps> = ({
  onOpenMobileMenu,
  onOpenCommandPalette,
}) => {
  const { user } = useAdminAuth();
  const location = useLocation();
  const [apiOnline, setApiOnline] = useState<boolean | null>(null);
  const [showNotifications, setShowNotifications] = useState(false);

  const [recentInquiries, setRecentInquiries] = useState<SafariInquiry[]>([]);
  useEffect(() => { if (user?.role !== 'content_editor') adminApi.getInquiries().then(list => setRecentInquiries(list.slice(0, 3))).catch(() => {}); }, [user?.role]);
  // Check backend connectivity on mount
  useEffect(() => {
    let isMounted = true;
    adminApi.getStats().then(() => {
      if (isMounted) {
        setApiOnline(true);
      }
    }).catch(() => { if (isMounted) setApiOnline(false); });
    return () => {
      isMounted = false;
    };
  }, []);

  // Format breadcrumbs
  const pathParts = location.pathname.split('/').filter(Boolean);
  const currentPage = pathParts[pathParts.length - 1] || 'dashboard';

  const formatBreadcrumb = (str: string) => {
    if (str === 'admin') return 'Admin';
    return str
      .split('-')
      .map((s) => s.charAt(0).toUpperCase() + s.slice(1))
      .join(' ');
  };



  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-[#223518] bg-[#0c1208]/90 px-4 sm:px-6 backdrop-blur-md transition-colors">
      {/* Left: Mobile Toggle & Breadcrumbs */}
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileMenu}
          className="rounded-lg p-2 text-zinc-400 hover:bg-[#152210] hover:text-white lg:hidden"
        >
          <Menu className="h-5 w-5" />
        </button>

        {/* Breadcrumb Path */}
        <nav className="flex items-center gap-2 text-xs font-medium text-zinc-400">
          <Link to="/admin" className="hover:text-brand-green transition-colors">
            Come Again
          </Link>
          <ChevronRight className="h-3 w-3 text-zinc-600" />
          <span className="text-white font-semibold">{formatBreadcrumb(currentPage)}</span>
        </nav>
      </div>

      {/* Right: Search, API Status, Notifications, Profile */}
      <div className="flex items-center gap-2.5">
        {/* Command Search Trigger */}
        <button
          onClick={onOpenCommandPalette}
          className="hidden md:flex items-center gap-2 rounded-xl bg-[#141d11] px-3 py-1.5 text-xs text-zinc-400 border border-[#24351a] hover:border-brand-green/40 hover:text-white transition-colors"
        >
          <Search className="h-3.5 w-3.5 text-brand-green" />
          <span>Quick Search...</span>
          <kbd className="ml-2 rounded bg-[#1e2c17] px-1.5 py-0.5 text-[10px] font-mono text-zinc-400 border border-[#2b3e21]">
            ⌘K
          </kbd>
        </button>

        {/* API Backend Status Pill */}
        <div
          title={
            apiOnline
              ? 'Backend API Connected (Live synchronization)'
              : 'Operating with Local State Storage (Zero-downtime)'
          }
          className={`hidden sm:flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium border ${
            apiOnline
              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
              : 'bg-amber-500/10 text-amber-300 border-amber-500/30'
          }`}
        >
          {apiOnline ? (
            <CheckCircle2 className="h-3 w-3 text-emerald-400" />
          ) : (
            <AlertCircle className="h-3 w-3 text-amber-400" />
          )}
          <span>{apiOnline ? 'API Synced' : 'Offline Mode'}</span>
        </div>

        {/* Notifications Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="relative rounded-xl p-2 text-zinc-400 hover:bg-[#152210] hover:text-white transition-colors"
          >
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
            </span>
          </button>

          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-[#141b12] border border-[#2d421e] p-3 shadow-2xl shadow-black/90 z-50 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-[#233519]">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Recent Inquiries
                </h4>
                <Link
                  to="/admin/inquiries"
                  onClick={() => setShowNotifications(false)}
                  className="text-[11px] font-semibold text-brand-accent hover:underline"
                >
                  View All
                </Link>
              </div>

              <div className="mt-2 space-y-2">
                {recentInquiries.map((inq) => (
                  <Link
                    key={inq.id}
                    to="/admin/inquiries"
                    onClick={() => setShowNotifications(false)}
                    className="block rounded-xl bg-[#192415] p-2.5 transition-colors hover:bg-[#20301c]"
                  >
                    <div className="flex items-start justify-between">
                      <p className="text-xs font-semibold text-white truncate max-w-[170px]">
                        {inq.clientName}
                      </p>
                      <span className="flex items-center gap-1 text-[10px] text-zinc-400">
                        <Clock className="h-2.5 w-2.5" />
                        Today
                      </span>
                    </div>
                    <p className="mt-1 text-[11px] text-zinc-300 truncate">
                      {inq.packageInterest || inq.message}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Public Site Quick Link */}
        <a
          href="/"
          target="_blank"
          rel="noopener noreferrer"
          title="Open Public Website"
          className="rounded-xl p-2 text-zinc-400 hover:bg-[#152210] hover:text-white transition-colors"
        >
          <ExternalLink className="h-4 w-4" />
        </a>

        {/* User Avatar */}
        <div className="flex items-center gap-2 pl-2 border-l border-[#203217]">
          <img
            src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
            alt="Profile"
            className="h-8 w-8 rounded-full object-cover border border-brand-green/40"
          />
        </div>
      </div>
    </header>
  );
};
