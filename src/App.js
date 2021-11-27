import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div id="app-container">
        <Weather />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;
