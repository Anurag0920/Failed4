'use client';

import { motion, Variants } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { services, getIconComponent } from '@/data/services';
import Card from './ui/Card';

export default function ServicesSection() {
  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  // Only show the first 6 on the homepage to keep the grid balanced (3 columns on desktop, 2 on tablet)
  const homeServices = services.slice(0, 6);

  return (
    <section className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-xl">
            <span className="text-xs uppercase font-bold text-accent-cyan tracking-wider">
              OUR SERVICE CAPABILITIES
            </span>
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white leading-tight">
              We Solve Problems Through Design & Code.
            </h2>
          </div>
          <p className="text-white/50 text-sm max-w-sm mt-4 md:mt-0 leading-relaxed">
            From crafting high-fidelity design prototypes to ranking first on Google keywords, our interdisciplinary team has you covered.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {homeServices.map((service, index) => {
            const Icon = getIconComponent(service.iconName);
            const glows: ('purple' | 'cyan' | 'indigo' | 'pink')[] = ['purple', 'cyan', 'indigo', 'pink'];
            const chosenGlow = glows[index % glows.length];

            return (
              <motion.div key={service.id} variants={cardVariants}>
                <Card 
                  glowColor={chosenGlow}
                  className="h-full flex flex-col justify-between p-8"
                >
                  <div>
                    {/* Icon Container */}
                    <motion.div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center border cursor-pointer mb-6"
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
                      <Icon className="w-5.5 h-5.5 text-current" />
                    </motion.div>

                    <h3 className="font-heading font-bold text-xl text-white mb-3">
                      {service.title}
                    </h3>
                    
                    <p className="text-white/60 text-sm leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Footer Link */}
                  <Link
                    href={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white group/link"
                  >
                    Explore Service Details 
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </Link>

                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View All CTA */}
        <div className="mt-16 text-center">
          <Link 
            href="/services" 
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/60 hover:text-white transition-colors group"
          >
            Check All 7 Digital Services
            <span className="w-6 h-[1px] bg-white/20 group-hover:w-10 transition-all duration-300" />
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
