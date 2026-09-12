import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Award } from 'lucide-react';
import { ASSET_IMAGES, STATS } from '../data/content';

interface HeroProps {
  onExploreWork: () => void;
  onViewServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onViewServices }) => {
  return (
    <section
      id="home"
      className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 items-center">
          {/* Left Content Column (~45%) */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left z-10">
            {/* Eyebrow */}
            <div className="inline-flex items-center space-x-2.5 mb-5 sm:mb-6">
              <span className="w-6 h-px bg-[#8A6044]" />
              <span className="text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.2em] text-[#8A6044]">
                Crafted with Purpose
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-[40px] sm:text-[52px] lg:text-[62px] xl:text-[68px] leading-[1.08] text-[#171614] font-normal tracking-[-0.015em] mb-6">
              Thoughtful Architecture for{' '}
              <span className="text-[#8A6044] font-normal italic font-serif">
                Considered Living
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#5F5A54] max-w-xl mb-8 sm:mb-10 font-sans">
              We design enduring private residences and restorative environments
              defined by quiet monumental forms, authentic tactile materials,
              and a respectful dialogue with light and landscape.
            </p>

            {/* Call to Actions */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Primary Button */}
              <button
                id="hero-explore-work-btn"
                onClick={onExploreWork}
                className="group inline-flex items-center justify-center space-x-3 bg-[#8A6044] hover:bg-[#754E35] text-white text-[14px] font-medium tracking-[0.03em] px-7 py-3.5 sm:py-4 rounded-[10px] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#8A6044] focus:ring-offset-2"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>

              {/* Secondary Button */}
              <button
                id="hero-view-services-btn"
                onClick={onViewServices}
                className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-[#E8DED2]/30 text-[#171614] border border-[#171614]/25 hover:border-[#171614] text-[14px] font-medium tracking-[0.03em] px-7 py-3.5 sm:py-4 rounded-[10px] transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#171614]/30"
              >
                <span>View Practice & Services</span>
              </button>
            </div>

            {/* Studio Trust Marker */}
            <div className="mt-10 sm:mt-12 pt-6 border-t border-[#E8DED2]/70 flex items-center space-x-6 text-[#5F5A54] text-[12px] sm:text-[13px]">
              <div className="flex items-center space-x-2">
                <Compass className="w-4 h-4 text-[#8A6044]" />
                <span>San Francisco & Zürich</span>
              </div>
              <span className="w-1 h-1 rounded-full bg-[#E8DED2]" />
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#8A6044]" />
                <span>Generational Quality</span>
              </div>
            </div>
          </div>

          {/* Right Imagery Column (~55%) */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-[14px] sm:rounded-[18px] overflow-hidden border border-[#E8DED2]/60 shadow-[0_12px_40px_-15px_rgba(23,22,20,0.08)] bg-[#F3EEE7]">
              <img
                src={ASSET_IMAGES.hero}
                alt="Valmont Architecture - Sunlit contemporary living pavilion opening to courtyard"
                referrerPolicy="no-referrer"
                loading="eager"
                className="w-full h-[380px] sm:h-[480px] lg:h-[580px] xl:h-[620px] object-cover editorial-img-transition hover:scale-[1.02]"
              />

              {/* Subtle gradient vignette at bottom for image softness */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#171614]/15 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Floating Credibility & Statistics Card */}
            <div
              id="hero-stats-card"
              className="mt-4 sm:mt-0 sm:absolute sm:-bottom-6 sm:-left-6 lg:-bottom-7 lg:-left-8 bg-[#FDFBF8] border border-[#E8DED2] rounded-[12px] p-5 sm:p-6 shadow-[0_10px_30px_-5px_rgba(23,22,20,0.08)] backdrop-blur-xs z-20 max-w-full sm:max-w-md"
            >
              <div className="grid grid-cols-3 divide-x divide-[#E8DED2] text-center gap-2">
                <div className="px-2 sm:px-3 text-left">
                  <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#171614] tracking-tight">
                    {STATS[0].value}
                  </span>
                  <span className="block text-[11px] sm:text-[12px] text-[#5F5A54] tracking-tight mt-0.5 font-medium">
                    {STATS[0].label}
                  </span>
                </div>
                <div className="px-2 sm:px-3 text-left">
                  <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#171614] tracking-tight">
                    {STATS[1].value}
                  </span>
                  <span className="block text-[11px] sm:text-[12px] text-[#5F5A54] tracking-tight mt-0.5 font-medium">
                    {STATS[1].label}
                  </span>
                </div>
                <div className="px-2 sm:px-3 text-left">
                  <span className="block font-serif text-2xl sm:text-3xl font-normal text-[#8A6044] tracking-tight">
                    {STATS[2].value}
                  </span>
                  <span className="block text-[11px] sm:text-[12px] text-[#5F5A54] tracking-tight mt-0.5 font-medium">
                    {STATS[2].label}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
