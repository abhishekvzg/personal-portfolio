export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  thumbnail: string;
  embedType: 'pdf' | 'canva' | 'none';
  embedUrl?: string;
  createdAt: string;
}

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Redesign",
    summary: "Led end-to-end product redesign resulting in 40% conversion increase",
    description: "Spearheaded a comprehensive UX overhaul of a major e-commerce platform, conducting user research with 200+ participants, mapping customer journeys, and implementing data-driven design decisions. The project involved cross-functional collaboration with engineering, design, and marketing teams.",
    tags: ["UX", "Data", "Strategy"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    embedType: "canva",
    embedUrl: "https://www.canva.com/design/sample/view?embed",
    createdAt: "2024-12"
  },
  {
    id: "2",
    title: "Mobile Banking App",
    summary: "Launched mobile-first banking experience for 2M+ users",
    description: "Owned the product roadmap for a greenfield mobile banking application. Defined user personas, prioritized features using RICE framework, and led agile sprints. Achieved 4.8 App Store rating within 3 months of launch.",
    tags: ["Mobile", "Fintech", "Strategy"],
    thumbnail: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=400&fit=crop",
    embedType: "pdf",
    embedUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    createdAt: "2024-10"
  },
  {
    id: "3",
    title: "AI-Powered Analytics",
    summary: "Built ML-driven insights dashboard for enterprise clients",
    description: "Conceptualized and launched an AI-powered analytics platform that democratized data insights for non-technical stakeholders. Collaborated with data science team to translate complex ML outputs into actionable business recommendations.",
    tags: ["Data", "AI", "B2B"],
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    embedType: "canva",
    embedUrl: "https://www.canva.com/design/sample2/view?embed",
    createdAt: "2024-08"
  },
  {
    id: "4",
    title: "Healthcare Platform",
    summary: "Designed patient-centric telemedicine experience",
    description: "Led product strategy for a telemedicine platform serving rural communities. Conducted extensive user research to understand unique challenges, resulting in a simplified interface that increased appointment completion rates by 65%.",
    tags: ["UX", "Healthcare", "Mobile"],
    thumbnail: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
    embedType: "pdf",
    embedUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
    createdAt: "2024-06"
  },
  {
    id: "5",
    title: "SaaS Onboarding",
    summary: "Optimized user activation flow reducing churn by 35%",
    description: "Revamped the onboarding experience for a B2B SaaS product. Implemented progressive disclosure patterns, contextual tooltips, and milestone-based celebrations. Used analytics to identify drop-off points and iterate rapidly.",
    tags: ["B2B", "UX", "Data"],
    thumbnail: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
    embedType: "canva",
    embedUrl: "https://www.canva.com/design/sample3/view?embed",
    createdAt: "2024-04"
  },
  {
    id: "6",
    title: "Marketplace MVP",
    summary: "Launched two-sided marketplace from 0 to 10K users",
    description: "Built and launched a niche marketplace connecting local artisans with consumers. Managed the entire product lifecycle from discovery to launch, solving the chicken-and-egg problem through strategic supply-side partnerships.",
    tags: ["Strategy", "Mobile", "Growth"],
    thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    embedType: "none",
    createdAt: "2024-02"
  }
];

export const allTags = Array.from(
  new Set(projects.flatMap(p => p.tags))
).sort();
