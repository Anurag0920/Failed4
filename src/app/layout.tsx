import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingElements from "@/components/ui/FloatingElements";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "FAILED4 | Premium Digital Design & Frontend Development Agency",
  description: "Designing digital experiences that demand attention. FAILED4 specializes in premium UI/UX design, high-performance Next.js frontend development, content copywriting, and organic SEO strategies built to scale.",
  keywords: ["digital agency", "UI/UX design", "web design", "frontend development", "SEO", "digital marketing", "brand identity", "Next.js development", "FAILED4"],
  authors: [{ name: "FAILED4 Agency" }],
  creator: "FAILED4 Team",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://failed4.agency",
    title: "FAILED4 | Premium Digital Design & Frontend Development Agency",
    description: "Designing digital experiences that demand attention. High-performance design, dev, and SEO growth for modern brands.",
    siteName: "FAILED4 Digital Agency",
    images: [
      {
        url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "FAILED4 Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FAILED4 | Premium Digital Design & Frontend Development Agency",
    description: "Designing digital experiences that demand attention. Next.js, UI/UX, and growth marketing.",
    images: ["https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80"],
  },
  alternates: {
    canonical: "https://failed4.agency",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Rich organization structured data for schema optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "FAILED4 Digital Agency",
    "image": "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    "@id": "https://failed4.agency/#organization",
    "url": "https://failed4.agency",
    "telephone": "+1-800-FAILED4",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "100 Innovation Way, Suite 404",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "postalCode": "94107",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 37.7749,
      "longitude": -122.4194
    },
    "sameAs": [
      "https://x.com/failed4official",
      "https://www.linkedin.com/in/failed4",
      "https://www.instagram.com/failed4official/"
    ],
    "priceRange": "$$$$"
  };

  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable} h-full scroll-smooth`} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full bg-primary text-white flex flex-col antialiased relative">
        <CustomCursor />
        
        {/* Background Grids & Blobs */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <FloatingElements />
        </div>

        {/* Global sticky header */}
        <Navbar />

        {/* Dynamic page children rendering relative to layout */}
        <main className="flex-grow z-10 relative mt-[80px]">
          {children}
        </main>

        {/* Global Footer */}
        <Footer />
      </body>
    </html>
  );
}
