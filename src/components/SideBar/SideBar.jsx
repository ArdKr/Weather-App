import React from "react";

import { useSelector } from "react-redux";

import SideBarWeatherImage from "../SideBarWeatherImage";
import SearchLocation from "../SearchLocation";
import TodayTemprature from "../TodayTemprature";
import WeatherState from "../WeatherState";
import WeatherDate from "../WeatherDate";
import WeatherLocation from "../WeatherLocation";
import SideBarCloudDesign from "../SideBarCloudDesign";

const SideBar = () => {
  const todayWeather = useSelector(
    (state) => state.weather.data.consolidated_weather[0]
  );

  const location = useSelector((state) => state.weather.data.title);

  return (
    <div className="w-full lg:w-2/5 bg-blue m-0  relative">
      <SearchLocation />

      <SideBarWeatherImage abbrevation={todayWeather.weather_state_abbr} />

      <TodayTemprature temprature={todayWeather.the_temp} />

      <WeatherState weatherState={todayWeather.weather_state_name} />

      <WeatherDate day={todayWeather.applicable_date} />

      <WeatherLocation location={location} />

      <SideBarCloudDesign />

    </div>
  );
};

export default SideBar;
