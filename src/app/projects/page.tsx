'use client';

import { SiteShell } from '@/components/site-shell';
import { Footer } from '@/components/footer';
import { ProjectCard } from '@/components/project-card';
import { PROJECTS } from '@/lib/data';

export default function ProjectsPage() {
  return (
    <SiteShell>
      <main className="relative">
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-36 sm:pt-44">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
            Projects
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            我的项目
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
            精选的设计实践与探索 —— 从 C
            端阅读产品的完整体验优化，到二次元社区的游戏化运营设计，覆盖产品思维、交互、视觉与品牌全链路。
          </p>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-16">
          <div className="grid gap-6 lg:grid-cols-2">
            {PROJECTS.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}
