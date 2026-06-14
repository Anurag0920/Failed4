'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from './ui/Logo';
import { ArrowRight, Check, ArrowUp, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Compiler-safe custom inline brand icons
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.49-11.05 1-11.6 8.56" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setError('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please provide a valid email');
      return;
    }

    // Success response simulation
    setSubmitted(true);
    setError('');
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const servicesLinks = [
    { name: "UI/UX Design", href: "/services#ui-ux-design" },
    { name: "Web Design", href: "/services#web-design" },
    { name: "Frontend Development", href: "/services#frontend-development" },
    { name: "Content Writing", href: "/services#content-writing" },
    { name: "SEO & Growth", href: "/services#seo" },
    { name: "Digital Marketing", href: "/services#digital-marketing" },
    { name: "Brand Identity", href: "/services#brand-identity-design" }
  ];

  const agencyLinks = [
    { name: "Home", href: "/" },
    { name: "Portfolio Showcase", href: "/portfolio" },
    { name: "About Story", href: "/about" },
    { name: "Articles / Blog", href: "/blog" },
    { name: "Get in Touch", href: "/contact" }
  ];

  const socials = [
    { 
      icon: TwitterIcon, 
      href: "https://x.com/failed4official", 
      label: "Twitter",
      hoverBg: "#0f172a",
      hoverBorder: "#0f172a"
    },
    { 
      icon: LinkedinIcon, 
      href: "https://www.linkedin.com/in/failed4", 
      label: "LinkedIn",
      hoverBg: "#0a66c2",
      hoverBorder: "#0a66c2"
    },
    { 
      icon: InstagramIcon, 
      href: "https://www.instagram.com/failed4official/", 
      label: "Instagram",
      hoverBg: "#e1306c",
      hoverBorder: "#e1306c"
    },
    { 
      icon: GithubIcon, 
      href: "https://github.com", 
      label: "GitHub",
      hoverBg: "#24292e",
      hoverBorder: "#24292e"
    }
  ];


  return (
    <footer className="relative bg-[#050510] border-t border-white/[0.05] pt-20 pb-10 overflow-hidden z-10">
      {/* Background visual blob */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          {/* Logo & Tagline Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center mb-4 group">
              <Logo width={120} height={32} />
            </Link>
            <p className="text-white/60 text-sm max-w-sm mb-6 leading-relaxed">
              Designing Digital Experiences That Demand Attention. We engineer premium websites, user interfaces, and search campaigns that grow startups into industry leaders.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              {socials.map((social, idx) => (
                <motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border cursor-pointer"
                  style={{
                    backgroundColor: 'rgba(15, 23, 42, 0.02)',
                    borderColor: 'rgba(15, 23, 42, 0.06)',
                    color: 'rgba(15, 23, 42, 0.7)'
                  }}
                  animate={{
                    backgroundColor: hoveredIndex === idx ? social.hoverBg : 'rgba(15, 23, 42, 0.02)',
                    borderColor: hoveredIndex === idx ? social.hoverBorder : 'rgba(15, 23, 42, 0.06)',
                    color: hoveredIndex === idx ? '#ffffff' : 'rgba(15, 23, 42, 0.7)',
                    y: hoveredIndex === idx ? -4 : 0,
                    scale: hoveredIndex === idx ? 1.15 : 1
                  }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  transition={{ type: "spring", stiffness: 350, damping: 18 }}
                >
                  <motion.div
                    animate={{ rotate: hoveredIndex === idx ? 12 : 0 }}
                    transition={{ type: "spring", stiffness: 450, damping: 12 }}
                  >
                    <social.icon className="w-4 h-4 text-current" />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Services
            </h4>
            <ul className="flex flex-col gap-3">
              {servicesLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agency Column */}
          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Agency
            </h4>
            <ul className="flex flex-col gap-3">
              {agencyLinks.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="text-sm text-white/50 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="md:col-span-2 lg:col-span-1">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Get Notified
            </h4>
            <p className="text-sm text-white/50 mb-4 leading-relaxed">
              Subscribe to get our weekly insights on SEO, conversion design, and tech trends.
            </p>

            <form onSubmit={handleSubscribe} className="relative mb-2">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError('');
                }}
                className="w-full bg-white/[0.02] border border-white/5 rounded-full py-3 px-5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all pr-12"
              />
              <motion.button
                type="submit"
                className="absolute right-1.5 top-1.5 w-9 h-9 rounded-full text-white-forced flex items-center justify-center shadow-lg cursor-pointer group focus:outline-none overflow-hidden"
                aria-label="Subscribe"
                style={{ 
                  background: 'linear-gradient(135deg, var(--color-accent-purple, #84cc16) 0%, var(--color-accent-cyan, #0ea5e9) 100%)'
                }}
                variants={{
                  initial: { 
                    scale: 1, 
                    boxShadow: '0 4px 14px rgba(132, 204, 22, 0.3)' 
                  },
                  hover: { 
                    scale: 1.1, 
                    boxShadow: '0 6px 20px rgba(14, 165, 233, 0.4)' 
                  }
                }}
                initial="initial"
                whileHover="hover"
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  variants={{
                    initial: { x: 0, y: 0, opacity: 1 },
                    hover: {
                      x: [0, 12, -12, 0],
                      y: [0, -12, 12, 0],
                      opacity: [1, 0, 0, 1],
                      transition: {
                        duration: 0.5,
                        times: [0, 0.4, 0.41, 0.8],
                        ease: "easeInOut"
                      }
                    }
                  }}
                >
                  <Send className="w-3.5 h-3.5 text-white-forced" />
                </motion.div>
              </motion.button>
            </form>

            <AnimatePresence mode="wait">
              {submitted && (
                <motion.p
                  className="text-xs text-emerald-400 flex items-center gap-1 mt-2"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  <Check className="w-3.5 h-3.5" /> Subscribed successfully!
                </motion.p>
              )}
              {error && (
                <motion.p
                  className="text-xs text-rose-400 mt-2"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-white/5 text-xs text-white/40">
          <p>© {new Date().getFullYear()} FAILED4 Digital Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 sm:mt-0">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group"
            >
              Back to top 
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
