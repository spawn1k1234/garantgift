import { useEffect, useState } from "react";
import { getUserData } from "../telegram";

export default function Profile() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const user = getUserData();
    if (user) {
      setUserData(user);
    }
  }, []);

  if (!userData) {
    return (
      <div className="flex items-center justify-center h-screen">
        <h1>
          Данные пользователя не доступны. Пожалуйста, откройте приложение через
          Telegram.
        </h1>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {userData.photo_url && (
        <img
          src={userData.photo_url}
          alt="avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
      )}
      <p>
        <strong>Ник:</strong> @{userData.username || "не указано"}
      </p>
      <p>
        <strong>Имя:</strong> {userData.first_name} {userData.last_name || ""}
      </p>
      <p>
        <strong>Телеграм ID:</strong> {userData.id}
      </p>
      {userData.phone_number && (
        <p>
          <strong>Телефон:</strong> {userData.phone_number}
        </p>
      )}
    </div>
  );
}
