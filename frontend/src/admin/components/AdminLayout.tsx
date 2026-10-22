import React, { useState, useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { AdminSidebar } from './AdminSidebar';
import { AdminHeader } from './AdminHeader';
import { CommandPalette } from './CommandPalette';
import { useAdminAuth } from '../context/AdminAuthContext';

export const AdminLayout: React.FC = () => {
  const { user, isAuthenticated, isLoading } = useAdminAuth();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  const [error, setError] = useState('');
  const location = useLocation();
  useEffect(() => {
    const report = (event: Event) => setError((event as CustomEvent<string>).detail);
    window.addEventListener('admin-api-error', report);
    return () => window.removeEventListener('admin-api-error', report);
  }, []);
  const allowed = user?.role === 'super_admin' || (user?.role === 'content_editor'
    ? ['/admin', '/admin/packages', '/admin/blog', '/admin/reviews', '/admin/tourism-news']
    : ['/admin', '/admin/inquiries', '/admin/subscribers', '/admin/fleet']).includes(location.pathname.replace(/\/$/, '') || '/admin');

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0a0f08] text-white">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-brand-green/20 border-t-brand-green rounded-full animate-spin" />
          <p className="text-xs uppercase tracking-widest text-zinc-400 font-mono">
            Loading Admin Suite...
          </p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <div className="flex min-h-screen w-full bg-[#0a0f08] text-white antialiased font-sans">
      {/* Desktop Sidebar */}
      <div className="hidden lg:block lg:w-72 shrink-0">
        <div className="sticky top-0 h-screen">
          <AdminSidebar />
        </div>
      </div>

      {/* Mobile Sidebar Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 flex lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="relative z-10 w-72 max-w-[85vw] bg-[#0c1208]">
            <AdminSidebar onCloseMobile={() => setMobileMenuOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col min-w-0">
        <AdminHeader
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
          onOpenCommandPalette={() => setCommandPaletteOpen(true)}
        />

        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl w-full mx-auto">
          {error && <div role="alert" className="mb-4 rounded-xl border border-red-400 bg-red-950 p-4 text-sm text-white flex justify-between gap-4"><span>{error}</span><button onClick={() => setError('')} aria-label="Dismiss error">Dismiss</button></div>}
          {allowed ? <Outlet /> : <p role="alert">Your account does not have access to this section.</p>}
        </main>
      </div>

      {/* Global Command Palette */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
};
