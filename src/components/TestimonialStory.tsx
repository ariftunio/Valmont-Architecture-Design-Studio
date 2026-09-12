import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, MapPin } from 'lucide-react';
import { TESTIMONIALS, ASSET_IMAGES } from '../data/content';

export const TestimonialStory: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="about" className="py-20 sm:py-24 lg:py-28 bg-[#F3EEE7] border-y border-[#E8DED2]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Testimonial Story (~50%) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Eyebrow */}
              <div className="inline-flex items-center space-x-2.5 mb-6">
                <span className="w-6 h-px bg-[#8A6044]" />
                <span className="text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.2em] text-[#8A6044]">
                  Commissioners' Voices
                </span>
              </div>

              {/* Large Stylized Quotation Mark */}
              <div className="text-[#8A6044]/30 mb-2 select-none" aria-hidden="true">
                <Quote className="w-12 h-12 stroke-[1.2] fill-[#8A6044]/15" />
              </div>

              {/* Editorial Serif Testimonial */}
              <blockquote className="font-serif text-[24px] sm:text-[28px] lg:text-[30px] leading-[1.35] text-[#171614] font-normal tracking-tight mb-8">
                "{current.quote}"
              </blockquote>

              {/* Author & Commissioner Info */}
              <div className="flex items-center space-x-4 border-t border-[#E8DED2] pt-6">
                <div className="w-12 h-12 rounded-full bg-[#E8DED2] border border-[#8A6044]/30 flex items-center justify-center font-serif text-[#171614] text-lg font-medium">
                  {current.author.charAt(0)}
                </div>
                <div>
                  <h4 className="font-serif text-[18px] text-[#171614] font-medium leading-snug">
                    {current.author}
                  </h4>
                  <p className="text-[13px] text-[#5F5A54] font-sans">
                    {current.role} — <span className="italic">{current.project}</span>
                  </p>
                  <div className="flex items-center space-x-2 text-[11px] text-[#8A6044] mt-0.5">
                    <MapPin className="w-3 h-3" />
                    <span>{current.location}</span>
                    <span>•</span>
                    <span>Completed {current.year}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Carousel Navigation Dots & Buttons */}
            <div className="mt-10 flex items-center justify-between pt-6 border-t border-[#E8DED2]/60">
              <div className="flex items-center space-x-2">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 transition-all duration-300 rounded-full ${
                      currentIndex === idx
                        ? 'w-8 bg-[#8A6044]'
                        : 'w-2 bg-[#E8DED2] hover:bg-[#8A6044]/50'
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              <div className="flex items-center space-x-3">
                <span className="text-[12px] font-mono text-[#5F5A54] mr-2">
                  0{currentIndex + 1} / 0{TESTIMONIALS.length}
                </span>
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 rounded-full border border-[#E8DED2] bg-[#FDFBF8] hover:border-[#8A6044] hover:text-[#8A6044] flex items-center justify-center transition-colors text-[#171614]"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 rounded-full border border-[#E8DED2] bg-[#FDFBF8] hover:border-[#8A6044] hover:text-[#8A6044] flex items-center justify-center transition-colors text-[#171614]"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Studio Lifestyle & Materiality Image (~50%) */}
          <div className="lg:col-span-6">
            <div className="relative rounded-[14px] overflow-hidden border border-[#E8DED2] shadow-[0_10px_35px_-10px_rgba(23,22,20,0.06)] bg-[#FDFBF8]">
              <img
                src={ASSET_IMAGES.story}
                alt="Valmont Studio - Tactile materiality sample palette and architectural curation"
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-[400px] sm:h-[480px] lg:h-[520px] object-cover editorial-img-transition hover:scale-[1.02]"
              />
              
              {/* Overlay Caption Tag */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#FDFBF8]/95 backdrop-blur-xs border border-[#E8DED2] rounded-[8px] p-3 sm:px-4 sm:py-3 shadow-xs">
                <span className="block text-[10px] uppercase tracking-[0.2em] font-semibold text-[#8A6044]">
                  Studio Philosophy
                </span>
                <p className="text-[13px] text-[#171614] font-medium font-serif mt-0.5">
                  Honest stone, unlacquered bronze, and hand-finished lime plaster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
