import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/data/blog';
import Card from '@/components/ui/Card';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for search optimization
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.id === slug);
  
  if (!post) {
    return {
      title: "Article Not Found | FAILED4",
    };
  }

  return {
    title: `${post.title} | FAILED4 Insights`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: `${post.title} | FAILED4`,
      description: post.excerpt,
      images: [{ url: post.image }],
    }
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    notFound();
  }

  // Suggest other articles at the bottom
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 2);

  // JSON-LD structured data for article SEO rich snippets
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": post.image,
    "datePublished": "2026-06-05", // Mock release schedule matching actual year
    "author": {
      "@type": "Person",
      "name": post.author.name,
      "jobTitle": post.author.role
    },
    "publisher": {
      "@type": "Organization",
      "name": "FAILED4 Digital Agency",
      "logo": {
        "@type": "ImageObject",
        "url": "https://failed4.agency/logo.png"
      }
    },
    "description": post.excerpt
  };

  return (
    <div className="py-12 md:py-20 max-w-4xl mx-auto px-6 relative z-10">
      
      {/* Schema structured data injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Breadcrumbs */}
      <div className="flex items-center gap-2 text-xs text-white/40 mb-8 font-medium">
        <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white/60 truncate">{post.category}</span>
      </div>

      {/* Back link */}
      <Link
        href="/blog"
        className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors mb-10 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Blog
      </Link>

      {/* Article Header block */}
      <div className="mb-12">
        <span className="text-[10px] text-accent-cyan bg-accent-cyan/10 px-2.5 py-0.5 rounded-full font-bold tracking-wide uppercase">
          {post.category}
        </span>
        
        <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-4 mb-6 tracking-tight leading-tight">
          {post.title}
        </h1>

        {/* Post Metadata Details */}
        <div className="flex flex-wrap items-center gap-6 text-xs text-white/50 border-y border-white/5 py-4">
          {/* Author info */}
          <div className="flex items-center gap-2">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-8 h-8 rounded-full object-cover border border-white/10"
            />
            <div>
              <div className="font-bold text-white leading-none">{post.author.name}</div>
              <div className="text-[9px] text-white/40 mt-0.5">{post.author.role}</div>
            </div>
          </div>
          
          <div className="w-[1px] h-6 bg-white/5 hidden sm:block" />

          {/* Date & Read time details */}
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" /> {post.date}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" /> {post.readTime}
          </span>
        </div>
      </div>

      {/* Cover Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-12 shadow-[0_20px_40px_rgba(0,0,0,0.6)]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article HTML body parsed node */}
      <article 
        className="blog-content mb-16 pb-12 border-b border-white/5"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Related articles showcase */}
      <div>
        <h3 className="font-heading font-black text-xl text-white mb-8">
          Suggested Reading
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {relatedPosts.map((rel) => (
            <Card key={rel.id} className="p-6 bg-white/[0.01] hover:bg-white/[0.02] border-white/[0.05]" hoverEffect={true}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] text-accent-purple font-bold uppercase tracking-widest">{rel.category}</span>
                  <h4 className="font-heading font-bold text-base text-white mt-2 leading-snug">
                    <Link href={`/blog/${rel.id}`}>{rel.title}</Link>
                  </h4>
                </div>
                <Link
                  href={`/blog/${rel.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white mt-6 group"
                >
                  Read Article 
                  <Clock className="w-3.5 h-3.5 ml-1 text-white/40" />
                  <span className="text-[10px] text-white/40 font-normal">{rel.readTime}</span>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
