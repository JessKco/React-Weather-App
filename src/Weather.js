import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "London",
    temperature: 19,
    date: "Sunday 10:00",
    description: "Partly Cloudy",
    feels: 17,
    humidity: 76,
    wind: 3,
    img: "http://openweathermap.org/img/wn/10d@2x.png",
  };

  return (
    <div className="container">
      <div className="weatherApp">
        <form id="search-form" className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="City Name"
                className="form-control"
                id="search-bar"
              />
            </div>
            <div className="col-3">
              <input type="submit" value="search" className="btn" />
            </div>
          </div>
        </form>
        <div>
          <h1>{weatherData.city}</h1>
        </div>
        <div>
          <ul>
            <li id="date">{weatherData.date}</li>
            <li id="description">{weatherData.description}</li>
          </ul>
        </div>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img src={weatherData.img} alt="" id="icon" class="float-left" />
              <strong id="tempNow">{weatherData.temperature}</strong>
              <span className="units">
                <a href=" " id="celcius" className="active">
                  ºC
                </a>{" "}
                |
                <a href=" " className="fahrenheit" id="fahrenheit">
                  ºF
                </a>
              </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li className="feels">
                Feels like: <span id="feels-like">{weatherData.feels}</span>ºC
              </li>
              <li className="feels">
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li className="feels">
                Wind: <span id="wind">{weatherData.wind}</span>mph
              </li>
            </ul>
          </div>
        </div>
        <div className="weatherForecast" id="forecast"></div>
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
