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
    <section
      id="apply"
      className="navy-band relative overflow-hidden py-24 text-white md:py-32"
    >
      <div
        aria-hidden
        className="absolute inset-0 noise-bg opacity-[0.12] pointer-events-none"
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
        className="relative mx-auto grid max-w-7xl gap-10 px-5 md:px-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-start"
      >
        <div className="lg:pt-4">
          <div className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-xs font-mono tracking-widest text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-danger" />
            {EVENT.dateDot} / {EVENT.timeShort}
          </div>

          <h2 className="mt-6 font-display text-[38px] font-black leading-[1.05] tracking-[-0.05em] text-white sm:text-[54px] md:text-[62px]">
            お申し込みは、
            <br />
            <span className="text-accent">こちらからお願いします。</span>
          </h2>

          <p className="mt-6 max-w-[34rem] text-[15px] leading-[1.95] text-white/82 md:text-[17px]">
            フォーム送信後、3日以内に会場や当日の流れをご案内します。
            少人数開催のため、参加をご希望の方はお早めにどうぞ。
          </p>

          <ul className="mt-8 space-y-3 text-[14px] text-white/82">
            {POINTS.map((p) => (
              <li key={p} className="inline-flex items-center gap-2">
                <CheckCircle2 size={16} className="text-accent" />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-10 inline-flex rounded-[24px] bg-white px-6 py-4 text-primary shadow-[0_18px_40px_-28px_rgba(0,0,0,0.55)]">
            <p className="text-[20px] font-black leading-snug">
              定員に限りがありますので、
              <br />
              お早めにお申し込みください。
            </p>
          </div>
        </div>

        <div className="rounded-[30px] border-2 border-accent bg-surface p-6 shadow-[0_28px_60px_-42px_rgba(0,0,0,0.55)] md:p-8">
          <ApplyForm />
        </div>
      </motion.div>
    </section>
  );
}
