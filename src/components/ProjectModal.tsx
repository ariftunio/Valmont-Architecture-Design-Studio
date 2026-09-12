import React, { useEffect } from 'react';
import { X, MapPin, Calendar, Layers, Clock, ArrowRight } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onInquire: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onInquire,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171614]/65 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#FDFBF8] rounded-[16px] border border-[#E8DED2] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 bg-[#FDFBF8]/80 hover:bg-[#FDFBF8] text-[#171614] rounded-full border border-[#E8DED2] shadow-xs transition-colors"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Scrollable Content */}
        <div className="overflow-y-auto">
          {/* Main Large Visual */}
          <div className="relative aspect-[16/10] w-full bg-[#F3EEE7]">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 bg-[#FDFBF8]/95 backdrop-blur-xs text-[#8A6044] text-xs uppercase tracking-widest font-semibold px-3 py-1.5 rounded-[6px] border border-[#E8DED2]">
              {project.category}
            </div>
          </div>

          {/* Details Body */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 border-b border-[#E8DED2] pb-6">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#171614] font-normal tracking-tight">
                  {project.title}
                </h2>
                <div className="flex items-center space-x-2 text-sm text-[#5F5A54] mt-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#8A6044]" />
                  <span>{project.location}</span>
                </div>
              </div>
              <div className="flex items-center space-x-1.5 text-xs font-mono text-[#8A6044] bg-[#F3EEE7] px-3 py-1.5 rounded-[6px] border border-[#E8DED2] self-start">
                <Calendar className="w-3.5 h-3.5" />
                <span>Delivered {project.year}</span>
              </div>
            </div>

            {/* Narrative */}
            <div className="mb-8">
              <h3 className="text-xs uppercase tracking-[0.18em] font-semibold text-[#8A6044] mb-2">
                Architectural Concept & Dialogue
              </h3>
              <p className="text-[15px] sm:text-[16px] leading-[1.7] text-[#5F5A54] font-sans">
                {project.description}
              </p>
            </div>

            {/* Architectural Specifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-[#F3EEE7]/70 p-5 rounded-[12px] border border-[#E8DED2] mb-8">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#5F5A54]">
                  Interior Footprint
                </span>
                <span className="font-serif text-lg text-[#171614] font-medium">
                  {project.details.area}
                </span>
              </div>

              <div>
                <span className="block text-[11px] uppercase tracking-wider text-[#5F5A54]">
                  Practice Scope
                </span>
                <span className="font-sans text-sm text-[#171614] font-medium">
                  {project.details.scope}
                </span>
              </div>

              <div className="sm:col-span-2 pt-2 border-t border-[#E8DED2]">
                <span className="block text-[11px] uppercase tracking-wider text-[#5F5A54] mb-1.5">
                  Primary Material Composition
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.details.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="text-xs bg-[#FDFBF8] text-[#171614] px-2.5 py-1 rounded-[6px] border border-[#E8DED2]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-[#E8DED2]">
              <span className="text-xs text-[#5F5A54]">
                Project monograph & high-res architectural plans available upon request.
              </span>
              <button
                onClick={() => {
                  onClose();
                  onInquire(project.title);
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#8A6044] hover:bg-[#754E35] text-white text-[13px] font-medium px-6 py-3 rounded-[8px] transition-colors shadow-xs"
              >
                <span>Inquire About Similar Commission</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
