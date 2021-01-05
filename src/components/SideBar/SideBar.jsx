import React from "react";

const SideBar = () => {
  return (
    <div className="w-full lg:w-2/5 bg-blue m-0  relative">
      <div className="w-full  ">
        <img
          src="images/Cloud-background.png"
          alt=""
          className="opacity-10 absolute -z-10 w-full transform scale-150 mt-40 sm:scale-75 sm:mt-16 lg:mt-40 lg:scale-150 select-none "
        />
      </div>

      <div className="py-96"></div>
    </div>
  );
};

export default SideBar;
