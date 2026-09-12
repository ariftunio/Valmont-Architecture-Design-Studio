import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO } from '../data/content';

interface NavbarProps {
  onOpenConsultation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'projects', 'about', 'insights', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#insights' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navigation-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FDFBF8]/95 backdrop-blur-md shadow-[0_2px_15px_-3px_rgba(23,22,20,0.05)] border-b border-[#E8DED2]/60 py-4'
            : 'bg-[#FDFBF8]/80 backdrop-blur-xs border-b border-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            id="brand-logo-link"
            className="group flex flex-col focus:outline-hidden focus:ring-2 focus:ring-[#8A6044]/30 rounded-xs"
          >
            <span className="font-serif text-2xl sm:text-[26px] tracking-[0.18em] font-semibold text-[#171614] leading-tight">
              {BRAND_INFO.name}
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-[0.3em] font-medium text-[#5F5A54] uppercase -mt-0.5 group-hover:text-[#8A6044] transition-colors">
              {BRAND_INFO.subname}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav-menu" className="hidden md:flex items-center space-x-8 lg:space-x-10">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  id={`nav-link-${link.name.toLowerCase()}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[13px] tracking-[0.06em] transition-colors relative py-1 focus:outline-hidden focus:ring-2 focus:ring-[#8A6044]/30 rounded-xs ${
                    isActive
                      ? 'text-[#171614] font-medium'
                      : 'text-[#5F5A54] hover:text-[#171614]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8A6044] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop Primary CTA */}
          <div className="hidden md:flex items-center">
            <button
              id="header-cta-button"
              onClick={onOpenConsultation}
              className="inline-flex items-center justify-center space-x-2 bg-[#8A6044] hover:bg-[#754E35] text-white text-[13px] font-medium tracking-[0.04em] px-5 py-2.5 rounded-[8px] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#8A6044] focus:ring-offset-2"
            >
              <span>Start a Conversation</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#171614] hover:text-[#8A6044] rounded-md focus:outline-hidden focus:ring-2 focus:ring-[#8A6044]/40"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-overlay"
          className="fixed inset-0 z-30 bg-[#171614]/40 backdrop-blur-xs md:hidden"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            id="mobile-menu-drawer"
            className="fixed top-0 right-0 w-[82%] max-w-sm h-full bg-[#FDFBF8] shadow-2xl p-7 flex flex-col justify-between overflow-y-auto border-l border-[#E8DED2]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E8DED2]">
                <div className="flex flex-col">
                  <span className="font-serif text-xl tracking-[0.16em] font-semibold text-[#171614]">
                    {BRAND_INFO.name}
                  </span>
                  <span className="text-[9px] tracking-[0.25em] font-medium text-[#5F5A54] uppercase">
                    {BRAND_INFO.subname}
                  </span>
                </div>
                <button
                  id="mobile-menu-close-btn"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#5F5A54] hover:text-[#171614] rounded-md"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col space-y-4 py-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-lg font-serif text-[#171614] hover:text-[#8A6044] tracking-wide transition-colors py-1.5 flex items-center justify-between border-b border-[#E8DED2]/40"
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-sans text-[#8A6044]">→</span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Footer Area */}
            <div className="pt-6 border-t border-[#E8DED2] space-y-4">
              <button
                id="mobile-menu-cta-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full inline-flex items-center justify-center space-x-2 bg-[#8A6044] text-white text-sm font-medium py-3 rounded-[8px] transition-colors hover:bg-[#754E35]"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <div className="text-xs text-[#5F5A54] space-y-1">
                <p>{BRAND_INFO.email}</p>
                <p>{BRAND_INFO.phone}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
