import React from "react";

function ToggleTheme({ theme, cambiarTema }) {
  return (
    <button className="toggle-btn" onClick={cambiarTema}>
      {theme === "light" ? "🌙 Modo Oscuro" : "☀ Modo Claro"}
    </button>
  );
}

export default ToggleTheme;
