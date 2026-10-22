import React from 'react';
import { type LucideIcon, TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
  subtitle?: string;
  icon: LucideIcon;
  iconColor?: string;
  onClick?: () => void;
}

export const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  change,
  isPositive = true,
  subtitle,
  icon: Icon,
  iconColor = 'text-brand-green',
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl bg-[#141b12]/80 backdrop-blur-md border border-[#233519]/60 p-5 transition-all duration-300 hover:border-brand-green/40 hover:shadow-lg hover:shadow-brand-green/5 ${
        onClick ? 'cursor-pointer hover:-translate-y-0.5' : ''
      }`}
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">{title}</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-white lg:text-3xl">{value}</h3>
        </div>
        <div className={`rounded-xl bg-[#1b2a12] p-3 ${iconColor} border border-[#2b421d]`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>

      {(change || subtitle) && (
        <div className="mt-4 flex items-center gap-2 pt-2 border-t border-[#1d2d15]">
          {change && (
            <span
              className={`inline-flex items-center gap-0.5 text-xs font-semibold ${
                isPositive ? 'text-emerald-400' : 'text-rose-400'
              }`}
            >
              {isPositive ? (
                <TrendingUp className="h-3.5 w-3.5" />
              ) : (
                <TrendingDown className="h-3.5 w-3.5" />
              )}
              {change}
            </span>
          )}
          {subtitle && <span className="text-xs text-zinc-400">{subtitle}</span>}
        </div>
      )}
    </div>
  );
};
