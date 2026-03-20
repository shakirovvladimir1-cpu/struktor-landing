"use client";
import { Cinzel, Crimson_Text } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: ["400", "600", "700", "900"] });
const crimson = Crimson_Text({ subsets: ["latin"], weight: ["400", "600"] });

export default function HomeV5() {
  return (
    <main className={`min-h-screen ${crimson.className}`} style={{ background: "#0d0907", color: "#E8D5A3" }}>
      <Nav font={cinzel.className} />
      <Hero font={cinzel.className} />
      <Senatus font={cinzel.className} />
      <Legions font={cinzel.className} />
      <ViaRomana font={cinzel.className} />
      <Triumphus font={cinzel.className} />
      <Foedus font={cinzel.className} />
      <Footer font={cinzel.className} />
    </main>
  );
}

/* ── NAV ── */
function Nav({ font }: { font: string }) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{ background: "rgba(13,9,7,0.92)", borderColor: "#C9A227/30", backdropFilter: "blur(12px)" }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className={font}>
          <span className="text-xl font-bold tracking-widest" style={{ color: "#C9A227" }}>
            ⚔ STRUKTOR
          </span>
          <span className="text-xs tracking-[0.3em] ml-3 opacity-50" style={{ color: "#E8D5A3" }}>
            LEGIO ORDINIS
          </span>
        </div>
        <a
          href="#foedus"
          className={`${font} text-xs tracking-widest font-semibold px-5 py-2 border transition-all hover:opacity-80`}
          style={{ borderColor: "#C9A227", color: "#C9A227" }}
        >
          7 ДНЕЙ БЕСПЛАТНО
        </a>
      </div>
    </nav>
  );
}

/* ── HERO ── */
function Hero({ font }: { font: string }) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/rome-colosseum.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 40%",
      }}
    >
      {/* Overlays */}
      <div className="absolute inset-0" style={{ background: "rgba(13,9,7,0.78)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to top, #0d0907 0%, transparent 40%)" }} />
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, #0d0907 0%, transparent 20%)" }} />

      {/* Gold vignette glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(201,162,39,0.08) 0%, transparent 65%)" }}
      />

      {/* Decorative horizontal lines */}
      <div className="absolute top-1/2 left-0 right-0 h-px opacity-10" style={{ background: "#C9A227" }} />

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* SPQS badge */}
        <div
          className={`${font} inline-block border px-6 py-2 text-xs tracking-[0.5em] mb-10 opacity-70`}
          style={{ borderColor: "#C9A227", color: "#C9A227" }}
        >
          S · P · Q · S
        </div>

        {/* Latin motto */}
        <div className={`${font} text-sm md:text-base tracking-[0.4em] mb-6 opacity-60`} style={{ color: "#C9A227" }}>
          ORDINEM · DISCIPLINAM · VICTORIAM
        </div>

        <h1
          className={`${font} text-5xl md:text-7xl lg:text-8xl font-black leading-none mb-8`}
          style={{
            color: "#E8D5A3",
            textShadow: "0 0 60px rgba(201,162,39,0.3), 0 4px 20px rgba(0,0,0,0.8)",
            letterSpacing: "0.05em",
          }}
        >
          STRUKTOR<br />
          <span style={{ color: "#C9A227", fontSize: "0.7em" }}>НАВОДИТ ПОРЯДОК</span>
        </h1>

        <div className="w-32 h-px mx-auto my-8" style={{ background: "#C9A227", opacity: 0.6 }} />

        <p className={`${crimson.className} text-xl md:text-2xl max-w-3xl mx-auto mb-4 leading-relaxed`} style={{ color: "#E8D5A3", opacity: 0.85 }}>
          Как Легионы строили Римскую Империю — мы строим порядок в вашем бизнесе.
          Автоматизация, CRM, ИИ-агенты — всё по команде.
        </p>
        <p className={`${crimson.className} text-lg mb-12`} style={{ color: "#C9A227", opacity: 0.7 }}>
          Малый и средний бизнес · 7 дней без риска
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#foedus"
            className={`${font} text-sm tracking-widest font-semibold px-10 py-4 transition-all hover:opacity-90`}
            style={{ background: "#8B1A1A", color: "#E8D5A3", border: "1px solid #C9A227" }}
          >
            НАЧАТЬ КАМПАНИЮ
          </a>
          <a
            href="#legions"
            className={`${font} text-sm tracking-widest px-10 py-4 border transition-all hover:opacity-80`}
            style={{ borderColor: "#C9A227/40", color: "#C9A227" }}
          >
            АРСЕНАЛ ЛЕГИОНА
          </a>
        </div>
      </div>

      {/* Bottom ornament */}
      <div className={`${font} absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.5em] opacity-30`} style={{ color: "#C9A227" }}>
        ✦ ✦ ✦
      </div>
    </section>
  );
}

