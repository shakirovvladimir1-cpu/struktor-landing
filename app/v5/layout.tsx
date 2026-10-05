import type { Metadata } from "next";

/* page.tsx здесь клиентский и не может экспортировать metadata, поэтому noindex задан в layout. */
export const metadata: Metadata = {
  /* Старая версия главной: оставлена по ссылке, но не для поиска. */
  robots: { index: false, follow: true },
};

export default function V5Layout({ children }: { children: React.ReactNode }) {
  return children;
}
