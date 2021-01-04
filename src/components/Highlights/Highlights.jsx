import React from "react";

import { useSelector } from "react-redux";

import HighlightCard from "../HighlightCard";
import { progressBar } from "../ProgressBar";

const Highlights = () => {
  const todayWeather = useSelector(
    (state) => state.weather.data.consolidated_weather[0]
  );

  const ProgressBar = progressBar(todayWeather.humidity);

  const directionCompass = () => {
    return (
      <h1 className="text-normal text-gray font-normal mt-8">
        <i className="fas fa-compass"></i> {todayWeather.wind_direction_compass}
      </h1>
    );
  };

  const DirectionCompass = directionCompass();

  return (
    <div>
      <h1 className="text-white text-lg mt-28 font-bold mb-12">
        Today’s Hightlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <HighlightCard
          heading="Wind status"
          numberValue={Math.floor(todayWeather.wind_speed)}
          measureSystem="mph"
          FooterComponent={DirectionCompass}
        />
        <HighlightCard
          heading="Humidity"
          numberValue={todayWeather.humidity}
          measureSystem="%"
          FooterComponent={ProgressBar}
        />
        <HighlightCard
          heading="Visibility"
          numberValue={Math.round(todayWeather.visibility * 10) / 10}
          measureSystem="miles"
        />
        <HighlightCard
          heading="Air Pressure"
          numberValue={todayWeather.air_pressure}
          measureSystem="mb"
        />
      </div>
    </div>
  );
};

export default Highlights;
