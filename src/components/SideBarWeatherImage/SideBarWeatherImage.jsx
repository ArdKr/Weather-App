import React from "react";

import WeatherImage from "../WeatherImage";

const SideBarWeatherImage = ({ abbrevation }) => {
  return (
    <div className="weather-image-wrapper flex justify-center items-center w-full pt-24 xl:pt-32 z-20">
      <div className="weather-image w-60 lg:w-96">
        <WeatherImage
          abbrevation={abbrevation}
          height="200px"
          width="200px"
        />
      </div>
    </div>
  );
};

export default SideBarWeatherImage;
