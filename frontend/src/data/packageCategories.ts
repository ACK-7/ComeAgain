/** Standard safari product categories used across packages list, filters, and cards. */
export const PACKAGE_CATEGORIES = [
  'Wildlife Safaris',
  'Gorilla & Primate',
  'Multi-Park Circuits',
  'Adventure & Active',
  'Cultural & Heritage',
  'Fly-In & Premium',
  'Birding Safaris',
  'East Africa & Beyond',
] as const;

export type PackageCategory = (typeof PACKAGE_CATEGORIES)[number];

export const PACKAGE_FILTER_THEMES = ['All', ...PACKAGE_CATEGORIES] as const;

export type PackageFilterTheme = (typeof PACKAGE_FILTER_THEMES)[number];

export const DURATION_FILTERS = [
  { label: 'Any length', value: 'All' },
  { label: 'Short (< 5 days)', value: 'short' },
  { label: 'Medium (5–10 days)', value: 'medium' },
  { label: 'Long (10+ days)', value: 'long' },
] as const;

export type DurationFilterValue = (typeof DURATION_FILTERS)[number]['value'];

export interface PackageFilterable {
  title: string;
  category?: string;
  durationDays?: number;
}

export function getPackageDurationDays(pkg: PackageFilterable): number {
  if (pkg.durationDays != null && !Number.isNaN(pkg.durationDays)) {
    return pkg.durationDays;
  }
  const match = pkg.title.match(/(\d+)\s*Days/i);
  return match ? parseInt(match[1], 10) : 5;
}

export function matchesDurationFilter(
  pkg: PackageFilterable,
  durationFilter: DurationFilterValue
): boolean {
  if (durationFilter === 'All') return true;
  const days = getPackageDurationDays(pkg);
  if (durationFilter === 'short') return days < 5;
  if (durationFilter === 'medium') return days >= 5 && days <= 10;
  return days > 10;
}

export function matchesCategoryFilter(
  pkg: PackageFilterable,
  theme: PackageFilterTheme
): boolean {
  if (theme === 'All') return true;
  return pkg.category === theme;
}

export function formatPackagePrice(price?: string): string {
  if (!price) return '';
  const digits = price.replace(/[^0-9.]/g, '');
  if (!digits) return price;
  const num = parseFloat(digits);
  if (Number.isNaN(num)) return price;
  return `$${num.toLocaleString('en-US')}`;
}
