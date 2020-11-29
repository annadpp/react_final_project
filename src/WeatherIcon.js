import React from "react";
import "./WeatherIcon.css";

export default function WeatherIcon(props) {
  const imgCode = {
    "01d": "https://i.ibb.co/VTGV5NL/01d.png",
    "01n": "https://i.ibb.co/9NXYZFz/01n.png",
    "02d": "https://i.ibb.co/mSW5csv/02d.png",
    "02n": "https://i.ibb.co/k0YcQQ8/02n.png",
    "03d": "https://i.ibb.co/TvpvP51/03d.png",
    "03n": "https://i.ibb.co/TvpvP51/03d.png",
    "04d": "https://i.ibb.co/2qfmq37/04d.png",
    "04n": "https://i.ibb.co/2qfmq37/04d.png",
    "09d": "https://i.ibb.co/nkYbh10/09d.png",
    "09n": "https://i.ibb.co/nkYbh10/09d.png",
    "10d": "https://i.ibb.co/NV4T4pJ/10d.png",
    "10n": "https://i.ibb.co/D1XqVq7/10n.png",
    "11d": "https://i.ibb.co/z6P33fr/11d.png",
    "11n": "https://i.ibb.co/z6P33fr/11d.png",
    "13d": "https://i.ibb.co/cwRtvjW/13d.png",
    "13n": "https://i.ibb.co/cwRtvjW/13d.png",
    "50d": "https://i.ibb.co/WWdffr2/50n.png",
    "50n": "https://i.ibb.co/WWdffr2/50n.png",
  };

  return <img className="big" src={imgCode[props.code]} alt="description" />;
}
