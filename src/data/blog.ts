export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string; // HTML-friendly string
  category: 'Design' | 'Development' | 'SEO' | 'Marketing' | 'Branding';
  author: Author;
  date: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "design-systems-scale",
    title: "How to Build a Design System That Developers Actually Love",
    excerpt: "Bridging the gap between creative designers and frontend engineers using modern token structures and component libraries.",
    content: `
      <p>Building a design system is easy; getting developers to adopt it is hard. Most design systems fail not because the UI elements look bad, but because they are painful to integrate into a production codebase.</p>
      
      <h2>1. The Myth of the Figma-to-Code Magic Bullet</h2>
      <p>Too often, design teams hand over Figma components expecting developer code to match automatically. True integration requires establishing strict Design Tokens—named variables representing styles like colors, spacing, and typography.</p>
      
      <h2>2. Design Tokens: The Shared Language</h2>
      <p>Tokens are the bridge. Instead of hardcoded values like <code>#8B5CF6</code>, use tokens like <code>--color-primary-accent</code>. By managing tokens in a centralized JSON package, both Figma files and Tailwind configurations can stay perfectly synced.</p>
      
      <h2>3. Code Cohesion: Think in Components</h2>
      <p>When engineering and design share component definitions, productivity doubles. Build a reusable React component library where props mirror design variations. This reduces double-handling and guarantees consistency.</p>
      
      <blockquote>"A design system is a living product. If it doesn't change as code and user patterns evolve, it becomes a relic."</blockquote>
      
      <h2>4. Provide Rich Documentation</h2>
      <p>If a component isn't documented, it doesn't exist. Write clear guides showcasing usage, active states, and code snippets. This speeds up engineering alignment and onboarding of new developers.</p>
    `,
    category: "Design",
    author: {
      name: "Alex Rivera",
      role: "Lead UI/UX Architect",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
    },
    date: "June 2, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=800&q=80",
    tags: ["Design System", "Figma", "UIUX", "Tailwind"]
  },
  {
    id: "nextjs-15-performance",
    title: "Optimizing Next.js App Router for Sub-Second Loading Times",
    excerpt: "A deep dive into server components, static generation strategies, dynamic caching, and core web vitals optimization.",
    content: `
      <p>Next.js continues to lead modern web architecture, but unlocking its true speed requires shifting our mental model from client-side render loops to intelligent server-side preprocessing.</p>
      
      <h2>1. Leverage Server Components by Default</h2>
      <p>With React Server Components, the heavy lifting of fetching data and compiling layouts is done entirely on the server. That means less JavaScript is shipped to the client, leading to much faster page rendering.</p>
      
      <h2>2. Optimize Image Deliveries</h2>
      <p>Images represent over 60% of modern web page size. Always use the Next.js <code>&lt;Image&gt;</code> component. It automatically optimizes resolution sizes, compresses formats into WebP/AVIF, and lazy loads below-the-fold content.</p>
      
      <h2>3. Fine-Tune Caching Mechanics</h2>
      <p>Use Next.js cache layers effectively. Combine static generation for public directories with dynamic fetch parameters to cache repetitive data queries, preventing unnecessary database load times.</p>
      
      <blockquote>"Web performance isn't just a technical score; it's a direct driver of conversion rate, search presence, and overall customer satisfaction."</blockquote>
      
      <h2>4. Analyze Core Web Vitals</h2>
      <p>Monitor metrics like Largest Contentful Paint (LCP) and Cumulative Layout Shift (CLS). Ensure elements above the fold have static heights, preventing page content jumps as images load.</p>
    `,
    category: "Development",
    author: {
      name: "Marcus Miller",
      role: "Principal Frontend Engineer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
    },
    date: "May 28, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
    tags: ["Next.js", "Performance", "React", "Core Web Vitals"]
  },
  {
    id: "seo-schema-markup",
    title: "How We Used JSON-LD Structured Data to Boost Search Presence by 80%",
    excerpt: "Demystifying schema markups to help search engines index your services, reviews, and blog articles more effectively.",
    content: `
      <p>Search engines are incredibly smart, but they still struggle to read text exactly like humans. By injecting schema markups, you explicitly tell search engine crawlers exactly what your web page is about.</p>
      
      <h2>1. What is JSON-LD Schema?</h2>
      <p>JSON-LD is a structured data format written in JSON. It provides structured parameters to specify elements like Organizations, Reviews, Products, and Article structures, displaying rich snippets in Google search results.</p>
      
      <h2>2. Implementing Article Schema</h2>
      <p>Every blog post should have an Article schema mapping its headline, publication date, author details, and cover images. This increases chances of ranking in search panels.</p>
      
      <blockquote>"Schema markup is the hidden metadata layer that transforms search results from simple blue links into high-visibility rich cards."</blockquote>
      
      <h2>3. Validating and Monitoring Search Console</h2>
      <p>Always validate your code using Google's Schema Validator tool. Check Google Search Console periodically for structured data errors that could hinder indexing.</p>
    `,
    category: "SEO",
    author: {
      name: "Sarah Jenkins",
      role: "SEO Director & Strategist",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    date: "May 15, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    tags: ["SEO", "Google Schema", "Metadata", "Growth"]
  }
];
