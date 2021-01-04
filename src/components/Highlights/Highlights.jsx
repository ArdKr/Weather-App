import React from "react";

import HighlightCard from "../HighlightCard";
import { progressBar } from "../ProgressBar";

const directionCompass = () => {
  return (
    <h1 className="text-normal text-gray font-normal mt-8">
      <i className="fas fa-compass"></i> wsw
    </h1>
  );
};

const DirectionCompass = directionCompass();
const ProgressBar = progressBar();

const Highlights = () => {
  return (
    <div>
      <h1 className="text-white text-lg mt-28 font-bold mb-12">
        Today’s Hightlights
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        <HighlightCard
          heading="Wind status"
          numberValue="7"
          measureSystem="mph"
          FooterComponent={DirectionCompass}
        />
        <HighlightCard
          heading="Humidity"
          numberValue="84"
          measureSystem="%"
          FooterComponent={ProgressBar}
        />
        <HighlightCard
          heading="Visibility"
          numberValue="6,4"
          measureSystem="miles"
        />
        <HighlightCard
          heading="Air Pressure"
          numberValue="998"
          measureSystem="mb"
        />
      </div>
    </div>
  );
};

export default Highlights;
