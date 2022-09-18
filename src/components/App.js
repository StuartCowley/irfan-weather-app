import React from "react";
import "../styles/App.css";
import PropTypes from "prop-types";

import LocationDetails from "./LocationDetails";

function App({ location }) {
  const { city, country } = location;

  return (
    <div className="App">
      <LocationDetails city={city} country={country} />
    </div>
  );
}

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
  // do we need //
  forecasts: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
  }).isRequired,
};

export default App;
