import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div>
        <ul>
          <li id="date">
            <FormattedDate date={props.data.date} />
          </li>
          <li id="description">{props.data.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <span className="clearfix weather-temperature">
            <span className="float-left">
              <WeatherIcon
                code={props.data.icon}
                size={50}
                alt={props.data.description}
              />
            </span>
            <WeatherTemperature celsius={props.data.temperature} />
          </span>
        </div>
        <div className="col-6">
          <ul>
            <li className="feels">
              Feels like:{" "}
              <span id="feels-like">{Math.round(props.data.feels)}</span>ºC
            </li>
            <li className="feels">
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li className="feels">
              Wind: <span id="wind">{Math.round(props.data.wind)}</span>mph
            </li>
          </ul>
        </div>
      </div>
      <div className="weatherForecast" id="forecast"></div>
    </div>
  );
}
