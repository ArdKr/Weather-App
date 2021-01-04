import React from "react";

const WeatherImage = ({ abbrevation, height = "65px", width = "65px" }) => {
  // These chars are abbrevations from here: https://www.metaweather.com/api/
  const weatherImages = {
    sn: "Snow.png",
    sl: "Sleet.png",
    h: "Hail.png",
    t: "Thunderstorm.png",
    hr: "HeavyRain.png",
    lr: "LightRain.png",
    s: "Shower.png",
    hc: "HeavyCloud.png",
    lc: "LightCloud.png",
    c: "Clear.png",
  };
  return (
    <div className="w-28 h-28">
      <img
        src={`images/${weatherImages[abbrevation]}`}
        alt="Weather icon"
        height={height}
        width={width}
        className="object-fit"
      />
    </div>
  );
};

export default WeatherImage;
