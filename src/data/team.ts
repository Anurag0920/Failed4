export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    email?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    name: "Astha Chaudhary",
    role: "Founder",
    bio: "",
    image: "/astha-chaudhary.jpg",
    socials: {
      email: "asthachaudhary0204@gmail.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Anurag Chaudhary",
    role: "Co-Founder",
    bio: "",
    image: "/anurag-chaudhary.jpg",
    socials: {
      email: "bstup70@gmail.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Apurva Chaudhary",
    role: "Brand & Growth Strategist",
    bio: "",
    image: "/apurva-chaudhary.jpg",
    socials: {
      email: "apurvachaudhary13@gmail.com",
      linkedin: "https://linkedin.com"
    }
  },
  {
    name: "Chloe Vance",
    role: "Lead Creative Copywriter",
    bio: "",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    socials: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com"
    }
  }
];
