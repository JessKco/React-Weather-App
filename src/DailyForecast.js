import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";
import axios from "axios";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Mon</div>
          <div className="DailyForecast-icon">
            <WeatherIcon code="01d" size={35} />
          </div>
          <div className="DailyForecast-temperature">
            <span className="temp-max">20º</span>
            <span className="temp-min">12º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
