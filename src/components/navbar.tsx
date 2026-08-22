"use client";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronLeft, Mail, MessageCircle, Phone, Share2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { CONTACT, PORTFOLIO_PDF, RESUME_PDF } from "@/lib/data";
import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { useToast } from "@/components/toast-provider";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const NAV_LINKS = [{
    label: "首页",
    href: "/"
}, {
    label: "项目",

    children: [{
        label: "UC小说 · C端体验设计",
        href: "/projects/uc"
    }, {
        label: "猫耳FM · 游戏化运营设计",
        href: "/projects/maoer"
    }]
}, {
    label: "关于我",
    href: "/about"
}, {
    label: "简历",

    children: [{
        label: "下载 作品集 PDF",
        href: PORTFOLIO_PDF,
        external: true
    }, {
        label: "下载 个人简历 PDF",
        href: RESUME_PDF,
        external: true
    }]
}];

function DropdownItem(
    {
        label,
        href,
        external,
        onClick
    }: {
        label: string;
        href: string;
        external?: boolean;
        onClick?: () => void;
    }
) {
    const className = "block w-full rounded-lg px-3 py-2 text-left text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white";

    if (external) {
        return (
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                onClick={onClick}>
                {label}
            </a>
        );
    }

    return (
        <Link href={href} className={className} onClick={onClick}>
            {label}
        </Link>
    );
}

