import type { Metadata } from "next";
import { Geist_Mono, Noto_Sans_JP, Inter } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claude-code-class.example.com"),
  title: "Claude Code はじめて教室 | 4/27 対面開催",
  description:
    "「気になっているけど、手が出せない」30〜40代のための Claude Code 入門講座。4/27(月)に対面で開催。基礎から実案件で使えるワークフローまで、その日のうちに体得できます。",
  openGraph: {
    title: "Claude Code はじめて教室 | 4/27 対面開催",
    description:
      "AIに“コードを書かせる”新しい仕事術を、対面でじっくり学ぶ1日。",
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
      className={`${notoSansJP.variable} ${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
