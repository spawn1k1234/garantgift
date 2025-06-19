const tg = window.Telegram?.WebApp;
const user = tg?.initDataUnsafe?.user || {};

export { tg, user };
