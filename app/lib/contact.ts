/*
 * Контакты и ссылки Struktor — единственное место, где они заданы.
 * Сменился номер WhatsApp или часы ответа — правим только здесь:
 * главная, футер, /privacy, /terms, /v2–/v5 и /llms.txt берут значения отсюда.
 */
export const WA_NUMBER = "77019984123";
export const WA_DISPLAY = "+7 701 998 41 23";
export const WA_URL = `https://wa.me/${WA_NUMBER}`;
export const WA_HOURS = "Отвечаем в WhatsApp с 10:00 до 18:00 по Алматы";
export const WA_PREFILL = "Здравствуйте, можно узнать подробнее? Мне это интересно";

export function waUrl(text: string = WA_PREFILL): string {
  return `${WA_URL}?text=${encodeURIComponent(text)}`;
}

/* Лендинги: агентство (запуск под ключ) и продукт UltraBot от Struktor. */
export const OFFER_URL = "https://offer.struktor.work";
export const SHOP_URL = "https://shop.struktor.work";
export const SALES_URL = "https://sales.struktor.work";
