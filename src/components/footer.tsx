import { EVENT } from "@/lib/event";

export function Footer() {
  return (
    <footer className="navy-band mt-auto border-t-2 border-primary/80 py-12 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 px-5 md:flex-row md:items-center md:px-8">
        <div className="flex items-center gap-2.5">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-accent text-[11px] font-black text-primary">
            CC
          </span>
          <div>
            <div className="font-display font-bold text-sm">
              {EVENT.title}
            </div>
            <div className="text-[12px] text-white/60">
              {EVENT.dateDot} {EVENT.weekdayEn} / {EVENT.timeShort} / {EVENT.venue}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-white/72">
          <a href="#about" className="transition-colors hover:text-accent">
            講座について
          </a>
          <a
            href="#curriculum"
            className="transition-colors hover:text-accent"
          >
            当日の内容
          </a>
          <a
            href="#details"
            className="transition-colors hover:text-accent"
          >
            開催概要
          </a>
          <a href="#faq" className="transition-colors hover:text-accent">
            FAQ
          </a>
          <a href="#apply" className="transition-colors hover:text-accent">
            申し込む
          </a>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-7xl flex-wrap gap-x-6 gap-y-2 border-t border-white/12 px-5 pt-6 text-[12px] text-white/56 md:px-8">
        <span>© {new Date().getFullYear()} {EVENT.title}</span>
        <span>
          本講座は Anthropic の公式イベントではなく、有志による学習会です。
        </span>
      </div>
    </footer>
  );
}
