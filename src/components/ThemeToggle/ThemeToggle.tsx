import { useState } from "react";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.getAttribute("data-bs-theme") === "dark"
  );

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-bs-theme", newTheme);
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button type="button" className={`btn ${isDarkMode ? "btn-dark" : "btn-light"} align-self-end`} style={{ display: "flex", padding: "0.1rem" }} onClick={toggleTheme}>
      {isDarkMode ? (
        <span className="material-symbols-outlined">dark_mode</span>
      ) : (
        <span className="material-symbols-outlined">light_mode</span>
      )}
    </button>
  );
}