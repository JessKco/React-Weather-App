import React, { useState } from "react";
import axios from "axios";
import "./styles.css";
import WeatherInfo from "./WeatherInfo";
import DailyForecast from "./DailyForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function getResponse(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      feels: response.data.main.feels_like,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="container">
        <div className="weatherApp">
          <form id="search-form" className="mb-3" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="City Name"
                  className="form-control"
                  id="search-bar"
                  onChange={handleCityChange}
                />
              </div>
              <div className="col-3">
                <input type="submit" value="Search" className="btn" />
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} />
          <DailyForecast coord={weatherData.coord} />
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
