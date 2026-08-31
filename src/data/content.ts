export interface ServiceCard {
  id: string;
  tag: string;
  title: string;
  italicWord?: string;
  description: string;
  image: string;
  theme: 'light' | 'dark' | 'taupe';
  linkText: string;
}

export interface InvestmentTier {
  id: string;
  tag: string;
  title: string;
  price: string;
  duration: string;
  scope: string;
  features: string[];
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  category: 'Renovation' | 'Interior Architecture' | 'Decoration';
  description: string;
  image: string;
  imageAlt: string;
  location: string;
  year: string;
}

export interface FurnitureCategory {
  id: string;
  title: string;
  image: string;
  itemCount: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface ValueProp {
  id: string;
  title: string;
  description: string;
  icon: 'guidance' | 'investment' | 'craftsmanship';
}

export const NAVIGATION_LINKS = [
  { label: 'HOME', href: '/' },
  { label: 'ABOUT', href: '/about' },
  { label: 'SERVICES', href: '/services' },
  { label: 'PROJECTS', href: '/projects' },
  { label: 'COLLECTION', href: '/collection' },
  { label: 'CONTACT', href: '/contact' },
];

export const FOOTER_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'The Collection', href: '/collection' },
  { label: 'Contact', href: '/contact' },
];

// High quality curated luxury interior photography matching the Figma frame
export const IMAGES = {
  hero: '/images/atelier-hero-clean.webp',
  aboutHero: '/images/about-hero.webp',
  featureDoorway: '/images/service-decor.webp',
  featureSolarium: '/images/service-design.webp',
  serviceBuild: '/images/service-build.webp',
  featureDining: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=85',
  featuredProjects: [
    {
      image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=85',
      caption: '01 / DOWNTOWN LOFT',
      location: 'SoHo, Manhattan',
    },
    {
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85',
      caption: '02 / TRIBECA PENTHOUSE',
      location: 'Tribeca, New York',
    },
    {
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85',
      caption: '03 / WEST VILLAGE TOWNHOUSE',
      location: 'West Village, New York',
    }
  ],
  latestWorks: [
    {
      id: 'lw-1',
      title: 'Upper East Side Residence',
      category: 'RESIDENTIAL RENOVATION',
      description: 'Interior architecture renovation of an Upper East Side post-war apartment showcasing a custom millwork TV and fireplace surround, chaise lounges by B&B Italia and a fireplace by EcoSmart Fire USA.',
      image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 'lw-2',
      title: 'Upper East Side Residence',
      category: 'COMPLETE ARCHITECTURAL REDESIGN',
      description: 'Complete architectural reconfiguration including foyer, living and dining spaces. Custom millwork and plaster wall panels, lighting by Apparatus and stone surfaces by Da Vinci Marble.',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=85',
    },
    {
      id: 'lw-3',
      title: 'Upper East Side Residence',
      category: 'PARK AVENUE LUXURY',
      description: 'An expansive apartment renovation overlooking Central Park. Warm timber wall paneling, bespoke walnut dining table with custom leather chairs and curated 20th-century artwork from Phillips auction house.',
      image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=85',
    }
  ],
  aboutFounders: '/images/about-founders.webp',
  transformations: [
    {
      id: 't-1',
      title: 'Upper East Side Residence',
      subtitle: 'HISTORICAL RESTORATION & MILLWORK',
      description: 'Interior architecture renovation of an Upper East Side townhouse with bespoke millwork TV and fireplace surround, custom lighting package and furniture curated from French antique dealers.',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85',
    },
    {
      id: 't-2',
      title: 'Upper East Side Residence',
      subtitle: 'CONTEMPORARY INTERIOR LIVING',
      description: 'Interior architecture renovation of an Upper East Side post-war apartment showcasing a custom millwork TV and fireplace surround, Chaise lounges by B&B Italia and a fireplace by EcoSmart Fire USA.',
      image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85',
    }
  ],
  furniture: [
    {
      id: 'beds',
      title: 'BEDS',
      image: '/images/collection-bed.webp',
      itemCount: 12
    },
    {
      id: 'tables',
      title: 'TABLES',
      image: '/images/collection-table.webp',
      itemCount: 18
    },
    {
      id: 'seating',
      title: 'SEATING',
      image: '/images/collection-chair.webp',
      itemCount: 24
    },
    {
      id: 'storage',
      title: 'STORAGE',
      image: '/images/collection-storage.webp',
      itemCount: 15
    }
  ],
  ctaBanner: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85',
};

