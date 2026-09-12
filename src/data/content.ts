import { Project, ServiceItem, Article, Testimonial } from '../types';

import heroImg from '../assets/images/valmont_hero_interior_1789230963286.jpg';
import residenceImg from '../assets/images/valmont_residence_1789230977779.jpg';
import retreatImg from '../assets/images/valmont_retreat_1789230998790.jpg';
import commercialImg from '../assets/images/valmont_commercial_1789231013962.jpg';
import storyImg from '../assets/images/valmont_story_1789231029558.jpg';
import articleLightImg from '../assets/images/valmont_article_light_1789231044649.jpg';
import articleMaterialsImg from '../assets/images/valmont_article_materials_1789231059115.jpg';
import articleCourtyardImg from '../assets/images/valmont_article_courtyard_1789231072463.jpg';

export const ASSET_IMAGES = {
  hero: heroImg,
  residence: residenceImg,
  retreat: retreatImg,
  commercial: commercialImg,
  story: storyImg,
  articleLight: articleLightImg,
  articleMaterials: articleMaterialsImg,
  articleCourtyard: articleCourtyardImg,
};

export const BRAND_INFO = {
  name: "VALMONT",
  subname: "ATELIER D'ARCHITECTURE",
  tagline: "Thoughtful Architecture for Considered Living",
  description: "An international architectural and interior design studio dedicated to permanence, natural materiality, and calm spatial poetry.",
  phone: "+1 (415) 890-3240",
  email: "inquiries@valmontstudio.com",
  locations: [
    { city: "San Francisco", address: "420 St. Clair Avenue, Suite 400" },
    { city: "Zürich", address: "Limmatquai 72, 8001 Zürich" }
  ],
  hours: "Monday – Friday, 09:00 – 18:00 (By Appointment)"
};

export const STATS = [
  { value: "16+", label: "Years of Practice" },
  { value: "190+", label: "Completed Projects" },
  { value: "12", label: "Design Accolades" },
  { value: "98%", label: "Client Continuity" }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "strategic-advisory",
    number: "01",
    title: "Strategic Masterplanning",
    shortDesc: "Comprehensive site evaluation, zoning analysis, and spatial feasibility studies that protect long-term capital and architectural integrity.",
    fullDesc: "Every enduring commission begins with disciplined contextual inquiry. We analyze topographical daylight vectors, natural prevailing winds, local heritage regulations, and circulation flow before initiating conceptual schematics.",
    deliverables: ["Site solar & daylight modeling", "Zoning feasibility & heritage navigation", "Carbon footprint baseline study", "Master spatial allocation report"],
    icon: "Compass"
  },
  {
    id: "architectural-design",
    number: "02",
    title: "Architectural Design",
    shortDesc: "Monolithic forms, delicate proportions, and holistic spatial narratives engineered for light, serenity, and generational resilience.",
    fullDesc: "Our architecture is characterized by sculptural clarity and honest construction. We sculpt volume and void in concert with natural illumination, creating spaces that feel grounded in earth and open to sky.",
    deliverables: ["Bespoke spatial layouts & elevations", "3D volumetric studies & physical maquettes", "Comprehensive construction documentation", "Engineering & structural coordination"],
    icon: "Layers"
  },
  {
    id: "interior-curation",
    number: "03",
    title: "Interior Curation",
    shortDesc: "Tactile natural palettes, bespoke millwork joinery, and gallery-grade furnishings selected for authentic patina over decades.",
    fullDesc: "We design interiors from within the architectural envelope, refusing separation between outer structure and inner sensation. Every textile, hand-finished lime plaster, fluted oak casing, and honed limestone slab is calibrated to heighten tactile intimacy.",
    deliverables: ["Custom millwork & joinery detailing", "Natural stone & material specification", "Art advisory & collector sourcing", "Acoustic & circadian lighting schemes"],
    icon: "PenTool"
  },
  {
    id: "construction-oversight",
    number: "04",
    title: "Construction Stewardship",
    shortDesc: "Artisanal oversight from groundwork to turnover, ensuring tolerances to the millimeter and total fidelity to the original vision.",
    fullDesc: "True luxury is found in millimeter tolerances and craftsmanship integrity. Our project architects remain on site through every milestone, collaborating directly with master stonemasons, timber joiners, and mechanical engineers.",
    deliverables: ["Weekly on-site quality audits", "Contractor bid vetting & milestone review", "Material mock-up signoffs", "Defect-free handover curation"],
    icon: "ShieldCheck"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "carmel-highlands-residence",
    title: "The Highlands Residence",
    category: "Private Residential",
    location: "Carmel Highlands, California",
    year: "2024",
    image: residenceImg,
    description: "A monolithic coastal dwelling carved from honed Santa Maria limestone and darkened bronze, framing panoramic Pacific horizon views through pocketing structural glass.",
    details: {
      area: "7,850 sq ft",
      materials: ["Santa Maria Limestone", "Smoked European Oak", "Hand-finished Bronze", "Low-iron Structural Glass"],
      scope: "Full Architecture, Interior Curation, Landscape Integration",
      duration: "34 Months"
    }
  },
  {
    id: "sonoma-valley-retreat",
    title: "Sonoma Valley Pavilion Retreat",
    category: "Retreat & Landscape",
    location: "Sonoma County, California",
    year: "2023",
    image: retreatImg,
    description: "An understated series of linked cedar pavilions nestled amid century-old olive groves, celebrating seamless indoor-outdoor living with geothermal heating and passive cooling.",
    details: {
      area: "5,400 sq ft",
      materials: ["Charred Western Red Cedar", "Honed Travertine Paving", "Exposed Architectural Concrete", "Raw Linen Drapery"],
      scope: "Architectural Planning, Passive House Engineering, Custom Furnishings",
      duration: "26 Months"
    }
  },
  {
    id: "atelier-st-clair",
    title: "The St. Clair Design Atelier",
    category: "Commercial & Cultural",
    location: "San Francisco, California",
    year: "2024",
    image: commercialImg,
    description: "Transformation of a 1920s masonry warehouse into a serene architectural gallery anchored by a sculptural lime-plaster spiral staircase and museum-grade daylighting.",
    details: {
      area: "9,200 sq ft",
      materials: ["Venetian Marmorino Plaster", "Roman Travertine", "Cast Raw Bronze", "Solid Quarter-sawn Elm"],
      scope: "Adaptive Reuse, Structural Seismic Retrofit, Gallery Lighting",
      duration: "20 Months"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    quote: "The Valmont team brought rare discipline, character, and tactile mindfulness to every phase of our home. Living here is an ongoing sensory joy; the way morning sunlight crosses the limestone walls is a daily reminder of what genuine design accomplishes.",
    author: "Eleanor & Marcus Vance",
    role: "Private Residence Commissioners",
    project: "The Highlands Residence",
    location: "Carmel Highlands, CA",
    year: "2024"
  },
  {
    id: "2",
    quote: "Unlike firms that impose an arbitrary ego, Julian Valmont and his architects listened with extraordinary depth. They translated our desire for absolute stillness and spatial warmth into an architectural work that our children will inherit.",
    author: "Dr. Henrik Lindqvist",
    role: "Collector & Cultural Trustee",
    project: "Sonoma Valley Pavilion",
    location: "Sonoma County, CA",
    year: "2023"
  },
  {
    id: "3",
    quote: "Valmont turned a complex historic heritage structure into a functional gallery of international distinction. Their construction stewardship ensured that millimeter-level details were executed without compromise.",
    author: "Sybilla Dupont",
    role: "Gallery Director",
    project: "The St. Clair Atelier",
    location: "San Francisco, CA",
    year: "2024"
  }
];

