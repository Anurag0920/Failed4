'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Check, ArrowRight, Calendar, AlertCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

// Split the contact form into a separate client child component to wrap inside Suspense
function ContactFormContent() {
  const searchParams = useSearchParams();
  const preSelectedService = searchParams.get('service') || '';

  const inquiryCategories = [
    { id: "ui-ux-design", label: "UI/UX Design" },
    { id: "web-design", label: "Web Design" },
    { id: "frontend-development", label: "Frontend Development" },
    { id: "content-writing", label: "Content Writing" },
    { id: "seo", label: "SEO & Growth" },
    { id: "digital-marketing", label: "Digital Marketing" },
    { id: "brand-identity-design", label: "Brand Identity" }
  ];

  // Form states
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    budget: '$10k - $25k',
    message: ''
  });
  
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  // Pre-fill categories from query parameter
  useEffect(() => {
    if (preSelectedService) {
      setSelectedServices([preSelectedService]);
    }
  }, [preSelectedService]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleService = (id: string) => {
    setSelectedServices(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) 
        : [...prev, id]
    );
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a short description of your project';
    }
    if (selectedServices.length === 0) {
      newErrors.services = 'Please select at least one service category';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form 
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex flex-col gap-6"
        >
          {/* Service categories checkboxes */}
          <div>
            <label className="block text-xs uppercase font-bold tracking-widest text-white/40 mb-3">
              What do you need help with?
            </label>
            <div className="flex flex-wrap gap-2.5">
              {inquiryCategories.map((cat) => {
                const isChecked = selectedServices.includes(cat.id);
                return (
                  <button
                    type="button"
                    key={cat.id}
                    onClick={() => toggleService(cat.id)}
                    className={`px-4 py-2.5 rounded-full text-xs font-semibold border tracking-wide transition-all cursor-pointer ${
                      isChecked 
                        ? 'bg-white text-primary border-white' 
                        : 'bg-white/[0.01] text-white/70 border-white/5 hover:border-white/10 hover:bg-white/[0.03]'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
            {errors.services && (
              <p className="text-xs text-rose-400 mt-2 flex items-center gap-1.5"><AlertCircle className="w-3.5 h-3.5" /> {errors.services}</p>
            )}
          </div>

          {/* Name & Email inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-xs uppercase font-bold tracking-widest text-white/40 mb-2">
                Your name *
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/5 rounded-full py-3 px-5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all"
                placeholder="e.g. John Doe"
              />
              {errors.name && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-xs uppercase font-bold tracking-widest text-white/40 mb-2">
                Your email *
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/5 rounded-full py-3 px-5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all"
                placeholder="e.g. john@domain.com"
              />
              {errors.email && (
                <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.email}</p>
              )}
            </div>
          </div>

          {/* Website (optional) & Budget inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="website" className="block text-xs uppercase font-bold tracking-widest text-white/40 mb-2">
                Current Website (optional)
              </label>
              <input
                type="text"
                id="website"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                className="w-full bg-white/[0.02] border border-white/5 rounded-full py-3 px-5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all"
                placeholder="e.g. domain.com"
              />
            </div>

            <div>
              <label htmlFor="budget" className="block text-xs uppercase font-bold tracking-widest text-white/40 mb-2">
                Project Budget
              </label>
              <select
                id="budget"
                value={formData.budget}
                onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                className="w-full bg-[#050510] border border-white/5 rounded-full py-3 px-5 text-sm text-white focus:outline-none focus:border-accent-purple/50 transition-all appearance-none cursor-pointer"
              >
                <option value="Under $10k">Under $10k</option>
                <option value="$10k - $25k">$10k - $25k</option>
                <option value="$25k - $50k">$25k - $50k</option>
                <option value="Over $50k">Over $50k</option>
              </select>
            </div>
          </div>

          {/* Project Details message */}
          <div>
            <label htmlFor="message" className="block text-xs uppercase font-bold tracking-widest text-white/40 mb-2">
              Tell us about your project *
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full bg-white/[0.02] border border-white/5 rounded-2xl py-4 px-5 text-sm text-white placeholder-white/30 focus:outline-none focus:border-accent-purple/50 focus:ring-1 focus:ring-accent-purple/20 transition-all resize-none"
              placeholder="Provide a brief overview of your business goals, target timelines, and product voids..."
            />
            {errors.message && (
              <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3.5 h-3.5" /> {errors.message}</p>
            )}
          </div>

          {/* Submit button */}
          <div className="mt-4">
            <Button 
              variant="glow" 
              type="submit" 
              className="w-full gap-2 !py-4"
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                  Aligning details...
                </>
              ) : (
                <>
                  Send Project Inquiry <ArrowRight className="w-4 h-4" />
                </>
              )}
            </Button>
          </div>

        </motion.form>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-12 flex flex-col items-center"
        >
          {/* Animated Success Icon */}
          <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6">
            <Check className="w-8 h-8" />
          </div>

          <h3 className="font-heading font-extrabold text-2xl text-white mb-3">
            Inquiry Shipped Successfully!
          </h3>
          
          <p className="text-white/60 text-sm max-w-sm mb-8 leading-relaxed">
            Thank you! Our design director will review your details and get in touch via email within 24 hours to schedule a deep-dive alignment call.
          </p>

          <Button 
            onClick={() => setSubmitted(false)} 
            variant="secondary"
            className="text-xs"
          >
            Send another inquiry
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function ContactPage() {
  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-6 relative z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Heading and Coordinates */}
        <div className="lg:col-span-5 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase font-bold text-accent-cyan tracking-wider">
              GET IN TOUCH
            </span>
            <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-white mt-3 mb-6 tracking-tight leading-none">
              Contact Us...
            </h1>
            <p className="text-white/60 text-sm leading-relaxed mb-10">
              Have a project, idea or brand ready to grow? Let’s create something modern, bold and impossible to ignore.
            </p>

            {/* Coordinates list */}
            <div className="flex flex-col gap-6">
              
              {/* Mail */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent-purple shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-semibold">We’d love to hear from you.</div>
                  <a href="mailto:failed4official@gmail.com" className="text-sm font-bold text-white hover:text-accent-cyan transition-colors mt-0.5 block">
                    failed4official@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent-cyan shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-semibold">Call Us</div>
                  <a href="tel:+1800FAILED4" className="text-sm font-bold text-white hover:text-accent-cyan transition-colors mt-0.5 block">
                    +1 (800) FAILED4
                  </a>
                </div>
              </div>

              {/* Office Location */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-accent-indigo shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-white/40 uppercase font-semibold">Headquarters</div>
                  <span className="text-sm font-bold text-white mt-0.5 block">
                    100 Innovation Way, Suite 404, San Francisco, CA
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Public Booking Section */}
          <div className="mt-12 pt-8 border-t border-white/5">
            <h4 className="font-heading font-bold text-sm text-white mb-3">
              Prefer a direct meeting?
            </h4>
            <p className="text-xs text-white/50 mb-5 leading-relaxed">
              Skip the intake forms and book a 15-minute scoping call directly on our calendar.
            </p>
            <Button variant="secondary" className="gap-2 text-xs !px-5 !py-2.5">
              <Calendar className="w-4 h-4 text-accent-cyan" /> Book Call on Calendly
            </Button>
          </div>

        </div>

        {/* Right Column: Interactive Form Wrap inside Card */}
        <div className="lg:col-span-7">
          <Card hoverEffect={false} className="p-8 md:p-10 border-white/10 bg-white/[0.01]">
            <Suspense fallback={<div className="py-20 text-center text-white/40 text-xs">Loading inquiry forms...</div>}>
              <ContactFormContent />
            </Suspense>
          </Card>
        </div>

      </div>
    </div>
  );
}
