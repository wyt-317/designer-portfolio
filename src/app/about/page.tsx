'use client';

import {
  Briefcase,
  CalendarDays,
  Download,
  ExternalLink,
  GraduationCap,
  Heart,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { SiteShell } from '@/components/site-shell';
import { Footer } from '@/components/footer';
import WarpText from '@/components/WarpText';
import { PORTFOLIO_PDF, RESUME_PDF } from '@/lib/data';

type TimelineItem = {
  type: 'work' | 'edu' | 'award';
  period: string;
  title: string;
  desc?: string;
  items?: { name: string; date: string }[];
};

const TIMELINE: TimelineItem[] = [
  {
    type: 'award',
    period: '获奖经历',
    title: '竞赛获奖与证书',
    items: [
      { name: '浙江省2025梦溪杯宋韵文化创新大赛 AIGC赛道 铜奖', date: '2025.12' },
      { name: '校园海报设计比赛 一等奖', date: '2025.10' },
      { name: '校园文创设计比赛 三等奖', date: '2026.04' },
      { name: 'CET-4', date: '2025.12' },
    ],
  },
  {
    type: 'work',
    period: '2026.05 - 2026.07',
    title: 'UC小说 · C端项目经历',
    desc: '主导 C 端阅读产品体验优化，通过用户调研定位找书效率、阅读沉浸感等核心问题，产出信息架构、交互流程与高保真界面，显著缩短核心路径。',
  },
  {
    type: 'work',
    period: '2026.07 - 2026.08',
    title: '猫耳FM · 游戏化运营设计',
    desc: '负责暑期游戏化运营活动「夏日消消乐」的整体视觉设计，从活动主题、游戏界面到 Banner 触达全链路产出，并沉淀可复用的运营视觉策略框架。',
  },
];

const VALUES = [
  {
    icon: Sparkles,
    title: '产品思维',
    desc: '从业务目标与用户问题出发，而不是从"好看的界面"出发。',
  },
  {
    icon: Heart,
    title: '用户共情',
    desc: '用访谈、问卷、数据交叉验证设计假设，避免自嗨。',
  },
  {
    icon: Briefcase,
    title: '落地意识',
    desc: '兼顾技术约束与实现成本，输出具备落地可行性的设计输出。',
  },
];

export default function AboutPage() {
  return (
    <SiteShell>
      <main className="relative">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-6 pb-12 pt-36 sm:pt-44">
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.3em] text-white/35">
            About
          </p>
          <WarpText
            text="你好，我是 宛艺恬"
            color="#f8f5ff"
            warpStrength={0.12}
            warpScale={1.7}
            speed={0.55}
            pointerInfluence={0.42}
            pointerStrength={0.5}
            refraction={0.018}
            ripple
            fontSize="clamp(2.25rem, 7vw, 4.5rem)"
            fontWeight={800}
            letterSpacing="-0.04em"
            lineHeight={0.9}
            align="left"
            style={{ height: 'clamp(5rem, 14vw, 7.5rem)' }}
          />
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/65 sm:text-xl">
            一名关注产品、用户与商业平衡的 UI/UX
            产品设计师。喜欢把复杂的问题拆解成清晰的流程，再用克制而有温度的视觉把它呈现出来。
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={RESUME_PDF}
              download
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-white/90"
            >
              <Download className="h-4 w-4" />
              下载简历 PDF
            </a>
            <a
              href={PORTFOLIO_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white/80 backdrop-blur-md transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
            >
              <ExternalLink className="h-4 w-4" />
              查看完整作品集
            </a>
          </div>
        </section>

        {/* Quick info */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <InfoCard icon={Briefcase} label="意向" value="日常实习 · UI/UX 产品设计师" />
            <InfoCard icon={GraduationCap} label="教育" value="南京邮电大学 · 数字媒体艺术" />
            <InfoCard icon={CalendarDays} label="可实习时间" value="3个月以上（寒暑假）· 29届" />
          </div>
        </section>

        {/* Timeline */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-white/35">
                Journey
              </p>
              <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                经历时间线
              </h2>
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:left-[23px]" />
            <div className="space-y-8">
              {TIMELINE.map((item, idx) => (
                <div key={idx} className="relative flex gap-5 sm:gap-7">
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/15 bg-black sm:h-12 sm:w-12">
                    {item.type === 'edu' ? (
                      <GraduationCap className="h-4 w-4 text-white/70 sm:h-5 sm:w-5" />
                    ) : item.type === 'award' ? (
                      <Trophy className="h-4 w-4 text-[#ff6b35] sm:h-5 sm:w-5" />
                    ) : (
                      <Briefcase className="h-4 w-4 text-white/70 sm:h-5 sm:w-5" />
                    )}
                  </div>
                  <div className="flex-1 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-colors hover:border-white/15 hover:bg-white/[0.04] sm:p-6">
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      {item.period}
                    </p>
                    <h3 className="mt-2 text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    {item.desc ? (
                      <p className="mt-2 text-sm leading-relaxed text-white/60">
                        {item.desc}
                      </p>
                    ) : item.items ? (
                      <ul className="mt-3 space-y-2">
                        {item.items.map((award, i) => (
                          <li
                            key={i}
                            className="flex items-start justify-between gap-3 text-sm text-white/60"
                          >
                            <span className="flex items-start gap-2 leading-relaxed">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[#ff6b35]/80" />
                              {award.name}
                            </span>
                            <span className="shrink-0 text-white/40">{award.date}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mx-auto max-w-7xl px-6 py-12">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-[0.3em] text-white/35">
              How I Work
            </p>
            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              我的设计原则
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-colors hover:border-white/15 hover:bg-white/[0.04]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/[0.05] text-white/80">
                  <v.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">
                  {v.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </SiteShell>
  );
}

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Briefcase;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5">
      <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/40">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </div>
      <p className="mt-2 text-base font-medium text-white">{value}</p>
    </div>
  );
}
