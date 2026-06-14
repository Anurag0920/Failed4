'use client';

import { motion } from 'framer-motion';
import { Zap, Target, Lock, RefreshCw } from 'lucide-react';
import Card from './ui/Card';

export default function WhyUs() {
  const points = [
    {
      icon: RefreshCw,
      title: "Failure-Proven Method",
      description: "Our name stands for iteration. We dissect digital bottlenecks and failures to engineer flawless, resilient user flows.",
      color: "text-accent-purple"
    },
    {
      icon: Zap,
      title: "Sub-Second Performance",
      description: "Every page is hand-crafted using Next.js Server Components. We load assets in under 1 second, boosting SEO rankings.",
      color: "text-accent-cyan"
    },
    {
      icon: Target,
      title: "Conversion-Focused UX",
      description: "We don't build generic brochure sites. We analyze user intent, run wireframes, and design components built to sell.",
      color: "text-accent-pink"
    },
    {
      icon: Lock,
      title: "Transparent Handoff",
      description: "You own every line of code, Figma layer, and SEO audit from day one. No vendor lock-in, no hidden code bases.",
      color: "text-accent-indigo"
    }
  ];

  return (
    <section className="relative py-24 bg-[#050510]/30 border-y border-white/[0.03] overflow-hidden z-10">
      {/* Absolute ambient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent-indigo/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div className="lg:col-span-5 max-w-lg">
            <span className="text-xs uppercase font-bold text-accent-purple tracking-wider">
              WHY COLLABORATE WITH US
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white leading-tight">
              We Demand Attention & Convert Results.
            </h2>
            <p className="text-white/60 text-sm mt-6 leading-relaxed">
              Modern users have a 3-second attention span. If your website is slow, confusing, or looks generic, you lose prospects. FAILED4 combines premium visual aesthetics with lightning-fast code to keep users hooked.
            </p>

            {/* Quick Stats callout */}
            <div className="mt-8 pt-8 border-t border-white/5 grid grid-cols-2 gap-4">
              <div>
                <div className="text-2xl font-extrabold font-heading text-white">4.8x</div>
                <div className="text-[11px] text-white/40 uppercase font-semibold">Average ROI Increase</div>
              </div>
              <div>
                <div className="text-2xl font-extrabold font-heading text-white">99%</div>
                <div className="text-[11px] text-white/40 uppercase font-semibold">Performance Score</div>
              </div>
            </div>
          </div>

          {/* Right Card Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {points.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full p-6 hover:border-white/10" hoverEffect={true}>
                  <div className={`w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center ${point.color} mb-4`}>
                    <point.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-2">
                    {point.title}
                  </h3>
                  <p className="text-white/50 text-xs leading-relaxed">
                    {point.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
