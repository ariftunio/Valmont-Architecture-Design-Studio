import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, Share2 } from 'lucide-react';
import { Article } from '../types';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (article) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [article, onClose]);

  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#171614]/65 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#FDFBF8] rounded-[16px] border border-[#E8DED2] shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 bg-[#FDFBF8]/80 hover:bg-[#FDFBF8] text-[#171614] rounded-full border border-[#E8DED2] shadow-xs transition-colors"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto">
          {/* Article Hero Image */}
          <div className="relative aspect-[16/9] w-full bg-[#F3EEE7]">
            <img
              src={article.image}
              alt={article.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="p-6 sm:p-8 lg:p-10">
            {/* Meta */}
            <div className="flex items-center space-x-3 text-xs text-[#5F5A54] mb-3">
              <span className="text-[#8A6044] uppercase font-semibold tracking-wider">
                {article.category}
              </span>
              <span>•</span>
              <span>{article.date}</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <Clock className="w-3 h-3 text-[#8A6044]" />
                <span>{article.readTime}</span>
              </span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#171614] font-normal tracking-tight mb-6 leading-tight">
              {article.title}
            </h2>

            {/* Excerpt Lead */}
            <p className="text-[17px] leading-[1.65] font-serif italic text-[#171614] pb-6 border-b border-[#E8DED2] mb-6">
              "{article.excerpt}"
            </p>

            {/* Body */}
            <div className="prose prose-stone max-w-none text-[15px] sm:text-[16px] leading-[1.75] text-[#5F5A54] font-sans space-y-4">
              <p>{article.content}</p>
              <p>
                In our atelier practice, every surface is treated as an active participant in acoustic,
                thermal, and optical wellbeing. We resist decorative veneer in favor of substance that
                weathers naturally, deepening its resonance under the morning sun and evening twilight.
              </p>
            </div>

            {/* Author Attribution */}
            <div className="mt-10 pt-6 border-t border-[#E8DED2] flex items-center justify-between text-xs text-[#5F5A54]">
              <div>
                <span className="font-serif text-sm font-medium text-[#171614] block">
                  Julian Valmont, Principal Architect
                </span>
                <span>Valmont Architectural Monograph Series</span>
              </div>
              <button
                onClick={onClose}
                className="bg-[#171614] hover:bg-[#2B2622] text-white px-5 py-2.5 rounded-[8px] transition-colors"
              >
                Close Monograph
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
