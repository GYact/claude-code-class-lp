"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeading } from "./section-heading";

const ITEMS = [
  {
    q: "プログラミング未経験でも大丈夫ですか？",
    a: "はい、むしろ今回は「未経験〜入門者」を想定した内容です。当日は講師が一人ずつ画面を見て回ります。つまずいた瞬間にその場で解消できるのが対面の強みです。",
  },
  {
    q: "Macじゃないと参加できませんか？",
    a: "Windowsでも問題ありません。セットアップ手順の事前案内をお送りします(Windows 10/11 対応)。当日もWindows向けの導入サポートをご用意しています。",
  },
  {
    q: "ChatGPT / Gemini との使い分けはどうなりますか？",
    a: "「手を動かす作業」ではClaude Codeが圧倒的に便利です。一方で「発想を広げる壁打ち」はChatGPTが得意、など用途別の使い分けも講座内で整理します。",
  },
  {
    q: "Claude の有料プランへの加入は必要ですか？",
    a: "当日は無料枠で完結できる内容を中心に進めます。ただし業務で本格利用する場合はClaude Pro以上を推奨します。プランの違い・コスト感も当日解説します。",
  },
  {
    q: "懇親会は必ず参加ですか？",
    a: "任意参加です。18:00で本編が終了し、そのあと希望者のみ近隣のレストランで食事をしながら質問や情報交換をします。",
  },
  {
    q: "キャンセルはできますか？",
    a: "開催日の5日前まで全額返金、4日前以降は50%、前日・当日は返金不可とさせていただきます。代理参加は可能です。",
  },
  {
    q: "領収書は発行してもらえますか？",
    a: "はい、お申し込み時に宛名をご指定いただければPDFで発行します。経費精算にもご利用いただけます。",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 border-t border-border/60"
    >
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="よくあるご質問"
          align="center"
          description="お申し込み前の不安は、ここで解消してください。"
        />

        <div className="mt-14 space-y-2.5">
          {ITEMS.map((it, i) => {
            const isOpen = open === i;
            return (
              <div
                key={it.q}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "border-primary/40 bg-surface"
                    : "border-border/80 bg-surface/40"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-5 md:px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-[15px] md:text-[16px] leading-snug">
                    {it.q}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-45 text-primary" : "text-muted"
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 md:px-6 pb-5 text-foreground/75 text-[14.5px] leading-[1.9]">
                        {it.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
