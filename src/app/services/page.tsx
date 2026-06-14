'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { services, getIconComponent } from '@/data/services';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function ServicesPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10">
      
      {/* Intro Header Section */}
      <div className="max-w-3xl mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-xs text-accent-purple font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" /> High-Performance Pipelines
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight leading-none">
          Our Digital Services.
        </h1>
        <p className="text-white/60 text-lg leading-relaxed">
          We combine data-driven conversion strategies with premium design standards and lightweight code architectures to build platforms that capture organic search traffic and convert it into clients.
        </p>
      </div>

      {/* Detailed Services Section */}
      <div className="flex flex-col gap-16 md:gap-24">
        {services.map((service, index) => {
          const Icon = getIconComponent(service.iconName);
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={service.id}
              id={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="scroll-mt-28"
            >
              <Card hoverEffect={false} className="p-8 md:p-12 border-white/10 bg-white/[0.01]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                  
                  {/* Left Column: Icon, title, description, and metric callout */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Service Icon Container */}
                      <motion.div 
                        className="w-14 h-14 rounded-2xl flex items-center justify-center border cursor-pointer mb-6"
                        style={{
                          backgroundColor: index % 4 === 0 ? 'rgba(132, 204, 22, 0.04)' :
                                           index % 4 === 1 ? 'rgba(14, 165, 233, 0.04)' :
                                           index % 4 === 2 ? 'rgba(37, 99, 235, 0.04)' :
                                           'rgba(100, 116, 139, 0.04)',
                          borderColor: index % 4 === 0 ? 'rgba(132, 204, 22, 0.12)' :
                                       index % 4 === 1 ? 'rgba(14, 165, 233, 0.12)' :
                                       index % 4 === 2 ? 'rgba(37, 99, 235, 0.12)' :
                                       'rgba(100, 116, 139, 0.12)',
                          color: index % 4 === 0 ? '#84cc16' :
                                 index % 4 === 1 ? '#0ea5e9' :
                                 index % 4 === 2 ? '#2563eb' :
                                 '#64748b'
                        }}
                        whileHover={{
                          scale: 1.18,
                          rotate: 15,
                          background: index % 4 === 0 ? 'linear-gradient(135deg, #84cc16 0%, #4d7c0f 100%)' :
                                      index % 4 === 1 ? 'linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)' :
                                      index % 4 === 2 ? 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)' :
                                      'linear-gradient(135deg, #64748b 0%, #334155 100%)',
                          borderColor: index % 4 === 0 ? '#84cc16' :
                                       index % 4 === 1 ? '#0ea5e9' :
                                       index % 4 === 2 ? '#2563eb' :
                                       '#64748b',
                          color: '#ffffff',
                          boxShadow: index % 4 === 0 ? '0 0 25px rgba(132, 204, 22, 0.4)' :
                                     index % 4 === 1 ? '0 0 25px rgba(14, 165, 233, 0.4)' :
                                     index % 4 === 2 ? '0 0 25px rgba(37, 99, 235, 0.4)' :
                                     '0 0 25px rgba(100, 116, 139, 0.4)'
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <Icon className="w-7 h-7 text-current" />
                      </motion.div>

                      <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mb-4">
                        {service.title}
                      </h2>
                      
                      <p className="text-white/60 text-sm leading-relaxed mb-6">
                        {service.fullDescription}
                      </p>
                    </div>

                    {/* Stat Callout box */}
                    <div className="glass-card p-6 border-white/5 bg-white/[0.01] inline-flex flex-col items-start max-w-sm mt-4">
                      <span className="text-[10px] text-white/40 uppercase font-semibold tracking-wider">
                        {service.stats.label}
                      </span>
                      <span className="text-3xl font-black font-heading text-white mt-1 text-glow bg-gradient-to-r from-accent-purple to-accent-cyan bg-clip-text text-transparent">
                        {service.stats.value}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Features and benefits */}
                  <div className="lg:col-span-6 flex flex-col justify-between gap-8 h-full">
                    {/* Features List */}
                    <div>
                      <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
                        Core Capabilities
                      </h3>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-800">
                            <span className="w-4 h-4 rounded-full bg-accent-cyan/15 flex items-center justify-center text-accent-cyan mt-0.5 shrink-0">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits/Outcomes List */}
                    <div className="border-t border-white/5 pt-6">
                      <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-white/40 mb-4">
                        Expected Outcomes
                      </h3>
                      <ul className="flex flex-col gap-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5 text-xs text-white/60">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent-purple mt-2 shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Direct Call to Action */}
                    <div className="pt-6 border-t border-white/5 flex justify-start">
                      <Button 
                        href={`/contact?service=${service.id}`} 
                        variant="secondary" 
                        className="group text-xs !px-5 !py-2.5 gap-2"
                      >
                        Inquire About {service.title} 
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </Button>
                    </div>

                  </div>

                </div>
              </Card>
            </motion.div>
          );
        })}
      </div>

    </div>
  );
}
