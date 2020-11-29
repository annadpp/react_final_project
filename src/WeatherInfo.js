import React from "react";
import FormattedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <div className="clearfix">
        <div className="float-left">
          <WeatherIcon code={props.data.icon} />
        </div>

        <div className="float-left">
          <WeatherTemp celsius={props.data.temp} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-6">
          <ul>
            <li>
              <FormattedDate date={props.data.date} />
            </li>
            <li className="text-capitalize">{props.data.desc}</li>
          </ul>
        </div>

        <div className="col-6">
          <ul>
            <li className="right">
              <img src="https://i.ibb.co/ZBxG7Z8/humid.png" alt="humid"></img>
              Humidity: {props.data.humid} %
            </li>
            <li className="right">
              <img src="https://i.ibb.co/bRWZDMf/wind.png" alt="wind"></img>
              Wind: {props.data.wind} km/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
