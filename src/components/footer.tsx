import { EVENT } from "@/lib/event";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-12 mt-auto">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-[11px] font-black text-white">
            CC
          </span>
          <div>
            <div className="font-display font-bold text-sm">
              {EVENT.title}
            </div>
            <div className="text-muted text-[12px]">
              {EVENT.dateDot} {EVENT.weekdayEn} / {EVENT.timeShort} / {EVENT.venue}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
          <a href="#about" className="hover:text-foreground transition-colors">
            講座について
          </a>
          <a
            href="#curriculum"
            className="hover:text-foreground transition-colors"
          >
            当日の内容
          </a>
          <a
            href="#details"
            className="hover:text-foreground transition-colors"
          >
            開催概要
          </a>
          <a href="#faq" className="hover:text-foreground transition-colors">
            FAQ
          </a>
          <a href="#apply" className="hover:text-foreground transition-colors">
            申し込む
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-5 md:px-8 mt-8 pt-6 border-t border-border/40 text-[12px] text-muted flex flex-wrap gap-x-6 gap-y-2">
        <span>© {new Date().getFullYear()} {EVENT.title}</span>
        <span>
          本講座は Anthropic の公式イベントではなく、有志による学習会です。
        </span>
      </div>
    </footer>
  );
}