/* ── SENATUS — Pain Points ── */
function Senatus({ font }: { font: string }) {
  const pains = [
    {
      icon: "⚔",
      title: "Легион без строя",
      desc: "Менеджеры работают хаотично, заявки теряются, клиенты уходят к конкурентам.",
    },
    {
      icon: "🏛",
      title: "Замки без мостов",
      desc: "CRM, сайт, мессенджеры — каждый сам по себе. Данные переносятся вручную.",
    },
    {
      icon: "⌛",
      title: "Ручной труд гладиатора",
      desc: "Рутинные задачи пожирают часы — вместо стратегии и завоевания рынка.",
    },
  ];

  return (
    <section className="py-24 px-6" style={{ background: "#100c09" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`${font} text-xs tracking-[0.5em] mb-4 opacity-50`} style={{ color: "#C9A227" }}>
            SENATUS CONSULTUM
          </div>
          <h2 className={`${font} text-3xl md:text-4xl font-bold mb-4`} style={{ color: "#E8D5A3" }}>
            Что мешает вашему бизнесу
          </h2>
          <div className="w-20 h-px mx-auto" style={{ background: "#C9A227", opacity: 0.5 }} />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pains.map((p) => (
            <div
              key={p.title}
              className="p-8 text-center border"
              style={{
                borderColor: "rgba(201,162,39,0.2)",
                background: "rgba(201,162,39,0.03)",
              }}
            >
              <div className="text-4xl mb-5">{p.icon}</div>
              <h3 className={`${font} text-lg font-semibold mb-3`} style={{ color: "#C9A227" }}>
                {p.title}
              </h3>
              <p className="text-base leading-relaxed opacity-75">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── TRES LEGIONES — Services ── */
const legions = [
  {
    number: "I",
    name: "LEGIO COMMERCIA",
    title: "Отдел продаж на автопилоте",
    desc: "ИИ-легионер принимает первый бой — отвечает на заявки 24/7, не спит, заносит в CRM. Ваши рыцари закрывают сделки.",
    features: ["Настройка AmoCRM / Bitrix24", "Бот отвечает клиентам мгновенно", "Автоматические напоминания клиентам", "Дашборд командира"],
    color: "#8B1A1A",
  },
  {
    number: "II",
    name: "LEGIO MACHINA",
    title: "Бизнес без ручного труда",
    desc: "Автоматизируем рутину — заявки, уведомления, отчёты. Ваши люди думают о стратегии, машины несут службу.",
    features: ["Автоматизация задач", "Telegram / WhatsApp боты", "Авто-отчёты и сводки", "Интеграция любых сервисов"],
    color: "#1A3A1A",
  },
  {
    number: "III",
    name: "LEGIO NEXUS",
    title: "Все системы соединены",
    desc: "Прокладываем дороги между CRM, сайтом и мессенджерами. Данные текут как по Via Appia — без ручного переноса.",
    features: ["CRM ↔ сайт ↔ мессенджеры", "Подключение нужных сервисов", "Google таблицы", "Синхронизация данных"],
    color: "#1A1A3A",
  },
];

function Legions({ font }: { font: string }) {
  return (
    <section
      id="legions"
      className="py-24 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/rome-forum.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(13,9,7,0.92)" }} />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className={`${font} text-xs tracking-[0.5em] mb-4 opacity-50`} style={{ color: "#C9A227" }}>
            TRES LEGIONES
          </div>
          <h2 className={`${font} text-3xl md:text-5xl font-bold mb-4`} style={{ color: "#E8D5A3" }}>
            Три Легиона Struktor
          </h2>
          <p className="text-lg opacity-70 max-w-2xl mx-auto">
            Каждый Legion специализирован. Все три — работают как единый строй.
          </p>
          <div className="w-20 h-px mx-auto mt-6" style={{ background: "#C9A227", opacity: 0.5 }} />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {legions.map((l) => (
            <div
              key={l.number}
              className="p-8 border flex flex-col"
              style={{ borderColor: "rgba(201,162,39,0.25)", background: "rgba(13,9,7,0.7)" }}
            >
              {/* Legion number */}
              <div
                className={`${font} text-6xl font-black mb-2 leading-none`}
                style={{ color: l.color, opacity: 0.8, WebkitTextStroke: "1px rgba(201,162,39,0.3)" }}
              >
                {l.number}
              </div>
              <div className={`${font} text-xs tracking-[0.4em] mb-4 opacity-50`} style={{ color: "#C9A227" }}>
                {l.name}
              </div>
              <h3 className={`${font} text-xl font-bold mb-4`} style={{ color: "#E8D5A3" }}>
                {l.title}
              </h3>
              <p className="text-base leading-relaxed opacity-75 mb-6 flex-1">{l.desc}</p>

              {/* Features */}
              <ul className="space-y-2">
                {l.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm opacity-70">
                    <span style={{ color: "#C9A227" }}>✦</span>
                    {f}
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

/* ── VIA ROMANA — How It Works ── */
function ViaRomana({ font }: { font: string }) {
  const steps = [
    {
      num: "I",
      latin: "EXPLORATIO",
      title: "Разведка",
      desc: "Изучаем ваш бизнес — процессы, боли, цели. Составляем план кампании. Бесплатно.",
    },
    {
      num: "II",
      latin: "CONSTRUCTIO",
      title: "Строительство",
      desc: "Настраиваем CRM, автоматизации, ботов. Как легионеры строили дороги — быстро и надёжно.",
    },
    {
      num: "III",
      latin: "VICTORIA",
      title: "Победа",
      desc: "Система работает. Вы управляете, машины несут службу. Масштабируемся вместе.",
    },
  ];

  return (
    <section className="py-24 px-6" style={{ background: "#0d0907" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <div className={`${font} text-xs tracking-[0.5em] mb-4 opacity-50`} style={{ color: "#C9A227" }}>
            VIA ROMANA
          </div>
          <h2 className={`${font} text-3xl md:text-5xl font-bold mb-4`} style={{ color: "#E8D5A3" }}>
            Путь к Порядку
          </h2>
          <div className="w-20 h-px mx-auto" style={{ background: "#C9A227", opacity: 0.5 }} />
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Horizontal line desktop */}
          <div
            className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px"
            style={{ background: "linear-gradient(to right, transparent, #C9A227, transparent)", opacity: 0.4 }}
          />

          <div className="grid md:grid-cols-3 gap-12 md:gap-6">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                {/* Number circle */}
                <div
                  className={`${font} w-24 h-24 mx-auto mb-6 flex items-center justify-center text-4xl font-black border-2 relative`}
                  style={{ borderColor: "#C9A227", color: "#C9A227", background: "#0d0907" }}
                >
                  {s.num}
                </div>
                <div className={`${font} text-xs tracking-[0.4em] mb-3 opacity-50`} style={{ color: "#C9A227" }}>
                  {s.latin}
                </div>
                <h3 className={`${font} text-xl font-bold mb-4`} style={{ color: "#E8D5A3" }}>
                  {s.title}
                </h3>
                <p className="text-base leading-relaxed opacity-70">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── TRIUMPHUS — Results ── */
function Triumphus({ font }: { font: string }) {
  const stats = [
    { num: "3×", label: "Рост закрытых сделок", sub: "в среднем по клиентам" },
    { num: "40ч", label: "Экономия в неделю", sub: "на ручных операциях" },
    { num: "7", label: "Дней до результата", sub: "первый эффект виден сразу" },
    { num: "24/7", label: "Легион на страже", sub: "ИИ не спит и не болеет" },
  ];

  return (
    <section
      className="py-24 px-6 relative"
      style={{
        background: "#100c09",
        borderTop: "1px solid rgba(201,162,39,0.15)",
        borderBottom: "1px solid rgba(201,162,39,0.15)",
      }}
    >
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #C9A227 0px, #C9A227 1px, transparent 1px, transparent 60px)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className={`${font} text-xs tracking-[0.5em] mb-4 opacity-50`} style={{ color: "#C9A227" }}>
            TRIUMPHUS
          </div>
          <h2 className={`${font} text-3xl md:text-5xl font-bold`} style={{ color: "#E8D5A3" }}>
            Трофеи Легиона
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div
              key={s.num}
              className="text-center p-6 border"
              style={{ borderColor: "rgba(201,162,39,0.2)" }}
            >
              <div
                className={`${font} text-5xl md:text-6xl font-black mb-3`}
                style={{ color: "#C9A227", textShadow: "0 0 30px rgba(201,162,39,0.4)" }}
              >
                {s.num}
              </div>
              <div className={`${font} text-sm font-semibold mb-1`} style={{ color: "#E8D5A3" }}>
                {s.label}
              </div>
              <div className="text-xs opacity-50">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── FOEDUS — CTA ── */
function Foedus({ font }: { font: string }) {
  return (
    <section
      id="foedus"
      className="py-28 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url('/images/rome-colosseum.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center 60%",
      }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(13,9,7,0.88)" }} />
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse at center, rgba(139,26,26,0.25) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className={`${font} text-xs tracking-[0.5em] mb-6 opacity-50`} style={{ color: "#C9A227" }}>
          FOEDUS
        </div>

        {/* Ornamental divider */}
        <div className={`${font} text-2xl mb-6 opacity-30`} style={{ color: "#C9A227" }}>
          ⚔ ✦ ⚔
        </div>

        <h2
          className={`${font} text-4xl md:text-6xl font-black mb-6 leading-tight`}
          style={{ color: "#E8D5A3", textShadow: "0 0 40px rgba(201,162,39,0.2)" }}
        >
          Заключите союз<br />
          <span style={{ color: "#C9A227" }}>с Легионом</span>
        </h2>

        <div className="w-20 h-px mx-auto mb-8" style={{ background: "#C9A227", opacity: 0.5 }} />

        <p className="text-lg md:text-xl leading-relaxed mb-4 opacity-80">
          7 дней бесплатно. Полный доступ к системе.
          Если не понравится — расходимся без обязательств.
        </p>
        <p className={`${font} text-sm tracking-widest mb-12 opacity-50`} style={{ color: "#C9A227" }}>
          SINE PERICULO · БЕЗ РИСКА
        </p>

        <a
          href="https://t.me/struktor_work"
          className={`${font} inline-block text-sm tracking-widest font-bold px-14 py-5 border-2 transition-all hover:opacity-90`}
          style={{
            background: "#8B1A1A",
            borderColor: "#C9A227",
            color: "#C9A227",
            boxShadow: "0 0 40px rgba(139,26,26,0.4)",
          }}
        >
          ПРИНЯТЬ КОМАНДОВАНИЕ →
        </a>

        <p className="text-sm opacity-40 mt-6">
          Или напишите в Telegram · Ответим в течение часа
        </p>
      </div>
    </section>
  );
}

/* ── FOOTER ── */
function Footer({ font }: { font: string }) {
  return (
    <footer
      className="py-10 px-6 border-t text-center"
      style={{ borderColor: "rgba(201,162,39,0.15)", background: "#080604" }}
    >
      <div className={`${font} text-lg font-bold tracking-widest mb-2`} style={{ color: "#C9A227" }}>
        ⚔ STRUKTOR
      </div>
      <p className={`${font} text-xs tracking-[0.4em] opacity-30 mb-4`} style={{ color: "#E8D5A3" }}>
        LEGIO ORDINIS · MMXXVI
      </p>
      <p className="text-sm opacity-40">Автоматизация бизнеса · CRM · ИИ-агенты</p>
    </footer>
  );
}

