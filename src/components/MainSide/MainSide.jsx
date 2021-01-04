import React from "react";

import WeekWeatherCards from "../WeekWeatherCards";
import Highlights from "../Highlights";

const MainSide = () => {
  return (
    <div className="container mx-auto py-16 px-20 md:px-0 lg:px-small-container xl:px-container">
      <WeekWeatherCards />

      <Highlights />
    </div>
  );
};

export default MainSide;
