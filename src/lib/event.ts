export const EVENT = {
  title: "Claude Code 入門講座",
  shortTitle: "Claude Code 講座",
  dateDot: "2026.04.30",
  dateShort: "4/30 (木)",
  dateLong: "2026年 4月30日 (木)",
  weekdayEn: "THU",
  time: "17:00 — 20:00",
  timeShort: "17:00-20:00",
  duration: "3h",
  venue: "東京・渋谷",
  venueDetails: "東京都渋谷区・貸会議室 (詳細はお申込後に)",
  capacity: "15名 (少人数制)",
  capacityShort: "15 名",
  price: "¥9,900",
  regularPrice: "¥29,800",
  earlyBirdBadge: "先行価格",
  earlyBirdNote: "先着10名までの価格です。定員に達したら通常価格になります。",
} as const;

export const CURRICULUM_STEPS = [
  {
    time: "17:00 — 17:35",
    chapter: "CHAPTER 01",
    title: "導入とセットアップを、最短で終わらせる",
    points: [
      "Mac / Windows でのインストールと初期設定をその場で完了",
      "Claude Code の基本操作と、仕事で使う前提の安全設定を整理",
      "最初に覚えるべき3つの指示パターンを実演",
    ],
  },
  {
    time: "17:35 — 18:20",
    chapter: "CHAPTER 02",
    title: "非エンジニア業務での使いどころを掴む",
    points: [
      "議事録、調査メモ、提案書の下書きを短時間で作る",
      "Excel / CSV の整形や要点抽出など、実務寄りの使い方を体験",
      "うまくいかないときの指示の切り直し方を練習",
    ],
  },
  {
    time: "18:30 — 19:10",
    chapter: "CHAPTER 03",
    title: "あなたの仕事に合わせて、再現性を持たせる",
    points: [
      "CLAUDE.md で、社内ルールや自分の書き方を覚えさせる",
      "定型業務をスラッシュコマンド化して毎回の手間を削減",
      "Slack / GitHub / MCP 連携の考え方を紹介し、拡張余地を理解する",
    ],
  },
  {
    time: "19:10 — 20:00",
    chapter: "CHAPTER 04",
    title: "明日からの運用イメージまで持ち帰る",
    points: [
      "自分の業務でまず任せる3タスクをその場で決める",
      "チーム導入時のガイドライン、権限設計、コスト感を整理",
      "個別相談で、その人の業務に合わせた使い始め方を確認",
    ],
  },
] as const;
