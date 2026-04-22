"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Line =
  | { kind: "user"; text: string }
  | { kind: "assistant"; text: string }
  | { kind: "system"; text: string }
  | { kind: "tool"; text: string };

const SCRIPT: Line[] = [
  { kind: "system", text: "claude code v2.x  ・  workspace: /sales-ops" },
  {
    kind: "user",
    text: "営業会議のメモから、役員向け3点サマリーとTODO一覧を作って。",
  },
  {
    kind: "assistant",
    text: "了解しました。まず議事録を読み、重要論点を整理します。",
  },
  { kind: "tool", text: "Read   meeting-notes/2026-04-18.md" },
  { kind: "tool", text: "Write  reports/executive-summary.md" },
  { kind: "tool", text: "Write  reports/action-items.csv" },
  {
    kind: "assistant",
    text: "来週までの担当者付きTODOも抽出して、CSVにまとめました。",
  },
  { kind: "assistant", text: "→ 次はSlack共有用の要約も作れます。" },
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
      className="relative overflow-hidden rounded-[28px] border border-border/80 bg-surface/92 backdrop-blur shadow-[0_28px_90px_-55px_rgba(23,34,45,0.45)]"
    >
      <div className="flex h-11 items-center gap-2 border-b border-border/70 bg-surface-elevated/86 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d17f68]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ceb46a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#5c8a69]" />
        <span className="ml-3 font-mono text-[11px] tracking-tight text-muted">
          ~/workflows/sales-ops - claude code
        </span>
      </div>
      <div className="min-h-[340px] max-h-[400px] overflow-hidden p-5 font-mono text-[12.5px] leading-relaxed md:min-h-[400px] md:p-6 md:text-[13px]">
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
          <span className="text-primary/75">• </span>
          <span className="text-foreground/70">{text}</span>
          {blink && <span className="caret h-3" />}
        </div>
      );
  }
}

function wait(ms: number) {
  return new Promise<void>((r) => setTimeout(r, ms));
}
