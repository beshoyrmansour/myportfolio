import { getTranslations } from "next-intl/server";
import { Background } from "@/components/background";
import { Navigation } from "@/components/navigation";
import { SiteEffects } from "@/components/site-effects";
import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { ExperienceTimeline } from "@/components/experience-timeline";
import { SkillsSection } from "@/components/skills-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default async function Home() {
  const t = await getTranslations("hero");
  const roles = t.raw("roles") as string[];

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Background />
      <SiteEffects roles={roles} />
      <Navigation />

      <div className="relative z-[1]">
        <main id="main-content">
          <Hero />
          <AboutSection />
          <ExperienceTimeline />
          <SkillsSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}
