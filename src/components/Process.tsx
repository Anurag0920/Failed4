'use client';

import { motion } from 'framer-motion';
import { Search, PenTool, Terminal, Rocket } from 'lucide-react';
import Card from './ui/Card';

export default function Process() {
  const steps = [
    {
      num: "01",
      title: "Discover & Audit",
      description: "We map your user journeys, audit current conversion bottlenecks, and analyze your competition's flaws to find gaps in the market.",
      icon: Search,
      glow: "hover:border-accent-purple/30 shadow-[0_0_20px_rgba(139,92,246,0.02)]"
    },
    {
      num: "02",
      title: "High-Fi Prototype",
      description: "We wireframe and construct custom visual identities, Figma layout mockups, and responsive component design systems.",
      icon: PenTool,
      glow: "hover:border-accent-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.02)]"
    },
    {
      num: "03",
      title: "Performance Build",
      description: "We translate approved mockups into pixel-perfect code. Shipped on Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.",
      icon: Terminal,
      glow: "hover:border-accent-indigo/30 shadow-[0_0_20px_rgba(99,102,241,0.02)]"
    },
    {
      num: "04",
      title: "SEO & Scale",
      description: "We configure structured schema markup, optimize asset compression, build organic clusters, and coordinate digital marketing funnels.",
      icon: Rocket,
      glow: "hover:border-accent-pink/30 shadow-[0_0_20px_rgba(236,72,153,0.02)]"
    }
  ];

  return (
    <section className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-xl mb-16">
          <span className="text-xs uppercase font-bold text-accent-cyan tracking-wider">
            OUR DELIVERY WORKFLOW
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white leading-tight">
            How We Take Ideas To Market.
          </h2>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            A linear, metric-focused roadmap designed to keep communications clear and ship flawless software on time.
          </p>
        </div>

        {/* Process Stepper Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              <Card className={`h-full flex flex-col justify-between p-8 group relative ${step.glow}`}>
                {/* Visual Step Number */}
                <div className="absolute top-6 right-6 font-heading font-black text-5xl md:text-6xl text-white/[0.03] select-none group-hover:text-white/[0.05] transition-colors">
                  {step.num}
                </div>

                <div>
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-white/70 mb-8 group-hover:text-white transition-colors">
                    <step.icon className="w-5 h-5" />
                  </div>

                  <h3 className="font-heading font-bold text-xl text-white mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-white/50 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Decorative bottom bar indicator */}
                <div className="w-8 h-[2px] bg-white/10 group-hover:w-full transition-all duration-500 mt-8" />
              </Card>

              {/* Arrow Connector for large screens */}
              {index < 3 && (
                <div className="hidden lg:block absolute top-1/2 right-[-12px] -translate-y-1/2 w-6 h-[1px] bg-white/10 z-10 pointer-events-none" />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
