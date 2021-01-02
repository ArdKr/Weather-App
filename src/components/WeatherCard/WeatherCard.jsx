import React from "react";

import WeatherImage from "../WeatherImage";

const WeatherCard = ({
  abbrevation = "c",
  day = "Tomorrow",
  minTemp = "7°C",
  maxTemp = "12°C",
}) => {
  return (
    <div className="bg-blue w-full flex flex-col items-center jusitfy-center text-gray pt-6 pb-6 text-normal font-medium">
      <p className="pb-4">{day}</p>

      <WeatherImage abbrevation={abbrevation} />

      <div className="flex justify-between gap-6 pt-12">
        <p className="max-temp">{maxTemp}</p>

        <p className="min-temp text-gray-dark">{minTemp}</p>
      </div>
    </div>
  );
};

export default WeatherCard;
