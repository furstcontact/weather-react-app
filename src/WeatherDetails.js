import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherDetails(props) {
  return (
    <div className="WeatherDetails">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>
      <div className="row mt-4">
        <div className="col-6">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="weather-icon"
          />
          <span className="temperature">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 10%</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>{props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
