'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { HERO_VIDEO } from '@/lib/data';

const SENSITIVITY = 0.8;

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const prevXRef = useRef<number | null>(null);
  const targetTimeRef = useRef<number>(0);
  const seekQueuedRef = useRef<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      targetTimeRef.current = 0;
    };

    const onSeeked = () => {
      seekQueuedRef.current = false;
      if (Math.abs(targetTimeRef.current - video.currentTime) > 0.05) {
        performSeek();
      }
    };

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('seeked', onSeeked);

    return () => {
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('seeked', onSeeked);
    };
  }, []);

  const performSeek = () => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    seekQueuedRef.current = true;
    const t = Math.max(0, Math.min(video.duration, targetTimeRef.current));
    try {
      video.currentTime = t;
    } catch {
      // ignore
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;
    const currentX = e.clientX;
    if (prevXRef.current === null) {
      prevXRef.current = currentX;
      return;
    }
    const delta = currentX - prevXRef.current;
    prevXRef.current = currentX;

    const shift = (delta / window.innerWidth) * SENSITIVITY * video.duration;
    targetTimeRef.current = Math.max(
      0,
      Math.min(video.duration, targetTimeRef.current + shift)
    );

    if (!seekQueuedRef.current) {
      performSeek();
    }
  };

  const handleMouseLeave = () => {
    prevXRef.current = null;
  };

  // Touch fallback: drag horizontally
  const handleTouchStart = (e: React.TouchEvent) => {
    prevXRef.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    if (prevXRef.current !== null) {
      const fakeEvent = { clientX: touch.clientX } as React.MouseEvent;
      handleMouseMove(fakeEvent);
    }
  };
  const handleTouchEnd = () => {
    prevXRef.current = null;
  };

  const scrollToNext = () => {
    const el = document.getElementById('works');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen min-h-[600px] w-full overflow-hidden bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Video —— 人物置顶展示，无文字遮挡 */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
        src={HERO_VIDEO}
        muted
        playsInline
        preload="auto"
        // 严禁 autoplay，由鼠标/触摸控制播放进度
      />
      {/* 底部黑色渐变过渡：拉长并加深，与第二屏自然衔接，无明显分割线 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[65%] bg-gradient-to-b from-transparent via-black/20 via-[55%] to-black" />

      {/* 问候文字：与导航栏 Portfolio 左对齐，依次出现 */}
      <div className="pointer-events-none absolute inset-0 z-[2] mx-auto max-w-7xl px-3 sm:px-4">
        <motion.div
          className="absolute left-4 top-[68%] -translate-y-1/2 sm:left-5"
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
          }}
        >
        <motion.h1
          variants={{
            hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="text-4xl font-bold tracking-tight text-white drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-5xl md:text-6xl"
        >
          Hello
        </motion.h1>
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 24, filter: 'blur(8px)' },
            show: {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
            },
          }}
          className="mt-1 text-3xl font-semibold tracking-tight text-white/95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)] sm:text-4xl md:text-5xl"
        >
          I&apos;m Wan Yitian
        </motion.h2>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        aria-label="向下滚动"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="h-6 w-6" />
        </motion.div>
      </button>

      {/* 右下角 Slide down to view more */}
      <motion.button
        onClick={scrollToNext}
        aria-label="向下滚动查看更多"
        className="absolute bottom-10 right-6 z-10 text-white/55 transition-colors hover:text-white sm:right-10"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em] sm:text-xs">
          Slide down to view more
        </span>
      </motion.button>
    </section>
  );
}
