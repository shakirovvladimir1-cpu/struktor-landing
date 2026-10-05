import type { Metadata } from "next";
import Link from "next/link";
import LegalPage from "../components/LegalPage";

const EMAIL = "shakirov@struktor.work";
const DELETION_URL = "https://relay.struktor.work/meta/data-deletion";

export const metadata: Metadata = {
  title: "Политика конфиденциальности · Struktor",
  description:
    "Какие данные обрабатывает сервис Struktor Relay (UltraBot v2), зачем, сколько хранит, кому передаёт и как их удалить. Privacy Policy in Russian and English.",
  alternates: { canonical: "https://struktor.work/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Политика конфиденциальности"
      meta={
        <>
          Сервис Struktor Relay (UltraBot v2) · Редакция от 5 октября 2026 ·{" "}
          <Link href="/terms" className="text-[#4F8EF7] hover:underline">Условия использования</Link> ·{" "}
          <a href="#en" className="text-[#4F8EF7] hover:underline">English version</a>
        </>
      }
    >
      <section>
        <h2>1. Кто мы</h2>
        <p>
          Struktor Relay (UltraBot v2) — сервис, который собирает сообщения покупателей бизнеса из мессенджеров
          (WhatsApp, Telegram, Instagram, Facebook Messenger) в общий список «Входящие» и передаёт их боту
          и менеджерам этого бизнеса.
        </p>
        <p>
          Оператор сервиса — ИП Шакиров Владимир Евгеньевич, бренд «Struktor». Адрес: Республика Казахстан,
          г. Астана, ул. Кабанбай батыра 6/5, кв. 12. Контакт по вопросам данных:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
        <p>
          Мы обрабатываем персональные данные в соответствии с Законом Республики Казахстан
          «О персональных данных и их защите» и правилами платформ, через которые работает сервис.
        </p>
      </section>

      <section>
        <h2>2. Чьи данные и в какой роли</h2>
        <p>
          Сервисом пользуется бизнес — наш клиент. Он подключает свои номера, страницы и аккаунты и решает,
          зачем обрабатывать переписку со своими покупателями. Для этих данных бизнес — владелец (контролёр),
          мы обрабатываем их по его поручению.
        </p>
        <p>Данные сотрудников бизнеса (вход в сервис) и контактные данные самого клиента мы обрабатываем как оператор.</p>
      </section>

      <section>
        <h2>3. Какие данные мы получаем</h2>
        <ul>
          <li><b>Сообщения</b>: текст, фото, голосовые, видео, документы, геопозиция, которые покупатель отправил бизнесу, и ответы бизнеса.</li>
          <li><b>Данные отправителя</b>, которые передаёт мессенджер: идентификатор, отображаемое имя, имя пользователя, номер телефона (WhatsApp).</li>
          <li><b>Служебные данные</b>: время сообщений, статусы доставки, кто из сотрудников отвечал, кому передан диалог.</li>
          <li><b>Данные сотрудников бизнеса</b>: имя, e-mail, роль, журнал действий.</li>
        </ul>
        <p>
          Мы не просим у покупателей пароли, платёжные данные и документы. Если покупатель сам прислал такие
          данные в сообщении, они хранятся как часть переписки.
        </p>
      </section>

      <section>
        <h2>4. Данные, которые мы получаем через API Meta</h2>
        <p>
          Если бизнес подключил свои аккаунты Instagram, страницу Facebook (Messenger) или номер WhatsApp Business,
          мы получаем через API Meta (Instagram Graph API, Messenger Platform, WhatsApp Business Platform):
        </p>
        <ul>
          <li>сообщения, которые пользователи отправили бизнесу, и вложения к ним;</li>
          <li>имя профиля пользователя и, если доступно, имя пользователя (username);</li>
          <li>идентификаторы: ID пользователя в рамках страницы или аккаунта (PSID, IGSID), номер телефона WhatsApp, ID страницы, аккаунта и номера бизнеса;</li>
          <li>статусы доставки и прочтения сообщений.</li>
        </ul>
        <p>Мы используем эти данные только для того, чтобы:</p>
        <ul>
          <li>доставить сообщение во «Входящие» бизнеса и ответ бизнеса обратно пользователю;</li>
          <li>по указанию бизнеса сформировать ответ с помощью ИИ-ассистента, которого бизнес включил и настроил.</li>
        </ul>
        <p>
          Мы не продаём и не передаём данные из API Meta третьим лицам для рекламы, не строим по ним профили
          пользователей и не используем их ни для каких других целей.
        </p>
      </section>

      <section>
        <h2>5. Зачем ещё мы используем данные</h2>
        <ul>
          <li>Передать сообщение сценариям бота и в CRM, которые подключил бизнес.</li>
          <li>Показать бизнесу отчёты: сколько обращений, как быстро ответили.</li>
          <li>Безопасность и разбор сбоев (журналы без текста сообщений).</li>
        </ul>
        <p>Мы не продаём данные, не используем переписку для рекламы и не обучаем на ней модели.</p>
      </section>

      <section>
        <h2>6. Кому передаём (обработчики)</h2>
        <ul>
          <li><b>Хостинг</b>: Hetzner Online GmbH — серверы в Европейском союзе.</li>
          <li>
            <b>Поставщик моделей ИИ</b> (Microsoft Azure OpenAI / Anthropic) — только если бизнес включил
            ИИ-ассистента. Передаётся текст диалога, нужный для ответа. По условиям API этих поставщиков данные
            не используются для обучения их моделей.
          </li>
          <li><b>Мессенджеры</b> (Meta Platforms — WhatsApp, Instagram, Messenger; Telegram) — чтобы доставить ответ.</li>
          <li><b>Сервисы, которые подключил сам бизнес</b>: его CRM и сценарии автоматизации.</li>
          <li><b>Государственные органы</b> — только по законному требованию.</li>
        </ul>
        <p>Данные хранятся на серверах в Европейском союзе. Мы не продаём данные третьим лицам.</p>
      </section>

      <section>
        <h2>7. Сколько храним</h2>
        <ul>
          <li>Сообщения и контакты — пока у бизнеса действует подписка на сервис.</li>
          <li>Медиафайлы — по настройке бизнеса, по умолчанию 30 дней.</li>
          <li>По запросу на удаление — удаляем в течение 30 дней.</li>
          <li>Резервные копии перезаписываются в течение 30 дней; после этого удалённые данные не восстанавливаются.</li>
        </ul>
      </section>

      <section id="deletion">
        <h2>8. Как удалить данные</h2>
        <p>
          <b>Пользователь Facebook или Instagram</b> может удалить приложение в настройках своего аккаунта
          (раздел «Приложения и сайты» / «Apps and Websites») и нажать «Удалить». Meta автоматически отправит
          нам запрос на адрес <a href={DELETION_URL}>{DELETION_URL}</a>. Мы удалим данные этого пользователя
          в течение 30 дней и вернём код подтверждения и ссылку, где виден статус запроса.
        </p>
        <p>
          <b>Вручную</b>: напишите на <a href={`mailto:${EMAIL}`}>{EMAIL}</a> с темой «Удаление данных». Укажите
          мессенджер, имя профиля или номер телефона и название бизнеса, которому вы писали. Мы удалим данные
          в течение 30 дней и сообщим об этом в ответ.
        </p>
        <p>
          <b>Покупатель</b> также может попросить удалить переписку сам бизнес, которому он писал.
          <b> Бизнес</b> удаляет диалоги и подключения в своём кабинете или по письму на{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>9. Защита</h2>
        <p>
          Соединения шифруются (HTTPS). Ключи доступа к мессенджерам хранятся только на сервере и не показываются
          в интерфейсе. Доступ к переписке есть только у сотрудников бизнеса с нужной ролью и у нас — для поддержки
          по запросу бизнеса.
        </p>
      </section>

      <section>
        <h2>10. Ваши права</h2>
        <p>
          Вы можете узнать, какие ваши данные мы обрабатываем, попросить исправить или удалить их и отозвать
          согласие. Напишите на <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>

      <section>
        <h2>11. Изменения</h2>
        <p>
          Если политика изменится, новая редакция появится на этой странице с новой датой. О существенных изменениях
          сообщим клиентам заранее.
        </p>
      </section>

      <section id="en" lang="en" className="border-t border-white/10 pt-10">
        <h2>Privacy Policy (English version)</h2>
        <p>
          Struktor Relay (UltraBot v2) is operated by individual entrepreneur Vladimir Shakirov (IP Shakirov Vladimir
          Evgenievich), brand “Struktor”, Kabanbay Batyr St. 6/5, apt. 12, Astana, Republic of Kazakhstan. Contact:{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. Last updated: October 5, 2026.
        </p>
        <p>
          The service routes messages that customers send to a business via WhatsApp, Telegram, Instagram and Facebook
          Messenger into that business’s shared inbox. The business is the controller of its customers’ data; we
          process it on the business’s behalf. We process personal data in line with the Law of the Republic of
          Kazakhstan “On Personal Data and Its Protection”.
        </p>
        <p>
          <b>Data from Meta APIs.</b> We receive messages and attachments sent to the business, the user’s profile
          name (and username where available), IDs (page-scoped / Instagram-scoped user ID, WhatsApp phone number,
          business page/account IDs) and delivery statuses. We use them only to deliver messages to the business’s
          inbox and replies back to the user, and to generate AI replies when the business has enabled an AI assistant.
          We do not sell this data, share it with third parties for advertising, or use it for any other purpose.
        </p>
        <p>
          <b>Sub-processors.</b> Hetzner Online GmbH (hosting, European Union); an AI model provider (Microsoft Azure
          OpenAI / Anthropic), only when the business enables the AI assistant — under their API terms the data is
          not used to train their models; the messaging platforms themselves; the business’s own CRM and automations.
        </p>
        <p>
          <b>Retention.</b> Messages and contacts are kept while the business’s subscription is active. Data is deleted
          within 30 days of a deletion request. Backups rotate within 30 days.
        </p>
        <p>
          <b>Data deletion.</b> Remove the app in your Facebook/Instagram settings (Apps and Websites); Meta sends a
          request to <a href={DELETION_URL}>{DELETION_URL}</a>, and we delete your data within 30 days and return
          a confirmation code and a status link. Or email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with the subject
          “Data deletion”, stating the messenger, your profile name or phone number, and the business you contacted.
        </p>
      </section>
    </LegalPage>
  );
}
