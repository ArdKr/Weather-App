import React, { useState } from "react";

import { useSelector } from "react-redux";

// Components
import WeatherCard from "../WeatherCard";
import MeasurmentSystem from "../MeasurmentSystem";

const WeekWeatherCards = () => {
  const [datedWeather, setDatedWeather] = useState([]);
  //   Replace later with redux, because this is needed in other components too
  const [measurment, setMeasurment] = useState("°C");

  const dailyWeather = useSelector(
    (state) => state.weather.data["consolidated_weather"]
  );

  if (dailyWeather !== undefined && datedWeather.length === 0) {
    const dailyWeatherArray = [...dailyWeather];
    dailyWeatherArray.shift();
    setDatedWeather(dailyWeatherArray);
  }

  if (dailyWeather === undefined) {
    return null;
  }

  return (
    <div className="div">
      <div className="text-white w-full container mx-auto">
        <MeasurmentSystem />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
        {datedWeather.map((today) => {
          //   Format date
          let day = new Date(today.applicable_date).toDateString();
          day = day.split(" ");
          day.pop();
          return (
            <WeatherCard
              abbrevation={today.weather_state_abbr}
              key={today.id}
              day={day.join(" ")}
              minTemp={Math.floor(today.min_temp) + measurment}
              maxTemp={Math.floor(today.max_temp) + measurment}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WeekWeatherCards;
