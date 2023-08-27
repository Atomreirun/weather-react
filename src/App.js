import React from "react";
import Weather from "./Weather";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer>
        <small>
          This project is coded by Arlene Runyon and is {""}
          <a href="https://github.com/Atomreirun/weather-react">
            Open-sourced on Github {""}
          </a>
        </small>
      </footer>
    </div>
  );
}

export default App;
