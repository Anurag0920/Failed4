import { MetadataRoute } from 'next';
import { caseStudies } from '@/data/case-studies';
import { blogPosts } from '@/data/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://failed4.agency';

  // Static routes mapping
  const staticRoutes = [
    '',
    '/services',
    '/portfolio',
    '/about',
    '/blog',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Dynamic Case Studies mapping
  const caseStudiesRoutes = caseStudies.map((study) => ({
    url: `${baseUrl}/case-studies/${study.id}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic Blogs mapping
  const blogRoutes = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.id}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...caseStudiesRoutes, ...blogRoutes];
}
