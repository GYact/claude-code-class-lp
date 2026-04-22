"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";
import { CURRICULUM_STEPS, EVENT } from "@/lib/event";

export function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow={`CURRICULUM / ${EVENT.duration}`}
          title="3時間でここまで進めます"
          description="設定、使い方、仕事への当てはめ方までを順番に確認します。"
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-[148px] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-border to-transparent"
          />
          <ol className="space-y-5">
            {CURRICULUM_STEPS.map((s, i) => (
              <motion.li
                key={s.chapter}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.08,
                  ease: [0.2, 0.8, 0.2, 1],
                }}
                className="relative grid md:grid-cols-[160px_1fr] gap-4 md:gap-8 items-start"
              >
                <div className="md:pt-6 flex md:block items-center gap-3">
                  <span className="md:block font-mono text-xs tracking-wider text-primary">
                    {s.time.split(" — ")[0]}
                    <span className="text-muted"> → </span>
                    {s.time.split(" — ")[1]}
                  </span>
                  <span
                    className="hidden md:flex mt-3 w-3 h-3 rounded-full bg-background border-2 border-primary relative z-10"
                    aria-hidden
                  />
                </div>
                <div className="rounded-2xl border border-border/80 bg-surface/92 p-6 transition-colors hover:border-primary/24 hover:bg-surface md:p-7">
                  <div className="text-muted text-[11px] font-mono tracking-[0.2em]">
                    {s.chapter}
                  </div>
                  <h3 className="mt-2 font-display text-[20px] font-bold leading-snug tracking-[-0.02em] md:text-[22px]">
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[14.5px] leading-[1.8] text-foreground/80"
                      >
                        <span
                          className="mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70"
                          aria-hidden
                        />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
