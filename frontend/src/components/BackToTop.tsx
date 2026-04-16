import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1, backgroundColor: '#c6e300', color: '#0c1106' }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-[60] bg-brand-green text-white p-4 rounded-full shadow-2xl transition-colors duration-300 group overflow-hidden"
          aria-label="Back to top"
        >
          <div className="relative z-10">
            <ChevronUp className="w-6 h-6" />
          </div>
          <motion.div 
             className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
             initial={false}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
