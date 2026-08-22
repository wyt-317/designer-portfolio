'use client';

import { ArrowUpRight, Target, Lightbulb, TrendingUp, Users } from 'lucide-react';
import Link from 'next/link';
import { SectionHeading } from '@/components/section-heading';

interface Highlight {
  goal: string;
  userProblem: string;
  businessProblem: string;
  outcome: string;
}

const HIGHLIGHTS: {
  slug: 'uc' | 'maoer';
  name: string;
  subtitle: string;
  accent: 'orange' | 'blue';
  highlight: Highlight;
}[] = [
  {
    slug: 'uc',
    name: 'UC小说 · C端体验设计',
    subtitle: '让阅读，不止于阅读',
    accent: 'orange',
    highlight: {
      goal: '构建高效分发生态、驱动用户留存转化、焕新品牌视觉感知',
      userProblem: '找书效率低、书籍信息不全导致决策慢；阅读器互动单一、评论体验被打断',
      businessProblem: '内容分发效率低、用户留存与转化困难、品牌感知弱',
      outcome:
        '独立完成书城首页、分类、阅读器等核心场景高保真设计；信息层级更清晰，找书路径缩短，设计目标与业务目标对齐',
    },
  },
  {
    slug: 'maoer',
    name: '猫耳FM · 游戏化运营设计',
    subtitle: '夏日消消乐 · 闯关听剧赢大奖',
    accent: 'blue',
    highlight: {
      goal: '借助三消玩法，在暑期高峰期拉新裂变、提升活跃度、深化品牌心智',
      userProblem: '活动缺乏视觉吸引力，用户"看到了但没记住、来了也不参与"',
      businessProblem: '暑期活跃与留存压力、付费转化路径生硬、品牌长效曝光不足',
      outcome:
        '独立完成 4 套完整主题视觉与可复用组件库；摸索出“关键词→出图→筛选→组件化”的 AI 辅助流程，元素生成效率显著提升',
    },
  },
];

export function ProjectHighlightsSection() {
  return (
    <section id="project-highlights" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Project Highlights"
        title="项目亮点"
        subtitle="项目核心问题、目标与产出，完整分析移步完整案例"
        className="mb-12"
      />

      <div className="space-y-8">
        {HIGHLIGHTS.map((p) => (
          <ProjectHighlightCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}

function ProjectHighlightCard({
  project,
}: {
  project: (typeof HIGHLIGHTS)[number];
}) {
  const accentText = project.accent === 'orange' ? 'text-[#ff6b35]' : 'text-[#4096ff]';
  const accentBorder =
    project.accent === 'orange' ? 'hover:border-[#ff6b35]/30' : 'hover:border-[#4096ff]/30';

  return (
    <div
      className={`group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors sm:p-10 ${accentBorder}`}
    >
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className={`mb-2 text-xs uppercase tracking-[0.25em] ${accentText}`}>
              {project.accent === 'orange' ? 'Case 01' : 'Case 02'}
            </p>
            <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-white/50">{project.subtitle}</p>
          </div>
          <Link
            href={`/projects/${project.slug}`}
            className={`flex shrink-0 items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white transition-all hover:gap-2.5 hover:bg-white/10 ${accentText}`}
          >
            Explore Full Case
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <HighlightCell icon={Target} label="项目目标" value={project.highlight.goal} />
          <HighlightCell icon={Users} label="用户问题" value={project.highlight.userProblem} />
          <HighlightCell
            icon={TrendingUp}
            label="业务问题"
            value={project.highlight.businessProblem}
          />
          <HighlightCell
            icon={Lightbulb}
            label="项目成果"
            value={project.highlight.outcome}
          />
        </div>
      </div>
    </div>
  );
}

function HighlightCell({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Target;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5">
      <div className="mb-3 flex items-center gap-2 text-xs uppercase tracking-wider text-white/40">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="text-sm leading-relaxed text-white/75">{value}</p>
    </div>
  );
}
