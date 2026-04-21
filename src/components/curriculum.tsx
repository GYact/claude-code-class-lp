"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const STEPS = [
  {
    time: "13:00 — 13:40",
    chapter: "CHAPTER 01",
    title: "セットアップと「はじめての対話」",
    points: [
      "Mac / Windows でのインストール（ここで詰まる方が一番多い）",
      "ログイン・料金プランの整理（無料枠と有料プランの違い）",
      "はじめての指示出し。「何を任せると嬉しいのか」を体感",
    ],
  },
  {
    time: "13:50 — 15:00",
    chapter: "CHAPTER 02",
    title: "自分のPCで「実作業」をやってもらう",
    points: [
      "議事録 / 企画書 / Excel の整形——業務ファイルで手を動かす",
      "AIが「勝手に進めない」ための権限設定を体得",
      "上手くいかない時の聞き方・やり直し方",
    ],
  },
  {
    time: "15:15 — 16:30",
    chapter: "CHAPTER 03",
    title: "あなた専用の「仕事道具」にする",
    points: [
      "CLAUDE.md で「あなたの流儀」を覚えさせる",
      "スラッシュコマンドで定型業務を1コマンド化",
      "MCPサーバー連携で、Slack / GitHub / DB にまで手を伸ばす",
    ],
  },
  {
    time: "16:45 — 18:00",
    chapter: "CHAPTER 04",
    title: "明日から使えるワークフローを持ち帰る",
    points: [
      "1週間の業務から3つ、Claude Code に任せる仕事を決める",
      "チーム導入時のガイドライン（セキュリティ・権限・コスト）",
      "Q&A・個別相談タイム",
    ],
  },
];

export function Curriculum() {
  return (
    <section id="curriculum" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="CURRICULUM / 5H"
          title={
            <>
              その日のうちに、
              <br className="hidden md:block" />
              「明日から使える」状態へ。
            </>
          }
          description={
            <>
              座学ではなく、&ldquo;あなたのPCで、あなたの仕事で動く&rdquo;ことをゴールに据えた4チャプター構成です。
            </>
          }
        />

        <div className="mt-16 relative">
          <div
            aria-hidden
            className="hidden md:block absolute left-[148px] top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-border to-transparent"
          />
          <ol className="space-y-5">
            {STEPS.map((s, i) => (
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
                <div className="rounded-2xl border border-border/80 bg-surface/60 p-6 md:p-7 hover:bg-surface transition-colors">
                  <div className="text-muted text-[11px] font-mono tracking-[0.2em]">
                    {s.chapter}
                  </div>
                  <h3 className="mt-2 font-display font-bold text-[20px] md:text-[22px] leading-snug tracking-[-0.01em]">
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex gap-3 text-[14.5px] text-foreground/80 leading-[1.8]"
                      >
                        <span
                          className="mt-2 block w-1.5 h-1.5 rounded-full bg-primary/70 shrink-0"
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
