import Link from "next/link";
import { WA_DISPLAY, WA_HOURS, waUrl } from "../lib/contact";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/5 py-10 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6">
          <Link href="/" className="text-xl font-bold">
            <span className="text-[#4F8EF7]">S</span>truktor
          </Link>
          <p className="text-slate-600 text-sm">© 2026 Struktor. Автоматизация бизнеса.</p>
          <a href={waUrl()} className="text-slate-400 hover:text-[#4F8EF7] text-sm transition-colors">
            WhatsApp →
          </a>
        </div>
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row gap-4 justify-center text-slate-600 text-xs text-center">
          <span>📍 г. Астана, пр. Кабанбай батыра, 6/5</span>
          <span className="hidden md:block">·</span>
          <a href="mailto:shakirovvladimir1@gmail.com" className="hover:text-slate-400 transition-colors">✉️ shakirovvladimir1@gmail.com</a>
          <span className="hidden md:block">·</span>
          <a href={waUrl()} className="hover:text-slate-400 transition-colors">💬 WhatsApp {WA_DISPLAY}</a>
          <span className="hidden md:block">·</span>
          <span>{WA_HOURS}</span>
        </div>
        <div className="pt-4 flex flex-row gap-4 justify-center text-slate-600 text-xs">
          <Link href="/privacy" className="hover:text-slate-400 transition-colors">Политика конфиденциальности</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-slate-400 transition-colors">Условия использования</Link>
        </div>
      </div>
    </footer>
  );
}