export const ARTICLES: Article[] = [
  {
    id: "shadow-and-stone",
    title: "In Praise of Shadow & Stone: Composing with Natural Daylight",
    category: "Spatial Theory",
    date: "August 2026",
    readTime: "5 min read",
    excerpt: "How intentional apertures and calibrated lime plasters transform harsh midday sun into calming, ambient gradients throughout the day.",
    content: "Natural light is the primary material of architecture. When light strikes a planar surface clad in honed limestone or textured lime wash, it ceases to be mere illumination; it becomes a tactile clock that grounds the inhabitant in the rhythmic passage of the seasons. In our recent residences, we study the solar azimuth across all twelve months before freezing a single window opening.",
    image: articleLightImg
  },
  {
    id: "material-authenticity",
    title: "The Tactile Imperative: Designing for Patina Over Perishability",
    category: "Materiality",
    date: "July 2026",
    readTime: "7 min read",
    excerpt: "Why unsealed bronze, quarter-sawn oak, and honest stone age with grace, gaining depth where synthetic alternatives simply deteriorate.",
    content: "Modern construction is often afflicted by the illusion of static perfection. We believe true luxury embraces time. When a material possesses inherent integrity—such as untreated Tuscan travertine, solid smoked oak, or brushed unlacquered bronze—the natural contact with hands and the atmosphere imparts a rich, irreplaceable patina that synthetic finishes cannot simulate.",
    image: articleMaterialsImg
  },
  {
    id: "the-inner-courtyard",
    title: "The Inward Sanctuary: Rethinking the Domestic Courtyard",
    category: "Monograph",
    date: "June 2026",
    readTime: "6 min read",
    excerpt: "Creating internal sanctuaries that isolate urban noise, foster microclimatic cooling, and reconnect the home to sky and rain.",
    content: "Historically, the Mediterranean patio and Japanese tsuboniwa provided an introspective oasis away from public commotion. As contemporary cities become denser and visually louder, carving an internal void within the floor plan introduces a contemplative core—a private theater where rain, wind, and autumn leaves become the focal point of domestic life.",
    image: articleCourtyardImg
  }
];
