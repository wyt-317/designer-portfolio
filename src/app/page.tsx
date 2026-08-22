'use client';

import { SiteShell } from '@/components/site-shell';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/home/hero-section';
import { WorksSection } from '@/components/home/works-section';
import { AboutSection } from '@/components/home/about-section';
import { SelectedProjectsSection } from '@/components/home/selected-projects-section';
import { SkillsSection } from '@/components/home/skills-section';
import { ProjectHighlightsSection } from '@/components/home/project-highlights-section';
import { WhyMeSection } from '@/components/home/why-me-section';

export default function HomePage() {
  return (
    <SiteShell>
      <main className="relative">
        <HeroSection />
        <WorksSection />
        <AboutSection />
        <SkillsSection />
        <SelectedProjectsSection />
        <ProjectHighlightsSection />
        <WhyMeSection />
        <Footer />
      </main>
    </SiteShell>
  );
}
