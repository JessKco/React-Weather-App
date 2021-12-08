import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div id="app-container">
        <Weather defaultCity="London" />
      </div>
      <div className="me">
        <a
          href="https://github.com/JessKco/Vanilla-Weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open sourced code
        </a>
        by Jess Corbett
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
