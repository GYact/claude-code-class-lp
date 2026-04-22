"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  MapPin,
  Users,
} from "lucide-react";
import { TerminalDemo } from "./terminal-demo";
import { EVENT } from "@/lib/event";

const FACTS = [
  {
    icon: <Calendar size={18} />,
    label: "日時",
    value: `${EVENT.dateShort} / ${EVENT.timeShort}`,
  },
  {
    icon: <MapPin size={18} />,
    label: "会場",
    value: "渋谷駅周辺の会場",
  },
  {
    icon: <Users size={18} />,
    label: "定員",
    value: "少人数制",
  },
] as const;

const POINTS = [
  "資料作成、要約、データ整理の仕事で使い方を確認",
  "設定から始めるので、未経験でも参加しやすい内容",
  "仕事で安全に使うための考え方も説明",
] as const;

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b-2 border-primary/12 pb-16 pt-24 md:pb-20 md:pt-32"
    >
      <div aria-hidden className="absolute inset-0 grid-bg pointer-events-none" />
      <div
        aria-hidden
        className="absolute inset-0 noise-bg opacity-[0.12] mix-blend-multiply pointer-events-none"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="overflow-hidden rounded-[32px] border-2 border-primary bg-surface shadow-[0_28px_90px_-48px_rgba(7,26,61,0.45)]">
          <div className="navy-band flex flex-wrap items-center justify-between gap-3 px-6 py-4 text-white md:px-8">
            <p className="text-sm font-bold tracking-[0.02em] md:text-base">
              AIを味方にして、仕事のスピードを上げるための講座です。
            </p>
            <div className="rounded-bl-[28px] rounded-tr-[20px] bg-accent px-4 py-3 text-right text-primary shadow-[0_14px_30px_-22px_rgba(239,199,84,0.85)]">
              <div className="text-[11px] font-bold tracking-[0.08em]">
                TARGET
              </div>
              <div className="text-[16px] font-black md:text-[20px]">
                25-45歳向け
              </div>
            </div>
          </div>

          <div className="grid gap-10 px-6 py-8 md:px-8 md:py-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="inline-flex items-center border-b-[3px] border-primary pb-2 text-[18px] font-black tracking-[0.02em] text-primary md:text-[24px]"
              >
                未経験でも参加できます
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="mt-7 font-display text-[56px] font-black leading-[0.96] tracking-[-0.06em] text-primary sm:text-[72px] md:text-[88px]"
              >
                Claude Code
              </motion.h1>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-5 flex flex-wrap gap-3"
              >
                <span className="border-[3px] border-primary px-5 py-2 font-display text-[46px] font-black leading-none tracking-[-0.06em] text-primary sm:text-[58px]">
                  入門
                </span>
                <span className="border-[3px] border-primary px-5 py-2 font-display text-[46px] font-black leading-none tracking-[-0.06em] text-primary sm:text-[58px]">
                  講座
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="navy-band mt-7 inline-flex max-w-[720px] px-5 py-4 text-[18px] font-black leading-snug text-white md:text-[24px]"
              >
                AIに指示するだけで、日々の仕事が早くなる。
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 max-w-[640px] text-[15px] leading-[1.95] text-foreground/82 md:text-[17px]"
              >
                ChatGPT は使っているけれど、Claude Code はまだよく分からない。
                そんな方向けに、設定から基本の使い方までを対面で進めます。
                仕事でどう使うかも、実例を見ながら確認します。
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.25 }}
                className="mt-6 space-y-3"
              >
                {POINTS.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-[15px] font-semibold text-primary md:text-[17px]"
                  >
                    <CheckCircle2
                      size={22}
                      className="mt-0.5 shrink-0 text-accent"
                    />
                    <span>{point}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap items-center gap-3"
              >
                <a
                  href="#apply"
                  className="group inline-flex h-13 items-center gap-2 rounded-2xl bg-danger px-7 font-bold text-white shadow-[0_22px_42px_-24px_rgba(201,31,38,0.75)] transition-all hover:bg-danger-bright"
                >
                  今すぐ申し込む
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </a>
                <a
                  href="#curriculum"
                  className="inline-flex h-13 items-center rounded-2xl border-2 border-primary px-6 font-bold text-primary transition-colors hover:bg-primary hover:text-white"
                >
                  詳細を見る
                </a>
              </motion.div>
            </div>

            <div className="relative">
              <div className="absolute right-0 top-0 z-10 rounded-full bg-accent px-6 py-8 text-center text-primary shadow-[0_20px_40px_-18px_rgba(239,199,84,0.85)]">
                <div className="flex justify-center">
                  <Users size={26} />
                </div>
                <div className="mt-2 text-[15px] font-black leading-snug">
                  少人数制で
                  <br />
                  しっかり学べる
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="rounded-[30px] border-2 border-primary bg-white/90 p-4 shadow-[0_28px_70px_-44px_rgba(7,26,61,0.48)]"
              >
                <TerminalDemo />
              </motion.div>
            </div>
          </div>

          <div className="navy-band grid gap-px border-t-2 border-primary/80 md:grid-cols-3">
            {FACTS.map((fact) => (
              <HeroFact key={fact.label} {...fact} />
            ))}
          </div>
        </div>

        <LogoMarquee />
      </div>
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
    <div className="flex items-start gap-4 bg-primary px-6 py-5 text-white md:min-h-[112px]">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/25 bg-white/6 text-accent">
        {icon}
      </span>
      <div>
        <div className="text-[14px] font-bold text-white/78">{label}</div>
        <div className="mt-1 text-[19px] font-black leading-snug md:text-[24px]">
          {value}
        </div>
      </div>
    </div>
  );
}

function LogoMarquee() {
  const items = [
    "議事録",
    "資料作成",
    "要約",
    "調査整理",
    "Excel整形",
    "設定方法",
    "安全な使い方",
    "仕事での使い方",
  ];
  const row = [...items, ...items];

  return (
    <div className="navy-band relative mt-8 overflow-hidden rounded-2xl border border-primary px-6 py-4">
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee flex w-max gap-8 text-[13px] font-bold tracking-[0.06em] text-accent">
          {row.map((item, index) => (
            <span key={index} className="flex items-center gap-8 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-white/30">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
