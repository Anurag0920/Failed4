'use client';

import { motion } from 'framer-motion';
import { Award, Compass, Heart, Sparkles, Star, Users } from 'lucide-react';
import { teamMembers } from '@/data/team';
import Card from '@/components/ui/Card';

export default function AboutPage() {
  const values = [
    { icon: Compass, title: "Obsessive Iteration", desc: "We don't settle for first-draft designs. We test, break, and refine layouts until conversion metrics are bulletproof." },
    { icon: Award, title: "Extreme Craftsmanship", desc: "No templates, no lazy drag-and-drop builder pages. We write custom Next.js configurations optimized for speed." },
    { icon: Users, title: "Hyper-Transparency", desc: "We operate in public. You have direct access to your developer slack threads, Figma design files, and weekly SEO audits." }
  ];

  const milestones = [
    { year: "2023", title: "The Inception", desc: "FAILED4 was founded in San Francisco by developers and designers tired of slow, over-promised agency handoffs." },
    { year: "2024", title: "Scaling Up", desc: "Shipped 40+ digital products for early-stage SaaS teams. Standardized the 'Orbit' Figma design token ecosystem." },
    { year: "2025", title: "Authority Growth", desc: "Uncapped organic traffic engines. Reached a collective 15M organic impressions for SEO partners." },
    { year: "2026", title: "Enterprise Integrations", desc: "Shipped custom dashboards and headless commerce instances for multinational brands." }
  ];

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10">
      
      {/* Page Header */}
      <div className="max-w-3xl mb-20">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent-purple/30 bg-accent-purple/10 text-xs text-accent-purple font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" /> Built for Modern Brands
        </div>
        <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mb-6 tracking-tight leading-none">
          Our Story.
        </h1>
        <p className="text-white/60 text-lg leading-relaxed">
          Failed4 was never meant to be a perfect success story.
        </p>
      </div>

      {/* Narrative grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
        <div className="lg:col-span-6 flex flex-col gap-5">
          <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white">
            But failure has a strange power.
          </h2>
          <p className="text-white/60 text-sm leading-relaxed">
            It began with four creators who never truly fit into the definition of “successful” that society had written for them. In a world obsessed with marks, placements, approval, and validation, they were often underestimated, overlooked, or considered failures for choosing creativity over conformity.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            What started as conversations between four individuals slowly became something bigger — a creative identity built on rebellion, originality, and fearless expression. Failed4 was born not from perfection, but from persistence. Not from fitting in, but from standing apart.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            We believe creativity does not come from people who always followed the rules. It comes from the dreamers, the outsiders, the people willing to take risks and build something the world has never seen before.
          </p>
          <p className="text-white/60 text-sm leading-relaxed">
            Failed4 represents every person who was told they were not enough. Every creator who chose passion over predictability. Every visionary who refused to let society define their worth.
          </p>
          <p className="text-white/70 text-sm leading-relaxed font-medium text-accent-cyan border-l-2 border-accent-cyan pl-4">
            We create futuristic visuals, bold identities, immersive UI/UX experiences, and digital art that challenge the ordinary. Our work is driven by emotion, storytelling, and innovation — because we know what it feels like to fight for your place in the world.
          </p>
        </div>
        
        {/* Abstract design element */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="w-[300px] h-[300px] rounded-full border border-white/5 relative flex items-center justify-center bg-white/[0.01]">
            <div className="w-[200px] h-[200px] rounded-full border border-white/10 relative flex items-center justify-center bg-white/[0.01]">
              <div className="w-[100px] h-[100px] rounded-full border border-white/20 relative bg-gradient-to-tr from-accent-purple via-accent-indigo to-accent-cyan flex items-center justify-center font-heading font-black text-lg shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                F4
              </div>
            </div>
            {/* Orbiting particles */}
            <motion.div
              className="absolute w-4 h-4 rounded-full bg-accent-cyan border border-white/10"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ originX: "150px", originY: "150px", left: "calc(50% - 150px)", top: "calc(50% - 150px)" }}
            />
          </div>
        </div>
      </div>

      {/* Core Values grid */}
      <div className="mb-24 border-t border-white/5 pt-16">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => (
            <Card key={idx} className="p-8 border-white/10 bg-white/[0.01]">
              <div className="w-10 h-10 rounded-xl bg-accent-purple/10 border border-accent-purple/20 flex items-center justify-center text-accent-purple mb-6">
                <val.icon className="w-5 h-5" />
              </div>
              <h3 className="font-heading font-bold text-lg text-white mb-3">{val.title}</h3>
              <p className="text-white/50 text-xs leading-relaxed">{val.desc}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Milestones stepper */}
      <div className="mb-24 border-t border-white/5 pt-16">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white text-center mb-12">
          Our Milestone Journey
        </h2>
        <div className="relative max-w-3xl mx-auto pl-8 border-l border-white/5 flex flex-col gap-12">
          {milestones.map((m, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Stepper Bullet */}
              <div className="absolute left-[-38px] top-1.5 w-4.5 h-4.5 rounded-full bg-[#050510] border-2 border-accent-cyan flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
              </div>
              
              <div>
                <span className="font-heading font-black text-lg text-accent-cyan">{m.year}</span>
                <h3 className="font-heading font-bold text-lg text-white mt-1 mb-2">{m.title}</h3>
                <p className="text-white/60 text-xs leading-relaxed max-w-xl">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team grid */}
      <div className="border-t border-white/5 pt-16">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-white text-center mb-12">
          The Minds Driving Results
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className="h-full p-0 overflow-hidden bg-white/[0.01] border-white/[0.05]" hoverEffect={true}>
              <div className="relative aspect-square w-full overflow-hidden border-b border-white/[0.05]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-bold text-base text-white">{member.name}</h3>
                <div className="text-xs text-accent-purple font-semibold uppercase tracking-wider mt-1 mb-3">{member.role}</div>
                <p className="text-white/50 text-xs leading-relaxed line-clamp-3">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

    </div>
  );
}
