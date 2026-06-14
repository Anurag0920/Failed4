import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import ServicesSection from "@/components/ServicesSection";
import WhyUs from "@/components/WhyUs";
import Process from "@/components/Process";
import PortfolioShowcase from "@/components/PortfolioShowcase";
import Statistics from "@/components/Statistics";
import Testimonials from "@/components/Testimonials";
import TeamSection from "@/components/TeamSection";
import BlogPreview from "@/components/BlogPreview";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="w-full relative overflow-hidden">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Trust Indicators */}
      <TrustIndicators />

      {/* 3. Services Section */}
      <ServicesSection />

      {/* 4. Why FAILED4 Section */}
      <WhyUs />

      {/* 5. Process Section */}
      <Process />

      {/* 6. Portfolio Showcase */}
      <PortfolioShowcase />

      {/* 7. Statistics Section */}
      <Statistics />

      {/* 8. Testimonials Section */}
      <Testimonials />

      {/* 9. Team Section */}
      <TeamSection />

      {/* 10. Blog Preview Section */}
      <BlogPreview />

      {/* 11. Contact CTA Section */}
      <ContactCTA />
    </div>
  );
}
