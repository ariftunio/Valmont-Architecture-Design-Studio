import React from 'react';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { ARTICLES } from '../data/content';
import { Article } from '../types';

interface InsightsSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onSelectArticle }) => {
  return (
    <section id="insights" className="py-20 sm:py-24 lg:py-32 bg-[#FDFBF8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 border-b border-[#E8DED2]/80 pb-8">
          <div>
            <div className="inline-flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-px bg-[#8A6044]" />
              <span className="text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.2em] text-[#8A6044]">
                Insights & Monographs
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight">
              Ideas, Materiality & Spatial Living
            </h2>
          </div>

          <p className="text-[15px] sm:text-[16px] text-[#5F5A54] max-w-md mt-4 md:mt-0 font-sans">
            Reflections from our partners on timeless construction methods,
            light capture, and spatial psychology.
          </p>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              id={`article-card-${article.id}`}
              onClick={() => onSelectArticle(article)}
              className="group cursor-pointer flex flex-col bg-[#FDFBF8] rounded-[12px] overflow-hidden border border-[#E8DED2]/80 hover:border-[#8A6044]/50 transition-all duration-300 hover:shadow-[0_12px_28px_-8px_rgba(23,22,20,0.06)]"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3EEE7]">
                <img
                  src={article.image}
                  alt={article.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                <div className="absolute top-4 left-4 bg-[#FDFBF8]/95 backdrop-blur-xs text-[#8A6044] text-[11px] uppercase font-semibold tracking-[0.16em] px-2.5 py-1 rounded-[6px] border border-[#E8DED2]">
                  {article.category}
                </div>
              </div>

              {/* Card Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center space-x-3 text-xs text-[#5F5A54] mb-3">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3 h-3 text-[#8A6044]" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-[20px] sm:text-[22px] text-[#171614] font-normal leading-snug tracking-tight mb-3 group-hover:text-[#8A6044] transition-colors">
                    {article.title}
                  </h3>

                  <p className="text-[14px] leading-[1.65] text-[#5F5A54] line-clamp-3 font-sans mb-5">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E8DED2]/60 flex items-center justify-between text-[13px] font-medium text-[#171614] group-hover:text-[#8A6044] transition-colors">
                  <span className="tracking-[0.02em] flex items-center space-x-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#8A6044]" />
                    <span>Read Monograph</span>
                  </span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
