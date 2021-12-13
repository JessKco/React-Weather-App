import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function ShowFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ShowCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong id="tempNow">{Math.round(props.celsius)}</strong>
        <span className="units">
          ºC |{" "}
          <a
            href="/"
            onClick={ShowFahrenheit}
            style={{ textDecoration: "none" }}
          >
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <strong id="tempNow">{Math.round(fahrenheit)}</strong>
        <span className="units">
          <a href="/" onClick={ShowCelsius} style={{ textDecoration: "none" }}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </div>
    );
  }
}
