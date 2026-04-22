"use client";

import { motion } from "framer-motion";
import {
  CalendarDays,
  Clock,
  MapPin,
  Users,
  Laptop,
  Wallet,
  CheckCircle2,
  BriefcaseBusiness,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { EVENT } from "@/lib/event";

const FACTS = [
  {
    icon: <CalendarDays size={18} />,
    label: "開催日",
    value: EVENT.dateLong,
  },
  { icon: <Clock size={18} />, label: "時間", value: `${EVENT.time} (${EVENT.duration})` },
  {
    icon: <MapPin size={18} />,
    label: "会場",
    value: EVENT.venueDetails,
  },
  { icon: <Users size={18} />, label: "定員", value: EVENT.capacity },
  {
    icon: <BriefcaseBusiness size={18} />,
    label: "対象",
    value: "事業開発 / 営業企画 / マーケ / PM / 管理部門",
  },
  {
    icon: <Laptop size={18} />,
    label: "持ち物",
    value: "ノートPC (Mac / Windows 問わず)",
  },
  {
    icon: <Wallet size={18} />,
    label: "参加費",
    value: `${EVENT.price} 先行価格 (通常 ${EVENT.regularPrice})`,
  },
];

const INCLUDES = [
  "オリジナル教材 (PDF + 後日アップデート配布)",
  "当日使う実務サンプルファイル一式",
  "終了後30日間のチャットQ&Aサポート",
  "参加者限定のフォローアップ資料",
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
          title="少人数なので、つまずいたところをその場で見られます。"
          titleWidth="max-w-[18ch] md:max-w-[20ch]"
          descriptionWidth="max-w-[60ch]"
          description={
            <>
              15名限定で、講師が全員の画面を見て回ります。オンライン動画のように置いていかれにくい形式です。
            </>
          }
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
            className="navy-band rounded-[28px] border-2 border-primary/90 p-6 text-white shadow-[0_24px_48px_-40px_rgba(7,26,61,0.45)] md:p-8"
          >
            <div className="grid grid-cols-1 gap-4 xl:grid-cols-2 xl:gap-x-6 xl:gap-y-5">
              {FACTS.map((f) => (
                <div
                  key={f.label}
                  className="rounded-2xl border border-white/12 bg-white/[0.03] p-4"
                >
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/18 bg-white/6 text-accent">
                    {f.icon}
                  </span>
                  <div className="mt-3">
                    <dt className="text-[11px] font-mono uppercase tracking-[0.2em] text-white/62">
                      {f.label}
                    </dt>
                    <dd className="mt-2 max-w-[24ch] text-[15px] font-semibold leading-[1.7] text-white xl:max-w-none">
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
            className="relative overflow-hidden rounded-[28px] border-2 border-accent bg-gradient-to-b from-[#fff7e7] to-[#f2e6cf] p-6 shadow-[0_24px_48px_-38px_rgba(239,199,84,0.45)] md:p-8"
          >
            <div
              aria-hidden
              className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/26 blur-3xl"
            />
            <div className="relative">
              <div className="text-[11px] font-mono tracking-[0.2em] text-primary">
                INCLUDED
              </div>
              <h3 className="mt-2 font-display text-[24px] font-black tracking-[-0.03em] text-primary">
                参加費に含まれるもの
              </h3>
              <ul className="mt-5 space-y-3.5">
                {INCLUDES.map((it) => (
                  <li
                    key={it}
                    className="flex gap-2.5 text-[14.5px] text-foreground/88"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-danger"
                    />
                    <span>{it}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9 border-t-2 border-primary/10 pt-7">
                <div className="flex items-center justify-between gap-2">
                  <div className="text-muted text-[11px] font-mono tracking-widest">
                    PRICE
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-2.5 py-1 text-[11px] font-bold tracking-wider text-white">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
                    {EVENT.earlyBirdBadge}
                  </span>
                </div>

                <div className="mt-4 flex items-baseline gap-3 text-muted">
                  <span className="text-[13px]">通常価格</span>
                  <span className="relative font-display font-semibold text-[18px] tracking-[-0.02em]">
                    <span className="line-through decoration-[1.5px]">
                      {EVENT.regularPrice}
                    </span>
                  </span>
                </div>

                <div className="mt-2 flex items-baseline gap-2.5">
                  <span className="font-display text-[52px] font-black leading-none tracking-[-0.04em] text-danger md:text-[58px]">
                    {EVENT.price}
                  </span>
                  <span className="text-muted text-[13px]">税込</span>
                </div>

                <div className="mt-4 flex items-start gap-2 text-[12.5px] leading-[1.75] text-foreground/70">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-accent-strong" />
                  <span>{EVENT.earlyBirdNote}</span>
                </div>

                <a
                  href="#apply"
                  className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-danger font-bold text-white transition-all hover:bg-danger-bright hover:shadow-[0_20px_44px_-26px_rgba(201,31,38,0.6)]"
                >
                  申し込む
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
