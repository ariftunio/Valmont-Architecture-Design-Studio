import React, { useState } from 'react';
import { ArrowRight, Compass, CheckCircle2, Mail } from 'lucide-react';

interface NewsletterCtaProps {
  onOpenConsultation: () => void;
}

export const NewsletterCta: React.FC<NewsletterCtaProps> = ({ onOpenConsultation }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setSubscribed(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-[#F3EEE7] border-y border-[#E8DED2]">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center">
        {/* Subtle Line & Icon */}
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-[#FDFBF8] border border-[#E8DED2] mb-6 shadow-xs">
          <Compass className="w-5 h-5 text-[#8A6044]" />
        </div>

        {/* Eyebrow */}
        <div className="text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.22em] text-[#8A6044] mb-3">
          Commission an Architectural Vision
        </div>

        {/* Serif Headline */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight max-w-2xl mx-auto mb-6">
          Let’s Create Something Exceptional
        </h2>

        {/* Supporting Message */}
        <p className="text-[16px] sm:text-[17px] leading-[1.65] text-[#5F5A54] max-w-xl mx-auto mb-10 font-sans">
          Tell us what you are envisioning for your site or space. We partner with discerning clients
          to translate architectural intent into timeless, physical reality.
        </p>

        {/* Action Options: Direct Consultation & Monograph Newsletter */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            id="cta-start-conversation-btn"
            onClick={onOpenConsultation}
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-3 bg-[#8A6044] hover:bg-[#754E35] text-white text-[14px] font-medium tracking-[0.03em] px-8 py-4 rounded-[10px] transition-all duration-200 shadow-xs hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 focus:outline-hidden focus:ring-2 focus:ring-[#8A6044] focus:ring-offset-2"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="mailto:inquiries@valmontstudio.com"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 bg-[#FDFBF8] hover:bg-[#E8DED2]/30 text-[#171614] border border-[#E8DED2] hover:border-[#171614]/40 text-[14px] font-medium tracking-[0.03em] px-8 py-4 rounded-[10px] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#8A6044]" />
            <span>inquiries@valmontstudio.com</span>
          </a>
        </div>

        {/* Editorial Dispatch / Monograph Subscription Strip */}
        <div className="max-w-md mx-auto pt-8 border-t border-[#E8DED2]">
          <span className="block text-xs uppercase tracking-[0.16em] font-medium text-[#5F5A54] mb-3">
            Receive Our Occasional Architectural Dispatch
          </span>

          {subscribed ? (
            <div className="inline-flex items-center space-x-2 bg-[#FDFBF8] text-[#171614] border border-[#8A6044]/40 px-5 py-3 rounded-[8px] text-sm shadow-xs">
              <CheckCircle2 className="w-4 h-4 text-[#8A6044]" />
              <span>Thank you. You have been enrolled in our seasonal monograph.</span>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                placeholder="Enter your email address"
                className="flex-1 bg-[#FDFBF8] border border-[#E8DED2] focus:border-[#8A6044] focus:ring-1 focus:ring-[#8A6044] text-[#171614] placeholder:text-[#5F5A54]/60 text-sm px-4 py-2.5 rounded-[8px] outline-hidden transition-colors"
              />
              <button
                type="submit"
                className="bg-[#171614] hover:bg-[#2B2622] text-white text-xs uppercase tracking-wider font-medium px-5 py-2.5 rounded-[8px] transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          )}

          {error && <p className="text-xs text-red-700 mt-2">{error}</p>}
        </div>
      </div>
    </section>
  );
};
