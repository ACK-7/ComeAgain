import React, { useState, useEffect, useMemo } from 'react';
import {
  Compass,
  Plus,
  Search,
  Star,
  Clock,
  Edit,
  Trash2,
  ExternalLink,
  RefreshCw,
  Database,
  ChevronLeft,
  ChevronRight,
  Layers,
} from 'lucide-react';
import type { SafariPackageItem } from '../types/adminTypes';
import { adminApi } from '../services/adminApi';
import { PackageFormModal } from '../components/PackageFormModal';
import { StatusBadge } from '../components/StatusBadge';
import { PACKAGE_CATEGORIES } from '../../data/packageCategories';

const FALLBACK_IMAGE = `${import.meta.env.BASE_URL}images/Gorillaa.webp`;

function resolveImageUrl(img?: string): string {
  if (!img) return FALLBACK_IMAGE;
  if (img.startsWith('http://') || img.startsWith('https://') || img.startsWith('/')) return img;
  const clean = img.replace(/^\/+/, '');
  return `${import.meta.env.BASE_URL}${clean}`;
}

export const AdminPackages: React.FC = () => {
  const [packages, setPackages] = useState<SafariPackageItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [editingPkg, setEditingPkg] = useState<SafariPackageItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [dataSource, setDataSource] = useState<'database' | 'mock'>('database');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(9); // 9 cards = 3x3 grid

  useEffect(() => {
    loadPackages();
  }, []);

  const loadPackages = async (showSpinner = false) => {
    if (showSpinner) setIsRefreshing(true);
    try {
      const list = await adminApi.getPackages();
      setPackages(list);
      // If list has more than 3 packages, it came from our seeded MySQL database (33 packages)
      setDataSource('database');
    } catch {
      setDataSource('mock');
    } finally {
      if (showSpinner) setIsRefreshing(false);
    }
  };

  const handleSave = async (pkg: SafariPackageItem) => {
    await adminApi.savePackage(pkg);
    setIsModalOpen(false);
    setEditingPkg(null);
    await loadPackages();
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Delete this safari package?')) {
      await adminApi.deletePackage(id);
      await loadPackages();
    }
  };

  const handleToggleFeatured = async (pkg: SafariPackageItem) => {
    const updated = { ...pkg, featured: !pkg.featured };
    await adminApi.savePackage(updated);
    await loadPackages();
  };

  // Full category list including standard categories
  const categories = ['All', ...PACKAGE_CATEGORIES];

  // Filtering
  const filtered = useMemo(() => {
    return packages.filter((p) => {
      const matchesCat = categoryFilter === 'All' || p.category === categoryFilter;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.details?.location && p.details.location.toLowerCase().includes(q)) ||
        p.wildlife?.some((w) => w.toLowerCase().includes(q)) ||
        p.highlights?.some((h) => h.toLowerCase().includes(q));

      return matchesCat && matchesSearch;
    });
  }, [packages, categoryFilter, searchQuery]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [categoryFilter, searchQuery, pageSize]);

  // Pagination calculations
  const totalItems = filtered.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / pageSize));
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = Math.min(startIndex + pageSize, totalItems);
  const paginatedPackages = filtered.slice(startIndex, endIndex);

  return (
    <div className="space-y-6 animate-fadeIn pb-12">
      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold tracking-tight text-white font-serif flex items-center gap-2">
              <Compass className="h-6 w-6 text-brand-green" />
              Safari Packages & Itineraries Manager
            </h1>

            {/* Live Database Status Pill */}
            <span
              className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-semibold border ${
                dataSource === 'database'
                  ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-400'
                  : 'bg-amber-950/60 border-amber-500/40 text-amber-300'
              }`}
            >
              <Database className="h-3 w-3" />
              <span>
                {dataSource === 'database'
                  ? `Live Database: ${packages.length} Packages`
                  : 'Offline Cache'}
              </span>
            </span>
          </div>
          <p className="text-xs text-zinc-400 mt-1">
            Manage your public safari itineraries, pricing tiers, permits inclusion, and featured tours.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => loadPackages(true)}
            disabled={isRefreshing}
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-200 px-3 py-2 text-xs font-medium transition-all cursor-pointer disabled:opacity-50 shadow-sm"
            title="Refresh safari packages from database"
          >
            <RefreshCw className={`h-3.5 w-3.5 text-brand-green ${isRefreshing ? 'animate-spin' : ''}`} />
            <span>{isRefreshing ? 'Syncing...' : 'Refresh'}</span>
          </button>

          <button
            onClick={() => {
              setEditingPkg(null);
              setIsModalOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-xl bg-brand-green hover:bg-[#4ea84e] text-black font-semibold px-4 py-2 text-xs transition-all shadow-md shadow-brand-green/20 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            <span>New Safari Package</span>
          </button>
        </div>
      </div>

      {/* Category Pills & Search */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 scrollbar-thin">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoryFilter(cat)}
              className={`rounded-xl px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors capitalize cursor-pointer ${
                categoryFilter === cat
                  ? 'bg-brand-green text-black font-bold shadow-sm'
                  : 'bg-[#141e11] text-zinc-300 hover:bg-[#1b2816]'
              }`}
            >
              {cat === 'All' ? `All (${packages.length})` : cat}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-zinc-400" />
          <input
            type="text"
            placeholder="Search package title or destination..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-[#141e11] border border-[#233519] pl-9 pr-4 py-2 text-xs text-white placeholder-zinc-500 focus:border-brand-green focus:outline-none"
          />
        </div>
      </div>

      {/* Items Summary & Page Size bar */}
      <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800/60 pb-3">
        <div>
          {totalItems === 0 ? (
            <span>No matching packages found</span>
          ) : (
            <span>
              Showing <strong className="text-zinc-200">{startIndex + 1}–{endIndex}</strong> of{' '}
              <strong className="text-zinc-200">{totalItems}</strong> packages
              {categoryFilter !== 'All' && ` in ${categoryFilter}`}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[11px] text-zinc-500">Per page:</span>
          {[9, 18, 33].map((size) => (
            <button
              key={size}
              onClick={() => setPageSize(size)}
              className={`rounded-lg px-2 py-0.5 text-xs font-medium transition-colors ${
                pageSize === size
                  ? 'bg-zinc-700 text-white font-bold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {size === 33 ? 'All' : size}
            </button>
          ))}
        </div>
      </div>

      {/* Packages Grid */}
      {paginatedPackages.length === 0 ? (
        <div className="rounded-2xl border border-zinc-800 bg-[#11190e] p-12 text-center">
          <Layers className="mx-auto h-12 w-12 text-zinc-600 mb-3" />
          <h3 className="text-base font-semibold text-white">No Safari Packages Found</h3>
          <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto">
            {searchQuery
              ? `No packages matched "${searchQuery}". Try clearing search or selecting a different category.`
              : 'Click Refresh to sync live tours from the MySQL database.'}
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setCategoryFilter('All');
            }}
            className="mt-4 rounded-xl bg-brand-green/20 border border-brand-green/40 text-brand-green px-4 py-1.5 text-xs font-semibold hover:bg-brand-green hover:text-black transition-colors"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginatedPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-[#11190e] border border-[#223519] transition-all hover:border-brand-green/40 hover:shadow-xl hover:shadow-black/60"
            >
              {/* Image Header */}
              <div className="relative h-44 w-full overflow-hidden bg-black/40">
                <img
                  src={resolveImageUrl(pkg.image)}
                  alt={pkg.title}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
                  }}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11190e] via-transparent to-black/30" />

                {/* Status & Featured badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <StatusBadge status={pkg.status} />
                  {pkg.featured && (
                    <span className="flex items-center gap-1 rounded-full bg-brand-accent/20 border border-brand-accent/40 text-brand-accent px-2 py-0.5 text-[10px] font-semibold backdrop-blur-sm">
                      <Star className="h-3 w-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>

                {/* Duration badge */}
                <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-lg bg-black/70 px-2 py-1 text-[11px] font-medium text-white backdrop-blur-sm">
                  <Clock className="h-3 w-3 text-brand-green" />
                  <span>{pkg.details?.duration || `${pkg.durationDays} Days`}</span>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-brand-accent">
                    {pkg.category}
                  </p>
                  <h3 className="mt-1 text-sm font-bold text-white leading-snug line-clamp-2">
                    {pkg.title}
                  </h3>

                  <p className="mt-1.5 text-xs text-zinc-400 line-clamp-1">
                    📍 {pkg.details?.location || 'Uganda National Parks'}
                  </p>

                  {/* Highlights tags */}
                  {pkg.highlights && pkg.highlights.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {pkg.highlights.slice(0, 2).map((h, i) => (
                        <span
                          key={i}
                          className="rounded bg-[#172413] border border-[#233519] px-2 py-0.5 text-[10px] text-zinc-300 truncate max-w-[200px]"
                        >
                          ✓ {h}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-[#1b2b13] flex items-center justify-between">
                  <div>
                    <p className="text-[10px] text-zinc-400">From ({pkg.per || 'per person'})</p>
                    <p className="text-base font-bold text-emerald-400">
                      {pkg.price || `$${pkg.priceUSD?.toLocaleString() || '1,450'}`}
                    </p>
                  </div>

                  <div className="flex items-center gap-1">
                    <button
                      onClick={() => handleToggleFeatured(pkg)}
                      title={pkg.featured ? 'Remove from Featured' : 'Feature on Home Page'}
                      className={`rounded-lg p-1.5 transition-colors cursor-pointer ${
                        pkg.featured
                          ? 'text-brand-accent bg-brand-accent/10'
                          : 'text-zinc-500 hover:text-zinc-300'
                      }`}
                    >
                      <Star className={`h-4 w-4 ${pkg.featured ? 'fill-current' : ''}`} />
                    </button>

                    <a
                      href={`/package/${pkg.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Preview Public Page"
                      className="rounded-lg p-1.5 text-zinc-400 hover:bg-[#1a2914] hover:text-white transition-colors cursor-pointer"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>

                    <button
                      onClick={() => {
                        setEditingPkg(pkg);
                        setIsModalOpen(true);
                      }}
                      title="Edit Package"
                      className="rounded-lg p-1.5 text-zinc-400 hover:bg-brand-green/20 hover:text-brand-green transition-colors cursor-pointer"
                    >
                      <Edit className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() => handleDelete(pkg.id)}
                      title="Delete Package"
                      className="rounded-lg p-1.5 text-zinc-400 hover:bg-rose-500/15 hover:text-rose-400 transition-colors cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-zinc-800/60">
          <p className="text-xs text-zinc-400">
            Page <strong className="text-zinc-200">{currentPage}</strong> of{' '}
            <strong className="text-zinc-200">{totalPages}</strong>
          </p>

          <div className="flex items-center gap-1.5">
            {/* Prev Button */}
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.max(1, prev - 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === 1}
              className="inline-flex items-center gap-1 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-3.5 w-3.5" />
              <span>Previous</span>
            </button>

            {/* Page Number Buttons */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => {
                  setCurrentPage(pageNum);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className={`min-w-[32px] h-8 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  currentPage === pageNum
                    ? 'bg-brand-green text-black font-bold shadow-sm'
                    : 'bg-[#141e11] text-zinc-300 hover:bg-[#1b2816]'
                }`}
              >
                {pageNum}
              </button>
            ))}

            {/* Next Button */}
            <button
              onClick={() => {
                setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              disabled={currentPage === totalPages}
              className="inline-flex items-center gap-1 rounded-xl border border-zinc-700 bg-zinc-800 px-3 py-1.5 text-xs font-medium text-zinc-300 hover:bg-zinc-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Package Form Modal */}
      <PackageFormModal key={`${isModalOpen}-${editingPkg?.id || "new"}`}
        pkg={editingPkg}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingPkg(null);
        }}
        onSave={handleSave}
      />
    </div>
  );
};

export default AdminPackages;
