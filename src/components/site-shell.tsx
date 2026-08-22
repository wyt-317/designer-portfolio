'use client';

import { useState, type ReactNode } from 'react';
import { Navbar } from './navbar';
import { ToastProvider } from './toast-provider';

export function SiteShell({ children }: { children: ReactNode }) {
  // 预留全局状态
  useState(false);
  return (
    <ToastProvider>
      <Navbar />
      {children}
    </ToastProvider>
  );
}
