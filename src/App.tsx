/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesStrip } from './components/ServicesStrip';
import { ProjectsSection } from './components/ProjectsSection';
import { TestimonialStory } from './components/TestimonialStory';
import { InsightsSection } from './components/InsightsSection';
import { NewsletterCta } from './components/NewsletterCta';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { ServiceModal } from './components/ServiceModal';
import { Project, ServiceItem, Article } from './types';

export default function App() {
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [preselectedProject, setPreselectedProject] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenConsultation = (projectTitle?: string) => {
    setPreselectedProject(projectTitle);
    setIsConsultationOpen(true);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#171614] flex flex-col selection:bg-[#E8DED2] selection:text-[#171614]">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Split-Screen Hero Section */}
        <Hero
          onExploreWork={scrollToProjects}
          onViewServices={scrollToServices}
        />

        {/* 4-Pillar Trust & Services Strip */}
        <ServicesStrip
          onSelectService={(service) => setSelectedService(service)}
        />

        {/* Curated Work / Projects Section */}
        <ProjectsSection
          onSelectProject={(project) => setSelectedProject(project)}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* Editorial Story / Testimonial Section */}
        <TestimonialStory />

        {/* Insights & Monograph Articles */}
        <InsightsSection
          onSelectArticle={(article) => setSelectedArticle(article)}
        />

        {/* Closing Conversion & Newsletter Strip */}
        <NewsletterCta
          onOpenConsultation={() => handleOpenConsultation()}
        />
      </main>

      {/* Multi-Column Professional Footer */}
      <Footer />

      {/* Interactive Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        preselectedProject={preselectedProject}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(title) => handleOpenConsultation(title)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onConsult={() => handleOpenConsultation(selectedService?.title)}
      />
    </div>
  );
}

