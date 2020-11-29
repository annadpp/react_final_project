import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      humid: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      desc: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "f3df4ec0c4d69b39170fad09eae23686";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <header className="row">
          <div className="col-7">
            <p>Weather App</p>
          </div>
          <div className="col-5">
            <div className="square"></div>
            <div className="square"></div>
            <div className="square"></div>
          </div>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn w-100" />
            </div>
          </div>
        </form>

        <div className="row">
          <div className="col-4 extra">
            <div className="row">
              <div className="col-6 btn2"></div>
              <div className="col-6 btn2"></div>
            </div>
            <div className="row next">➜ Next hours forecast</div>
            <div className="row">
              <WeatherForecast city={weatherData.city} />
            </div>
          </div>

          <div className="col-8 main">
            <WeatherInfo data={weatherData} />
          </div>
        </div>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
