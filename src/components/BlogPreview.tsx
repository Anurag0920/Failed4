'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import Card from './ui/Card';
import Button from './ui/Button';

export default function BlogPreview() {
  // Take latest 3 posts for preview
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <section className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold text-accent-cyan tracking-wider">
              LATEST INSIGHTS & ARTICLES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white leading-tight">
              Knowledge to Scale Your Brand.
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Button href="/blog" variant="secondary" className="group text-xs gap-1.5 !px-5 !py-2.5">
              Read All Articles 
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Blog Post Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recentPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full p-0 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] border-white/[0.05]" hoverEffect={true}>
                {/* Cover Photo */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Category Tag overlay */}
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/80 backdrop-blur-md text-white border border-white/10">
                    {post.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between h-[240px]">
                  <div>
                    {/* Date and Reading time details */}
                    <div className="flex items-center gap-4 text-[10px] text-white/40 mb-3 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-accent-cyan transition-colors line-clamp-2 leading-snug">
                      {post.title}
                    </h3>
                    
                    <p className="text-white/50 text-xs mt-3 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Author detail & Link */}
                  <div className="flex items-center justify-between mt-4 border-t border-white/5 pt-4">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="w-6 h-6 rounded-full object-cover border border-white/10"
                        loading="lazy"
                      />
                      <span className="text-[10px] text-white/60 font-semibold">{post.author.name}</span>
                    </div>

                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 group-hover:text-white transition-colors"
                    >
                      Read Post 
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
