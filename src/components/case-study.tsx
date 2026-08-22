'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Maximize2,
  FileText,
  Download,
  ChevronRight,
  Loader2,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { ProjectSummary } from '@/lib/data';

const BRAND_HEX: Record<string, string> = {
  orange: '#ff6b35',
  blue: '#4096ff',
};

interface CaseStudyImage {
  src: string;
  alt: string;
}

interface CaseStudyProps {
  project: ProjectSummary;
  pdfUrl?: string;
  images?: CaseStudyImage[];
  nextProject: { slug: string; name: string };
}

export function CaseStudy({ project, pdfUrl, images, nextProject }: CaseStudyProps) {
  const [loading, setLoading] = useState(true);
  const hasImages = Array.isArray(images) && images.length > 0;

  return (
    <main className="relative">
      {/* Header */}
      <section className="mx-auto max-w-7xl px-6 pb-8 pt-32 sm:pt-40">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-xs uppercase tracking-[0.25em] text-white/35">
          <Link
            href="/projects"
            className="transition-colors hover:text-white/70"
          >
            Projects
          </Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-white/60">{project.name}</span>
        </div>

        <div className="mt-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: BRAND_HEX[project.brandColor] }}
              />
              <span className="text-xs uppercase tracking-[0.25em] text-white/40">
                {project.category} · {project.period}
              </span>
            </div>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              {project.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/55 sm:text-lg">
              {project.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {pdfUrl && (
              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
              >
                <Maximize2 className="h-4 w-4" />
                新窗口打开
              </a>
            )}
            {pdfUrl && (
              <a
                href={pdfUrl}
                download
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-white/90"
              >
                <Download className="h-4 w-4" />
                下载 PDF
              </a>
            )}
          </div>
        </div>

        {/* Meta pills */}
        <div className="mt-8 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>

      {/* Gallery (full-screen images) */}
      {hasImages ? (
        <section className="relative w-full">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-6 sm:gap-4">
            {images!.map((img, idx) => (
              <figure
                key={`${img.src}-${idx}`}
                className="relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-black/40"
              >
                <span className="absolute left-3 top-3 z-10 rounded-md bg-black/70 px-2 py-0.5 text-[10px] font-medium tracking-wider text-white/80 sm:left-4 sm:top-4">
                  {String(idx + 1).padStart(2, '0')} / {String(images!.length).padStart(2, '0')}
                </span>
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={idx < 2 ? 'eager' : 'lazy'}
                  fetchPriority={idx === 0 ? 'high' : 'auto'}
                  className="block h-auto w-full max-w-full select-none"
                  draggable={false}
                />
              </figure>
            ))}
          </div>
        </section>
      ) : pdfUrl ? (
        <section className="mx-auto max-w-7xl px-6 py-8">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-2xl">
            {loading && (
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 bg-[#0b0b0e]">
                <Loader2 className="h-8 w-8 animate-spin text-white/40" />
                <p className="text-sm text-white/50">正在加载作品集 PDF…</p>
              </div>
            )}
            <iframe
              src={`${pdfUrl}#toolbar=0&view=FitH`}
              title={`${project.name} Case Study`}
              className="h-[70vh] w-full md:h-[82vh]"
              onLoad={() => setLoading(false)}
            />
          </div>

          {/* Mobile fallback */}
          <a
            href={pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'mt-4 flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/70 transition-colors hover:bg-white/10 md:hidden'
            )}
          >
            <FileText className="h-4 w-4" />
            在新页面查看完整 PDF
          </a>
        </section>
      ) : null}

      {/* Next project */}
      <section className="mx-auto max-w-7xl px-6 pb-20 pt-12 sm:pt-16">
        <Link
          href={`/projects/${nextProject.slug}`}
          className="group flex items-center justify-between gap-6 border-t border-white/10 pt-8 transition-colors hover:border-white/25"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              Next Project
            </p>
            <h3 className="mt-2 text-lg font-semibold text-white transition-colors group-hover:text-white/90 sm:text-xl">
              {nextProject.name}
            </h3>
          </div>
          <span className="inline-flex shrink-0 items-center gap-1.5 text-sm font-medium text-white/60 transition-all group-hover:translate-x-1 group-hover:text-white">
            查看
            <ChevronRight className="h-4 w-4" />
          </span>
        </Link>
      </section>
    </main>
  );
}
