import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Rocket, X } from 'lucide-react';

const VarunaModal = ({ open = false, onClose = () => {} }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previousOverflow; };
    }
    return undefined;
  }, [open]);

  // Font loading
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Rajdhani:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  if (!open) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md" 
        onClick={onClose} 
      />
      
      {/* Modal Container */}
      <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl border border-blue-600/30 shadow-2xl shadow-blue-600/20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-gray-800/50 hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-300 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X size={18} className="sm:w-5 sm:h-5" />
        </button>

        {/* Header with Rocket Icon */}
        <div className="relative bg-gradient-to-br from-blue-600/20 to-blue-800/20 p-4 sm:p-6 md:p-8 border-b border-gray-800/50">
          <div className="flex items-center gap-3 sm:gap-4 mb-2">
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Project Varuna
              </h3>
              <p className="text-blue-600 text-xs sm:text-sm uppercase tracking-wider mt-1" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 600 }}>
                Current Project • 2025-26
              </p>
            </div>
          </div>
          
          {/* Decorative Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          <div className="space-y-4 sm:space-y-6">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                Next Generation High-Power Rocketry
              </h4>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 400 }}>
                Varuna represents thrustMIT's most ambitious project to date—our flagship next-generation high-power rocket designed to push the boundaries of innovation and performance.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-600/10 to-transparent border-l-4 border-blue-600 p-3 sm:p-4 rounded-r-lg">
              <p className="text-gray-200 text-xs sm:text-sm italic" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                "We're currently in active development, refining every system and component to ensure Varuna sets new standards in collegiate rocketry."
              </p>
            </div>

            <div className="pt-3 sm:pt-4 border-t border-gray-800">
              <p className="text-center text-gray-400 text-xs sm:text-sm" style={{ fontFamily: 'Rajdhani, sans-serif', fontWeight: 500 }}>
                Detailed specifications and updates coming soon. Follow our journey as we bring Varuna to life!
              </p>
            </div>
          </div>

          {/* Action Button */}
          <div className="flex justify-center mt-6 sm:mt-8">
            <button
              onClick={onClose}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-sm sm:text-base font-bold tracking-wide transition-all duration-300 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-105"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              Stay Tuned
            </button>
          </div>
        </div>

        {/* Bottom Decorative Glow */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-blue-600/5 to-transparent pointer-events-none" />
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default VarunaModal;