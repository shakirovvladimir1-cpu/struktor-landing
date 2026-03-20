import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Struktor — Автоматизация бизнеса",
  description: "Автоматизируем бизнес-процессы, настраиваем CRM и ИИ-агентов для малого и среднего бизнеса. 7 дней бесплатного тестирования.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${inter.className} min-h-full`}>{children}</body>
    </html>
  );
}
