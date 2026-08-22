import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: '宛艺恬 | UI/UX 产品设计师作品集',
    template: '%s | 宛艺恬 Tian',
  },
  description:
    '宛艺恬（Tian）的个人作品集网站，UI/UX 产品设计师，专注于产品体验设计、交互设计、视觉设计与运营设计。',
  keywords: ['UI设计师', 'UX设计师', '产品设计师', '作品集', '宛艺恬', 'UC小说', '猫耳FM'],
  authors: [{ name: '宛艺恬' }],
  openGraph: {
    title: '宛艺恬 | UI/UX 产品设计师作品集',
    description: '产品思维 × 交互设计 × 视觉表达 — 宛艺恬的个人作品集',
    locale: 'zh_CN',
    type: 'website',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body className="antialiased">
        {/* 极光背景 */}
        <div className="aurora-bg" aria-hidden="true">
          <div className="aurora-orb orb-orange" />
          <div className="aurora-orb orb-blue" />
        </div>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
