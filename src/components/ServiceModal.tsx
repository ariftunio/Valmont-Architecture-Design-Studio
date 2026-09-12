import React, { useEffect } from 'react';
import { X, CheckCircle, ArrowRight } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onConsult: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onConsult,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (service) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171614]/65 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl bg-[#FDFBF8] rounded-[16px] border border-[#E8DED2] shadow-2xl p-6 sm:p-9 my-8 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#5F5A54] hover:text-[#171614] rounded-full hover:bg-[#E8DED2]/40 transition-colors"
          aria-label="Close service details"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044]">
            Discipline {service.number}
          </span>
          <h2 className="font-serif text-3xl text-[#171614] font-normal tracking-tight mt-1">
            {service.title}
          </h2>
        </div>

        <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#5F5A54] mb-6 font-sans">
          {service.fullDesc}
        </p>

        {/* Deliverables */}
        <div className="bg-[#F3EEE7]/80 p-5 rounded-[12px] border border-[#E8DED2] mb-8">
          <h4 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#171614] mb-3">
            Core Methodological Deliverables
          </h4>
          <ul className="space-y-2.5">
            {service.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start space-x-2 text-sm text-[#171614]">
                <CheckCircle className="w-4 h-4 text-[#8A6044] shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4 border-t border-[#E8DED2] flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs text-[#5F5A54] hover:text-[#171614] transition-colors"
          >
            Close Overview
          </button>
          <button
            onClick={() => {
              onClose();
              onConsult();
            }}
            className="inline-flex items-center space-x-2 bg-[#8A6044] hover:bg-[#754E35] text-white text-[13px] font-medium px-6 py-2.5 rounded-[8px] transition-colors shadow-xs"
          >
            <span>Consult on This Discipline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
