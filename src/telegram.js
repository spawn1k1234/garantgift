// src/telegram.js
export const tg = window.Telegram.WebApp;

export const getUserData = () => {
  if (!tg) {
    console.error("Telegram WebApp API не найден");
    return null;
  }

  tg.ready();

  // Данные пользователя из initDataUnsafe
  const user = tg.initDataUnsafe?.user;

  if (!user) {
    console.error("Пользовательские данные недоступны.");
    return null;
  }

  return user;
};

export const user = getUserData();