export const PROJECTS: ProjectItem[] = [
  {
    id: 'project-01',
    slug: 'park-avenue-duplex',
    title: 'Park Avenue Duplex',
    category: 'Renovation',
    description: 'A pre-war duplex reorganized around natural light, restored plasterwork, and rooms that move easily from family life to entertaining.',
    image: '/images/project-park-avenue.webp',
    imageAlt: 'A bright pre-war living room seen through an elegant paneled doorway',
    location: 'Upper East Side, New York',
    year: '2025',
  },
  {
    id: 'project-02',
    slug: 'carnegie-hill-residence',
    title: 'Carnegie Hill Residence',
    category: 'Interior Architecture',
    description: 'A restrained entry sequence defined by curved openings, custom stonework, and a sculptural table beneath hand-finished plaster ceilings.',
    image: '/images/project-carnegie-hill.webp',
    imageAlt: 'An arched entry hall with a round table, pendant lights, and patterned stone floor',
    location: 'Carnegie Hill, New York',
    year: '2024',
  },
  {
    id: 'project-03',
    slug: 'riverside-residence',
    title: 'Riverside Residence',
    category: 'Decoration',
    description: 'A formal dining room softened through tonal furnishings, collected objects, and lighting selected to balance the apartment’s original detailing.',
    image: '/images/project-riverside.webp',
    imageAlt: 'A monochrome dining room with a dark oval table and tiered chandelier',
    location: 'Riverside Drive, New York',
    year: '2025',
  },
  {
    id: 'project-04',
    slug: 'east-72nd-street-apartment',
    title: 'East 72nd Street Apartment',
    category: 'Decoration',
    description: 'An edited collection of antiques, contemporary pieces, and art brings warmth and daily usefulness to a carefully restored white interior.',
    image: '/images/service-decor.webp',
    imageAlt: 'A white paneled room with a cane chair, fireplace, and sculptural branches',
    location: 'Upper East Side, New York',
    year: '2023',
  },
  {
    id: 'project-05',
    slug: 'westchester-glass-house',
    title: 'Westchester Glass House',
    category: 'Interior Architecture',
    description: 'A transparent garden addition connects a traditional residence to its landscape through blackened steel, warm oak, and disciplined sightlines.',
    image: '/images/service-design.webp',
    imageAlt: 'A glass-walled pavilion with black steel framing and a warm timber kitchen',
    location: 'Westchester County, New York',
    year: '2024',
  },
  {
    id: 'project-06',
    slug: 'fifth-avenue-residence',
    title: 'Fifth Avenue Residence',
    category: 'Renovation',
    description: 'A complete apartment renovation shaped by quiet symmetry, custom wall paneling, and a dining room designed as the center of the home.',
    image: '/images/service-build.webp',
    imageAlt: 'A dining room with a sculptural white table, timber chairs, and paneled walls',
    location: 'Fifth Avenue, New York',
    year: '2025',
  },
];

