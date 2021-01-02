import React from "react";

import WeatherImage from "../WeatherImage";

import { useSelector } from "react-redux";

const WeatherCard = ({
  abbrevation = "c",
  day = "Tomorrow",
  minTemp = "7°C",
  maxTemp = "12°C",
}) => {
  const currentSystem = useSelector((state) => state.weather.measurmentSystem);

  // If measurment system is Fahrenheit then convert the celcius to fahrenheit using (x°C * 1.8) + 32
  if (currentSystem === "F") {
    minTemp = Math.floor(minTemp * 1.8 + 32);
    maxTemp = Math.floor(maxTemp * 1.8 + 32);
  }

  return (
    <div className="bg-blue w-full min-w-min flex flex-col items-center jusitfy-center text-gray pt-6 pb-6 text-normal font-medium">
      <p className="pb-4">{day}</p>

      <WeatherImage abbrevation={abbrevation} />

      <div className="flex justify-between gap-6 pt-12">
        <p className="max-temp">{`${maxTemp}°${currentSystem}`}</p>

        <p className="min-temp text-gray-dark">{`${minTemp}°${currentSystem}`}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
