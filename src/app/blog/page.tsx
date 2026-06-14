'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, Search, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { blogPosts } from '@/data/blog';
import Card from '@/components/ui/Card';

export default function BlogPage() {
  const categories: ('All' | 'Design' | 'Development' | 'SEO' | 'Marketing' | 'Branding')[] = [
    'All', 'Design', 'Development', 'SEO', 'Marketing', 'Branding'
  ];

  const [selectedCat, setSelectedCat] = useState<'All' | 'Design' | 'Development' | 'SEO' | 'Marketing' | 'Branding'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCat === 'All' || post.category === selectedCat;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-xs text-accent-purple font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" /> High-Rank Content Clusters
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight leading-none">
          Our Blog.
        </h1>
        <p className="text-white/60 text-lg leading-relaxed">
          Read actionable insights compiled by our design and engineering team covering SaaS conversion tips, next-generation React architectures, and organic growth hacks.
        </p>
      </div>

      {/* Search Bar & Filters Layout */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-8">
        
        {/* Category filters */}
        <div className="flex flex-wrap gap-2 order-2 md:order-1">
          {categories.map((cat) => {
            const isActive = selectedCat === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`relative px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  isActive 
                    ? 'text-slate-900' 
                    : 'text-white/70 hover:text-white border border-white/5 bg-white/[0.01] hover:bg-white/[0.03]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeBlogCatBg"
                    className="absolute inset-0 bg-white rounded-full z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            );
          })}
        </div>

        {/* Search input field */}
        <div className="relative w-full md:max-w-xs order-1 md:order-2">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/5 rounded-full py-2.5 pl-10 pr-4 text-xs text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 transition-colors"
          />
        </div>

      </div>

      {/* Articles Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredPosts.map((post) => (
            <motion.div
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <Card className="h-full p-0 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] border-white/[0.05]" hoverEffect={true}>
                {/* Photo cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/80 backdrop-blur-md text-white border border-white/10">
                    {post.category}
                  </span>
                </div>

                {/* Content Area */}
                <div className="p-6 flex flex-col justify-between h-[240px]">
                  <div>
                    {/* Meta */}
                    <div className="flex items-center gap-4 text-[10px] text-white/40 mb-3 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-accent-cyan transition-colors line-clamp-2 leading-snug">
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h3>
                    <p className="text-white/50 text-xs mt-3 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Footer details */}
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
                      <span className="w-4 h-[1px] bg-white/20 group-hover:w-6 transition-all duration-300" />
                    </Link>
                  </div>

                </div>

              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-white/40">
          No articles match your search parameters. Try searching for something else!
        </div>
      )}

    </div>
  );
}
