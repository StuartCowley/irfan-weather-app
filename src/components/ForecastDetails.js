import React from "react";
import PropTypes from "prop-types";

function ForecastDetails({ forecast }) {
  const { date, temperature, wind, humidity } = forecast;
  const formattedDate = new Date(date).toDateString();

  return (
    <div className="forecast-details" data-testid="forecast-details">
      <div className="forecast-details__date">Date: {formattedDate}</div>
      <div className="forecast-details__maxTemperature">
        Max Temp: {temperature.max}&deg;c
      </div>
      <div className="forecast-details__minTemperature">
        Min Temp: {temperature.min}&deg;c
      </div>
      <div className="forecast-details__windSpeed">
        Wind Speed: {wind.speed}mph
      </div>
      <div className="forecast-details__windDirection">
        Wind Direction: {wind.direction}
      </div>
      <div className="forecast-details__humidity">Humidity: {humidity}%</div>
    </div>
  );
}

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    temperature: PropTypes.shape({
      max: PropTypes.number,
      min: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
    humidity: PropTypes.number,
  }).isRequired,
};
