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
    title: "自分のPCでそのまま動く",
    body: "ブラウザの会話だけで終わらず、手元のファイルやフォルダを読みながら作業できます。",
  },
  {
    icon: <Sparkles size={20} />,
    title: "考えながら作業も進められる",
    body: "調査、整理、下書き、ファイル編集まで一続きで進められます。",
  },
  {
    icon: <FolderTree size={20} />,
    title: "前提をふまえて出力できる",
    body: "フォルダ構成や既存ファイルを見ながら進められるので、毎回一から説明しなくて済みます。",
  },
  {
    icon: <Workflow size={20} />,
    title: "繰り返しの仕事をまとめられる",
    body: "よくやる作業をスラッシュコマンドにまとめておくと、毎回の手間を減らせます。",
  },
  {
    icon: <GitBranch size={20} />,
    title: "外部ツールにもつなげられる",
    body: "Slack や GitHub などとつなげると、できることがさらに広がります。",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "安全に使うための設定もできる",
    body: "権限やファイル範囲の考え方を知っておくと、安心して使い始められます。",
  },
];

export function WhatIs() {
  return (
    <section className="relative border-t border-border/60 bg-gradient-to-b from-background via-[#f1eadf] to-background py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="WHAT YOU CAN DO"
          title="Claude Codeでできること"
          description={
            <>
              難しく聞こえますが、やっていることはシンプルです。
              <br className="hidden md:block" />
              ファイルを読み、整理し、書き直し、必要ならコマンドを実行します。
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
              className="group rounded-2xl border border-border/80 bg-surface/90 p-6 transition-all hover:-translate-y-0.5 hover:border-primary/30 md:p-7"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/12 bg-primary/8 text-primary transition-colors group-hover:bg-primary/12">
                {f.icon}
              </div>
              <h3 className="mt-5 font-display text-[18px] font-bold tracking-[-0.02em] md:text-[19px]">
                {f.title}
              </h3>
              <p className="mt-2.5 text-[14px] leading-[1.9] text-foreground/72">
                {f.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
