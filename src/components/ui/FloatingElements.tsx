'use client';

import { motion } from 'framer-motion';

export default function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Core grid lines overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.25]" />
      
      {/* Dot matrix pattern overlay */}
      <div className="absolute inset-0 bg-dot-pattern opacity-[0.4]" />

      {/* Radial Gradient overlay to fade edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-transparent via-primary/50 to-primary" />

      {/* Dynamic glowing mesh blobs */}
      <motion.div
        className="absolute top-[5%] left-[-15%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] rounded-full bg-accent-purple/20 blur-[80px] md:blur-[130px]"
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -70, 40, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[35%] right-[-15%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-accent-indigo/15 blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, -60, 40, 0],
          y: [0, 50, -60, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-[15%] left-[10%] w-[350px] md:w-[700px] h-[350px] md:h-[700px] rounded-full bg-accent-cyan/10 blur-[90px] md:blur-[140px]"
        animate={{
          x: [0, 40, -50, 0],
          y: [0, 80, -40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-[75%] right-[20%] w-[200px] md:w-[450px] h-[200px] md:h-[450px] rounded-full bg-accent-pink/10 blur-[80px] md:blur-[120px]"
        animate={{
          x: [0, -30, 30, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}
