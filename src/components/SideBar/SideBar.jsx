import React from "react";

import { useSelector } from "react-redux";

import Button from "../Button";
import WeatherImage from "../WeatherImage";

const SideBar = () => {
  const todayWeather = useSelector(
    (state) => state.weather.data.consolidated_weather[0]
  );

  const location = useSelector((state) => state.weather.data.title);

  return (
    <div className="w-full lg:w-2/5 bg-blue m-0  relative">
      {/* Export to component */}
      <div className="search p-12 flex justify-between">
        <Button color="gray-darker" onClick={alert}>
          Seach for places
        </Button>

        <Button
          color="gray-darker"
          onClick={alert}
          rounded={true}
          paddingEqual={true}
        >
          <i className="fas fa-map-marker-alt"></i>
        </Button>
      </div>

      {/* Export to component */}
      <div className="weather-image-wrapper flex justify-center items-center w-full pt-24 xl:pt-32 z-20">
        <div className="weather-image w-60 lg:w-96">
          <WeatherImage
            abbrevation={todayWeather.weather_state_abbr}
            height="200px"
            width="200px"
          />
        </div>
      </div>

      {/* Export to compoennt */}
      <div className="oldstyle-nums weather-temprature text-white text-center mt-0">
        <h1 className=" text-10xl">
          {Math.floor(todayWeather.the_temp)}
          <span className="text-8xl text-gray-dark">°C</span>
        </h1>
      </div>

      {/* Export to component */}
      <div className="weather-state text-gray-dark text-2xl text-center mt-0 ">
        {todayWeather.weather_state_name}
      </div>

      {/* Export to component */}
      <div className="weather-date text-gray-dark text-center mt-24 text-md">
        Today • 5 jun tds
      </div>

      {/* Export to component */}
      <div className="weather-location text-gray-dark text-center mt-12 text-md mb-24 lg:mb-0">
        <i className="fas fa-map-marker-alt"></i> {location}
      </div>

      {/* Export to component */}
      <div className="w-full absolute -z-10 top-64 sm:top-16 lg:top-64 ">
        <img
          src="images/Cloud-background.png"
          alt=""
          className="opacity-10  -z-10 w-full transform scale-150  sm:scale-75 lg:scale-150 select-none "
        />
      </div>
    </div>
  );
};

export default SideBar;
