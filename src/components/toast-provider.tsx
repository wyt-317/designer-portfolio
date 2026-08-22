'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Check, Link2, Mail, Phone } from 'lucide-react';
import { createContext, useCallback, useContext, useState, type ReactNode } from 'react';

type ToastType = 'success' | 'info' | 'email' | 'phone' | 'link';

interface ToastItem {
  id: number;
  message: string;
  type: ToastType;
}

interface ToastContextValue {
  showToast: (message: string, type?: ToastType) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

const ICON_MAP: Record<ToastType, typeof Check> = {
  success: Check,
  info: Check,
  email: Mail,
  phone: Phone,
  link: Link2,
};

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback((message: string, type: ToastType = 'success') => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 2400);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="fixed bottom-6 left-1/2 z-[200] flex -translate-x-1/2 flex-col items-center gap-2 pointer-events-none">
        <AnimatePresence>
          {toasts.map((t) => {
            const Icon = ICON_MAP[t.type] ?? Check;
            return (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 16, scale: 0.92 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.95 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-[#1a1a1e]/95 px-5 py-2.5 text-sm font-medium text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl"
              >
                <Icon className="h-4 w-4 text-white/80" />
                <span>{t.message}</span>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}
