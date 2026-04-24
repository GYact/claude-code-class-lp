import type { Metadata } from "next";
import { Geist_Mono, Manrope, Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import { EVENT } from "@/lib/event";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const ogTitle = `${EVENT.title} | ${EVENT.dateLong} ${EVENT.time} @${EVENT.venue}`;
const ogDescription = `${EVENT.dateLong} ${EVENT.time} / ${EVENT.venue}で開催する${EVENT.capacity}の${EVENT.title}。設定から基本操作、非エンジニア業務での使いどころまで${EVENT.duration}で持ち帰れます。先行価格 ${EVENT.price}（通常 ${EVENT.regularPrice}）。`;

export const metadata: Metadata = {
  metadataBase: new URL("https://claude-code-class-lp.vercel.app"),
  title: ogTitle,
  description: ogDescription,
  keywords: [
    "Claude Code",
    "Claude Code 入門",
    "Claude Code 講座",
    "AI 活用 講座",
    "生成AI ワークショップ",
    "渋谷 勉強会",
    EVENT.dateShort,
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: ogTitle,
    description: ogDescription,
    url: "/",
    siteName: EVENT.shortTitle,
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description: ogDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSansJP.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          本文へスキップ
        </a>
        {children}
      </body>
    </html>
  );
}
