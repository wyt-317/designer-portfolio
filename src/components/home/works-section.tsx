'use client';

import Link from 'next/link';
import { GALLERY_IMAGES } from '@/lib/data';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';

function MarqueeRow({
  images,
  direction,
  href,
}: {
  images: typeof GALLERY_IMAGES;
  direction: 'right' | 'left';
  href: string;
}) {
  // 复制两份保证无缝循环
  const loop = [...images, ...images];
  const animClass =
    direction === 'right' ? 'animate-marquee-right' : 'animate-marquee-left';

  return (
    <div className="marquee-pause group/row relative flex overflow-hidden">
      <div className={`flex shrink-0 gap-4 pr-4 ${animClass}`}>
        {loop.map((img, idx) => (
          <Link
            key={`${img.src}-${idx}`}
            href={href}
            className="group/img relative z-10 block aspect-video w-72 shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-white/[0.06] bg-black/60 sm:w-80 lg:w-96"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="h-full w-full object-cover object-center transition-transform duration-500 ease-out group-hover/img:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export function WorksSection() {
  const ucImages = GALLERY_IMAGES.filter((i) => i.project === 'uc');
  const maoerImages = GALLERY_IMAGES.filter((i) => i.project === 'maoer');

  return (
    <section
      id="works"
      className="relative w-full scroll-mt-20 pb-24 pt-8 sm:pb-32 sm:pt-12"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-gradient-to-b from-black via-black/70 to-transparent"
      />
      <div className="relative mx-auto max-w-[100rem] px-6">
        <Reveal>
          <SectionHeading
            eyebrow="Selected Works"
            title="部分作品"
            subtitle="聚焦移动端产品体验与游戏化运营，包含阅读 APP 迭代优化、音频平台趣味活动设计两大项目。"
            className="mb-12"
          />
        </Reveal>
      </div>

      <div className="space-y-4">
        <Reveal delay={0.08} y={32}>
          <MarqueeRow
            images={ucImages}
            direction="right"
            href="/projects/uc"
          />
        </Reveal>
        <Reveal delay={0.18} y={32}>
          <MarqueeRow
            images={maoerImages}
            direction="left"
            href="/projects/maoer"
          />
        </Reveal>
      </div>
    </section>
  );
}
