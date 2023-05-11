import { useState } from "react";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <button className="themeToggle" onClick={handleToggle}>
      {darkMode ? "Dark Mode" : "Light Mode"}
    </button>
  );
};

export default ThemeToggle;
