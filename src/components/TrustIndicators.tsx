'use client';

import { motion } from 'framer-motion';

export default function TrustIndicators() {
  const brands = [
    { name: "ZENITH CORP", class: "text-accent-purple" },
    { name: "APEX ECOM", class: "text-accent-cyan" },
    { name: "NOVASPHERE", class: "text-accent-indigo" },
    { name: "HELIOS ENERGY", class: "text-accent-pink" },
    { name: "VORTEX LTD", class: "text-white/60" },
    { name: "NEXUS LABS", class: "text-accent-cyan" },
    { name: "HYDRA SENSORS", class: "text-accent-purple" }
  ];

  // Duplicate the array to create seamless looping effect
  const marqueeBrands = [...brands, ...brands, ...brands];

  return (
    <section className="relative py-12 border-y border-white/[0.05] bg-[#050510]/50 backdrop-blur-sm overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6 mb-4 text-center">
        <span className="text-[10px] uppercase font-bold tracking-widest text-white/35">
          TRUSTED BY RAPIDLY SCALING COMPANIES
        </span>
      </div>

      {/* Endless Marquee wrapper */}
      <div className="relative flex w-full overflow-hidden mt-6">
        {/* Left and right fade gradient mask */}
        <div className="absolute left-0 top-0 bottom-0 w-[80px] md:w-[150px] bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-[80px] md:w-[150px] bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-16 md:gap-24 items-center whitespace-nowrap"
          animate={{
            x: ["0%", "-33.333%"]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {marqueeBrands.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 select-none"
            >
              {/* Simple geometric icon before text */}
              <div className="w-2.5 h-2.5 rounded bg-white/10 rotate-45 border border-white/20" />
              <span className={`font-heading font-extrabold text-lg md:text-xl tracking-widest ${brand.class} opacity-50 hover:opacity-100 transition-opacity duration-300`}>
                {brand.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
