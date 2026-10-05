import Link from "next/link";
import SiteFooter from "./SiteFooter";
import { waUrl } from "../lib/contact";

/* Общая обёртка юридических страниц: шапка как на главной, футер, типографика текста. */
export default function LegalPage({
  title,
  meta,
  children,
}: {
  title: string;
  meta: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold tracking-tight">
            <span className="text-[#4F8EF7]">S</span>truktor
          </Link>
          <a
            href={waUrl()}
            className="bg-[#4F8EF7] hover:bg-[#3a7de8] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            Написать в WhatsApp
          </a>
        </div>
      </nav>

      <article className="max-w-3xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
        <p className="text-slate-500 text-sm mb-12">{meta}</p>
        <div
          className="space-y-10 text-slate-300 leading-relaxed
            [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-slate-100 [&_h2]:mb-4
            [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ul]:mb-3
            [&_b]:text-slate-100 [&_b]:font-semibold
            [&_a]:text-[#4F8EF7] [&_a:hover]:underline [&_a]:break-words"
        >
          {children}
        </div>
      </article>

      <SiteFooter />
    </main>
  );
}
