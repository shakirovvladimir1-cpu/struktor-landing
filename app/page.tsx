import SiteFooter from "./components/SiteFooter";
import { OFFER_URL, SALES_URL, SHOP_URL, WA_DISPLAY, WA_HOURS, waUrl } from "./lib/contact";

export default function HomeV2() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200">
      <Nav />
      <Hero />
      <Pains />
      <Services />
      <Paths />
      <HowItWorks />
      <Results />
      <FAQ />
      <FinalCTA />
      <SiteFooter />
    </main>
  );
}

/* ── NAVIGATION ── */
function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-xl font-bold tracking-tight">
          <span className="text-[#4F8EF7]">S</span>truktor
        </span>
        <a
          href={waUrl()}
          className="bg-[#4F8EF7] hover:bg-[#3a7de8] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Написать в WhatsApp
        </a>
      </div>
    </nav>
  );
}

/* ── HERO ── */
function Hero() {
  return (
    <section
      className="relative pt-32 pb-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0a0a0f]/80" />
      {/* Blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#4F8EF7]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full px-4 py-1.5 text-sm text-[#4F8EF7] mb-8">
          <span className="w-2 h-2 bg-[#4F8EF7] rounded-full animate-pulse" />
          WhatsApp, CRM и ИИ-агент для магазинов и дистрибьюторов в Казахстане
        </h1>

        <p className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Ваш бизнес работает,
          <br />
          <span className="text-[#4F8EF7]">пока вы спите</span>
        </p>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 drop-shadow">
          Покупатель получает ответ в WhatsApp за 60 секунд, заявка сразу попадает в CRM,
          и видно, кто из менеджеров её взял.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="bg-[#4F8EF7] hover:bg-[#3a7de8] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-[#4F8EF7]/20"
          >
            Записаться на аудит
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-white/40 bg-white/5 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-colors text-lg backdrop-blur"
          >
            Что мы делаем
          </a>
        </div>

        <p className="text-slate-400 text-sm mt-6">Аудит — 50 000 ₸, засчитываем в запуск. Запускаем за 10 дней.</p>
      </div>
    </section>
  );
}

/* ── PAINS ── */
const pains = [
  {
    icon: "😤",
    title: "Менеджеры теряют заявки",
    desc: "Заявки приходят из разных каналов, никто не успевает обработать вовремя. Клиент уходит к конкурентам.",
  },
  {
    icon: "⏰",
    title: "Уходит время на рутину",
    desc: "Отчёты, напоминания, переносы данных вручную — сотрудники тратят часы на то, что машина делает за секунды.",
  },
  {
    icon: "📊",
    title: "Непонятно что происходит",
    desc: "Нет единой картины: кто позвонил, что пообещал, на каком этапе сделка. Хаос вместо системы.",
  },
];

function Pains() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#0a0a0f]/90" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-4">Звучит знакомо?</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Где магазины и дистрибьюторы теряют заявки
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div key={p.title} className="bg-white/5 backdrop-blur border border-white/[0.08] rounded-2xl p-6">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SERVICES ── */
const services = [
  {
    badge: "Продажи",
    icon: "🤖",
    title: "Настройка CRM для отдела продаж",
    desc: "Клиент написал — агент ответил за 60 секунд. Заявка сразу в CRM, менеджер видит готовый список для звонка. Никто не теряется, ничего не забывается.",
    features: ["Настройка CRM под ваш бизнес", "Бот отвечает сразу, пока менеджер занят", "Автоматические напоминания клиентам", "Наглядная картина продаж"],
  },
  {
    badge: "Автоматизация",
    icon: "⚙️",
    title: "WhatsApp и Telegram боты для бизнеса",
    desc: "Заявка с сайта сама в CRM. Отчёт готовится без вас. Клиент получает подтверждение автоматически — вы не тратите на это ни минуты.",
    features: ["Автоматизация задач", "Уведомления в Telegram", "Отчёты без вас", "Подключаем CRM, Google Таблицы, Telegram"],
  },
  {
    badge: "Интеграции",
    icon: "🔗",
    title: "Интеграции: CRM, мессенджеры, Google Таблицы",
    desc: "Всё работает вместе: сайт, мессенджеры, CRM и таблицы. Больше не нужно копировать вручную — данные сами перетекают куда надо.",
    features: ["CRM ↔ сайт ↔ мессенджеры", "Telegram / WhatsApp боты", "Google Таблицы", "Подключение нужных сервисов"],
  },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-4">Услуги</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Услуги автоматизации: CRM, WhatsApp боты и ИИ-агенты</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/[0.08] rounded-2xl p-6 flex flex-col hover:border-[#4F8EF7]/30 transition-colors">
              <span className="inline-block bg-[#4F8EF7]/10 text-[#4F8EF7] text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
                {s.badge}
              </span>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="mt-auto space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                    <span className="text-[#4F8EF7]">✓</span> {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TWO WAYS TO START ── */
function Paths() {
  return (
    <section id="start" className="py-20 px-6 bg-[#0a0a0f] border-t border-white/5">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-4">С чего начать</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Запуск под ключ или подключить самим</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col hover:border-[#4F8EF7]/30 transition-colors">
            <span className="inline-block bg-[#4F8EF7]/10 text-[#4F8EF7] text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
              Делаем мы
            </span>
            <h3 className="text-2xl font-semibold mb-3">Запуск под ключ</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Аудит потерь, порядок в CRM, ответ покупателю за 60 секунд, обучение менеджеров. Через 10 дней система работает.
            </p>
            <p className="mb-6">
              <span className="text-3xl font-bold text-slate-100">350 000 ₸</span>
              <span className="block text-slate-500 text-sm mt-1">один раз, оплата 70/30. Аудит — 50 000 ₸, засчитываем в запуск.</span>
            </p>
            <a
              href={OFFER_URL}
              className="mt-auto inline-flex flex-wrap items-center justify-between gap-x-3 gap-y-1 bg-[#4F8EF7] hover:bg-[#3a7de8] text-white font-semibold px-5 py-3 rounded-xl transition-colors"
            >
              <span>Подробнее о запуске</span>
              <span className="text-white/70 text-sm font-normal">offer.struktor.work →</span>
            </a>
          </div>

          <div className="bg-white/5 border border-white/[0.08] rounded-2xl p-6 md:p-8 flex flex-col hover:border-[#4F8EF7]/30 transition-colors">
            <span className="inline-block bg-[#4F8EF7]/10 text-[#4F8EF7] text-xs font-medium px-3 py-1 rounded-full mb-4 w-fit">
              UltraBot от Struktor
            </span>
            <h3 className="text-2xl font-semibold mb-3">Подключить самим</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Все номера WhatsApp, Instagram и Telegram в одном окне. Ночью покупателю отвечает агент по вашему прайсу, днём заявки делятся между менеджерами.
            </p>
            <p className="mb-6">
              <span className="text-3xl font-bold text-slate-100">от 45 000 ₸</span>
              <span className="text-slate-400 text-sm"> в месяц</span>
              <span className="block text-slate-500 text-sm mt-1">1 номер, 3 менеджера и агент.</span>
            </p>
            <div className="mt-auto grid gap-3">
              <a
                href={SHOP_URL}
                className="inline-flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border border-white/20 hover:border-[#4F8EF7]/60 bg-white/5 text-slate-100 font-semibold px-5 py-3 rounded-xl transition-colors"
              >
                <span>Для магазинов</span>
                <span className="text-slate-400 text-sm font-normal">shop.struktor.work →</span>
              </a>
              <a
                href={SALES_URL}
                className="inline-flex flex-wrap items-center justify-between gap-x-3 gap-y-1 border border-white/20 hover:border-[#4F8EF7]/60 bg-white/5 text-slate-100 font-semibold px-5 py-3 rounded-xl transition-colors"
              >
                <span>Для отделов продаж</span>
                <span className="text-slate-400 text-sm font-normal">sales.struktor.work →</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── HOW IT WORKS ── */
const steps = [
  {
    num: "01",
    title: "Аудит потерь",
    desc: "Смотрим, откуда приходят заявки, кто и как быстро отвечает, где они теряются. 50 000 ₸, при запуске засчитываем.",
  },
  {
    num: "02",
    title: "Запускаем за 10 дней",
    desc: "Подключаем WhatsApp и CRM, настраиваем ответ покупателю за 60 секунд, обучаем менеджеров. Оплата: 70% до старта, 30% при сдаче.",
  },
  {
    num: "03",
    title: "Контроль заявок",
    desc: "45 000 ₸ в месяц. Следим, чтобы ни одна заявка не висела, правим сценарии, раз в месяц присылаем отчёт.",
  },
];

function HowItWorks() {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#0a0a0f]/88" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-4">Процесс</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Как мы работаем</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-white/5 backdrop-blur border border-white/[0.08] rounded-2xl p-6">
              <div className="text-5xl font-bold text-[#4F8EF7]/30 mb-3">{s.num}</div>
              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── RESULTS ── */
const stats: { value: string; label: string; note?: string }[] = [
  { value: "10", label: "дней от аудита до запуска" },
  { value: "60", label: "секунд на ответ покупателю, днём и ночью" },
  {
    value: "124",
    label: "заказа за 40 дней",
    note: "Интернет-магазин в Казахстане, продажи в WhatsApp. Считали по переписке, с кассой не сверяли",
  },
  { value: "434", label: "чата за 14 дней", note: "Магазин техники, Бишкек" },
];

function Results() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Результаты</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Сроки и первые результаты</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/[0.08] rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#4F8EF7] mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
              {s.note && <div className="text-slate-500 text-xs leading-snug mt-2">{s.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
const faqs = [
  {
    q: "Сколько стоит внедрение CRM и WhatsApp в Казахстане?",
    a: "Аудит потерь — 50 000 ₸. Если запускаете систему в течение 14 дней, сумму засчитываем. Запуск под ключ — 350 000 ₸: 70% до старта, 30% при сдаче. Дожим и возврат базы — ещё 250 000 ₸. «Контроль заявок» после запуска — 45 000 ₸ в месяц. Пилот до 30 ноября: 3 места, запуск за 175 000 ₸ и 3 месяца контроля по 22 500 ₸. Если хотите подключить всё сами, UltraBot от Struktor стоит от 45 000 ₸ в месяц.",
  },
  {
    q: "Чем ИИ-агент отличается от обычного чат-бота?",
    a: "Обычный бот работает по скрипту и отвечает только на заранее прописанные команды. ИИ-агент понимает обычный текст клиента, задаёт уточняющие вопросы, квалифицирует лид и передаёт менеджеру с полным контекстом — 24/7 без участия человека.",
  },
  {
    q: "Могут ли заблокировать номер WhatsApp?",
    a: "Риск есть. Обычно мы подключаем номер по QR-коду, как WhatsApp Web: так быстрее. WhatsApp может ограничить такой номер, чаще всего за массовые рассылки, поэтому с личного номера мы их не делаем. Если такой риск не подходит, по запросу подключаем официальный WhatsApp Business API. Сообщения там оплачиваются по тарифам Meta.",
  },
  {
    q: "Работаете ли вы с бизнесом в Астане и Алматы?",
    a: "Да, работаем с бизнесом по всему Казахстану — в Астане, Алматы и других городах. Все работы выполняются удалённо, встречи проводим онлайн.",
  },
  {
    q: "Как быстро будет виден результат?",
    a: "Через 10 дней от начала аудита система работает: заявки из WhatsApp попадают в CRM, покупатель получает ответ за 60 секунд, менеджеры обучены. Оплата: 70% до старта, 30% при сдаче.",
  },
];

function FAQ() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0f]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <div className="max-w-3xl mx-auto">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-4">Вопросы</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
        <div className="space-y-4">
          {faqs.map((f) => (
            <div key={f.q} className="bg-white/5 border border-white/[0.08] rounded-2xl p-6">
              <h3 className="font-semibold text-slate-100 mb-3">{f.q}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA() {
  return (
    <section
      id="cta"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#0a0a0f]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#4F8EF7]/5 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="bg-white/5 backdrop-blur border border-[#4F8EF7]/20 rounded-3xl p-10 md:p-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Начните с аудита потерь
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Покажем, где теряются заявки и сколько они стоят. Аудит — 50 000 ₸, при запуске засчитываем.
            Пилот до 30 ноября: 3 места, запуск за 175 000 ₸ вместо 350 000 ₸.
          </p>
          <a
            href={waUrl()}
            className="inline-block bg-[#4F8EF7] hover:bg-[#3a7de8] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-[#4F8EF7]/30"
          >
            Записаться на аудит →
          </a>
          <p className="text-slate-500 text-sm mt-4">
            WhatsApp <span className="whitespace-nowrap">{WA_DISPLAY}</span> · {WA_HOURS}
          </p>
        </div>
      </div>
    </section>
  );
}
