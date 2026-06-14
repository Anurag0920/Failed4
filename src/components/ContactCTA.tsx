'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import Button from './ui/Button';
import Card from './ui/Card';

export default function ContactCTA() {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Glow cards background */}
        <div className="absolute inset-0 bg-accent-purple/5 blur-[120px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Card 
            hoverEffect={false} 
            className="relative p-12 md:p-20 text-center border-white/10 bg-gradient-to-tr from-[#050510] via-white/[0.01] to-[#0c0a20] overflow-hidden"
          >
            {/* Design accents */}
            <div className="absolute top-0 right-0 w-[200px] h-[200px] rounded-full bg-accent-cyan/10 blur-[60px]" />
            <div className="absolute bottom-0 left-0 w-[200px] h-[200px] rounded-full bg-accent-purple/10 blur-[60px]" />

            <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-accent-cyan/30 bg-accent-cyan/10 text-[10px] text-accent-cyan font-semibold mb-6 uppercase tracking-widest">
                <Sparkles className="w-3 h-3 text-accent-cyan" /> Let's Build Something Great
              </div>

              {/* Title */}
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 mb-6 tracking-tight leading-tight">
                Ready to Demand <br />
                <span className="bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan bg-clip-text text-transparent text-glow">
                  Attention?
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
                Stop losing prospects to slow, generic storefronts. Contact our design and development experts today to map your growth pipeline.
              </p>

              {/* Action Button */}
              <Button href="/contact" variant="glow" className="group !px-8 !py-4 text-base">
                Let's Start Your Project 
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

          </Card>
        </motion.div>

      </div>
    </section>
  );
}
