

const cinzel = "font-cinzel";
const crimson = "font-crimson";

export default function HomeV3() {
  return (
    <main className={`min-h-screen bg-[#120a00] text-[#e8d5a3] ${crimson}`}>
      <Nav cinzel={cinzel} />
      <Hero cinzel={cinzel} />
      <Divider />
      <Pains cinzel={cinzel} />
      <Divider />
      <Services cinzel={cinzel} />
      <Divider />
      <HowItWorks cinzel={cinzel} />
      <Divider />
      <Results cinzel={cinzel} />
      <FinalCTA cinzel={cinzel} />
      <Footer cinzel={cinzel} />
    </main>
  );
}

function Divider() {
  return (
    <div className="flex items-center gap-4 max-w-6xl mx-auto px-6 py-2">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9942a]/40 to-transparent" />
      <span className="text-[#c9942a]/60 text-lg">⚜</span>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[#c9942a]/40 to-transparent" />
    </div>
  );
}

/* ── NAVIGATION ── */
function Nav({ cinzel }: { cinzel: string }) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#120a00]/90 backdrop-blur border-b border-[#c9942a]/20">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className={`${cinzel} text-xl font-bold tracking-widest text-[#c9942a]`}>
          ⚔ STRUKTOR ⚔
        </span>
        <a
          href="#cta"
          className="border border-[#c9942a]/60 hover:bg-[#c9942a]/10 text-[#c9942a] text-sm font-medium px-4 py-2 rounded transition-colors tracking-wider"
        >
          ВСТУПИТЬ В ОРДЕН
        </a>
      </div>
    </nav>
  );
}

