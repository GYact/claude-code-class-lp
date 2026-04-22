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

export const metadata: Metadata = {
  metadataBase: new URL("https://claude-code-class.example.com"),
  title: `${EVENT.title} | ${EVENT.dateShort} ${EVENT.timeShort}`,
  description:
    `${EVENT.dateShort} ${EVENT.timeShort} に渋谷で開催する少人数制の${EVENT.title}。設定から基本の使い方、仕事での活用イメージまで3時間で確認できます。`,
  openGraph: {
    title: `${EVENT.title} | ${EVENT.dateShort} ${EVENT.timeShort}`,
    description:
      "Claude Codeを、明日から業務で使える形に落とし込む少人数ワークショップ。",
    type: "website",
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
