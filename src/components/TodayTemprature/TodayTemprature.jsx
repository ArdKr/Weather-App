import React from "react";

import { useSelector } from "react-redux";

const TodayTemprature = ({ temprature }) => {
  const currentSystem = useSelector((state) => state.weather.measurmentSystem);

  // If measurment system is Fahrenheit then convert the celcius to fahrenheit using (x°C * 1.8) + 32
  if (currentSystem === "F") {
    temprature = Math.floor(temprature * 1.8 + 32);
  }

  return (
    <div className="oldstyle-nums weather-temprature text-white text-center mt-0">
      <h1 className=" text-10xl">
        {Math.floor(temprature)}
        <span className="text-8xl text-gray-dark">°{currentSystem}</span>
      </h1>
    </div>
  );
};

export default TodayTemprature;
