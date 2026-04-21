"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Laptop,
  Wallet,
  Coffee,
  CheckCircle2,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const FACTS = [
  {
    icon: <CalendarDays size={18} />,
    label: "開催日",
    value: "2026年 4月27日 (月)",
  },
  { icon: <Clock size={18} />, label: "時間", value: "13:00 — 18:00 (5h)" },
  {
    icon: <MapPin size={18} />,
    label: "会場",
    value: "東京都渋谷区・貸会議室 (詳細はお申込後に)",
  },
  { icon: <Users size={18} />, label: "定員", value: "15名 (少人数制)" },
  {
    icon: <Laptop size={18} />,
    label: "持ち物",
    value: "ノートPC (Mac / Windows 問わず)",
  },
  {
    icon: <Wallet size={18} />,
    label: "参加費",
    value: "¥29,800 (税込・教材費込)",
  },
  {
    icon: <Coffee size={18} />,
    label: "懇親会",
    value: "希望者のみ・別途 3,500円",
  },
];

const INCLUDES = [
  "オリジナル教材 (PDF + 購入後もアップデート)",
  "当日使う実務サンプルファイル一式",
  "終了後30日間のチャットQ&Aサポート",
  "参加者限定のコミュニティ招待",
];

export function EventDetails() {
  return (
    <section
      id="details"
      className="relative py-24 md:py-32 border-t border-border/60"
    >
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-primary/5 to-transparent"
      />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="EVENT DETAILS"
          title={
            <>
              小さな会場で、
              <br className="hidden md:block" />
              一人ずつ見届けます。
            </>
          }
          description={
            <>
              オンライン動画ではなく、&ldquo;その場&rdquo;で詰まりを解消することを最優先。15名限定だから、講師が全員の画面を見て回れます。
            </>
          }
        />

        <div className="mt-14 grid lg:grid-cols-[1.2fr_1fr] gap-6">
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="rounded-2xl border border-border/80 bg-surface/60 p-6 md:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 py-3 border-b border-border/60 last:border-0"
                >
                  <span className="mt-0.5 inline-flex w-9 h-9 rounded-lg bg-primary/10 text-primary border border-primary/20 items-center justify-center">
                    {f.icon}
                  </span>
                  <div>
                    <dt className="text-muted text-[11px] tracking-[0.2em] font-mono uppercase">
                      {f.label}
                    </dt>
                    <dd className="mt-1 font-semibold text-[15.5px] leading-snug">
                      {f.value}
                    </dd>
                  </div>
                </div>
              ))}
            </div>
          </motion.dl>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.6,
              delay: 0.1,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className="relative rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/10 to-transparent p-6 md:p-8 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
            />
            <div className="relative">
              <div className="text-primary text-[11px] tracking-[0.2em] font-mono">
                INCLUDED
              </div>
              <h3 className="mt-2 font-display font-bold text-[22px] tracking-[-0.01em]">
                参加費にすべて含まれます
              </h3>
              <ul className="mt-5 space-y-3">
                {INCLUDES.map((it) => (
                  <li
                    key={it}
                    className="flex gap-2.5 text-[14.5px] text-foreground/85"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-primary shrink-0 mt-0.5"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-border/60">
                <div className="text-muted text-[11px] font-mono tracking-widest">
                  PRICE
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-display font-black text-[40px] tracking-[-0.03em]">
                    ¥29,800
                  </span>
                  <span className="text-muted text-[13px]">税込</span>
                </div>
                <a
                  href="#apply"
                  className="mt-5 inline-flex w-full justify-center items-center h-12 rounded-full bg-primary hover:bg-primary-bright text-background font-semibold transition-all"
                >
                  席を確保する
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
