const profileImg = "/lovable-uploads/2f2799c4-861a-4dc8-b1f8-15c74c8ef72a.png";
import certAws from "@/assets/cert-aws.png";
import certPmp from "@/assets/cert-pmp.png";
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
    "8+ years building high-impact web platforms across fintech and SaaS. Led cross-functional teams, shipped performant React frontends, and designed robust cloud-native systems on AWS.",
  certifications: [
    { title: "AWS", href: "https://www.credly.com", image: certAws as string },
    { title: "PMP", href: "https://www.credly.com", image: certPmp as string },
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
