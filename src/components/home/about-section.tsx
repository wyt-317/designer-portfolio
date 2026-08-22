'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Briefcase,
  ChevronDown,
  ExternalLink,
} from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import { SectionHeading } from '@/components/section-heading';

type PanelKey = 'basic' | 'projects' | 'other-awards';

export function AboutSection() {
  const [open, setOpen] = useState<PanelKey | ''>('basic');
  const toggle = (key: PanelKey) => setOpen(open === key ? '' : key);

  return (
    <section
      id="about"
      className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-24 sm:py-32"
    >
      <div className="relative">
      <SectionHeading
        eyebrow="About Me"
        title="关于我"
        subtitle="个人背景、项目实践及获奖信息详见下方"
        className="mb-12"
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-stretch">
        {/* Left: stacked collapsible cards */}
        <div className="flex flex-col gap-4">
          {/* Basic info */}
          <CollapsibleCard
            icon={BookOpen}
            title="基本信息"
            isOpen={open === 'basic'}
            onToggle={() => toggle('basic')}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              <Info label="姓名" value="宛艺恬" />
              <Info label="职位" value="UX/UI 产品设计师" />
              <Info label="学校" value="南京邮电大学" />
              <Info label="专业" value="数字媒体艺术" />
              <Info label="届别" value="29届本科" />
              <Info label="语言" value="CET-4" />
            </div>
          </CollapsibleCard>

          {/* Project experience */}
          <CollapsibleCard
            icon={Briefcase}
            title="项目经历"
            isOpen={open === 'projects'}
            onToggle={() => toggle('projects')}
          >
            <div className="space-y-3">
              <ProjectItem
                title="UC小说 · C端体验设计"
                period="2026.05 - 07"
                desc="针对找书效率低、阅读体验差等核心问题，产出从信息架构到高保真的完整体验优化方案。"
              />
              <ProjectItem
                title="猫耳FM · 游戏化运营活动设计"
                period="2026.07 - 08"
                desc="暑期三消游戏化运营活动全链路视觉，4 套主题视觉、可复用组件库，结合 AI 工作流提效。"
              />
            </div>
          </CollapsibleCard>

          {/* Awards — main award always visible, other awards collapsible */}
          <div
            className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
              open === 'other-awards'
                ? 'border-white/15 bg-white/[0.04]'
                : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]'
            }`}
          >
            <button
              onClick={() => toggle('other-awards')}
              className="flex w-full items-center justify-between gap-4 p-5 text-left"
              aria-expanded={open === 'other-awards'}
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                    open === 'other-awards'
                      ? 'bg-white text-black'
                      : 'bg-white/[0.05] text-white/60'
                  }`}
                >
                  <Award className="h-4 w-4" />
                </span>
                <span className="text-base font-medium text-white">
                  获奖经历
                </span>
              </div>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 ${
                  open === 'other-awards' ? 'rotate-180' : ''
                }`}
              />
            </button>

            {/* Main award — always visible below header */}
            <div className="border-t border-white/[0.06] px-5 pt-5">
              <a
                href="https://www.mengxicup.cn/#/detail?id=6707"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-3 rounded-xl border border-[#ff6b35]/25 bg-[#ff6b35]/[0.07] p-3 transition-colors hover:bg-[#ff6b35]/[0.12]"
              >
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#ff6b35] text-white">
                  <Award className="h-4 w-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="flex flex-wrap items-center gap-2 text-sm font-semibold text-white">
                    浙江省梦溪杯宋韵文化创新大赛
                    <span className="rounded-full bg-[#ff6b35] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                      AIGC 铜奖
                    </span>
                    <ExternalLink className="h-3.5 w-3.5 text-[#ff9a6b] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </p>
                  <p className="mt-1 text-xs text-white/50">
                    2025.12 · 点击查看官方获奖展示
                  </p>
                </div>
              </a>
            </div>

            {/* Other awards — collapsible */}
            <AnimatePresence initial={false}>
              {open === 'other-awards' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2.5 px-5 pb-5 pt-3">
                    <p className="pt-1 text-[11px] uppercase tracking-[0.2em] text-white/35">
                      其他奖项
                    </p>
                    <AwardItem title="校园海报设计比赛 一等奖" period="2025.10" />
                    <AwardItem title="校园文创设计比赛 三等奖" period="2026.04" />
                    <AwardItem title="CET-4" period="2025.12" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {open !== 'other-awards' && (
              <div className="px-5 pb-5 pt-3">
                <p className="text-xs text-white/35">
                  还有 3 项其他奖项，点击展开查看
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right: avatar photo, always equal height with left column */}
        <div className="relative flex min-h-[420px] lg:min-h-0">
          <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
            <div className="h-72 w-72 rounded-full bg-gradient-to-br from-[#ff6b35]/25 via-white/[0.02] to-[#4096ff]/25 blur-3xl" />
          </div>
          <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl border border-white/[0.08] bg-[#0c0c0f]">
            <Image
              src="/avatar.png"
              alt="宛艺恬 Tian"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-contain object-center p-4 sm:p-6 lg:p-8"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6 pt-16">
              <p className="text-2xl font-semibold text-white">
                宛艺恬 · Tian
              </p>
              <p className="text-sm text-white/55">UI/UX Product Designer</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function CollapsibleCard({
  icon: Icon,
  title,
  isOpen,
  onToggle,
  children,
}: {
  icon: typeof BookOpen;
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
        isOpen
          ? 'border-white/15 bg-white/[0.04]'
          : 'border-white/[0.06] bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.03]'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 p-5 text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <span
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
              isOpen ? 'bg-white text-black' : 'bg-white/[0.05] text-white/60'
            }`}
          >
            <Icon className="h-4 w-4" />
          </span>
          <span className="text-base font-medium text-white">{title}</span>
        </div>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/[0.06] px-5 py-5">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Info({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
      <p className="text-[11px] uppercase tracking-wider text-white/40">
        {label}
      </p>
      <p className="mt-1 font-medium text-white">{value}</p>
    </div>
  );
}

function ProjectItem({
  title,
  period,
  desc,
}: {
  title: string;
  period: string;
  desc: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="font-medium text-white">{title}</p>
        <p className="text-xs text-white/40">{period}</p>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-white/60">{desc}</p>
    </div>
  );
}

function AwardItem({ title, period }: { title: string; period: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-3">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] text-white/60">
          <Award className="h-3.5 w-3.5" />
        </span>
        <p className="text-sm text-white/80">{title}</p>
      </div>
      <p className="shrink-0 text-xs text-white/40">{period}</p>
    </div>
  );
}
