'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote, Star } from 'lucide-react';
import Card from './ui/Card';

const reviews = [
  {
    quote: "Working with Failed4 on the development and design of Holly Flower School’s website was an excellent experience. Their team understood our vision perfectly and created a modern, user-friendly and visually engaging website that truly represents our institution. The attention to detail, smooth communication and creative approach throughout the project were highly impressive. We appreciate their professionalism, timely delivery and dedication towards quality work. We are extremely satisfied with the final result and would highly recommend them to anyone looking for modern digital solutions.",
    author: "Director",
    role: "Director",
    client: "Holly Flower School",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Failed4 designed a stunning personal portfolio website for me that perfectly matched my style and vision. The smooth 3D effects, modern UI and interactive experience made the website feel incredibly premium and unique. Their creativity, attention to detail and frontend execution were honestly impressive throughout the entire process. Communication was smooth, the work was delivered on time and the final result exceeded my expectations. I’d highly recommend Failed to anyone looking for modern and visually striking digital experiences.",
    author: "Zainab Khan",
    role: "Independent Creator",
    client: "Zainab Khan Portfolio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
  },
  {
    quote: "Failed4 delivered exceptional UI props and character designs for our projects including Defender Archery, Save Teacher and Word Chef under Zeta Galaxy. Their creativity, attention to detail and understanding of game aesthetics brought our ideas to life in a unique and engaging way. The designs felt polished, modern and perfectly matched the visual style we envisioned for each game. Communication throughout the process was smooth, professional and highly collaborative. We truly appreciate their dedication and would highly recommend them for creative design and game UI work.",
    author: "Prashant",
    role: "Game Developer",
    client: "Zeta Galaxy",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  }
];

export default function Testimonials() {
  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 overflow-hidden z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header Block */}
        <div className="max-w-xl mb-16">
          <span className="text-xs uppercase font-bold text-accent-cyan tracking-wider">
            CLIENT SATISFACTION
          </span>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl mt-3 text-white leading-tight">
            Loved By Modern Builders.
          </h2>
          <p className="text-white/60 text-sm mt-4 leading-relaxed">
            Read direct stories of how FAILED4 design and engineering pipelines changed acquisition for tech platforms.
          </p>
        </div>

        {/* Carousel Area */}
        <div className="relative max-w-4xl mx-auto">
          {/* Ambient Glows */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent-purple/5 blur-[80px] pointer-events-none" />

          {/* Testimonial Panel */}
          <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <Card className="p-8 md:p-12 border-white/10 bg-white/[0.02]" hoverEffect={false}>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote Icon */}
                  <Quote className="absolute top-8 right-8 w-12 h-12 text-white/[0.02] pointer-events-none" />

                  {/* Testimonial Quote */}
                  <p className="font-heading text-lg md:text-xl text-white/90 leading-relaxed italic mb-8">
                    "{reviews[activeIdx].quote}"
                  </p>

                  {/* User Profile */}
                  <div className="flex items-center justify-between flex-wrap gap-4 border-t border-white/5 pt-6">
                    <div className="flex items-center gap-4">
                      <img
                        src={reviews[activeIdx].avatar}
                        alt={reviews[activeIdx].author}
                        className="w-12 h-12 rounded-full object-cover border border-white/10"
                        loading="lazy"
                      />
                      <div>
                        <div className="font-heading font-bold text-white text-base">
                          {reviews[activeIdx].author}
                        </div>
                        <div className="text-xs text-white/45 font-medium">
                          {reviews[activeIdx].role} at <span className="text-white/60 font-semibold">{reviews[activeIdx].client}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls Bar */}
          <div className="flex items-center justify-between mt-8 px-4">
            {/* Index Tracker */}
            <div className="text-xs text-white/40 font-mono">
              0{activeIdx + 1} / 0{reviews.length}
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-3">
              <button
                onClick={handlePrev}
                className="w-11 h-11 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-11 h-11 rounded-full border border-white/5 bg-white/[0.02] hover:bg-white/10 hover:border-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
                aria-label="Next testimonial"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
