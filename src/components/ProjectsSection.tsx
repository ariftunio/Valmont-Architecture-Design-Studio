import React, { useState } from 'react';
import { ArrowRight, ArrowUpRight, MapPin, Calendar } from 'lucide-react';
import { PROJECTS } from '../data/content';
import { Project } from '../types';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onOpenConsultation: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onOpenConsultation,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Private Residential', 'Retreat & Landscape', 'Commercial & Cultural'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 sm:py-24 lg:py-32 bg-[#FDFBF8]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16 border-b border-[#E8DED2]/80 pb-10">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2.5 mb-3">
              <span className="w-6 h-px bg-[#8A6044]" />
              <span className="text-[11px] sm:text-[12px] uppercase font-semibold tracking-[0.2em] text-[#8A6044]">
                Curated Portfolio
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#171614] font-normal tracking-tight leading-[1.15]">
              Architecture Grounded in Topography and Time
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col justify-between items-start lg:items-end space-y-4 sm:space-y-0">
            <p className="text-[15px] sm:text-[16px] text-[#5F5A54] max-w-md lg:text-right font-sans">
              Each commission represents a rigorous dialogue between natural site features,
              custom-hewn materials, and the contemplative daily rituals of its inhabitants.
            </p>
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center space-x-2 text-[13px] font-medium text-[#8A6044] hover:text-[#754E35] group transition-colors"
            >
              <span>Commission a Custom Residence</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`text-[12px] sm:text-[13px] tracking-[0.04em] px-4 py-2 rounded-[8px] transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-[#171614] text-white border-[#171614] shadow-xs'
                  : 'bg-transparent text-[#5F5A54] border-[#E8DED2] hover:border-[#171614]/40 hover:text-[#171614]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`project-card-${project.id}`}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer flex flex-col bg-[#FDFBF8] rounded-[12px] overflow-hidden border border-[#E8DED2]/70 hover:border-[#8A6044]/50 transition-all duration-300 hover:shadow-[0_12px_30px_-10px_rgba(23,22,20,0.06)]"
            >
              {/* Card Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#F3EEE7]">
                <img
                  src={project.image}
                  alt={`${project.title} - ${project.category}`}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                
                {/* Subtle top right badge */}
                <div className="absolute top-4 right-4 bg-[#FDFBF8]/90 backdrop-blur-xs text-[#171614] text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-[6px] border border-[#E8DED2]/80">
                  {project.year}
                </div>
              </div>

              {/* Card Metadata & Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2.5">
                    <span className="text-[11px] uppercase tracking-[0.18em] font-semibold text-[#8A6044]">
                      {project.category}
                    </span>
                    <span className="text-xs text-[#5F5A54] flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-[#8A6044]" />
                      <span className="truncate max-w-[140px]">{project.location.split(',')[0]}</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-[22px] sm:text-[24px] text-[#171614] font-normal tracking-tight mb-3 group-hover:text-[#8A6044] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  <p className="text-[14px] leading-[1.65] text-[#5F5A54] line-clamp-2 font-sans mb-5">
                    {project.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-4 border-t border-[#E8DED2]/60 flex items-center justify-between text-[13px] font-medium text-[#171614] group-hover:text-[#8A6044] transition-colors">
                  <span className="tracking-[0.02em]">Examine Project Details</span>
                  <div className="w-7 h-7 rounded-full bg-[#F3EEE7] group-hover:bg-[#8A6044] group-hover:text-white flex items-center justify-center transition-all duration-200">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