export function Navbar() {
    const pathname = usePathname();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const copy = useCopyToClipboard();

    const {
        showToast
    } = useToast();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();

        window.addEventListener("scroll", onScroll, {
            passive: true
        });

        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleMouseEnter = (label: string) => {
        if (closeTimer.current)
            clearTimeout(closeTimer.current);

        setOpenMenu(label);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setOpenMenu(null), 120);
    };

    const handleCopy = async (text: string, message: string, type: "email" | "phone" | "link") => {
        const ok = await copy(text);

        if (ok)
            showToast(message, type);
    };

    const handleShare = async () => {
        const url = typeof window !== "undefined" ? window.location.href : "";
        await handleCopy(url, "链接已复制", "link");
    };

    const isActive = (href: string) => pathname === href;
    const isHome = pathname === "/";

    return (
        <header
            className={`fixed inset-x-0 top-0 z-50 px-3 py-3 transition-all duration-500 sm:px-6 ${scrolled ? "py-2" : "py-4"}`}>
            <div
                className={`mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/[0.06] bg-black/50 px-3 py-2 backdrop-blur-xl transition-all duration-500 sm:px-4 ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.4)]" : "shadow-[0_4px_24px_rgba(0,0,0,0.2)]"}`}>
                {}
                <Link
                    href="/"
                    className="group flex items-center gap-2.5 pl-1"
                    aria-label="返回首页">
                    <span
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-sm font-bold tracking-tight text-white transition-all group-hover:border-white/20 group-hover:bg-white/[0.08]">
                        {isHome ? "T" : <ChevronLeft className="h-4 w-4" />}
                    </span>
                    <span className="text-sm font-semibold tracking-tight text-white/90">Portfolio</span>
                </Link>
                {}
                <nav className="hidden items-center gap-0.5 md:flex">
                    {NAV_LINKS.map(item => {
                        if ("children" in item && item.children) {
                            const isOpen = openMenu === item.label;

                            return (
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => handleMouseEnter(item.label)}
                                    onMouseLeave={handleMouseLeave}>
                                    <button
                                        className="flex items-center gap-1 rounded-full px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white">
                                        {item.label}
                                        <ChevronDown
                                            className={`h-3.5 w-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && <motion.div
                                            initial={{
                                                opacity: 0,
                                                y: 6,
                                                scale: 0.97
                                            }}
                                            animate={{
                                                opacity: 1,
                                                y: 0,
                                                scale: 1
                                            }}
                                            exit={{
                                                opacity: 0,
                                                y: 4,
                                                scale: 0.98
                                            }}
                                            transition={{
                                                duration: 0.16,
                                                ease: [0.22, 1, 0.36, 1]
                                            }}
                                            className="absolute left-1/2 top-full mt-2 w-60 -translate-x-1/2 rounded-2xl border border-white/[0.08] bg-[#141418]/95 p-1.5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
                                            {item.children.map(child => <DropdownItem
                                                key={child.label}
                                                label={child.label}
                                                href={child.href}
                                                external={"external" in child ? child.external : false}
                                                onClick={() => setOpenMenu(null)} />)}
                                        </motion.div>}
                                    </AnimatePresence>
                                </div>
                            );
                        }

                        const active = isActive(item.href);

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${active ? "text-white" : "text-white/60 hover:text-white"}`}>
                                {item.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/#contact"
                        className="rounded-full px-4 py-1.5 text-sm font-medium text-white/60 transition-colors hover:text-white">联系我
                                  </Link>
                </nav>
                {}
                <div
                    className="flex items-center gap-1 rounded-full border border-white/[0.06] bg-white/[0.03] p-1">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button
                                className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/5 hover:text-white"
                                aria-label="微信">
                                <MessageCircle className="h-4 w-4" />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent
                            side="bottom"
                            align="end"
                            className="w-60 rounded-2xl border-white/[0.08] bg-[#141418]/95 p-4 text-white backdrop-blur-2xl">
                            <div className="flex flex-col items-center gap-3">
                                <div
                                    className="overflow-hidden rounded-xl bg-white p-2 shadow-[0_8px_30px_-10px_rgba(255,255,255,0.3)]">
                                    <img
                                        src="/wechat-qr.jpg"
                                        alt="微信二维码"
                                        width={128}
                                        height={128}
                                        className="h-32 w-32 object-contain"
                                        loading="lazy" />
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-white/50">微信扫码添加</p>
                                    <p className="mt-1 text-sm font-medium">{CONTACT.wechat}</p>
                                </div>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/5 hover:text-white"
                        aria-label="邮箱"
                        onClick={() => handleCopy(CONTACT.email, "邮箱已复制", "email")}>
                        <Mail className="h-4 w-4" />
                    </button>
                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/5 hover:text-white"
                        aria-label="电话"
                        onClick={() => {
                            if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
                                window.location.href = `tel:${CONTACT.phone}`;
                            } else {
                                handleCopy(CONTACT.phone, "电话号码已复制", "phone");
                            }
                        }}>
                        <Phone className="h-4 w-4" />
                    </button>
                    <button
                        className="flex h-8 w-8 items-center justify-center rounded-full text-white/60 transition-all hover:bg-white/5 hover:text-white"
                        aria-label="分享"
                        onClick={handleShare}>
                        <Share2 className="h-4 w-4" />
                    </button>
                    {}
                    <button
                        className="ml-1 flex h-8 w-8 items-center justify-center rounded-full text-white/70 md:hidden"
                        aria-label="菜单"
                        onClick={() => setMobileOpen(v => !v)}>
                        <div className="flex flex-col gap-1">
                            <span
                                className={`block h-px w-4 bg-white transition-all ${mobileOpen ? "translate-y-[5px] rotate-45" : ""}`} />
                            <span
                                className={`block h-px w-4 bg-white transition-all ${mobileOpen ? "opacity-0" : ""}`} />
                            <span
                                className={`block h-px w-4 bg-white transition-all ${mobileOpen ? "-translate-y-[5px] -rotate-45" : ""}`} />
                        </div>
                    </button>
                </div>
            </div>
            {}
            <AnimatePresence>
                {mobileOpen && <motion.div
                    initial={{
                        opacity: 0,
                        y: -8
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    exit={{
                        opacity: 0,
                        y: -8
                    }}
                    transition={{
                        duration: 0.2
                    }}
                    className="mx-auto mt-2 max-w-7xl overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101013]/95 p-2 backdrop-blur-2xl md:hidden">
                    {NAV_LINKS.map(item => {
                        if ("children" in item && item.children) {
                            return (
                                <div key={item.label} className="border-b border-white/5 py-1 last:border-0">
                                    <div className="px-3 py-2 text-xs uppercase tracking-wider text-white/40">{item.label}</div>
                                    {item.children.map(child => <DropdownItem
                                        key={child.label}
                                        label={child.label}
                                        href={child.href}
                                        external={"external" in child ? child.external : false}
                                        onClick={() => setMobileOpen(false)} />)}
                                </div>
                            );
                        }

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setMobileOpen(false)}
                                className="block rounded-lg px-3 py-2.5 text-sm text-white/80 hover:bg-white/5">
                                {item.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="/#contact"
                        onClick={() => setMobileOpen(false)}
                        className="mt-1 block rounded-lg bg-white px-3 py-2.5 text-center text-sm font-medium text-black">联系我
                                    </Link>
                </motion.div>}
            </AnimatePresence>
        </header>
    );
}