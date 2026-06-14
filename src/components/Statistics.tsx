'use client';

import { motion } from 'framer-motion';

export default function Statistics() {
  const stats = [
    { value: "+148%", label: "Average ROI Increase", color: "from-violet-500 to-indigo-500" },
    { value: "85+", label: "Completed Digital Projects", color: "from-cyan-400 to-blue-500" },
    { value: "15M+", label: "Monthly Organic Impressions", color: "from-pink-500 to-purple-500" },
    { value: "99.4%", label: "Customer Satisfaction Rate", color: "from-amber-400 to-orange-500" }
  ];

  return (
    <section className="relative py-20 bg-[#050510]/50 border-y border-white/[0.04] backdrop-blur-sm z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              {/* Stat Value */}
              <div className="relative mb-2">
                <span className="font-heading font-black text-4xl sm:text-5xl md:text-6xl bg-gradient-to-r from-white to-white bg-clip-text text-transparent group-hover:from-accent-purple group-hover:to-accent-cyan transition-all duration-300">
                  {stat.value}
                </span>
                {/* Subtle underglow */}
                <div className="absolute inset-0 bg-accent-purple/10 blur-[15px] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
              
              {/* Label */}
              <span className="text-white/40 text-xs sm:text-sm font-medium uppercase tracking-wider mt-2 group-hover:text-white/60 transition-colors">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
