import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastPreview.css";

export default function WeatherForecastPreview(props) {
  function hour() {
    let date = new Date(props.data.dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`;
  }

  function temp() {
    let temp = Math.round(props.data.main.temp);

    return `${temp}°C`;
  }

  return (
    <div className="WeatherForecastPreview col">
      {hour()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temp()}
    </div>
  );
}
