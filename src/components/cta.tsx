"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const POINTS = [
  "定員15名・残席は公式にのみ反映",
  "お申し込み後3日以内にご案内を送付",
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] glow-orange pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
        className="relative mx-auto max-w-4xl px-5 md:px-8 text-center"
      >
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-primary text-xs font-mono tracking-widest">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          2026.04.27 / 残り数席
        </div>

        <h2 className="mt-6 font-display font-black tracking-[-0.02em] text-[38px] sm:text-[52px] md:text-[64px] leading-[1.08]">
          今年こそ、
          <br />
          <span className="gradient-text">AIに仕事を渡す側へ。</span>
        </h2>

        <p className="mt-6 max-w-xl mx-auto text-foreground/75 text-[15px] md:text-[17px] leading-[1.9]">
          &ldquo;気になるけど手が出せない&rdquo;は、今日で卒業できます。
          1日だけ予定を空けて、あなたの仕事道具をアップデートしませんか。
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="mailto:hello@claude-code-class.example.com?subject=%E7%94%B3%E3%81%97%E8%BE%BC%E3%81%BF%EF%BC%9AClaude%20Code%E6%95%99%E5%AE%A4%204%2F27"
            className="group inline-flex items-center gap-2 h-13 px-8 rounded-full bg-primary hover:bg-primary-bright text-background font-semibold transition-all hover:shadow-[0_20px_60px_-10px_rgba(224,123,82,0.6)]"
          >
            席を確保する
            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </a>
          <a
            href="#faq"
            className="inline-flex items-center h-13 px-8 rounded-full border border-border hover:border-foreground/40 transition-colors"
          >
            質問してから決める
          </a>
        </div>

        <ul className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px] text-muted">
          {POINTS.map((p) => (
            <li key={p} className="inline-flex items-center gap-2">
              <CheckCircle2 size={16} className="text-primary" />
              {p}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
