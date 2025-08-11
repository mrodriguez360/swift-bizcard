const profileImg = "/lovable-uploads/d1db9f50-d1eb-4aaf-80e1-b0347aae574c.png";




import p1 from "@/assets/project-1.jpg";




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
    "Results-driven AI-Powered Automation Architect with 15+ years turning complex operations into intelligent, scalable systems that deliver measurable outcomes. I build AI-enhanced automation that understands context, drives proactive action, and cuts response times from hours to seconds.\n\n- Architected Unified Monitoring running continuously for 10+ years, saving 600+ hours/month and reducing MTTR to seconds.\n\n- Designed autonomous workflows and dynamic playbooks for proactive, zero-touch remediation.\n\n- Engineered vulnerability management at 200,000+ findings/week with business-impact prioritization.\n\n- Led end-to-end server provisioning automation, cutting deployment time by 85%.\n\n- Deployed Splunk apps across DevOps/APM/Security/Infra, lifting visibility 60% and reducing incident response 30%.\n\n- Built executive dashboards and real-time observability across Splunk, AWS, Dynatrace, Ansible, and security tools.\n\nNow advancing automation with AI agents and decisioning across cybersecurity, vulnerability management, and IT operations. Using AI to amplify, not replace, human expertise.",
  certifications: [
    { title: "AWS Certified Solutions Architect – Associate", href: "https://www.credly.com/badges/ce2a040c-8fe2-4eea-a569-41ff0341df77/public_url", image: "/lovable-uploads/4d25aeeb-6c46-4cf2-9f07-c8c5cb59842f.png" as string },
    { title: "AWS AI Practitioner", href: "https://www.credly.com/badges/be75596a-3e34-4e76-8f21-e8036de94d92/public_url", image: "/lovable-uploads/d2c49c1c-dbe3-4f3e-8938-4caadd91f121.png" as string },
    { title: "Google Cloud Generative AI Leader", href: "https://www.credly.com/badges/a1fd5a91-51b5-4630-b60e-0f40584189b8/public_url", image: "/lovable-uploads/031b5ec3-66dc-47ca-8b7b-33ca9b63f449.png" as string },
    { title: "Splunk Cloud Certified Admin", href: "https://www.credly.com/badges/eabec6ab-7e36-4713-91f8-f059d1266c0a/public_url", image: "/lovable-uploads/ea01f6a8-6578-4db5-9bfe-5bc9b3d76277.png" as string },
  ] as Certification[],
  projects: [
    {
      title: "Unified Monitoring IT Ops and SIEM:\nMonitors 2 data centers for 10+ years",
      href: "https://www.linkedin.com/pulse/driving-innovation-my-role-automation-cybersecurity-michael-rodriguez-fp3ac/",
      image: p1 as string,
    },
    {
      title: "IT Operations and Cybersecurity Automation Workflows:\n24/7 automation equal to 6 FTEs",
      href: "https://www.linkedin.com/pulse/driving-innovation-my-role-automation-cybersecurity-michael-rodriguez-fp3ac/",
      image: "/lovable-uploads/69bb36fd-7248-4c40-ba5c-3ce49aa4fa14.png" as string,
    },
    {
      title: "Product Requirements Prompt (PRP) AI Chatbot:\nAccelerating AI Pipelines",
      href: "https://www.linkedin.com/pulse/from-idea-ai-app-zero-friction-michael-rodriguez-lmmoc/",
      image: "/lovable-uploads/587f79bb-6f94-43dd-96c0-2cd5a3d3584e.png" as string,
    },
    {
      title: "Code Migration to Modernization:\n50x faster delivery",
      href: "https://www.linkedin.com/pulse/from-prompt-deploy-4-hours-michael-rodriguez-q3t4c/",
      image: "/lovable-uploads/17b77024-1a99-43f6-877a-87335f961557.png" as string,
    },
  ] as Project[],
};

export type Portfolio = typeof portfolio;
