const profileImg = "/lovable-uploads/2f2799c4-861a-4dc8-b1f8-15c74c8ef72a.png";




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
  linkedinUrl: "https://www.linkedin.com/in/mrodriguez360/",
  profileImage: profileImg as string,
  summary:
    "Results-driven AI-Powered Automation Architect with 15+ years of experience revolutionizing enterprise operations through intelligent, data-driven solutions. I specialize in transforming complex operational challenges into scalable AI-enhanced systems that deliver measurable business outcomes.",
  certifications: [
    { title: "AWS Certified Solutions Architect – Associate", href: "https://www.credly.com/badges/ce2a040c-8fe2-4eea-a569-41ff0341df77/public_url", image: "/lovable-uploads/4d25aeeb-6c46-4cf2-9f07-c8c5cb59842f.png" as string },
    { title: "AWS AI Practitioner", href: "https://www.credly.com/badges/be75596a-3e34-4e76-8f21-e8036de94d92/public_url", image: "/lovable-uploads/d2c49c1c-dbe3-4f3e-8938-4caadd91f121.png" as string },
    { title: "Google Cloud Generative AI Leader", href: "https://www.credly.com/badges/a1fd5a91-51b5-4630-b60e-0f40584189b8/public_url", image: "/lovable-uploads/031b5ec3-66dc-47ca-8b7b-33ca9b63f449.png" as string },
    { title: "Splunk Cloud Certified Admin", href: "https://www.credly.com/badges/eabec6ab-7e36-4713-91f8-f059d1266c0a/public_url", image: "/lovable-uploads/ea01f6a8-6578-4db5-9bfe-5bc9b3d76277.png" as string },
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
