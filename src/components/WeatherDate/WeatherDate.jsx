import React from "react";

const WeatherDate = ({ day }) => {
  day = new Date(day).toDateString();
  day = day.split(" ");
  day.pop();

  return (
    <div className="weather-date text-gray-dark text-center mt-24 text-md">
      Today • {day.join(" ")}
    </div>
  );
};

export default WeatherDate;
