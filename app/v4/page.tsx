


const medieval = "font-medieval";
const goudy = "font-goudy";

export default function HomeV4() {
  return (
    <main className={`min-h-screen bg-[#0d0a07] ${goudy}`} style={{ color: "#f0e6c8" }}>
      <Nav font={medieval} />
      <Hero font={medieval} />
      <Pains font={medieval} />
      <KnightsGallery font={medieval} />
      <Services font={medieval} />
      <HowItWorks font={medieval} />
      <Results font={medieval} />
      <FinalCTA font={medieval} />
      <Footer font={medieval} />
    </main>
  );
}

/* ── ORNAMENT DIVIDER ── */
function OrnamentDivider() {
  return (
    <div className="flex items-center justify-center gap-3 py-6 px-6 max-w-5xl mx-auto">
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to right, transparent, #8b1a1a)" }} />
      <span style={{ color: "#d4a017", fontSize: "22px" }}>🗡️ ✦ 🗡️</span>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(to left, transparent, #8b1a1a)" }} />
    </div>
  );
}

/* ── NAV ── */
function Nav({ font }: { font: string }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(13,10,7,0.93)",
        borderBottom: "1px solid rgba(139,26,26,0.35)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Heraldic logo */}
        <div className="flex items-center gap-3">
          <span style={{ fontSize: "24px" }}>🛡️</span>
          <span className={`${font} text-lg tracking-widest`} style={{ color: "#d4a017" }}>
            STRUKTOR
          </span>
        </div>
        <a
          href="#cta"
          className={`${font} text-xs tracking-widest px-5 py-2.5 transition-all hover:bg-[#8b1a1a]/30`}
          style={{
            border: "1px solid #8b1a1a",
            color: "#f0e6c8",
            background: "rgba(139,26,26,0.15)",
          }}
        >
          ⚔ ПРИНЯТЬ ПРИСЯГУ
        </a>
      </div>
    </nav>
  );
}

