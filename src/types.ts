export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  year: string;
  image: string;
  description: string;
  details: {
    area: string;
    materials: string[];
    scope: string;
    duration: string;
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  project: string;
  location: string;
  year: string;
}

export interface ConsultationFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  budgetRange: string;
  timeline: string;
  message: string;
}
