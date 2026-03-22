import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Struktor — Автоматизация бизнеса в Казахстане | AmoCRM, WhatsApp бот, ИИ-агент",
  description: "Настраиваем AmoCRM, WhatsApp и Telegram боты, автоматизируем бизнес-процессы для малого и среднего бизнеса в Астане, Алматы и по всему Казахстану. 7 дней бесплатно.",
  keywords: [
    "автоматизация бизнеса Казахстан",
    "настройка AmoCRM Астана",
    "WhatsApp бот для бизнеса",
    "Telegram бот для заявок",
    "CRM для малого бизнеса Алматы",
    "ИИ агент для продаж",
    "автоматизация продаж Казахстан",
    "чат-бот для WhatsApp Астана",
    "настройка CRM Казахстан",
    "автоматическая обработка заявок",
  ],
  openGraph: {
    title: "Struktor — Автоматизация бизнеса в Казахстане",
    description: "Настраиваем AmoCRM, WhatsApp и Telegram боты, автоматизируем бизнес-процессы. 7 дней бесплатно.",
    url: "https://struktor.work",
    siteName: "Struktor",
    locale: "ru_KZ",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://struktor.work",
  },
  verification: {
    google: "uIj0vt5zdt0cKQnTUfFwnGaHQgPeBFRmeMPFGwa0EM8",
    yandex: "3dd91ca3c17cc355",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Cinzel:wght@400;600;700;900&family=Crimson+Text:wght@400;600&family=MedievalSharp&family=Sorts+Mill+Goudy&display=swap" rel="stylesheet" />
      </head>
      <body className="font-inter min-h-full">{children}</body>
    </html>
  );
}
