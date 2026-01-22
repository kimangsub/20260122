import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li><a href="#home">홈</a></li>
        <li><a href="#projects">프로젝트</a></li>
        <li><a href="#skills">기술스택</a></li>
        <li><a href="#education">교육</a></li>
        <li><a href="#contact">연락처</a></li>

        <li>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            title={theme === "light" ? "다크 모드" : "라이트 모드"}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </li>
      </ul>
    </nav>
  );
}
