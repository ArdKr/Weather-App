import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { updateMeasurmentSystem } from "../../services/redux/slices/weatherSlice";

const MeasurmentSystem = () => {
  const dispatch = useDispatch();
  const currentSystem = useSelector((state) => state.weather.measurmentSystem);

  //   Function that will update state to show temprature in Fahrenheit
  const toFahrenheit = () => {
    dispatch(updateMeasurmentSystem("F"));
  };

  //   Function that will update state to show temprature in celcius
  const toCelcius = () => {
    dispatch(updateMeasurmentSystem("C"));
  };

  const Button = ({ children, active = false, onClick }) => {
    let styleClasses;
    if (active === false) {
      styleClasses = "bg-blue text-gray";
    } else {
      styleClasses = "bg-gray text-blue-dark";
    }
    return (
      <button
        className={
          "flex justify-center items-center text-md font-bold p-4 rounded-full h-16 w-16 hover:bg-gray hover:text-blue-dark transition-all " +
          styleClasses
        }
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  return (
    <div className="flex justify-right gap-5 mb-24  float-right">
      <Button onClick={toCelcius} active={currentSystem === "C"}>
        °C
      </Button>
      <Button onClick={toFahrenheit} active={currentSystem === "F"}>
        °F
      </Button>
    </div>
  );
};

export default MeasurmentSystem;
