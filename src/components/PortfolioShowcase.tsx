'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolio';
import Card from './ui/Card';
import Button from './ui/Button';

export default function PortfolioShowcase() {
  // Take only featured projects for the home showcase
  const featuredProjects = portfolioProjects.filter(p => p.featured).slice(0, 3);

  return (
    <section className="relative py-24 bg-[#050510]/20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold text-accent-purple tracking-wider">
              PORTFOLIO SHOWCASE
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white leading-tight">
              Selected Digital Exploits.
            </h2>
          </div>
          <div className="mt-4 md:mt-0">
            <Button href="/portfolio" variant="secondary" className="group text-xs gap-1.5 !px-5 !py-2.5">
              Explore All Projects 
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full p-0 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] border-white/[0.05] hover:border-white/10" hoverEffect={true}>
                {/* Image Container with Hover Zoom */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Category Badge */}
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

                  {/* Tags & Action Link */}
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
        </div>

      </div>
    </section>
  );
}
