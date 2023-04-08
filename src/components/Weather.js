import React from 'react';
import Header from './Header';
import './Weather.css';

const Weather = ({ weatherData, location }) => {

  const renderForecast = () => {
    const forecast = weatherData.slice(0, 8); // Get the first 8 data points (24-hour forecast)
    return forecast.map((data, index) => {
      const time = new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Get the time in 12-hour format
      return (
        <div key={index} className="forecast-item">
          <h3>{time}</h3>
          <p>Temperature: {data.main.temp} &deg;C</p>
          <p>Wind Speed: {(data.wind.speed * 1.94384449).toFixed(2)} knots</p>
          <p>Wind Gusts: {(data.wind.gust * 1.94384449).toFixed(2)} knots</p>
        </div>
      );
    });
  }

  return (
    <>
      <Header />
      <div className="weather-container">
        <h2>24-hour Forecast for {location}</h2>
        {renderForecast()}
      </div>
    </>
  );
};

export default Weather;
