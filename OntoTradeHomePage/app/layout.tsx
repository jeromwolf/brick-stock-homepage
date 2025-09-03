import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "OntoTrade - AI 기반 금융 솔루션 플랫폼",
  description: "실시간 뉴스 분석, AI 투자 인사이트, 금융 데이터 분석을 제공하는 차세대 금융 솔루션 플랫폼",
  keywords: "AI 금융, 투자 분석, 실시간 뉴스, 금융 솔루션, OntoTrade",
  openGraph: {
    title: "OntoTrade - AI 기반 금융 솔루션 플랫폼",
    description: "실시간 뉴스 분석, AI 투자 인사이트, 금융 데이터 분석을 제공하는 차세대 금융 솔루션 플랫폼",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="min-h-screen bg-white text-gray-900">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}