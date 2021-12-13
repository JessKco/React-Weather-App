import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="DailyForecast-day">{day()}</div>
      <div className="DailyForecast-icon">
        <WeatherIcon code={props.data.weather[0].icon} size={35} />
      </div>
      <div className="DailyForecast-temperature">
        <span className="temp-max">{Math.round(props.data.temp.max)}º</span>
        <span className="temp-min">{Math.round(props.data.temp.min)}º</span>
      </div>
    </div>
  );
}