/* ── HERO ── */
function Hero({ font }: { font: string }) {
  return (
    <section
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
      style={{
        backgroundImage: "url('/images/bg-castle-web.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(13,10,7,0.75)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0a07 0%, transparent 50%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0d0a07 0%, transparent 20%)" }} />

      <div className="relative z-10 max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 items-center pt-20 pb-8">
        {/* LEFT: text */}
        <div>
          <div
            className="inline-flex items-center gap-3 px-5 py-2 mb-8"
            style={{ border: "1px solid rgba(212,160,23,0.4)", background: "rgba(13,10,7,0.6)", backdropFilter: "blur(8px)" }}
          >
            <span style={{ color: "#d4a017" }}>⚜</span>
            <span className={`${font} text-xs tracking-[0.25em]`} style={{ color: "#d4a017" }}>
              ГРАМОТА АВТОМАТИЗАТОРОВ · 2025
            </span>
            <span style={{ color: "#d4a017" }}>⚜</span>
          </div>

          <h1 className={`${font} text-5xl md:text-6xl leading-tight mb-4`}
            style={{ textShadow: "0 2px 40px rgba(139,26,26,0.6)", color: "#f0e6c8" }}>
            Пока вы правите
          </h1>
          <h1 className={`${font} text-5xl md:text-6xl leading-tight mb-8`}
            style={{ color: "#d4a017", textShadow: "0 0 40px rgba(212,160,23,0.4)" }}>
            Королевством
          </h1>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-px" style={{ background: "#8b1a1a" }} />
            <span style={{ color: "#8b1a1a" }}>⚔</span>
            <div className="w-12 h-px" style={{ background: "#8b1a1a" }} />
          </div>

          <p className="text-lg mb-10 leading-relaxed" style={{ color: "rgba(240,230,200,0.75)" }}>
            Наши механические рыцари несут службу днём и ночью.
            Настроим CRM, ИИ-вестников и магию автоматизации —
            пока вы строите империю.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#cta" className={`${font} px-8 py-4 text-sm tracking-widest transition-all`}
              style={{ background: "linear-gradient(135deg, #8b1a1a, #6b1010)", color: "#f0e6c8", border: "1px solid rgba(212,160,23,0.4)", boxShadow: "0 4px 20px rgba(139,26,26,0.4)" }}>
              ⚔ 7 ДНЕЙ БЕЗ ПОДАТИ
            </a>
            <a href="#services" className={`${font} px-8 py-4 text-sm tracking-widest transition-all`}
              style={{ border: "1px solid rgba(240,230,200,0.2)", color: "rgba(240,230,200,0.8)", background: "rgba(13,10,7,0.5)", backdropFilter: "blur(8px)" }}>
              АРСЕНАЛ ОРДЕНА
            </a>
          </div>
          <p className="text-xs mt-5 tracking-widest" style={{ color: "rgba(240,230,200,0.3)" }}>
            БЕЗ ЗАЛОГА · БЕЗ ПРИСЯГИ · ЛИШЬ РЕЗУЛЬТАТ
          </p>
        </div>

        {/* RIGHT: knight image — виден на md+, на мобиле показывается снизу текста */}
        <div className="flex justify-center items-end mt-8 md:mt-0">
          <div className="relative">
            {/* Gold frame */}
            <div className="absolute -inset-1" style={{ background: "linear-gradient(135deg, #d4a017, #8b1a1a, #d4a017)", borderRadius: "2px", padding: "2px" }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <img
                src="/images/knight-2-web.jpg"
                alt="Рыцарь в доспехах"
                style={{ width: "100%", maxWidth: "460px", height: "420px", objectFit: "cover", objectPosition: "center top", display: "block" }}
              />
              {/* Bottom fade */}
              <div className="absolute bottom-0 left-0 right-0 h-24" style={{ background: "linear-gradient(to top, #0d0a07, transparent)" }} />
            </div>
            {/* Glow behind */}
            <div className="absolute inset-0 -z-10 blur-2xl opacity-30" style={{ background: "#8b1a1a", transform: "scale(1.1)" }} />
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <span style={{ color: "rgba(212,160,23,0.4)", fontSize: "20px" }}>⬇</span>
      </div>
    </section>
  );
}

/* ── KNIGHTS GALLERY ── */
const knights = [
  {
    img: "/images/service-1-web.jpg",
    title: "Рыцарь Продаж",
    desc: "Не знает сна. Отвечает клиентам 24/7.",
  },
  {
    img: "/images/knight-2-web.jpg",
    title: "Хранитель Замка",
    desc: "Следит за каждой сделкой в CRM.",
  },
  {
    img: "/images/knight-3-web.jpg",
    title: "Мастер Интеграций",
    desc: "Соединяет все башни в единую систему.",
  },
];

function KnightsGallery({ font }: { font: string }) {
  return (
    <>
      <OrnamentDivider />
      <section className="py-20 px-6" style={{ background: "#0d0a07" }}>
        <div className="max-w-6xl mx-auto">
          <p className={`${font} text-center text-xs tracking-[0.4em] mb-3`} style={{ color: "rgba(212,160,23,0.6)" }}>
            ДРУЖИНА
          </p>
          <h2 className={`${font} text-3xl md:text-4xl text-center mb-12`} style={{ color: "#f0e6c8" }}>
            Рыцари Ордена Struktor
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {knights.map((k) => (
              <div key={k.title} style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(139,26,26,0.4)" }}>
                {/* Corner gold marks */}
                <div className="absolute top-2 left-2 w-3 h-3 border-t-2 border-l-2 z-10" style={{ borderColor: "#d4a017" }} />
                <div className="absolute top-2 right-2 w-3 h-3 border-t-2 border-r-2 z-10" style={{ borderColor: "#d4a017" }} />
                <div className="absolute bottom-2 left-2 w-3 h-3 border-b-2 border-l-2 z-10" style={{ borderColor: "#d4a017" }} />
                <div className="absolute bottom-2 right-2 w-3 h-3 border-b-2 border-r-2 z-10" style={{ borderColor: "#d4a017" }} />

                <img
                  src={k.img}
                  alt={k.title}
                  style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "center top", display: "block" }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(13,10,7,0.95) 0%, rgba(13,10,7,0.2) 50%, transparent 100%)" }} />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`${font} text-lg mb-1`} style={{ color: "#d4a017" }}>{k.title}</h3>
                  <p className="text-sm" style={{ color: "rgba(240,230,200,0.7)" }}>{k.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OrnamentDivider />
    </>
  );
}

/* ── PAINS ── */
const pains = [
  {
    icon: "🗡️",
    title: "Рыцари теряют гонцов",
    desc: "Обращения клиентов приходят со всех каналов, но дружина не справляется. Клиент уходит к соседнему феодалу.",
  },
  {
    icon: "⏳",
    title: "Время на летописи",
    desc: "Отчёты, пергаменты, перепись данных вручную — часы уходят на то, что механический слуга делает мгновенно.",
  },
  {
    icon: "🔮",
    title: "Туман войны в делах",
    desc: "Нет единой карты сражения: кто звонил, что обещал, где сделка. Хаос вместо стратегии полководца.",
  },
];

function Pains({ font }: { font: string }) {
  return (
    <>
      <OrnamentDivider />
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/images/knight-hero-web.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(13,10,7,0.92)" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <p className={`${font} text-center text-xs tracking-[0.4em] mb-3`} style={{ color: "rgba(212,160,23,0.6)" }}>
            СВИТОК СКОРБЕЙ
          </p>
          <h2 className={`${font} text-3xl md:text-4xl text-center mb-2`} style={{ color: "#f0e6c8" }}>
            Почему королевства
          </h2>
          <h2 className={`${font} text-3xl md:text-4xl text-center mb-12`} style={{ color: "#d4a017" }}>
            теряют злато
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {pains.map((p) => (
              <div
                key={p.title}
                className="p-7 transition-all"
                style={{
                  background: "rgba(20,12,6,0.85)",
                  border: "1px solid rgba(139,26,26,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                {/* Corner ornaments */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl">{p.icon}</span>
                </div>
                <h3 className={`${font} text-base mb-3`} style={{ color: "#f0e6c8" }}>{p.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,230,200,0.6)" }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OrnamentDivider />
    </>
  );
}

/* ── SERVICES ── */
const services = [
  {
    img: "/images/service-1-web.jpg",
    title: "Рыцари Продаж",
    subtitle: "Отдел продаж на автопилоте",
    desc: "ИИ-вестник отвечает на заявки 24/7. CRM записывает каждое слово. Ваши рыцари закрывают сделки — не занимаются перепиской.",
    features: ["Настройка AmoCRM / Bitrix24", "Бот отвечает клиентам мгновенно", "Авто-напоминания", "Карта сражений (дашборд)"],
    color: "#8b1a1a",
  },
  {
    img: "/images/knight-3-web.jpg",
    title: "Алхимия Бизнеса",
    subtitle: "Бизнес без ручного труда",
    desc: "Заклинаниями автоматизации освобождаем слуг от рутины: заявки, оповещения, летописи и перенос свитков между башнями.",
    features: ["Автоматизация задач", "Гонцы в Telegram", "Авто-летописи", "Интеграция с любой башней"],
    color: "#2a4a1a",
  },
  {
    img: "/images/service-3-web.jpg",
    title: "Тайные Тоннели",
    subtitle: "Все замки соединены",
    desc: "Прокладываем подземные ходы между CRM, сайтом и мессенджерами. Данные текут сами — без ручного переноса.",
    features: ["CRM ↔ сайт ↔ мессенджеры", "Telegram / WhatsApp гонцы", "Google Таблицы", "Связь между сервисами"],
    color: "#1a2a4a",
  },
];

function Services({ font }: { font: string }) {
  return (
    <section id="services" className="py-20 px-6" style={{ background: "#0d0a07" }}>
      <div className="max-w-6xl mx-auto">
        <p className={`${font} text-center text-xs tracking-[0.4em] mb-3`} style={{ color: "rgba(212,160,23,0.6)" }}>
          АРСЕНАЛ ОРДЕНА
        </p>
        <h2 className={`${font} text-3xl md:text-4xl text-center mb-12`} style={{ color: "#f0e6c8" }}>
          Чем вооружён Struktor
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="flex flex-col transition-all"
              style={{ background: "rgba(20,12,6,0.9)", border: "1px solid rgba(212,160,23,0.2)", overflow: "hidden" }}
            >
              {/* Image at top */}
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img
                  src={s.img}
                  alt={s.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, rgba(20,12,6,0.95) 100%)" }} />
                <div className="absolute bottom-0 left-0 right-0 h-0.5" style={{ background: s.color }} />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <span className={`${font} text-xs tracking-widest mb-1`} style={{ color: "rgba(212,160,23,0.7)" }}>
                  {s.title}
                </span>
                <h3 className={`${font} text-lg mb-3`} style={{ color: "#f0e6c8" }}>{s.subtitle}</h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(240,230,200,0.6)" }}>{s.desc}</p>
                <ul className="mt-auto space-y-2.5">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "rgba(240,230,200,0.75)" }}>
                      <span style={{ color: "#d4a017" }}>⚜</span> {f}
                    </li>
                  ))}
                </ul>
              </div>
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
    roman: "I",
    icon: "📜",
    title: "Совет мудрецов",
    sub: "30 минут",
    desc: "Бесплатный созвон. Разбираем ваше королевство, ищем где утекает злато и куда уходят гонцы.",
  },
  {
    roman: "II",
    icon: "🔨",
    title: "Строительство",
    sub: "7 дней",
    desc: "Возводим систему, обучаем дружину. Вы видите победу ещё до первой подати.",
  },
  {
    roman: "III",
    icon: "🛡️",
    title: "Охрана и рост",
    sub: "бессрочно",
    desc: "Остаёмся на страже, улучшаем механизмы, расширяем владения вместе с вами.",
  },
];

function HowItWorks({ font }: { font: string }) {
  return (
    <>
      <OrnamentDivider />
      <section
        className="relative py-20 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-castle-web.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(13,10,7,0.90)" }} />
        <div className="relative z-10 max-w-5xl mx-auto">
          <p className={`${font} text-center text-xs tracking-[0.4em] mb-3`} style={{ color: "rgba(212,160,23,0.6)" }}>
            ПУТЬ РЫЦАРЯ
          </p>
          <h2 className={`${font} text-3xl md:text-4xl text-center mb-12`} style={{ color: "#f0e6c8" }}>
            Как мы строим ваш порядок
          </h2>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px" style={{ background: "rgba(139,26,26,0.4)" }} />

            {steps.map((s) => (
              <div key={s.roman} className="flex flex-col items-center text-center">
                {/* Roman numeral shield */}
                <div
                  className="w-20 h-20 flex flex-col items-center justify-center mb-5 relative"
                  style={{
                    background: "rgba(20,12,6,0.9)",
                    border: "2px solid rgba(139,26,26,0.5)",
                    clipPath: "polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)",
                  }}
                >
                  <span className={`${font} text-2xl`} style={{ color: "#d4a017" }}>{s.roman}</span>
                </div>
                <div className="text-2xl mb-3">{s.icon}</div>
                <h3 className={`${font} text-lg mb-1`} style={{ color: "#f0e6c8" }}>{s.title}</h3>
                <p className="text-xs mb-3 tracking-widest uppercase" style={{ color: "#d4a017" }}>{s.sub}</p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,230,200,0.6)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OrnamentDivider />
    </>
  );
}

/* ── RESULTS ── */
const stats = [
  { value: "3×", label: "быстрее обрабатываются гонцы" },
  { value: "80%", label: "рутины уходит механическим слугам" },
  { value: "7", label: "дней до первой победы" },
  { value: "24/7", label: "рыцарь несёт службу" },
];

function Results({ font }: { font: string }) {
  return (
    <section className="py-20 px-6" style={{ background: "#0d0a07" }}>
      <div className="max-w-4xl mx-auto text-center">
        <p className={`${font} text-xs tracking-[0.4em] mb-3`} style={{ color: "rgba(212,160,23,0.6)" }}>
          ТРОФЕИ ОРДЕНА
        </p>
        <h2 className={`${font} text-3xl md:text-4xl mb-12`} style={{ color: "#f0e6c8" }}>
          Что получает владыка
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="p-6"
              style={{
                background: "rgba(20,12,6,0.9)",
                border: "1px solid rgba(139,26,26,0.3)",
                position: "relative",
              }}
            >
              {/* Corner marks */}
              <div className="absolute top-1.5 left-1.5 w-2 h-2 border-t border-l" style={{ borderColor: "#d4a017" }} />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 border-t border-r" style={{ borderColor: "#d4a017" }} />
              <div className="absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l" style={{ borderColor: "#d4a017" }} />
              <div className="absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r" style={{ borderColor: "#d4a017" }} />
              <div className={`${font} text-4xl mb-2`} style={{ color: "#d4a017" }}>{s.value}</div>
              <div className="text-xs leading-relaxed" style={{ color: "rgba(240,230,200,0.55)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FINAL CTA ── */
function FinalCTA({ font }: { font: string }) {
  return (
    <>
      <OrnamentDivider />
      <section
        id="cta"
        className="relative py-28 px-6 overflow-hidden"
        style={{
          backgroundImage: "url('/images/bg-castle-web.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(13,10,7,0.87)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at center, rgba(139,26,26,0.1) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          {/* Wax seal style header */}
          <div
            className="w-20 h-20 flex items-center justify-center mx-auto mb-8"
            style={{
              background: "linear-gradient(135deg, #8b1a1a, #5a0f0f)",
              border: "3px solid rgba(212,160,23,0.5)",
              clipPath: "polygon(50% 0%, 100% 15%, 100% 85%, 50% 100%, 0% 85%, 0% 15%)",
              boxShadow: "0 0 30px rgba(139,26,26,0.4)",
            }}
          >
            <span style={{ fontSize: "28px" }}>⚔</span>
          </div>

          <h2 className={`${font} text-4xl md:text-5xl mb-3`} style={{ color: "#f0e6c8" }}>
            Вступите в Орден
          </h2>
          <h3 className={`${font} text-2xl mb-6`} style={{ color: "#d4a017" }}>
            7 дней без подати
          </h3>

          <div className="w-32 h-px mx-auto mb-6" style={{ background: "rgba(139,26,26,0.5)" }} />

          <p className="text-lg leading-relaxed mb-10" style={{ color: "rgba(240,230,200,0.7)" }}>
            Настроим систему под ваше королевство.
            Увидите победу — останетесь.
            <br />
            Нет — не должны ни гроша и ни монеты.
          </p>

          <a
            href="https://t.me/SwDeepak"
            className={`${font} inline-block px-12 py-5 text-sm tracking-widest transition-all`}
            style={{
              background: "linear-gradient(135deg, #8b1a1a 0%, #6b1010 100%)",
              color: "#f0e6c8",
              border: "1px solid rgba(212,160,23,0.5)",
              boxShadow: "0 4px 30px rgba(139,26,26,0.5), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            ⚔ ЗАПИСАТЬСЯ НА СОВЕТ ⚔
          </a>

          <p className="text-xs mt-5 tracking-widest" style={{ color: "rgba(240,230,200,0.3)" }}>
            ОТВЕТИМ БЫСТРЕЕ ПОЧТОВОГО ГОЛУБЯ
          </p>
        </div>
      </section>
    </>
  );
}

/* ── FOOTER ── */
function Footer({ font }: { font: string }) {
  return (
    <footer
      className="py-8 px-6"
      style={{
        borderTop: "1px solid rgba(139,26,26,0.3)",
        background: "#080604",
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span style={{ fontSize: "20px" }}>🛡️</span>
          <span className={`${font} tracking-widest text-base`} style={{ color: "#d4a017" }}>STRUKTOR</span>
        </div>
        <p className="text-sm tracking-widest" style={{ color: "rgba(240,230,200,0.25)" }}>
          © ANNO DOMINI 2025 · ОРДЕН АВТОМАТИЗАТОРОВ
        </p>
        <a
          href="https://t.me/SwDeepak"
          className="text-sm tracking-widest transition-colors"
          style={{ color: "rgba(240,230,200,0.4)" }}
        >
          СВЯЗЬ С ОРДЕНОМ →
        </a>
      </div>
    </footer>
  );
}