/* ── HERO ── */
function Hero({ cinzel }: { cinzel: string }) {
  return (
    <section
      className="relative pt-32 pb-28 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1520116468816-95b69f847357?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#120a00]/82" />
      {/* Gold vignette glow */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#120a00] to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#c9942a]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-3 border border-[#c9942a]/30 rounded-sm px-5 py-2 text-sm text-[#c9942a]/80 mb-10 tracking-widest uppercase">
          ✦ Грамота Автоматизаторов ✦
        </div>

        <h1 className={`${cinzel} text-4xl md:text-6xl font-black leading-tight mb-6`}
          style={{ textShadow: "0 0 40px rgba(201,148,42,0.3)" }}
        >
          Пока вы правите
          <br />
          <span className="text-[#c9942a]">Королевством —</span>
          <br />
          автоматы несут службу
        </h1>

        <p className="text-lg md:text-xl text-[#e8d5a3]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          Во времена хаоса лишь мудрые владыки доверяют рутину механическим слугам.
          Настроим CRM, ИИ-вестников и магию автоматизации для вашего дела.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#cta"
            className={`${cinzel} bg-[#c9942a] hover:bg-[#b8831a] text-[#120a00] font-bold px-8 py-4 rounded-sm transition-colors text-base tracking-widest uppercase shadow-lg shadow-[#c9942a]/20`}
          >
            ⚔ 7 дней без подати
          </a>
          <a
            href="#services"
            className={`${cinzel} border border-[#c9942a]/40 hover:border-[#c9942a]/70 text-[#e8d5a3] px-8 py-4 rounded-sm transition-colors text-base tracking-widest uppercase`}
          >
            Арсенал услуг
          </a>
        </div>

        <p className="text-[#e8d5a3]/40 text-sm mt-6 tracking-wide">Без залога. Без присяги. Лишь результат.</p>
      </div>
    </section>
  );
}

/* ── PAINS ── */
const pains = [
  {
    icon: "🗡",
    title: "Вестники теряют гонцов",
    desc: "Обращения клиентов приходят со всех каналов, но слуги не успевают. Клиент уходит к соседнему феодалу.",
  },
  {
    icon: "⏳",
    title: "Время уходит на летопись",
    desc: "Отчёты, пергаменты, перепись данных вручную — часы уходят на то, что механический слуга делает за миг.",
  },
  {
    icon: "🔮",
    title: "Туман войны в делах",
    desc: "Нет единой карты: кто звонил, что обещал, на каком этапе сделка. Хаос вместо стратегии.",
  },
];

function Pains({ cinzel }: { cinzel: string }) {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1548407260-da850faa41e3?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#120a00]/90" />
      <div className="relative z-10 max-w-6xl mx-auto">
        <p className="text-center text-[#c9942a]/60 text-sm uppercase tracking-widest mb-3">Свиток скорбей</p>
        <h2 className={`${cinzel} text-3xl md:text-4xl font-bold text-center mb-12 text-[#e8d5a3]`}>
          Почему королевства теряют злато
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {pains.map((p) => (
            <div key={p.title} className="bg-[#1e1000]/80 backdrop-blur border border-[#c9942a]/20 rounded-sm p-6 hover:border-[#c9942a]/40 transition-colors">
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className={`${cinzel} text-base font-bold mb-2 text-[#e8d5a3]`}>{p.title}</h3>
              <p className="text-[#e8d5a3]/60 text-sm leading-relaxed">{p.desc}</p>
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
    badge: "Орден Торговцев",
    icon: "🏰",
    title: "Отдел продаж на автопилоте",
    desc: "ИИ-вестник отвечает на заявки 24/7. CRM фиксирует каждое слово. Ваши рыцари закрывают сделки — не занимаются перепиской.",
    features: ["Настройка AmoCRM / Bitrix24", "Бот отвечает клиентам мгновенно", "Авто-напоминания", "Карта сражений (дашборд)"],
  },
  {
    badge: "Чёрная магия",
    icon: "⚗️",
    title: "Замок без ручного труда",
    desc: "Заклинаниями автоматизации освобождаем слуг от рутины: обработка гонцов, оповещения, летописи, перенос свитков между системами.",
    features: ["Автоматизация задач", "Гонцы в Telegram", "Авто-отчёты", "Интеграция с любой башней"],
  },
  {
    badge: "Тайные тоннели",
    icon: "🗺",
    title: "Все замки соединены",
    desc: "Прокладываем тайные ходы между CRM, сайтом, мессенджерами и свитками. Данные текут сами — без ручного переноса.",
    features: ["CRM ↔ сайт ↔ мессенджеры", "Telegram / WhatsApp гонцы", "Google Таблицы синхронизация", "Связь между сервисами"],
  },
];

function Services({ cinzel }: { cinzel: string }) {
  return (
    <section id="services" className="py-20 px-6 bg-[#120a00]">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-[#c9942a]/60 text-sm uppercase tracking-widest mb-3">Арсенал</p>
        <h2 className={`${cinzel} text-3xl md:text-4xl font-bold text-center mb-12`}>
          Чем вооружён Struktor
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="bg-[#1e1000] border border-[#c9942a]/20 rounded-sm p-6 flex flex-col hover:border-[#c9942a]/50 transition-colors">
              <span className="inline-block border border-[#c9942a]/30 text-[#c9942a] text-xs px-3 py-1 mb-4 w-fit tracking-widest uppercase">
                {s.badge}
              </span>
              <div className="text-3xl mb-3">{s.icon}</div>
              <h3 className={`${cinzel} text-lg font-bold mb-3 text-[#e8d5a3]`}>{s.title}</h3>
              <p className="text-[#e8d5a3]/60 text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="mt-auto space-y-2">
                {s.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-[#e8d5a3]/70">
                    <span className="text-[#c9942a]">⚜</span> {f}
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
    num: "I",
    title: "Совет мудрецов — 30 минут",
    desc: "Бесплатный созвон — разбираем ваше королевство, находим где утекает злато и время.",
  },
  {
    num: "II",
    title: "Строим за 7 дней",
    desc: "Возводим систему, обучаем дружину. Результат виден ещё до первой подати.",
  },
  {
    num: "III",
    title: "Охрана и расширение",
    desc: "Остаёмся на страже, совершенствуем механизмы, расширяем владения вместе с вами.",
  },
];

function HowItWorks({ cinzel }: { cinzel: string }) {
  return (
    <section
      className="relative py-20 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1533050487297-09b450131914?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-[#120a00]/88" />
      <div className="relative z-10 max-w-4xl mx-auto">
        <p className="text-center text-[#c9942a]/60 text-sm uppercase tracking-widest mb-3">Путь рыцаря</p>
        <h2 className={`${cinzel} text-3xl md:text-4xl font-bold text-center mb-12`}>
          Как мы строим ваш порядок
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="bg-[#1e1000]/70 backdrop-blur border border-[#c9942a]/20 rounded-sm p-6 text-center">
              <div className={`${cinzel} text-5xl font-black text-[#c9942a]/30 mb-3`}>{s.num}</div>
              <h3 className={`${cinzel} text-base font-bold mb-2 text-[#e8d5a3]`}>{s.title}</h3>
              <p className="text-[#e8d5a3]/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── RESULTS ── */
const stats = [
  { value: "3×", label: "быстрее обрабатываются гонцы" },
  { value: "80%", label: "рутины уходит механическим слугам" },
  { value: "7", label: "дней до первой победы" },
  { value: "24/7", label: "ИИ-вестник несёт службу" },
];

function Results({ cinzel }: { cinzel: string }) {
  return (
    <section className="py-20 px-6 bg-[#120a00]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#c9942a]/60 text-sm uppercase tracking-widest mb-3">Трофеи</p>
        <h2 className={`${cinzel} text-3xl md:text-4xl font-bold mb-12`}>Что получает владыка</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="bg-[#1e1000] border border-[#c9942a]/20 rounded-sm p-6">
              <div className={`${cinzel} text-4xl font-black text-[#c9942a] mb-2`}>{s.value}</div>
              <div className="text-[#e8d5a3]/60 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA({ cinzel }: { cinzel: string }) {
  return (
    <section
      id="cta"
      className="relative py-24 px-6 overflow-hidden"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[#120a00]/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#c9942a]/5 to-transparent" />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <div className="bg-[#1e1000]/80 backdrop-blur border border-[#c9942a]/30 rounded-sm p-10 md:p-14">
          <div className={`${cinzel} text-[#c9942a] text-lg mb-2 tracking-widest`}>⚔ ⚜ ⚔</div>
          <h2 className={`${cinzel} text-3xl md:text-4xl font-black mb-4`}>
            Вступите в Орден
            <br />
            <span className="text-[#c9942a]">на 7 дней бесплатно</span>
          </h2>
          <p className="text-[#e8d5a3]/70 mb-8 leading-relaxed text-lg">
            Настроим систему под ваше королевство. Увидите победу — останетесь.
            Нет — не должны ни гроша.
          </p>
          <a
            href="https://t.me/struktor"
            className={`${cinzel} inline-block bg-[#c9942a] hover:bg-[#b8831a] text-[#120a00] font-black px-10 py-4 rounded-sm transition-colors text-base tracking-widest uppercase shadow-lg shadow-[#c9942a]/20`}
          >
            ⚔ Записаться на совет
          </a>
          <p className="text-[#e8d5a3]/30 text-sm mt-4 tracking-wide">Ответим быстрее почтового голубя</p>
        </div>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer({ cinzel }: { cinzel: string }) {
  return (
    <footer className="border-t border-[#c9942a]/20 py-8 px-6 bg-[#0a0600]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className={`${cinzel} text-xl font-bold text-[#c9942a] tracking-widest`}>⚔ STRUKTOR</span>
        <p className="text-[#e8d5a3]/30 text-sm tracking-wide">© Anno Domini 2025. Орден Автоматизаторов.</p>
        <a href="https://t.me/struktor" className="text-[#e8d5a3]/40 hover:text-[#c9942a] text-sm transition-colors tracking-wider">
          Связь с Орденом →
        </a>
      </div>
    </footer>
  );
}
