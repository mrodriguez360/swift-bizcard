import { useEffect } from "react";
import ProfilePanel from "@/components/portfolio/ProfilePanel";
import CertificationBar from "@/components/portfolio/CertificationBar";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import { portfolio } from "@/content/portfolio";
import { Card } from "@/components/ui/card";

import InteractiveBackground from "@/components/InteractiveBackground";

const Index = () => {
  useEffect(() => {
    const title = `${portfolio.name}`;
    const description = `${portfolio.name}: concise portfolio with certifications and projects for quick recruiter review.`;
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", description);
    else {
      const m = document.createElement("meta");
      m.name = "description";
      m.content = description;
      document.head.appendChild(m);
    }
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = window.location.href;

    // JSON-LD structured data for Person
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      name: portfolio.name,
      url: window.location.href,
      sameAs: [portfolio.linkedinUrl],
      jobTitle: portfolio.headline,
    });
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[hsl(var(--ai-bg))] flex items-center justify-center">
      <InteractiveBackground />
      <div className="relative z-10 w-full px-4 py-10">
        <header className="mx-auto max-w-screen-2xl text-center mb-6 md:mb-8 animate-fade-in" style={{ animationDelay: "60ms" }}>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">{portfolio.name}</h1>
          <p className="mt-2 text-base md:text-lg text-muted-foreground">{portfolio.headline}</p>
        </header>
        <Card className="mx-auto max-w-screen-2xl rounded-2xl glass-card shadow-[0_20px_60px_-20px_hsl(var(--brand)/0.35)] bg-[hsl(var(--background)/0.5)] text-[hsl(var(--foreground))] border-[hsl(var(--border)/0.35)]">
          <section className="p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6 w-full">
              <div className="md:col-span-2">
                <ProfilePanel
                  name={portfolio.name}
                  headline={portfolio.headline}
                  image={portfolio.profileImage}
                  linkedinUrl={portfolio.linkedinUrl}
                />
              </div>
              <article className="md:col-span-3 flex flex-col gap-6 justify-start">
                <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <CertificationBar certifications={portfolio.certifications} />
                </div>
                <section aria-label="Summary" className="w-full animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <p className="mt-3 text-base md:text-lg text-[hsl(var(--card-hero-foreground))]">
                    {portfolio.summary}
                  </p>
                </section>
              </article>
            </div>
          </section>
        </Card>
        <section aria-label="Projects" className="mx-auto max-w-screen-2xl mt-8 animate-fade-in" style={{ animationDelay: "400ms" }}>
          <ProjectGrid projects={portfolio.projects} />
        </section>
      </div>
    </main>
  );
};

export default Index;
