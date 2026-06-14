import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, CheckCircle2, ChevronRight, MessageSquare, Quote, Sparkles } from 'lucide-react';
import { caseStudies } from '@/data/case-studies';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { Metadata } from 'next';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generate dynamic metadata for SEO compliance
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find(cs => cs.id === slug);
  
  if (!study) {
    return {
      title: "Case Study Not Found | FAILED4",
    };
  }

  return {
    title: `${study.client} Case Study | FAILED4 Digital Agency`,
    description: study.subtitle,
    openGraph: {
      title: `${study.client} Case Study | FAILED4`,
      description: study.subtitle,
      images: [{ url: study.image }],
    }
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find(cs => cs.id === slug);

  if (!study) {
    notFound();
  }

  // Pick other projects as related
  const relatedStudies = caseStudies.filter(cs => cs.id !== study.id).slice(0, 2);

  return (
    <div className="py-12 md:py-20 max-w-5xl mx-auto px-6 relative z-10">
      
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs text-white/40 mb-8 font-medium">
        <Link href="/case-studies" className="hover:text-white transition-colors">Case Studies</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-white/60 truncate">{study.client}</span>
      </div>

      {/* Back button */}
      <Link
        href="/case-studies"
        className="inline-flex items-center gap-2 text-xs text-white/60 hover:text-white transition-colors mb-10 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
        Back to Case Studies
      </Link>

      {/* Title block */}
      <div className="mb-16">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          {study.services.map((srv, idx) => (
            <span key={idx} className="text-[10px] text-accent-cyan bg-accent-cyan/10 px-2.5 py-0.5 rounded-full font-medium tracking-wide uppercase">
              {srv}
            </span>
          ))}
        </div>
        
        <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight leading-tight">
          {study.title}
        </h1>
        
        <p className="text-white/60 text-lg leading-relaxed max-w-3xl italic">
          {study.subtitle}
        </p>
      </div>

      {/* Hero Cover Image */}
      <div className="relative aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 mb-16 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
        <img
          src={study.image}
          alt={study.client}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
      </div>

      {/* Key Project Specs Card */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 border-y border-white/5 py-8">
        <div>
          <div className="text-[10px] text-white/40 uppercase font-semibold">Client</div>
          <div className="text-sm font-bold text-white mt-1">{study.client}</div>
        </div>
        <div>
          <div className="text-[10px] text-white/40 uppercase font-semibold">Industry</div>
          <div className="text-sm font-bold text-white mt-1">{study.industry}</div>
        </div>
        <div>
          <div className="text-[10px] text-white/40 uppercase font-semibold">Release Year</div>
          <div className="text-sm font-bold text-white mt-1">{study.year}</div>
        </div>
        <div>
          <div className="text-[10px] text-white/40 uppercase font-semibold">Services Delivered</div>
          <div className="text-sm font-bold text-accent-purple mt-1">{study.services.join(', ')}</div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
        
        {/* Story details (left 8 cols) */}
        <div className="lg:col-span-8 flex flex-col gap-10">
          
          {/* Overview */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-accent-purple" /> Overview
            </h2>
            <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
              {study.overview}
            </p>
          </div>

          {/* Challenge */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-accent-cyan" /> The Challenge
            </h2>
            <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
              {study.challenge}
            </p>
          </div>

          {/* Strategy */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-accent-indigo" /> Our Strategy
            </h2>
            <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
              {study.strategy}
            </p>
          </div>

          {/* Results */}
          <div>
            <h2 className="font-heading font-extrabold text-xl text-white mb-4 flex items-center gap-2">
              <span className="w-1.5 h-6 rounded bg-accent-pink" /> The Results
            </h2>
            <p className="text-white/70 text-sm leading-relaxed whitespace-pre-line">
              {study.results}
            </p>
          </div>

        </div>

        {/* Sidebar metrics & testimonial (right 4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6 sticky top-28">
          {/* Metrics card */}
          <Card hoverEffect={false} className="border-white/10 bg-white/[0.01]">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white/40 mb-6">
              Growth Achieved
            </h3>
            <div className="flex flex-col gap-6">
              {study.metrics.map((metric, idx) => (
                <div key={idx} className="border-l-2 border-accent-cyan pl-4">
                  <div className="text-3xl font-black font-heading text-white text-glow">
                    {metric.value}
                  </div>
                  <div className="text-[10px] text-white/40 uppercase font-semibold mt-1">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Testimonial Card */}
          <Card hoverEffect={false} className="border-white/10 bg-[#0c0a20]/20 relative">
            <Quote className="absolute top-4 right-4 w-8 h-8 text-white/[0.02] pointer-events-none" />
            <p className="text-xs text-white/70 italic leading-relaxed mb-6">
              "{study.testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              <img
                src={study.testimonial.avatar}
                alt={study.testimonial.author}
                className="w-8 h-8 rounded-full object-cover border border-white/10"
                loading="lazy"
              />
              <div>
                <div className="text-[11px] font-bold text-white leading-tight">
                  {study.testimonial.author}
                </div>
                <div className="text-[9px] text-white/40 uppercase tracking-wide">
                  {study.testimonial.role}
                </div>
              </div>
            </div>
          </Card>
        </div>

      </div>

      {/* Related Case Studies */}
      <div className="border-t border-white/5 pt-16 mt-16">
        <h2 className="font-heading font-black text-2xl text-white mb-10 text-center">
          Other Growth Deliveries
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {relatedStudies.map((rel) => (
            <Card key={rel.id} className="p-6 bg-white/[0.01] hover:bg-white/[0.02] border-white/[0.05]" hoverEffect={true}>
              <div className="flex flex-col justify-between h-full">
                <div>
                  <span className="text-[10px] text-accent-cyan font-bold uppercase tracking-widest">{rel.industry}</span>
                  <h3 className="font-heading font-bold text-lg text-white mt-2 leading-snug">
                    {rel.title}
                  </h3>
                  <p className="text-white/50 text-xs mt-3 line-clamp-2">
                    {rel.overview}
                  </p>
                </div>
                <Link
                  href={`/case-studies/${rel.id}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white mt-6 group"
                >
                  Explore Case Study 
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
