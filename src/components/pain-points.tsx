"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  {
    tag: "#01",
    title: "ChatGPT は使っているが、Claude Code はまだよく分からない",
    body: "『ターミナル』『環境構築』と聞くと難しそうで、自分の仕事でどう使うのかが見えない。",
  },
  {
    tag: "#02",
    title: "一度入れてみたが、設定の途中で止まった",
    body: "英語のエラーや設定ファイルで詰まり、そのまま触らなくなっている。",
  },
  {
    tag: "#03",
    title: "自分の仕事でどう使うのかを知りたい",
    body: "議事録、資料作成、調査整理、Excel整形など、日々の仕事でどこまで使えるのかを具体的に見たい。",
  },
  {
    tag: "#04",
    title: "チームで使う前に、まず自分で理解したい",
    body: "便利さだけでなく、安全に使うための考え方や運用のしかたも把握しておきたい。",
  },
];

export function PainPoints() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FOR YOU"
          title="こんな方に向いています"
          description={
            <>
              難しい話を増やすより、まずは使い始められる状態を作ることを重視しています。
            </>
          }
        />

        <div className="mt-14 grid md:grid-cols-2 gap-4 md:gap-5">
          {ITEMS.map((it, i) => (
            <motion.article
              key={it.tag}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.08,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/80 bg-surface/92 p-6 transition-colors hover:border-primary/20 hover:bg-surface md:p-7"
            >
              <div className="absolute -right-16 top-0 h-28 w-28 rounded-full bg-primary/6 blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center gap-3 font-mono text-xs tracking-widest text-primary">
                  <span className="h-2 w-2 rounded-full bg-primary" />
                  {it.tag}
                </div>
                <h3 className="mt-3 font-display text-[19px] font-bold leading-snug tracking-[-0.02em] md:text-[21px]">
                  {it.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.9] text-foreground/72">
                  {it.body}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
