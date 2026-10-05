import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

const EMAIL = "shakirov@struktor.work";

export const metadata: Metadata = {
  title: "Условия использования · Struktor",
  description:
    "Условия использования сервиса Struktor Relay (UltraBot v2): права и обязанности сторон, оплата, ответственность. Terms of Service in Russian and English.",
  alternates: { canonical: "https://struktor.work/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Условия использования"
      meta={
        <>
          Сервис Struktor Relay (UltraBot v2) · Редакция от 5 октября 2026 ·{" "}
          <Link href="/privacy" className="text-[#4F8EF7] hover:underline">Политика конфиденциальности</Link> ·{" "}
          <a href="#en" className="text-[#4F8EF7] hover:underline">English version</a>
        </>
      }
    >
      <section>
        <h2>1. О сервисе</h2>
        <p>
          Struktor Relay (UltraBot v2) собирает сообщения покупателей бизнеса из мессенджеров в общий список
          «Входящие», передаёт их боту и менеджерам и отправляет ответы обратно.
        </p>
        <p>
          Сервис предоставляет ИП Шакиров Владимир Евгеньевич, бренд «Struktor». Адрес: Республика Казахстан,
          г. Астана, ул. Кабанбай батыра 6/5, кв. 12. Контакт: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>2. Кто может пользоваться</h2>
        <p>
          Бизнес (ИП или компания), который заключил с нами договор или получил пилотный доступ, и сотрудники,
          которых он пригласил. Бизнес отвечает за действия своих сотрудников в сервисе.
        </p>
      </section>

      <section>
        <h2>3. Что делает бизнес</h2>
        <ul>
          <li>Подключает только свои номера, страницы и аккаунты.</li>
          <li>
            Соблюдает правила мессенджеров: WhatsApp Business и Commerce Policy, правила Instagram и Messenger,
            правила Telegram — в том числе окна ответа и запрет рассылок без согласия.
          </li>
          <li>Сообщает своим покупателям, что переписка обрабатывается сервисом и может обслуживаться ботом.</li>
          <li>Не отправляет через сервис спам, незаконный контент и чужие персональные данные без основания.</li>
          <li>Хранит пароли сотрудников в тайне.</li>
        </ul>
      </section>

      <section>
        <h2>4. Что делаем мы</h2>
        <ul>
          <li>
            Доставляем сообщения между мессенджерами и кабинетом бизнеса и храним их по{" "}
            <Link href="/privacy">политике конфиденциальности</Link>.
          </li>
          <li>Сообщаем о плановых работах и сбоях.</li>
          <li>Помогаем с подключением и настройкой.</li>
        </ul>
      </section>

      <section>
        <h2>5. Оплата</h2>
        <p>
          Стоимость, порядок оплаты и сроки — в договоре или счёте для конкретного клиента. Платежи мессенджеров
          (например, сообщения WhatsApp Business по тарифам Meta) оплачивает бизнес, если в договоре не сказано иное.
        </p>
      </section>

      <section>
        <h2>6. Ограничение и прекращение доступа</h2>
        <p>
          Мы можем приостановить доступ, если бизнес нарушает эти условия или правила мессенджеров, предупредив
          его, когда это возможно. Бизнес может прекратить пользоваться сервисом в любой момент; данные удаляются
          по <Link href="/privacy#deletion">политике конфиденциальности</Link>.
        </p>
      </section>

      <section>
        <h2>7. Ответственность</h2>
        <ul>
          <li>
            Наша ответственность перед клиентом ограничена суммой, которую клиент заплатил за последний месяц
            пользования сервисом.
          </li>
          <li>
            Работа сервиса зависит от мессенджеров. Мы не отвечаем за действия платформ (WhatsApp / Meta, Telegram),
            в том числе за блокировку или ограничение номера или аккаунта, изменение их правил и недоступность.
          </li>
          <li>Мы не отвечаем за содержание сообщений, которые бизнес и его сотрудники отправляют через сервис.</li>
        </ul>
        <p>В остальном ответственность сторон определяется договором и законодательством Республики Казахстан.</p>
      </section>

      <section>
        <h2>8. Изменения и контакты</h2>
        <p>
          Новая редакция условий появляется на этой странице с датой. Вопросы:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>

      <section id="en" lang="en" className="border-t border-white/10 pt-10">
        <h2>Terms of Service (English version)</h2>
        <p>
          Struktor Relay (UltraBot v2) is provided by individual entrepreneur Vladimir Shakirov (IP Shakirov Vladimir
          Evgenievich), brand “Struktor”, Kabanbay Batyr St. 6/5, apt. 12, Astana, Republic of Kazakhstan. Contact:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Last updated: October 5, 2026.
        </p>
        <p>
          The service collects messages that customers send to a business via messaging platforms into a shared
          inbox, passes them to the business’s bot and staff, and sends replies back. It is available to businesses
          that have an agreement or pilot access with us, and to staff they invite.
        </p>
        <p>
          The business connects only its own numbers, pages and accounts; follows the platforms’ policies (WhatsApp
          Business and Commerce Policy, Instagram, Messenger, Telegram), including messaging windows and opt-in rules;
          informs its customers that conversations are processed by the service and may be handled by a bot; and does
          not send spam or unlawful content. We deliver and store messages under our{" "}
          <Link href="/privacy">Privacy Policy</Link>. Pricing is set in the individual agreement or invoice.
        </p>
        <p>
          <b>Liability.</b> Our liability to the client is limited to the amount the client paid for the last month
          of service. We are not liable for actions of the messaging platforms (WhatsApp / Meta, Telegram), including
          blocking or restriction of numbers or accounts, policy changes or outages. Otherwise liability is governed
          by the agreement and the laws of the Republic of Kazakhstan.
        </p>
      </section>
    </LegalPage>
  );
}
