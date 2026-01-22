import React, { useState } from "react";
import WeatherDetails from "./WeatherDetails";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log("API Response:", response);
    console.log("Response data:", response.data);
    const data = response.data;

    setWeatherData({
      ready: true,
      temperature: data.temperature.current,
      humidity: data.temperature.humidity,
      date: new Date(data.time * 1000).toLocaleString(),
      wind: data.wind.speed,
      city: data.city,
      description: data.condition.description,
      icon: data.condition.icon,
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
    const apiKey = "ob891t57a434d702dd2b3463eb606aff";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherDetails data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
