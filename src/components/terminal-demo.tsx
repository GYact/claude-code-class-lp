"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Line =
  | { kind: "user"; text: string }
  | { kind: "assistant"; text: string }
  | { kind: "system"; text: string }
  | { kind: "tool"; text: string };

const SCRIPT: Line[] = [
  { kind: "system", text: "claude code v2.x  ・  /help でヘルプ表示" },
  { kind: "user", text: "社内議事録から、要点サマリーを作るCLIを作って。" },
  {
    kind: "assistant",
    text: "了解しました。まずプロジェクト構成を作成します。",
  },
  { kind: "tool", text: "Write  src/summarize.ts  (78 lines)" },
  { kind: "tool", text: "Write  package.json" },
  { kind: "tool", text: "Bash   pnpm install" },
  { kind: "assistant", text: "テスト用のサンプルを流して動作確認しました。" },
  { kind: "assistant", text: "→ 使い方: pnpm summarize <file.md>" },
];

const SPEEDS: Record<Line["kind"], number> = {
  system: 8,
  user: 24,
  assistant: 14,
  tool: 6,
};

export function TerminalDemo() {
  const [visible, setVisible] = useState<
    { line: Line; chars: number; done: boolean }[]
  >([]);

  useEffect(() => {
    let cancelled = false;
    let i = 0;

    async function run() {
      while (!cancelled) {
        if (i >= SCRIPT.length) {
          await wait(2500);
          if (cancelled) return;
          setVisible([]);
          i = 0;
          continue;
        }
        const line = SCRIPT[i];
        setVisible((v) => [...v, { line, chars: 0, done: false }]);
        for (let c = 1; c <= line.text.length; c++) {
          if (cancelled) return;
          await wait(SPEEDS[line.kind]);
          setVisible((v) => {
            const copy = [...v];
            copy[copy.length - 1] = { line, chars: c, done: false };
            return copy;
          });
        }
        setVisible((v) => {
          const copy = [...v];
          copy[copy.length - 1] = { line, chars: line.text.length, done: true };
          return copy;
        });
        await wait(line.kind === "tool" ? 200 : 480);
        i++;
      }
    }
    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
      className="relative rounded-2xl border border-border/80 bg-surface/90 backdrop-blur shadow-2xl shadow-black/60 overflow-hidden"
    >
      <div className="flex items-center gap-2 px-4 h-10 border-b border-border/70 bg-surface-elevated/80">
        <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
        <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
        <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        <span className="ml-3 text-[11px] text-muted font-mono tracking-tight">
          ~/projects/summarize-cli — claude code
        </span>
      </div>
      <div className="p-5 md:p-6 font-mono text-[12.5px] md:text-[13px] leading-relaxed min-h-[340px] md:min-h-[400px] max-h-[400px] overflow-hidden">
        {visible.map((v, idx) => (
          <LineRenderer
            key={idx}
            line={v.line}
            chars={v.chars}
            blink={!v.done && idx === visible.length - 1}
          />
        ))}
      </div>
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-surface via-surface/70 to-transparent"
        aria-hidden
      />
    </motion.div>
  );
}

function LineRenderer({
  line,
  chars,
  blink,
}: {
  line: Line;
  chars: number;
  blink: boolean;
}) {
  const text = line.text.slice(0, chars);
  switch (line.kind) {
    case "system":
      return (
        <div className="text-muted/80 text-[11.5px] mb-3">
          <span>{text}</span>
          {blink && <span className="caret h-3" />}
        </div>
      );
    case "user":
      return (
        <div className="mb-2">
          <span className="text-primary">❯ </span>
          <span className="text-foreground">{text}</span>
          {blink && <span className="caret h-3" />}
        </div>
      );
    case "assistant":
      return (
        <div className="mb-1.5 text-foreground/90">
          <span className="text-primary/90">✦ </span>
          <span>{text}</span>
          {blink && <span className="caret h-3" />}
        </div>
      );
    case "tool":
      return (
        <div className="mb-1 pl-4 text-muted">
          <span className="text-emerald-400/90">• </span>
          <span className="text-foreground/70">{text}</span>
          {blink && <span className="caret h-3" />}
        </div>
      );
  }
}

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
