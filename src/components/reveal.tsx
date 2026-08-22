'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
  once?: boolean;
}

/**
 * 滚动到视口时渐显上移的容器。
 * 用于第二屏及之后内容依次出现。
 */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
  duration = 0.7,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '0px 0px -12% 0px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
