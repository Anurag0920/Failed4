'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowRight, Play, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 20,
      },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Info Column */}
        <motion.div
          className="lg:col-span-7 flex flex-col items-start text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-xs text-accent-purple font-semibold mb-6 uppercase tracking-wider"
          >
            <Sparkles className="w-3.5 h-3.5" /> Demand Attention
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="font-heading font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 tracking-tighter"
          >
            Designing Digital <br />
            <span className="bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan bg-clip-text text-transparent text-glow">
              Experiences
            </span> That <br />
            Demand Attention.
          </motion.h1>

          {/* Subheadline */}
          <motion.p 
            variants={itemVariants}
            className="text-white/60 text-lg md:text-xl leading-relaxed max-w-xl mb-10"
          >
            We help startups and modern brands grow through UI/UX design, frontend development, content strategy, SEO, and digital marketing built to convert attention into results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto"
          >
            <Button href="/contact" variant="glow" className="group">
              Start Your Project 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button href="/portfolio" variant="secondary" className="gap-2">
              <Play className="w-4 h-4 fill-white/10" /> View Showreel
            </Button>
          </motion.div>

          {/* Core Trust Checklist */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap items-center gap-8 mt-16 text-white/50 text-xs font-medium border-t border-white/5 pt-10 w-full"
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-cyan" />
              Lighthouse score {'>'} 95
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-accent-purple" />
              Conversion-focused designs
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-accent-pink" />
              100% money-back guarantee
            </div>
          </motion.div>
        </motion.div>

        {/* Right Interactive Mockup Column */}
        <motion.div
          className="lg:col-span-5 relative flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ 
            opacity: 1, 
            y: [0, -12, 0]
          }}
          transition={{ 
            opacity: { duration: 0.8, delay: 0.4 },
            y: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Main Visual Board */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] glass-card p-6 border border-white/[0.08] shadow-[0_30px_60px_rgba(0,0,0,0.8)] flex flex-col justify-between overflow-hidden">
            
            {/* Ambient glows inside mock card */}
            <div className="absolute top-0 right-0 w-[150px] h-[150px] rounded-full bg-accent-cyan/10 blur-[40px]" />
            <div className="absolute bottom-0 left-0 w-[150px] h-[150px] rounded-full bg-accent-purple/10 blur-[40px]" />

            {/* Header bar of mockup */}
            <div className="flex justify-between items-center pb-4 border-b border-white/5 relative z-10">
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
              </div>
              <span className="text-[10px] text-white/40 tracking-widest font-mono">FAILED4_CORE_SYSTEM</span>
            </div>

            {/* Middle preview panel */}
            <div className="my-auto py-6 flex flex-col gap-4 relative z-10">
              <div className="text-xs text-white/50">CONVERSION METRIC</div>
              <div className="font-heading font-extrabold text-5xl text-white tracking-tight leading-none">
                +148%
              </div>
              
              <div className="h-[2px] w-full bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan" />
              
              <p className="text-[11px] text-white/60 leading-relaxed">
                Analyzing user journeys, optimizing Core Web Vitals, and rendering design patterns designed to command clicks.
              </p>

              {/* Mini mock stats */}
              <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="glass-card p-3 border-white/5 bg-white/[0.02]">
                  <div className="text-[10px] text-white/40 uppercase">Load Speed</div>
                  <div className="text-sm font-bold text-accent-cyan font-heading">0.8s</div>
                </div>
                <div className="glass-card p-3 border-white/5 bg-white/[0.02]">
                  <div className="text-[10px] text-white/40 uppercase">LCP Score</div>
                  <div className="text-sm font-bold text-accent-purple font-heading">99%</div>
                </div>
              </div>
            </div>

            {/* Bottom details */}
            <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-accent-purple to-accent-cyan flex items-center justify-center text-[9px] font-bold">F4</div>
                <span className="text-[11px] text-white/80 font-medium">Design Pipeline Live</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

          </div>

          {/* Floating UI Mini Card 1 */}
          <motion.div
            className="absolute top-10 left-[-40px] glass-card p-3 border-white/10 bg-white/[0.04] backdrop-blur-md shadow-2xl flex items-center gap-3"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent-purple/20 flex items-center justify-center text-accent-purple">
              ⚡
            </div>
            <div>
              <div className="text-[9px] text-white/40 uppercase font-semibold">Performance</div>
              <div className="text-xs font-bold font-heading text-white">Next.js 15</div>
            </div>
          </motion.div>

          {/* Floating UI Mini Card 2 */}
          <motion.div
            className="absolute bottom-12 right-[-30px] glass-card p-3 border-white/10 bg-white/[0.04] backdrop-blur-md shadow-2xl flex items-center gap-3"
            animate={{
              y: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <div className="w-8 h-8 rounded-lg bg-accent-cyan/20 flex items-center justify-center text-accent-cyan">
              ✦
            </div>
            <div>
              <div className="text-[9px] text-white/40 uppercase font-semibold">User Experience</div>
              <div className="text-xs font-bold font-heading text-white">Interactive UX</div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
