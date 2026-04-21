"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
          ? "backdrop-blur-xl bg-background/70 border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-primary to-[#c45c3a] grid place-items-center text-background font-black text-sm shadow-lg shadow-primary/30">
            CC
            <span className="absolute inset-0 rounded-lg ring-1 ring-white/10" />
          </span>
          <span className="font-display font-bold tracking-tight text-[15px] hidden sm:block">
            Claude Code 教室
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
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
            className="hidden sm:inline-flex items-center gap-1.5 px-4 h-10 rounded-full bg-primary hover:bg-primary-bright text-background font-semibold text-sm transition-all hover:shadow-lg hover:shadow-primary/30"
          >
            申し込む
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden w-10 h-10 grid place-items-center rounded-lg border border-border"
            aria-label="メニュー"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur">
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
              className="mt-2 inline-flex justify-center items-center h-11 rounded-full bg-primary text-background font-semibold"
            >
              申し込む
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
