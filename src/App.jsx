import React from "react";

import MainSide from "./components/MainSide";
import SideBar from "./components/SideBar";

import { useSelector } from "react-redux";

const App = () => {
  const weatherData = useSelector((state) => state.weather.data);

  if (weatherData.length === 0) {
    return (
      <div className="mx-auto w-64 h-64 mt-80">
        <div>
          <img src="/loading.svg" alt="loading svg" />
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full m-0 p-0 flex flex-col lg:flex-row">
      <SideBar />

      <MainSide />
    </div>
  );
};

export default App;
