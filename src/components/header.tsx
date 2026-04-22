"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { EVENT } from "@/lib/event";

const NAV = [
  { href: "#about", label: "講座について" },
  { href: "#curriculum", label: "当日の内容" },
  { href: "#details", label: "開催概要" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-xl bg-background/92 border-b-2 border-primary/12 shadow-[0_12px_40px_-28px_rgba(7,26,61,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative grid h-9 w-9 place-items-center rounded-lg border-2 border-primary bg-accent text-sm font-extrabold text-primary shadow-[0_14px_28px_-18px_rgba(239,199,84,0.65)]">
            CC
            <span className="absolute inset-0 rounded-lg ring-1 ring-primary/10" />
          </span>
          <span className="hidden sm:block">
            <span className="block font-display text-[15px] font-bold tracking-tight">
              {EVENT.title}
            </span>
            <span className="block text-[11px] text-muted">
              {EVENT.dateShort} / {EVENT.timeShort} / {EVENT.venue}
            </span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-primary/88">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="hover:text-foreground transition-colors relative after:absolute after:left-0 after:-bottom-1 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left after:h-px after:bg-primary"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#apply"
            className="hidden sm:inline-flex items-center gap-1.5 px-4 h-10 rounded-xl bg-danger hover:bg-danger-bright text-white font-bold text-sm transition-all hover:shadow-[0_18px_38px_-22px_rgba(201,31,38,0.6)]"
          >
            参加を申し込む
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-lg border-2 border-primary/14 bg-surface/90"
            aria-label="メニュー"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t-2 border-primary/12 bg-background/95 backdrop-blur">
          <nav className="flex flex-col px-5 py-4 gap-3 text-sm">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="py-2 text-foreground/80 hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-danger text-white font-bold"
            >
              参加を申し込む
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
