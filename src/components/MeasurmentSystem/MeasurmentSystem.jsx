import React from "react";

const MeasurmentSystem = () => {
  const Button = ({ children, active = false }) => {
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
      >
        {children}
      </button>
    );
  };
  return (
    <div className="flex items-right gap-5">
      <Button>°C</Button>
      <Button>°F</Button>
    </div>
  );
};

export default MeasurmentSystem;
