import { Link, useLocation } from "react-router-dom";

export default function BottomNav() {
  const { pathname } = useLocation();
  const active = (path) =>
    pathname === path ? "text-blue-500" : "text-gray-600";

  return (
    <nav className="fixed bottom-0 w-full flex justify-around bg-white border-t p-2">
      <Link to="/" className={active("/")}>
        Главная
      </Link>
      <Link to="/about" className={active("/about")}>
        О нас
      </Link>
      <Link to="/profile" className={active("/profile")}>
        Профиль
      </Link>
    </nav>
  );
}
