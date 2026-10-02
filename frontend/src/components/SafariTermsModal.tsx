import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, AlertCircle, FileText, CheckCircle2 } from 'lucide-react';

interface SafariTermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SafariTermsModal: React.FC<SafariTermsModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-3xl bg-[#0d1610] border border-brand-green/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8 max-h-[90vh] flex flex-col text-left"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 bg-brand-dark/95">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-brand-green/20 border border-brand-green/40 flex items-center justify-center text-brand-green">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                    Booking Terms & Cancellation Policy
                  </h3>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    Official guidelines compliant with UTB & Uganda Wildlife Authority (UWA)
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-sans text-sm text-gray-300 leading-relaxed custom-scrollbar">
              
              {/* Section 1: Gorilla & Primate Permits */}
              <div className="p-4 sm:p-5 rounded-xl bg-brand-green/10 border border-brand-green/30 text-white">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-base text-brand-green mb-1">
                      1. Mountain Gorilla & Chimpanzee Permits (UWA Policy)
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-200">
                      Uganda Wildlife Authority (UWA) permits ($800 per Gorilla Trekking permit, $250 per Chimpanzee permit) are issued under strict national conservation quotas. Upon confirming your safari, <strong>100% of the permit fee is required immediately</strong> to purchase and secure your dated tracking slots directly from UWA. By Ugandan government regulation, issued permits are non-refundable. However, Come Again Tours will assist in rescheduling dates or permit transfers where permitted by UWA guidelines.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 2: Booking Deposit & Payments */}
              <div>
                <h4 className="font-bold text-base text-white flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" /> 2. Booking Deposits & Payment Schedule
                </h4>
                <ul className="space-y-2 pl-6 list-disc text-gray-300">
                  <li>
                    <strong>Deposit:</strong> A 30% deposit of the total safari package cost (plus 100% of primate permit fees) confirms your reservation and locks in lodge accommodations.
                  </li>
                  <li>
                    <strong>Final Balance:</strong> The remaining 70% balance is payable 30 days prior to your arrival date, or in cash (USD newer than 2013) upon arrival in Entebbe by prior written arrangement.
                  </li>
                  <li>
                    <strong>Payment Methods:</strong> Payments are processed via official Bank Wire Transfer (SWIFT) directly to our registered corporate bank account in Uganda. Official invoice and verified banking instructions are issued directly by our reservations desk upon confirming your dates and permit availability. (Online card payment gateway integration is currently underway).
                  </li>
                </ul>
              </div>

              {/* Section 3: Cancellation Schedule */}
              <div>
                <h4 className="font-bold text-base text-white flex items-center gap-2 mb-2">
                  <FileText className="w-4 h-4 text-brand-green" /> 3. Cancellation & Refund Scale
                </h4>
                <p className="text-xs text-gray-400 mb-3">
                  If you need to cancel your safari, notification must be submitted in writing. The refund scale applies to the safari package portion (excluding primate permits):
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-green block mb-1">60+ Days Prior</span>
                    <span className="text-lg font-bold text-white block">80% Refund</span>
                    <span className="text-[11px] text-gray-400">Of safari package cost</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-yellow-400 block mb-1">30 to 59 Days</span>
                    <span className="text-lg font-bold text-white block">50% Refund</span>
                    <span className="text-[11px] text-gray-400">Of safari package cost</span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-white/5 border border-white/10">
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400 block mb-1">Under 30 Days</span>
                    <span className="text-lg font-bold text-white block">Rescheduling</span>
                    <span className="text-[11px] text-gray-400">Date postponement credit</span>
                  </div>
                </div>
              </div>

              {/* Section 4: Travel Insurance & Medical Protection */}
              <div>
                <h4 className="font-bold text-base text-white flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" /> 4. Travel Insurance & Health Guidelines
                </h4>
                <p className="text-gray-300">
                  Comprehensive international travel and medical evacuation insurance is strongly advised for all international guests. Travelers to Uganda must present a valid Yellow Fever vaccination certificate upon entry at Entebbe International Airport (EBB).
                </p>
              </div>

              {/* Section 5: Vehicles & Safari Driver-Guides */}
              <div>
                <h4 className="font-bold text-base text-white flex items-center gap-2 mb-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-green" /> 5. Safari Vehicles & Guides Guarantee
                </h4>
                <p className="text-gray-300">
                  All guided itineraries include 4x4 custom safari Land Cruisers or safari vans with pop-up roofs for 360° wildlife viewing, working air conditioning, charging ports, and certified, English-speaking professional driver-guides licensed by the Uganda Tourism Board (UTB).
                </p>
              </div>

            </div>

            {/* Footer Action */}
            <div className="p-5 border-t border-white/10 bg-brand-dark/95 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-gray-400 text-center sm:text-left">
                Questions about custom safari terms? Speak directly with our 24/7 reservations desk.
              </p>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-brand-green text-white font-bold text-xs uppercase tracking-wider rounded-lg hover:bg-brand-green/90 transition-colors shadow-lg"
              >
                I Understand & Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default SafariTermsModal;
