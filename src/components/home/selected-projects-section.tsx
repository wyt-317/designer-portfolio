'use client';

import { PROJECTS } from '@/lib/data';
import { ProjectCard } from '@/components/project-card';
import { SectionHeading } from '@/components/section-heading';

export function SelectedProjectsSection() {
  return (
    <section id="selected-projects" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Project Directory"
        title="项目目录"
        subtitle="两个完整的设计实践，分别对应 C 端体验设计与游戏化运营设计。"
        className="mb-12"
      />

      <div className="grid gap-6 lg:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
