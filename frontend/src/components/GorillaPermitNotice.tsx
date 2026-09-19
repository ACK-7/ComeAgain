import React from 'react';
import { ShieldAlert, Calendar, Sparkles } from 'lucide-react';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';

interface GorillaPermitNoticeProps {
  compact?: boolean;
}

const GorillaPermitNotice: React.FC<GorillaPermitNoticeProps> = ({ compact = false }) => {
  const { openModal } = useCustomSafariModal();

  if (compact) {
    return (
      <div className="flex items-center gap-2 p-3 bg-brand-gold/10 border border-brand-gold/25 rounded-xl text-xs text-brand-gold">
        <Sparkles className="w-4 h-4 shrink-0 text-brand-gold" />
        <span>
          <strong>Permit Advisory:</strong> Strictly 8 trekkers per gorilla family daily. Reserve 3–6 months early for peak dry seasons.
        </span>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#142316] via-[#101b13] to-[#18281a] border border-brand-green/30 p-6 sm:p-8 shadow-xl text-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="p-3 rounded-xl bg-brand-gold/10 border border-brand-gold/20 text-brand-gold shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold mb-1">
              <span>Uganda Wildlife Authority (UWA) Regulation</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" /> High Demand Season
              </span>
            </div>
            <h4 className="text-lg sm:text-xl font-serif font-bold text-white mb-2">
              Mountain Gorilla Permit Allocation Notice
            </h4>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              To protect the critically endangered mountain gorillas, Uganda strictly caps permits at <strong>8 visitors per habituated family per day</strong>. Peak travel months (<strong>June–September & December–February</strong>) routinely sell out months ahead. ComeAgain Safaris handles direct advance permit reservations to ensure your trek is guaranteed.
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => openModal({ packageTitle: 'Gorilla Permit Check & Advance Reservation' })}
          className="shrink-0 px-6 py-3 rounded-xl bg-brand-green hover:bg-brand-green/90 text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg transition-transform active:scale-95"
        >
          Check Permit Dates
        </button>
      </div>
    </div>
  );
};

export default GorillaPermitNotice;
