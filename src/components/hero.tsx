"use client";

import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock3, MapPin, Users } from "lucide-react";
import { TerminalDemo } from "./terminal-demo";
import { EVENT } from "@/lib/event";

const FACTS = [
  {
    icon: <Calendar size={16} />,
    label: "開催日",
    value: EVENT.dateShort,
  },
  {
    icon: <Clock3 size={16} />,
    label: "時間",
    value: EVENT.timeShort,
  },
  {
    icon: <MapPin size={16} />,
    label: "会場",
    value: EVENT.venue,
  },
  {
    icon: <Users size={16} />,
    label: "定員",
    value: EVENT.capacityShort,
  },
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border/60 pb-20 pt-28 md:pb-24 md:pt-36"
    >
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 noise-bg opacity-[0.18] mix-blend-multiply pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[840px] w-[840px] -translate-x-1/2 glow-orange pointer-events-none"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex flex-wrap items-center gap-2 rounded-full border border-primary/10 bg-surface/90 px-4 py-2 text-[12px] text-foreground/78 shadow-[0_20px_40px_-30px_rgba(23,34,45,0.45)]"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            {EVENT.dateDot} <span className="text-muted">{EVENT.weekdayEn}</span>
            <span className="text-muted">/</span>
            {EVENT.timeShort}
            <span className="text-muted">/</span>
            渋谷開催・少人数
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-7 text-balance font-display text-[44px] font-extrabold leading-[1.02] tracking-[-0.05em] sm:text-[56px] md:text-[68px] lg:text-[74px]"
          >
            Claude Codeを、
            <br />
            <span className="gradient-text">仕事で使うための3時間。</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-[620px] text-[15px] leading-[1.95] text-foreground/74 md:text-[17px]"
          >
            ChatGPT は使っているけれど、
            <span className="font-medium text-foreground"> Claude Code </span>
            はまだよく分からない。
            <br className="hidden md:block" />
            そんな方向けに、設定から基本の使い方までを対面で進めます。
            議事録、資料作成、調査整理などの仕事でどう使うかも、実例を交えて確認します。
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#apply"
              className="group inline-flex h-12 items-center gap-2 rounded-full bg-primary px-6 font-semibold text-white transition-all hover:bg-primary-bright hover:shadow-[0_24px_44px_-28px_rgba(24,49,77,0.58)] md:h-13"
            >
              申し込む
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#curriculum"
              className="inline-flex h-12 items-center gap-2 rounded-full border border-border bg-surface/80 px-6 text-foreground/90 transition-colors hover:border-primary/30 hover:text-foreground md:h-13"
            >
              当日の内容を見る
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[13px] text-muted"
          >
            <span>対象: 事業開発 / 営業企画 / マーケ / PM / 管理部門</span>
            <span>形式: 自分のPCを使って進めます</span>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="mt-10 grid max-w-[620px] grid-cols-2 gap-3 md:gap-4"
          >
            {FACTS.map((fact) => (
              <HeroFact key={fact.label} {...fact} />
            ))}
          </motion.dl>
        </div>

        <div className="relative">
          <div
            aria-hidden
            className="absolute -inset-6 rounded-[36px] bg-white/55 blur-3xl"
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
    <div className="rounded-2xl border border-border/80 bg-surface/90 p-4 shadow-[0_18px_38px_-32px_rgba(23,34,45,0.45)] backdrop-blur">
      <div className="flex items-center gap-2 text-[11px] text-muted">
        <span className="text-primary">{icon}</span>
        <span>{label}</span>
      </div>
      <div className="mt-1.5 text-[15px] font-semibold">{value}</div>
    </div>
  );
}

function LogoMarquee() {
  const items = [
    "議事録",
    "調査整理",
    "資料作成",
    "メール下書き",
    "Excel整形",
    "設定方法",
    "定型作業のまとめ方",
    "安全な使い方",
  ];
  const row = [...items, ...items];

  return (
    <div className="relative mx-auto mt-20 max-w-7xl px-5 md:px-8">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex w-max gap-10 text-[13px] text-muted">
          {row.map((item, index) => (
            <span key={index} className="flex items-center gap-10 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-border">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
