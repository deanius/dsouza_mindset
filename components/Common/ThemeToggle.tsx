import { useState } from "react";
import React from 'react';
import * as Switch from '@radix-ui/react-switch';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div className="theme-toggle" onClick={handleToggle} style={{ display: 'flex', alignItems: 'center' }}>
      <label className="Label" htmlFor="dark-mode" style={{ paddingRight: 15 }}>
      </label>
      <Switch.Root className="SwitchRoot" id="dark-mode" >
        <Switch.Thumb className="SwitchThumb" />
      </Switch.Root>
    </div>
  );
};

export default ThemeToggle;
