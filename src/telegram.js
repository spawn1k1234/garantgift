// src/telegram.js
export const getUserData = () => {
  const tg = window.Telegram?.WebApp;

  if (!tg) {
    console.error("Telegram WebApp API не найден");
    return null;
  }

  tg.ready(); // Инициализируем WebApp API

  // Данные пользователя из initDataUnsafe
  const user = tg.initDataUnsafe?.user;

  if (!user) {
    console.error("Информация о пользователе недоступна.");
    return null;
  }

  return user;
};
