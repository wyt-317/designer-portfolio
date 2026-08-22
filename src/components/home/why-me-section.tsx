'use client';

import { SectionHeading } from '@/components/section-heading';

const STRENGTHS = [
  {
    id: 'product',
    title: '产品思维',
    en: 'Product Thinking',
    desc: '能从用户调研、竞品分析中识别核心痛点，把设计目标与业务目标对齐，提供端到端的解决方案，而不仅是把页面画好看。',
  },
  {
    id: 'business',
    title: '业务理解',
    en: 'Business Sense',
    desc: '在猫耳FM项目中，围绕感知-转化-留存搭建视觉策略，用游戏化视觉、奖励机制和社交裂变赋能拉新、活跃与付费转化。',
  },
  {
    id: 'ux',
    title: '用户体验',
    en: 'User Experience',
    desc: '在UC小说项目中，通过优化信息架构、搜索筛选与阅读互动，显著缩短用户找书路径，让沉浸式阅读+社区互动真正落地。',
  },
  {
    id: 'brand',
    title: '品牌设计',
    en: 'Brand Design',
    desc: '具备IP形象延展、品牌表情包与视觉规范能力，能打造高识别度的视觉体系，让产品在用户心里留下独特记忆点。',
  },
  {
    id: 'operation',
    title: '运营设计',
    en: 'Campaign Design',
    desc: '精通Banner、弹窗、闪屏、分享卡片等全链路运营物料，能搭建可复用组件库，把单次设计沉淀为长期效率。',
  },
  {
    id: 'learning',
    title: '持续学习',
    en: 'Always Learning',
    desc: '持续关注 AIGC、AI Agent 趋势，熟练把 ChatGPT、Midjourney、Runway 等融入工作流，让AI成为设计的放大器。',
  },
];

export function WhyMeSection() {
  return (
    <section id="why-me" className="relative mx-auto max-w-7xl scroll-mt-20 px-6 py-24 sm:py-32">
      <SectionHeading
        eyebrow="Why Me"
        title="我的优势"
        subtitle="不只是会画图的设计师——以下六项能力，是我为团队带来价值的方式。"
        className="mb-12"
      />

      <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
        {STRENGTHS.map((s, idx) => (
          <div
            key={s.id}
            className="group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_20px_50px_-20px_rgba(255,255,255,0.15)] sm:min-h-[240px] sm:p-6"
          >
            {/* Number watermark */}
            <span className="pointer-events-none absolute -right-2 -top-4 text-[5rem] font-bold leading-none text-white/[0.04] sm:text-[7rem]">
              0{idx + 1}
            </span>

            <div className="relative">
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                {s.en}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white sm:text-2xl">
                {s.title}
              </h3>
            </div>

            <p className="relative mt-4 text-sm leading-relaxed text-white/60">
              {s.desc}
            </p>

            {/* Hover gradient */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#ff6b35]/[0.06] via-transparent to-[#4096ff]/[0.06] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}

