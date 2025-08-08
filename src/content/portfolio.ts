const profileImg = "/lovable-uploads/2f2799c4-861a-4dc8-b1f8-15c74c8ef72a.png";


import certAzure from "@/assets/cert-azure.png";
import certScrum from "@/assets/cert-scrum.png";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";

export type Certification = {
  title: string;
  href: string;
  image: string;
};

export type Project = {
  title: string;
  href: string;
  image: string;
};

export const portfolio = {
  name: "Michael Rodriguez",
  headline: "Systems Engineering, Senior Advisor",
  linkedinUrl: "https://www.linkedin.com/in/your-handle",
  profileImage: profileImg as string,
  summary:
    "Results-driven AI-Powered Automation Architect with 15+ years of experience revolutionizing enterprise operations through intelligent, data-driven solutions. I specialize in transforming complex operational challenges into scalable AI-enhanced systems that deliver measurable business outcomes.",
  certifications: [
    { title: "AWS", href: "https://www.credly.com/badges/ce2a040c-8fe2-4eea-a569-41ff0341df77/public_url", image: "/lovable-uploads/4d25aeeb-6c46-4cf2-9f07-c8c5cb59842f.png" as string },
    { title: "AWS AI Practitioner", href: "https://www.credly.com/badges/be75596a-3e34-4e76-8f21-e8036de94d92/public_url", image: "/lovable-uploads/d2c49c1c-dbe3-4f3e-8938-4caadd91f121.png" as string },
    { title: "AZURE", href: "https://www.credly.com", image: certAzure as string },
    { title: "SCRUM", href: "https://www.credly.com", image: certScrum as string },
  ] as Certification[],
  projects: [
    {
      title: "Realtime Analytics Dashboard",
      href: "https://example.com",
      image: p1 as string,
    },
    {
      title: "Cross-Platform Mobile App",
      href: "https://example.com",
      image: p2 as string,
    },
    {
      title: "Graph Visualization Engine",
      href: "https://example.com",
      image: p3 as string,
    },
    {
      title: "Cloud Cost Optimizer",
      href: "https://example.com",
      image: p4 as string,
    },
  ] as Project[],
};

export type Portfolio = typeof portfolio;
