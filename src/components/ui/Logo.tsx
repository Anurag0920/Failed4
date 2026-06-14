'use client';

import React from 'react';
import Image from 'next/image';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 120, height = 32 }: LogoProps) {
  return (
    <Image
      src="/logo.png"
      alt="FAILED4 Logo"
      width={width}
      height={height}
      className={`object-contain ${className}`}
      style={{ height: 'auto' }}
      priority
    />
  );
}
