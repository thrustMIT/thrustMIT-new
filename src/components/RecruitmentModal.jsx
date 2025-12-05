import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

const RecruitmentModal = ({ open = false, message = 'Recruitments have not yet started. Stay tuned!', onClose = () => {} }) => {
  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (open) {
      const previousOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = previousOverflow; };
    }
    return undefined;
  }, [open]);

  if (!open) return null;

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative max-w-lg w-full mx-4 bg-black rounded-2xl border border-white/10 p-6 shadow-2xl text-white">
        <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Orbitron, sans-serif' }}>Recruitment Update</h3>
        <p className="text-sm text-gray-300 mb-6" style={{ fontFamily: 'Rajdhani, sans-serif' }}>{message}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 font-semibold"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default RecruitmentModal;
