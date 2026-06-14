'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { portfolioProjects, Project } from '@/data/portfolio';
import Card from '@/components/ui/Card';

export default function PortfolioPage() {
  const categories: ('All' | 'UI/UX' | 'Web Dev' | 'SEO' | 'Marketing' | 'Brand')[] = [
    'All', 'UI/UX', 'Web Dev', 'SEO', 'Marketing', 'Brand'
  ];
  
  const [selectedCat, setSelectedCat] = useState<'All' | 'UI/UX' | 'Web Dev' | 'SEO' | 'Marketing' | 'Brand'>('All');

  const filteredProjects = selectedCat === 'All'
    ? portfolioProjects
    : portfolioProjects.filter(p => p.category === selectedCat);

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-xs text-accent-purple font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" /> High-Impact Case Studies
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight leading-none">
          Our Portfolio.
        </h1>
        <p className="text-white/60 text-lg leading-relaxed">
          Explore our archive of selected digital projects spanning high-fidelity interface design, bespoke React frontend builds, content marketing sprints, and search position domination.
        </p>
      </div>

      {/* Category Filter Navigation */}
      <div className="flex flex-wrap gap-2.5 mb-12 border-b border-white/5 pb-6">
        {categories.map((cat) => {
          const isActive = selectedCat === cat;
          return (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                isActive 
                  ? 'text-slate-900' 
                  : 'text-white/70 hover:text-white border border-white/5 bg-white/[0.01] hover:bg-white/[0.04]'
              }`}
            >
              {/* Sliding background highlight */}
              {isActive && (
                <motion.span
                  layoutId="activeCategoryBg"
                  className="absolute inset-0 bg-white rounded-full z-0"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group"
            >
              <Card className="h-full p-0 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] border-white/[0.05]" hoverEffect={true}>
                {/* Photo cover */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <span className="absolute top-4 left-4 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-primary/80 backdrop-blur-md text-white border border-white/10">
                    {project.category}
                  </span>
                </div>

                {/* Content Box */}
                <div className="p-6 flex flex-col justify-between h-[220px]">
                  <div>
                    <div className="text-[10px] text-white/40 uppercase font-semibold tracking-wider mb-2">
                      Client: {project.client}
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white group-hover:text-accent-cyan transition-colors line-clamp-2 leading-snug">
                      {project.title}
                    </h3>
                    <p className="text-white/50 text-xs mt-3 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags and Action */}
                  <div className="flex items-center justify-between mt-4 border-t border-white/5 pt-4">
                    <div className="flex gap-1.5 overflow-hidden max-w-[70%]">
                      {project.tags.slice(0, 2).map((tag, tIdx) => (
                        <span key={tIdx} className="text-[9px] text-white/40 border border-white/5 bg-white/[0.01] px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <Link
                      href={project.link}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white/80 group-hover:text-white transition-colors"
                    >
                      Case Study 
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20 text-white/40">
          No projects found in this category. Check back soon!
        </div>
      )}

    </div>
  );
}
