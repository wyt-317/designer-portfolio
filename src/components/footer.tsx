'use client';

import { Mail, Phone, ArrowUp } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CONTACT, PORTFOLIO_PDF, RESUME_PDF } from '@/lib/data';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { useToast } from '@/components/toast-provider';

export function Footer() {
  const copy = useCopyToClipboard();
  const { showToast } = useToast();
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopy = async (
    text: string,
    message: string,
    type: 'email' | 'phone'
  ) => {
    const ok = await copy(text);
    if (ok) showToast(message, type);
  };

  return (
    <footer
      id="contact"
      className="relative mx-auto mt-24 max-w-7xl scroll-mt-24 px-6 pb-10 pt-20"
    >
      <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-8 sm:p-12">
        <p className="text-xs uppercase tracking-[0.25em] text-white/40">
          Let&apos;s Connect
        </p>
        <h2 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          一起做一些
          <br />
          <span className="text-white/40">有趣的设计。</span>
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr] lg:gap-8">
          {/* Left: contact cards + buttons */}
          <div className="flex flex-col gap-4">
            <div
              onClick={() => handleCopy(CONTACT.email, '邮箱已复制', 'email')}
              className="group cursor-pointer rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-2 text-white/40">
                <Mail className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">邮箱</span>
              </div>
              <p className="mt-3 text-lg font-medium text-white">
                {CONTACT.email}
              </p>
              <p className="mt-1 text-xs text-white/30 opacity-0 transition-opacity group-hover:opacity-100">
                点击复制
              </p>
            </div>

            <div
              onClick={() => {
                if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                  window.location.href = `tel:${CONTACT.phone}`;
                } else {
                  handleCopy(CONTACT.phone, '电话号码已复制', 'phone');
                }
              }}
              className="group cursor-pointer rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all hover:border-white/15 hover:bg-white/[0.05]"
            >
              <div className="flex items-center gap-2 text-white/40">
                <Phone className="h-4 w-4" />
                <span className="text-xs uppercase tracking-wider">电话</span>
              </div>
              <p className="mt-3 text-lg font-medium text-white">
                {CONTACT.phone}
              </p>
              <p className="mt-1 text-xs text-white/30 opacity-0 transition-opacity group-hover:opacity-100">
                点击复制 / 移动端直接拨打
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={PORTFOLIO_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black transition-all hover:bg-white/90"
              >
                下载作品集 PDF
              </a>
              <a
                href={RESUME_PDF}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/[0.06]"
              >
                下载个人简历 PDF
              </a>
              <Link
                href="/about"
                className="rounded-full border border-white/15 bg-white/[0.02] px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-white/[0.06]"
              >
                关于我
              </Link>
            </div>
          </div>

          {/* Right: WeChat QR */}
          <div className="flex flex-col items-center justify-center rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 sm:p-8">
            <div className="flex flex-col items-center">
              <p className="text-xs uppercase tracking-[0.25em] text-white/40">
                WeChat
              </p>
              <p className="mt-2 text-base font-medium text-white">
                {CONTACT.wechat}
              </p>
            </div>
            <div className="relative mt-5 overflow-hidden rounded-2xl bg-white p-3 shadow-[0_20px_60px_-20px_rgba(255,255,255,0.25)]">
              <Image
                src="/wechat-qr.jpg"
                alt="微信二维码"
                width={200}
                height={200}
                className="h-40 w-40 object-contain sm:h-48 sm:w-48"
                priority
              />
            </div>
            <p className="mt-4 text-xs text-white/40">
              微信扫码，或搜索微信号添加
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-6 text-xs text-white/40 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} 宛艺恬 Tian. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-4">
              <span>Product &amp; Visual Designer</span>
              <span className="text-white/20">·</span>
              <span>南京邮电大学 · 29届</span>
            </p>
            <button
              onClick={scrollToTop}
              className="group inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/60 transition-all hover:border-white/25 hover:bg-white/[0.08] hover:text-white"
            >
              <ArrowUp className="h-3 w-3 transition-transform group-hover:-translate-y-0.5" />
              回到顶部
            </button>
          </div>
        </div>
      </div>

      {/* 悬浮回到顶部按钮 */}
      <button
        onClick={scrollToTop}
        aria-label="回到顶部"
        className={`fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] transition-all duration-300 hover:bg-white hover:text-black ${
          showTop
            ? 'translate-y-0 opacity-100'
            : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
}
