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
          <div className="clearfix weather-temperature">
            <div className="float-left">
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li className="feels">
              Feels like: <span id="feels-like">{props.data.feels}</span>ºC
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
