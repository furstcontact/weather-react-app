import React from "react";

import "./WeatherForecast.css";
import Axios from "axios";

import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = React.useState(false);
  let [forecast, setForecast] = React.useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <WeatherForecastDay data={forecast[0]} />
          </div>
        </div>
      </div>
    );
  } else {
    if (props.coordinates) {
      let apiKey = "ob891t57a434d702dd2b3463eb606aff";
      let longitude = props.coordinates.longitude;
      let latitude = props.coordinates.latitude;
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
      Axios.get(apiUrl).then(handleResponse);
    }
  }
}
