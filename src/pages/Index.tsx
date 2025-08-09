import { useEffect } from "react";
import ProfilePanel from "@/components/portfolio/ProfilePanel";
import CertificationBar from "@/components/portfolio/CertificationBar";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import { portfolio } from "@/content/portfolio";
import { Card } from "@/components/ui/card";
import Typewriter from "@/components/Typewriter";

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
    <main className="min-h-screen overflow-x-hidden bg-gradient-primary flex items-center justify-center" style={{ ["--gradient-primary" as any]: "linear-gradient(135deg, hsl(var(--brand)) 0%, hsl(234 85% 40%) 100%)" }}>
      <div className="w-full px-4 py-10">
        <Card className="mx-auto max-w-screen-2xl rounded-2xl glass-card shadow-[0_20px_60px_-20px_hsl(var(--brand)/0.35)] bg-[hsl(var(--card-hero))] text-[hsl(var(--card-hero-foreground))] border-[hsl(var(--border-hero))]">
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
                <header className="animate-fade-in" style={{ animationDelay: "100ms" }}>
                  <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-foreground">
                    <Typewriter text="Howdy, I'm, Michael Rodriguez!" />
                  </h1>
                </header>
                <div className="animate-fade-in" style={{ animationDelay: "200ms" }}>
                  <CertificationBar certifications={portfolio.certifications} />
                </div>
                <section aria-label="Summary" className="w-full animate-fade-in" style={{ animationDelay: "300ms" }}>
                  <p className="mt-3 text-base md:text-lg text-[hsl(var(--card-hero-foreground))]">
                    {portfolio.summary}
                  </p>
                </section>
                <section aria-label="Projects" className="animate-fade-in" style={{ animationDelay: "400ms" }}>
                  <ProjectGrid projects={portfolio.projects} />
                </section>
              </article>
            </div>
          </section>
        </Card>
      </div>
    </main>
  );
};

export default Index;
