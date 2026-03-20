export default function HomeV2() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] text-slate-200">
      <Nav />
      <Hero />
      <Pains />
      <Services />
      <HowItWorks />
      <Results />
      <FinalCTA />
      <Footer />
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
          href="#cta"
          className="bg-[#4F8EF7] hover:bg-[#3a7de8] text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          7 дней бесплатно
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
        <div className="inline-flex items-center gap-2 bg-[#4F8EF7]/10 border border-[#4F8EF7]/20 rounded-full px-4 py-1.5 text-sm text-[#4F8EF7] mb-8">
          <span className="w-2 h-2 bg-[#4F8EF7] rounded-full animate-pulse" />
          Автоматизация для малого и среднего бизнеса
        </div>

        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-lg">
          Ваш бизнес работает,
          <br />
          <span className="text-[#4F8EF7]">пока вы спите</span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 drop-shadow">
          Настраиваем CRM и чат-боты, автоматизируем рутину —
          чтобы вы занимались развитием, а не операционкой.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className="bg-[#4F8EF7] hover:bg-[#3a7de8] text-white font-semibold px-8 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-[#4F8EF7]/20"
          >
            Начать 7 дней бесплатно
          </a>
          <a
            href="#services"
            className="border border-white/20 hover:border-white/40 bg-white/5 text-slate-200 font-semibold px-8 py-4 rounded-xl transition-colors text-lg backdrop-blur"
          >
            Что мы делаем
          </a>
        </div>

        <p className="text-slate-400 text-sm mt-6">Без предоплаты. Без контракта. Просто результат.</p>
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
          Почему бизнес теряет деньги
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
    title: "Отдел продаж на автопилоте",
    desc: "Клиент написал — бот ответил за 10 секунд. Заявка сразу в CRM, менеджер видит готовый список для звонка. Никто не теряется, ничего не забывается.",
    features: ["Настройка AmoCRM / Bitrix24", "Бот отвечает сразу, пока менеджер занят", "Автоматические напоминания клиентам", "Наглядная картина продаж"],
  },
  {
    badge: "Автоматизация",
    icon: "⚙️",
    title: "Бизнес без ручной работы",
    desc: "Заявка с сайта сама в CRM. Отчёт готовится без вас. Клиент получает подтверждение автоматически — вы не тратите на это ни минуты.",
    features: ["Автоматизация задач", "Уведомления в Telegram", "Отчёты без вас", "Подключается к любым программам"],
  },
  {
    badge: "Интеграции",
    icon: "🔗",
    title: "Всё подключено",
    desc: "Всё работает вместе: сайт, мессенджеры, CRM и таблицы. Больше не нужно копировать вручную — данные сами перетекают куда надо.",
    features: ["CRM ↔ сайт ↔ мессенджеры", "Telegram / WhatsApp боты", "Google Таблицы", "Подключение нужных сервисов"],
  },
];

function Services() {
  return (
    <section id="services" className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-slate-500 text-sm uppercase tracking-widest mb-4">Услуги</p>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Что мы делаем</h2>
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

/* ── HOW IT WORKS ── */
const steps = [
  {
    num: "01",
    title: "Разбор за 30 минут",
    desc: "Бесплатный созвон — разбираем ваш бизнес, находим где теряются деньги и время.",
  },
  {
    num: "02",
    title: "Внедряем за 7 дней",
    desc: "Настраиваем систему, обучаем команду. Вы видите результат ещё до оплаты.",
  },
  {
    num: "03",
    title: "Поддержка и рост",
    desc: "Остаёмся на связи, дорабатываем под задачи, масштабируем вместе с бизнесом.",
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
const stats = [
  { value: "3×", label: "рост скорости обработки заявок" },
  { value: "80%", label: "рутинных задач уходит на автомат" },
  { value: "7", label: "дней до первого результата" },
  { value: "24/7", label: "ИИ-агент работает без выходных" },
];

function Results() {
  return (
    <section className="py-20 px-6 bg-[#0a0a0f]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-slate-500 text-sm uppercase tracking-widest mb-4">Результаты</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Что получает бизнес</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-white/5 border border-white/[0.08] rounded-2xl p-6">
              <div className="text-4xl font-bold text-[#4F8EF7] mb-2">{s.value}</div>
              <div className="text-slate-400 text-sm">{s.label}</div>
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
            Попробуйте 7 дней бесплатно
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Настроим систему под ваш бизнес. Увидите результат — продолжим.
            Нет — ничего не должны.
          </p>
          <a
            href="https://t.me/struktor"
            className="inline-block bg-[#4F8EF7] hover:bg-[#3a7de8] text-white font-semibold px-10 py-4 rounded-xl transition-colors text-lg shadow-lg shadow-[#4F8EF7]/30"
          >
            Записаться на разбор →
          </a>
          <p className="text-slate-600 text-sm mt-4">Ответим в течение часа</p>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-xl font-bold">
          <span className="text-[#4F8EF7]">S</span>truktor
        </span>
        <p className="text-slate-600 text-sm">© 2025 Struktor. Автоматизация бизнеса.</p>
        <a href="https://t.me/struktor" className="text-slate-400 hover:text-[#4F8EF7] text-sm transition-colors">
          Telegram →
        </a>
      </div>
    </footer>
  );
}
