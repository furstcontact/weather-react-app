import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

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
          <div className="float-left">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Precipitation: 10%</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>{props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
