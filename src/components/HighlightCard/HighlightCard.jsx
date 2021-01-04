import React from "react";

const HighlightCard = ({
  heading,
  numberValue,
  measureSystem,
  FooterComponent = "",
}) => {
  const Footer = () => {
    return FooterComponent;
  };
  return (
    <div className="w-full bg-blue text-gray py-9 flex justify-center items-center flex-col min-w-min px-12 box-border">
      <div className="header text-normal font-medium m-0 p-0">{heading}</div>

      <h1 className="oldstyle-nums text-4xl font-bold m-0 p-0">
        {numberValue}
        <span className="text-2xl font-normal pl-4">{measureSystem}</span>
      </h1>

      <Footer />
    </div>
  );
};

export default HighlightCard;
