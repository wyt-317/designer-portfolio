'use client';

import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { ProjectSummary } from '@/lib/data';

export function ProjectCard({ project }: { project: ProjectSummary }) {
  const accent = project.brandColor === 'orange' ? 'text-[#ff6b35]' : 'text-[#4096ff]';
  const accentBorder =
    project.brandColor === 'orange' ? 'hover:border-[#ff6b35]/40' : 'hover:border-[#4096ff]/40';
  const glow =
    project.brandColor === 'orange'
      ? 'hover:shadow-[0_20px_60px_-15px_rgba(255,107,53,0.3)]'
      : 'hover:shadow-[0_20px_60px_-15px_rgba(64,150,255,0.3)]';

  return (
    <Link
      href={`/projects/${project.slug}`}
      className={`group relative block overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] transition-all duration-500 ${accentBorder} ${glow}`}
    >
      <div className="relative aspect-video overflow-hidden bg-black/60">
        <img
          src={project.cover}
          alt={project.name}
          loading="lazy"
          className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />

        <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
          <span className="text-base font-semibold tracking-wide text-white sm:text-lg">
            {project.brandColor === 'orange' ? 'C端体验设计' : '游戏化运营设计'}
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 p-5">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/[0.06] bg-white/[0.02] px-2.5 py-0.5 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
        <div
          className={`flex shrink-0 items-center gap-1.5 text-sm font-medium text-white/70 transition-all group-hover:translate-x-1 group-hover:text-white ${accent}`}
        >
          查看详情
          <ArrowUpRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
}
