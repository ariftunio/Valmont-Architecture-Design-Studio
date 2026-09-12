import React from 'react';
import { ArrowUp, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND_INFO, SERVICES } from '../data/content';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2B2622] text-[#E8DED2] pt-16 sm:pt-20 pb-12 border-t border-[#3D3631]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top 5-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-[#3D3631]">
          {/* Column 1: Brand & Philosophy (~3.5 cols) */}
          <div className="lg:col-span-4">
            <div className="flex flex-col mb-4">
              <span className="font-serif text-2xl tracking-[0.18em] font-medium text-[#FDFBF8]">
                {BRAND_INFO.name}
              </span>
              <span className="text-[9px] tracking-[0.3em] font-medium text-[#8A6044] uppercase -mt-0.5">
                {BRAND_INFO.subname}
              </span>
            </div>
            
            <p className="text-[13px] leading-[1.7] text-[#E8DED2]/80 max-w-sm mb-6 font-sans">
              Dedicated to architecture of permanence, profound harmony with landscape,
              and material honesty that deepens across generations.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 text-[#E8DED2]/70">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-full border border-[#3D3631] hover:border-[#8A6044] hover:text-[#FDFBF8] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-full border border-[#3D3631] hover:border-[#8A6044] hover:text-[#FDFBF8] flex items-center justify-center transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="#archdaily"
                aria-label="Architectural Registry"
                className="w-8 h-8 rounded-full border border-[#3D3631] hover:border-[#8A6044] hover:text-[#FDFBF8] flex items-center justify-center transition-colors"
              >
                <Globe className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (~2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044] mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">Curated Projects</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About & Voices</a>
              </li>
              <li>
                <a href="#insights" className="hover:text-white transition-colors">Insights & Monographs</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Inquiries</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Disciplines (~2.5 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044] mb-4">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <span className="text-[#E8DED2]/50 text-xs">Acoustic Engineering</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Information (~2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044] mb-4">
              Information
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#about" className="hover:text-white transition-colors">Practice Monograph</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Material Library</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">Design Accolades</a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-white transition-colors">Privacy Governance</a>
              </li>
              <li>
                <a href="#terms" className="hover:text-white transition-colors">Terms of Practice</a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Studios (~2 cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#8A6044] mb-4">
              Studio Locations
            </h4>
            <div className="space-y-3.5 text-[12px] leading-relaxed text-[#E8DED2]/90">
              <div>
                <span className="block font-medium text-white">San Francisco</span>
                <span className="text-xs text-[#E8DED2]/70">420 St. Clair Ave, Suite 400</span>
              </div>
              <div>
                <span className="block font-medium text-white">Zürich</span>
                <span className="text-xs text-[#E8DED2]/70">Limmatquai 72, 8001 Zürich</span>
              </div>
              <div className="pt-2 border-t border-[#3D3631] space-y-1">
                <a
                  href={`tel:${BRAND_INFO.phone}`}
                  className="flex items-center space-x-1.5 hover:text-white transition-colors"
                >
                  <Phone className="w-3 h-3 text-[#8A6044]" />
                  <span>{BRAND_INFO.phone}</span>
                </a>
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="flex items-center space-x-1.5 hover:text-white transition-colors"
                >
                  <Mail className="w-3 h-3 text-[#8A6044]" />
                  <span className="truncate">{BRAND_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#E8DED2]/60 gap-4">
          <p>© {new Date().getFullYear()} Valmont Architecture & Design Studio. All rights reserved.</p>
          
          <div className="flex items-center space-x-6">
            <span>WCAG 2.1 AA Compliant</span>
            <span>•</span>
            <span>Hostinger Production Optimized</span>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-1 text-[#8A6044] hover:text-[#FDFBF8] transition-colors"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
