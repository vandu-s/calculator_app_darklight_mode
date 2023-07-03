import React, { useState } from "react";

import Header from "./components/Header/Header";
import Keypad from "./components/Keypad/Keypad";

import moonIcon from "./assets/moon.png";
import sunIcon from "./assets/sun.png";

import "./app.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const handleKeyPress = (keyCode, key) => {
    console.log(keyCode, key);
  };

  return (
    <div
      className="app"
      tabIndex="0"
      data-theme={isDarkMode ? "dark" : ""}
      onKeyDown={(e) => handleKeyPress(e.keyCode, e.key)}
    >
      <div className="app_calculator">
        <div className="app_calculator_navbar">
          <div className="app_calculator_navbar_toggle">
            <div
              className={`app_calculator_navbar_toggle_circle ${
                isDarkMode && "app_calculator_navbar_toggle_circle_active"
              }`}
              onClick={() => setIsDarkMode(!isDarkMode)}
            ></div>
          </div>
          <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />
        </div>
        <Header />
        <Keypad handleKeyPress={handleKeyPress} />
      </div>
    </div>
  );
}

export default App;
