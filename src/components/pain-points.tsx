"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  {
    tag: "#01",
    title: "ChatGPTは使っているけど、Claude Code は別物に見える",
    body: "「ターミナル」「CLI」「環境構築」という単語で止まってしまう。便利らしいとは聞くけれど、何がどう違うのか、自分に必要なのかが分からない。",
  },
  {
    tag: "#02",
    title: "一人でインストールしたけど、3分で閉じた",
    body: "英語のエラー、よく分からない設定ファイル、どんな指示をすればいいか分からない空のプロンプト——結局「また今度」になっている。",
  },
  {
    tag: "#03",
    title: "実務にどう活かせばいいか、イメージが湧かない",
    body: "エンジニアではない自分の仕事でも使えるの？日々のExcel・議事録・資料作成に、本当にAIで差が出るの？——想像がつかない。",
  },
  {
    tag: "#04",
    title: "周りが使い始めていて、置いていかれる感覚がある",
    body: "若手や後輩が当たり前にAIを使い出している。自分だけ乗り遅れていく不安。でも、今さら誰かに聞くのも気が引ける。",
  },
];

export function PainPoints() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="WHY NOW"
          title={
            <>
              &ldquo;気になっている&rdquo;まま、
              <br className="hidden md:block" />
              もう1年、経っていませんか。
            </>
          }
          description={
            <>
              この教室は、そんなモヤモヤを1日で&ldquo;普段使いの道具&rdquo;に変えるための場所です。
              <br className="hidden md:block" />
              対面だから、つまずいたその場で聞けます。
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
              className="group relative rounded-2xl border border-border/80 bg-surface/60 p-6 md:p-7 hover:bg-surface transition-colors overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/8 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 text-primary font-mono text-xs tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  {it.tag}
                </div>
                <h3 className="mt-3 font-display font-bold text-[19px] md:text-[21px] leading-snug tracking-[-0.01em]">
                  {it.title}
                </h3>
                <p className="mt-3 text-foreground/70 text-[14.5px] leading-[1.9]">
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
