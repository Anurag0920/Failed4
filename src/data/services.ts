import { 
  Paintbrush, 
  Globe, 
  Code2, 
  PenTool, 
  Search, 
  TrendingUp, 
  Award,
  LucideIcon
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  iconName: string; // Used to dynamic render the Lucide icons
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  stats: {
    label: string;
    value: string;
  };
}

export const services: Service[] = [
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    iconName: "Figma",
    shortDescription: "Immersive interfaces built to engage users, reinforce brand recognition, and boost conversion rates.",
    fullDescription: "We design websites and applications that are intuitive, beautiful, and hyper-functional. By placing your users at the center of our process, we build experiences that drive adoption and customer loyalty.",
    features: [
      "User Research & Journey Mapping",
      "Interactive Wireframing & Prototyping",
      "Custom UI Design Systems",
      "Usability Testing & Feedback Loops",
      "Visual & Interaction Design"
    ],
    benefits: [
      "Reduced user bounce rates",
      "Enhanced user satisfaction and retention",
      "Cohesive brand expression across all screens"
    ],
    stats: {
      label: "Average Conversion Increase",
      value: "+45%"
    }
  },
  {
    id: "web-design",
    title: "Web Design",
    iconName: "Globe",
    shortDescription: "Visually stunning, responsive websites optimized for story-telling and modern digital storytelling.",
    fullDescription: "Your website is your 24/7 digital storefront. We design highly custom web layouts designed to separate you from competitors, present your value proposition clearly, and look incredible on every viewport.",
    features: [
      "Responsive Layout Architecture",
      "Interactive Micro-interactions",
      "Dark Mode & Dynamic Themes",
      "Creative Editorial Layouts",
      "SaaS Mockups & Visual Assets"
    ],
    benefits: [
      "Instant trust validation from first visit",
      "Perfect performance on mobile and desktop",
      "Scalable layouts adapted for content expansion"
    ],
    stats: {
      label: "Brand Trust Increase",
      value: "92%"
    }
  },
  {
    id: "frontend-development",
    title: "Frontend Development",
    iconName: "Code2",
    shortDescription: "Ultra-fast, responsive Next.js apps with clean TypeScript architectures and fluid motion design.",
    fullDescription: "We bring static designs to life with pixel-perfect accuracy and blazing-fast code. Using Next.js, React, Tailwind CSS, and Framer Motion, we write high-performance applications designed to rank and scale.",
    features: [
      "Next.js App Router Setup",
      "TypeScript Type-Safe Architecture",
      "Framer Motion Fluid Animations",
      "Core Web Vitals Optimization",
      "Accessible Semantic Markup (WAI-ARIA)"
    ],
    benefits: [
      "Sub-second page load times",
      "Extremely clean, maintainable codebase",
      "High Lighthouse performance scoring"
    ],
    stats: {
      label: "Lighthouse Performance Score",
      value: "99/100"
    }
  },
  {
    id: "content-writing",
    title: "Content Writing",
    iconName: "PenTool",
    shortDescription: "Persuasive copywriting and brand stories crafted to establish authority and drive action.",
    fullDescription: "Design attracts, but content converts. We write landing page copies, blog articles, and brand manifestos that speak your target audience's language, resolve objections, and command authority in your niche.",
    features: [
      "Landing Page Sales Copywriting",
      "Technical Blog & Article Writing",
      "Brand Voice & Persona Guidelines",
      "Social Media Campaign Assets",
      "SEO-friendly Search Intent Writing"
    ],
    benefits: [
      "Consistent, authoritative brand voice",
      "Higher opt-in and CTA click rates",
      "Rich library of reusable content assets"
    ],
    stats: {
      label: "Engagement Uplift",
      value: "+60%"
    }
  },
  {
    id: "seo",
    title: "SEO (Search Engine Optimization)",
    iconName: "Search",
    shortDescription: "Data-driven organic search strategies to position your brand at the absolute top of Google.",
    fullDescription: "Rank for keywords that generate revenue. We conduct deep-dive technical audits, structure internal linkages, optimize on-page signals, and construct authoritative content clusters that search engines love.",
    features: [
      "Intent-based Keyword Research",
      "On-page Metadata & Semantic Audits",
      "Technical SEO & Core Web Vitals Fixes",
      "Structured Schema Markup (JSON-LD)",
      "Backlink & Authority Campaign Architecture"
    ],
    benefits: [
      "Compounding monthly organic traffic flow",
      "Reduced dependence on paid ad spend",
      "High rankings for competitive commercial terms"
    ],
    stats: {
      label: "Organic Traffic Growth",
      value: "3.2x"
    }
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    iconName: "TrendingUp",
    shortDescription: "High-ROI marketing campaigns across paid media, social networks, and growth loops.",
    fullDescription: "Scale your revenue acquisition engine. We set up, run, and scale paid acquisition campaigns (Google, Meta, LinkedIn) alongside creative viral marketing channels to turn traffic into qualified pipeline.",
    features: [
      "Paid Search & Social Ad Setup",
      "Conversion Rate Optimization (CRO)",
      "Email Nurture & Automation Funnels",
      "Retargeting & Performance Tracking",
      "Analytics Dashboards & KPI Auditing"
    ],
    benefits: [
      "Predictable pipeline of inbound inquiries",
      "optimized Customer Acquisition Cost (CAC)",
      "Actionable analytics mapping user lifecycles"
    ],
    stats: {
      label: "Average Campaign ROAS",
      value: "4.8x"
    }
  },
  {
    id: "brand-identity-design",
    title: "Brand Identity Design",
    iconName: "Award",
    shortDescription: "Cohesive, modern brand designs including logos, design tokens, and style guides.",
    fullDescription: "Build a brand that demands attention. We create logos, choose palettes, specify typographies, and lay down design systems that represent your core values and leave a memorable mark in your industry.",
    features: [
      "Logo System & Vector Lockups",
      "Typography Scale & Color Palettes",
      "Brand Guidelines & Asset Kits",
      "Custom SVG Iconography & Illustrations",
      "Digital Pitch Deck & Collateral Setup"
    ],
    benefits: [
      "Instantly recognizable visual footprint",
      "Polished, professional presentation",
      "Consistency across physical and digital mediums"
    ],
    stats: {
      label: "Customer Brand Recall",
      value: "+75%"
    }
  }
];

export function getIconComponent(iconName: string) {
  switch (iconName) {
    case "Figma": return Paintbrush;
    case "Globe": return Globe;
    case "Code2": return Code2;
    case "PenTool": return PenTool;
    case "Search": return Search;
    case "TrendingUp": return TrendingUp;
    case "Award": return Award;
    default: return Globe;
  }
}
