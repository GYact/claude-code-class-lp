"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { ApplyForm } from "./apply-form";
import { EVENT } from "@/lib/event";

const POINTS = [
  "定員15名",
  "お申し込み後3日以内に詳細をご案内",
  "5日前までキャンセル無料",
];

export function CTA() {
  return (
    <section id="apply" className="relative py-24 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 grid-bg opacity-60 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 glow-orange pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mx-auto max-w-4xl text-center px-5 md:px-8"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/14 bg-surface/86 px-3.5 py-1.5 text-xs font-mono tracking-widest text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {EVENT.dateDot} / {EVENT.timeShort}
        </div>

        <h2 className="mt-6 font-display text-[38px] font-extrabold leading-[1.06] tracking-[-0.04em] sm:text-[52px] md:text-[64px]">
          参加をご希望の方は、
          <br />
          <span className="gradient-text">こちらからお申し込みください。</span>
        </h2>

        <p className="mx-auto mt-6 max-w-xl text-[15px] leading-[1.9] text-foreground/75 md:text-[17px]">
          設定、基本の使い方、仕事での使いどころまでを3時間で確認します。
          <br className="hidden md:block" />
          フォーム送信後、3日以内に当日の詳細をご案内します。
        </p>

        <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-muted">
          {POINTS.map((p) => (
            <li key={p} className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" />
              {p}
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <ApplyForm />
        </div>
      </motion.div>
    </section>
  );
}