export const INVESTMENT_TIERS: InvestmentTier[] = [
  {
    id: 'bespoke',
    tag: 'SIGNATURE / BESPOKE',
    title: 'Signature | Bespoke',
    price: 'Starts at $75,000 + per project',
    duration: '12 - 20 weeks',
    scope: 'Complete home interior, custom millwork and full turnkey execution',
    features: [
      'Comprehensive architectural space planning & 3D visualization',
      'Custom architectural millwork, cabinetry & lighting scheme',
      'Curated sourcing from European auctions & bespoke artisans',
      'Dedicated on-site coordination and white-glove turnkey installation'
    ]
  },
  {
    id: 'upgrade',
    tag: 'INTERIOR / REFINEMENT',
    title: 'Home Upgrade | Home Improvement',
    price: 'Starts at $40,000 + per room',
    duration: '6 - 10 weeks',
    scope: 'Single or multi-room, bespoke refinishing and custom millwork',
    features: [
      'Material, palette & luxury finish architectural upgrades',
      'High-end designer furniture curation and art consulting',
      'Bespoke drapery, luxury textiles and ambient lighting design',
      'Seamless delivery management and final styling execution'
    ]
  },
  {
    id: 'renovation',
    tag: 'ARCHITECTURAL / BUILD',
    title: 'Home Remodeling | Home Renovation',
    price: 'Starts at $120,000 + per project',
    duration: '16 - 28 weeks',
    scope: 'Comprehensive architectural layout, gut renovation and turnkey build',
    features: [
      'Full architectural remodeling, permit approvals & board submittals',
      'Custom structural adjustments, kitchen & luxury bathroom rebuilds',
      'Master stone craftsmanship, premium hardwood parquet installation',
      'Turnkey project oversight from initial demolition to final handover'
    ]
  }
];

export const PROCESS_PHASES = [
  {
    number: '01',
    name: 'Discovery',
    shortDesc: 'Architectural analysis, lifestyle assessment, budget alignment, and spatial vision mapping.',
    bullets: ['Site dimensioning & spatial audit', 'Architectural brief & aesthetic direction', 'Investment parameters & timeline alignment']
  },
  {
    number: '02',
    name: 'Selection',
    shortDesc: 'Moodboards, 3D renderings, material samples, custom millwork drawings, and fixture curation.',
    bullets: ['Bespoke finishes & stone sourcing', 'Lighting schematics & technical elevations', 'Custom furniture & antique curation']
  },
  {
    number: '03',
    name: 'Coordination',
    shortDesc: 'Permitting, contractor management, artisan fabrication, and rigorous quality control.',
    bullets: ['Building board & DOB filings', 'Artisan workshop oversight', 'On-site construction management']
  },
  {
    number: '04',
    name: 'Completion',
    shortDesc: 'White-glove delivery, art installation, final styling, and seamless project handover.',
    bullets: ['White-glove installation & placement', 'Art curation & atmospheric lighting setup', 'Turnkey handover & care guide']
  }
];

export const VALUE_PROPS: ValueProp[] = [
  {
    id: 'expert-guidance',
    title: 'EXPERT GUIDANCE',
    description: 'All client consultations and project phases are handled directly by our senior partners with thirty years of combined design experience.',
    icon: 'guidance'
  },
  {
    id: 'investment-focused',
    title: 'INVESTMENT FOCUSED',
    description: 'Our priority is to create enduring value with spaces that retain both functional and aesthetic appeal for decades and future generations.',
    icon: 'investment'
  },
  {
    id: 'timeless-craftsmanship',
    title: 'TIMELESS CRAFTSMANSHIP',
    description: 'We select clean and solid interior materials where craftsmanship comes first, ensuring every finished project reflects authenticity, sustainability and ease of living.',
    icon: 'craftsmanship'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: "What's included in the initial conversation?",
    answer: "Our 1-hour complimentary consultation includes architectural analysis, lifestyle assessment, and preliminary space planning with follow-up recommendations."
  },
  {
    id: 'faq-2',
    question: "What is your typical project timeline?",
    answer: "Timelines depend on scope—ranging from 6 to 10 weeks for single room interior styling up to 24+ weeks for full-scale architectural renovations."
  },
  {
    id: 'faq-3',
    question: "How is decoration different from interior design?",
    answer: "Interior decoration focuses primarily on surface aesthetics, fabrics, furnishings, and lighting. Interior architecture/design addresses spatial flow, custom millwork, structural reconfigurations, MEP coordination, and functional building modifications."
  },
  {
    id: 'faq-4',
    question: "Do you work with some of our existing furniture and art?",
    answer: "Absolutely. We appreciate items with personal history and seamlessly integrate cherished heirlooms and art collections into the new architectural environment."
  },
  {
    id: 'faq-5',
    question: "How do you ensure plans work with our building's architectural standards?",
    answer: "We have extensive experience with NYC pre-war, post-war, and landmark co-op/condo board requirements, managing the entire architectural review and approval process."
  }
];
