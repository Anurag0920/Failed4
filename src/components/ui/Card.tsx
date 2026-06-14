'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  className?: string;
  glowColor?: 'purple' | 'cyan' | 'indigo' | 'pink' | 'none';
  children: React.ReactNode;
}

export default function Card({
  hoverEffect = true,
  className = '',
  glowColor = 'none',
  children,
  ...props
}: CardProps) {
  const glowStyles = {
    purple: "hover:shadow-[0_10px_35px_-5px_rgba(132,204,22,0.15)] hover:border-accent-purple/40",
    indigo: "hover:shadow-[0_10px_35px_-5px_rgba(37,99,235,0.15)] hover:border-accent-indigo/40",
    cyan: "hover:shadow-[0_10px_35px_-5px_rgba(14,165,233,0.15)] hover:border-accent-cyan/40",
    pink: "hover:shadow-[0_10px_35px_-5px_rgba(100,116,139,0.15)] hover:border-accent-pink/40",
    none: ""
  };

  const baseClasses = `glass-card p-6 border border-slate-200/60 bg-white/70 backdrop-blur-md transition-all duration-300`;
  const hoverClasses = hoverEffect ? `glass-card-hover hover:-translate-y-1` : '';
  const chosenGlow = glowStyles[glowColor];

  return (
    <div
      className={`${baseClasses} ${hoverClasses} ${chosenGlow} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
