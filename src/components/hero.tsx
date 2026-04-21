"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Users } from "lucide-react";
import { TerminalDemo } from "./terminal-demo";

export function Hero() {
  return (
    <section id="top" className="relative pt-28 md:pt-36 pb-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 grid-bg pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-0 noise-bg opacity-[0.25] mix-blend-overlay pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] glow-orange pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-16 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 backdrop-blur px-3.5 py-1.5 text-xs md:text-[13px] text-foreground/80"
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            2026.04.27 <span className="text-muted">MON</span>
            <span className="text-muted mx-1">/</span>
            対面・定員15名
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display font-black leading-[1.08] tracking-[-0.02em] text-[44px] sm:text-[56px] md:text-[68px] lg:text-[76px]"
          >
            <span className="block">&ldquo;コードを書く&rdquo;が、</span>
            <span className="block gradient-text">変わる一日。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-[560px] text-[15px] md:text-[17px] leading-[1.9] text-foreground/75"
          >
            ChatGPTは触った。でも
            <span className="text-foreground">Claude Code</span>
            は難しそうで踏み出せていない——。
            <br className="hidden md:block" />
            そんな30〜40代のビジネスパーソンのために、環境構築から
            <span className="text-foreground">
              &ldquo;自分の仕事で使える&rdquo;
            </span>
            レベルまで、対面でじっくり伴走する1Dayクラスです。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#apply"
              className="group inline-flex items-center gap-2 h-12 md:h-13 px-6 rounded-full bg-primary hover:bg-primary-bright text-background font-semibold transition-all hover:shadow-[0_20px_60px_-10px_rgba(224,123,82,0.6)]"
            >
              席を確保する
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 h-12 md:h-13 px-6 rounded-full border border-border hover:border-foreground/40 text-foreground/90 hover:text-foreground transition-colors"
            >
              どんな講座？
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 grid grid-cols-3 gap-4 max-w-[540px]"
          >
            <HeroFact
              icon={<Calendar size={16} />}
              label="開催日"
              value="4/27 (月)"
            />
            <HeroFact
              icon={<MapPin size={16} />}
              label="会場"
              value="東京・渋谷"
            />
            <HeroFact icon={<Users size={16} />} label="定員" value="15 名" />
          </motion.dl>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[32px] bg-primary/10 blur-3xl"
          />
          <TerminalDemo />
        </div>
      </div>

      <LogoMarquee />
    </section>
  );
}

function HeroFact({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border/70 bg-surface/50 backdrop-blur p-3.5">
      <div className="flex items-center gap-1.5 text-muted text-[11px]">
        {icon}
        <span>{label}</span>
      </div>
      <div className="mt-1 font-semibold text-[15px]">{value}</div>
    </div>
  );
}

function LogoMarquee() {
  const items = [
    "Anthropic Claude",
    "macOS / Windows 対応",
    "日本語サポート",
    "未経験OK",
    "少人数制",
    "対面サポート",
    "懇親会あり",
    "オリジナル教材",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative mt-20 mx-auto max-w-7xl px-5 md:px-8">
      <div className="relative overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
        <div className="flex gap-10 marquee w-max text-muted text-[13px] font-mono">
          {row.map((t, i) => (
            <span
              key={i}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <span>{t}</span>
              <span className="text-border">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
