import React from "react";

const WeatherLocation = ({ location }) => {
  return (
    <div className="weather-location text-gray-dark text-center mt-12 text-md mb-24 lg:mb-0">
      <i className="fas fa-map-marker-alt"></i> {location}
    </div>
  );
};

export default WeatherLocation;
