'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { teamMembers } from '@/data/team';
import Card from './ui/Card';

// Compiler-safe custom inline brand icons
const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

export default function TeamSection() {
  return (
    <section className="relative py-24 bg-[#050510]/30 border-y border-white/[0.03] z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-xl mb-16">
          <span className="text-xs uppercase font-bold text-accent-purple tracking-wider">
            AGENCY FOUNDERS & LEADERS
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white leading-tight">
            Meet the FAILED4 Minds.
          </h2>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Our team brings together veterans in interaction design, headless engineering, and technical keyword audits.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full p-0 overflow-hidden bg-white/[0.01] hover:bg-white/[0.02] border-white/[0.05]" hoverEffect={true}>
                {/* Photo with hover scale */}
                <div className="relative aspect-square w-full overflow-hidden border-b border-white/[0.05]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  {/* Subtle black gradient mask from bottom of photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60" />
                </div>

                {/* Info Content Box */}
                <div className="p-6">
                  <h3 className="font-heading font-bold text-lg text-white group-hover:text-accent-cyan transition-colors">
                    {member.name}
                  </h3>
                  <div className="text-xs text-accent-purple font-semibold uppercase tracking-wider mt-1 mb-3">
                    {member.role}
                  </div>
                  <p className="text-white/50 text-xs leading-relaxed line-clamp-3">
                    {member.bio}
                  </p>

                  {/* Social Handles */}
                  <div className="flex gap-3 mt-6 border-t border-white/5 pt-4">
                    {member.socials.twitter && (
                      <Link
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label={`${member.name} Twitter`}
                      >
                        <TwitterIcon className="w-4 h-4" />
                      </Link>
                    )}
                    {member.socials.linkedin && (
                      <Link
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label={`${member.name} LinkedIn`}
                      >
                        <LinkedinIcon className="w-4 h-4" />
                      </Link>
                    )}
                    {member.socials.github && (
                      <Link
                        href={member.socials.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label={`${member.name} GitHub`}
                      >
                        <GithubIcon className="w-4 h-4" />
                      </Link>
                    )}
                    {member.socials.email && (
                      <Link
                        href={`mailto:${member.socials.email}`}
                        className="text-white/40 hover:text-white transition-colors"
                        aria-label={`${member.name} Email`}
                      >
                        <MailIcon className="w-4 h-4" />
                      </Link>
                    )}
                  </div>

                </div>
              </Card>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
