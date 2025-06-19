import { user } from "../telegram";

export default function Profile() {
  if (!user || !user.id) {
    return (
      <div className="flex items-center justify-center h-screen text-center p-4">
        <p>
          Информация недоступна. Пожалуйста, откройте приложение через Telegram.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {user.photo_url && (
        <img
          src={user.photo_url}
          alt="avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
      )}
      <p>
        <strong>Ник:</strong> @{user.username || "не указано"}
      </p>
      <p>
        <strong>Имя:</strong> {user.first_name} {user.last_name || ""}
      </p>
      <p>
        <strong>Телеграм ID:</strong> {user.id}
      </p>
      {user.phone_number && (
        <p>
          <strong>Телефон:</strong> {user.phone_number}
        </p>
      )}
    </div>
  );
}
