import React from "react";

const WeatherState = ({ weatherState }) => {
  return (
    <div className="weather-state text-gray-dark text-2xl text-center mt-0 ">
      {weatherState}
    </div>
  );
};

export default WeatherState;
