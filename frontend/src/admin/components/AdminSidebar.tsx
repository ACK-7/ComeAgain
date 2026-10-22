import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Users,
  Compass,
  Car,
  FileText,
  Star,
  Mail,
  Newspaper,
  Settings,
  Activity,
  LogOut,
  ExternalLink,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';
import { useAdminAuth } from '../context/AdminAuthContext';


interface AdminSidebarProps {
  onCloseMobile?: () => void;
}

interface NavItem {
  label: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
  exact?: boolean;
  badge?: string;
  badgeColor?: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export const AdminSidebar: React.FC<AdminSidebarProps> = ({ onCloseMobile }) => {
  const { user, logout } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const navSections: NavSection[] = [
    {
      title: 'Overview',
      items: [
        { label: 'Dashboard', path: '/admin', icon: LayoutDashboard, exact: true },
      ],
    },
    {
      title: 'Operations & CRM',
      items: [
        {
          label: 'Safari Inquiries',
          path: '/admin/inquiries',
          icon: Users,

          badgeColor: 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30',
        },
        { label: 'Newsletter Subscribers', path: '/admin/subscribers', icon: Mail },
      ],
    },
    {
      title: 'Safaris & Fleet',
      items: [
        { label: 'Safari Packages', path: '/admin/packages', icon: Compass },
        { label: 'Car Hire Fleet', path: '/admin/fleet', icon: Car },
      ],
    },
    {
      title: 'Content & Reputation',
      items: [
        { label: 'Safari Blog & Guides', path: '/admin/blog', icon: FileText },
        { label: 'Reviews & Feedback', path: '/admin/reviews', icon: Star },
        { label: 'AI Tourism News', path: '/admin/tourism-news', icon: Newspaper },
      ],
    },
    {
      title: 'System & Hosting',
      items: [
        { label: 'Staff Access', path: '/admin/staff', icon: ShieldCheck },
        { label: 'Business Settings', path: '/admin/settings', icon: Settings },
        { label: 'cPanel & API Health', path: '/admin/system-health', icon: Activity },
      ],
    },
  ];

  return (
    <aside className="flex h-full w-72 flex-col justify-between border-r border-[#223518] bg-[#0c1208]/95 backdrop-blur-xl text-white select-none">
      {/* Brand Header */}
      <div>
        <div className="flex items-center justify-between border-b border-[#1f3015] px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-green to-[#2f5c2f] font-serif text-lg font-bold text-white shadow-md shadow-brand-green/20">
              CA
            </div>
            <div>
              <h2 className="text-sm font-bold tracking-tight text-white">COME AGAIN</h2>
              <div className="flex items-center gap-1.5 text-[11px] font-medium text-brand-accent">
                <ShieldCheck className="h-3 w-3" />
                <span>Admin Suite v2.0</span>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="h-[calc(100vh-190px)] overflow-y-auto px-4 py-4 space-y-6 scrollbar-thin scrollbar-thumb-[#1f3015]">
          {navSections.map((section, idx) => (
            <div key={idx}>
              <p className="px-3 text-[10px] font-bold uppercase tracking-wider text-zinc-400">
                {section.title}
              </p>
              <div className="mt-2 space-y-1">
                {section.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <NavLink
                      key={i}
                      to={item.path}
                      end={item.exact}
                      onClick={onCloseMobile}
                      className={({ isActive }) =>
                        `group flex items-center justify-between rounded-xl px-3 py-2 text-sm font-medium transition-all duration-200 ${
                          isActive
                            ? 'bg-gradient-to-r from-brand-green/20 to-transparent text-white border-l-4 border-brand-green shadow-inner'
                            : 'text-zinc-400 hover:bg-[#152210] hover:text-zinc-100'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          <div className="flex items-center gap-3">
                            <Icon
                              className={`h-4 w-4 transition-colors ${
                                isActive ? 'text-brand-accent' : 'text-zinc-400 group-hover:text-brand-green'
                              }`}
                            />
                            <span>{item.label}</span>
                          </div>

                          {item.badge ? (
                            <span
                              className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${item.badgeColor}`}
                            >
                              {item.badge}
                            </span>
                          ) : (
                            <ChevronRight
                              className={`h-3.5 w-3.5 transition-transform text-zinc-600 group-hover:translate-x-0.5 group-hover:text-zinc-400 ${
                                isActive ? 'opacity-100 text-brand-accent' : 'opacity-0'
                              }`}
                            />
                          )}
                        </>
                      )}
                    </NavLink>
                  );
                })}
              </div>
            </div>
          ))}

          {/* External Public Link */}
          <div className="pt-2 border-t border-[#1a2813]">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between rounded-xl px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:bg-[#152210] hover:text-white group"
            >
              <span className="flex items-center gap-2.5">
                <ExternalLink className="h-4 w-4 text-zinc-500 group-hover:text-brand-green" />
                <span>View Live Safari Website</span>
              </span>
              <span className="text-[10px] text-zinc-500">↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* User Footer Card */}
      <div className="border-t border-[#1f3015] bg-[#090e06] p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 overflow-hidden">
            <img
              src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80'}
              alt={user?.name || 'Admin'}
              className="h-9 w-9 rounded-full object-cover border border-brand-green/40"
            />
            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-white">{user?.name || 'Safari Staff'}</p>
              <p className="truncate text-[10px] text-zinc-400 capitalize">
                {user?.role?.replace('_', ' ') || 'Administrator'}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            title="Log out of Admin Suite"
            className="rounded-lg p-2 text-zinc-400 transition-colors hover:bg-rose-500/10 hover:text-rose-400"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
