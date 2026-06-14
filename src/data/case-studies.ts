export interface Metric {
  value: string;
  label: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  industry: string;
  year: string;
  services: string[];
  overview: string;
  challenge: string;
  strategy: string;
  results: string;
  metrics: Metric[];
  testimonial: Testimonial;
  image: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "zenith-saas",
    title: "Zenith Flow: Re-engineering SaaS Productivity for Enterprise Scale",
    subtitle: "How FAILED4 design systems reduced user onboarding friction by 60% and unlocked global enterprise adoption.",
    client: "Zenith Technologies",
    industry: "SaaS & Productivity",
    year: "2025",
    services: ["UI/UX Design", "Web Design", "Design System"],
    overview: "Zenith Flow was struggling with high churn rates on their onboarding flow. Complex hierarchy and disjointed style schemas created drag on acquisition. FAILED4 redesigned the dashboard interface, streamlined the multi-step signup process, and shipped a standardized Figma design system.",
    challenge: "The legacy Zenith interface had over 45 custom input forms, confusing workspace creations, and a high learning curve. Over 40% of trial signups churned within 3 days. There was no single source of truth for component styles, making development extremely slow.",
    strategy: "Our design team conducted comprehensive user shadowing sessions. We identified key friction points in workspace configuration. We consolidated the interface, removing 20+ fields. We then created the 'Zenith Orbit' design system—a modern, clean layout in dark mode with modular components built to flex across screens.",
    results: "We shipped a cohesive visual interface in 8 weeks. User onboarding completion jumped, product onboarding time fell from 14 minutes to 4.5 minutes, and Zenith's product engineering team was able to build new features twice as fast.",
    metrics: [
      { value: "-60%", label: "Onboarding Friction" },
      { value: "+38%", label: "Trial-to-Paid Conversion" },
      { value: "2x", label: "Feature Shipping Velocity" }
    ],
    testimonial: {
      quote: "FAILED4 didn't just redesign our dashboard; they transformed our entire product delivery ecosystem. The onboarding conversion rate exceeded our annual target within 30 days of release.",
      author: "Sarah Jenkins",
      role: "VP of Product, Zenith Technologies",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "apex-ecommerce",
    title: "Apex Core: Building a Blazing-Fast Next-Gen E-commerce Storefront",
    subtitle: "Transitioning a traditional retail brand to a headless, high-converting React storefront.",
    client: "Apex Retailers Ltd",
    industry: "Retail & E-commerce",
    year: "2025",
    services: ["Frontend Development", "Web Design", "SEO"],
    overview: "Apex's legacy monolithic platform was suffering from poor load speeds (averaging 5.2 seconds on mobile) and high shopping cart abandonment. FAILED4 built a headless architecture on Next.js powered by Tailwind CSS, coupled with a fast Shopify GraphQL API middleware.",
    challenge: "High loading times were directly harming search visibility and ad efficiency. A 1-second delay in page load was costing Apex roughly $24,000 weekly in abandoned baskets. Mobile performance was particularly poor, scoring a meager 34/100 on Lighthouse audits.",
    strategy: "We bypassed pre-built templates to compile a custom headless application. Leveraged Next.js Server Components (RSC) to render pages server-side, fetching catalog structures in real-time. We styled the app with high-performance CSS and optimized all dynamic image payloads.",
    results: "Mobile loading speed was reduced to under 1.2 seconds. Bounce rates decreased by half, and organic organic visibility grew because of improved Core Web Vitals.",
    metrics: [
      { value: "0.9s", label: "Mobile FCP Load Speed" },
      { value: "+54%", label: "Conversion Rate" },
      { value: "99/100", label: "Desktop Lighthouse Score" }
    ],
    testimonial: {
      quote: "The speed increase was instantaneous. Our customer service team immediately noticed fewer tickets regarding site errors, and our online sales numbers broke previous quarterly records.",
      author: "David Chen",
      role: "Chief Digital Officer, Apex Retailers",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: "novasphere-seo",
    title: "NovaSphere: Dominating Search Results with Dynamic Content Architecture",
    subtitle: "Driving exponential business signups through intent-mapped content structures and structural schema optimizations.",
    client: "NovaSphere Inc.",
    industry: "FinTech & Analytics",
    year: "2026",
    services: ["SEO", "Content Writing", "Digital Marketing"],
    overview: "NovaSphere wanted to compete for high-intent queries in the crowded fintech industry. Relying on paid acquisition was becoming unsustainable. FAILED4 structured a thorough content plan and mapped out technical SEO modifications to secure organic keyword search volume.",
    challenge: "NovaSphere was spending $35,000 monthly on paid ads for keywords with high click prices. Their domain rating was low, and search engines could not efficiently parse their dynamic SPA dashboard pages due to lack of static metadata tags.",
    strategy: "We built an indexable information library on Next.js utilizing static content generation. We mapped 180 target keywords based on buying intent, created semantic content clusters, and injected structured JSON-LD schemes. We also coordinated clean backlink exchanges with industry partners.",
    results: "Within 6 months, NovaSphere ranked on page 1 for 42 high-competition business keywords. Monthly organic traffic rose from 12,000 to over 120,000 page views.",
    metrics: [
      { value: "4.2x", label: "Organic Inbounds" },
      { value: "-68%", label: "Cost-Per-Acquisition" },
      { value: "120K+", label: "Monthly Search Sessions" }
    ],
    testimonial: {
      quote: "Our organic inbound channel went from a minor secondary source to our largest, highest-converting pipeline driver, saving us thousands in digital ad spend.",
      author: "Marcus Aurelius",
      role: "VP of Inbound Growth, NovaSphere",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80"
    },
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
  }
];
