import React from 'react';
import { Compass, Layers, PenTool, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES } from '../data/content';
import { ServiceItem } from '../types';

interface ServicesStripProps {
  onSelectService: (service: ServiceItem) => void;
}

export const ServicesStrip: React.FC<ServicesStripProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    const props = { className: "w-5 h-5 text-[#8A6044] stroke-[1.5]" };
    switch (iconName) {
      case 'Compass':
        return <Compass {...props} />;
      case 'Layers':
        return <Layers {...props} />;
      case 'PenTool':
        return <PenTool {...props} />;
      case 'ShieldCheck':
      default:
        return <ShieldCheck {...props} />;
    }
  };

  return (
    <section
      id="services"
      className="bg-[#F3EEE7] border-y border-[#E8DED2] py-14 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 mb-3">
              <span className="w-5 h-px bg-[#8A6044]" />
              <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044]">
                Practice Disciplines
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#171614] font-normal tracking-tight">
              Four Pillars of Our Architectural Method
            </h2>
          </div>
          <p className="text-[14px] sm:text-[15px] text-[#5F5A54] max-w-md mt-4 md:mt-0 font-sans">
            From initial site sunlight cartography to millimeter-precise masonry curation,
            every commission is guided by unified architectural stewardship.
          </p>
        </div>

        {/* 4 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#E8DED2]">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`flex flex-col justify-between p-6 sm:p-7 transition-colors group ${
                index === 0 ? 'md:pl-0' : ''
              } ${index === SERVICES.length - 1 ? 'md:pr-0' : ''}`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-2.5 rounded-[8px] bg-[#FDFBF8] border border-[#E8DED2] shadow-xs group-hover:border-[#8A6044]/40 transition-colors">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[12px] font-mono tracking-widest text-[#5F5A54]/70">
                    {service.number}
                  </span>
                </div>

                <h3 className="font-serif text-[21px] text-[#171614] font-normal tracking-tight mb-3 group-hover:text-[#8A6044] transition-colors">
                  {service.title}
                </h3>

                <p className="text-[14px] leading-[1.65] text-[#5F5A54] mb-6 font-sans">
                  {service.shortDesc}
                </p>
              </div>

              <div>
                <button
                  id={`service-learn-more-${service.id}`}
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#171614] hover:text-[#8A6044] transition-colors group/link pt-2"
                >
                  <span className="border-b border-[#171614]/30 group-hover/link:border-[#8A6044]">
                    Discover Methodology
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
