'use client';

import Image from 'next/image';
import { useState } from 'react';

type Skill = {
  name: string;
  src: string;
  href: string;
};

const SKILLS: Skill[] = [
  { name: 'Photoshop', src: '/skills/ps.png', href: 'https://www.adobe.com/products/photoshop.html' },
  { name: 'Illustrator', src: '/skills/ai.png', href: 'https://www.adobe.com/products/illustrator.html' },
  { name: 'Figma', src: '/skills/figma.png', href: 'https://www.figma.com' },
  { name: 'After Effects', src: '/skills/ae.png', href: 'https://www.adobe.com/products/aftereffects.html' },
  { name: '剪映专业版', src: '/skills/capcut.png', href: 'https://www.capcut.cn' },
  { name: '即梦 AI', src: '/skills/jimeng.png', href: 'https://jimeng.jianying.com' },
  { name: 'ChatGPT', src: '/skills/chatgpt-white.png', href: 'https://chat.openai.com' },
  { name: 'Sketch', src: '/skills/sketch.png', href: 'https://www.sketch.com' },
  { name: 'Liblib AI', src: '/skills/liblib.png', href: 'https://www.liblib.art' },
  { name: 'Blender', src: '/skills/weibo.png', href: 'https://www.blender.org' },
];

export function SkillsSection() {
  // 复制两份，配合 translateX(-50%) 实现无缝循环
  const loop = [...SKILLS, ...SKILLS];
  const [active, setActive] = useState<string | null>(null);

  return (
    <section
      id="skills"
      aria-label="软件技能"
      className="relative w-full scroll-mt-20 px-6 py-24 sm:py-32"
    >
      <p className="mb-8 text-center text-xs font-medium uppercase tracking-[0.3em] text-white/35 sm:mb-10">
        软件技能
      </p>

      <div className="marquee-pause group/skills relative flex overflow-hidden">
        <div className="flex shrink-0 items-center gap-8 pr-8 animate-marquee-left sm:gap-12 sm:pr-12">
          {loop.map((skill, idx) => {
            const id = `${skill.name}-${idx}`;
            const isActive = active === id;
            return (
              <a
                key={id}
                href={skill.href}
                target="_blank"
                rel="noopener noreferrer"
                title={skill.name}
                onMouseEnter={() => setActive(id)}
                onMouseLeave={() => setActive(null)}
                onFocus={() => setActive(id)}
                onBlur={() => setActive(null)}
                className="group/icon relative flex h-20 w-20 shrink-0 items-center justify-center sm:h-24 sm:w-24"
              >
                {/* 点击/悬停时的光晕 */}
                <span
                  aria-hidden
                  className={`pointer-events-none absolute inset-0 rounded-full bg-white/10 blur-xl transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
                <Image
                  src={skill.src}
                  alt={skill.name}
                  width={96}
                  height={96}
                  loading="lazy"
                  className={`relative h-14 w-14 object-contain opacity-70 transition-all duration-300 ease-out will-change-transform sm:h-16 sm:w-16 ${
                    isActive ? 'scale-[1.8] opacity-100' : 'hover:scale-110 active:scale-[2.2]'
                  }`}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
