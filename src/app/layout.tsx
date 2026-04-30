import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "栖美 Haven Advisors — 赴美综合服务顾问",
  description:
    "栖美 Haven Advisors 为中国高净值家庭提供赴美生子、海外职业发展、名校教育规划、高端医疗预约、美国保险与理财的一站式顾问服务。",
  keywords: [
    "赴美生子",
    "海外职业发展",
    "名校教育规划",
    "高端医疗预约",
    "美国保险",
    "海外理财",
    "Haven Advisors",
    "栖美",
  ],
  openGraph: {
    title: "栖美 Haven Advisors",
    description: "温馨人文 · 专业稳重的赴美综合服务顾问",
    type: "website",
    locale: "zh_CN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${playfair.variable} h-full`}>
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
