import React from "react";

export const progressBar = () => {
  return (
    <div className="w-full max-w-2xl mt-4">
      <div className="flex justify-between">
        <span className="text-xl font-bold oldstyle-nums">0</span>
        <span className="text-xl font-bold oldstyle-nums">50</span>
        <span className="text-xl font-bold oldstyle-nums">100</span>
      </div>
      <div className="bg-gray w-full h-4 rounded-full mt-2">
        <div
          className="bg-yellow h-4 rounded-full"
          style={{ width: "70%" }}
        ></div>
      </div>

      <div className="flex justify-end mt-2">
        <span className="text-xl font-bold">%</span>
      </div>
    </div>
  );
};
