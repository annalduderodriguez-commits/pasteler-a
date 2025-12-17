import { useEffect, useState } from "react";

function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
    >
      {darkMode ? "Modo Claro ☀" : "Modo Oscuro 🌙"}
    </button>
  );
}

export default DarkModeButton;
