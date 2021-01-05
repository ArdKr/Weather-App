import React from "react";

import WeekWeatherCards from "../WeekWeatherCards";
import Highlights from "../Highlights";
import Footer from "../Footer";

const MainSide = () => {
  return (
    <div className="z-10 w-full bg-blue-dark">
      <div className="container mx-auto  py-16 px-20 pb-0 md:px-0 lg:px-small-container xl:px-container ">
      <WeekWeatherCards />

<Highlights />

<Footer />
      </div>
     
    </div>
  );
};

export default MainSide;
