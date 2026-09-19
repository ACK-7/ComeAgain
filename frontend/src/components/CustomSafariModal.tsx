import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, ShieldCheck } from 'lucide-react';
import { useCustomSafariModal } from '../context/CustomSafariModalContext';
import SafariPlannerWizard from './SafariPlannerWizard';

const CustomSafariModal: React.FC = () => {
  const { isOpen, options, closeModal } = useCustomSafariModal();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
          className="fixed inset-0 bg-brand-dark/80 backdrop-blur-md"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden z-10 border border-gray-100 my-6 max-h-[90vh] flex flex-col text-left"
        >
          {/* Header */}
          <div className="bg-brand-dark text-white px-6 py-5 sm:px-8 sm:py-6 relative shrink-0">
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-brand-green font-bold text-xs uppercase tracking-widest mb-1.5">
              <Sparkles className="w-4 h-4" />
              {options.packageTitle?.includes('Guide') ? 'Private Guide & Vehicle Request' : 'Plan Your Tailor-Made Safari'}
            </div>
            
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif font-bold text-white leading-tight">
              {options.packageTitle ? options.packageTitle : 'Design Your Dream African Safari'}
            </h3>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-xs text-gray-300">
              <span className="flex items-center gap-1 text-brand-green">
                <ShieldCheck className="w-3.5 h-3.5" /> UTB & AUTO Licensed Tour Operator
              </span>
              <span>•</span>
              <span>Free quote within 2–4 hours</span>
              <span>•</span>
              <span>100% Flexible & Tailor-Made</span>
            </div>
          </div>

          {/* Scrollable Wizard Body */}
          <div className="overflow-y-auto flex-1">
            <SafariPlannerWizard
              initialPackageTitle={options.packageTitle}
              initialDestination={options.destination}
              initialDuration={options.duration}
              onSuccessClose={closeModal}
              isStandalonePage={false}
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default CustomSafariModal;
