export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'UI/UX' | 'Web Dev' | 'SEO' | 'Marketing' | 'Brand';
  description: string;
  image: string;
  tags: string[];
  link: string;
  featured: boolean;
}

export const portfolioProjects: Project[] = [
  {
    id: "zenith-saas",
    title: "Zenith Flow: Next-Gen SaaS Workspace",
    client: "Zenith Technologies",
    category: "UI/UX",
    description: "Complete design system, dashboard visualization, and micro-interaction flow for a collaborative enterprise tool.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    tags: ["Figma", "SaaS Dashboard", "Design System", "UX Research"],
    link: "/case-studies/zenith-saas",
    featured: true
  },
  {
    id: "apex-ecommerce",
    title: "Apex Core: Headless Commerce Engine",
    client: "Apex Retailers Ltd",
    category: "Web Dev",
    description: "A blistering fast storefront utilizing Next.js, Shopify Storefront API, and custom caching resulting in sub-200ms loads.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "React Server Components", "Tailwind CSS", "Shopify API"],
    link: "/case-studies/apex-ecommerce",
    featured: true
  },
  {
    id: "novasphere-seo",
    title: "NovaSphere: 400% Organic Traffic Engine",
    client: "NovaSphere Inc.",
    category: "SEO",
    description: "Strategic SEO cluster framework and semantic content plan that drove over 120,000 monthly active users organics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Search intent", "Technical SEO", "Schema Markup", "Content Clusters"],
    link: "/case-studies/novasphere-seo",
    featured: true
  },
  {
    id: "nexus-branding",
    title: "Nexus Labs: Reimagining Scientific Tech Brand",
    client: "Nexus Labs LLC",
    category: "Brand",
    description: "An evocative brand identity package, including logo mark, dynamic color spectrum, typography rules, and collateral assets.",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed255753e1?auto=format&fit=crop&w=800&q=80",
    tags: ["Brand Identity", "Vector Logo", "Brand Guidelines", "Visual Identity"],
    link: "/case-studies/nexus-branding",
    featured: false
  },
  {
    id: "vortex-growth",
    title: "Vortex Analytics: Multi-Channel Growth Loop",
    client: "Vortex Fintech",
    category: "Marketing",
    description: "Integrated paid search and visual retargeting flow that drove down customer acquisition costs by 48%.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["Paid Ads", "Google Search", "Facebook Ads", "Retargeting"],
    link: "/case-studies/vortex-growth",
    featured: false
  },
  {
    id: "solar-energy-interface",
    title: "Helios Grid: IoT Solar Control Dashboard",
    client: "Helios Energy",
    category: "UI/UX",
    description: "Real-time energy tracking application interface built for rugged tablets and clean web deployment.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=800&q=80",
    tags: ["Mobile UX", "IoT Controls", "Real-time Charts", "Tailwind CSS"],
    link: "/case-studies/solar-energy-interface",
    featured: true
  }
];
