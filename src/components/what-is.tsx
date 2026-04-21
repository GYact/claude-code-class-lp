"use client";

import { motion } from "framer-motion";
import {
  Terminal,
  Sparkles,
  FolderTree,
  GitBranch,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { SectionHeading } from "./section-heading";

const FEATURES = [
  {
    icon: <Terminal size={20} />,
    title: "あなたのPCの中で動く",
    body: "ChatGPTとは違い、お手元のMac/Windowsで動作。ファイルを読み、書き、コマンドを実行——まさに「隣に座ったアシスタント」のように仕事してくれます。",
  },
  {
    icon: <Sparkles size={20} />,
    title: "Anthropic 公式のCLI",
    body: "Claude (Opus / Sonnet)を開発するAnthropicが提供する公式ツール。対話しながら、安全に、長い思考を伴う作業まで任せられます。",
  },
  {
    icon: <FolderTree size={20} />,
    title: "プロジェクトごと理解する",
    body: "単発の質問で終わりません。フォルダ全体・過去のやり取り・あなたのスタイルを覚えて、文脈を踏まえた成果物を出してくれます。",
  },
  {
    icon: <Workflow size={20} />,
    title: "決まった作業を「スラッシュコマンド」化",
    body: "毎週の議事録要約、レポート整形、データ集計…。よくやる作業は1コマンドに畳んで、チームで共有できます。",
  },
  {
    icon: <GitBranch size={20} />,
    title: "Gitや外部ツールと連携",
    body: "バージョン管理・GitHub・各種MCPサーバーと連動。コーディング以外の事務作業・調査・分析も一気通貫で任せられます。",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "権限設定で安心して使える",
    body: "勝手に破壊されないよう、許可モード・ファイル範囲・ネットワークを細かく制御。企業でも使い始めやすい設計です。",
  },
];

export function WhatIs() {
  return (
    <section className="relative py-24 md:py-32 border-t border-border/60 bg-gradient-to-b from-background via-[#0c0c0e] to-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="WHAT IS CLAUDE CODE"
          title={
            <>
              「質問するAI」から、
              <br className="hidden md:block" />
              <span className="gradient-text">「仕事をするAI」へ。</span>
            </>
          }
          description={
            <>
              Claude Code は、Anthropic
              が提供する&ldquo;手を動かすAIアシスタント&rdquo;。ターミナルから起動し、あなたのファイル・コマンド・Gitを直接操作します。
            </>
          }
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.55,
                delay: i * 0.06,
                ease: [0.2, 0.8, 0.2, 1],
              }}
              className="group rounded-2xl border border-border/80 bg-surface/60 p-6 md:p-7 hover:border-primary/40 transition-all"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary/15 transition-colors">
                {f.icon}
              </div>
              <h3 className="mt-5 font-display font-bold text-[18px] md:text-[19px] tracking-[-0.01em]">
                {f.title}
              </h3>
              <p className="mt-2.5 text-foreground/70 text-[14px] leading-[1.9]">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
