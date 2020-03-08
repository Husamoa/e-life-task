import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ToggleTheme = () => {
  const { toggleTheme } = useContext(ThemeContext);
  const [icon, setIcon] = useState(true);

  const iconChange = () => {
    const newIcon = !icon;
    setIcon(newIcon);
  };

  return (
    <div className="toggle__box">
      <span>
        {icon ? (
          <p className="black">Light mode</p>
        ) : (
          <p className="white">Dark mode</p>
        )}
      </span>
      <div className="toggle__btn" onClick={toggleTheme}>
        <input type="checkbox" className="checkbox" onChange={iconChange} />
        <div className="circle" />
        <div className="layer" />
      </div>
    </div>
  );
};

export default ToggleTheme;
