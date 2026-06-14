'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'glow';
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = 'primary',
  href,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 overflow-hidden text-sm px-6 py-3 tracking-wide cursor-pointer focus:outline-none select-none";
  
  const variants = {
    primary: "bg-slate-900 text-white hover:bg-slate-800 shadow-[0_4px_20px_rgba(15,23,42,0.15)]",
    secondary: "bg-slate-100 text-slate-900 border border-slate-200 hover:bg-slate-200 hover:border-slate-300 backdrop-blur-md",
    ghost: "bg-transparent text-slate-700 hover:text-slate-950 hover:bg-slate-100",
    glow: "bg-gradient-to-r from-accent-purple via-accent-indigo to-accent-cyan text-white shadow-[0_0_20px_rgba(132,204,22,0.25)] hover:shadow-[0_0_30px_rgba(132,204,22,0.45)] border border-slate-200/10"
  };

  const buttonContent = (
    <span className="relative z-10 flex items-center gap-2">
      {children}
    </span>
  );

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Link href={href} className={combinedClassName}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="inline-block"
    >
      <button
        className={combinedClassName}
        {...props}
      >
        {buttonContent}
      </button>
    </motion.div>
  );
}
