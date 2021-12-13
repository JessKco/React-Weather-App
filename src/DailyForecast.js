import React, { useState, useEffect } from "react";
import "./DailyForecast.css";
import axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function DailyForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [daily, setDaily] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coord]);

  function handleResponse(response) {
    setDaily(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(daily);
    return (
      <div className="DailyForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={daily[0]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={daily[1]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={daily[2]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={daily[3]} />
          </div>
          <div className="col">
            <WeatherForecastDay data={daily[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2980ff43226d67e53abfcdb6d457dcc8";
    let longitude = props.coord.lon;
    let latitude = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
