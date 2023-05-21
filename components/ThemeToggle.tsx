import { useState } from "react";
import React from 'react';
import * as Switch from '@radix-ui/react-switch';

const SwitchDemo = () => (
  <form>
    
  </form>
);

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div onClick={handleToggle} style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="airplane-mode" style={{ paddingRight: 15 }}>
        {darkMode ? "Light" : "Dark"} Mode
      </label>
      <Switch.Root className="SwitchRoot" id="airplane-mode">
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  );
};

export default ThemeToggle;
